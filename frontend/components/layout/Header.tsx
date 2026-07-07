'use client'

import { Bell, Search } from 'lucide-react'
import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import { BRAND_COLORS } from '@/constants/brand.constants'

export function Header() {
  return (
    <header className="sticky top-0 z-10 h-[72px] border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-between px-4 lg:px-8 shrink-0">
      <div className="flex-1 flex items-center gap-4">
        {/* Search */}
        <div className="relative max-w-sm hidden sm:block w-full">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            placeholder="Search interviews, feedback..."
            className="w-full h-10 pl-10 pr-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400 dark:text-white"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative h-10 w-10 flex items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900" />
        </button>

        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800" />

        {/* Clerk Profile */}
        <SignedIn>
          <div className="h-8 w-8 flex items-center justify-center bg-transparent rounded-full hover:opacity-80 transition-opacity">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700',
                  userButtonPopoverCard: 'border border-slate-200 dark:border-slate-800 shadow-xl rounded-2xl bg-white dark:bg-slate-900',
                  userPreviewMainIdentifier: 'font-medium text-slate-900 dark:text-white',
                  userPreviewSecondaryIdentifier: 'text-slate-500 dark:text-slate-400',
                  userButtonPopoverActionButtonText: 'text-slate-700 dark:text-slate-300',
                  userButtonPopoverActionButtonIcon: 'text-slate-500 dark:text-slate-400',
                  userButtonPopoverActionButton: 'hover:bg-slate-50 dark:hover:bg-slate-800',
                  userButtonPopoverFooter: 'border-t border-slate-200 dark:border-slate-800',
                },
                variables: {
                  colorPrimary: BRAND_COLORS.blue,
                  colorBackground: 'transparent',
                },
              }}
            />
          </div>
        </SignedIn>
        
        {/* Fallback for safety, though middleware protects this route */}
        <SignedOut>
          <SignInButton mode="modal">
            <button className="text-sm font-medium text-blue-600">Sign In</button>
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  )
}
