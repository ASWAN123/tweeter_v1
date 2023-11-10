import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar'
import { EdgeStoreProvider } from '@/app/lib/edgestore';
const inter = Inter({ subsets: ['latin'] })
import SessionProvider from './componenets/SessionProvider'
import  {  getServerSession } from "next-auth"
import { authOptions } from './pages/api/auth/[...nextauth]/route'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 



{



  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={`${inter.className} `} >
        <SessionProvider session={session}>
          <Navbar />
          <main className='relative'>
          <EdgeStoreProvider>{children}</EdgeStoreProvider>
          </main>
        </SessionProvider>

      </body>
    </html>
  )
}
