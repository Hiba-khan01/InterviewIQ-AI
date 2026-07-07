// Reusable error state component

interface ErrorStateProps {
  message?: string
  onRetry?: () => void
}

export function ErrorState({
  message = 'Something went wrong. Please try again.',
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 dark:bg-red-900/20 text-red-500">
        ⚠️
      </div>
      <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
        Something went wrong
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 px-5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-medium hover:border-slate-400 transition-colors"
        >
          Try again
        </button>
      )}
    </div>
  )
}
