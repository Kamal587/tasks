import { useState } from "react";
import Card from "./Card";

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

export const Block3 = ({ mouseEnterCallbak, userData }) => {
  return (
    <Card mouseEnterCallbak={mouseEnterCallbak}>
      <address>
        country: {userData.country}, street: {userData.street}
      </address>
    </Card>
  );
};
