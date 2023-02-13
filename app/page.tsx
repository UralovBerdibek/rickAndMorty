'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  console.log(router);
  
  return (
    <main className='container mx-auto'>
      <h1 className="text-3xl font-bold underline">The Rick And Morty</h1>
    </main>
  )
}
