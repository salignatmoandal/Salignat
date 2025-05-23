'use client'

import Navbar from "./ui/NavBar";
import IntroSection from "./sections/IntroSection";
import JournalSection from "./sections/JournalSection";
import BeforeSection from "./sections/BeforeSection";
import ContactSection from "./sections/contactSection";
import WelcomeChatBubble from "./ui/WelcomeChatBubble";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6 transition-all duration-300">
      <WelcomeChatBubble>
        Hello, I&apos;m Mawen — <span className="font-bold">Software engineer</span> & <span className="italic font-bold">LLM Designer</span>
      </WelcomeChatBubble>
      <div className="max-w-2xl w-full flex flex-col gap-6">
        {/* <Clock className="mb-5 self-start rounded-b-md" /> */}
        <Navbar className="mb-5 self-center rounded-b-md" />
      
        <IntroSection title={"Welcome to my world."} />
        <JournalSection />
        <BeforeSection />
        <ContactSection />
      </div>
    </main>
  );
}