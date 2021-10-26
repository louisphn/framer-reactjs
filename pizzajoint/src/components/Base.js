import React from "react";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

import {
  containerVariants,
  backVariants,
  arrowVariants,
  nextVariants,
  buttonVariants,
  nextButton,
  nextColor,
  listItemVariants,
} from "../variants/variants";

const Base = ({ addBase, pizza }) => {
  const history = useHistory();

  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        onClick={() => history.push("/")}
        variants={backVariants}
        whileHover="hover"
        className="back"
      >
        <motion.div variants={arrowVariants}>
          <FaArrowLeft />
        </motion.div>
        <motion.p variants={backVariants}>Back to top</motion.p>
      </motion.div>
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              variants={listItemVariants}
              whileHover="hover"
            >
              <motion.span
                className={spanClass}
                variants={listItemVariants}
                whileHover="hover"
                animate={pizza.base === base ? "selected" : "hidden"}
                transition={{ duration: 0.6 }}
              >
                {base}
              </motion.span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={nextVariants}
          initial="hidden"
          whileHover="hover"
        >
          <Link to="/toppings">
            <motion.span variants={nextColor}></motion.span>
            <motion.span variants={nextButton}>&#8594;</motion.span>
            <motion.button variants={buttonVariants}>Next</motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
