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
        const words = text.split(' ').map((w) => `<span class="word"><span class="word-inner">${w}</span></span>`).join(' ');
        heading.innerHTML = words;
        const inners = heading.querySelectorAll('.word-inner');
        heading.querySelectorAll<HTMLElement>('.word').forEach((w) => {
          w.style.display = 'inline-block';
          w.style.overflow = 'hidden';
          w.style.paddingBottom = '0.08em';
          w.style.marginRight = '0.18em';
        });
        inners.forEach((i) => {
          (i as HTMLElement).style.display = 'inline-block';
        });
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

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return null;
}
