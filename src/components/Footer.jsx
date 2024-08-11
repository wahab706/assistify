import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";

const socailLinks = [
  { href: "#", icon: FaFacebookF },
  { href: "#", icon: FaTwitter },
  { href: "#", icon: FaLinkedinIn },
  { href: "#", icon: FaInstagram },
];

export default function Footer() {
  return (
    <footer className="px-4 lg:px-8 py-[75px]">
      <div className="mx-auto max-w-[1216px]">
        <div className="sm:grid sm:grid-cols-12 sm:gap-8">
          <div className="sm:col-span-12 md:col-span-6 xl:col-span-5">
            <div className="flex flex-col justify-between gap-3 p-5 h-full">
              <div className="flex flex-col gap-2.5">
                <div className="px-2.5">
                  <img className="h-[49px]" src={logo} alt="logo" />
                </div>
                <p className="text-lg lg:text-xl leading-normal">
                  Take your job interviews to the next level
                </p>
              </div>
              <div className="flex gap-4">
                {socailLinks.map((item) => (
                  <Link
                    to={item.href}
                    className="w-[41px] h-[41px] bg-black rounded-full text-white flex items-center justify-center transition-all duration-300 hover:bg-gray-700"
                  >
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="sm:col-span-6 xl:col-span-4 flex flex-col gap-6.5 pt-5">
            <h3 className="text-xl font-semibold leading-normal">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-[25px]">
              <li>
                <Link to="" className="text-base lg:text-lg">Services</Link>
              </li>
              <li>
                <Link to="" className="text-base lg:text-lg">Features</Link>
              </li>
              <li>
                <Link to="" className="text-base lg:text-lg">About Us</Link>
              </li>
              <li>
                <Link to="" className="text-base lg:text-lg">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-6 xl:col-span-3 flex flex-col gap-6.5 pt-5">
            <h3 className="text-xl font-semibold leading-normal">Contact Us</h3>
            <p className="text-lg lg:text-xl leading-normal">
              Design Agency Head Office.
              <br /> Airport Road <br />
              United Arab Emirates
            </p>
          </div>
        </div>
        <div className="xl-col-span-12 mt-[61px]">
          <p className="text-lg lg:text-xl leading-normal">Copyright HRSANAD 2024</p>
        </div>
      </div>
    </footer>
  );
}
