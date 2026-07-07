import { UserProfile } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { BRAND_COLORS } from '@/constants/brand.constants'

export const metadata: Metadata = {
  title: 'Profile Settings',
}

export default function ProfilePage() {
  return (
    <div className="space-y-6 flex flex-col items-center mb-8">
      <div className="w-full max-w-4xl max-w-none md:max-w-4xl ml-0 flex justify-start">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white self-start mb-6">Profile Settings</h1>
      </div>
      
      <div className="w-full h-full flex justify-center">
        <UserProfile
          appearance={{
            elements: {
              rootBox: 'mx-auto w-full md:max-w-4xl shadow-sm border border-slate-200 dark:border-slate-800 rounded-2xl',
              card: 'shadow-none bg-white dark:bg-slate-900 rounded-2xl mx-auto w-full max-w-full m-0',
              navbar: 'border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50',
              navbarButton: 'hover:bg-slate-100 dark:hover:bg-slate-800',
              headerTitle: 'text-slate-900 dark:text-white',
              headerSubtitle: 'text-slate-500 dark:text-slate-400',
              profileSectionTitle: 'text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 mb-4',
              profileSectionTitleText: 'text-slate-900 dark:text-white font-medium',
              profileSectionItem: 'hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors',
              accordionTriggerButton: 'text-blue-600 dark:text-blue-400',
              userPreviewMainIdentifier: 'text-slate-900 dark:text-white',
              userPreviewSecondaryIdentifier: 'text-slate-500',
              badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
              formButtonPrimary: 'h-11 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-colors text-white',
              formButtonReset: 'hover:bg-slate-100 dark:hover:bg-slate-800',
              formFieldLabel: 'text-slate-700 dark:text-slate-300 font-medium',
              formFieldInput: 'h-11 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 transition-shadow',
              dividerLine: 'bg-slate-200 dark:bg-slate-800',
            },
            variables: {
              colorPrimary: BRAND_COLORS.blue,
              colorBackground: 'transparent',
              colorText: 'inherit',
              colorDanger: BRAND_COLORS.danger,
              borderRadius: '0.75rem',
            },
          }}
        />
      </div>
    </div>
  )
}
