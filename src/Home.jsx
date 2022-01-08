import React from "react";
import Common from "./Common";
import web from "../src/images/launch-img.svg";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};
export default Home;
