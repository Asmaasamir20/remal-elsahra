/**
 * Lightweight sitemap generator for a Vite + React SPA.
 * - Reads known static routes
 * - Expands service detail routes from cardDetails
 * - Writes public/sitemap.xml
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { resolve, dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = resolve(__dirname, "..");
const publicDir = resolve(projectRoot, "public");

// Base site URL (configure via env var)
const SITE_URL = process.env.SITE_URL || "https://www.remal-elsahra.com";

// Static routes in router
const staticRoutes = [
  "/",
  "/clients",
  "/equipment",
  "/services",
  "/Projects",
  "/contact",
];

async function loadServiceTitles() {
  try {
    const servicesPath = resolve(
      projectRoot,
      "src/pages/components/Services/ServicescardTitles.jsx"
    );
    const moduleUrl = pathToFileURL(servicesPath).href;
    const mod = await import(moduleUrl);
    const list = (mod.cardDetails || []).map((s) => s.title).filter(Boolean);
    return list;
  } catch (e) {
    console.warn("Failed to load services titles for sitemap:", e.message);
    return [];
  }
}

async function loadEquipmentImages() {
  try {
    const eqPath = resolve(
      projectRoot,
      "src/pages/components/Equipment/equipmentImages.js"
    );
    const moduleUrl = pathToFileURL(eqPath).href;
    const mod = await import(moduleUrl);
    const obj = mod.imagesEquipment || {};
    const values = Object.values(obj).filter(Boolean);
    return values;
  } catch (e) {
    console.warn("Failed to load equipment images for sitemap:", e.message);
    return [];
  }
}

async function loadServiceImages() {
  try {
    const servicesPath = resolve(
      projectRoot,
      "src/pages/components/Services/ServicescardTitles.jsx"
    );
    const moduleUrl = pathToFileURL(servicesPath).href;
    const mod = await import(moduleUrl);
    const list = (mod.cardDetails || [])
      .filter((s) => s && s.title && s.image)
      .map((s) => ({ title: s.title, image: s.image }));
    return list;
  } catch (e) {
    console.warn("Failed to load services images for sitemap:", e.message);
    return [];
  }
}

function xmlEscape(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

async function generate() {
  const urls = new Set();
  const today = new Date().toISOString().split("T")[0];

  staticRoutes.forEach((route) => urls.add(route));

  const [titles, serviceImages, equipmentImages] = await Promise.all([
    loadServiceTitles(),
    loadServiceImages(),
    loadEquipmentImages(),
  ]);
  titles.forEach((title) => {
    const slug = encodeURIComponent(title);
    urls.add(`/service/${slug}`);
  });

  // Attach representative images per route to improve Google Images discovery
  const routeImages = {
    "/": ["/logo.webp"],
    "/clients": ["/logo.webp"],
    "/equipment": ["/logo.webp"],
    "/services": ["/logo.webp"],
    "/Projects": ["/logo.webp"],
    "/contact": ["/logo.webp"],
  };

  // Map service detail route -> service image
  const serviceRouteToImages = new Map();
  serviceImages.forEach(({ title, image }) => {
    const slug = encodeURIComponent(title);
    const route = `/service/${slug}`;
    const list = serviceRouteToImages.get(route) || [];
    list.push(image);
    serviceRouteToImages.set(route, list);
  });

  const urlset = Array.from(urls)
    .map((path) => {
      const loc = `${SITE_URL}${path}`;
      const images = [
        ...(routeImages[path] || []),
        ...(serviceRouteToImages.get(path) || []),
        ...(path === "/equipment" ? equipmentImages : []),
      ];
      const imageTags = images
        .map(
          (img) =>
            `    <image:image>\n      <image:loc>${xmlEscape(
              `${SITE_URL}${img}`
            )}</image:loc>\n      <image:title>${xmlEscape(
              "مختبر رمال الصحراء"
            )}</image:title>\n    </image:image>`
        )
        .join("\n");

      return `  <url>\n    <loc>${xmlEscape(
        loc
      )}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${
        path === "/" ? "1.0" : "0.7"
      }</priority>\n${imageTags}\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urlset}\n</urlset>\n`;

  const outPath = resolve(publicDir, "sitemap.xml");
  writeFileSync(outPath, xml, "utf8");
  console.log(`Sitemap written to ${outPath} with ${urls.size} URLs.`);
}

generate();
