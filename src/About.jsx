import React from "react";
import Common from "./Common";
import web from "../src/images/home-img.svg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page of"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};
export default About;
