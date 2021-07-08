import React, { useState } from "react";
import BeautyStars from "beauty-stars";

function Ratings() {
  const [star, setStar] = useState(3);

  return (
    <BeautyStars value={star} size="16px" inactiveColor="grey" padding="0px" />
  );
}

export default Ratings;
