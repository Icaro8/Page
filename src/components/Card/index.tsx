import React, { memo, useState } from "react";
import { MdFolder } from "react-icons/md";
import { SiTypescript, SiJavascript, SiCss3 } from "react-icons/si";
import { IoLogoSass } from "react-icons/io";
import { RiHtml5Fill } from "react-icons/ri";
import "./styles.scss";
import { formatDate } from "../../util/formatDate";
interface CardRepositoryProps {
  id: number;
  name: string;
  full_name: string;
  private_: boolean;
  description: string;
  language: string;
  html_url: string;
  updated_at: string;
}

function CarRepository({
  description,
  updated_at,
  html_url,
  language,
  name,
  private_,
}: Partial<CardRepositoryProps>) {
  function handleIcon() {
    switch (language) {
      case "TypeScript":
        return <SiTypescript className="ts" />;
      case "JavaScript":
        return <SiJavascript className="js" />;
      case "SCSS":
        return <IoLogoSass className="scss" />;
      case "CSS":
        return <SiCss3 className="css" />;
      case "HTML":
        return <RiHtml5Fill className="html" />;
      default:
        return "";
    }
  }
  //SiJavascript
  return (
    <div className="container_content">
      <div className="title">
        <h3>{name}</h3>
        <MdFolder />
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="infos">
        <div className="subdescription">
          <span>{language}</span>
          <span className="language">{handleIcon()}</span>
          <span>{formatDate(updated_at!)}</span>
          <span>{private_}</span>
        </div>
        <div className="ancor">
          <a href={html_url} target="_blank" rel="noreferrer">
            Link do repositório no github
          </a>
        </div>
      </div>
    </div>
  );
}

export const CardRepo = memo(CarRepository);

/*
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiSass
  RiHtml5Fill
*/
