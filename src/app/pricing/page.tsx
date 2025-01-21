import React from "react";
import PriceBanner from "./component/PriceBanner";
import PricingTables from "@/components/PricingTables";
import QuoteSection from "../trainers/component/QuoteSection";
import Testimonials from "@/components/Testimonials";

const page = () => {
  return (
    <>
      <PriceBanner />
      <PricingTables />
      <QuoteSection />
      <Testimonials />
    </>
  );
};

export default page;
