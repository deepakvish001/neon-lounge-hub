
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  indicatorClassName?: string;
  showAnimation?: boolean;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, indicatorClassName, showAnimation = true, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full w-full flex-1 bg-[#95FF66] transition-all",
        showAnimation ? "duration-500 ease-in-out" : "",
        indicatorClassName
      )}
      style={{ 
        transform: `translateX(-${100 - (value || 0)}%)`,
        backgroundImage: showAnimation ? "linear-gradient(90deg, rgba(149, 255, 102, 0.8) 0%, #95FF66 50%, rgba(149, 255, 102, 0.9) 100%)" : ""
      }}
    />
    {showAnimation && (
      <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none">
        <div className="animate-pulse-subtle w-full h-full opacity-50 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
    )}
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
