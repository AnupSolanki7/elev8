import React from "react";
import TrainerBanner from "./component/TrainerBanner";
import TeamMembers from "./component/TeamMembers";
import QuoteSection from "./component/QuoteSection";
import ContactUs from "@/components/ContactUs";

const page = () => {
  return (
    <>
      <TrainerBanner />
      <TeamMembers/>
      <QuoteSection/>
      <ContactUs/>
    </>
  );
};

export default page;
