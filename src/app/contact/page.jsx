import social from 'config/social.json';
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function AboutUs() {
    return (
        <div className="flex flex-col items-center h-screen">
            <p className="text-[30pt] font-bold mb-4">Contact Us</p>
            <p className="text-lg text-center max-w-2xl">
                You can contact us on following links:
            </p>
            <ul className="social-icons social-icons-footer mb-4">
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
            <p className="text-lg text-center max-w-2xl mt-4 mb-4">
                Become to a subscriber to get latest product updates and offers.
            </p>
            <div>
                <label htmlFor="">Email</label> &nbsp;
                <input type="text" placeholder='xxxxx@gmail.com' className='border py-2 p-4 rounded-md'/>

            </div>
            <div>
            <input type="submit" className='btn btn-primary'/>
            </div>
        </div>
    );
}