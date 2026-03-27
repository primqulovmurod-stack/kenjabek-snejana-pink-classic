import { Metadata } from 'next';
import WatchDesignInvitation from '@/components/WatchDesignInvitation';

export const metadata: Metadata = {
  title: "Xurshid & Mohinur - Hashamatli Nashr",
  description: "Daqiqalar - abadiylik sari. Bizning eng baxtli kunimizga taklif etamiz.",
  openGraph: {
    title: "Xurshid & Mohinur - Hashamatli Nashr",
    description: "Daqiqalar - abadiylik sari. Bizning eng baxtli kunimizga taklif etamiz.",
    images: ['https://images.pexels.com/photos/30206324/pexels-photo-30206324/free-photo-of-elegant-gold-wedding-rings-on-marble-surface.jpeg'],
  }
};

export default function WatchPage() {
  return (
    <div className="bg-black min-h-screen">
      <WatchDesignInvitation 
        groomName="Xurshidbek"
        brideName="Mohinur"
        date="20 Iyun 2026"
        time="18:00"
        locationName="Oqsaroy Koshonasi"
        locationAddress="Surxondaryo viloyati, Sho'rchi tumani"
        imageUrl="https://images.pexels.com/photos/30206324/pexels-photo-30206324/free-photo-of-elegant-gold-wedding-rings-on-marble-surface.jpeg"
        musicUrl="https://www.learningcontainer.com/wp-content/uploads/2020/02/Sample-MP3-File.mp3"
      />
    </div>
  );
}
