import { Header } from '@/src/components/layout/Header'
import '../styles/globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />  
        {children}
      </body>
    </html>
  )
}
