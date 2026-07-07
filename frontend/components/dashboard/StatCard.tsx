'use client'

import { Info, AlertTriangle, TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

interface StatCardProps {
  title: string
  value: string | number
  icon?: React.ReactNode
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
  loading?: boolean
  description?: string
}

export function StatCard({ title, value, icon, trend, trendValue, description, loading }: StatCardProps) {
  if (loading) {
    return (
      <Card>
        <CardContent className="p-6 h-full flex flex-col justify-center gap-2">
          <Skeleton className="h-4 w-24 mb-1" />
          <Skeleton className="h-8 w-20 mb-2" />
          <Skeleton className="h-3 w-32" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card variant="interactive" className="h-full">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
            <p className="text-2xl font-bold tracking-tight">{value}</p>
          </div>
          {icon && (
            <div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
              {icon}
            </div>
          )}
        </div>
        
        {(trendValue || description) && (
          <div className="mt-4 flex items-center gap-2 text-sm">
            {trend === 'up' && <TrendingUp className="h-4 w-4 text-green-500" />}
            {trend === 'down' && <TrendingDown className="h-4 w-4 text-red-500" />}
            {trend === 'neutral' && <Minus className="h-4 w-4 text-slate-400" />}
            {trendValue && (
              <span
                className={`font-medium ${
                  trend === 'up' ? 'text-green-500' : trend === 'down' ? 'text-red-500' : 'text-slate-500'
                }`}
              >
                {trendValue}
              </span>
            )}
            {description && <span className="text-slate-500">{description}</span>}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
