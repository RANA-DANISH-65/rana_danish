import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/Danish_CV.pdf";
import Info from "./Info";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const animateRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about__container",
          start: "top 80%",
          end: "bottom 50%",
          toggleActions: "play reverse restart reverse", 
        },
      });
  
      tl.fromTo(
        ".section__subtitle",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
      )
        .fromTo(
          ".about__box",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.25, ease: "bounce.out" },
          "-=0.8" 
        )
        .fromTo(
          animateRef.current,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, stagger:0.25, ease: "elastic.out(1.5, 0.5)" },
          "-=0.6" 
        )
        .fromTo(
          ".about__img",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1.5, 0.5)" },
          "-=1" 
        );
    }, aboutRef);
  
    return () => ctx.revert(); 
  }, []);
  return (
    <section className="about section" id="about" ref={aboutRef}>
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid ">
        <img src={AboutImg} alt="About Image" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description" ref={animateRef}>
            I’m Danish, a frontend developer who turns React, Next.js, and GSAP
            into sleek, interactive magic. I love solving complex problems,
            sharpening my DSA skills, and making pixels behave. When I’m not
            coding, I’m either debugging life or laughing at memes—sometimes
            both at once!
          </p>

          <a
            download=""
            href={CV}
            className="button button--flex"
            ref={animateRef}
          >
            Download CV
            <svg
              className="button__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                fill="var(--container-color)"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
