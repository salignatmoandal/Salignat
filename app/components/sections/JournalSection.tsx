import { BadgeNew } from "../ui/BadgeNew";

export default function JournalSection() {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-xl text-gray-500 font-semibold uppercase">Journal</h2>
      <p className="text-gray-400 text-sm text-justify leading-relaxed flex items-center gap-2">
        <BadgeNew />
        Currently, I'm building <span className="underline">Noodl</span>. It's an AI-powered mind mapping tool.
      </p>
    </div>
  );
}