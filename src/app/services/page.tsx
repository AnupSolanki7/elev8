import React from "react";
import ServiceBanner from "./component/ServiceBanner";
import ServicesProvide from "./component/ServicesProvide";
import Facilities from "@/components/Facilities";
import Testimonials from "@/components/Testimonials";
import OurServices from "@/components/OurServices";
import ServicesSchedule from "./component/ServicesSchedule";

const page = () => {
  return (
    <>
      <ServiceBanner />
      <ServicesProvide />
      <OurServices />
      <Facilities />
      <ServicesSchedule/>
      <Testimonials />
    </>
  );
};

export default page;
