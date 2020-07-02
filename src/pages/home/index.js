import React from "react";
import Image from "./../../images/image.png";
import "./styles.css";
import { Link } from "react-router-dom";
import ThumbMain from "../../components/thumbMain";
import Titles from "../../components/titles";
import Profile from "./profile";
import Detail from "./detail";

let lista = require("../../assets/info.json");

const length = lista.length - 3; // pegar o tamanho da lista menos os 3 últimos itens

lista = lista.filter((item, index) => index >= length); // filtrando os 3 ultimos itens da lista do portfolio

function Home() {
  return (
    <div className="Container">
      <div>
        <img src={Image} className="Image-main" alt="MainImage"></img>
      </div>
      <div className="Body-index">
        <div className="Last-projects">
          <Titles titulo="Latest Works" />
          <div className="Projects">
            {lista.map((item) => (
              <ThumbMain item={item} key={item.id} />
            ))}
          </div>
          <div className="Link-port">
            <Link className="btn effect01" to="/portfolio">
              <span>&lt;ACESS&nbsp;PORTFOLIO&gt;</span>
            </Link>
          </div>
        </div>
        <div>
          <Profile></Profile>
          <Detail></Detail>
        </div>
      </div>
    </div>
  );
}

export default Home;