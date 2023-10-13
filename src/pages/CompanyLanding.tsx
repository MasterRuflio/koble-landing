import Footer from './Footer';
import Hero from './company/Hero';
import Benefits from './company/Benefits';
import CTASectionCompany from './company/ CTASectionCompany';
import GetCandidatesIsEasy from './company/GetCandidatesIsEasy';
import WhyKhoble from './company/WhyKhoble';
import Banner from './company/Banner';
import HowToStart from './company/HowToStart';
import Team from './company/TeamCompany';
import Pricing from './company/Pricing';

export default function CompanyLanding() {
  return (
    <>
      <>
        <Hero />
        {/* Add company logos section here */}
        <Benefits />
        <CTASectionCompany />
        {/* <WhyKhoble /> */}
        {/* <HowToStart /> */}
        {/* <GetCandidatesIsEasy /> */}
        {/* <Banner /> */}
        <Team />
        <Pricing />
        <Footer />
      </>
    </>
  );
}
