// app/api/generate-cv/route.ts
import { NextRequest, NextResponse } from "next/server";
import { generatePDFFromReact } from "@/../lib/pdf-generator";
import { CVData } from "@/data/cv.data";

export const maxDuration = 30;

export async function POST(request: NextRequest) {
  try {
    const LANGS = ["fr", "en"] as const;
    const MODES = ["dev", "sec"] as const;

    type Lang = (typeof LANGS)[number];
    type Mode = (typeof MODES)[number];

    function isLang(value: unknown): value is Lang {
      return LANGS.includes(value as Lang);
    }

    function isMode(value: unknown): value is Mode {
      return MODES.includes(value as Mode);
    }

    const body = await request.json();

    const { html, css, lang, mode } = body;

    if (typeof html !== "string" || typeof css !== "string") {
      return NextResponse.json(
        { error: "Missing html or css" },
        { status: 400 },
      );
    }

    if (!isLang(lang) || !isMode(mode)) {
      return NextResponse.json(
        { error: "Invalid lang or mode" },
        { status: 400 },
      );
    }

    console.log(`[PDF Generator] Generating CV: ${lang}/${mode}`);
    const startTime = Date.now();

    const data = CVData[lang][mode];

    const pdfBuffer = await generatePDFFromReact({
      html,
      css,
    });

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`[PDF Generator] ✅ PDF generated in ${elapsed}s`);

    const filename = `Paul_NELATON_${mode}_${lang}.pdf`;

    return new NextResponse(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error("[PDF Generator] ❌ Error:", error);
    return NextResponse.json(
      {
        error: "Failed to generate PDF",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
