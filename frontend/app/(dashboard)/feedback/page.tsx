import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Feedback' }

export default function FeedbackPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Feedback</h1>
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-16 text-center">
        <p className="text-slate-400">Feedback dashboard coming in Milestone 5</p>
      </div>
    </div>
  )
}
