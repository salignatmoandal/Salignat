'use client';

import HoverBubble from "../ui/HoverBubble";

export default function IntroSection() {
  return (
    <section className="flex flex-col gap-3 text-justify leading-relaxed">
      {/* Nom + Hover bio */}
      <HoverBubble
        triggerElement={
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0B23FF]">
            Welcome to my world.
          </h1>
        }
        bubbleContent={
          <p className="text-muted-foreground text-base leading-relaxed">
            Hello, I'm Mawen -<span className="text-[#0B23FF] font-bold"> Software engineer</span> &{" "}
            <span className="italic text-[#0B23FF] font-bold "> LLM Designer</span> based in Paris, France.
          </p>
        }
      />

      {/* Tagline */}
      <p className="text-base text-muted-foreground leading-relaxed text-justify">
        Crafting AI platforms, distributed systems, and creative tools at the intersection of{" "}
        <span className="italic  text-[#0B23FF]">Design Engineering</span> and{" "}
        <span className="italic text-[#0B23FF]">LLMs</span>.
      </p>

      {/* WHY Section */}
      <div className="flex flex-col mt-3">
        <div className="text-base leading-relaxed text-muted-foreground space-y-[5px]">
          <p className="text-gray-500 text-xl italic leading-relaxed">"Why do I build?"</p>
          <p>Because tools aren't just meant to work — they're meant to feel.</p>
          <p>To guide. To inspire. To empower.</p>
          <p>
            I believe the sweet spot is where{" "}
            <span className="text-[#0B23FF] font-medium">Design Engineering</span>{" "}
            meets{" "}
            <span className="text-[#0B23FF] font-medium">LLMs</span> —<br />
            where systems think <em>with</em> you, and interfaces feel like they were made{" "}
            <em>for</em> you.
          </p>
          <p className="text-[#0B23FF] font-semibold">
            That's where I craft. <br />
            That's why I build.
          </p>
         
        </div>
      </div>
    </section>
  );
}