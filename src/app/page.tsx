"use client";

import { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { StudioSection } from '@/components/StudioSection';
import { PhilosophySection } from '@/components/PhilosophySection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProcessSection } from '@/components/ProcessSection';
import { BlogSection } from '@/components/BlogSection';
import { CTASection } from '@/components/CTASection';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { ImpCursor } from '@/components/ImpCursor';
import { ClientsSection } from '@/components/ClientsSection';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative" style={{
      position: 'relative',
      backgroundColor: 'var(--brand-black)',
      color: 'var(--brand-white)',
      fontFamily: 'var(--font-body)'
    }}>
      <ImpCursor />
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <HeroSection />
      <StudioSection />
      <PhilosophySection />
      <ServicesSection />
      <ProcessSection />
      <BlogSection />
      <CTASection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
