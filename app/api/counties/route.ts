import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

// GET /api/counties -> [{ county, count }]
export async function GET() {
  try {
    const dataPath = path.join(process.cwd(), "Data_PCO", "PCO_Complete_All_Counties.json");
    const raw = await fs.readFile(dataPath, "utf8");
    const json = JSON.parse(raw) as Record<string, unknown[]>;

    const items = Object.entries(json)
      .map(([county, arr]) => ({ county, count: Array.isArray(arr) ? arr.length : 0 }))
      .sort((a, b) => a.county.localeCompare(b.county));

    return NextResponse.json(items);
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to load counties", detail: String(err?.message ?? err) }, { status: 500 });
  }
}
