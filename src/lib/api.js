const envUrl = import.meta.env.VITE_API_URL
const isLocal = typeof window !== 'undefined' && (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
const BASE_URL = envUrl || (isLocal ? 'http://localhost:4000/api/v1' : 'https://daracorp-backend.onrender.com/api/v1')

// Small fetch helper with timeout and JSON parsing
async function fetchJson(url, opts = {}) {
  const controller = new AbortController()
  const timeout = opts.timeout ?? 8000
  const id = setTimeout(() => controller.abort(), timeout)
  try {
    const res = await fetch(url, { ...opts, signal: controller.signal })
    if (!res.ok) {
      let err = 'Request failed'
      try { const j = await res.json(); err = j.error || err } catch {}
      throw new Error(err)
    }
    return res.json()
  } finally {
    clearTimeout(id)
  }
}

export async function createContact(payload) {
  const res = await fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error((await res.json()).error || 'Failed')
  return res.json()
}

export async function createLead(payload) {
  const res = await fetch(`${BASE_URL}/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error((await res.json()).error || 'Failed')
  return res.json()
}

// Cache config and helpers (SWR: cache-first, revalidate in background)
const LS_KEY_COURSES = 'dc_courses_v1'
const COURSES_TTL_MS = 10 * 60 * 1000 // 10 minutes
let coursesMem = null
let coursesMemTs = 0
let coursesRevalidating = false

function readLS(key) {
  try { return localStorage.getItem(key) } catch { return null }
}
function writeLS(key, val) {
  try { localStorage.setItem(key, val) } catch {}
}

export function getCachedCourses() {
  // Prefer memory if fresh
  const now = Date.now()
  if (coursesMem && now - coursesMemTs < COURSES_TTL_MS) return coursesMem
  const raw = readLS(LS_KEY_COURSES)
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw)
    coursesMem = Array.isArray(parsed.data) ? parsed.data : null
    coursesMemTs = Number(parsed.ts || 0)
    return coursesMem
  } catch {
    return null
  }
}

function setCoursesCache(data) {
  coursesMem = data
  coursesMemTs = Date.now()
  writeLS(LS_KEY_COURSES, JSON.stringify({ ts: coursesMemTs, data }))
}

async function revalidateCourses() {
  if (coursesRevalidating) return
  coursesRevalidating = true
  try {
    const data = await fetchJson(`${BASE_URL}/courses`, { timeout: 10000 })
    if (Array.isArray(data)) setCoursesCache(data)
  } catch {
    // ignore background revalidation errors
  } finally {
    coursesRevalidating = false
  }
}

export function prefetchCourses() {
  // Kick off a background revalidation without awaiting
  // Useful on app load or route hover
  void revalidateCourses()
}

export async function getCourses(options = {}) {
  const preferCache = options.preferCache !== false
  const now = Date.now()
  // 1) Serve fresh memory cache
  if (preferCache && coursesMem && now - coursesMemTs < COURSES_TTL_MS) {
    // Refresh in background
    revalidateCourses()
    return coursesMem
  }
  // 2) Serve localStorage cache instantly if present
  if (preferCache) {
    const cached = getCachedCourses()
    if (cached) {
      revalidateCourses()
      return cached
    }
  }
  // 3) Fallback to network with timeout
  try {
    const data = await fetchJson(`${BASE_URL}/courses`, { timeout: 10000 })
    if (Array.isArray(data)) setCoursesCache(data)
    return data
  } catch (err) {
    // 4) On network error, last resort: serve any stale cache
    const stale = getCachedCourses()
    if (stale) return stale
    throw err
  }
}
