import Image from "next/image";
import teamMember1 from "../../public/images/team_member_1.png";
import teamMember2 from "../../public/images/team_member_2.png";
import teamMember3 from "../../public/images/team_member_3.png";
import teamMemberLeftIcon from "../../public/images/team_member_left_icon.png";
import teamMemberRightIcon from "../../public/images/team_member_right_icon.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const teamMembers = [
  {
    name: "MARVIN JOINER",
    role: "Crossfit Coach",
    image: teamMember1,
    social: [
      { platform: <FaFacebookF className="text-xl" />, link: "#" },
      { platform: <FaTwitter className="text-xl" />, link: "#" },
      { platform: <AiFillInstagram className="text-xl" />, link: "#" },
    ],
  },
  {
    name: "PATRICIA WOODRUM",
    role: "Cardio & Conditioning",
    image: teamMember2,
    social: [
      { platform: <FaFacebookF className="text-xl" />, link: "#" },
      { platform: <FaTwitter className="text-xl" />, link: "#" },
      { platform: <AiFillInstagram className="text-xl" />, link: "#" },
    ],
  },
  {
    name: "HANNAZ STONE",
    role: "Fitness Coach",
    image: teamMember3,
    social: [
      { platform: <FaFacebookF className="text-xl" />, link: "#" },
      { platform: <FaTwitter className="text-xl" />, link: "#" },
      { platform: <AiFillInstagram className="text-xl" />, link: "#" },
    ],
  },
];

export default function TeamMembers() {
  return (
    <section className="team_member_section team_member_background_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="team_member_content">
              <h5>TEAM MEMBERS</h5>
              <h2>TEAM OF EXPERT COACHES</h2>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="team_member_box_content2">
                <div className="team_member_box_upper_portion">
                  <figure className="mb-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="team_member_box_lower_portion">
                  <h5>{member.name}</h5>
                  <p>{member.role}</p>
                  <div className="team_member_social_icons flex justify-center items-center">
                    {member.social.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.link}
                        className="text-decoration-none w-max !block hover:text-blue-500 transition-colors duration-300"
                      >
                        <i className="flex justify-center items-center">
                          {social.platform}
                        </i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <figure className="team_member_left_icon left_icon mb-0">
          <Image
            src={teamMemberLeftIcon}
            alt="Left Icon"
            className="img-fluid"
          />
        </figure>
        <figure className="team_member_right_icon right_icon mb-0">
          <Image
            src={teamMemberRightIcon}
            alt="Right Icon"
            className="img-fluid"
          />
        </figure>
      </div>
    </section>
  );
}
