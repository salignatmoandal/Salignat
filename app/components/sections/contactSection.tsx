import Dock from "../ui/Dock";

export default function ContactSection() {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-sm text-gray-500 font-semibold uppercase">Discuss</h2>
      <p className="text-muted-foreground text-base leading-relaxed">
        Get in touch with me at{" "}
        <a href="mailto:mwnslg@gmail.com" className="underline text-[#0B23FF] hover:text-[#0B23FF]/80">
          mwnslg@gmail.com
        </a>
        .
      </p>
      <Dock />
    </div>
  );
}