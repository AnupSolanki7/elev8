import React from "react";
import ContactBanner from "./component/ContactBanner";
import FindUsSection from "../pricing/component/FindUsSection";
import ContactUs from "@/components/ContactUs";
import ContactMap from "./component/ContactMap";

const page = () => {
  return (
    <>
      <ContactBanner />
      <FindUsSection/>
      <ContactUs/>
      <ContactMap/>
    </>
  );
};

export default page;
