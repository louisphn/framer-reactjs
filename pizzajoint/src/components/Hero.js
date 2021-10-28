import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { motion, useTransform } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { AiOutlineRight } from "react-icons/ai";

const image = {
  hidden: {
    x: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0,
    },
  },
  visible: {
    x: 80,
    opacity: 1,
    transition: {
      delay: 4,
      duration: 1,
    },
  },
};

const sentence = {
  hidden: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0,
    },
  },
  visible: {
    opacity: 1,
    y: -40,
    transition: {
      duration: 5,
      staggerChildren: 0.1,
      ease: "easeOut",
      y: {
        delay: 4,
      },
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const description = {
  hidden: {
    textAlign: "left",
    opacity: 0,
    y: 0,
  },
  visible: {
    textAlign: "left",
    opacity: 1,
    y: -40,
    transition: {
      delay: 4.2,
    },
  },
};

const learnMore = {
  hover: {
    x: 8,
  },
};

const arrow = {
  hover: {
    x: [0, 8],
    opacity: [1, 0.5],
    transition: {
      yoyo: 1,
    },
  },
};

const Hero = ({ currentY }) => {
  const history = useHistory();

  const [start, setStart] = useState(false);
  const [ref, inView, entry] = useInView();

  const rotate = useTransform(currentY, [0, -700], [0, 360]);

  const line1 = "It's not just";
  const line2 = "Food. It's an";
  const line3 = "Experience.";

  useEffect(() => {
    setTimeout(() => {
      setStart(true);
    }, 3000);
  }, []);

  return (
    <motion.div className="hero">
      <div className="content">
        <motion.h2
          variants={sentence}
          ref={ref}
          animate={inView ? "visible" : "hidden"}
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
          animate={inView ? "visible" : "hidden"}
        >
          Offer the best PIZZA in the world.
          <br />
          Get one for yourself now.
        </motion.p>
        <motion.div
          className="cta"
          variants={description}
          animate={inView ? "visible" : "hidden"}
        >
          {/* <button>Learn More</button> */}
          <button>Order now</button>
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
        animate={inView ? "visible" : "hidden"}
        src="pizza.svg"
        width="480"
        height="480"
        style={{ rotate }}
      />
    </motion.div>
  );
};

export default Hero;
