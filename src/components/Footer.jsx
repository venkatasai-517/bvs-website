import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialMediaData = [
    {
      icon: FaFacebookF,
      link: "https://www.facebook.com/profile.php?id=61567180719378",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/business_victory_solutions?igsh=MWpmZmc2NWNrYjEyYg==",
    },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com",
    },
    {
      icon: FaTwitter,
      link: "https://twitter.com",
    },
    {
      icon: FaGithub,
      link: "https://github.com",
    },
  ];

  return (
    <footer className="px-4 py-12 text-gray-300 bg-gray-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-white">About us</h3>
            <p className="text-sm">
              Victory Solution specializes in app development, web design,
              UI/UX, and impactful marketing solutions to drive your business
              success.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2 lg:col-span-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Navigation
              </h3>
              <ul className="space-y-2">
                {["home", "services", "courses", "about us", "contact us"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        to={`/${item.replace(" ", "-")}`}
                        className="text-sm transition-colors duration-300 hover:text-white"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">
                Services
              </h3>
              <ul className="space-y-2">
                {[
                  "Application Development",
                  "Website Development",
                  "Digital Marketing",
                  "Social media promotions",
                  "Ad's Services",
                ].map((service) => (
                  <li
                    key={service}
                    className="text-sm transition-colors duration-300 cursor-pointer hover:text-white"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
            <p className="mb-2 text-sm">
              Ramalingapuram Main road, (opposite Sri Venkateswara Swamy Temple,
              Nellore-524 
            </p>
            <p className="mb-2 text-sm">+91 8523899330, 7993558948</p>
            <p className="mb-4 text-sm">bvs@gmail.com</p>

            <h3 className="mb-4 text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialMediaData.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center border-t border-gray-700">
          <p className="text-sm">
            &copy; {currentYear} BVS. All rights reserved. Empowering businesses
            with innovative solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
