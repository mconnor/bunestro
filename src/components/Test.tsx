import { cn } from "@/lib/utils";
import { ShareModal } from "./utils/react-only/ShareModal";
import { Button } from "./ui/button";
import { Image } from "./utils/react-only/Image";
// import Image from "./utils/react-only/Image";
type TTest = {
  className?: string;
};

export function Test({ className }: TTest) {
  return (
    <div className={cn("container flex flex-col gap-4", className)}>
      <ShareModal shareUrl={"https://www.google.com"}>
        <Button className="mx-auto mt-12">Hello World</Button>
      </ShareModal>

      <div className="flex flex-wrap gap-4 justify-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <Image
            key={index}
            src={`https://picsum.photos/800/600?random=${index}`}
            alt={`Random image ${index + 1}`}
            width={200}
            height={280}
            className="rounded-md"
          />
        ))}
      </div>
    </div>
  );
}
