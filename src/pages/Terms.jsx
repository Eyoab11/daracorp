import React from 'react';

export default function Terms({ t, lang }) {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
  <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-blue-700 dark:text-blue-400">
        {lang === 'am' ? 'የአገልግሎት ውሎች' : 'Terms of Service'}
      </h1>
      <div className="prose prose-blue dark:prose-invert max-w-none space-y-8">
        {lang === 'am' ? (
          <>
            <p>ይህ ድር ጣቢያ በዳራኮርፕ የተቀመጠ ነው። አገልግሎታችንን በመጠቀም የሚከተሉትን ውሎች ትቀበላላችሁ፡፡ ዳራኮርፕ በሚሰጡት አገልግሎቶች ላይ የተጠቃሚ መረጃ ማስተናገድ እና መጠበቅ በህጋዊነት እና በደህንነት ደረጃ ይከናወናል።</p>
            <h2 className="text-2xl font-bold mt-8 mb-3">አጠቃቀም</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>አገልግሎቱ ለህጋዊ አጠቃቀም ብቻ ነው።</li>
              <li>የተጠቃሚ መረጃ በህጋዊነት ይጠበቃል።</li>
              <li>የድር ጣቢያውን ይዘት ማቅረብ ወይም ማሻሻል የዳራኮርፕ መብት ነው።</li>
              <li>የተጠቃሚ መረጃ በተጠቃሚ ስም እና በህጋዊ መሠረት ይጠበቃል።</li>
              <li>የአገልግሎት አጠቃቀም በኦዲት መዝገቦች ይታወቃል።</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-3">መብቶች</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>ዳራኮርፕ የድር ጣቢያውን ይዘት ማሻሻል ወይም ማቋረጥ የተቻለው መብት አለው።</li>
              <li>የተጠቃሚ መረጃ በደህና ይጠበቃል።</li>
              <li>ተጠቃሚዎች የመረጃ መዳረሻ መጠየቅ ወይም ማስተካከል የሚችሉበት መብት አላቸው።</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-3">ግዴታዎች</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>ተጠቃሚዎች የራሳቸውን መረጃ ትክክለኛነት ማረጋገጥ አለባቸው።</li>
              <li>የአገልግሎት ተጠቃሚ መሆን ህጋዊ መሆን አለበት።</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-3">የድር ጣቢያው ማሻሻያ</h2>
            <p className="mb-4">ዳራኮርፕ የድር ጣቢያውን ይዘት ማሻሻል ወይም ማቋረጥ የተቻለው መብት አለው። ማንኛውንም ጥያቄ ወይም ጥያቄ ካለዎት <a href="mailto:legal@daracorp.com" className="text-blue-700 underline">legal@daracorp.com</a> ይጠይቁ።</p>
          </>
        ) : (
          <>
            <p>This website is operated by DaraCorp. By using our services, you agree to the following terms. DaraCorp processes user data in accordance with applicable laws and industry standards.</p>
            <h2 className="text-2xl font-bold mt-8 mb-3">Use of Service</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Services are for lawful use only.</li>
              <li>User data is protected in accordance with our privacy policy and legal requirements.</li>
              <li>Content and features may be updated or changed at DaraCorp’s discretion.</li>
              <li>User data is processed under the user’s name and with legal basis.</li>
              <li>Service usage is logged and auditable.</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-3">Rights</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>DaraCorp reserves the right to modify or discontinue any part of the website at any time.</li>
              <li>User data is handled securely and responsibly.</li>
              <li>Users have the right to request access or correction to their data.</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-3">Obligations</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Users must ensure the accuracy of their information.</li>
              <li>Service use must be lawful and appropriate.</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-3">Website Changes</h2>
            <p className="mb-4">DaraCorp may update or discontinue any part of the website at any time. For questions, contact <a href="mailto:legal@daracorp.com" className="text-blue-700 underline">legal@daracorp.com</a>.</p>
          </>
        )}
      </div>
    </div>
  );
}
