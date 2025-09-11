// Centralized keyword lists for SEO across the site
// Keep keywords concise, relevant, and de-duplicated per page

/**
 * Build a unique keyword array based on page type and optional extras.
 * This ensures consistent, comprehensive coverage without duplication.
 */
export function getKeywordsForPage(page, extra = []) {
  const normalizedPage = String(page || "").toLowerCase();
  const base = Array.from(
    new Set([
      ...brandKeywords,
      ...geotechKeywords,
      ...serviceKeywords,
      ...materialsKeywords,
      ...qualityControlKeywords,
      ...locationKeywords,
      ...englishKeywords,
    ])
  );

  const pageSpecific =
    {
      home: base,
      services: [
        ...serviceKeywords,
        ...geotechKeywords,
        ...qualityControlKeywords,
        ...locationKeywords,
        ...englishKeywords,
        ...brandKeywords,
      ],
      service: [
        ...serviceKeywords,
        ...geotechKeywords,
        ...qualityControlKeywords,
        ...englishKeywords,
        ...brandKeywords,
      ],
      projects: [
        ...geotechKeywords,
        "مشاريع فحص التربة",
        "مشاريع جيوتقنية",
        "تقارير مشاريع",
        "اختبارات موقعية",
        "تقارير مختبرية",
        ...englishKeywords,
        ...brandKeywords,
      ],
      equipment: [
        "معدات فحص التربة",
        "أجهزة جيوتقنية",
        "معدات اختبارات الخرسانة",
        "معدات اختبارات الأسفلت",
        "معدات ضبط الجودة",
        "Geotechnical equipment",
        "Soil testing equipment",
        ...brandKeywords,
      ],
      clients: [
        "عملاء مختبر",
        "شركات المقاولات",
        "استشاريين هندسيين",
        "جهات حكومية",
        "شهادات المختبر",
        ...brandKeywords,
      ],
      contact: [
        "التواصل مع المختبر",
        "رقم مختبر",
        "مختبر قريب",
        "حجز زيارة",
        "استشارة جيوتقنية",
        ...brandKeywords,
        ...locationKeywords,
      ],
    }[normalizedPage] || base;

  const merged = Array.from(
    new Set([...pageSpecific, ...extra.filter(Boolean)])
  );

  return merged;
}

export const brandKeywords = [
  "مختبر رمال الصحراء",
  "رمال الصحراء",
  "مختبر تربة رمال الصحراء",
  "Remal ElSahra Lab",
  "Remal Al Sahra",
  "Sand Desert Lab",
];

export const geotechKeywords = [
  "الدراسات الجيوتقنية",
  "دراسة جيوتقنية",
  "استشارة جيوتقنية",
  "تحليل الطبقات",
  "اختبارات موقعيّة",
  "اختبار اختراق قياسي SPT",
  "اختبار اختراق المخروط CPT",
  "Plate Load Test",
  "Bearing Capacity",
  "قص مباشر",
  "حدود أتربرج",
  "انتفاخ وتورم التربة",
  "Permeability",
  "Consolidation",
  "Compaction",
  "Proctor",
  "California Bearing Ratio CBR",
];

export const serviceKeywords = [
  "فحص التربة",
  "تحليل التربة",
  "اختبارات التربة",
  "تحليل خصائص التربة",
  "دراسات موقع",
  "تقرير تربة",
  "جسات",
  "جسات تربة",
  "ردم وتحسين تربة",
  "تحسين خواص التربة",
  "أساسات",
  "اختيار نوع الأساسات",
  "هبوط",
  "قص",
  "ثبات المنحدرات",
  "تربة سبخية",
  "اختبارات الأسفلت",
  "فحص الخرسانة",
  "كسر مكعبات",
  "شميدت هامر",
  "كور تست",
  "اختبارات المواد",
  "تحليل المواد الكيميائية في التربة",
  "ضبط الجودة",
];

export const materialsKeywords = [
  "اختبار الركام",
  "تدرج حبيبي",
  "كثافة جافة",
  "رطوبة",
  "أس الهيدروجيني للتربة",
  "كلوريدات",
  "سلفات",
  "قابلية الانتفاخ",
  "خواص ميكانيكية",
];

export const qualityControlKeywords = [
  "Quality Control",
  "QA/QC",
  "Material Testing",
  "Concrete Testing",
  "Asphalt Testing",
  "Field Density",
  "Sand Cone",
  "Nuclear gauge",
  "Mix Design",
];

export const locationKeywords = [
  "المملكة العربية السعودية",
  "السعودية",
  "الرياض",
  "الدمام",
  "الخبر",
  "الظهران",
  "جدة",
  "مكة",
  "المدينة",
  "القصيم",
  "الأحساء",
  "حفر الباطن",
  "ينبع",
  "تبوك",
  "نجران",
  "جازان",
  "عسير",
];

export const englishKeywords = [
  "soil testing",
  "geotechnical studies",
  "geotechnical investigation",
  "soil report",
  "soil lab",
  "geotechnical lab",
  "SPT test",
  "CPT test",
  "plate load",
  "CBR",
  "sand cone",
  "concrete test",
  "asphalt test",
  "QC testing",
  "materials testing",
];
