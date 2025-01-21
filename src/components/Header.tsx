"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { NavList } from "@/utils/data";
import { usePathname } from "next/navigation";
import Logo from "@/app/assets/images/Logo";

export default function Header() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(true);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (path === "/" && window.innerWidth > 768) {
        setIsSticky(window.scrollY > 0);
      } else {
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`md:fixed top-0 h-max transition-all w-screen ${
        isSticky ? "sticky-header shadow-lg" : ""
      }`}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" href="/">
            <figure className="mb-0">
              <Logo />
            </figure>
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${
              menuOpen ? "rounded-xl py-4" : "collapse"
            } md:visible navbar-collapse`}
            id="navbarSupportedContent"
            ref={menuRef} // Attach ref to the menu container
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
