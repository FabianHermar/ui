import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";

const GridPatternLinearGradient = ({ children }) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
			{children}
    </div>
  );
};

export default GridPatternLinearGradient;
