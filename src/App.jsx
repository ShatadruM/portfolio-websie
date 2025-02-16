import { ReactLenis, useLenis } from "lenis/react";
import insta from "../assets/insta.png";
import linked from "../assets/linked.png";
import github from "../assets/github.png";
import arrow from "../assets/arrow.png";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.png"
import resume from "../assets/My_Resume.pdf";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import "./App.css";

function App() {
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  const imageRef = useRef(null);
  const imageRef2 = useRef(null);
  const textRef1 = useRef(null);

  const textRef2 = useRef(null);

  const textRef3 = useRef(null);

  useGSAP(() => {
    gsap.set(imageRef.current, { scaleX: 0, rotate: -45 });
    gsap.set(imageRef2.current, { scaleX: 0, rotate: -45 });
    if (!containerRef.current) return;
    if (!containerRef2.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef1.current,
        start: "top 110%", // Trigger when the first element enters the viewport
        scrub: 1,
      },
    });

    tl.to(textRef1.current, { opacity: 1, duration: 0.2, ease: "ease-out" })
      .to(
        textRef2.current,
        { opacity: 1, duration: 0.2, ease: "ease-out" },
        
      ) 
      .to(
        textRef3.current,
        { opacity: 1, duration: 0.2, ease: "ease-out" },
        
      ); 

    const handleMouseEnter = () => {
      gsap.to(imageRef.current, {
        scaleX: 1,
        rotate: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };
    const handleMouseEnter2 = () => {
      gsap.to(imageRef2.current, {
        scaleX: 1,
        rotate: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(imageRef.current, {
        scaleX: 0,
        rotate: -45,
        duration: 0.5,
        ease: "power2.inOut",
      });
    };
    const handleMouseLeave2 = () => {
      gsap.to(imageRef2.current, {
        scaleX: 0,
        rotate: -45,
        duration: 0.5,
        ease: "power2.inOut",
      });
    };

    const container = containerRef.current;
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    const container2 = containerRef2.current;
    container2.addEventListener("mouseenter", handleMouseEnter2);
    container2.addEventListener("mouseleave", handleMouseLeave2);

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container2.removeEventListener("mouseenter", handleMouseEnter2);
      container2.removeEventListener("mouseleave", handleMouseLeave2);
    };
  }, []); // Runs once when component mounts

  return (
    <>
      <ReactLenis root>
        <nav className="navbar px-custom z-30">
          <a href="">
            <div>shatadru</div>
          </a>
          <div className="routes">
            <a href="#about"><div className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[1px] after:bg-black after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-10 cursor-pointer">
              about
            </div></a>
            <a href="#work"><div className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[1px] after:bg-black after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-8 cursor-pointer">
              work
            </div></a>
            <a href="#contact">
            <div className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[1px] after:bg-black after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-14 cursor-pointer">
              contact
            </div>
            </a>
          </div>
        </nav>
        <div className="overflow-x-hidden">
          <div className="h-screen bg-white p-0">
            <div className="skill-heading-container">
              <div className="heading-slide">
                <h1 className="skill-heading2">
                  Hi I am Shatadru Mukhopadhyay
                </h1>
                <h1 className="skill-heading2">
                  Hi I am Shatadru Mukhopadhyay
                </h1>
              </div>
              <div className="heading-slide">
                <h1 className="skill-heading2">
                  Hi I am Shatadru Mukhopadhyay
                </h1>
                <h1 className="skill-heading2">
                  Hi I am Shatadru Mukhopadhyay
                </h1>
              </div>
            </div>
            <div className="px-custom pt-12 flex justify-between ">
              <div className="flex flex-col gap-4">
                <img
                  className="h-16 w-16 rotate-45 -translate-x-5"
                  src={arrow}
                  alt=""
                />
                <div className="text-2xl font-semibold">DEVELOPER</div>
                <div className="text-2xl font-semibold">DESIGNER</div>
                <div className="text-2xl font-semibold">THINKER</div>
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://www.instagram.com/__mukul_._?igsh=MWN5anRvemVhNG1wMw==">
                <div className="h-16 w-16 border-solid border-2 border-black rounded-full flex justify-center items-center hover:scale-150 duration-300 ease-in">
                  <img className="h-8" src={insta} alt="" />
                </div>
                </a>
                <a href="https://linkedin.com/in/shatadru-mukhopadhyay-6a5a4b291">
                <div className="h-16 w-16 border-solid border-2 border-black rounded-full flex justify-center items-center hover:scale-150 duration-300 ease-in">
                  <img className="h-8" src={linked} alt="" />
                </div>
                </a>
                <a href="https://github.com/ShatadruM">
                <div className="h-16 w-16 border-solid border-2 border-black rounded-full flex justify-center items-center hover:scale-150 duration-300 ease-in">
                  <img className="h-8" src={github} alt="" />
                </div>
                </a>
              </div>
            </div>
            <div className="bg-green w-screen h-16 translate-y-10 overflow-hidden py-1 whitespace-nowrap flex">
              <div class="flex justify-center items-center whitespace-nowrap animate-slide2 text-darkgreen">
                <h4 className="text-[2rem] font-normal ">
                  {" "}
                  | INNOVATIVE | ARTISTIC | DEVELOPER | CREATIVE DESIGNER |
                  PROBLEM SOLVER | CODER
                </h4>
                <h4 className="text-[2rem] font-normal">
                  {" "}
                  | INNOVATIVE | ARTISTIC | DEVELOPER | CREATIVE DESIGNER |
                  PROBLEM SOLVER | CODER
                </h4>
              </div>
              <div class="flex justify-center items-center whitespace-nowrap animate-slide2  text-darkgreen">
                <h4 className=" text-[2rem] font-normal ">
                  {" "}
                  | INNOVATIVE | ARTISTIC | DEVELOPER | CREATIVE DESIGNER |
                  PROBLEM SOLVER | CODER
                </h4>
                <h4 className=" text-[2rem] font-normal ">
                  {" "}
                  | INNOVATIVE | ARTISTIC | DEVELOPER | CREATIVE DESIGNER |
                  PROBLEM SOLVER | CODER
                </h4>
              </div>
            </div>
          </div>
          <div
            id="about"
            className="h-screen bg-skin overflow-hidden relative flex justify-center"
          >
            <div className="absolute bg-black h-[130rem] w-[130rem] rounded-full -translate-y-[82rem] "></div>
            <div className="absolute h-screen w-screen bg-transparent flex justify-center items-center">
              <div className="text-white text-center leading-relaxed -translate-y-24 text-6xl">
                <span
                  className="opacity-10 ease-in duration-300"
                  ref={textRef1}
                >
                  Create intesnsive, exclusive mind
                </span>{" "}
                <br />
                <span
                  className="opacity-10 ease-in duration-300"
                  ref={textRef2}
                >
                  boggling websites by combinign user insight,{" "}
                </span>
                <br />
                <span
                  className="opacity-10 ease-in duration-300"
                  ref={textRef3}
                >
                  design expertise and market trends
                </span>
              </div>
            </div>
          </div>
          <div
            id="work"
            className="h-[90vh] px-custom pt-24 bg-skin flex-col  "
          >
            <div className="py-10 text-2xl text-stone-700">Recent work</div>
            <a href="https://crypt-talk.vercel.app/">
              <div
                ref={containerRef}
                className="relative py-10 flex justify-between items-center border-stone-400 border-t-2 border-b-2 cursor-pointer "
              >
                <div className="text-5xl">Crypt Chat</div>
                <img
                  ref={imageRef}
                  className=" absolute bg-cover bg-center translate-x-96 h-64 w-44 z-3 "
                  src={project1}
                  alt=""
                />
                <div>
                  <img className="h-16 w-16" src={arrow} alt="" />
                </div>
              </div>
            </a>

            <a href="https://simon-game-opal-five.vercel.app/">
              <div
                ref={containerRef2}
                className="relative flex justify-between m-0 items-center py-10  border-b-2  cursor-pointer "
              >
                <div className="text-5xl">Simon Game</div>
                <img
                  ref={imageRef2}
                  className=" absolute bg-cover bg-center translate-x-96  h-64 w-44 z-3 "
                  src={project2}
                  alt=""
                />
                <div>
                  <img className="h-16 w-16" src={arrow} alt="" />
                </div>
              </div>
            </a>
            <div className="flex justify-center py-10">
              <a href="https://github.com/ShatadruM">
                <button className="rounded-full border p-4 border-solid border-black hover:bg-black hover:text-white duration-300 ease-in">
                  More Work
                </button>
              </a>
            </div>
          </div>
          <div id="contact" className="relative h-screen bg-greenyellow px-custom py-24">
              <div className="absolute scale-[3] bottom-0 translate-x-56 -translate-y-12 text-darkgreen text-9xl opacity-50">Shatadru</div>
            
            <div className="flex justify-between items-center border-b border-black pb-24">
              <div className="text-7xl font-semibold">
                Great things can happen with a simple " Hello! "
              </div>
              <a href="mailto:shatadruforwork@gmail.com">
                <button className="rounded-full border  w-32 p-4 border-solid border-black hover:bg-black hover:text-greenyellow duration-300 ease-in">
                  Contact Me
                </button>
              </a>
            </div>
            <div className="flex justify-between py-20 ">
              <div className="flex flex-col gap-6">
                <a
                  href="#about"
                  className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[1px] after:bg-black after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-10"
                >
                  About
                </a>
                <a
                  href="#work"
                  className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[1px] after:bg-black after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-10"
                >
                  Work
                </a>
                <a
                  href="mailto:shatadruforwork@gmail.com"
                  className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[1px] after:bg-black after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full"
                >
                  Contact
                </a>
              </div>
              <div className="flex flex-col gap-6">
                <a
                  href=""
                  className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[1px] after:bg-black after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com/in/shatadru-mukhopadhyay-6a5a4b291"
                  className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[1px] after:bg-black after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-16"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ShatadruM"
                  className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[1px] after:bg-black after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-12"
                >
                  GitHub
                </a>
              </div>
              <div className="flex flex-col gap-6">
                <img className="h-8 -rotate-45" src={arrow} alt="" />
                <img className="h-8 -rotate-45" src={arrow} alt="" />
                <img className="h-8 -rotate-45" src={arrow} alt="" />
              </div>
            </div>
            <div className="flex justify-between items-center border-b border-black pb-24">
              <div>
                <a href="mailto:shatadruforwork@gmail.com">
                  shatadruforwork@gmail.com
                </a>
              </div>
              <div className="-translate-x-10">
                <a href={resume}>Resume</a>
              </div>
              <div>
                <button>+91 9239461526</button>
              </div>
            </div>
          </div>
        </div>
      </ReactLenis>
    </>
  );
}
export default App;
