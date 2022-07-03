import React from "react";
import Layout from "./Layout";
import IntroSection from "../components/IntroSection";
import OpeningHours from "../components/OpeningHours";
import Services from "../pages/Services";

const Home = () => {
  return (
    <>
      <Layout />
      <IntroSection />
      <OpeningHours />
      <Services />
    </>
  );
};

export default Home;
