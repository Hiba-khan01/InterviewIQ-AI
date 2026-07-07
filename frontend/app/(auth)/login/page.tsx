import { SignIn } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { BRAND_COLORS } from '@/constants/brand.constants'

export const metadata: Metadata = {
  title: 'Sign In',
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="w-full max-w-md p-8 md:p-0">
        <SignIn
          appearance={{
            elements: {
              rootBox: 'mx-auto',
              card: 'border border-slate-200 dark:border-slate-800 shadow-xl rounded-2xl bg-white dark:bg-slate-900',
              headerTitle: 'text-2xl font-bold text-slate-900 dark:text-white',
              headerSubtitle: 'text-slate-500 dark:text-slate-400',
              socialButtonsBlockButton: 'border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors',
              socialButtonsBlockButtonText: 'font-medium text-slate-600 dark:text-slate-300',
              dividerLine: 'bg-slate-200 dark:bg-slate-700',
              dividerText: 'text-slate-500',
              formFieldLabel: 'text-slate-700 dark:text-slate-300 font-medium',
              formFieldInput: 'h-11 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 transition-shadow',
              formButtonPrimary: 'h-11 rounded-full bg-blue-600 hover:bg-blue-700 font-medium shadow-sm transition-colors text-white',
              footerActionText: 'text-slate-500',
              footerActionLink: 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
              identityPreviewText: 'text-slate-900 dark:text-white',
              identityPreviewEditButton: 'text-blue-600 dark:text-blue-400',
            },
            variables: {
              colorPrimary: BRAND_COLORS.blue,
              colorBackground: 'transparent',
              colorText: 'inherit',
              colorDanger: BRAND_COLORS.danger,
              colorSuccess: BRAND_COLORS.success,
              borderRadius: '0.75rem',
            },
          }}
          routing="path"
          path="/login"
          fallbackRedirectUrl="/dashboard"
          signUpUrl="/register"
        />
      </div>
    </div>
  )
}
