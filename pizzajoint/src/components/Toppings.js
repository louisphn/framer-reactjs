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
  console.log(pizza.toppings);

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
      className="base"
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
      {pizza.toppings.length > 0 && (
        <motion.div
          className="next"
          variants={nextVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <Link to="/order">
            <motion.span variants={nextColor}></motion.span>
            <motion.span variants={nextButton}>&#8594;</motion.span>
            <motion.button variants={buttonVariants}>Next</motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Toppings;
