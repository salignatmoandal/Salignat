import Dock from "../ui/Dock";

export default function ContactSection() {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-sm text-gray-500 font-semibold uppercase">Discuss</h2>
      <p className="text-gray-400 text-sm leading-relaxed">
        Get in touch with me at <span className="underline text-[#0B23FF]">mwnslg@gmail.com</span>.
        <Dock />
      </p>
    </div>
  );
}