export const homeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1.5,
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

export const homeButtonVariants = {
  visible: {
    background: "transparent",
    transition: {
      delay: 2,
    },
  },
  hover: {
    scale: 1.1,
    opacity: 1,
    background: "#ff6e6c",
    border: "2px solid #ff6e6c",
    transition: {
      duration: 0.3,
    },
  },
};

export const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      delay: 0.5,
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

export const listItemVariants = {
  hidden: {
    color: "#fff",
  },
  selected: {
    color: "#fbdd74",
  },
  hover: {
    scale: 1.3,
    originX: 0,
    color: "#fbdd74",
  },
  transition: { type: "spring", stiffness: 300 },
};

export const buttonVariants = {
  hover: {
    scale: 1.1,
    opacity: 1,
    textShadow: "0px 0px 4px rgb(255,255,255)",
    boxShadow: "0px 0px 4px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

export const nextVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 60,
    },
  },
};
export const backVariants = {
  hover: {
    color: "#fbdd74",
  },
};

export const arrowVariants = {
  hover: {
    color: "#fbdd74",
    x: -4,
    origin: 0,
    scale: [1, 1.1, 1.3],
    opacity: [1, 0.5, 0],
    transition: {
      duration: 1,
      yoyo: Infinity,
    },
  },
};
