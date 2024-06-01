"use client"
import "./contact.css";
import { useContext, useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../context";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_4w3vy9g",
          "template_p6vgmtf",
          formRef.current,
          "pucNhWVF81tZUYCA3"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's be in touch</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={"/image/phone.png"} alt="" className="c-icon" />
              +91 9080820022
            </div>
            <div className="c-info-item">
              <img className="c-icon"   src={"/image/email.png"} alt="" />
              gokulselvadurai2004@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={"/image/address.png"} alt="" />
              Vandavasi, Tamil Nadu, India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form  ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode ? "#333" :  "white",
              color: darkMode ? "white" : "black",}}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode ? "#333" : "white",
              color: darkMode ? "white" : "black",}}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode ? "#333" :  "white",
              color: darkMode ? "white" : "black", }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode ? "#333" : "white",
              color: darkMode ? "white" : "black", }}
              rows={5}
              placeholder="Message"
              name="message"
            />
            <button type="submit">{done ? <span>Submitted</span> : <span>Submit</span>}</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
