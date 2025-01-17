import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/images/Logo";

export default function Footer() {
  return (
    <section className="footer-section">
      <div className="container">
        <div className="middle-portion">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="about_col">
                <a href="./index.html">
                  <figure>
                    <Logo />
                  </figure>
                </a>
                <p>Fuisruam est aui dolorem ipsum ruia dolor sit amet...</p>
                <ul className="list-unstyled">
                  <li className="icons">
                    <a href="#">
                      <i
                        className="fa-brands fa-facebook-f"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li className="icons">
                    <a href="#">
                      <i
                        className="fa-brands fa-twitter"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li className="icons">
                    <a href="#">
                      <i
                        className="fa-brands fa-instagram mr-0"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 d-lg-block d-none">
              <div className="hours_col">
                <h6>OPENING HOURS</h6>
                <ul className="list-unstyled">
                  <li>
                    <p>Monday – Saturday</p>
                  </li>
                  <li>
                    <span>12.00 – 14.45</span>
                  </li>
                  <li>
                    <p>Sunday – Thursday</p>
                  </li>
                  <li>
                    <span>17.30 – 00.00</span>
                  </li>
                  <li>
                    <p>Friday – Saturday</p>
                  </li>
                  <li>
                    <span>17.30 – 00.00</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 d-md-block d-none">
              <div className="links_col">
                <h6>QUICK LINKS</h6>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="./about.html">About</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="./services.html">Services</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="./trainers.html">Trainers</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="./pricing.html">Pricing</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-caret-right"></i>
                    <a href="./contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="contact_col">
                <h6>CONTACT US</h6>
                <ul className="list-unstyled">
                  <li>
                    <p>Address:</p>
                  </li>
                  <li>
                    <span>121 King Street Melbourne, 3000, Australia</span>
                  </li>
                  <li>
                    <p>Email:</p>
                  </li>
                  <li className="mail">
                    <a
                      href="mailto:Info@xtremefitness.com"
                      className="text-decoration-none"
                    >
                      Info@xtremefitness.com
                    </a>
                  </li>
                  <li>
                    <p>Phone:</p>
                  </li>
                  <li className="mb-0">
                    <a href="tel:+61383766284" className="text-decoration-none">
                      +61 3 8376 6284
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-portion">
        <div className="copyright col-xl-12">
          <p>Copyright 2022 xtremefitness.com All Rights Reserved.</p>
        </div>
      </div>
      <figure className="mb-0 footer_left_icon left_icon">
        {/* <img
          src="./assets/images/footer_left_icon.png"
          alt=""
          className="img-fluid"
        /> */}
      </figure>
      <figure className="mb-0 footer_right_icon right_icon">
        {/* <img
          src="./assets/images/footer_right_icon.png"
          alt=""
          className="img-fluid"
        /> */}
      </figure>
    </section>
  );
}
