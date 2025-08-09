import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");

  if (!address) {
    return NextResponse.json(
      { error: "Address parameter is required" },
      { status: 400 }
    );
  }

  const censusUrl = `https://geocoding.geo.census.gov/geocoder/geographies/onelineaddress?address=${encodeURIComponent(
    address
  )}&benchmark=Public_AR_Current&vintage=Current_Current&layers=10&format=json`;

  try {
    const response = await fetch(censusUrl);
    const data = await response.json();

    if (data.result.addressMatches.length === 0) {
      return NextResponse.json({ error: "Address not found" }, { status: 404 });
    }

    // Extract county from the first match
    const geographies = data.result.addressMatches[0].geographies;
    const county = geographies["Counties"][0].NAME;

    return NextResponse.json({ county });
  } catch (error) {
    console.error("Geocoding API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch geocoding data" },
      { status: 500 }
    );
  }
}
