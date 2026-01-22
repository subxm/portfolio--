import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Subham Singh Negi | Full Stack Developer',
  description: 'Computer Science undergraduate with hands-on experience in Java Full Stack and MERN development, building real-time and scalable web applications.',
  keywords: 'Subham Singh Negi, Full Stack Developer, Web Developer, Java, Spring Boot, React, Node.js',
  authors: [{ name: 'Subham Singh Negi' }],
  openGraph: {
    title: 'Subham Singh Negi | Full Stack Developer',
    description: 'Computer Science undergraduate with hands-on experience in Java Full Stack and MERN development.',
    type: 'website',
  },
  metadataBase: new URL('https://subhamnegi.dev'), // Set your production domain here
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}