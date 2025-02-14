import "./contact.css";
import { useRef, useState   } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const[sending,setSending]=useState(false);
  const form=useRef();
  
  const sendEmail = async (e) => {
    setSending(true);
    e.preventDefault();
    try {
      const response = await emailjs.sendForm(
        "service_boq8djj",
        "template_qtxu6s9",
        form.current,
        {
          publicKey: "y1dEbU7htrq6DkM_5",
        }
      );

      if (response.status === 200) {
        alert("Message Sent Successfully");
        setSending(false);
        e.target.reset();
      } else {
        alert("Something went wrong, please try again later.");
        setSending(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Can't send message. Please try later.");
      setSending(false);
    }
  };


  return (
    <section className="contact section" id="contact" >
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Reach out for a project</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            {[
              { icon: "bx bx-mail-send", title: "Email", data: "ranadanish.se@gmail.com", link: "mailto:ranadanish.se@gmail.com" },
              { icon: "bx bxl-whatsapp", title: "Whatsapp", data: "+923121615000", link: "https://api.whatsapp.com/send?phone=+923121615000&text=Hello,more information!" },
              { icon: "bx bxl-messenger", title: "Facebook", data: "Rana Danish", link: "https://www.facebook.com/profile.php?id=100094231686233" },
            ].map((item, index) => (
              <div key={index} className="content__card">
                <i className={`${item.icon} contact__card-icon`}></i>
                <h3 className="contact__card-title">{item.title}</h3>
                <span className="contact__card-data">{item.data}</span>
                <a href={item.link} className="contact__button">
                  Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write Your Project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            {[
              { label: "Name", type: "text", name: "name", placeholder: "Please Insert Your Name" },
              { label: "Email", type: "email", name: "email", placeholder: "Insert Your Email" },
            ].map((field, index) => (
              <div key={index} className="contact__form-div">
                <label className="contact__form-tag">{field.label}</label>
                <input type={field.type} name={field.name} required className="contact__form-input" placeholder={field.placeholder} />
              </div>
            ))}

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea name="project" cols={30} rows={10} required className="contact__form-input" placeholder="Write Your Project"></textarea>
            </div>
            
            <button className="button button--flex">
              {sending?"Sending...":"Send Message"}
              <svg className="button__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352Z" fill="var(--container-color)"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
