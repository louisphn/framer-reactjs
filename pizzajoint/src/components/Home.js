import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { motion, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Loader from "./Loader";
import Hero from "./Hero";
import { homeButtonVariants, homeVariants } from "../variants/variants";

const Home = ({ currentY }) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const scale = useTransform(currentY, [0, -800], [1, 2]);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

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
      <Hero {...{ currentY }} />
      <motion.div className="about">
        <motion.h2 ref={ref} style={{ scale }}>
          About us
        </motion.h2>
      </motion.div>
      <motion.div>
        <h2>Customize yours</h2>
        <motion.button
          onClick={handleClick}
          variants={homeButtonVariants}
          animate="visible"
          whileHover="hover"
        >
          Order now
        </motion.button>
        {loading && <Loader />}
      </motion.div>
    </motion.div>
  );
};

export default Home;
