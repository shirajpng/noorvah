"use client";

import social from 'config/social.json';
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";

export default function AboutUs() {

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Full name: ", fullname);
        console.log("Email: ", email);
        console.log("Message: ", message);

        // const res = await fetch("api/contact", {
        //     method: "POST",
        //     headers: {
        //         "Content-type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         fullname,
        //         email,
        //         message,
        //     }),
        // });

        // const { msg, success } = await res.json();
        // setError(msg);
        // setSuccess(success);

        // if (success) {
        //     setFullname("");
        //     setEmail("");
        //     setMessage("");
        // }
    };

    return (
        <div className="flex flex-col items-center h-screen">
            <p className="text-[30pt] text-center max-w-4xl my-4">
                You can contact us through our social handles:
            </p>
            <ul className="social-icons social-icons-footer mb-4 border-2 rounded-4xl">
                          {social?.main.map( (social) => (
                            <li key={social.name}>
                            <a
                                aria-label={social.name}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                              >
                                <span className="sr-only">{social.name}</span>
                                <span className="inline-block">
                                  {social.name == "facebook" && <FaFacebookF /> }
                                  {social.name == "twitter" && <BsTwitterX /> }
                                  {social.name == "instagram" && <FaInstagram /> }
                                  {social.name == "linkedin" && <FaLinkedin /> }
                                  </span>
                              </a>
                            </li>
                          ) )}        
            </ul>
            <div className="text-[30pt]">OR</div>
            <p className="text-lg text-center mt-4 mb-4">
            If you have a question or concern?
            Send us an email at noorvahnepal@gmail.com or fill out the contact form below.
            </p>
        
            <form onSubmit={handleSubmit} className="py-4 mt-4 border-t flex flex-col gap-5">
                <div>
                    <label htmlFor="">Name</label> <br />
                    <input type="text" onChange={(e) => setFullname(e.target.value)} placeholder='Kakro Gaajar' className='border py-2 p-4 rounded-md'/>

                </div>
                <div>
                    <label htmlFor="">Email</label> <br />
                    <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='kakrogaajar@gmail.com' className='border py-2 p-4 rounded-md'/>

                </div>
                <div>
                    <label htmlFor="">Message</label> <br />
                    <textarea onChange={(e) => setMessage(e.target.value)} placeholder="Type your message here..." className='w-full border py-2 p-4 rounded-md'></textarea>

                </div>
            <div>
                <div className="mt-[1rem] flex items-center gap-4">
                <button className={`bg-[#309efd] h-[40px] px-[80px] text-white mt-[2rem] rounded font-semibold hover:bg-[#1776BD]`} disabled={loading} type="submit" >Send</button>
                </div>
            </div>
            </form>
        </div>
    );
}