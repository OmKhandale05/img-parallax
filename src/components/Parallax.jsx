import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

const Parallax = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".bg-layer", {
      y: -100,
      scale: 1.2,
      filter: "blur(4px)",
      scrollTrigger: {
        trigger: ".parallax-section",
        start: "top center",
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
        start: "top center",
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
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      const xPercent = (x / window.innerWidth - 0.5) * 2;
      const ypercent = (x / window.innerHeight - 0.5) * 2;

      gsap.to(".bg-layer", {
        x: xPercent * 20,
        y: ypercent * 20,
        duration: 0.8,
        ease: "power3.out"
      });

      gsap.to(".mid-layer", {
        x: xPercent * 40,
        y: ypercent * 40,
        duration: 0.8,
        ease: "power3.out"
      });

      gsap.to(".front-layer", {
        x: xPercent * 80,
        y: ypercent * 80,
        duration: 0.8,
        ease: "power3.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return() => {
        window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);
  return (
    <div className="bg-black text-white">
      <div className="h-[100vh] flex items-center justify-center">
        <h1 className="text-4xl">Scroll Down</h1>
      </div>

      <div className="parallax-section h-[200vh] bg-black relative overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          className="bg-layer absolute w-full h-full object-cover z-0"
        />

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          className="mid-layer absolute w-full -h-full object-cover opacity-70 z-10"
        />

        <h1 className="front-layer text-6xl font-bold text-center z-20">
          Parallax
        </h1>
      </div>
    </div>
  );
};

export default Parallax;
