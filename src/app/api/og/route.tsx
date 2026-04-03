import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Get parameters
    const groom = searchParams.get('groom') || 'Kuyov';
    const bride = searchParams.get('bride') || 'Kelin';
    const date = searchParams.get('date') || '2026';
    const theme = searchParams.get('theme') || 'luxury';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0A0A0A',
            backgroundImage: 'radial-gradient(circle at 50% 50%, #E11D4820 0%, transparent 80%)',
            position: 'relative',
            padding: '60px',
            border: '24px solid #141416',
          }}
        >
          {/* Logo/Site Name */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#E11D48',
              fontSize: '24px',
              fontWeight: 900,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Taklifnoma.Asia
          </div>

          {/* Decorative Border */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              right: '20px',
              bottom: '20px',
              border: '2px solid rgba(225, 29, 72, 0.1)',
              borderRadius: '20px',
            }}
          />

          {/* Icon/Heart */}
          <div
            style={{
                display: 'flex',
                marginBottom: '20px',
                color: '#E11D48',
                opacity: 0.8
            }}
          >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          {/* Main Title - The Names */}
          <div
            style={{
              display: 'flex',
              fontSize: '100px',
              fontWeight: 900,
              color: 'white',
              textAlign: 'center',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              marginBottom: '20px',
              fontFamily: 'serif',
            }}
          >
            {groom} & {bride}
          </div>

          <div
            style={{
              fontSize: '32px',
              color: '#9CA3AF',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              marginBottom: '40px',
            }}
          >
            Nikan To'yi Taklifnomasi
          </div>

          {/* Date Badge */}
          <div
            style={{
              display: 'flex',
              padding: '12px 40px',
              backgroundColor: '#E11D48',
              borderRadius: '100px',
              color: 'white',
              fontSize: '28px',
              fontWeight: 800,
              boxShadow: '0 20px 40px rgba(225, 29, 72, 0.3)',
            }}
          >
            {date}
          </div>

          {/* Footer Promo */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              color: 'rgba(255,255,255,0.3)',
              fontSize: '18px',
              fontWeight: 700,
              letterSpacing: '0.1em',
            }}
          >
            2026 PREMIUM VIRTUAL EDITION
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
