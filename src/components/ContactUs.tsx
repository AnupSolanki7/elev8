import Image from "next/image";
import ContactImage from "../../public/images/contact_us_image.png";
import { FaPlay } from "react-icons/fa6";

export default function ContactUs() {
  return (
    <section className="contact_us_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-lg-block d-md-flex align-items-center">
            <div className="contact_us_image">
              <figure className="mb-0">
                <Image src={ContactImage} className="max-w-max" alt="Contact Us" />
              </figure>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="contact_us_form_content" data-aos="fade-right">
              <h5>CONTACT US</h5>
              <h2>SEND US A MESSAGE & JOIN OUR TEAM</h2>
              <form>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group mb-0">
                      <input
                        type="text"
                        name="name"
                        id="fullname"
                        className="form-placeholder-color"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group mb-0">
                      <input
                        type="tel"
                        name="phone"
                        id="phonenum"
                        className="form-placeholder-color form_style"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group mb-0">
                      <input
                        type="email"
                        name="email"
                        id="emailaddrs"
                        className="form-placeholder-color"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group mb-0">
                      <input
                        type="text"
                        name="sub"
                        id="title"
                        className="form-placeholder-color form_style"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className=" form-group mb-0">
                      <textarea
                        name="msg"
                        id="comment"
                        className="form-placeholder-color"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="btn_wrapper">
                  <button type="submit" name="btnsubmit" id="submitbutton">
                    Send now <i className="flex justify-center items-center" ><FaPlay className="text-xl" /></i> 
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
