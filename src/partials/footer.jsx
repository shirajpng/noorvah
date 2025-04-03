"use client";
import Link from 'next/link';
import Image from 'next/image';
import DynamicIcon from 'helpers/DynamicIcon';
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import social from 'config/social.json'; 

const Footer = () => {


    return (
    <footer className="bg-gray-100">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-y-5 justify-between items-center py-10 px-5 md:pt-10 md:pb-8">
          {/* social share */}
          
          <div className="flex flex-col md:flex-row items-center gap-x-4 md:gap-x-10">
            <p>Follow us</p>
            <ul className="social-icons social-icons-footer">
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
          </div>

          <ul className="flex-col gap-x-4 lg:gap-x-10 my-3">
            <li className="footer-link">
              <Link href="/">About</Link>
            </li>
            <li className="footer-link">
              <Link href="/">Products</Link>
            </li>
            <li className="footer-link">
                <Link href="/">Contact</Link>
            </li>
            
          </ul>
          <span>
          2025 © Noorvah candles
          </span>
        
        </div>
      </div>
    </footer>
    )
}
export default Footer;