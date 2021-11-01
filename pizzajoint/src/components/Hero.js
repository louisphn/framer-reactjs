import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { motion, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AiOutlineRight } from "react-icons/ai";

import Loading from "./Loading";
import {
  image,
  sentence,
  letter,
  description,
  arrow,
  learnMore,
} from "../variants/heroVariants";

const Hero = ({ currentY }) => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [ref, inView, entry] = useInView();

  const rotate = useTransform(currentY, [0, -700], [0, 360]);

  const line1 = "It's not just";
  const line2 = "Food. It's an";
  const line3 = "Experience.";

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history.push("/base");
    }, 2000);
  };

  return (
    <div className="hero">
      <Loading isLoading={loading} />
      <div className="content">
        <motion.h2
          variants={sentence}
          ref={ref}
          initial="hidden"
          animate={inView && "visible"}
        >
          {line1.split("").map((char, index) => (
            <motion.span key={`${char}-${index}`} variants={letter}>
              {char}
            </motion.span>
          ))}
          <br />
          {line2.split("").map((char, index) => (
            <motion.span key={`${char}-${index}`} variants={letter}>
              {char}
            </motion.span>
          ))}
          <br />
          {line3.split("").map((char, index) => (
            <motion.span key={`${char}-${index}`} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h2>
        <motion.p
          variants={description}
          initial="hidden"
          animate={inView && "visible"}
        >
          Offer the best PIZZA in the world.
          <br />
          Get one for yourself now.
        </motion.p>
        <motion.div
          className="cta"
          variants={description}
          initial="hidden"
          animate={inView && "visible"}
        >
          {/* <button>Learn More</button> */}
          <button onClick={() => handleClick()}>Order now</button>
          <motion.div
            variants={learnMore}
            whileHover="hover"
            onClick={() => history.push("/")}
          >
            <p>Learn more</p>
            <motion.div variants={arrow}>
              <AiOutlineRight />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.img
        variants={image}
        ref={ref}
        initial="hidden"
        animate={inView && "visible"}
        src="pizza.svg"
        width="480"
        height="480"
        style={{ rotate }}
      />
    </div>
  );
};

export default Hero;
