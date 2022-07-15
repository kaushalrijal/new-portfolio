import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_e3zis5l",
        "template_38dokjk",
        formRef.current,
        "SOcD2VtKu8d_p420T"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(done);
          setDone(true);
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center p-4"
    >
      <form
        ref={formRef}
        className="flex flex-col max-w-[600px] w-full"
        onSubmit={handleSubmit}
      >
        <div className="pb-8">
          <p className="text-4xl bold inline border-b-4 border-[#8C8C8C]">
            Contact
          </p>
          <p className="py-4">&#47;&#47;Wanna get in touch? Hit my mailbox now!</p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6] text-black"
          type="text"
          placeholder="Name"
          name="user_name"
          id="name"
          required
        />
        <input
          className="p-2 bg-[#ccd6f6] text-black"
          type="text"
          placeholder="Subject"
          name="user_subject"
          id="subject"
          required
        />
        <input
          className=" my-4 p-2 bg-[#ccd6f6] text-black"
          type="email"
          placeholder="E-Mail"
          name="user_email"
          id="email"
          required
        />
        <textarea
          className="p-2 bg-[#ccd6f6] text-black"
          name="message"
          rows="10"
          placeholder="Message"
          id="message"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-[#8C8C8C] hover:border-[#8C8C8C] px-4 py-2 mx-auto my-8 flex items-center">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
