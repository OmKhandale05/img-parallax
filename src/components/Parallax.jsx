import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

const Parallax = () => {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".bg-layer",{
            y: -100,
            scale: 1.2,
            scrollTrigger: {
                trigger: ".parallax-section",
                start: "top center",
                end: "bottom top",
                scrub: true
            }
        });

        gsap.to(".mid-layer",{
            y: -200,
            scale: 1.1,
            scrollTrigger: {
                trigger: ".parallax-section",
                start: "top center",
                end: "bottom top",
                scrub: true
            }
        });

        gsap.to(".front-layer",{
            y: -400,
            scale: 0.9,
            scrollTrigger: {
                trigger: ".parallax-section",
                start: "top center",
                end: "bottom top",
                scrub: true
            }
        });

        
    }, []);
    return ( 
        <div className="bg-black text-white">
            <div className="h-[100vh] flex items-center justify-center">
                <h1 className="text-4xl">Scroll Down</h1>
            </div>

            <div className="parallax-section h-[200vh] bg-black relative overflow-hidden flex items-center justify-center">
                <img 
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                className="bg-layer absolute w-full h-full object-cover z-0" />

                <img 
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" 
                className="mid-layer absolute w-full -h-full object-cover opacity-70 z-10" />

                <h1 className="front-layer text-6xl font-bold text-center z-20">
                    Parallax
                </h1>

            </div>

        </div>
     );
}
 
export default Parallax;