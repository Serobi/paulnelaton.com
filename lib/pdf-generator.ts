// lib/pdf-generator.ts
import puppeteer from "puppeteer";

type GeneratePDFOptions = {
  html: string;
  filename: string;
};

/**
 * Génère un PDF à partir de HTML via Puppeteer
 * Retourne un Buffer du PDF généré
 */
export async function generatePDF({
  html,
  filename,
}: GeneratePDFOptions): Promise<Buffer> {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--font-render-hinting=none", // Meilleur rendu typo
    ],
  });

  try {
    const page = await browser.newPage();

    // Charge le HTML directement en mémoire
    await page.setContent(html, {
      waitUntil: "networkidle0", // Attendre que tout soit chargé
    });

    // Force la résolution avant print
    await page.setViewport({
      width: 794, // A4 width en pixels
      height: 1122, // A4 height en pixels
      deviceScaleFactor: 2,
    });

    // Émule le media print pour activer les @media print CSS
    await page.emulateMediaType("print");

    // Génère le PDF
    const pdfUint8Array = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      preferCSSPageSize: true,
      displayHeaderFooter: false,
    });

    return Buffer.from(pdfUint8Array);
  } finally {
    await browser.close();
  }
}

/**
 * Construit le HTML complet auto-contenu pour Puppeteer
 * (inline CSS, pas de dépendances externes)
 */
