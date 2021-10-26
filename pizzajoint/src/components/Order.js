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

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "#fff",
    stroke: "#fff",
    strokeWidth: 1,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "#2cb67d",
    stroke: "#2cb67d",
    transition: {
      default: { duration: 3, delay: 1.5, ease: "easeInOut" },
    },
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
      {/* <svg
        className="success-svg"
        xmlns="http://www.w3.org/2000/svg"
        height="36px"
        viewBox="0 0 24 24"
        width="36px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" stroke="none" />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          d="M19.77 4.93l1.4 1.4L8.43 19.07l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 4.93m0-2.83L8.43 13.44l-4.2-4.2L0 13.47l8.43 8.43L24 6.33 19.77 2.1z"
        />
      </svg> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="56px"
        viewBox="0 0 24 24"
        width="56px"
        fill="#000000"
        className="success-svg"
      >
        <path d="M0 0h24v24H0V0z" fill="none" stroke="none" />
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"
        />
      </svg>
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
