/** Full wordmark + mark: `BlueStone Energy Logo White.png` (dark UI) and `BlueStone Energy Logo Dark.png` (light UI). */
import { images } from '@/config/images'
import { cn } from '@/lib/utils'

/**
 * @param {'onDark' | 'onLight'} variant — onDark: white logo for dark backgrounds; onLight: full-color logo for light backgrounds
 */
export function Logo({ variant = 'onDark', className, alt = 'BlueStone Energy', ...props }) {
  const src = variant === 'onLight' ? images.logoDark : images.logoWhite
  return (
    <img
      src={src}
      alt={alt}
      className={cn('h-9 w-auto max-h-full object-contain object-left', className)}
      {...props}
    />
  )
}
