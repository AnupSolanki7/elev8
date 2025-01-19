"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../../public/images/choose_us_1.png";
import Slider2 from "../../public/images/choose_us_2.png";
import Slider3 from "../../public/images/choose_us_3.png";
import Slider4 from "../../public/images/choose_us_4.png";
import Image from "next/image";

export default function ChooseUs() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 slides at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 slides on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 slides on smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile devices
        },
      },
    ],
  };

  const chooseUsData = [
    {
      imgSrc: Slider1,
      title: "FLEX MUSCLE",
      description:
        "Quia voluptas sit asper natur aut odit aut fugi sed quia conseaunta ma gni dolores eos",
      link: "./index.html",
    },
    {
      imgSrc: Slider2,
      title: "POWERFUL VITAMINS",
      description:
        "Auia voluptas sit asper natur aut odit aut fugi sed quia conseaunta ma gni dolores eos",
      link: "./index.html",
    },
    {
      imgSrc: Slider3,
      title: "ABDOMINAL SESSIONS",
      description:
        "Ruia voluptas sit asper natur aut odit aut fugi sed quia conseaunta ma gni dolores eos",
      link: "./index.html",
    },
    {
      imgSrc: Slider4,
      title: "WEIGHT LIFTING",
      description:
        "Duia voluptas sit asper natur aut odit aut fugi sed quia conseaunta ma gni dolores eos",
      link: "./index.html",
    },
  ];

  return (
    <section className="choose_us_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="choose_us_content">
              <h5 className="text-3xl">WHY CHOOSE US</h5>
              <h2  className="text-6xl font-bold">BUILD YOUR BEST BODY</h2>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <Slider {...settings} className="owl-carousel owl-theme">
            {chooseUsData.map((item, index) => (
              <div className="item" key={index}>
                <div className="choose_us_box_content">
                  <figure>
                   <Image src={item.imgSrc} alt="slider image" />
                  </figure>
                  <h6>{item.title}</h6>
                  <p>{item.description}</p>
                  <div className="btn_wrapper">
                    <a
                      className="read_more_btn text-decoration-none"
                      href={item.link}
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
