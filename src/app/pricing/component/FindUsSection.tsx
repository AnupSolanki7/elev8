import Image from "next/image";
import Link from "next/link";
import FindUs1 from "../../../../public/images/contacts_find_us_1.png";
import FindUs2 from "../../../../public/images/contacts_find_us_2.png";
import FindUs3 from "../../../../public/images/contacts_find_us_3.png";
import FindUsIcon1 from "../../../../public/images/contacts_find_us_location.png";
import FindUsIcon2 from "../../../../public/images/contacts_find_us_phone.png";
import FindUsIcon3 from "../../../../public/images/contacts_find_us_email.png";

const FindUsSection = () => {
  const contactInfo = [
    {
      id: 1,
      title: "LOCATION",
      mainImage: FindUs1,
      icon: FindUsIcon1,
      content: "121 King Street, Melbourne Victoria 3000 Australia",
    },
    {
      id: 2,
      title: "PHONE",
      mainImage: FindUs2,
      icon: FindUsIcon2,
      phones: [
        { number: "(+61 3 8376 6284)", href: "tel:(+61383766284)" },
        { number: "(+800 2345 6789)", href: "tel:(+80023456789)" },
      ],
    },
    {
      id: 3,
      title: "EMAIL",
      mainImage: FindUs3,
      icon: FindUsIcon3,
      emails: [
        {
          email: "info@xtremefitness.com",
          href: "mailto:info@xtremefitness.com",
        },
        {
          email: "xtremefitness@gmail.com",
          href: "mailto:xtremefitness@gmail.com",
        },
      ],
    },
  ];

  return (
    <section className="find_us_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="find_us_content">
              <h5>FIND US NOW</h5>
              <h2>READY FOR WORKOUT</h2>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          {contactInfo.map((info) => (
            <div key={info.id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="find_us_box_content">
                <div className="find_us_box_upper_portion">
                  <figure className="mb-0 relative w-full h-[200px]">
                    <Image
                      src={info.mainImage}
                      alt={info.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </figure>
                  <div className="find_us_box_image_content flex justify-center items-center h-[50px]">
                    <figure className="mb-0 relative w-[50px] h-[50px] ">
                      <Image
                        src={info.icon}
                        alt={`${info.title} icon`}
                        fill
                        sizes="50px"
                        className="object-contain"
                      />
                    </figure>
                  </div>
                </div>
                <div className="find_us_box_lower_portion">
                  <h5>{info.title}</h5>
                  {info.content && <p>{info.content}</p>}
                  {info.phones?.map((phone, index) => (
                    <p key={index}>
                      <Link href={phone.href} className="text-decoration-none">
                        {phone.number}
                      </Link>
                    </p>
                  ))}
                  {info.emails?.map((email, index) => (
                    <p key={index}>
                      <Link href={email.href} className="text-decoration-none">
                        {email.email}
                      </Link>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;
