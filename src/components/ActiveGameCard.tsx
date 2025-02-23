
import { cn } from "@/lib/utils";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActiveGameCardProps {
  title: string;
  players: number;
  maxPlayers: number;
  className?: string;
}

export const ActiveGameCard = ({
  title,
  players,
  maxPlayers,
  className,
}: ActiveGameCardProps) => {
  return (
    <div
      className={cn(
        "glass p-4 rounded-lg flex items-center justify-between group hover:border-primary/50 transition-colors",
        className
      )}
    >
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Users size={16} />
          <span>
            {players}/{maxPlayers}
          </span>
        </div>
      </div>
      <Button
        variant="ghost"
        className="hover:bg-primary/20 hover:text-primary transition-colors"
      >
        Join
      </Button>
    </div>
  );
};
