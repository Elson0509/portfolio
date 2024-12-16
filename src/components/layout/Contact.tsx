import { useEffect, useRef, useState } from "react";
import "./contact.css";
import { motion, useScroll, useTransform } from "motion/react";
import { Quantico } from "next/font/google";
import emailjs from "@emailjs/browser";
import contactmation from "@/assets/animations/contactmation.json";
import emailSentAnimation from "@/assets/animations/emailsent.json";
import loadingAnimation from "@/assets/animations/loading.json";
import dynamic from "next/dynamic";

const quantico = Quantico({
  subsets: ["latin"],
  weight: ["400"],
});

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const currentForm = form.current;
    if (currentForm == null) return;
    setLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
        currentForm,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          setLoading(false);
        },
        (error) => {
          setSuccess(false);
          setError(true);
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contactSection">
        <form ref={form} onSubmit={sendEmail}>
          <h1 className="contactTitle">Let&apos;s Keep in Touch</h1>
          <div className="formItem">
            <label>Name</label>
            <input type="text" placeholder="Your Name" name="user_username" />
          </div>
          <div className="formItem">
            <label>Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              name="user_email"
            />
          </div>
          <div className="formItem">
            <label>Message</label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              name="user_message"
            />
          </div>
          <button className="formButton">Send</button>
          {success && <span>Message successfully sent!</span>}
          {error && <span>Something went wrong!</span>}
        </form>
      </div>
      <div className="contactSection">
        <div className="right">
          {!success && !error && !loading && (
            <Lottie animationData={contactmation} loop={true} />
          )}
          {!success && !error && loading && (
            <Lottie animationData={loadingAnimation} loop={true} />
          )}
          {success && !error && !loading && (
            <Lottie animationData={emailSentAnimation} loop={false} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
