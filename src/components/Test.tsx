import { cn } from "@/lib/utils";
import { ShareModal } from "./utils/react-only/ShareModal";
import { Button } from "./ui/button";

type TTest = {
  className?: string;
};

export function Test({ className }: TTest) {
  return (
    <div className={cn("", className)}>
      <ShareModal shareUrl={"https://www.google.com"}>
        <Button className="">Hello World</Button>
      </ShareModal>
    </div>
  );
}
