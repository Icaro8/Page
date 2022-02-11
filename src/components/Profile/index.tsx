import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
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
      <div className="subcontainer">
        <div>
          <img src={img} alt={name} />
        </div>
        <div className="containerProfile">
          <h2>{name}</h2>
          <div className="followers">
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
      <nav className="navigation">
        <Link to="/">HOME</Link>
        <Link to="/">REPOSITÓRIOS</Link>
      </nav>
    </div>
  );
}
