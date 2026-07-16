import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.RATE_EXCHANGE_API_KEY;

  const fallbackRate = Number(process.env.FALLBACK_USD_MMK_RATE || "4000");

  if (!apiKey) {
    return NextResponse.json({
      rate: fallbackRate,
      source: "fallback-no-key",
    });
  }

  try {
    const response = await fetch(
      `https://rate-api.com/api/v1/${apiKey}/latest`,
      {
        next: {
          revalidate: 3600,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Rate API network error: ${response.status}`);
    }

    const data = await response.json();

    if (!data || (!data.success && !data.rates)) {
      throw new Error(
        "Rate API returned an unexpected or unsuccessful response structure",
      );
    }

    const mmkRate = data?.rates?.MMK;

    if (!mmkRate) {
      throw new Error("MMK rate payload key unavailable");
    }

    return NextResponse.json({
      rate: Number(Number(mmkRate).toFixed(2)),
      base: data.base || "USD",
      currency: "MMK",
      source: "rate-api",
      date: data.date || new Date().toISOString().split("T")[0],
    });
  } catch (error) {
    console.error("Exchange rate fetch failed:", error);

    return NextResponse.json({
      rate: fallbackRate,
      source: "fallback-error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
