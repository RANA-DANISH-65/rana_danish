import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Frontend from "./Frontend";
import Others from "./Others";
import "./skills.css";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const el = skillsRef.current;

    gsap.fromTo(
      el.querySelector(".skills__container"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      el.querySelector(".frontend"),
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el.querySelector(".frontend"),
          start: "top 85%",
          end:"top 10%",
          toggleActions: "play reverse restart reverse",
        },
      }
    );

    gsap.fromTo(
      el.querySelector(".others"),
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el.querySelector(".others"),
          start: "top 85%",
          end:"top 10%",
          toggleActions: "play reverse restart reverse",
        },
      }
    );
  }, []);

  return (
    <section className="skills section" id="skills" ref={skillsRef}>
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div className="frontend">
          <Frontend />
        </div>
        <div className="others">
          <Others />
        </div>
      </div>
    </section>
  );
};

export default Skills;
