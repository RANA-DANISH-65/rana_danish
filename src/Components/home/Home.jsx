import Data from "./Data";
import "./home.css";
import ScrollDown from "./ScrollDown";
import Social from "./Social";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const homeRef = useRef(null);
  const loaderRef = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline();

    gsap.set(".secondName span", { x: 200, opacity: 0, scale: 0.8 });
    gsap.set(".firstName span", { y: 0, opacity: 1, scale: 1 });

    tl.to(".secondName span", {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.15,
    })
      .add(() => console.log("DANISH animation complete"))
      .to(
        ".firstName span",
        {
          y: "-120%",
          opacity: 0,
          scale: 1.2,
          duration: 1.2,
          ease: "power4.inOut",
          stagger: 0.15,
        },
        "-=1"
      )
      .to(
        ".secondName span",
        {
          y: "-120%",
          opacity: 0,
          scale: 1.2,
          duration: 1.2,
          ease: "power4.inOut",
          stagger: 0.15,
        },
        "-=1.2"
      )
      .to(
        ".nameDiv",
        {
          height: 0,
          duration: 1.2,
          ease: "power3.inOut",
        },
        "-=1.2"
      )
      .to(
        ".loaderContainer",
        {
          height: 0,
          opacity: 0,
          duration: 1.2,
          ease: "power3.inOut",
        },
        "-=0.5"
      )
      .fromTo(
        ".home",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
      )
      .fromTo(
        ".home__title",
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
        "-=1"
      )
      .fromTo(
        ".home__subtitle",
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
        "-=1"
      )
      .fromTo(
        ".home__description",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        ".home__img",
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" },
        "-=0.8"
      )
      .fromTo(
        ".home__social-icon",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.2 },
        "-=1"
      );
  }, []);

  return (
    <>
      <div ref={loaderRef} className="loaderContainer">
        <div className="introDiv">
          <div className="nameDiv">
            <div className="firstName">
              <span>R</span>
              <span>A</span>
              <span>N</span>
              <span>A</span>
            </div>
            <div className="secondName">
              <span>D</span>
              <span>A</span>
              <span>N</span>
              <span>I</span>
              <span>S</span>
              <span>H</span>
            </div>
          </div>
          <div className="specialDiv">
            <span>FrontEnd Developer</span>
          </div>
        </div>
        <div className="loaderDiv">
          <div className="loader"></div>
        </div>
      </div>
      <section ref={homeRef} className="home" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />
            <div className="home__img"></div>
            <Data />
          </div>
          <ScrollDown />
        </div>
      </section>
    </>
  );
};

export default Home;
