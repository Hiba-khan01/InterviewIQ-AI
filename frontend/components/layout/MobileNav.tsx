'use client'

import { LayoutDashboard, FileText, Video, UserCircle } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ROUTES } from '@/constants/routes'
import { cn } from '@/lib/utils'

const navItems = [
  { icon: LayoutDashboard, label: 'Home', href: ROUTES.DASHBOARD },
  { icon: FileText, label: 'Resume', href: ROUTES.RESUME },
  { icon: Video, label: 'Practice', href: ROUTES.INTERVIEWS },
  { icon: UserCircle, label: 'Profile', href: ROUTES.PROFILE },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 pb-safe">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center w-full h-full space-y-1',
                isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'
              )}
            >
              <item.icon className={cn('h-5 w-5', isActive && 'fill-blue-600/10 dark:fill-blue-400/10')} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
