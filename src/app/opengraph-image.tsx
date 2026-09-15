import { ImageResponse } from 'next/og';
import { siteTitle } from '@/lib/site';

export const alt = siteTitle;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#09090b',
          color: '#fafafa',
        }}
      >
        <div style={{ fontSize: 40, color: '#a1a1aa' }}>A.A</div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 40 }}>Anandu A Pillai</div>
        <div style={{ fontSize: 44, color: '#d4d4d8', marginTop: 16 }}>Frontend-First Full Stack Developer</div>
        <div style={{ fontSize: 30, color: '#71717a', marginTop: 56 }}>anandu.dev</div>
      </div>
    ),
    size
  );
}
