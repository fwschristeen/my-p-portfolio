import react from "react";
import { FaGithub, FaLinkedinIn} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactLinks = () => {
    const links = [
        {
            icon : <FaGithub/>,
            url  : "https://github.com/fwschristeen",
        },
        {
            icon : <FaLinkedinIn/>,
            url  :"https://www.linkedin.com/in/shenoli-christeen-497454327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
            icon : <MdEmail/>,
            url :"mailto:shenoli1120@gmail.com",
        },
    ];

    return(
    <div  className="py-2">
      <div className=" w-full px-4">
        <div className="flex gap-6 items-center max-w-md ml-25">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-600 hover:text-black transition duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLinks;