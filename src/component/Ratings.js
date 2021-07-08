import React from "react";
import BeautyStars from "beauty-stars";

function Ratings({ value }) {
  return (
    <BeautyStars value={value} size="16px" inactiveColor="grey" padding="0px" />
  );
}

export default Ratings;
