import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          icon: <FaCocktail />,
          title: "free cocktails",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
        },
        {
          icon: <FaHiking />,
          title: "free cocktails",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
        },
        {
          icon: <FaShuttleVan />,
          title: "free cocktails",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
        },
        {
          icon: <FaBeer />,
          title: "free cocktails",
          info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
        },
      ],
    };
  }

  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
