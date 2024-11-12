import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function Footer() {
  const handleCallClick = () => {
    window.location.href = "tel:7002142964";
  };
  return (
    <footer className="mt-20 bg-neutral-900 text-neutral-300 p-4 lg:px-28">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4">
        <div className="flex flex-row items-center text-center justify-between space-x-6">
          <a
            href="https://github.com/KritirajChakraborty"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-white" />
          </a>
          <a
            href="http://www.linkedin.com/in/kritiraj-chakraborty"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-white" />
          </a>
          <a
            href="https://www.instagram.com/houseofkritiraj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:text-white" />
          </a>
        </div>

        <div className="text-center space-y-2">
          <a
            className="flex items-center"
            href="mailto:kritirajchakraborty@gmail.com"
          >
            <MdEmail className="mr-2 text-xl" /> kritirajchakraborty@gmail.com
          </a>
          <a onClick={handleCallClick} className="flex items-center">
            <MdPhone className="mr-2 text-xl" /> +917002142964
          </a>
          <p className="flex items-center">
            <MdLocationOn className="mr-2 text-xl" /> Bangalore, Karnataka,
            India
          </p>
        </div>

        <p className="text-sm mt-4">
          &copy; 2024 Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
