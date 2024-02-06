import Chat from '@/components/Chat'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Liwa College Bot',
  description: 'Liwa College Chat Bot',
} 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <link rel="icon" href="/icon.png" sizes="any" />
      <Providers>
        <body className={inter.className}>
          <Chat />
          {children}
        </body>
      </Providers>
    </html>
  )
}
