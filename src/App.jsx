import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Dashboard } from './pages/Dashboard';
import Home from './pages/Home';
import Courses from './pages/Courses';
import AfroLMS from './pages/AfroLMS';
import Why from './pages/Why';
import Contact from './pages/Contact';
import Demo from './pages/Demo';
import CourseDetails from './pages/CourseDetails';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Security from './pages/Security';
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
      nav: { home: 'Home', courses: 'Courses', platform: 'AfroLMS', why: 'Why DaraCorp', contact: 'Contact', demo: 'Get a demo' },
      badge: 'All sectors • Ethiopia‑ready',
      heroTitle: 'Modern compliance training for Ethiopian organizations',
      heroBody: 'Engaging, role‑specific courses mapped to local regulations and global best practice—delivered as short videos, role‑plays, and assessments.',
  libraryTitle: 'Featured courses',
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
      afrolms: {
        hero: {
          titleAfro: 'Afro',
          titleLMS: 'LMS',
          titleSuffix: ' — the platform behind DaraCorp',
          body: 'A modern learning management system built for African enterprises. Support blended learning, SCORM/xAPI, quizzes, certificates, multilingual delivery, SSO, and detailed analytics.',
          ctaDemo: 'Request demo',
          ctaVisit: 'Visit afrolms.com'
        },
        features: {
          title: 'Everything you need for training at scale',
          subtitle: 'Built‑in authoring, powerful delivery, and deep visibility — all in a sleek, simple interface.',
          mediaBadgeTop: 'Dashboard preview',
          mediaBadgeBottom: 'Reports & Insights',
          mediaText: 'Visualize completions, exceptions, and trends. Export evidence for audits in one click.',
          items: [
            { t: 'SCORM & xAPI', d: 'Upload standards‑compliant packages and track attempts, scores, and completion.' },
            { t: 'Assessments', d: 'Question banks, randomized quizzes, retake limits, pass scores, and analytics.' },
            { t: 'Certificates', d: 'Auto‑issued certificates with expiries, renewal windows, and reminders.' },
            { t: 'User management', d: 'Bulk enrollments, groups, RBAC, and full audit logs.' },
          ],
          stats: {
            uptime: 'uptime',
            learners: 'learners delivered',
            orgs: 'organizations',
            support: 'support'
          }
        },
        experience: {
          title: 'A simple experience users love',
          subtitle: 'Fast search, clean course pages, mobile‑friendly, and localized delivery.',
          mobileTitle: 'Mobile & offline ready',
          mobileDesc: 'Responsive UI with support for low‑bandwidth environments and resumable sessions.',
          l10nTitle: 'Localization & accessibility',
          l10nDesc: 'Deliver content in multiple languages with accessible components and captions.'
        },
        solutions: {
          title: 'Solutions for every sector',
          subtitle: 'Government • University • NGO • Private',
          items: {
            Government: { t: 'Government', d: 'Public procurement integrity, information security, and training at population scale.' },
            University: { t: 'University', d: 'Semester delivery, assessments, and analytics for faculty and students.' },
            NGO: { t: 'NGO', d: 'Safeguarding, donor compliance, and distributed field team enablement.' },
            Private: { t: 'Private', d: 'Role‑based learning for banks, insurers, healthcare, construction, and more.' }
          }
        },
        security: {
          title: 'Enterprise‑grade security',
          subtitle: 'Role‑based access control, encrypted transport, frequent backups, and audit logs.',
          items: [
            { t: 'RBAC', d: 'Fine‑grained permissions for admins, instructors, managers, and learners.' },
            { t: 'Data protection', d: 'TLS in transit, encrypted backups, and data retention controls.' },
            { t: 'Audit & compliance', d: 'Comprehensive logs, exception reporting, and exportable evidence.' }
          ]
        }
      },
      labels: { browse: 'Browse' },
      footerLinks: ['Privacy', 'Terms', 'Security']
      ,
      footer: {
        explore: 'Explore',
        legal: 'Legal',
        getStarted: 'Get started',
        getStartedBody: 'See DaraCorp in action for your team.',
        tagline: 'Modern compliance training tailored for Ethiopian organizations.',
        powered: 'Training delivery is powered by AfroLMS — enrollment, tracking, and certification.',
        copyright: 'All rights reserved.'
      },
      demo: {
        title: 'Get a demo',
        body: 'See DaraCorp and AfroLMS in action. Tell us a bit about your team and goals, and we’ll reach out to schedule.',
        sidebarTitle: "What you’ll get",
        sidebarItems: [
          '30–45 min live walkthrough',
          'Mapping to your roles/policies',
          'Pilot plan and pricing',
          'Q&A with our team',
        ],
        sidebarEmailPrefix: 'Prefer email? Write to',
        form: {
          firstName: 'First name',
          lastName: 'Last name',
          email: 'Work email',
          org: 'Organization',
          role: 'Role',
          size: 'Team size',
          sizeOptions: ['1–50','51–200','201–1000','1000+'],
          interestsTitle: 'Areas of interest',
          interestsOptions: [
            'AML/KYC & Anti‑corruption',
            'Data protection & privacy',
            'AfroLMS platform',
            'Reporting & analytics',
          ],
          timeTitle: 'Preferred time',
          timeOptions: ['Morning','Afternoon','Evening','No preference'],
          phone: 'Phone (optional)',
          message: 'Message',
          messagePh: 'Tell us about your use case, timelines, and any requirements',
          consentPrefix: 'I agree to be contacted about DaraCorp products and services. See our',
          privacy: 'Privacy Policy',
          btnIdle: 'Request demo',
          btnSubmitting: 'Submitting…',
          btnSuccess: 'Thanks! We’ll be in touch',
        }
      },
      courses: {
        heroTitle: 'Explore DaraCorp Courses',
        heroBody: 'Directive‑mapped learning built for Ethiopian organizations—short videos, role‑plays, and assessments.',
        searchPlaceholder: 'Search courses',
        searchBtn: 'Search',
        all: 'All',
        categories: {
          Compliance: 'Compliance',
          Conduct: 'Conduct',
          Privacy: 'Privacy',
          Security: 'Security',
          HSE: 'HSE',
          People: 'People'
        },
        levels: {
          Beginner: 'Beginner',
          Intermediate: 'Intermediate',
          Advanced: 'Advanced'
        },
        units: { min: 'min', modules: 'modules' },
        buttons: { preview: 'Preview', details: 'Details →' }
      },
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
      nav: { home: 'መነሻ', courses: 'ኮርሶች', platform: 'አፍሮ ኤል ኤም ኤስ', why: 'ለምን ዳራኮርፕ?', contact: 'አግኙን', demo: 'የሙከራ ማሳያ ይጠይቁ' },
      badge: 'ለሁሉም ዘርፎች • ለኢትዮጵያ ዝግጁ',
      heroTitle: 'ለኢትዮጵያ ተቋማት ዘመናዊ የህግ ተገዢነት ስልጠና',
      heroBody: 'አጫጭር ቪዲዮዎች፣ ሚና-ተጫዋች ልምምዶች እና ግምገማዎች በመጠቀም ለአካባቢያዊ ደንቦች እና ለአለምአቀፍ ምርጥ ተሞክሮዎች የተዘጋጁ አሳታፊ እና ለተወሰኑ ሚናዎች ተስማሚ የሆኑ ኮርሶች፡፡',
  libraryTitle: 'የተመረጡ ኮርሶች',
      libraryHint: 'ለማንሸራተት ቀስቶችን ይጠቀሙ',
      platformTitle: 'አፍሮ ኤል ኤም ኤስ – የዳራኮርፕ ዋና መድረክ',
      platformDesc: 'አፍሮ ኤል ኤም ኤስ ለአፍሪካ ኩባንያዎች የተገነባ ዘመናዊ የመማሪያ መድረክ ነው፡፡ የተቀናጀ ትምህርት፣ የቪዲዮ ትምህርቶች፣ ፈተናዎች፣ የምስክር ወረቀቶች፣ በብዙ ቋንቋዎች የማስተማር እና ዝርዝር ትንታኔዎችን ይደግፋል፡፡',
      platformFeatures: [
        { title: 'SCORM & xAPI', desc: 'የ SCORM/xAPI ፓኬጆችን ይጫኑ እና ሙከራዎች፣ ነጥቦች እና የመጨረሻ ቀኖችን ይከታተሉ።' },
        { title: 'የተጠቃሚ አስተዳደር', desc: 'ብዛት ምዝገባዎች፣ ቡድኖች እና በሚና የተመሰረቱ ፍቃዶች ከኦዲት መዝገቦች ጋር።' },
        { title: 'ግምገማዎች', desc: 'የጥያቄ ባንኮች፣ የተዘረጋ ክዊዚዎች፣ የመለፈጫ ነጥቦች እና የመደገመያ ገደቦች።' },
        { title: 'ምስክር ወረቀቶች', desc: 'በራስ-ሰር የሚሰጡ ምስክር ወረቀቶች ከጊዜ መብት ማብቂያ እና የእድሳት አስታዋሾች ጋር።' },
        { title: 'ማቀናበር', desc: 'ነጠላ መግቢያ (SSO)፣ ኢሜይል እና ዌብሁክስ ለ HR እና ለተገዢነት ስርዓቶች።' },
        { title: 'ሪፖርቶች እና ዳሽቦርዶች', desc: 'እድገት፣ ጨረሳ እና ልዩነት ሪፖርቶች ወደ CSV/PDF የሚሰወሩ።' },
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
        { title: 'እንግዳ አገልግሎት', desc: 'የእንግዳ መረጃ ግላዊነት፣ የምግብ ደህንነት፣ የገንዘብ አስተዳደር፣ ፀረ-ማብራሪያ መከላከል፣ ክስተት ሪፖርት እና የአቅራቢ ምርመራ።' },
        { title: 'ኢንሹራንስ', desc: 'ለፖሊሲ ባለቤቶች KYC/AML፣ የክስ መገንዘብ መቆጣጠር፣ ተስማሚነት እና ማብራሪያ፣ የወኪል ባህሪ።' },
        { title: 'ሥራ ግንባታ', desc: 'HSE፣ የኮንትራክተር ዲዩ ዲሊጀንስ፣ የስፍራ መግቢያ መመሪያ፣ ፀረ-ጉብዝት እና የአካባቢ ተገዢነት።' },
        { title: 'NGO', desc: 'ህፃናትን ጥበቃ፣ የግል ህጋዊነት መጠን ተጠባባቂነት፣ የአካል ግንባታ እይታ፣ የመረጃ ጥበቃ እና ሪፖርት ማቅረብ (whistleblowing)።' },
        { title: 'መንግስት', desc: 'የህዝብ ግዥ እርካታ፣ የመዝገብ አስተዳደር፣ መረጃ ደህንነት፣ ሥነ-ምግባር እና ባህሪ።' },
        { title: 'ባንክና ፋይናንስ እና የካፒታል ገበያዎች', desc: 'KYC/CDD፣ AML/CFT፣ የውስጥ ንግድ መከላከል፣ የገበያ መጣስ መቆጣጠር፣ የማጭበርበር አደጋ አስተዳደር፣ ሲበር ደህንነት እና የመረጃ ጥበቃ።' },
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
      afrolms: {
        hero: {
          titleAfro: 'አፍሮ',
          titleLMS: 'ኤል ኤም ኤስ',
          titleSuffix: ' — የዳራኮርፕ የኋላ መድረክ',
          body: 'ለአፍሪካ ኢንተርፕራይዞች የተገነባ ዘመናዊ የመማሪያ አስተዳደር ስርዓት (LMS)። የተቀናጀ ትምህርት፣ SCORM/xAPI፣ ክዊዚዎች፣ ምስክር ወረቀቶች፣ በብዙ ቋንቋ ማቅረብ፣ SSO እና ዝርዝር ትንታኔ ይደግፋል።',
          ctaDemo: 'የሙከራ ማሳያ ይጠይቁ',
          ctaVisit: 'afrolms.com ይመልከቱ'
        },
        features: {
          title: 'ለመለኪያ የተዘጋጀ ሁሉም ነገር',
          subtitle: 'የተገነባ ደራሲነት፣ ኃይለኛ አቅርቦት እና ጥልቅ ታይነት — በቀላሉ እና ተስማሚ በየተለያዩ አቀራረብ።',
          mediaBadgeTop: 'ዳሽቦርድ ቅድመ ዕይታ',
          mediaBadgeBottom: 'ሪፖርቶች እና ግብረመልስ',
          mediaText: 'ጨረሳ፣ ልዩነት እና አዝማሚያዎችን ያሳዩ። ለኦዲት ማስረጃ በአንድ ጠቅ ይላኩ።',
          items: [
            { t: 'SCORM & xAPI', d: 'የመደበኛ መርሀ ግብር የሚከተሉ ፓኬጆችን ይጫኑ እና ሙከራ፣ ነጥብ እና መጨረሻ ይከታተሉ።' },
            { t: 'ግምገማዎች', d: 'የጥያቄ ባንኮች፣ የተዘረጋ ክዊዚዎች፣ የመደገመያ ገደቦች እና የመለፈጫ ነጥቦች።' },
            { t: 'ምስክር ወረቀቶች', d: 'በራስ ሰር የሚሰጡ ምስክር ወረቀቶች ከጊዜ መብት እና ከእድሳት አስታዋሾች ጋር።' },
            { t: 'የተጠቃሚ አስተዳደር', d: 'ብዛት ምዝገባ፣ ቡድኖች፣ RBAC እና ሙሉ ኦዲት መዝገቦች።' },
          ],
          stats: {
            uptime: 'አገልግሎት ሁኔታ',
            learners: 'የተማሪዎች ብዛት',
            orgs: 'ድርጅቶች',
            support: 'ድጋፍ'
          }
        },
        experience: {
          title: 'ቀላል እና የሚወዱት ተሞክሮ',
          subtitle: 'ፈጣን ፍለጋ፣ ንጹህ የኮርስ ገፆች፣ ሞባይል ተስማሚ እና በብዙ ቋንቋ ማቅረብ።',
          mobileTitle: 'ሞባይል እና ከመሬት ውጭ ዝግጁ',
          mobileDesc: 'ለዝቅተኛ መስመር እና ሊቀጥሉ የሚችሉ ክፍለ ጊዜዎች የሚደግፉ ንቁ ኢንተርፌስ።',
          l10nTitle: 'ማካተት እና መዳረሻ',
          l10nDesc: 'በብዙ ቋንቋዎች ይዘት አቅርቡ እና የመዳረሻ አካላትን እና ንግግርን ይደግፉ።'
        },
        solutions: {
          title: 'መፍትሄዎች ለሁሉም ዘርፎች',
          subtitle: 'መንግስት • ዩኒቨርሲቲ • ማህበራዊ ድርጅት (NGO) • ግል',
          items: {
            Government: { t: 'መንግስት', d: 'የህዝብ ግዥ እርካታ፣ የመረጃ ደህንነት እና በህዝብ መጠን ስልጠና።' },
            University: { t: 'ዩኒቨርሲቲ', d: 'ለክፍለ ዘመን አቅርቦት፣ ግምገማዎች እና ለአስማሚዎች እና ለተማሪዎች ትንታኔ።' },
            NGO: { t: 'NGO', d: 'ህፃናት ጥበቃ፣ የአበል ተገዢነት እና የተበተነ መስክ ቡድን መቻል።' },
            Private: { t: 'ግል', d: 'ለባንኮች፣ ኢንሹራንስ፣ ጤና እና ሥራ ግንባታ የተመረጡ ሚና-ተመሳሳይ ትምህርቶች።' }
          }
        },
        security: {
          title: 'የኢንተርፕራይዝ ደረጃ ደህንነት',
          subtitle: 'በሚና የተመሠረተ መዳረሻ ቁጥጥር፣ የተመረጠ መጓጓዣ ማመልከቻ፣ ብዙ ጊዜ ባከፍሉ ቅጥያዎች እና ኦዲት መዝገቦች።',
          items: [
            { t: 'RBAC', d: 'ለአስተዳዳሪዎች፣ ለአስተማሪዎች፣ ለሥራ አስኪያጆች እና ለተማሪዎች የተዘረጋ ፍቃድ መብቶች።' },
            { t: 'የውሂብ ጥበቃ', d: 'TLS በመጓጓዣ ጊዜ፣ የተመረጡ ቅጥያዎች እና የመዝገብ ጊዜ መቆጣጠር።' },
            { t: 'ኦዲት እና ተገዢነት', d: 'ሙሉ መዝገቦች፣ የልዩነት ሪፖርት እና የሚሰወር ማስረጃ።' }
          ]
        }
      },
      labels: { browse: 'ኮርሶችን ያስሱ' },
      footerLinks: ['ግላዊነት', 'ውሎች', 'ደህንነት'],
      footer: {
        explore: 'ያስሱ',
        legal: 'ሕጋዊ',
        getStarted: 'ጀምሩ',
        getStartedBody: 'ለቡድንዎ ዳራኮርፕን በተግባር ይመልከቱ።',
        tagline: 'ለኢትዮጵያ ድርጅቶች የተስተካከለ ዘመናዊ የህግ ተገዢነት ስልጠና።',
        powered: 'የስልጠና አቅርቦት በ AfroLMS ነው — ምዝገባ፣ ትከታተል እና ምስክር ወረቀት።',
        copyright: 'መብቱ ሁሉ የተጠበቀ ነው።'
      },
      demo: {
        title: 'የሙከራ ማሳያ ይጠይቁ',
        body: 'ዳራኮርፕ እና AfroLMS እንዴት እንደሚሰሩ በቀጥታ ይመልከቱ። ስለቡድናችሁ እና ግቦቻችሁ አነስተኛ መረጃ ይስጡን እና ለመያዝ እናገናኝዎታለን።',
        sidebarTitle: 'ምን ያገኛሉ',
        sidebarItems: [
          '30–45 ደቂቃ ቀጥታ እይታ',
          'ከሚናዎች/ፖሊሲዎች ጋር መመርመር',
          'የፓይለት ዕቅድ እና ዋጋ',
          'ጥያቄ እና መልስ ከቡድናችን',
        ],
        sidebarEmailPrefix: 'ኢሜይል ቢመችዎት ፣ ይፃፉ ወደ',
        form: {
          firstName: 'የመጀመሪያ ስም',
          lastName: 'የአባት ስም',
          email: 'የሥራ ኢሜይል',
          org: 'ተቋም',
          role: 'ሚና',
          size: 'የቡድን መጠን',
          sizeOptions: ['1–50','51–200','201–1000','1000+'],
          interestsTitle: 'የፍላጎት አካባቢዎች',
          interestsOptions: [
            'AML/KYC እና ፀረ‑ማብራሪያ',
            'የመረጃ ጥበቃ እና ግላዊነት',
            'AfroLMS መድረክ',
            'ሪፖርት እና ትንታኔ',
          ],
          timeTitle: 'የሚመርጡት ጊዜ',
          timeOptions: ['ጠዋት','ከሰዓት','ማታ','ምንም ልዩ ምርጫ የለኝም'],
          phone: 'ስልክ (አማራጭ)',
          message: 'መልዕክት',
          messagePh: 'ስለ አጠቃቀም ጉዳዮችዎ፣ ጊዜ ሰሌዳ እና መስፈርቶች ይነግሩን',
          consentPrefix: 'ስለ ዳራኮርፕ ምርቶች እና አገልግሎቶች እንዲገናኙኝ እስማማለሁ። የእኛን',
          privacy: 'የግላዊነት ፖሊሲ',
          btnIdle: 'የሙከራ ማሳያ ይጠይቁ',
          btnSubmitting: 'በመላክ ላይ…',
          btnSuccess: 'አመሰግናለሁ! በቅርቡ እናገናኝዎታለን',
        }
      },
      courses: {
        heroTitle: 'የዳራኮርፕ ኮርሶችን ያስሱ',
        heroBody: 'ለኢትዮጵያ ድርጅቶች የተስተካከለ ፣ በመመሪያ የተያያዘ ትምህርት — አጭር ቪዲዮዎች፣ ሚና-ተጫዋች ልምምዶች እና ግምገማዎች።',
        searchPlaceholder: 'ኮርሶችን ይፈልጉ',
        searchBtn: 'ፈልግ',
        all: 'ሁሉም',
        categories: {
          Compliance: 'ተገዢነት',
          Conduct: 'ባህሪ',
          Privacy: 'ግላዊነት',
          Security: 'ደህንነት',
          HSE: 'HSE',
          People: 'ሰዎች'
        },
        levels: {
          Beginner: 'ጀማሪ',
          Intermediate: 'መካከለኛ',
          Advanced: 'የተሻለ'
        },
        units: { min: 'ደቂቃ', modules: 'ሞጁሎች' },
        buttons: { preview: 'ቅድመ እይታ', details: 'ዝርዝሮች →' }
      },
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
    <div className="min-h-screen font-sans">
  <Navbar lang={lang} t={t} onScrollTo={onScrollTo} setLang={setLang} />

      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home lang={lang} ui={ui} trainings={trainings} t={t} setLang={setLang} />} />
          <Route path="/dashboard" element={<Dashboard trainings={trainings} lang={lang} />} />
          <Route path="/courses" element={<Courses lang={lang} t={t} />} />
          <Route path="/courses/:id" element={<CourseDetails lang={lang} t={t} />} />
          <Route path="/afrolms" element={<AfroLMS lang={lang} t={t} />} />
          <Route path="/why" element={<Why lang={lang} ui={ui} t={t} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo lang={lang} t={t} />} />
          <Route path="/privacy" element={<Privacy t={t} lang={lang} />} />
          <Route path="/terms" element={<Terms t={t} lang={lang} />} />
          <Route path="/security" element={<Security t={t} lang={lang} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>

      <Footer t={t} />
    </div>
  );
}