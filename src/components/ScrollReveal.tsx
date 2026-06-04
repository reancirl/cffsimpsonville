import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal() {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const ctx = gsap.context(() => {
      // Fade up reveals
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        const delay = parseFloat(el.dataset.revealDelay || '0');
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            delay,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Staggered children
      gsap.utils.toArray<HTMLElement>('[data-reveal-stagger]').forEach((container) => {
        const children = Array.from(container.children) as HTMLElement[];
        gsap.fromTo(
          children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: container,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Heading words split reveal
      gsap.utils.toArray<HTMLElement>('[data-reveal-heading]').forEach((heading) => {
        const text = heading.textContent || '';
        // Build the split markup with styles inline so the browser performs a
        // single parse/layout instead of read→write thrashing per word.
        const words = text
          .split(' ')
          .map(
            (w) =>
              `<span class="word" style="display:inline-block;overflow:hidden;padding-bottom:0.08em;margin-right:0.18em"><span class="word-inner" style="display:inline-block">${w}</span></span>`
          )
          .join(' ');
        heading.innerHTML = words;
        const inners = heading.querySelectorAll('.word-inner');
        gsap.fromTo(
          inners,
          { y: '110%' },
          {
            y: '0%',
            duration: 1.1,
            ease: 'expo.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Image parallax
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || '0.2');
        gsap.to(el, {
          yPercent: -speed * 30,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      // Image scale-in on scroll
      gsap.utils.toArray<HTMLElement>('[data-image-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 1.18, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Counters
      gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
        const target = parseInt(el.dataset.count || '0', 10);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          onUpdate: () => {
            el.textContent = Math.floor(obj.v).toString();
          },
        });
      });

    });

    // Defer the (layout-measuring) refresh off the initial render path so it
    // doesn't force a synchronous reflow during load. Run it once fonts have
    // settled to avoid a second refresh when metrics shift.
    let refreshId = 0;
    const deferRefresh = () => {
      refreshId = requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    if (document.fonts && document.fonts.status !== 'loaded') {
      document.fonts.ready.then(deferRefresh);
    } else {
      deferRefresh();
    }

    return () => {
      cancelAnimationFrame(refreshId);
      ctx.revert();
    };
  }, []);

  return null;
}
