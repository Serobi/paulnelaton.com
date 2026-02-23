export const runtime = "nodejs";
import { NextRequest, NextResponse } from "next/server";
import { generatePDF, buildCvHTML } from "@/../lib/pdf-generator";
import { CVData } from "@/data/cv.data";
import type { Lang, Mode } from "@/data/cv.types";
import fs from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      lang: Lang;
      mode: Mode;
    };
    const { lang, mode } = body;

    // Validation
    if (!["fr", "en"].includes(lang) || !["dev", "sec"].includes(mode)) {
      return NextResponse.json(
        { error: "Invalid lang or mode" },
        { status: 400 },
      );
    }

    console.log(`[PDF Generator] Generating CV: ${lang}/${mode}`);
    const startTime = Date.now();

    // Récupère les données CV
    const data = CVData[lang][mode];

    // Charge la photo de profil en base64 (optionnel)
    let profilePicBase64: string | undefined;
    const picPath = path.join(process.cwd(), "public", "profile2.png");

    if (fs.existsSync(picPath)) {
      const buffer = fs.readFileSync(picPath);
      profilePicBase64 = `data:image/png;base64,${buffer.toString("base64")}`;
    }

    // Construit le HTML complet
    const html = buildCvHTML(data, profilePicBase64);

    // Génère le PDF via Puppeteer
    const year = new Date().getFullYear();
    const filename = `CV_Paul_NELATON_${mode}_${lang}_${year}.pdf`;

    const pdfBuffer = await generatePDF({ html, filename });

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`[PDF Generator] ✅ PDF generated in ${elapsed}s`);

    // Retourne le PDF
    return new NextResponse(Buffer.from(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error("[PDF Generator] ❌ Error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 },
    );
  }
}
