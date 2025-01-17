import Image from "next/image";
import Service1 from "../../public/images/our_services_left_icon.png";
import Service2 from "../../public/images/our_services_right_icon.png";

export default function OurServices() {
  return (
    <section className="our_services_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="our_services_content">
              <h5>OUR SERVICES</h5>
              <h2>SOLUTIONS FOR MOVING BETTER & FEELING A HEALTHIER</h2>
            </div>
          </div>
        </div>
        <figure className="our_services_left_icon left_icon mb-0">
          <Image src={Service1} alt="" className="img-fluid" />
        </figure>
        <figure className="our_services_right_icon right_icon mb-0">
          <Image src={Service2} alt="" className="img-fluid" />
        </figure>
      </div>
    </section>
  );
}
