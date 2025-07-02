import { BadgeNew } from "../ui/BadgeNew";
import { LinkPreview } from "@/components/ui/link-preview";

export default function JournalSection() {
  return (
    <div className="flex flex-col gap-1 text-justify leading-relaxed">
      <h2 className="text-xl text-gray-500 uppercase">Today</h2>
      <div className="text-gray-400 text-sm text-justify leading-relaxed flex items-center gap-2">
        <BadgeNew />
        <span className="text-muted-foreground text-base">I&apos;m building </span>
        <div>
          <LinkPreview
            url="https://noodl.world"
            className=" text-lg underline  bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-purple-700 isStatic"
          >
          Noodl
          </LinkPreview>
        </div>
      </div>
      <div className="text-gray-400 text-sm text-justify leading-relaxed flex items-center gap-2">
        <BadgeNew />
        {/* <span className="text-muted-foreground text-base">Platform Backend · </span>
        <div>
          <LinkPreview
            // url="https://gottaphish.com/"
            className=" text-lg underline  bg-clip-text text-transparent bg-gradient-to-br from-[#FFa84c] to-[#FFa84c] isStatic"
          >
          Gottapish 
          </LinkPreview>
        </div> */}

      </div>
    </div>
  );
}