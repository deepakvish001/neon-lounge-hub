
import { cn } from "@/lib/utils";

interface GameModeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export const GameModeCard = ({
  title,
  description,
  icon,
  className,
}: GameModeCardProps) => {
  return (
    <div
      className={cn(
        "glass p-6 rounded-lg hover-scale cursor-pointer group",
        className
      )}
    >
      <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};
