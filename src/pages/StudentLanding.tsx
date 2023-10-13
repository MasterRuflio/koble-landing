import Footer from './Footer';
import Hero from './student/Hero';
import GetCandidatesIsEasy from './student/GetCandidatesIsEasy';
import WhyKhoble from './student/WhyKhoble';
import HowToStart from './student/HowToStart';
import Steps from './student/Steps';
import Team from './student/TeamStudent';
import CTASection from './student/CTASectionStudents';
import StartCareer from './student/StartCareer';

export default function StudentLanding() {
  return (
    <>
      <>
        <Hero />
        <StartCareer />
        {/* <WhyKhoble /> */}
        {/* <HowToStart /> */}
        {/* <Steps /> */}
        {/* <GetCandidatesIsEasy /> */}
        <Team />
        {/* <Banner /> */}
        <CTASection />
        <Footer />
      </>
    </>
  );
}
