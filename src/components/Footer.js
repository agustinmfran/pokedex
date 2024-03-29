import React from "react";
import { Link } from "react-scroll/modules";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineLink,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-black border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-black">
          <Link
            to="home"
            className="hover:underline cursor-pointer"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            © 2023 Agustín Franco
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1 md:ml-8">
          <a
            href="https://github.com/agustinmfran"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-black "
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/agustinmfran/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-black "
              size={30}
            />
          </a>

          <a
            href="https://www.agustinmfran.com.ar"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLink
              className="hover:-translate-y-1 transition-transform cursor-pointer text-black"
              size={30}
            />
          </a>

          <a
            href="mailto:agustinmfran@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineMail
              className="hover:-translate-y-1 transition-transform cursor-pointer text-black"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
