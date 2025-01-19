"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import Service_one from "../../../../public/images/provide_1.png";
import Service_two from "../../../../public/images/provide_2.png";
import Service_three from "../../../../public/images/provide_3.png";
import Service_four from "../../../../public/images/provide_4.png";

const servicesData = [
  {
    id: 1,
    image: Service_one,
    title: "CHEST EXERCISES",
    description:
      "Quia voluptas sit asper natur aut odit aut fugi sed quia conseaunta ma gni dolores eos",
  },
  {
    id: 2,
    image: Service_two,
    title: "STENGTH INCREASING",
    description:
      "Auia voluptas sit asper natur aut odit aut fugi sed quia conseaunta ma gni dolores eos",
  },
  {
    id: 3,
    image: Service_three,
    title: "SHOULDER EXCERCISES",
    description:
      "Ruia voluptas sit asper natur aut odit aut fugi sed quia conseaunta ma gni dolores eos",
  },
  {
    id: 4,
    image: Service_four,
    title: "WEIGHT LOSING",
    description:
      "Duia voluptas sit asper natur aut odit aut fugi sed quia conseaunta ma gni dolores eos",
  },
];

const ServicesProvide = () => {
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
  return (
    <section className="provide_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="provide_content">
              <h5 className="text-3xl" >WHAT WE PROVIDE</h5>
              <h2 className="text-6xl font-bold">WE OFFER EXCLUSIVE EXERCISES</h2>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <Slider {...settings} className="owl-carousel owl-theme">
            {servicesData.map((service) => (
              <div key={service.id} className="item">
                <div className="provide_box_content">
                  <figure>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={300}
                      height={200}
                      className="img-fluid"
                    />
                  </figure>
                  <h6>{service.title}</h6>
                  <p>{service.description}</p>
                  <div className="btn_wrapper">
                    <Link
                      className="read_more_btn text-decoration-none"
                      href="/services"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ServicesProvide;
