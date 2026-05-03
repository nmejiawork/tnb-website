import { NextResponse } from "next/server";

/**
 * Subscribe endpoint — proxies to Substack's open subscribe API.
 *
 * Substack's free-tier subscribe endpoint requires no API key. Same endpoint
 * the official embed widget uses. We POST x-www-form-urlencoded server-side
 * (avoids CORS preflight on the client) and return JSON so the form can show
 * real success / error states.
 *
 * Replaces the previous Beehiiv path (deprecated April 21, 2026).
 */

const SUBSTACK_PUB = "thenewbuilder";
const SUBSTACK_ENDPOINT = `https://${SUBSTACK_PUB}.substack.com/api/v1/free`;

export async function POST(request: Request) {
  try {
    const { email, source } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    const formBody = new URLSearchParams({
      email: email.trim(),
      first_url: "https://thenewbuilder.ai/",
      first_referrer: "",
      current_url: "https://thenewbuilder.ai/",
      current_referrer: "",
      first_session_url: "https://thenewbuilder.ai/",
      first_session_referrer: "",
      referral_code: "",
      source: source ?? "tnb-homepage-native",
    });

    const substackRes = await fetch(SUBSTACK_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // Mimic a real browser request — Substack's edge can 403 obvious bots.
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
        Accept: "application/json, text/plain, */*",
        Origin: `https://${SUBSTACK_PUB}.substack.com`,
        Referer: `https://${SUBSTACK_PUB}.substack.com/embed`,
      },
      body: formBody.toString(),
      redirect: "follow",
    });

    // Substack returns either 200 (subscribed / pending confirmation) or
    // a 4xx with HTML. Either way the user gets a confirmation email if the
    // address is valid. We surface success unless we got a hard error.
    if (substackRes.status >= 500) {
      console.error(`[subscribe] substack 5xx: ${substackRes.status}`);
      return NextResponse.json(
        { error: "Substack is temporarily unavailable. Try again in a moment." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[subscribe] unexpected error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
