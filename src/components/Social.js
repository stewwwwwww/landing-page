import React from "react";
import "../styles/Social.css";
import {socialData} from "../data/data.js"
function Social() {
  return (
    <div className="socialContainer">
      <div className="socialContent">
        <h5 className="xTittle">Articles</h5>
        <p className="xPara">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <div className="linear8"></div>
        <h2 className="x1">Recent Articles</h2>
        <div className="socialarticle">
          {socialData.splice(0, 3).map((data, index) => (
            <div className="article">
              <img src={data.img} alt="socialImg" />
              <p className="articleDate">{data.date}</p>
              <p className="articleAuthor">{data.author}</p>
              <h4>{data.title}</h4>
              <p className="articleContent">{data.description}</p>
              <p className="articleButton">Read More</p>
            </div>
          ))}
        </div>
        <button>View More</button>
      </div>
    </div>
  );
}

export default Social;
