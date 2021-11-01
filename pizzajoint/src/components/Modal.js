import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const modal = {
  hidden: {
    y: "100vh",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.5,
    },
  },
};

const buttonBack = {
  hidden: {
    background: "#fff",
    color: "#67568c",
  },
  hover: {
    background: "#67568c",
    color: "#fff",
  },
};

const buttonClose = {
  hidden: {
    background: "#67568c",
    color: "#fff",
  },
  hover: {
    opacity: 0.5,
  },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modal}>
            <p>
              You are going to be directed to homepage by clicking the button
              below.
            </p>
            <p>
              *Notice: The displayed order information will not be shown again.
            </p>
            <Link to="/">
              <motion.button
                variants={buttonBack}
                initial="hidden"
                whileHover="hover"
              >
                Back to homepage
              </motion.button>
            </Link>
            <motion.button
              variants={buttonClose}
              whileHover="hover"
              onClick={() => setShowModal(false)}
            >
              Close this window
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
