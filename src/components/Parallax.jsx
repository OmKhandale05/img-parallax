import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

const Parallax = () => {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);
    return ( 
        <div className="bg-black text-white">
            <div className="h-[100vh] flex items-center justify-center">
                <h1 className="text-4xl">Scroll Down</h1>
            </div>

            <div className="parallax-section h-[200vh] relative overflow-hidden">
                <img 
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                className="bg-layer absolute w-full h-full object-cover" />

                <img 
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" 
                className="mid-layer absolute w-full -h-full object-cover opacity-70" />

                <h1 className="front-layer text-6xl font-bold absolute top--1/2 left-1/2 -translate-x-1/2">
                    Parallax
                </h1>

            </div>

        </div>
     );
}
 
export default Parallax;