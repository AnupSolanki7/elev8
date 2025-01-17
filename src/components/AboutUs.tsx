import Image from "next/image";
import Fittness from "../../public/images/aboutus_image.png";
import { FaPlay } from "react-icons/fa6";

export default function AboutUs() {
  return (
    <section className="aboutus_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12 d-lg-block d-md-flex align-items-center">
            <div className="aboutus_image">
              <figure className="mb-0">
                <Image src={Fittness} alt="fittness" />
              </figure>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-6 col-sm-12 col-xs-12"
            data-aos="fade-right"
          >
            <div className="aboutus_content">
              <h5>ABOUT US</h5>
              <h2>WELCOME TO THE XTREME FITNESS</h2>
              <p>
                Euis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur ex sint occaecat
                cupidatat non proident, sunt in cular aui officia deserunt
                mollit anim laborum.
              </p>
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-6 col-6">
                  <div className="counter_wrapper">
                    <span className="rating counter">600</span>
                    <span className="plus_sign">K+</span>
                    <p>WORKING HOURS</p>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-6 col-6">
                  <div className="counter_wrapper margin_left">
                    <span className="rating counter">790</span>
                    <span className="plus_sign">+</span>
                    <p>SUCCESS PROGRAM</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-6 col-6">
                  <div className="counter_wrapper">
                    <span className="rating counter">2560</span>
                    <span className="plus_sign">+</span>
                    <p>HAPPY CLIENTS</p>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-6 col-6">
                  <div className="counter_wrapper margin_left">
                    <span className="rating counter">830</span>
                    <span className="plus_sign">+</span>
                    <p>PERFECT BODIES</p>
                  </div>
                </div>
              </div>
              <div className="btn_wrapper">
                <a
                  className="text-decoration-none readmore_btn"
                  href="./about.html"
                >
                  Read more
                  <i className="flex justify-center items-center" >
                    {" "}
                    <FaPlay />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
