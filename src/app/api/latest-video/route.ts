import { NextResponse } from 'next/server'

const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID ?? 'UCqAhVRJlLyY86vWAE5s_xhA'
const FALLBACK_VIDEO_ID = 'bKFXxGx6JhI'

export const revalidate = 3600

export async function GET() {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) throw new Error(`RSS fetch failed: ${res.status}`)
    const xml = await res.text()

    const videoIdMatch = xml.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)
    if (!videoIdMatch) throw new Error('No videoId in RSS')

    const allTitles = [...xml.matchAll(/<title>([^<]+)<\/title>/g)]
    const title = allTitles[1]?.[1] ?? 'Latest Episode'

    return NextResponse.json({ videoId: videoIdMatch[1], title })
  } catch {
    return NextResponse.json({ videoId: FALLBACK_VIDEO_ID, title: 'Latest Episode' })
  }
}
