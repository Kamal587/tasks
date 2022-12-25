import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";

export default function Card({ children, mouseEnterCallbak }) {
  const [isActive, setActive] = useState(false);
  console.log(children);
  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
};
