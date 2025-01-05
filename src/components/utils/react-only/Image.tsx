import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useLazyLoad } from "@/hooks/useLazyLoad";
import { cn } from "@/lib/utils";

// requires client:load directive to work,
interface ResponsiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function Image({
  src,
  alt,
  width,
  height,
  className = "",
}: ResponsiveImageProps) {
  const [imageRef, isInView] = useLazyLoad();
  const [isLoaded, setIsLoaded] = useState(false);
  const aspectRatio = `${width} / ${height}`;

  return (
    <div
      ref={imageRef}
      className={cn("relative w-full overflow-hidden", className)}
      style={{
        aspectRatio: aspectRatio,
        maxWidth: `${width}px`,
      }}
    >
      {isInView ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            "absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      ) : null}
      {!isLoaded && (
        <Skeleton className="absolute top-0 left-0 w-full h-full rounded-none" />
      )}
    </div>
  );
}
