'use client';

import { useEffect, useRef, useCallback, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  as?: 'div' | 'section';
}

export default function ScrollReveal({
  children,
  className,
  stagger = false,
  as: Tag = 'div',
  ...props
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const observeElements = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.querySelectorAll('[data-animate]').forEach((child) => {
        child.classList.add('is-visible');
      });
      return;
    }

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observerRef.current?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );
    }

    // Observe any new elements that don't have is-visible yet
    const animatedElements = el.querySelectorAll('[data-animate]:not(.is-visible)');
    animatedElements.forEach((child) => observerRef.current!.observe(child));
  }, []);

  // Initial observation
  useEffect(() => {
    observeElements();
    return () => observerRef.current?.disconnect();
  }, [observeElements]);

  // Re-observe when children change (e.g. search filtering)
  useEffect(() => {
    observeElements();
  }, [children, observeElements]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      data-stagger={stagger || undefined}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
}