export function buildCvHTML(data: any, profilePicBase64?: string): string {
  // Helpers de rendu
  const renderStats = (stats: any[]) =>
    stats
      .map(
        (s) => `
      <div class="stat-item">
        <span class="stat-label">${s.label}</span>
        <div class="stat-bar-bg">
          <div class="stat-bar-fill" style="width:${s.value}%;background:${s.color};"></div>
        </div>
      </div>`,
      )
      .join("");

  const renderSkills = (skillTrees: any[]) =>
    skillTrees
      .map(
        (category) => `
      <div class="skill-group">
        <h4 class="skill-category">${category.title}</h4>
        <div class="tags">
          ${category.skills.map((s: string) => `<span class="tag">${s}</span>`).join("")}
        </div>
      </div>`,
      )
      .join("");

  const renderFormations = (formations: any[]) =>
    formations
      .map(
        (f) => `
      <div class="edu-item">
        <span class="year">${f.year}</span>
        <div class="edu-detail">
          <strong>${f.title}</strong>
          <span>${f.school}</span>
        </div>
      </div>`,
      )
      .join("");

  const renderLanguages = (languages: any[]) =>
    languages
      .map((l) => `<li><strong>${l.name} :</strong> ${l.level}</li>`)
      .join("");

  const renderExperience = (experience: any[]) =>
    experience
      .map(
        (exp) => `
      <div class="exp-card">
        <div class="exp-header">
          <div class="exp-title-group">
            <h3>${exp.role}</h3>
            <h4>${exp.company}</h4>
          </div>
          <span class="period">${exp.period}</span>
        </div>
        <ul class="exp-list">
          ${exp.desc.map((line: string) => `<li>${line}</li>`).join("")}
        </ul>
      </div>`,
      )
      .join("");

  // Couche ATS invisible
  const renderATSLayer = (d: any) => `
    <div class="ats-layer">
      <p>${d.identity.name}</p>
      <p>${d.identity.role}</p>
      <p>${d.identity.mobility}</p>
      <p>${d.identity.summary}</p>
      <p>Email: ${d.identity.contact.email}</p>
      <p>Téléphone: ${d.identity.contact.phone}</p>
      <p>LinkedIn: ${d.identity.contact.linkedin}</p>

      <h2>${d.labels.experience}</h2>
      ${d.experience
        .map(
          (exp: any) => `
        <div>
          <h3>${exp.role}</h3>
          <p>${exp.company} — ${exp.period}</p>
          <ul>${exp.desc.map((l: string) => `<li>${l}</li>`).join("")}</ul>
        </div>`,
        )
        .join("")}

      <h2>${d.labels.technicalSkills}</h2>
      ${d.skillTrees
        .map(
          (cat: any) => `
        <div>
          <h3>${cat.title}</h3>
          <p>${cat.skills.join(", ")}</p>
        </div>`,
        )
        .join("")}

      <h2>${d.labels.education}</h2>
      ${d.formations.map((f: any) => `<p>${f.year} — ${f.title} — ${f.school}</p>`).join("")}

      <h2>${d.labels.languages}</h2>
      ${d.languages.map((l: any) => `<p>${l.name}: ${l.level}</p>`).join("")}
    </div>`;

  const pic = profilePicBase64
    ? `<img src="${profilePicBase64}" alt="Photo de profil" class="profile-pic" />`
    : `<div class="profile-pic-placeholder"></div>`;

  // HTML complet avec CSS inline
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <title>CV — ${data.identity.name}</title>
  <style>
    /* ── Reset & base ── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    @page {
      size: A4;
      margin: 0;
    }

    html, body {
      width: 210mm;
      background: #ffffff;
      font-family: "Segoe UI", Arial, sans-serif;
      font-size: 10pt;
      color: #252526;
      line-height: 1.45;
    }

    /* ── Couche ATS invisible ── */
    .ats-layer {
      position: absolute;
      top: 0; left: 0;
      width: 1px; height: 1px;
      overflow: hidden;
      opacity: 0;
      font-size: 1px;
      line-height: 1px;
      color: transparent;
      pointer-events: none;
      z-index: -1;
    }

    /* ── CV wrapper ── */
    .cv-container {
      position: relative;
      width: 210mm;
      min-height: 297mm;
      padding: 0;
      background: #fff;
    }

    /* ── Header ── */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      background: #0c0c80;
      color: #fff;
      padding: 20px 40px;
    }

    .identity-block { flex: 1; padding-right: 20px; }

    .name {
      font-size: 20pt;
      font-weight: 800;
      text-transform: uppercase;
      color: #f8f8f8;
      letter-spacing: 0.5px;
      margin-bottom: 3px;
    }

    .role {
      font-size: 10pt;
      font-weight: 600;
      text-transform: uppercase;
      color: #f8f8f8;
      margin-bottom: 4px;
    }

    .target {
      font-size: 8.5pt;
      font-weight: 600;
      color: #dde4ef;
      margin-bottom: 8px;
      display: block;
    }

    .summary {
      font-size: 9pt;
      color: #f0f0f0;
      text-align: justify;
      max-width: 95%;
      line-height: 1.5;
    }

    .right-header {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 8px;
    }

    .profile-pic {
      width: 110px;
      height: 110px;
      object-fit: cover;
      border-radius: 5px;
      border: 3px solid rgba(255,255,255,0.3);
    }

    .profile-pic-placeholder {
      width: 110px; height: 110px;
      background: rgba(255,255,255,0.1);
      border-radius: 5px;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 3px;
      font-size: 8pt;
      color: #e0e7ff;
    }

    /* ── Main grid — 2 colonnes ── */
    .main-grid {
      display: grid;
      grid-template-columns: 200px 1fr;
      gap: 0;
      padding: 0;
    }

    /* ── Sidebar ── */
    .sidebar {
      background: #f4f6fb;
      padding: 20px 14px 20px 20px;
      border-right: 1px solid #e5e7eb;
    }

    .section {
      margin-bottom: 14px;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 8px 10px;
      background: #ffffff;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .section h3 {
      font-size: 7.5pt;
      text-transform: uppercase;
      font-weight: 800;
      color: #0c0c80;
      background: #f8fafc;
      padding: 5px 8px;
      border-left: 3px solid #0c0c80;
      margin: -8px -10px 10px -10px;
      border-radius: 6px 6px 0 0;
    }

    /* ── Stats ── */
    .stat-item { margin-bottom: 10px; }

    .stat-label {
      display: block;
      font-size: 7.5pt;
      font-weight: 600;
      color: #252526;
      margin-bottom: 3px;
    }

    .stat-bar-bg {
      background: #e2e8f0;
      height: 5px;
      border-radius: 3px;
      overflow: hidden;
    }

    .stat-bar-fill { height: 100%; border-radius: 3px; }

    /* ── Skills ── */
    .skill-group { margin-bottom: 10px; }

    .skill-category {
      font-size: 7.5pt;
      font-weight: 700;
      color: #252526;
      margin-bottom: 4px;
    }

    .tags { display: flex; flex-wrap: wrap; gap: 4px; }

    .tag {
      color: #1f2937;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 7pt;
      font-weight: 500;
      background: linear-gradient(90deg, #f8fafc, #eef2ff);
      border: 1px solid #e5e7eb;
    }

    /* ── Formation & Langues ── */
    .edu-item { margin-bottom: 7px; }

    .year {
      display: block;
      font-size: 7pt;
      color: #555;
      font-weight: 600;
    }

    .edu-detail strong {
      display: block;
      font-size: 7.5pt;
      color: #252526;
    }

    .edu-detail span {
      font-size: 7pt;
      color: #555;
    }

    .lang-list { list-style: none; }

    .lang-list li {
      margin-bottom: 4px;
      font-size: 8pt;
      color: #252526;
    }

    /* ── Main content : expérience ── */
    .content {
      padding: 20px 22px 20px 22px;
    }

    .main-title {
      font-size: 12pt;
      color: #0f172a;
      border-left: 5px solid #0c0c80;
      padding-left: 12px;
      margin-bottom: 18px;
      text-transform: uppercase;
      font-weight: 800;
      break-after: avoid;
      page-break-after: avoid;
    }

    .timeline {
      display: flex;
      flex-direction: column;
      gap: 12px;
      border-left: 1.5px solid #dbe2ea;
      padding-left: 18px;
      margin-left: 4px;
    }

    .exp-card {
      position: relative;
      padding: 8px 10px;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      background: #f8f8f8;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .exp-card::before {
      content: "";
      position: absolute;
      left: -24px;
      top: 8px;
      width: 9px; height: 9px;
      background: #ffffff;
      border: 2px solid #0c0c80;
      border-radius: 50%;
    }

    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 6px;
    }

    .exp-title-group h3 {
      font-size: 10pt;
      color: #0c0c80;
      font-weight: 700;
    }

    .exp-title-group h4 {
      font-size: 7.5pt;
      color: #0c0c80;
      font-weight: 700;
      text-transform: uppercase;
      margin-top: 1px;
    }

    .period {
      font-size: 8pt;
      color: #555;
      font-style: italic;
      white-space: nowrap;
      margin-left: 10px;
    }

    .exp-list {
      padding-left: 14px;
      list-style-type: square;
    }

    .exp-list li {
      margin-bottom: 3px;
      font-size: 8.5pt;
      color: #252526;
      line-height: 1.45;
    }
  </style>
