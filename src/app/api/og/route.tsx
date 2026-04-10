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

    // Configuration based on theme
    let styleConfig = {
      bg: '#0A0A0A',
      accent: '#E11D48',
      text: 'white',
      subtext: '#9CA3AF',
      gradient: 'radial-gradient(circle at 50% 50%, #E11D4820 0%, transparent 80%)',
      border: '#141416',
      ornament: 'rgba(225, 29, 72, 0.1)',
      label: "Nikan To'yi Taklifnomasi"
    };

    if (theme === 'gold-white' || theme === 'gold-classic-white' || theme === 'floral' || theme === 'pink-white') {
      styleConfig = {
        bg: '#FFFFFF',
        accent: theme.includes('pink') ? '#E11D48' : '#D4AF37',
        text: '#1A1A1A',
        subtext: '#6B7280',
        gradient: theme.includes('pink') ? 'radial-gradient(circle at 50% 50%, #FFE4E6 0%, transparent 80%)' : 'radial-gradient(circle at 50% 50%, #FAF3E0 0%, transparent 80%)',
        border: '#F3F4F6',
        ornament: theme.includes('pink') ? 'rgba(225, 29, 72, 0.05)' : 'rgba(212, 175, 55, 0.1)',
        label: "Nikoh To'yi Taklifnomasi"
      };
    } else if (theme === 'goldclassic' || theme === 'rolex') {
      styleConfig = {
        bg: '#050505',
        accent: '#D4AF37',
        text: '#FDFCF0',
        subtext: '#A39268',
        gradient: 'radial-gradient(circle at 50% 50%, #D4AF3715 0%, transparent 80%)',
        border: '#111111',
        ornament: 'rgba(212, 175, 55, 0.1)',
        label: "Premium Nikoh Taklifnomasi"
      };
    } else if (theme === 'milliy') {
      styleConfig = {
        bg: '#003366', // Deep Uzbek Blue
        accent: '#FFD700',
        text: 'white',
        subtext: '#B0C4DE',
        gradient: 'radial-gradient(circle at 50% 50%, #004080 0%, transparent 80%)',
        border: '#00264d',
        ornament: 'rgba(255, 215, 0, 0.1)',
        label: "Milliy Nikoh Taklifnomasi"
      };
    }

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
            backgroundColor: styleConfig.bg,
            backgroundImage: styleConfig.gradient,
            position: 'relative',
            padding: '60px',
            border: `24px solid ${styleConfig.border}`,
          }}
        >
          {/* Logo/Site Name */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: styleConfig.accent,
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
              border: `2px solid ${styleConfig.ornament}`,
              borderRadius: '20px',
            }}
          />

          {/* Icon/Heart */}
          <div
            style={{
                display: 'flex',
                marginBottom: '20px',
                color: styleConfig.accent,
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
              color: styleConfig.text,
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
              color: styleConfig.subtext,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              marginBottom: '40px',
            }}
          >
            {styleConfig.label}
          </div>

          {/* Date Badge */}
          <div
            style={{
              display: 'flex',
              padding: '12px 40px',
              backgroundColor: styleConfig.accent,
              borderRadius: '100px',
              color: styleConfig.bg === '#FFFFFF' ? 'white' : 'white',
              fontSize: '28px',
              fontWeight: 800,
              boxShadow: `0 20px 40px ${styleConfig.accent}40`,
            }}
          >
            {date}
          </div>

          {/* Footer Promo */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              color: styleConfig.subtext,
              opacity: 0.5,
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
