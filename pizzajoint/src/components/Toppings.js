import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

import {
  containerVariants,
  backVariants,
  arrowVariants,
  nextVariants,
  nextColor,
  nextButton,
  buttonVariants,
  listItemVariants,
} from "../variants/variants";

const Toppings = ({ addTopping, pizza }) => {
  const history = useHistory();

  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        onClick={() => history.push("/base")}
        variants={backVariants}
        whileHover="hover"
        className="back"
      >
        <motion.div variants={arrowVariants}>
          <FaArrowLeft />
        </motion.div>
        <motion.p variants={backVariants}>
          Back to selecting pizza base
        </motion.p>
      </motion.div>
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              variants={listItemVariants}
              whileHover="hover"
            >
              <motion.span
                className={spanClass}
                variants={listItemVariants}
                whileHover="hover"
                animate={
                  pizza.toppings.includes(topping) ? "selected" : "hidden"
                }
              >
                {topping}
              </motion.span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.div
          className="next"
          variants={nextVariants}
          initial="hidden"
          whileHover="hover"
        >
          <motion.span variants={nextColor}></motion.span>
          <motion.span variants={nextButton}>&#8594;</motion.span>
          <motion.button variants={buttonVariants}>Next</motion.button>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Toppings;
