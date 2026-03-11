import { Hero } from '@/components/hero/hero';
import { Invitation } from '@/components/invitation/invitation';
import { Location } from '@/components/location/location';
import { Schedule } from '@/components/schedule/schedule';
import { Dresscode } from '@/components/dresscode/dresscode';
import { Details } from '@/components/details/details';
import { RsvpForm } from '@/components/rsvp/rsvp-form';
import { Footer } from '@/components/footer/footer';

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
