import React, { useState, useEffect } from "react";
import axios from "axios";
import Ratings from "./Ratings";
import "./Card.css";

function Card() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    axios
      .get("https://asm-dev-api.herokuapp.com/api/v1/food")
      .then((res) => {
        setFood(res.data.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [food]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      <div className="card__body">
        {food.map((el) => {
          return (
            <div className="card__container" key={el.id}>
              <div className="card__img">
                <img src={el.strMealThumb} alt="food cover" />
              </div>
              <div className="card__title">
                <h3>{el.title}</h3>
                <h3>{el.price}</h3>
              </div>
              <div className="card__meal">
                <p>{el.strMeal}</p>
              </div>
              <div className="card__desc">
                <p>{truncate(el.description, 100)}</p>
              </div>
              <div className="card__rating">
                {/* <div className="ratings">{`${el.ratings} stars`}</div> */}
                <div className="ratings">
                  <Ratings value={el.ratings}/>
                </div>
                <div className="btn">
                  <button className="plus">+</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="card__btn">
        <button>Learn More</button>
      </div>
    </>
  );
}

export default Card;
