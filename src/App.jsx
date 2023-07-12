import Header from "./components/Header";
import IntoductionSection from "./sections/Introduction";
import ServiceSection from "./sections/Service";
import AboutSection from './sections/About'
import TeamSection from "./sections/Team";
import ChooseUs from "./sections/ChooseUs";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <>
      <Header />
      <IntoductionSection />
      <ServiceSection />
      <AboutSection />
      <TeamSection />
      <ChooseUs>
        <Testimonials />
      </ChooseUs>
    </>
  );
}

export default App;
