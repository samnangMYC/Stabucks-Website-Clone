"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

const FooterLink2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const isLg = useMediaQuery({
    query: `(min-width: 1280px)`,
  }); // adjust the breakpoint value as needed
  const footInfo = [
    {
      title: "Careers",
      iconUp: faCircleChevronUp,
      iconDown: faCircleChevronDown,
      links: [
        { text: "Culture and Value", href: "/" },
        { text: "Inclusion,Diversity, and Equity", href: "/" },
        { text: "Stories and News", href: "/" },
        { text: "Starbucks Archive", href: "/" },
        { text: "Investor Relations", href: "/" },
        { text: "Customer Service", href: "/" },
        { text: "Contact Us", href: "/" },
      ],
    },
  ];
  return (
    <div>
      {footInfo.map((info) => (
        
        <div key={info.title}>
          <div className="flex items-center justify-between">
            <p className="py-5 text-lg">{info.title}</p>
            <button className="lg:hidden" onClick={handleToggle}>
              {isOpen ? (
                <FontAwesomeIcon className="h-6" icon={info.iconDown} />
              ) : (
                <FontAwesomeIcon className="h-6" icon={info.iconUp} />
              )}
            </button>
          </div>

          <ul className={`text-sm ${isLg || isOpen ? "block" : "hidden"}`}>
            {info.links.map((link) => (
              <li key={link.text} className="py-2 opacity-70 hover:opacity-100">
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>

        </div>
      ))}
    </div>
  );
};

export default FooterLink2;
