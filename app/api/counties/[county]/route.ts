import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { normalizeParty } from "@/lib/party";
import type { PCO } from "@/lib/types";

function clean(value?: unknown): string | null {
  if (value == null) return null;
  let s = String(value).trim();
  if (!s) return null;
  // Remove common junk placeholders
  const junk = new Set(["-", "—", "()", "()-", "() -", "n/a", "na", "none"]);
  if (junk.has(s.toLowerCase())) return null;
  // Strip surrounding parentheses-only patterns
  if (/^\(\)$/.test(s)) return null;
  return s;
}

function toLowerKeyed(obj: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) out[k.toLowerCase()] = v;
  return out;
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ county: string }> }) {
  try {
    const { county } = await params;
    const countyParam = decodeURIComponent(county);
    const dataPath = path.join(process.cwd(), "Data_PCO", "PCO_Complete_All_Counties.json");
    const raw = await fs.readFile(dataPath, "utf8");
    const json = JSON.parse(raw) as Record<string, unknown[]>;

    // Find matching county case-insensitively
    const entry = Object.entries(json).find(([name]) => name.toLowerCase() === countyParam.toLowerCase());
    if (!entry) {
      return NextResponse.json({ error: "County not found" }, { status: 404 });
    }

    const [, rows] = entry;
    const pcos: PCO[] = (Array.isArray(rows) ? rows : []).map((row) => {
      const r = toLowerKeyed((row ?? {}) as Record<string, unknown>);
      const name = clean(r["name"]) ?? clean(r["full name"]) ?? clean(r["pco name"]) ?? "Unknown";
      const precinct = clean(r["precinct"]) ?? clean(r["precinct name"]) ?? null;
      const phone = clean(r["phone"]) ?? clean(r["phone number"]) ?? null;
      const email = clean(r["email"]) ?? clean(r["e-mail"]) ?? null;
      const address = clean(r["address"]) ?? clean(r["mailing address"]) ?? null;
      const partyKey = normalizeParty(clean(r["party"]) ?? null);
      return { name, party: partyKey, precinct, phone, email, address };
    });

    return NextResponse.json(pcos);
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to load county data", detail: String(err?.message ?? err) }, { status: 500 });
  }
}
