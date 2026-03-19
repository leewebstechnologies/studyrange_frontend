import Hero from "./components/hero/Hero";
import Match from "./components/match/Match";
import Services from "./components/services/Services";
import Choose from "./components/choose/Choose";
import Success from "./components/success/Success";
import Partners from "./components/partners/Partners";
import Acceptance from "./components/acceptance/Acceptance";
import Consultation from "./components/consultation/Consultation";


export default function Home() {
  return (
    <>
    <Hero />
    <Match />
    <Services />
    <Choose />
    <Success />
    <Partners />
    <Acceptance />
    <Consultation />
    </>
  );
}
