const envUrl = import.meta.env.VITE_API_URL
const isLocal = typeof window !== 'undefined' && (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
const BASE_URL = envUrl || (isLocal ? 'http://localhost:4000/api/v1' : 'https://daracorp-backend.onrender.com/api/v1')

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

export async function getCourses() {
  const res = await fetch(`${BASE_URL}/courses`)
  if (!res.ok) throw new Error('Failed to load courses')
  return res.json()
}
