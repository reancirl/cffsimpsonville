import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroAnimation() {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.set('.hero__rule', { scaleX: 0, transformOrigin: 'left center' })
        .set('.hero__word, .hero__sub-line, .hero__meta-item, .hero__cta, .hero__image-frame, .hero__floating', { opacity: 0 })
        .set('.hero__word', { y: 90 })
        .set('.hero__sub-line', { y: 30 })
        .set('.hero__meta-item', { y: 12 })
        .set('.hero__cta', { y: 20 })
        .set('.hero__image-frame', { scale: 1.06, y: 30 })
        .set('.hero__floating', { y: 30 })
        .set('.hero__eyebrow', { opacity: 0, x: -20 });

      tl.to('.hero__eyebrow', { opacity: 1, x: 0, duration: 1, delay: 0.2 })
        .to('.hero__rule', { scaleX: 1, duration: 1.1, ease: 'expo.out' }, '-=0.8')
        .to('.hero__word', {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.09,
          ease: 'expo.out',
        }, '-=0.6')
        .to('.hero__sub-line', {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
        }, '-=0.7')
        .to('.hero__meta-item', {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
        }, '-=0.5')
        .to('.hero__cta', {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
        }, '-=0.5')
        .to('.hero__image-frame', {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 1.6,
          ease: 'expo.out',
        }, '-=1.4')
        .to('.hero__floating', {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
        }, '-=0.9');

      // Subtle parallax on image
      const heroImg = document.querySelector<HTMLElement>('.hero__image-inner');
      const onMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 14;
        const y = (e.clientY / innerHeight - 0.5) * 14;
        if (heroImg) {
          gsap.to(heroImg, { x, y, duration: 1.2, ease: 'power3.out' });
        }
      };
      window.addEventListener('mousemove', onMove);

      // Continuous gentle float for the medallion
      gsap.to('.hero__medallion', {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      return () => window.removeEventListener('mousemove', onMove);
    });

    return () => ctx.revert();
  }, []);

  return null;
}
