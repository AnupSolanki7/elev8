import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import ChooseUs from "@/components/ChooseUs";
import ContactUs from "@/components/ContactUs";
import Facilities from "@/components/Facilities";
import OurServices from "@/components/OurServices";
import PricingTables from "@/components/PricingTables";
import TeamMembers from "@/components/TeamMembers";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main>
      <Banner />
      <ChooseUs />
      <AboutUs />
      <OurServices />
      <Facilities />
      <Testimonials />
      <PricingTables />
      <TeamMembers />
      <ContactUs />
    </main>
  )
}

