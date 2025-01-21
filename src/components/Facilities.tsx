import Image from "next/image";
import Facility1 from "../../public/images/facilities_1.jpg";
import Facility2 from "../../public/images/facilities_icon_1.png";
import Facility3 from "../../public/images/facilities_2.jpg";
import Facility4 from "../../public/images/facilities_icon_2.png";
import Facility5 from "../../public/images/facilities_3.jpg";
import Facility6 from "../../public/images/facilities_icon_3.png";
import Facility7 from "../../public/images/facilities_4.jpg";
import Facility8 from "../../public/images/facilities_icon_4.png";

export default function Facilities() {
  return (
    <section className="facilities_section">
      <div className="container">
        <div className="row" data-aos="fade-up">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="facilities_image position-relative">
              <figure className="mb-0">
                <Image src={Facility1} alt="facility image" />
              </figure>
              <div className="facilities_content">
                <figure>
                  <Image src={Facility2} alt="facility image" />
                </figure>
                <h5 className="text-white">PERSONAL TRAINING</h5>
                <p className="text-white">
                  Auia voluptas sit aspernatur aut odit aut fugi sea conseaunta
                  magni dolores eos
                </p>
                <div className="btn_wrapper">
                  <a
                    className="text-decoration-none readmore_btn"
                    href="./services.html"
                  >
                    Read more
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="facilities_image position-relative">
              <figure className="mb-0">
                <Image src={Facility3} alt="facility image" />
              </figure>
              <div className="facilities_content">
                <figure>
                  <Image
                    src={Facility4}
                    alt=""
                    className="img-fluid"
                  />
                </figure>
                <h5 className="text-white">YOGA LESSON</h5>
                <p className="text-white">
                  Ruia voluptas sit aspernatur aut odit aut fugi sea conseaunta
                  magni dolores eos
                </p>
                <div className="btn_wrapper">
                  <a
                    className="text-decoration-none readmore_btn"
                    href="./services.html"
                  >
                    Read more
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="facilities_image position-relative">
              <figure className="mb-0">
                <Image src={Facility5} alt="facility image" />
              </figure>
              <div className="facilities_content">
                <figure>
                  <Image src={Facility6} alt="facility image" />
                </figure>
                <h5 className="text-white">BOXING MARTIAL ARTS</h5>
                <p className="text-white">
                  Nuia voluptas sit aspernatur aut odit aut fugi sea conseaunta
                  magni dolores eos
                </p>
                <div className="btn_wrapper">
                  <a
                    className="text-decoration-none readmore_btn"
                    href="./services.html"
                  >
                    Read more
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="facilities_image position-relative">
              <figure className="mb-0">
                <Image src={Facility7} alt="facility image" />
              </figure>
              <div className="facilities_content">
                <figure>
                  <Image src={Facility8} alt="facility image" />
                </figure>
                <h5 className="text-white">ONLINE COACHING</h5>
                <p className="text-white">
                  Muia voluptas sit aspernatur aut odit aut fugi sea conseaunta
                  magni dolores eos
                </p>
                <div className="btn_wrapper">
                  <a
                    className="text-decoration-none readmore_btn"
                    href="./services.html"
                  >
                    Read more
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn_wrapper">
          <a
            className="text-decoration-none join_now_btn"
            href="./about.html#video"
          >
            Join us now
            <i className="fa-solid fa-play"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
