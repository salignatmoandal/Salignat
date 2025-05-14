'use client'

import Navbar from "./ui/NavBar";
import Clock from "./Clock";
import IntroSection from "./sections/IntroSection";
import JournalSection from "./sections/JournalSection";
import BeforeSection from "./sections/BeforeSection";
import ContactSection from "./sections/contactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6">
      <div className="max-w-2xl w-full flex flex-col gap-6">
        <Clock className="mb-20 self-center rounded-b-md" />
        <Navbar className="mb-20 self-center" />
        <IntroSection />
        <JournalSection />
        <BeforeSection />
        <ContactSection />
      </div>
    </main>
  );
}