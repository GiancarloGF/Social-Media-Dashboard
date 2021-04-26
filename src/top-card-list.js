import React from "react";
import Card from "./card";
import "./top-card-list.css";

const cardListData = [
  {
    username: "@Santi",
    id: 1,
    followers: "1483",
    todayFollower: 20,
    name: "facebook"
  },
  {
    username: "@Juancito",
    id: 2,
    followers: "28k",
    todayFollower: 20,
    name: "twitter"
  },
  {
    username: "@Esperancito",
    id: 3,
    followers: "6k",
    todayFollower: 20,
    name: "instagram"
  },
  {
    username: "@Azaelito",
    id: 4,
    followers: "24k",
    todayFollower: 20,
    name: "youtube"
  }
];

function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map((cardData) => (
            <Card key={cardData.id} {...cardData} />
          ))}

          {/* <article className="card instagram">
          <p className="card-title">
            <img src="images/icon-instagram.svg" alt="" />
                  @LeonidasEsteban
         </p>
          <p className="card-followers">
            <span className="card-followers-number">6k</span>
            <span className="card-followers-title">Followers</span>
          </p>
          <p className="card-today">
            <img src="images/icon-up.svg" alt="" />
                        12 Today
        </p>
        </article>
        <article className="card youtube">
          <p className="card-title">
            <img src="images/icon-youtube.svg" alt="" />
                          @LeonidasEsteban
        </p>
          <p className="card-followers">
            <span className="card-followers-number">12k</span>
            <span className="card-followers-title">Followers</span>
          </p>
          <p className="card-today">
            <img src="images/icon-up.svg" alt="" />
                            12 Today
        </p>
        </article>  */}
        </div>
      </div>
    </section>
  );
}

export default TopCardList;
