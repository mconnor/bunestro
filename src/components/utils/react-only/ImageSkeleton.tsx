import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

type TImageSkeleton = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  height?: number;
  width?: number;
};

export function ImageSkeleton({
  src,
  alt,
  className,
  imgClassName,
  height = 300,
  width = 500,
}: TImageSkeleton) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ height, width }}
    >
      {isLoading && (
        <div className="absolute inset-0">
          <Skeleton className="w-full h-full" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          imgClassName
        )}
      />
    </div>
  );
}
