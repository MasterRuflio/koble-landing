import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

export default function Steps() {
    const panels = gsap.utils.toArray(".panel") as Element[];
    const contentoEls = gsap.utils.toArray(".contento") as Element[];
  
    useEffect(() => {
    const toggleReveal = (index: number) => {
      const next = contentoEls[index];
      const prev = contentoEls[index - 1];
      next && next.classList.toggle("revealed");
      prev && prev.classList.toggle("revealed");
    };

    gsap.set(panels, {
      yPercent: (i) => (i ? 100 : 0),
    });

    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sections",
          start: "top top",
          end: () => "+=" + 100 * panels.length + "%",
          pin: true,
          scrub: 1,
          id: "sections"  // <-- Assigning an ID here
        },
      });

    panels.forEach((panel, index) => {
      if (index) {
        tl.to(
          panel,
          {
            yPercent: 0,
            ease: "none",
          },
          "+=0.25"
        );
        if (contentoEls[index]) {
          tl.call(toggleReveal, [index], "<+=0.125");
        }
      } else {
        tl.call(toggleReveal, [index], 0.125);
      }
    });

    // Cleanup function
return () => {
    tl && tl.kill();  // This will terminate the timeline
    const triggerInstance = ScrollTrigger.getById("sections");
    if (triggerInstance) {
      triggerInstance.kill();
    }
  };
  }, []);  // The empty dependency array ensures the effect only runs once

  return (
    <>
      <div className="description blue">
        <div>
          <h1>Side by Side Layered pinning</h1>
          <p>Use pinning to layer panels on top of each other as you scroll.</p>
          <div className="scroll-down">
            Scroll down<div className="arrow"></div>
          </div>
        </div>
      </div>

      <div className="sections">
        <div className="container-page">
          <div className="contento one">
            <h2>This is random content</h2>
          </div>
          <div className="contento two">
            <h2>This is another content</h2>
          </div>
          <div className="contento three">
            <h2>This is final content</h2>
          </div>
        </div>
        <div className="panels">
          <section className="panel red">ONE</section>
          <section className="panel orange">TWO</section>
          <section className="panel purple">THREE</section>
          <section className="panel green">FOUR</section>
        </div>
      </div>

      <section className="spacer">
        <h1>The End!</h1>
        <h1>Happy Tweening!</h1>
      </section>
    </>
  );
}
