"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCirclePlay, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { RiTwitterFill } from "react-icons/ri";
import { LiaLinkedinIn } from "react-icons/lia";
import Link from "next/link";

export default function Banner() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const socialIcons = [
    { icon: <FaFacebookF className="text-white text-2xl" />, href: "#" },
    { icon: <RiTwitterFill className="text-white text-2xl" />, href: "#" },
    { icon: <LiaLinkedinIn className="text-white text-2xl" />, href: "#" },
    { icon: <FaInstagram className="text-white text-2xl" />, href: "#" },
  ];

  return (
    <div className="banner-section-outer">
      {/* Social Icons */}
      <div className="left_icons float-left d-table" data-aos="fade-down">
        <div className="icon_content d-table-cell align-middle">
          <ul className="list-unstyled gap-4 flex flex-col p-0 m-0">
            {socialIcons.map((social, index) => (
              <li key={index}>
                <a href={social.href}>{social.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Banner Section */}
      <section className="banner-section">
        <div className="container">
          <Slider {...sliderSettings}>
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index}>
                <div className="banner-section-content">
                  <div className="banner-section-wrapper">
                    <h3>XTREME FITNESS</h3>
                    <h1>BE STRONG</h1>
                    <p>Best GYM & Fitness Center Build Your Health.</p>
                    <div className="btn_wrapper">
                      <Link
                        className="text-decoration-none join_now_btn"
                        href="/contact"
                      >
                        <span className="flex items-center px-6 gap-4 py-3 justify-between w-full">
                          Join us now
                          <FaCirclePlay className="text-4xl" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Video Icon */}
      <div className="banner_video position-relative">
        <a
          className="popup-vimeo"
          href="https://video-previews.elements.envatousercontent.com/h264-video-previews/9b19c081-53dc-4345-a05e-0c9a4a52f3e6/26111213.mp4"
        >
          <figure className="video_img mb-0">
            {/* Add your video thumbnail image here */}
          </figure>
        </a>
      </div>
    </div>
  );
}
