// lib/pdf-generator.ts
import puppeteer, { Browser } from "puppeteer";

let browserInstance: Browser | null = null;

async function getBrowser(): Promise<Browser> {
  if (!browserInstance || !browserInstance.isConnected()) {
    browserInstance = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-web-security",
        "--font-render-hinting=none",
      ],
    });
  }
  return browserInstance;
}

export async function generatePDFFromReact(options: {
  html: string;
  css: string;
}): Promise<Buffer> {
  // ← Enlève atsLayer
  const browser = await getBrowser();
  const page = await browser.newPage();

  try {
    const fullHTML = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <style>
          /* Reset pour PDF */
          * { margin: 0; padding: 0; box-sizing: border-box; }
          
          @page {
            size: A4;
            margin: 0;
          }
          
          /* Styles extraits du React */
          ${options.css}
          
          .cvSheet { 
            width: 210mm !important; 
            background: white !important; 
          }
            
          /* Chaque section/card évite les coupures */
          section,
          article,
          [class*="Card"],
          [class*="section"] {
            break-inside: avoid;
            page-break-inside: avoid;
          }
        </style>
      </head>
      <body>
        ${options.html}
      </body>
      </html>
    `;

    await page.setContent(fullHTML, {
      waitUntil: "networkidle0",
    });

    await page.setViewport({
      width: 794,
      height: 1123,
      deviceScaleFactor: 2,
    });

    await page.emulateMediaType("print");

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      preferCSSPageSize: true,
      displayHeaderFooter: false,
    });

    return Buffer.from(pdfBuffer);
  } finally {
    await page.close();
  }
}

export async function closeBrowser() {
  if (browserInstance) {
    await browserInstance.close();
    browserInstance = null;
  }
}
