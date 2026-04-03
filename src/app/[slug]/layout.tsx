import { Metadata, ResolvingMetadata } from 'next';
import { supabase } from '@/lib/supabase';

interface Props {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Read route params
  const { slug } = await params;

  // 1. Fetch invitation from DB
  const { data: invitation } = await supabase
    .from('invitations')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!invitation) {
    return {
      title: 'Taklifnoma.Asia | To\'yingiz uchun eng go\'zal dizaynlar',
    };
  }

  const { groomName, brideName, date } = invitation.content;
  const title = `${groomName} & ${brideName} — Nikoh to'yi taklifnomasi 💍`;
  const description = `${date} kuni bo'ladigan baxtli kunimizga lutfan taklif etamiz! ✨`;

  // 2. Generate Dynamic OG Image URL
  // We use the full URL if we're in production, or fallback for localhost
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://taklifnoma.asia';
  const ogImage = `${baseUrl}/api/og?groom=${encodeURIComponent(groomName)}&bride=${encodeURIComponent(brideName)}&date=${encodeURIComponent(date)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${slug}`,
      siteName: 'Taklifnoma.Asia',
      locale: 'uz_UZ',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${groomName} & ${brideName} Wedding`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function InvitationLayout({ children }: Props) {
  return <>{children}</>;
}
