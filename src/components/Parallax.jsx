import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const Parallax = () => {
  const containerRef = useRef(null);
  const pinRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        {
          y: 200,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          delay: 1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".hero-text",
        {
          y: 0,
          opacity: 1,
        },
        {
          y: -150,
          opacity: 0,
          scrollTrigger: {
            trigger: ".hero-text",
            start: "top top",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      gsap.to(".bg-layer", {
        y: -100,
        scale: 1.2,
        filter: "blur(4px)",
        scrollTrigger: {
          trigger: ".parallax-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".mid-layer", {
        y: -200,
        scale: 1.1,
        filter: "blur(2px)",
        scrollTrigger: {
          trigger: ".parallax-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".front-layer", {
        y: -400,
        scale: 0.9,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: ".parallax-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        ".char",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".front-layer",
            start: "top 80%",
            end: "top 40%",
            scale: 0.8,
            scrub: true,
            markers: true,
          },
        }
      );

      ScrollTrigger.create({
        trigger: pinRef.current,
        start: "top top",
        end: "+=1000",
        pin: true,
        pinSpacing: true,
        markers: true,
      });

      gsap.fromTo(
        ".pin-text",
        { scale: 0.5, opacity: 0 },
        {
          scale: 1.5,
          opacity: 1,
          scrollTrigger: {
            trigger: pinRef.current,
            start: "top top",
            end: "+=1000",
            scrub: true,
          },
        }
      );

      gsap.fromTo(".cta-text",
      {y: 100, opacity: 0},
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".cta",
          start: "top 80%",
          end: "top 50%",
          scrub: true
        }
      });

      gsap.from(".cta-btn",
      {
        y: 50,
        opacity: 0,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".cta",
          start: "top 80%",
          end: "top 50%",
          scrub: true
        }
      });
    }, containerRef);
    ScrollTrigger.refresh();

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      const xPercent = (x / window.innerWidth - 0.5) * 2;
      const ypercent = (y / window.innerHeight - 0.5) * 2;

      gsap.to(".bg-layer", {
        x: xPercent * 20,
        y: ypercent * 20,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.to(".mid-layer", {
        x: xPercent * 40,
        y: ypercent * 40,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.to(".front-layer", {
        x: xPercent * 80,
        y: ypercent * 80,
        duration: 0.8,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div ref={containerRef} className="bg-black text-white">
      <section className="hero h-screen flex items-center justify-center">
        <h1 className="hero-text text-6xl font-bold">Welcome</h1>
      </section>

      <section className="parallax-section h-[200vh] bg-black relative overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          className="bg-layer absolute w-full h-full object-cover z-0"
        />

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          className="mid-layer absolute w-full h-full object-cover opacity-70 z-10"
        />

        <div className="front-layer z-20">
          <h1 className=" text-6xl font-bold flex flex-wrap justify-center">
            {"Explore".split("").map((char, i) => (
              <span key={i} className="char inline-block">
                {char}
              </span>
            ))}
          </h1>
        </div>
      </section>
      <section
        ref={pinRef}
        className="pin-section h-screen flex items-center justify-center bg-gray-900"
      >
        <h1 className="pin-text text-5xl font-bold">Focus</h1>
      </section>
      <section className=" cta h-screen flex flex-col items-center justify-center gap-6">
        <h1 className=" cta-text text-4xl font-bold">Ready to Start?</h1>
        <button className="cta-btn bg-white text-black px-6 py-3 rounded-full">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Parallax;
