import { mergeClass } from '@shared/utils/helpers'
import * as React from 'react'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={mergeClass(
          'flex items-center h-11 w-full rounded-xl border border-border bg-input px-4 py-2 text-sm focus:border-border file:border-0 placeholder:text-foreground/60 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 ',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
