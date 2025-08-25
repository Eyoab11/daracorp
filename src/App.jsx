import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Dashboard } from './pages/Dashboard';
import Home from './pages/Home';
import { trainings as defaultTrainings } from './data/trainings';

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}

function Shell() {
  const location = useLocation();
  // language persistence
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('dc_lang') || 'en'; } catch { return 'en'; }
  });

  useEffect(() => {
    try { localStorage.setItem('dc_lang', lang); } catch {}
    document.documentElement.setAttribute('lang', lang === 'am' ? 'am' : 'en');
  }, [lang]);

  const ui = useMemo(() => ({
    en: {
      brand: 'DaraCorp',
      subtitle: 'Compliance Training',
      nav: { courses: 'Courses', platform: 'AfroLMS', why: 'Why DaraCorp', contact: 'Contact' },
      badge: 'All sectors • Ethiopia‑ready',
      heroTitle: 'Modern compliance training for Ethiopian organizations',
      heroBody: 'Engaging, role‑specific courses mapped to local regulations and global best practice—delivered as short videos, role‑plays, and assessments.',
      libraryTitle: 'Core training library',
      libraryHint: 'Swipe or use arrows',
      platformTitle: 'AfroLMS – the platform behind DaraCorp',
      platformDesc: 'AfroLMS is a modern learning platform built for African enterprises. It supports blended learning, video lessons, quizzes, certificates, multilingual delivery, and detailed analytics. Host DaraCorp courses on your existing AfroLMS tenant or let us provision one for you.',
      platformFeatures: [
        { title: 'SCORM & xAPI', desc: 'Upload SCORM/xAPI packages and track attempts, scores, and completion dates.' },
        { title: 'User Management', desc: 'Bulk enrollments, groups, and role-based permissions with audit logs.' },
        { title: 'Assessments', desc: 'Question banks, randomized quizzes, passing scores, and retake limits.' },
        { title: 'Certificates', desc: 'Auto-issued certificates with expiry and renewal reminders.' },
        { title: 'Integrations', desc: 'Single sign-on, email, and webhooks for HR and compliance systems.' },
        { title: 'Reports & Dashboards', desc: 'Progress, completion, and exception reports exportable to CSV/PDF.' },
      ],
      whyTitle: 'Why DaraCorp',
      whySubtitle: 'The DaraCorp advantage for your organization.',
      whyFeatures: [
        { title: 'Directive-mapped', desc: 'Each module references relevant Ethiopian directives and includes local role plays.' },
        { title: 'Built for adoption', desc: 'Short lessons, clear takeaways, and assessments boost completion and retention.' },
        { title: 'Easy to roll out', desc: 'Host on your LMS or ours. SCORM/xAPI exports and simple user provisioning.' },
        { title: 'Audit-ready records', desc: 'Completion, scores, attempt history, and certificates—downloadable for inspections.' },
        { title: 'Local support', desc: 'Implementation help, localization, and customization for Ethiopian institutions.' },
        { title: 'Secure by design', desc: 'Privacy, role-based access, and least-privilege controls aligned to best practice.' },
      ],
      sectorsTitle: 'Sectors we serve',
      sectorsSubtitle: "Tailored solutions for your industry's unique challenges.",
      sectors: [
        { title: 'Hospitality', desc: 'Guest data privacy, food safety, cash handling, anti-bribery, incident reporting, vendor screening.' },
        { title: 'Insurance', desc: 'KYC/AML for policyholders, claims fraud detection, suitability and disclosure, agent conduct.' },
        { title: 'Construction', desc: 'HSE, contractor due diligence, site induction, anti-corruption, environmental compliance.' },
        { title: 'NGO', desc: 'Safeguarding, grant compliance, anti-terrorism due diligence, data protection, whistleblowing.' },
        { title: 'Government', desc: 'Public procurement integrity, records management, information security, ethics and conduct.' },
        { title: 'Banking, Finance & Capital Markets', desc: 'KYC/CDD, AML/CFT, insider trading prevention, market abuse detection, fraud risk management, cybersecurity, and data protection.' },
      ],
      contactTitle: 'See DaraCorp in action',
      contactBody: 'Get a guided tour, pricing, and a pilot for your team. We’ll map courses to your roles and policies.',
      form: {
        name: 'Full name',
        email: 'Work email',
        org: 'Organization',
        msg: 'Tell us your priorities (e.g., AML/KYC refresh for advisory)',
        btn: 'Request demo',
        disclaimer: 'By submitting, you agree to be contacted about DaraCorp products and services.'
      },
      labels: { browse: 'Browse' },
      footerLinks: ['Privacy', 'Terms', 'Security']
      ,
      cta: {
        title: 'Ready to elevate compliance at your organization?',
        body: 'Join leading Ethiopian teams delivering modern, directive-mapped training with DaraCorp and AfroLMS.',
        primary: 'Get a demo',
        secondary: 'Browse courses'
      }
    },
    am: {
      brand: 'ዳራኮርፕ',
      subtitle: 'የሕግ ተገዢነት ስልጠና',
      nav: { courses: 'ኮርሶች', platform: 'አፍሮ ኤል ኤም ኤስ', why: 'ለምን ዳራኮርፕ?', contact: 'ግንኙነት' },
      badge: 'ለሁሉም ዘርፎች • ለኢትዮጵያ ዝግጁ',
      heroTitle: 'ለኢትዮጵያ ተቋማት ዘመናዊ የህግ ተገዢነት ስልጠና',
      heroBody: 'አጫጭር ቪዲዮዎች፣ ሚና-ተጫዋች ልምምዶች እና ግምገማዎች በመጠቀም ለአካባቢያዊ ደንቦች እና ለአለምአቀፍ ምርጥ ተሞክሮዎች የተዘጋጁ አሳታፊ እና ለተወሰኑ ሚናዎች ተስማሚ የሆኑ ኮርሶች፡፡',
      libraryTitle: 'ዋና የስልጠና ኮርሶች',
      libraryHint: 'ለማንሸራተት ቀስቶችን ይጠቀሙ',
      platformTitle: 'አፍሮ ኤል ኤም ኤስ – የዳራኮርፕ ዋና መድረክ',
      platformDesc: 'አፍሮ ኤል ኤም ኤስ ለአፍሪካ ኩባንያዎች የተገነባ ዘመናዊ የመማሪያ መድረክ ነው፡፡ የተቀናጀ ትምህርት፣ የቪዲዮ ትምህርቶች፣ ፈተናዎች፣ የምስክር ወረቀቶች፣ በብዙ ቋንቋዎች የማስተማር እና ዝርዝር ትንታኔዎችን ይደግፋል፡፡',
      platformFeatures: [
        { title: 'SCORM & xAPI', desc: 'Upload SCORM/xAPI packages and track attempts, scores, and completion dates.' },
        { title: 'User Management', desc: 'Bulk enrollments, groups, and role-based permissions with audit logs.' },
        { title: 'Assessments', desc: 'Question banks, randomized quizzes, passing scores, and retake limits.' },
        { title: 'Certificates', desc: 'Auto-issued certificates with expiry and renewal reminders.' },
        { title: 'Integrations', desc: 'Single sign-on, email, and webhooks for HR and compliance systems.' },
        { title: 'Reports & Dashboards', desc: 'Progress, completion, and exception reports exportable to CSV/PDF.' },
      ],
      whyTitle: 'ለምን ዳራኮርፕ?',
      whySubtitle: 'የዳራኮርፕ ጥቅሞች ለድርጅትዎ።',
      whyFeatures: [
        { title: 'Directive-mapped', desc: 'Each module references relevant Ethiopian directives and includes local role plays.' },
        { title: 'Built for adoption', desc: 'Short lessons, clear takeaways, and assessments boost completion and retention.' },
        { title: 'Easy to roll out', desc: 'Host on your LMS or ours. SCORM/xAPI exports and simple user provisioning.' },
        { title: 'Audit-ready records', desc: 'Completion, scores, attempt history, and certificates—downloadable for inspections.' },
        { title: 'Local support', desc: 'Implementation help, localization, and customization for Ethiopian institutions.' },
        { title: 'Secure by design', desc: 'Privacy, role-based access, and least-privilege controls aligned to best practice.' },
      ],
      sectorsTitle: 'የምን አገልግሎት እንሰጣለን',
      sectorsSubtitle: 'ለኢንዱስትሪዎ የተስተካከሉ መፍትሄዎች፣ ለተለያዩ ፈታኝ ፈተናዎች።',
      sectors: [
        { title: 'Hospitality', desc: 'Guest data privacy, food safety, cash handling, anti-bribery, incident reporting, vendor screening.' },
        { title: 'Insurance', desc: 'KYC/AML for policyholders, claims fraud detection, suitability and disclosure, agent conduct.' },
        { title: 'Construction', desc: 'HSE, contractor due diligence, site induction, anti-corruption, environmental compliance.' },
        { title: 'NGO', desc: 'Safeguarding, grant compliance, anti-terrorism due diligence, data protection, whistleblowing.' },
        { title: 'Government', desc: 'Public procurement integrity, records management, information security, ethics and conduct.' },
        { title: 'Banking, Finance & Capital Markets', desc: 'KYC/CDD, AML/CFT, insider trading prevention, market abuse detection, fraud risk management, cybersecurity, and data protection.' },
      ],
      contactTitle: 'ዳራኮርፕን በተግባር ይመልከቱ',
      contactBody: 'ለቡድንዎ የተመራ ጉብኝት፣ የዋጋ አሰጣጥ እና የሙከራ ፕሮግራም ያግኙ፡፡ ኮርሶችን ከእርስዎ ሚናዎች እና ፖሊሲዎች ጋር እናስተካክላለን፡፡',
      form: {
        name: 'ሙሉ ስም',
        email: 'የሥራ ኢሜይል',
        org: 'ተቋም',
        msg: 'ቅድሚያ የሚሰጧቸውን ነገሮች ይንገሩን (ለምሳሌ፣ ለምክር አገልግሎት የ AML/KYC እድሳት)',
        btn: 'የሙከራ ማሳያ ይጠይቁ',
        disclaimer: 'ይህን በማስገባትዎ ስለ ዳራኮርፕ ምርቶች እና አገልግሎቶች እንዲገናኙ ተስማምተዋል፡፡'
      },
      labels: { browse: 'ኮርሶችን ያስሱ' },
      footerLinks: ['ግላዊነት', 'ውሎች', 'ደህንነት'],
      cta: {
        title: 'ድርጅትዎ የህግ ተገዢነትን ለማሻሻል ዝግጁ ነዎት?',
        body: 'ከዳራኮርፕ እና AfroLMS ጋር ዘመናዊ፣ ከመመሪያ ጋር የተያያዘ ስልጠና የሚያቀርቡ ኢትዮጵያዊ ቡድኖች ይቀላቀሉ።',
        primary: 'የሙከራ ማሳያ ይጠይቁ',
        secondary: 'ኮርሶችን ያስሱ'
      }
    },
  }), []);

  const t = (key) => key.split('.').reduce((acc, k) => (acc ? acc[k] : undefined), ui[lang]);

  const trainings = useMemo(() => defaultTrainings, []);

  const onScrollTo = (id) => {
    if (window.location.pathname !== '/') window.history.pushState({}, '', '/');
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 60);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
  <Navbar lang={lang} t={t} onScrollTo={onScrollTo} setLang={setLang} />

      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home lang={lang} ui={ui} trainings={trainings} t={t} setLang={setLang} />} />
          <Route path="/dashboard" element={<Dashboard trainings={trainings} lang={lang} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>

      <Footer t={t} />
    </div>
  );
}