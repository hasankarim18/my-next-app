

import Menu from '@/components/Menu';
import Banner from '@/components/Home/Banner'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto">
      <Menu />
    
      <Banner />
    </main>
  );
}
