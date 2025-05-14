'use client'
import { BadgeNew } from "./ui/BadgeNew";
import HoverBubble from "./ui/HoverBubble";
import Navbar from "./ui/NavBar";
import Clock from "./Clock";
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6">
      <div className="max-w-2xl w-full flex flex-col gap-6">
        <Clock className="mb-20 self-center rounded-b-md "/>
        {/* Navbar */}
        <Navbar className="mb-20 self-center " />
        
        {/* Intro */}
        <div className="flex flex-col gap-2">
        
          <HoverBubble
          
            triggerElement={
              <h1 className="text-2xl text-left text-[#0B23FF]">
                Mawen Salignat-Moandal
              </h1>
            }
            bubbleContent={
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm a <span className="italic text-[#0B23FF]">software engineer</span> and{" "}
                <span className="underline text-[#0B23FF]">designer</span> based in Paris, France.
              </p>
            }
          />
          <p className="text-gray-400 text-lg leading-relaxed text-justify ">
            Design Engineering meets LLMs. I build stuff that thinks, feels right, and actually works.
          </p>
          <h2 className="text-xl text-gray-500 font-semibold uppercase">Why</h2>
          <p className="text-gray-400 text-lg lqeading-relaxed">
            Because I believe great products are born where thoughtful design meets intelligent systems —
            and combining <span className="underline text-[#0B23FF] italic
            ">Design Engineering</span> with LLMs lets me build tools that feel both natural and powerful.
          </p>
        </div>

        {/* Journal */}
        <div className="flex flex-col gap-1">
          <h2 className="text-xl text-gray-500 font-semibold uppercase">Journal</h2>
          <p className="text-gray-400 text-lg  text-justify leading-relaxed flex items-center gap-2">
            <BadgeNew />
            Currently, I'm building <span className="underline">Noodl</span>. It's an AI-powered mind mapping tool.
          </p>
        </div>

        {/* Before */}
        <div className="flex flex-col gap-1">
          <h2 className="text-xl text-gray-500 font-semibold uppercase">Before</h2>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-lg font-medium text-[#0B23FF]">Anyshift</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Helped shape an AI-powered platform to make cloud infrastructure changes safer and smarter — with a strong focus on product vision, real impact, and fast iteration.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#0B23FF]">TheCollectible</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Built a marketplace for the artworld. Learned a ton, but it didn't take off. Ended up dying.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-1">
          <h2 className="text-sm text-gray-500 font-semibold uppercase">Discuss</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Get in touch with me at <span className="underline text-[#0B23FF]">mwnslg@gmail.com</span>.
          </p>
        </div>
      </div>
    </main>
  );
}
