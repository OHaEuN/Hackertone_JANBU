import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

function Home() {
    return (
    <div id="bodyWrap">
        <div id="container">
            <div id="selectWrap">
                <h2>당신을 위한 잔반처리 솔루션 ,</h2>
                <h1>JANBU - 잔반을 부탁해 !</h1>
                <div className="arrow"></div>
                <Link className="btn btn-default selectBtn" to="/search"><p>🔍</p>레시피 검색</Link>
                <Link className="btn btn-default selectBtn" to="/community"><p>🙋🏻</p>교환/나눔</Link>
            </div>
        </div>
    </div>
    );
  }

export default Home;