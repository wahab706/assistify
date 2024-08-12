import { useState } from "react";
import logo from "../assets/img/logo.svg";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white px-10 py-5 rounded-[50px] max-w-[1370PX] mx-auto">
      <nav aria-label="Global" className="flex items-center justify-between">
        <div className="flex lg:flex-grow">
          <Link to="#">
            <img alt="" src={logo} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link to="#" className="text-base leading-[20.16px]">
            Our Solution
          </Link>
          <Link to="#" className="text-base leading-[20.16px]">
            Use Cases
          </Link>
          <Link to="#" className="text-base leading-[20.16px]">
            Company
          </Link>
        </div>
        <div className="hidden lg:flex lg:justify-end ms-12">
          <Button primary>Contact us</Button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="logo" src={logo} />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="#"
                  className="block rounded-lg px-3 py-2 text-base text-[#000] hover:bg-gray-50"
                >
                  Our Solution
                </Link>
                <Link
                  to="#"
                  className="block rounded-lg px-3 py-2 text-base text-[#000] hover:bg-gray-50"
                >
                  Use Cases
                </Link>
                <Link
                  to="#"
                  className="block rounded-lg px-3 py-2 text-base text-[#000] hover:bg-gray-50"
                >
                  Company
                </Link>
              </div>
              <div className="py-6">
                <Button primary>Contact us</Button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
