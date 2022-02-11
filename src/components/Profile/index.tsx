import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";

import "./styles.scss";

interface HeaderProps {
  img: string;
  name: string;
  followers: number;
  following: number;
  public_repos: number;
}

export function Profile({
  followers,
  following,
  img,
  name,
}: Partial<HeaderProps>) {
  return (
    <div className="container">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="containerProfile">
        <h2>{name}</h2>
        <div>
          <span>
            <AiFillStar />
            {followers}
          </span>
          <span>
            <FaStarHalfAlt />
            {following}
          </span>
        </div>
      </div>
    </div>
  );
}
