import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import footerIllustration from "../assets/img/footer-illustration.svg";
export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-[1370px] rounded-[30px] pt-[50px] pb-5 bg-white ps-[60px] pr-6 flex flex-col gap-14 relative">
        <div className="flex flex-wrap items-center gap-10 px-2.5">
          <img className="h-[39px]" src={logo} alt="logo" />
          <span className="text-gray-light">Pathing the future</span>
        </div>
        <ul className="flex gap-10 flex-wrap items-center">
          <li>
            <Link to="" className="text-base lg:text-lg">
              What is Assistify?
            </Link>
          </li>
          <li>
            <Link to="" className="text-base lg:text-lg">
              How it works
            </Link>
          </li>
          <li>
            <Link to="" className="text-base lg:text-lg">
              Use cases
            </Link>
          </li>
          <li>
            <Link to="" className="text-base lg:text-lg">
              Contact
            </Link>
          </li>
          <li>
            <Link to="" className="text-base lg:text-lg">
              Compare Assistify
            </Link>
          </li>
          <li>
            <Link to="" className="text-base lg:text-lg">
              Company
            </Link>
          </li>
          <li>
            <Link to="" className="text-base lg:text-lg">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link to="" className="text-base lg:text-lg">
              Privacy Policy
            </Link>
          </li>
        </ul>
        <div className="flex flex-col items-center gap-4.5 mt-6">
          <p className="text-lg text-gray-light leading-[20.16px]">
            Copyright HRSANAD 2024
          </p>
          <div className="flex justify-between items-center gap-3 max-w-[182px]">
            <Link to="">
              <FaFacebook className="w-4.5 h-4.5 text-gray-light" />
            </Link>
            <Link to="">
              <FaInstagram className="w-4.5 h-4.5 text-gray-light" />
            </Link>
            <Link to="">
              <FaTwitter className="w-4.5 h-4.5 text-gray-light" />
            </Link>
          </div>
        </div>
        <div className="hidden lg:block absolute bottom-10 right-20">
          <img src={footerIllustration} alt="footerIllustration" />
        </div>
      </div>
    </footer>
  );
}
