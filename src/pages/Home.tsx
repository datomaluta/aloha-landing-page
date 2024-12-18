import Faqs from "../components/home/Faqs";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import ScanQrCode from "../components/home/ScanQrCode";
import Statistics from "../components/home/Statistics";
import WhyChooseUs from "../components/home/WhyChooseUs";
import DefaultLayout from "../layout/DefaultLayout";

const Home = () => {
  return (
    <DefaultLayout>
      <Hero />
      <WhyChooseUs carousel />
      <HowItWorks />
      <ScanQrCode />
      <Statistics />
      <Faqs />
      {/* <WhatAreYouWaiting /> */}
    </DefaultLayout>
  );
};

export default Home;
