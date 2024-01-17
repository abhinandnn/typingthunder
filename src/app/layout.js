import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TypingThunder',
  description: 'Type.......',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Toaster position="top-center" />
        {children}</body>
    </html>
  )
}
