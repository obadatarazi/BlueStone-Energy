/** Full wordmark + mark: `BlueStone Energy Logo White.png` (dark UI) and `BlueStone Energy Logo Dark.png` (light UI). */
import logoForDarkBg from '@/assets/logo-full-white.png'
import logoForLightBg from '@/assets/logo-full-dark.png'
import { cn } from '@/lib/utils'

/**
 * @param {'onDark' | 'onLight'} variant — onDark: white logo for dark backgrounds; onLight: full-color logo for light backgrounds
 */
export function Logo({ variant = 'onDark', className, alt = 'BlueStone Energy', ...props }) {
  const src = variant === 'onLight' ? logoForLightBg : logoForDarkBg
  return (
    <img
      src={src}
      alt={alt}
      className={cn('h-9 w-auto max-h-full object-contain object-left', className)}
      {...props}
    />
  )
}
