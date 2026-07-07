'use client'

import React from 'react'
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart as RechartsBarChart,
  Bar,
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts'

interface ChartProps {
  data: any[]
  xAxisKey?: string
  lines?: { key: string; color: string; label?: string }[]
  bars?: { key: string; color: string; label?: string }[]
  radarKeys?: { key: string; color: string; label?: string }[]
  height?: number
  valuePrefix?: string
  valueSuffix?: string
}

const customTooltipStyle = {
  backgroundColor: 'rgba(15, 23, 42, 0.95)',
  borderColor: 'rgba(255,255,255,0.1)',
  borderRadius: '12px',
  color: '#fff',
  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
  border: '1px solid rgba(255,255,255,0.1)'
}

export function AreaLineChart({ data, xAxisKey = 'name', lines = [], height = 300, valuePrefix = '', valueSuffix = '' }: ChartProps) {
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer>
        <RechartsLineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(120, 120, 120, 0.1)" />
          <XAxis
            dataKey={xAxisKey}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: 'var(--text-muted, #64748B)' }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: 'var(--text-muted, #64748B)' }}
            tickFormatter={(value) => `${valuePrefix}${value}${valueSuffix}`}
          />
          <Tooltip
            contentStyle={customTooltipStyle}
            itemStyle={{ color: '#fff' }}
            formatter={(value: number) => [`${valuePrefix}${value}${valueSuffix}`, '']}
          />
          <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }} />
          {lines.map((line) => (
            <Line
              key={line.key}
              type="monotone"
              dataKey={line.key}
              name={line.label || line.key}
              stroke={line.color}
              strokeWidth={3}
              dot={{ r: 4, fill: line.color, strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function BarChart({ data, xAxisKey = 'name', bars = [], height = 300, valuePrefix = '', valueSuffix = '' }: ChartProps) {
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer>
        <RechartsBarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(120, 120, 120, 0.1)" />
          <XAxis 
            dataKey={xAxisKey} 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: 'var(--text-muted, #64748B)' }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: 'var(--text-muted, #64748B)' }}
            tickFormatter={(value) => `${valuePrefix}${value}${valueSuffix}`}
          />
          <Tooltip
            contentStyle={customTooltipStyle}
            itemStyle={{ color: '#fff' }}
            cursor={{ fill: 'rgba(120, 120, 120, 0.1)' }}
            formatter={(value: number) => [`${valuePrefix}${value}${valueSuffix}`, '']}
          />
          <Legend wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }} />
          {bars.map((bar) => (
            <Bar 
              key={bar.key} 
              dataKey={bar.key} 
              name={bar.label || bar.key} 
              fill={bar.color} 
              radius={[4, 4, 0, 0]}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function SkillRadarChart({ data, xAxisKey = 'skill', radarKeys = [], height = 300 }: ChartProps) {
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer>
        <RechartsRadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="rgba(120, 120, 120, 0.15)" />
          <PolarAngleAxis 
            dataKey={xAxisKey} 
            tick={{ fill: 'var(--text-muted, #64748B)', fontSize: 12 }} 
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 100]} 
            tick={{ fill: 'var(--text-muted, #64748B)', fontSize: 10 }} 
            tickCount={5}
            axisLine={false}
          />
          <Tooltip contentStyle={customTooltipStyle} />
          <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }} />
          {radarKeys.map((rc) => (
            <Radar
              key={rc.key}
              name={rc.label || rc.key}
              dataKey={rc.key}
              stroke={rc.color}
              fill={rc.color}
              fillOpacity={0.4}
              dot={{ r: 3, fill: rc.color }}
            />
          ))}
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  )
}
