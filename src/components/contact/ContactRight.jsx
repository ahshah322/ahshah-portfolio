import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export const ContactRight = () => {
  const contactInfo = {
    name: 'Ali Husnain Shah',
    jobTitle: '.NET Developer',
    whatsappNumber: '+923196989322',
    email: 'ahshah2211@gmail.com',
    location: 'Kharian, Pakistan',
  }

  return (
    <div className="w-full lg:w-[40%] rounded-lg flex flex-col gap-5 justify-between">
      <p className=" w-full text-base flex items-center gap-2 px-4 py-5 rounded-lg justify-start boxBackground">
        <span className="contactIcon">
          <FaWhatsapp />
        </span>
        <span className="dark:text-textColor-light text-textColor-dark">{contactInfo.whatsappNumber}</span>
      </p>
      <p className="w-full text-base flex items-center gap-2 px-4 py-5 rounded-lg justify-start boxBackground">
        <span className="contactIcon">
          <FaEnvelope />
        </span>
        <span className="dark:text-textColor-light text-textColor-dark">{contactInfo.email}</span>
      </p>
      <p className="w-full text-base flex items-center gap-2 px-4 py-5 rounded-lg justify-start boxBackground">
        <span className="contactIcon">
          <FaMapMarkerAlt />
        </span>
        <span className="dark:text-textColor-light text-textColor-dark">{contactInfo.location}</span>
      </p>
      <div className="w-full text-base flex justify-around gap-2 px-4 py-5 rounded-lg boxBackground">
        <a href="https://www.facebook.com/ahshah322/" target='_blank'>
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
        </a>
        <a href="https://twitter.com/ahshah322" target='_blank'>
          <span className="bannerIcon">
            <BsTwitterX />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/ahshah322/" target='_blank'>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </a>
        <a href="https://www.instagram.com/ahshah322" target='_blank'>
          <span className="bannerIcon">
            <FaInstagram />
          </span>
        </a>
      </div>
    </div>
    //   <div className="w-full lgl:w-[40%] h-50 p-4 lgl:p-8 rounded-lg flex flex-col gap-8 justify-start boxBackground">
    //   <div className="flex flex-col gap-4 text-black dark:text-gray-300">
    //     <h3 className="text-3xl font-bold uppercase">{contactInfo.name}</h3>
    //     <p className="text-lg font-normal">
    //       {contactInfo.jobTitle}
    //     </p>
    //     <p className="text-base flex items-center gap-2">
    //       <span className="contactIcon">
    //         <FaWhatsapp />
    //       </span>
    //       <span className="">{contactInfo.whatsappNumber}</span>
    //     </p>
    //     <p className="text-base flex items-center gap-2">
    //       <span className="contactIcon">
    //         <FaEnvelope />
    //       </span>
    //       <span className="">{contactInfo.email}</span>
    //     </p>
    //     <p className="text-base flex items-center gap-2">
    //       <span className="contactIcon">
    //         <FaMapMarkerAlt />
    //       </span>
    //       <span className="">{contactInfo.location}</span>
    //     </p>
    //   </div>
    //   <div className="flex flex-col gap-4 mt-4">
    //     {/* <h2 className="text-base text-black sm:hidden md:block dark:text-gray-300 uppercase font-titleFont mb-4">Find me in</h2> */}
    //     <div className="flex justify-around gap-4">
    //       <a href="https://www.facebook.com/ahshah322/" target='_blank'>
    //         <span className="bannerIcon">
    //           <FaFacebookF />
    //         </span>
    //       </a>
    //       <a href="https://twitter.com/ahshah322" target='_blank'>
    //         <span className="bannerIcon">
    //           <BsTwitterX />
    //         </span>
    //       </a>
    //       <a href="https://www.linkedin.com/in/ahshah322/" target='_blank'>
    //         <span className="bannerIcon">
    //           <FaLinkedinIn />
    //         </span>
    //       </a>
    //       <a href="https://www.instagram.com/ahshah322" target='_blank'>
    //         <span className="bannerIcon">
    //           <FaInstagram />
    //         </span>
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
}

