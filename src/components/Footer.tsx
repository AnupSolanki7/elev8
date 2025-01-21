import Link from "next/link";
import Logo from "@/app/assets/images/Logo";

const Footer = () => {
  const quickLinks = [
    { href: "/about", text: "About" },
    { href: "/services", text: "Services" },
    { href: "/trainers", text: "Trainers" },
    { href: "/pricing", text: "Pricing" },
    { href: "/contact", text: "Contact" },
  ];

  const socialLinks = [
    { icon: "fa-brands fa-facebook-f", href: "#" },
    { icon: "fa-brands fa-twitter", href: "#" },
    { icon: "fa-brands fa-instagram mr-0", href: "#" },
  ];

  const openingHours = [
    { days: "Monday – Saturday", hours: "12.00 – 14.45" },
    { days: "Sunday – Thursday", hours: "17.30 – 00.00" },
    { days: "Friday – Saturday", hours: "17.30 – 00.00" },
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="middle-portion">
          <div className="row">
            {/* Logo and Social Links */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="about_col">
                <Link href="/">
                  <Logo />
                </Link>
                <h3 className="mt-4 md:!text-6xl font-extrabold text-white">
                  LEARN MORE
                </h3>
                <p className="!text-md ">
                  Not ready to book a trial or have additional questions? Submit
                  your information and someone from our team will reach out to
                  you shortly.
                </p>
                <Link className={"contact_btn px-8 py-2.5 no-underline"} href={"/contact"}>
                  Inquire
                </Link>
                <ul className="list-unstyled">
                  {socialLinks.map((social, index) => (
                    <li key={index} className="icons">
                      <Link href={social.href}>
                        <i className={social.icon} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 d-lg-block d-none">
              <div className="hours_col">
                <h6>OPENING HOURS</h6>
                <ul className="list-unstyled">
                  {openingHours.map((schedule, index) => (
                    <li key={index}>
                      <p>{schedule.days}</p>
                      <span>{schedule.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 d-md-block d-none">
              <div className="links_col">
                <h6>QUICK LINKS</h6>
                <ul className="list-unstyled">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <i className="fa-solid fa-caret-right" />
                      <Link href={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="contact_col">
                <h6>CONTACT US</h6>
                <ul className="list-unstyled">
                  <li>
                    <p>Address:</p>
                    <span>121 King Street Melbourne, 3000, Australia</span>
                  </li>
                  <li>
                    <p>Email:</p>
                    <Link
                      href="mailto:Info@xtremefitness.com"
                      className="text-decoration-none"
                    >
                      Info@xtremefitness.com
                    </Link>
                  </li>
                  <li>
                    <p>Phone:</p>
                    <Link
                      href="tel:+61383766284"
                      className="text-decoration-none"
                    >
                      +61 3 8376 6284
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bottom-portion">
        <div className="copyright col-xl-12">
          <p>
            Copyright {new Date().getFullYear()} Anup Solanki All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
