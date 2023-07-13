import Header from "./components/Header";
import IntoductionSection from "./sections/Introduction";
import ServiceSection from "./sections/Service";
import AboutSection from './sections/About'
import TeamSection from "./sections/Team";
import ChooseUsSection from "./sections/ChooseUs";
import TestimonialsSection from "./sections/Testimonials";
import ContactUsSection from "./sections/ContactUs";
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <IntoductionSection />
      <ServiceSection />
      <AboutSection />
      <TeamSection />
      <ChooseUsSection>
        <TestimonialsSection />
      </ChooseUsSection>
      <ContactUsSection />
      <Footer />
    </>
  );
}

export default App;
