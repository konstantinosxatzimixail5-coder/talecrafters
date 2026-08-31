"use client";
import { motion } from 'motion/react';
import { MoveRight, Timer } from 'lucide-react';
import Link from 'next/link';
import type { HomeCopy } from '@/content/copy';

/**
 * The teaser rows are supplied by the page rather than written here.
 *
 * This block used to hold six invented posts with Unsplash stock behind them,
 * and every one of the six linked to a slug that has never existed: six 404s
 * off the front page, illustrated with exactly the kind of picture the rest of
 * the site argues against. Now it takes the real posts and cannot describe
 * anything that is not published.
 */
export interface TeaserPost {
  title: string;
  subtitle: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  color: string;
  /** Absent until the hero images land. The card falls back to a plate. */
  image?: string;
}


export function BlogSection({ copy, posts }: { copy: HomeCopy['blog']; posts: TeaserPost[] }) {
  // Nothing to tease is a reason to render nothing, not a reason to invent
  // something.
  if (posts.length === 0) return null;

  return (
    <section
      id="blog"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ backgroundColor: '#0E0E0E' }}
    >
      {/* Section counter */}
      <motion.div
        className="absolute top-12 right-8 md:right-16 flex items-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="h-px w-8" style={{ backgroundColor: 'var(--brand-cyan)' }} />
        <span
          className="text-xs tracking-[0.3em]"
          style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-cyan)' }}
        >
          {copy.flag}
        </span>
      </motion.div>

      <div className="px-6 md:px-16 lg:px-24">
        {/* Headline */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-8xl lg:text-[7vw] leading-[0.85] tracking-tighter"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {copy.heading}<br />
            <span style={{ color: 'var(--brand-cyan)' }}>{copy.accentWord}</span>
          </h2>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl mb-16 md:mb-20 max-w-3xl"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hot takes on creativity, technology, and why most brands are terrified of being interesting.
        </motion.p>

        {/* Featured post - full-width editorial */}
        <Link href={`/blog/${posts[0].slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <motion.div
            className="mb-6 relative group cursor-pointer overflow-hidden"
            style={{ backgroundColor: 'var(--brand-black)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image side */}
              <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                {posts[0].image ? (
                  <motion.img
                    src={posts[0].image}
                    alt={`TaleCrafters blog: ${posts[0].title}: ${posts[0].subtitle}`}
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%) contrast(1.1)' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                ) : (
                  <div
                    className="w-full h-full"
                    style={{
                      minHeight: 220,
                      background: `radial-gradient(120% 100% at 20% 0%, ${posts[0].color}22, transparent 62%), var(--brand-black)`,
                    }}
                  />
                )}
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(135deg, ${posts[0].color}30, transparent 60%)` }}
                />
                {/* Category badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 text-[10px] tracking-widest"
                  style={{
                    backgroundColor: posts[0].color,
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--brand-black)',
                  }}
                >
                  FEATURED / {posts[0].category}
                </div>
              </div>

              {/* Text side */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h3
                  className="text-3xl md:text-5xl lg:text-6xl tracking-tighter mb-4 leading-[0.9]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {posts[0].title}
                </h3>

                <p
                  className="text-lg md:text-xl mb-8"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
                >
                  {posts[0].subtitle}
                </p>

                <div className="flex items-center gap-6">
                  <span
                    className="text-xs flex items-center gap-1"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                  >
                    <Timer size={14} /> {posts[0].readTime}
                  </span>
                  <span
                    className="text-xs"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                  >
                    {posts[0].date}
                  </span>
                  <motion.div className="ml-auto" whileHover={{ x: 10 }}>
                    <MoveRight size={24} style={{ color: posts[0].color }} />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Bottom accent */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[2px]"
              style={{ backgroundColor: posts[0].color }}
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </Link>

        {/* Post grid - magazine layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {posts.slice(1).map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div
                className="relative group cursor-pointer overflow-hidden h-full"
                style={{
                  backgroundColor: 'var(--brand-black)',
                  borderTop: `2px solid ${post.color}`,
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="p-6 md:p-8 h-full flex flex-col">
                  {/* Category + reading time */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-[10px] tracking-widest"
                      style={{ fontFamily: 'var(--font-mono)', color: post.color }}
                    >
                      {post.category}
                    </span>
                    <span
                      className="text-[10px] flex items-center gap-1"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete-light)' }}
                    >
                      <Timer size={10} /> {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h4
                    className="text-xl md:text-2xl tracking-tighter mb-3 flex-grow"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {post.title}
                  </h4>

                  {/* Subtitle */}
                  <p
                    className="text-sm mb-6"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--brand-concrete-light)' }}
                  >
                    {post.subtitle}
                  </p>

                  {/* Date + arrow */}
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${post.color}20` }}>
                    <span
                      className="text-xs"
                      style={{ fontFamily: 'var(--font-mono)', color: 'var(--brand-concrete)' }}
                    >
                      {post.date}
                    </span>
                    <motion.div whileHover={{ x: 5 }}>
                      <MoveRight size={18} style={{ color: post.color }} />
                    </motion.div>
                  </div>
                </div>

                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at bottom, ${post.color}08, transparent 70%)`,
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/blog" className="inline-block" style={{ textDecoration: 'none' }}>
            <motion.button
              className="px-10 py-4 text-lg tracking-tight"
              style={{
                fontFamily: 'var(--font-display)',
                border: '1px solid var(--brand-concrete)',
                color: 'var(--brand-white)',
                backgroundColor: 'rgba(0,0,0,0)',
              }}
              whileHover={{
                backgroundColor: 'var(--brand-cyan)',
                color: 'var(--brand-black)',
                borderColor: 'var(--brand-cyan)',
                scale: 1.03,
              }}
              whileTap={{ scale: 0.98 }}
            >
              VIEW ALL POSTS →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
