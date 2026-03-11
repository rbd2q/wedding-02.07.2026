import { Hero } from "@/components/hero";
import { Invitation } from "@/components/invitation";
import { Location } from "@/components/location";
import { Schedule } from "@/components/schedule";
import { Dresscode } from "@/components/dresscode";
import { Details } from "@/components/details";
import { RsvpForm } from "@/components/rsvp";
import { Footer } from "@/components/footer";

const Home = () => (
  <main>
      <Hero />
      <Invitation />
      <Location />
      <Schedule />
      <Dresscode />
      <Details />
      <RsvpForm />
      <Footer />
    </main>
);

export default Home;
