'use client'

import { UserCircle, LogOut, Settings, LayoutDashboard, FileText, Video, History, BarChart2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/lib/utils'
import { AIBadge } from '../shared/AIBadge'
import { SignOutButton, SignedIn } from '@clerk/nextjs'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: ROUTES.DASHBOARD },
  { icon: FileText, label: 'Resume', href: ROUTES.RESUME },
  { icon: Video, label: 'Interviews', href: ROUTES.INTERVIEWS },
  { icon: History, label: 'History', href: ROUTES.HISTORY },
  { icon: BarChart2, label: 'Analytics', href: ROUTES.ANALYTICS },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex flex-col w-[280px] shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-screen sticky top-0">
      {/* Brand */}
      <div className="flex items-center gap-3 h-[72px] px-6 border-b border-slate-200 dark:border-slate-800 shrink-0">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
          <span className="text-white font-bold text-sm">IQ</span>
        </div>
        <span className="font-semibold text-lg text-slate-900 dark:text-white">InterviewIQ</span>
        <AIBadge />
      </div>

      {/* Main Nav */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group',
                isActive
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-100'
              )}
            >
              <item.icon
                className={cn(
                  'h-5 w-5',
                  isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-400'
                )}
              />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Footer Nav */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800 space-y-1">
        <Link
          href={ROUTES.PROFILE}
          className={cn(
            'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group',
            pathname === ROUTES.PROFILE
              ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-100'
          )}
        >
          <UserCircle className="h-5 w-5 text-slate-400" />
          Profile
        </Link>
        <Link
          href={ROUTES.SETTINGS}
          className={cn(
            'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group',
            pathname === ROUTES.SETTINGS
              ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-100'
          )}
        >
          <Settings className="h-5 w-5 text-slate-400" />
          Settings
        </Link>
        <SignedIn>
          <SignOutButton>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-900/10 hover:text-red-600 dark:hover:text-red-400 transition-all group">
              <LogOut className="h-5 w-5 text-slate-400 group-hover:text-red-500 transition-colors" />
              Log Out
            </button>
          </SignOutButton>
        </SignedIn>
      </div>
    </aside>
  )
}
