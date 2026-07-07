import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Interview Setup' }

interface Props {
  params: Promise<{ id: string }>
}

export default async function InterviewDetailPage({ params }: Props) {
  const { id } = await params
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Interview Setup</h1>
      <p className="text-slate-400">Interview ID: {id}</p>
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-16 text-center">
        <p className="text-slate-400">Interview detail coming in Milestone 3</p>
      </div>
    </div>
  )
}
