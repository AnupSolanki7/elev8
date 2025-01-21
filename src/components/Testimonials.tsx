"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Test1 from "../../public/images/testimonials_apostrophy.png";
import Test2 from "../../public/images/testimonials_white_line.png";
import Test3 from "../../public/images/testimonials_image.png";

export default function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 4 slides at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <section className="testimonials_section overflow-hidden">
      <div className="container h-[80vh] ">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <div className="testimonials_heading_content" data-aos="fade-right">
              <h5>TESTIMONIALS</h5>
              <h2>WHAT OUR CLIENTS SAY ABOUT US</h2>
            </div>
            <Slider {...settings} className="owl-carousel owl-theme">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="item">
                  <div className="testimonials_content">
                    <div className="testimonials_apostrophy_wrapper">
                      <p>
                        Ruis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                        exceusint occaecat cupidata non proident, sunt in culpa
                        aui officia deser mollit anim laborum reprehenderaui in
                        eau voluptate velit esse quam nihil.
                      </p>
                      <figure className="apostrophy mb-0">
                        <Image src={Test1} alt="testimonial" />
                      </figure>
                    </div>
                    <div className="testimonials_wrapper">
                      <h6>KEVIN ANDREW</h6>
                      <span>Happy Client</span>
                      <figure className="white_line mb-0">
                        <Image src={Test2} alt="testimonial" />
                      </figure>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 d-lg-block d-md-flex align-items-center">
            <div className="testimonials_image ">
              <figure className="mb-0">
                <Image src={Test3} className="max-w-max" alt="testimonial"  />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
