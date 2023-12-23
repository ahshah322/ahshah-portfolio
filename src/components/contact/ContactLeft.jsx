import React, { useState, useRef } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import ErrorMessage from "../layouts/ErrorMessage";
import SuccessMessage from "../layouts/SuccessMessage";

export const ContactLeft = () => {
  const form = useRef();
  console.log("valueali",import.meta.env.VITE_SERVICE_ID)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  const validateEmail = (email) => {
    const regex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  };
  // ========== Email Validation end here ================

  const resetForm = (seconds) => {
    setTimeout(() => {
      setUsername("");
      setEmail("");
      setMessage("");
      setSuccessMsg("");
      setErrMsg("");
    }, seconds);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // alert(emailValidation());
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!validateEmail(email)) {
      setErrMsg("Give a valid Email!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      resetForm(0);
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          function (response) {
            setSuccessMsg(
              `Thank you dear ${username}, Your Messages has been sent Successfully!`
            );
          },
          function (error) {
            setErrMsg(`FAILED..., ${error}`);
          }
        )
        .then(resetForm(8000));
    }
  };
  return (
    <div className="w-full lg:w-[60%] h-50 py-10 flex flex-col gap-8 p-4 lgl:p-8 rounded-lg boxBackground">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
        autoComplete="off"
      >
        {errMsg && <ErrorMessage message={errMsg}/>}
        {successMsg && <SuccessMessage message={successMsg}/>}

        <div className="flex flex-col gap-4">
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            autoComplete="off"
            name="from_name"
            placeholder="Your Name"
            className={`${
              errMsg === "Username is required!" && "outline-designColor"
            } contactInput`}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            autoComplete="off"
            name="from_email"
            placeholder="Your Email Address"
            className={`${
              errMsg === "Please give your Email!" && "outline-designColor"
            } contactInput`}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-4">
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            name="message"
            placeholder="Your Message"
            className={`${
              errMsg === "Message is required!" && "outline-designColor"
            } contactTextArea`}
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="w-full h-12 text-sm border border-gray-600 bg-[#E5E5E5] dark:bg-[#020617] dark:text-textColor-light text-textColor-dark rounded-lg uppercase duration-300 hover:border-[1px] hover:border-designColor"
          >
            Send Message
          </button>
        </div>

        {errMsg && <ErrorMessage message={errMsg}/>}
        {successMsg && <SuccessMessage message={successMsg}/>}
      </form>
    </div>
  );
};
