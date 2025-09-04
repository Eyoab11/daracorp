import React from 'react';

export default function Privacy({ t, lang }) {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
  <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-blue-700 dark:text-blue-400">
    {lang === 'am' ? 'የግላዊነት ፖሊሲ' : 'Privacy Policy'}
      </h1>
      <div className="prose prose-blue dark:prose-invert max-w-none space-y-8">
        {lang === 'am' ? (
          <>
            <p>ዳራኮርፕ የተጠቃሚዎቻችንን ግላዊነት እና የመረጃ ደህንነት በጥልቅ ይከበራል። ይህ ፖሊሲ የምንሰበስበውን፣ የምንጠቀምበትን እና የምንጠባበቅበትን መረጃ ይገልጻል። ዳራኮርፕ በሚሰጡት አገልግሎቶች ላይ የተጠቃሚ መረጃ ማስተናገድ እና መጠበቅ በህጋዊነት እና በደህንነት ደረጃ ይከናወናል።</p>
            <h2 className="text-2xl font-bold mt-8 mb-3">የምንሰበስበት መረጃ</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>የስም፣ ኢሜይል፣ ድርጅት እና የአገልግሎት ታሪክ</li>
              <li>የግል መረጃ በተጠቃሚ ማስገባት ወቅት</li>
              <li>የአገልግሎት አጠቃቀም መረጃ</li>
              <li>የመረጃ ተጠቃሚነት እና ትንታኔ መረጃ</li>
              <li>ከሶሻል ሚዲያ ወይም ከተባባሪ ድርጅቶች የሚሰበሰብ መረጃ</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-3">መረጃውን እንዴት እንጠቀማለን</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>አገልግሎት ለማቅረብ እና ለማሻሻል</li>
              <li>ህጋዊ ግዴታዎችን ለመሟሟት</li>
              <li>አዲስ አገልግሎቶችን ለማስተዋወቅ</li>
              <li>የተጠቃሚ ልምድን ለማሻሻል እና ለማስተካከል</li>
              <li>ለማስታወቂያ እና ለግብዣ አገልግሎቶች</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-3">የመረጃ ጥበቃ</h2>
            <p className="mb-4">መረጃዎትን በደህና እና በህጋዊ መንገድ እንጠባበቃለን። የመረጃ መዳረሻ እና መዝገብ ቁጥጥር፣ ኢንክሪፕሽን፣ የመግቢያ መቆጣጠሪያዎች ይተገበራሉ።</p>
            <h2 className="text-2xl font-bold mt-8 mb-3">የተጠቃሚ መብቶች</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>መረጃዎትን ማየት፣ ማስተካከል ወይም ማጥፋት የሚችሉበት መብት አለዎት።</li>
              <li>ማንኛውንም የመረጃ ማስተናገድ ላይ ጥያቄ ማቅረብ ይችላሉ።</li>
            </ul>
          </>
        ) : (
          <>
            <p>DaraCorp is committed to protecting your privacy and data security. This policy explains what information we collect, how we use it, and how we safeguard it. We process personal data in accordance with applicable laws and best practices for commercial organizations.</p>
            <h2 className="text-2xl font-bold mt-8 mb-3">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name, email, organization, and service history</li>
              <li>Personal data you provide during registration or use</li>
              <li>Usage and analytics data</li>
              <li>Information from social media or partner integrations</li>
              <li>Device and browser information</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-3">How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide and improve our services</li>
              <li>To comply with legal obligations</li>
              <li>To inform you about new features and offerings</li>
              <li>To personalize your experience and communications</li>
              <li>For marketing and promotional purposes</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-3">Data Security</h2>
            <p className="mb-4">Your data is protected using industry best practices, including encryption, access controls, and regular audits. Data is only retained as long as necessary for business or legal purposes. Access to your data is restricted to authorized personnel only.</p>
            <h2 className="text-2xl font-bold mt-8 mb-3">Your Rights</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>You have the right to access, correct, or delete your personal data.</li>
              <li>You may request information about how your data is processed at any time.</li>
            </ul>
            <p className="mt-6">For questions or requests, contact <a href="mailto:privacy@daracorp.com" className="text-blue-700 underline">privacy@daracorp.com</a>.</p>
          </>
        )}
      </div>
    </div>
  );
}
