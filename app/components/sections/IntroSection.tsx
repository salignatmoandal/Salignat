'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { usePathname } from 'next/navigation';

interface IntroSectionProps {
  title: string;
}

export default function IntroSection({ title }: IntroSectionProps) {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const pathname = usePathname();
  const [isInitialMount, setIsInitialMount] = useState(true);
  const animationRef = useRef<gsap.core.Timeline | null>(null);
  
  useEffect(() => {
    // Ignorer la première exécution
    if (isInitialMount) {
      setIsInitialMount(false);
      return;
    }

    if (!titleRef.current) return;

    // Nettoyer les animations existantes
    if (animationRef.current) {
      animationRef.current.kill();
    }
    gsap.killTweensOf(titleRef.current);
    
    gsap.registerPlugin(SplitText);
    
    try {
      // Split le texte en caractères
      const splitTitle = new SplitText(titleRef.current, { type: "chars,words" });
      
      // Créer une nouvelle timeline
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power3.out" }
      });

      // Animation d'entrée
      tl.from(splitTitle.chars, {
        opacity: 0,
        y: 50,
        rotateX: -90,
        stagger: 0.02,
        duration: 0.8
      });

      // Stocker la référence de l'animation
      animationRef.current = tl;

      // Démarrer l'animation
      tl.play();

      // Animation au hover
      const title = titleRef.current;
      
      const handleMouseEnter = () => {
        gsap.to(splitTitle.chars, {
          y: -5,
          stagger: 0.02,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(splitTitle.chars, {
          y: 0,
          stagger: 0.02,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      title.addEventListener('mouseenter', handleMouseEnter);
      title.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup
      return () => {
        title.removeEventListener('mouseenter', handleMouseEnter);
        title.removeEventListener('mouseleave', handleMouseLeave);
        splitTitle.revert();
        if (animationRef.current) {
          animationRef.current.kill();
        }
        gsap.killTweensOf(title);
      };
    } catch (error) {
      console.error('Erreur lors de l&apos;initialisation de l&apos;animation:', error);
    }
  }, [pathname, isInitialMount]);

  return (
    <section className="flex flex-col gap-3 text-justify leading-relaxed">
      {/* Nom + Hover bio */}
      <div className="flex items-center">
        <h1 
          ref={titleRef}
          className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0B23FF] cursor-pointer"
        >
          {title || "Welcome to my world."}
        </h1>
      </div>

      {/* Tagline */}
      <p className="text-base text-muted-foreground leading-relaxed text-justify">
      Crafting LLM-powered platforms, distributed systems, and creative tools at the intersection of <span className="italic  text-[#0B23FF]">&ldquo;Design Engineering&rdquo;</span> and <span className="italic text-[#0B23FF]">&apos;AI infrastructure&apos;</span> — with a strong product vision and a developer-first mindset.
      </p>

      {/* WHY Section */}
      <div className="flex flex-col mt-3">
        <div className="text-base leading-relaxed text-muted-foreground space-y-[5px]">
          <p className="text-gray-500 text-xl italic leading-relaxed">&ldquo;Why do I build?&rdquo;</p>
          <p>Because tools aren&apos;t just meant to work — they&apos;re meant to feel.</p>
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
            That&apos;s where I craft. <br />
            That&apos;s why I build.
          </p>
         
        </div>
      </div>
    </section>
  );
}