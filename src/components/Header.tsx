"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { NavList } from "@/utils/data";
import { usePathname } from "next/navigation";
import Logo from "@/app/assets/images/Logo";

export default function Header() {
  const path = usePathname();
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if(path === "/"){
        setIsSticky(window.scrollY > 0);
      }else{
        setIsSticky(true);
      }
    };

    // Check scroll position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [path]);


  return (
    <header
      className={`fixed top-0 h-max transition-all w-screen ${
        isSticky ? "sticky-header shadow-lg" : ""
      }`}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="./index.html">
            <figure className="mb-0">
              <Logo />
            </figure>
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse md:visible navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              {NavList.map((link) => (
                <li
                  key={link.id}
                  className={`nav-item ${link.link === path ? "active" : ""}`}
                >
                  <Link
                    className={`nav-link ${
                      link.link === "/contact" ? "contact_btn" : ""
                    }`}
                    href={link.link}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
