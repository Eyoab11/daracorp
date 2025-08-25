export function baseTrainings() {
  return [
    // minimal example: replicate IDs and titles from original
    { id: 1, en: { title: 'Code of Conduct & Ethics', blurb: 'Mandatory principles for honesty, fairness, objectivity, and accountability.', duration: '60–75 min' }, am: { title: 'የሥነ ምግባር ደንብ እና ሥነ-ምግባር', blurb: 'ለታማኝነት፣ ለፍትሃዊነት፣ ለገለልተኝነት እና ለተጠያቂነት لازم የሆኑ መርሆዎች።', duration: '60–75 ደቂቃ' } },
    { id: 2, en: { title: 'Competency Framework', blurb: 'Role‑based standards, continuing professional education, and evidence.', duration: '60–75 min' }, am: { title: 'የብቃት ማዕቀፍ', blurb: 'በሚና ላይ የተመሰረቱ መስፈርቶች፣ ቀጣይነት ያለው የሙያ ትምህርት እና ማስረጃ።', duration: '60–75 ደቂቃ' } },
    { id: 3, en: { title: 'Risk Management & Compliance', blurb: 'Identify, assess, and mitigate operational, regulatory, cyber, and reputational risks.', duration: '75–90 min' }, am: { title: 'የስጋት አስተዳደር እና የህግ ተገዢነት', blurb: 'የአስተዳደር ስጋቶችን መለየት፣ መገምገም እና መቀነስ።', duration: '75–90 ደቂቃ' } },
    // more can be added; keep minimal for now
  ];
}
