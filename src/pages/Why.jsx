import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BottomCTA from '../shared/BottomCTA';
import AfrolmsHero from '../assets/afrolms.png';

export default function Why({ lang = 'en', ui, t }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const features = lang === 'am'
    ? [
        { t: 'ከመመሪያ ጋር የተያያዙ ጉዳዮች', d: 'እያንዳንዱ ሞጁል ተዛማጅ የኢትዮጵያ መመሪያዎችን ይጠቀሳል እና አካባቢያዊ ሮል ፕሌይዎችን ያካትታል።' },
        { t: 'የከፍተኛ ጥራት የመማር ተሞክሮ', d: 'ለማማቂያ የተዘጋጀ ማዕዘን፣ የሲኔማ ማይክሮ አኒሜሽኖች እና ግልፅ ድምጽ።' },
        { t: 'ለአጠቃቀም የተዘጋጀ', d: 'አጫጭር እና ውጤታማ ትምህርቶች ከግልጽ ቼክሊስቶች እና ግምገማዎች ጋር።' },
        { t: 'ለምርመራ ዝግጁ ማስረጃ', d: 'ጨረስ ሁኔታ፣ የሙከራ ታሪክ እና ምስክር ወረቀቶች በአንድ ጠቅታ ለመልቀቅ።' },
        { t: 'የድርጅት ደረጃ መላኪያ', d: 'SCORM/xAPI፣ SSO እና ትንታኔ—በ AfroLMS ላይ ወይም በእርስዎ መድረክ ላይ።' },
        { t: 'አካባቢያዊ ትብብር', d: 'አተገባበር፣ ልክ አድማጮች እና ፈጣን ድጋፍ ከኢትዮጵያ።' },
      ]
    : [
        { t: 'Directive‑mapped content', d: 'Every module references Ethiopian directives and policies with local role‑plays.' },
        { t: 'Luxury learning experience', d: 'Polished visuals, cinematic micro‑animations, and crisp audio keep learners engaged.' },
        { t: 'Built for adoption', d: 'Short, outcome‑driven lessons with clear checklists and assessments.' },
        { t: 'Evidence for audits', d: 'Completion, attempt history, and certificates ready to export when you need them.' },
        { t: 'Enterprise delivery', d: 'SCORM/xAPI, SSO, and analytics—hosted on AfroLMS or your LMS.' },
        { t: 'Local partnership', d: 'Implementation, localization, and responsive support from Ethiopia.' },
      ];

  const testimonials = lang === 'am'
    ? [
        { q: 'ዳራኮርፕ የህግ ተገዢነትን እንዴት እንደምንያዘጋጅ ቀየረ። እንቅስቃሴ እና ጨረስ ከፍ ሄዱ።', a: 'የህግ ተገዢነት ኃላፊ, ብሔራዊ ባንክ' },
        { q: 'አጭር እና ታላቅ ትምህርቶች ከተገቢ ሮል ፕሌይዎች ጋር። ቡድናችን ይመክራሉ።', a: 'የሰው ሀብት እና ባህል ዳይሬክተር, ሆስፒታሊቲ ቡድን' },
        { q: 'የምርመራ ወቅት ከዚህ በፊት ጭንቀት ያመጣ ነበር—አሁን ማስረጃችን በአንድ ጠቅታ ዝግጁ ነው።', a: 'የአደጋ እና ምርመራ ተቆጣጣሪ, ኢንሹራንስ' },
      ]
    : [
        { q: 'DaraCorp changed how we roll out compliance. Engagement and completion both jumped.', a: 'Chief Compliance Officer, National Bank' },
        { q: 'Short, powerful lessons with relevant role‑plays. Our teams recommend it.', a: 'People & Culture Director, Hospitality Group' },
        { q: 'Audit season used to be stressful—now our evidence is one click away.', a: 'Risk & Audit Lead, Insurer' },
      ];

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 4500);
    return () => clearInterval(id);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero – image only (half screen), like AfroLMS */}
      {/* Title below the image */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-10 md:py-14">
          <motion.h1 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.45 }} className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900">
            {lang === 'am' ? 'ለምን ዳራኮርፕ?' : 'Why DaraCorp?'}
          </motion.h1>
        </div>
      </section>
      {/* Advantages */}
      <section id="features" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{lang === 'am' ? 'የዳራኮርፕ ጥቅሞች' : 'The DaraCorp advantage'}</h2>
            <p className="mt-4 text-lg text-gray-600">{lang === 'am' ? 'የተሻሻለ የተመራማሪ ተሞክሮ፣ መካከለኛ ውጤቶች እና የድርጅት ዝግጁነት—ያለ ውስብስብነት።' : 'Luxury feel, measurable outcomes, and enterprise readiness—without the complexity.'}</p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((f,i)=> (
              <motion.div key={i} initial={{opacity:0, y:14}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:'-80px'}} transition={{duration:.5, delay:i*.06}} className="rounded-3xl bg-white/90 backdrop-blur px-6 py-6 md:px-8 md:py-8 border border-gray-100 shadow-lg hover:shadow-xl">
                <div className="text-3xl">{['📜','✨','🎯','📄','🏛️','🤝'][i]}</div>
                <h3 className="mt-3 text-xl font-extrabold text-gray-900">{f.t}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{f.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="compare" className="py-16 lg:py-24 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 items-stretch">
            <motion.div initial={{opacity:0, y:14}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.5}} className="rounded-3xl bg-white p-8 border border-gray-100 shadow-lg">
              <h3 className="text-2xl font-extrabold text-gray-900">Typical training</h3>
              <ul className="mt-4 space-y-3 text-gray-600">
                {['Generic content not mapped to directives','Long and boring lessons','Low adoption, low recall','Messy records during audits'].map((s,i)=>(
                  <li key={i} className="flex items-start gap-3"><span className="text-red-500 mt-1">✕</span>{s}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{opacity:0, y:14}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.5, delay:.1}} className="rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-600 p-8 shadow-xl text-white">
              <h3 className="text-2xl font-extrabold">DaraCorp</h3>
              <ul className="mt-4 space-y-3">
                {['Directive‑mapped and localized','Short, cinematic micro‑lessons','High adoption and completion','Evidence‑ready records & certificates'].map((s,i)=>(
                  <li key={i} className="flex items-start gap-3"><span className="mt-1">✔</span>{s}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials carousel */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{lang === 'am' ? 'የመሪዎች አስተያየት' : 'What leaders say'}</h2>
          <div className="mt-10 relative h-40 md:h-36">
            <AnimatePresence mode="wait">
              <motion.blockquote key={idx} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration:.4}} className="absolute inset-0 flex flex-col items-center justify-center px-4">
                <p className="text-xl md:text-2xl font-semibold text-gray-900">“{testimonials[idx].q}”</p>
                <footer className="mt-3 text-sm text-gray-600">— {testimonials[idx].a}</footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <BottomCTA
        t={(k) => (lang === 'am' ? {
          'cta.title': 'ዳራኮርፕን ለመሞከር ዝግጁ ነዎት?',
          'cta.body': 'ሰዎች በእውነት የሚጨርሱትን የከፍተኛ ጥራት እና አካባቢያዊ የገቢ ፕሮግራም ያግኙ።',
          'cta.primary': 'የሙከራ ማሳያ ይጠይቁ',
          'cta.secondary': 'ኮርሶችን ያስሱ',
        } : {
          'cta.title': 'Ready to experience DaraCorp? ',
          'cta.body': 'Get a premium, localized compliance program that people actually complete.',
          'cta.primary': 'Request demo',
          'cta.secondary': 'Browse courses',
        })[k]}
        onPrimary={() => {
          if (window.location.pathname !== '/') window.history.pushState({}, '', '/');
          setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 60);
        }}
        onSecondary={() => { window.history.pushState({}, '', '/courses'); }}
      />
    </div>
  );
}

/* Marquee keyframes */
// Tailwind arbitrary value used above; add a fallback style tag for environments without plugin
export const style = (
  <style>{`
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  `}</style>
);
