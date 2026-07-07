// AI Badge component — per brand guidelines, AI elements always show this badge

interface AIBadgeProps {
  label?: string
  size?: 'sm' | 'md'
}

export function AIBadge({ label = 'AI Generated', size = 'sm' }: AIBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full font-medium text-white
        bg-gradient-to-r from-blue-600 to-violet-600
        ${size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm'}`}
    >
      ✨ {label}
    </span>
  )
}
