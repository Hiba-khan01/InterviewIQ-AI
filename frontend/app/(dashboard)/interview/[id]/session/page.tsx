import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Live Interview' }

interface Props {
  params: Promise<{ id: string }>
}

export default async function InterviewSessionPage({ params }: Props) {
  const { id } = await params
  return (
    <div className="h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center text-slate-400 space-y-4">
        <div className="text-6xl">🎥</div>
        <h1 className="text-2xl font-bold text-white">Live Interview Room</h1>
        <p className="text-slate-500">Session ID: {id}</p>
        <p className="text-slate-500">LiveKit video room coming in Milestone 3</p>
      </div>
    </div>
  )
}
