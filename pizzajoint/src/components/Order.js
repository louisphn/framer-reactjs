import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    y: -16,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModal }) => {
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        <>
          {pizza.toppings.map((topping) => (
            <div key={topping}>{topping}</div>
          ))}
          <button onClick={() => setShowModal(true)}>
            Order one more pizza?
          </button>
        </>
      </motion.div>
    </motion.div>
  );
};

export default Order;
