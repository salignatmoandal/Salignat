'use client';                    // nécessaire dans l'« app » dir de Next 13+

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

interface NavbarProps {
  className?: string;
}

const links = [
  { label: 'Articles', href: '/articles' },
  { label: 'Notes',    href: '/notes'    },
  { label: 'About',    href: '/'    },
  { label: 'crafted',  href: '/crafted'  },

];

export default function Navbar({ className = '' }: NavbarProps) {
  const navRef       = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const pathname     = usePathname();

  // Animation d'apparition des liens au chargement
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav-link', {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.08,
      });
    }, navRef);

    return () => ctx.revert(); // clean-up
  }, []);

  // Soulignement fluide sur le lien hover
  const moveIndicator = (el: HTMLAnchorElement | null) => {
    if (!el || !indicatorRef.current) return;
    const { offsetLeft: left, offsetWidth: width } = el;
    gsap.to(indicatorRef.current, {
      left,
      width,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  // Filtrer les liens pour exclure la page courante
  const filteredLinks = links.filter(link => link.href !== pathname);

  return (
    <nav
      ref={navRef}
      className={`relative flex justify-center gap-8 py-2 text-sm font-medium tracking-widest uppercase z-50  ${className}`}
    >
      {filteredLinks.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className="nav-link relative text-[#0B23FF] hover:text-[#0B23FF]"
          onMouseEnter={(e) => moveIndicator(e.currentTarget)}
          onFocus={(e)     => moveIndicator(e.currentTarget)}
          onMouseLeave={() => moveIndicator(null)}          // fait disparaître
          onBlur={()       => moveIndicator(null)}
        >
          {label}
        </Link>
      ))}

      {/* le soulignement */}
      <span
        ref={indicatorRef}
        className="pointer-events-none absolute bottom-0 block h-[2px] w-0 bg-[#0B23FF]"
      />
    </nav>
  );
}