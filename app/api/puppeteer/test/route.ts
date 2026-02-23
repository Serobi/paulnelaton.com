export const runtime = "nodejs";

import puppeteer from "puppeteer";
import { NextResponse } from "next/server";

export async function GET() {
  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  await page.goto("http://localhost:3000/cv", {
    waitUntil: "networkidle0",
  });

  await page.waitForSelector("body");

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: {
      top: "15mm",
      bottom: "15mm",
      left: "10mm",
      right: "10mm",
    },
  });

  await browser.close();

  return new NextResponse(Buffer.from(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="cv.pdf"',
    },
  });
}
