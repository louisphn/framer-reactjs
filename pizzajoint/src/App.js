import React, { useState, useRef, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence, useMotionValue } from "framer-motion";
import Scrollbar from "react-smooth-scrollbar";

import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import Modal from "./components/Modal";
import { getTranslateValues } from "./lib/matrix";

function App() {
  const location = useLocation(); // current Route location
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);
  const [currentScroll, setCurrentScroll] = useState();
  const currentY = useMotionValue(0);

  const elementRef = useRef();

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  useEffect(() => {
    window.addEventListener("wheel", () => {
      const styles = getComputedStyle(
        elementRef.current["$container"].querySelector(".scroll-content")
      );
      setCurrentScroll(styles);
    });
  }, []);

  useEffect(() => {
    if (currentScroll !== undefined) {
      const matrix = currentScroll.transform;
      const currentStyle = getTranslateValues(matrix);
      currentY.set(currentStyle["y"]);
    }
  }, [currentScroll, currentY]);

  return (
    <>
      <Header />
      <Scrollbar ref={elementRef} id="scrollBar" damping={0.03}>
        <Modal {...{ showModal, setShowModal }} />
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => setShowModal(false)}
        >
          <Switch location={location} key={location.key}>
            <Route path="/base">
              <Base addBase={addBase} pizza={pizza} />
            </Route>
            <Route path="/toppings">
              <Toppings addTopping={addTopping} pizza={pizza} />
            </Route>
            <Route path="/order">
              <Order pizza={pizza} {...{ setShowModal }} />
            </Route>
            <Route path="/">
              <Home {...{ currentY }} />
            </Route>
          </Switch>
        </AnimatePresence>
      </Scrollbar>
    </>
  );
}

export default App;
