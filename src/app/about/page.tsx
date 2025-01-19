import SubBanner from "./component/SubBanner";
import AboutUsSection from "./component/AboutUsSection";
import StatisticSection from "./component/StatisticSection";
import ChooseUs from "@/components/ChooseUs";
import ContactUs from "@/components/ContactUs";

export default function About() {
  return (
    <main>
      <SubBanner />
      <AboutUsSection />
      <StatisticSection />
      <ChooseUs />
      <ContactUs />
    </main>
  );
}
