import { cn } from '@/lib/utils'

/** Keeps Western digits and +1 in correct order inside RTL (Arabic) layouts. */
export function PhoneNumber({ value, className, ...props }) {
  return (
    <bdi dir="ltr" className={cn('inline-block text-left [unicode-bidi:isolate]', className)} {...props}>
      {value}
    </bdi>
  )
}
