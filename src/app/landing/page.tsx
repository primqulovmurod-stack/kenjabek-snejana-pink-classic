import { Metadata } from 'next';
import LandingPage from '@/components/landing/LandingPage';

export const metadata: Metadata = {
  title: "Taklifnoma.Asia — Zamonaviy Virtual Taklifnomalar | 2026 Premium Dizaynlar 💍",
  description: "O'zbekistondagi eng chiroyli va interaktiv virtual taklifnomalar xizmati. 3 daqiqa ichida o'z taklifnomangizni yarating. Musiqa, xarita va to'yona kartasi bilan! ✨",
  keywords: ["virtual taklifnoma", "online taklifnoma", "to'y taklifnomasi", "raqamli taklifnoma", "wedding invitation uzbekistan", "taklifnoma yozish"],
  authors: [{ name: "Taklifnoma.Asia Team" }],
  creator: "Taklifnoma.Asia",
  publisher: "Taklifnoma.Asia",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Taklifnoma.Asia — Zamonaviy Virtual Taklifnomalar 💍",
    description: "Premium darajadagi virtual taklifnomalarni bir zumda yarating. Biz bilan baxtli kuningiz yanada go'zal bo'ladi!",
    url: "https://taklifnoma.asia",
    siteName: "Taklifnoma.Asia",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "https://taklifnoma.asia/api/og?groom=ZAMONAVIY&bride=TAKLIFNOMALAR&date=TAKIFNOMA.ASIA",
        width: 1200,
        height: 630,
        alt: "Taklifnoma.Asia — Virtual Invitations Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taklifnoma.Asia — Online Taklifnomalar",
    description: "Eng chiroyli virtual taklifnomalar 3 daqiqa ichida!",
    images: ["https://taklifnoma.asia/api/og?groom=ZAMONAVIY&bride=TAKLIFNOMALAR&date=TAKIFNOMA.ASIA"],
  },
};

export default function Page() {
  return <LandingPage />;
}
