import StitchInvitation from '@/components/StitchInvitation/Main';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alisher & Madina - Nikoh to\'yi',
  description: 'Bizning baxtli kunimizga lutfan taklif etamiz!',
  openGraph: {
    title: 'Alisher & Madina - Nikoh to\'yi',
    description: 'Bizning baxtli kunimizga lutfan taklif etamiz!',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuD_N7P8WXrSoxqdnGlfiVuNkiBmg1dJO4a418teSDNLnHVeuhVKzLwUqSws2vwvNld3DgKr9lWVu695cDpW5-Ma9JSVQU_ssrtj9GAVkY-XDjf7MEpYgRRyLNHVoK-3PVLNS3evObs4C7X4Hrn75Hl1A3Quv_E2dB-4xssRlIO1E-dBnxPQYpSZ2E-MlCsD1IDD3DDk8NA-brPrW92WpLPV4Wwt5XYo2pBxA7L7LbcVcYvuok9bV8BT-2wsyHkRGmuUZFsMHYX5DpCq'],
  }
};

export default function InvitationPage() {
  return <StitchInvitation />;
}
