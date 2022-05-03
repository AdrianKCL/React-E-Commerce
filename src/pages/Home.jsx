import React from "react";
import Discounted from "../components/Discounted";
import Explorer from "../components/Explorer";
import Featured from "../components/Featured";
import Highlights from "../components/Highlights";
import Landing from "../components/Landing";

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explorer />
    </>
  );
};

export default Home;
