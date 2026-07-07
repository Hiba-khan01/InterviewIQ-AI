import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { Providers } from '@/components/layout/Providers'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'InterviewIQ AI — AI-Powered Interview Preparation',
    template: '%s | InterviewIQ AI',
  },
  description:
    'Prepare for technical interviews with AI-powered resume analysis, personalized questions, live video interviews, and detailed feedback.',
  keywords: ['interview preparation', 'AI interview', 'resume analysis', 'mock interview', 'career'],
  authors: [{ name: 'InterviewIQ AI' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://interviewiq.ai',
    title: 'InterviewIQ AI',
    description: 'AI-Powered Interview Preparation Platform',
    siteName: 'InterviewIQ AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InterviewIQ AI',
    description: 'AI-Powered Interview Preparation Platform',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning className={inter.variable}>
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
