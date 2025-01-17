import Image, { StaticImageData } from "next/image";
import Price1 from "../../public/images/pricing_tables_1.png";
import Price2 from "../../public/images/pricing_tables_2.png";
import Price3 from "../../public/images/pricing_tables_3.png";
import { BiCheck } from "react-icons/bi";

interface PricingPlan {
  id: number;
  image: StaticImageData;
  price: string;
  plan: string;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    image: Price1,
    price: "$45",
    plan: "BASIC GYM",
    features: [
      "Unlimited club access",
      "Group attendance",
      "Gym visits",
      "Visits to the bath complex",
      "Gym, fight club",
    ],
  },
  {
    id: 2,
    image: Price2,
    price: "$50",
    plan: "STANDARD GYM",
    features: [
      "Unlimited club access",
      "Group attendance",
      "Gym visits",
      "Visits to the bath complex",
      "Gym, fight club",
    ],
  },
  {
    id: 3,
    image: Price3,
    price: "$60",
    plan: "PREMIUM GYM",
    features: [
      "Unlimited club access",
      "Group attendance",
      "Gym visits",
      "Visits to the bath complex",
      "Gym, fight club",
    ],
  },
];

interface PricingTableBoxProps {
  image: StaticImageData;
  price: string;
  plan: string;
  features: string[];
}

const PricingTableBox = ({ image, price, plan, features }: PricingTableBoxProps) => (
  <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
    <div className="pricing_tables_box_content">
      <div className="pricing_tables_box_upper_portion">
        <figure className="mb-0">
          <Image src={image} alt="" className="img-fluid" />
        </figure>
        <div className="pricing_tables_box_image_content flex flex-col items-center">
          <span className="price">{price}</span>
          <span className="month">Monthly</span>
        </div>
      </div>
      <div className="pricing_tables_box_lower_portion">
        <h5>{plan}</h5>
        <ul className="list-unstyled">
          {features.map((feature, index) => (
            <li key={index} className="flex justify-start items-center gap-2">
              <BiCheck className="text-orange-600 text-xl" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="btn_wrapper">
          <a
            className="join_now_btn text-decoration-none"
            href="./pricing.html"
          >
            Join now
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default function PricingTables() {
  return (
    <section className="pricing_tables_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="pricing_tables_content">
              <h5>PRICING TABLES</h5>
              <h2>CHOOSE YOUR PRICING PLAN</h2>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          {pricingPlans.map((plan) => (
            <PricingTableBox key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