</head>
<body>
  <div class="cv-container">

    ${renderATSLayer(data)}

    <!-- ── HEADER ── -->
    <header class="header">
      <div class="identity-block">
        <h1 class="name">${data.identity.name}</h1>
        <h2 class="role">${data.identity.role}</h2>
        <span class="target">${data.identity.mobility}</span>
        <p class="summary">${data.identity.summary}</p>
      </div>
      <div class="right-header">
        ${pic}
        <div class="contact-info">
          <span>${data.identity.contact.email}</span>
          <span>${data.identity.contact.phone}</span>
          <span>${data.identity.contact.linkedin}</span>
        </div>
      </div>
    </header>

    <!-- ── GRID 2 COLONNES ── -->
    <div class="main-grid">

      <!-- Sidebar -->
      <aside class="sidebar">

        <div class="section">
          <h3>${data.labels.domains}</h3>
          ${renderStats(data.stats)}
        </div>

        <div class="section">
          <h3>${data.labels.technicalSkills}</h3>
          ${renderSkills(data.skillTrees)}
        </div>

        <div class="section">
          <h3>${data.labels.education}</h3>
          ${renderFormations(data.formations)}
        </div>

        <div class="section">
          <h3>${data.labels.languages}</h3>
          <ul class="lang-list">
            ${renderLanguages(data.languages)}
          </ul>
        </div>

      </aside>

      <!-- Main : expérience -->
      <main class="content">
        <h3 class="main-title">${data.labels.experience}</h3>
        <div class="timeline">
          ${renderExperience(data.experience)}
        </div>
      </main>

    </div>
  </div>
</body>
</html>`;
}
