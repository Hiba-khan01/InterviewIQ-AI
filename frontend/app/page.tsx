import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'InterviewIQ AI — AI-Powered Interview Preparation',
  description:
    'Prepare for technical interviews with AI-powered resume analysis, personalized questions, live video interviews, and detailed feedback.',
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="flex flex-col items-center gap-8 text-center px-4">
        {/* Logo placeholder */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">IQ</span>
          </div>
          <span className="text-white text-2xl font-semibold tracking-tight">InterviewIQ AI</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight max-w-3xl">
          Ace Your Interview with{' '}
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            AI-Powered
          </span>{' '}
          Practice
        </h1>

        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl leading-relaxed">
          AI Resume Analysis · Personalized Questions · Live Video Interviews · Real-time Feedback
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/register"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started Free
          </Link>
          <Link
            href="/login"
            className="px-8 py-3 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-colors"
          >
            Sign In
          </Link>
        </div>

        <p className="text-slate-600 text-sm">
          🚀 Scaffold complete — Features coming in Milestone 1+
        </p>
      </div>
    </main>
  )
}
