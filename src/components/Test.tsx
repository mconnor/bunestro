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
    <section className={cn("flex flex-col gap-4", className)} id="test">
      <h1 className="text-center text-4xl font-bold my-10">
        Using react client side
      </h1>
      <ShareModal shareUrl={"https://www.google.com"}>
        <Button className="mx-auto mt-12">Share modal</Button>
      </ShareModal>

      <div className="flex flex-wrap gap-4 justify-center mb-4 p-6">
        {Array.from({ length: 620 }).map((_, index) => (
          <Image
            key={index}
            src={`https://picsum.photos/800/600?random=${index}`}
            alt={`Random image ${index + 1}`}
            width={300}
            height={500}
            className="rounded-md"
          />
        ))}
        <Image
          src={`/ogImage.png`}
          alt={`ig img`}
          width={300}
          height={500}
          className="rounded-md"
        />
      </div>
    </section>
  );
}
