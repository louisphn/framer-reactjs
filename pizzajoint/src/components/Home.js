import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

import Loader from "./Loader";
import { homeButtonVariants, homeVariants } from "../variants/variants";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      history.push("/base");
      setLoading(false);
    }, 5000);
  };
  return (
    <motion.div
      className="home container"
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <motion.button
        onClick={handleClick}
        variants={homeButtonVariants}
        animate="visible"
        whileHover="hover"
      >
        Create Your Pizza
      </motion.button>
      {loading && <Loader />}
    </motion.div>
  );
};

export default Home;
