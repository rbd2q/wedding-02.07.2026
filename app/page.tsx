import { Hero } from '@/components/hero/Hero';
import { Invitation } from '@/components/invitation/Invitation';
import { Location } from '@/components/location/Location';
import { Schedule } from '@/components/schedule/Schedule';
import { Dresscode } from '@/components/dresscode/Dresscode';
import { Details } from '@/components/details/Details';
import { RsvpForm } from '@/components/rsvp/RsvpForm';
import { Footer } from '@/components/footer/Footer';

export default function Home() {
  return (
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
}
