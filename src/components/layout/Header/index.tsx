import { ROUTES } from '@/src/utils';
import Link from 'next/link';
import { Logo } from '../../Icons';

export const Header = () => {
  return (
    <header className='bg-white py-0'>
      <div className='container mx-auto flex justify-between items-center py-4'>
        <span>
          <Logo />
        </span>
        <nav>
          <ul>
            <Link href={ROUTES.CHARACTERS}>Characters</Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}