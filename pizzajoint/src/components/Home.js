import React from "react";
import { motion } from "framer-motion";

import LandingConclusion from "./LandingConclusion";
import Hero from "./Hero";
import TextContent from "./TextContent";
import { homeVariants } from "../variants/variants";

const Home = ({ currentY }) => {
  return (
    <motion.div
      className="home container"
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Hero {...{ currentY }} />
      <div className="about">
        <TextContent />
      </div>
      <LandingConclusion {...{ currentY }} />
    </motion.div>
  );
};

export default Home;
