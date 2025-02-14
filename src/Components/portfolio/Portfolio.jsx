import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./portfolio.css";
import { Projects } from "./Projects"; // Adjust the path if needed

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const videosRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const projectsContainer = document.querySelector(".projects__container");
      if (!projectsContainer) return;

      gsap.set(projectsContainer, { x: 0 });

      const getScrollDistance = () => {
        return projectsContainer.scrollWidth - window.innerWidth;
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".projects__wrapper",
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(projectsContainer, {
        x: () => -getScrollDistance(),
        ease: "expo.out",
        duration: 1,
      });

      window.addEventListener("resize", () => {
        ScrollTrigger.refresh();
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold if needed
    );

    videosRef.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videosRef.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <section className="portfolio__container section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Some of my work</span>

      <div className="projects__wrapper">
        <div className="projects__container">
          {Projects.map((project, index) => (
            <div key={project.id} className="project">
              <video
                autoPlay
                loop
                muted
                className="project__video"
                ref={(el) => (videosRef.current[index] = el)}
              >
                <source src={project.link} type="video/mp4" />
              </video>
              <div className="project__content">
                <h3 className="project__title">{project.title}</h3>
                <p className="project__description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
