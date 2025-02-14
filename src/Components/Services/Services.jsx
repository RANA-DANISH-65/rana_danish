import { useState , useEffect } from "react";
import "./services.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  useEffect(() => {
    // GSAP Animations for services
    gsap.fromTo(
      ".services__content",
      {
        opacity: 0,
     
      },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".services__container", // The element to trigger animation
          start: "top 80%", // Start when the top of the section is 80% from the top of the viewport
          end: "top 10%",
        },
      }
    );
  }, []);

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Interactive <br /> Animations
            </h3>
          </div>
          <span className="services__button white" onClick={() => toggleTab(1)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Interactive Animations</h3>
              <p className="services__modal-description">
                I can create smooth and modern animations using GSAP (GreenSock)
                for engaging UI interactions, including scroll-based effects
                with ScrollTrigger, page transitions, and element animations.
                Whether it's fade-ins, parallax scrolling, or dynamic content
                reveals, I ensure animations are seamless and
                performance-optimized.
              </p>

              {/* <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__model-info">
                    I develop the user interface.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__model-info">Web Page Development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__model-info">
                    I create ux element interactions
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__model-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__model-info">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-link services__icon"></i>

            <h3 className="services__title">
              API <br /> Integeration
            </h3>
          </div>
          <span className="services__button white" onClick={() => toggleTab(2)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">API Integeration</h3>
              <p className="services__modal-description">
                I seamlessly integrate APIs to ensure smooth data communication
                across your app. From connecting backend systems to enabling
                dynamic features, I make sure everything works in perfect
                harmony.
              </p>

              {/* <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__model-info">
                    I develop the user interface.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__model-info">Web Page Development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__model-info">
                    I create ux element interactions
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__model-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__model-info">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
          <i className="uil uil-tachometer-fast services__icon"></i>

            <h3 className="services__title">
              Performance <br /> Optimization
            </h3>
          </div>
          <span className="services__button white" onClick={() => toggleTab(3)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Performance Optimization</h3>
              <p className="services__modal-description">
                I ensure your websites run at peak performance by fine-tuning
                every element, from loading speed to seamless interactions. With
                a focus on optimizing assets, improving code efficiency, and
                reducing latency, I create smooth, lightning-fast user
                experiences that keep visitors engaged and satisfied.
              </p>

              {/* <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__model-info">
                    I develop the user interface.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__model-info">Web Page Development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__model-info">
                    I create ux element interactions
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__model-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__model-info">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </li>
              </ul> */}
            </div>
          </div>
        </div>



        <div className="services__content">
          <div>
          <i className="uil uil-desktop services__icon"></i>


            <h3 className="services__title">
              Responsive <br /> Web Designs
            </h3>
          </div>
          <span className="services__button white" onClick={() => toggleTab(4)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 4
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Responsive Web Designs</h3>
              <p className="services__modal-description">
              I specialize in creating responsive web designs that ensure seamless user experiences across all devices, from desktops to mobile phones. By using flexible grids, media queries, and modern CSS techniques, I ensure that your website looks and functions beautifully, regardless of screen size. My designs adapt effortlessly to varying resolutions, enhancing usability and engagement on every device.
              </p>

              {/* <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__model-info">
                    I develop the user interface.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__model-info">Web Page Development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__model-info">
                    I create ux element interactions
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__model-info">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__model-info">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
