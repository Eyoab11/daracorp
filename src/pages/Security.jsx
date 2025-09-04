import React from 'react';

export default function Security({ t, lang }) {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
  <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-blue-700 dark:text-blue-400">
        {lang === 'am' ? 'የደህንነት ፖሊሲ' : 'Security Policy'}
      </h1>
      <div className="prose prose-blue dark:prose-invert max-w-none space-y-8">
        {lang === 'am' ? (
          <>
            <p>ዳራኮርፕ የመረጃ ደህንነትን በከፍተኛ ደረጃ ይከበራል። የተጠቃሚ መረጃ በመስመር ላይ በሚሰጡ መደበኛ መንገዶች ይጠበቃል። ዳራኮርፕ የመረጃ ደህንነትን ለማረጋገጥ የተለያዩ ቴክኖሎጂዎችን እና ሂደቶችን ተጠቃሚ ያደርጋል።</p>
            <h2 className="text-2xl font-bold mt-8 mb-3">የመረጃ መጠበቅ</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>TLS እና ኢንክሪፕሽን በመጠቀም መረጃዎች ይጠበቃሉ።</li>
              <li>የተጠቃሚ መረጃ በህጋዊነት እና በደህንነት ይጠበቃል።</li>
              <li>የአገልግሎት አጠቃቀም በኦዲት መዝገቦች ይታወቃል።</li>
              <li>የመረጃ መዳረሻ እና መዝገብ ቁጥጥር ይተገበራል።</li>
              <li>የመረጃ መዳረሻ መቆጣጠር እና የመረጃ መድረሻ መቆጣጠር ይተገበራል።</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-3">የደህንነት ስርዓቶች</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>የመግቢያ መቆጣጠሪያዎች፣ RBAC እና የተጠቃሚ ፍቃዶች</li>
              <li>የመረጃ መዳረሻ እና መዝገብ ቁጥጥር</li>
              <li>የአደጋ መከላከል እና የመረጃ መድረሻ መቆጣጠር</li>
              <li>የመረጃ መዳረሻ መቆጣጠር እና የመረጃ መድረሻ መቆጣጠር ይተገበራል።</li>
              <li>የአደጋ መከላከል እና የመረጃ መድረሻ መቆጣጠር ይተገበራል።</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-3">የደህንነት ስርዓቶች እና ሂደቶች</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>የመግቢያ መቆጣጠሪያዎች፣ የተጠቃሚ ፍቃዶች፣ የመረጃ መዳረሻ እና መዝገብ ቁጥጥር</li>
              <li>የአደጋ መከላከል እና የመረጃ መድረሻ መቆጣጠር</li>
              <li>የመረጃ መዳረሻ መቆጣጠር እና የመረጃ መድረሻ መቆጣጠር ይተገበራል።</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-3">ጥያቄዎች</h2>
            <p className="mb-4">የደህንነት ጥያቄዎች ካሉ <a href="mailto:privacy@daracorp.com" className="text-blue-700 underline">privacy@daracorp.com</a> ይጠይቁ።</p>
          </>
        ) : (
          <>
            <p>DaraCorp takes information security seriously. User data is protected using industry-standard protocols and best practices. We employ a range of technologies and processes to ensure the confidentiality, integrity, and availability of your information.</p>
            <h2 className="text-2xl font-bold mt-8 mb-3">Data Protection</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>All data is encrypted in transit using TLS and at rest where applicable.</li>
              <li>User data is handled in compliance with legal and security requirements.</li>
              <li>Service usage is logged and auditable.</li>
              <li>Access to data is restricted to authorized personnel only.</li>
              <li>Regular security reviews and audits are conducted.</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-3">Security Systems and Processes</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access controls, RBAC, and user permissions</li>
              <li>Data access and retention management</li>
              <li>Incident prevention and response protocols</li>
              <li>Continuous monitoring and vulnerability management</li>
              <li>Disaster recovery and business continuity planning</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-3">Questions</h2>
            <p className="mb-4">For security-related questions, contact <a href="mailto:privacy@daracorp.com" className="text-blue-700 underline">privacy@daracorp.com</a>.</p>
          </>
        )}
      </div>
    </div>
  );
}
