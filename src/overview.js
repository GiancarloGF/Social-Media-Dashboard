import React from "react";
import CardSmall from "./card-smal";
import "./overview.css";

const cardSmallList = [
  {
    icon: "",
    pageviews: "87",
    growth: 3,
    key: 1
  },
  {
    icon: "",
    pageviews: "52",
    growth: 2257,
    key: 2
  },
  {
    icon: "",
    pageviews: "117",
    growth: 303,
    key: 3
  },
  {
    icon: "",
    pageviews: "5462",
    growth: 1375,
    key: 4
  }
];

function Overview() {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview-Today</h2>
        <div className="grid">
          {cardSmallList.map((item) => (
            <CardSmall
              key={item.key}
              pageviews={item.pageviews}
              growth={item.growth}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;
