import { Fragment, useState } from "react";

import React from "react";
import PropTypes from "prop-types";

export default function MainComponent5() {
  return (
    <Fragment>
      <Block1
        mouseEnterCallbak={() => console.log("hi from Block1")}
        imgSrc="https://ohmylook.ua/files/products/42504.290x484.JPG?ce7d3c50d2e66b146f8711dd9eb7af35"
        imgAlt="my picture"
      />
      <Block2
        mouseEnterCallbak={() => console.log("hi from Block 2")}
        content="Magdalena"
      />
      <Block3
        mouseEnterCallbak={() => console.log("hi from Block 3")}
        userData={{ country: "USA", street: "Maskavas" }}
      />
    </Fragment>
  );
}

export function Card({ children, mouseEnterCallbak }) {
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

export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => {
  return (
    <Card mouseEnterCallbak={mouseEnterCallbak}>
      <img src={imgSrc} alt={imgAlt} />
    </Card>
  );
};

export const Block2 = ({ mouseEnterCallbak, content }) => {
  return (
    <Card mouseEnterCallbak={mouseEnterCallbak}>
      <p>{content}</p>
    </Card>
  );
};

export const Block3 = ({ mouseEnterCallbak, address, userData, children }) => {
  console.log(children);
  return (
    <address>
      country: {userData.country}, street: {userData.street}
    </address>
  );
};

Block3.propTypes = {
  address: PropTypes.arrayOf(PropTypes.string).isRequired,
  scientificName: PropTypes.string.isRequired,
};
