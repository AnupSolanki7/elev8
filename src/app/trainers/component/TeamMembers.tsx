import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import Member1 from "../../../../public/images/team_member_1.png";
import Member2 from "../../../../public/images/team_member_2.png";
import Member3 from "../../../../public/images/team_member_3.png";
import Member4 from "../../../../public/images/team_member_4.png";
import Member5 from "../../../../public/images/team_member_5.png";
import Member6 from "../../../../public/images/team_member_6.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

interface TeamMember {
  name: string;
  role: string;
  image: StaticImageData;
}

const teamMembers: TeamMember[] = [
  {
    name: "MARVIN JOINER",
    role: "Crossfit Coach",
    image: Member1,
  },
  {
    name: "PATRICIA WOODRUM",
    role: "Cardio & Conditioning",
    image: Member2,
  },
  {
    name: "HANNAZ STONE",
    role: "Fitness Coach",
    image: Member3,
  },
  {
    name: "HAWARD SKINNER",
    role: "Dumbbell Trainer",
    image: Member4,
  },
  {
    name: "RAYMOND BROWN",
    role: "Boxing Trainer",
    image: Member5,
  },
  {
    name: "CHARLES MALLISTER",
    role: "Cardio Trainer",
    image: Member6,
  },
];

const TeamMemberCard: FC<TeamMember> = ({ name, role, image }) => (
  <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
    <div className="team_member_box_content">
      <div className="team_member_box_upper_portion">
        <figure className="mb-0">
          <Image
            src={image}
            alt={name}
            width={400}
            height={500}
            className="img-fluid"
          />
        </figure>
      </div>
      <div className="team_member_box_lower_portion">
        <h5>{name}</h5>
        <p>{role}</p>
        <div className="team_member_social_icons flex justify-center items-center">
          {[
            <FaFacebookF className="text-xl" />,
            <FaTwitter className="text-xl" />,
            <AiFillInstagram className="text-xl" />,
          ].map((social, index) => (
            <a key={index} href="#" className="text-decoration-none">
              <i
                className="flex justify-center items-center"
                aria-hidden="true"
              >
                {social}
              </i>
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const TeamMembers: FC = () => {
  return (
    <section className="team_member_section">
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
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
