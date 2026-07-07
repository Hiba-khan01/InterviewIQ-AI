import type { Metadata } from 'next'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { StatCard } from '@/components/dashboard/StatCard'
import { AreaLineChart, SkillRadarChart, BarChart } from '@/components/shared/Charts'
import { Button } from '@/components/ui/button'
import { FileText, Video, TrendingUp, Award, Calendar, Activity, CheckCircle2, Play } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { BRAND_COLORS } from '@/constants/brand.constants'

export const metadata: Metadata = { title: 'Dashboard' }

// MOCK DATA for Dashboard
const mockStats = {
  resumeScore: 84,
  resumeScoreWeeklyChange: '+5',
  interviewScore: 78,
  interviewScoreWeeklyChange: '+12',
  totalInterviews: 12,
  upcomingInterview: 'Tomorrow, 10:00 AM'
}

const mockWeeklyProgress = [
  { name: 'Mon', score: 65, avg: 70 },
  { name: 'Tue', score: 68, avg: 70 },
  { name: 'Wed', score: 75, avg: 71 },
  { name: 'Thu', score: 72, avg: 71 },
  { name: 'Fri', score: 82, avg: 72 },
  { name: 'Sat', score: 88, avg: 73 },
  { name: 'Sun', score: 90, avg: 75 },
]

const mockSkillRadar = [
  { skill: 'React', candidate: 90, expected: 85 },
  { skill: 'Next.js', candidate: 80, expected: 90 },
  { skill: 'System Design', candidate: 65, expected: 80 },
  { skill: 'Communication', candidate: 85, expected: 85 },
  { skill: 'Algorithms', candidate: 70, expected: 75 },
]

const mockRecentInterviews = [
  { id: '1', role: 'Frontend Engineer', company: 'Google', date: '2 days ago', score: 85, type: 'Technical' },
  { id: '2', role: 'Full Stack Dev', company: 'Amazon', date: '4 days ago', score: 72, type: 'Mixed' },
  { id: '3', role: 'React Developer', company: 'Vercel', date: '1 week ago', score: 90, type: 'Coding' },
]

const mockActivityFeed = [
  { id: '1', text: 'Scored 85% on Frontend Engineer Mock Interview', time: '2 days ago', type: 'success' },
  { id: '2', text: 'Your resume analysis identified 3 missing keywords', time: '3 days ago', type: 'warning' },
  { id: '3', text: 'You achieved a 7-day practice streak!', time: '1 week ago', type: 'info' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in fade-in">
      {/* Welcome Banner */}
      <div className="relative rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-8 overflow-hidden shadow-lg border-0">
        <div className="relative z-10 text-white max-w-2xl space-y-3">
          <Badge variant="ai" className="bg-white/20 hover:bg-white/30 text-white border-0 shadow-none mb-2 inline-flex">
            ✨ AI Ready
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back! Keep up the momentum.</h1>
          <p className="text-blue-100 text-sm md:text-base leading-relaxed">
            Your technical scores are trending up by 12% this week. We suggest focusing on System Design in your next mock interview to boost your overall profile.
          </p>
          <div className="flex gap-4 pt-4">
            <Link href="/interview">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 border-0 rounded-xl px-6">
                <Play className="h-4 w-4 mr-2" /> Start Mock Interview
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute right-32 bottom-0 w-48 h-48 bg-violet-300 opacity-20 rounded-full blur-2xl translate-y-1/4"></div>
      </div>

      {/* Snapshot / Statistic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Resume ATS Score"
          value={`${mockStats.resumeScore}%`}
          icon={<FileText />}
          trend="up"
          trendValue={mockStats.resumeScoreWeeklyChange}
          description="vs last upload"
        />
        <StatCard
          title="Average Interview Score"
          value={`${mockStats.interviewScore}%`}
          icon={<TrendingUp />}
          trend="up"
          trendValue={mockStats.interviewScoreWeeklyChange}
          description="vs last week"
        />
        <StatCard
          title="Total Interviews Completed"
          value={mockStats.totalInterviews}
          icon={<CheckCircle2 />}
          trend="neutral"
          description="lifetime total"
        />
        <StatCard
          title="Upcoming Intervew"
          value="Meta Tech"
          icon={<Calendar />}
          description={mockStats.upcomingInterview}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Weekly Progress Chart */}
        <Card className="lg:col-span-2 shadow-sm rounded-2xl">
          <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <AreaLineChart
              data={mockWeeklyProgress}
              xAxisKey="name"
              lines={[
                { key: 'score', color: BRAND_COLORS.blue, label: 'Your Score' },
                { key: 'avg', color: BRAND_COLORS.warning, label: 'Peer Average' }
              ]}
              height={320}
              valueSuffix="%"
            />
          </CardContent>
        </Card>

        {/* Skill Radar */}
        <Card className="shadow-sm rounded-2xl">
          <CardHeader>
            <CardTitle>Skill Radar</CardTitle>
          </CardHeader>
          <CardContent>
            <SkillRadarChart
              data={mockSkillRadar}
              radarKeys={[
                { key: 'candidate', color: BRAND_COLORS.blue, label: 'You' },
                { key: 'expected', color: BRAND_COLORS.purple, label: 'Expected' }
              ]}
              height={320}
            />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Recent Interviews */}
        <Card className="col-span-1 lg:col-span-2 shadow-sm rounded-2xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Recent Interviews</CardTitle>
            <Link href="/history">
              <Button variant="ghost" size="sm" className="text-blue-600">View All</Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 pt-4">
              {mockRecentInterviews.map((interview) => (
                <div key={interview.id} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Video className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white text-sm">{interview.role}</p>
                      <p className="text-xs text-slate-500">{interview.company} • {interview.date}</p>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end gap-1">
                    <Badge variant={interview.score >= 80 ? 'success' : interview.score >= 70 ? 'warning' : 'destructive'} size="sm">
                      {interview.score}% Score
                    </Badge>
                    <span className="text-xs text-slate-400">{interview.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity Feed */}
        <Card className="col-span-1 shadow-sm rounded-2xl">
          <CardHeader>
            <CardTitle>Activity Feed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6 pt-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent dark:before:via-slate-800">
              {mockActivityFeed.map((activity, i) => (
                <div key={activity.id} className="relative flex items-start gap-4">
                  <div className={`mt-1 h-2 w-2 shrink-0 rounded-full z-10
                    ${activity.type === 'success' ? 'bg-green-500 ring-4 ring-green-100 dark:ring-green-900/30' : 
                      activity.type === 'warning' ? 'bg-amber-500 ring-4 ring-amber-100 dark:ring-amber-900/30' : 
                      'bg-blue-500 ring-4 ring-blue-100 dark:ring-blue-900/30'}`} 
                  />
                  <div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{activity.text}</p>
                    <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}
