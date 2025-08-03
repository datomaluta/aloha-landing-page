import Statistics from "../components/home/Statistics";
import WhyChooseUs from "../components/home/WhyChooseUs";
import DefaultLayout from "../layout/DefaultLayout";

const About = () => {
  return (
    <DefaultLayout>
      <WhyChooseUs about />
      <Statistics />
      {/* <OurTeam /> */}
    </DefaultLayout>
  );
};

export default About;
