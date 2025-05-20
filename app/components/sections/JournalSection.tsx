import { BadgeNew } from "../ui/BadgeNew";
import { LinkPreview } from "@/components/ui/link-preview";

export default function JournalSection() {
  return (
    <div className="flex flex-col gap-1 text-justify leading-relaxed">
      <h2 className="text-xl text-gray-500 font-semibold uppercase">Journal</h2>
      <div className="text-gray-400 text-sm text-justify leading-relaxed flex items-center gap-2">
        <BadgeNew />
        <span className="text-muted-foreground" text-base>Currently, I'm building</span>
        <div>
          <LinkPreview
            url="https://noodl.world"
            className=" text-base underline font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-[#0B23FF] isStatic"
          >
          Noodl
          </LinkPreview>
        </div>
      </div>
    </div>
  );
}