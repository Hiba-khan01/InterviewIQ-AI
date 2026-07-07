import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'History' }

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Interview History</h1>
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-16 text-center">
        <p className="text-slate-400">Interview history coming in Milestone 5</p>
      </div>
    </div>
  )
}
