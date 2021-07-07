import React, { useState, useEffect } from "react";
import Cover from "./cover.png";
import axios from "axios";
import "./Card.css";

function Card() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    axios
      .get("https://asm-dev-api.herokuapp.com/api/v1/food")
      .then((res) => {
        setFood(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(food);
  return (
    <div className="card__container">
      <div className="card__img">
        <img src={Cover} alt="food cover" />
      </div>
      <div className="card__title">
        <h3>Rose Muffen</h3>
        <h3>12$</h3>
      </div>
      <div className="card__desc">
        <p>
          Choic of coke, fanta, sprite. Upgrade to large fries, and whopper
          patty, add tender crisp patty and more...
        </p>
      </div>
      <div className="card__rating">
        <div className="ratings">5 stars</div>
        <div className="btn">
          <button className="plus">+</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
