import { NextResponse } from 'next/server'

const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID ?? 'UCqAhVRJlLyY86vWAE5s_xhA'
const FALLBACK_VIDEO_ID = 'bKFXxGx6JhI'

export const revalidate = 3600

// Shorts redirect away from the /shorts/ URL when accessed with a non-mobile UA.
// If the final URL still contains /shorts/, it's a Short — skip it.
async function isShort(videoId: string): Promise<boolean> {
  try {
    const res = await fetch(`https://www.youtube.com/shorts/${videoId}`, {
      redirect: 'follow',
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; bot)' },
    })
    return res.url.includes('/shorts/')
  } catch {
    return false
  }
}

export async function GET() {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) throw new Error(`RSS fetch failed: ${res.status}`)
    const xml = await res.text()

    const videoIds = [...xml.matchAll(/<yt:videoId>([^<]+)<\/yt:videoId>/g)].map(m => m[1])
    const mediaTitles = [...xml.matchAll(/<media:title>([^<]+)<\/media:title>/g)].map(m => m[1])

    if (!videoIds.length) throw new Error('No videoIds in RSS')

    for (let i = 0; i < videoIds.length; i++) {
      const videoId = videoIds[i]
      if (await isShort(videoId)) continue
      const title = mediaTitles[i] ?? 'Latest Episode'
      return NextResponse.json({ videoId, title })
    }

    throw new Error('No long-form videos found in feed')
  } catch {
    return NextResponse.json({ videoId: FALLBACK_VIDEO_ID, title: 'Latest Episode' })
  }
}
