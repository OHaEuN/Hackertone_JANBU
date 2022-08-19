import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
// import { BiSearchAlt } from 'react-icons/bi';
// import { FaExchangeAlt } from 'react-icons/fa';

function Home() {

	return (
		<div id="bodyWrap">
			<div id="container">
				<div id="selectWrap">
					<h2>당신을 위한 잔반처리 솔루션 ,</h2>
					<h1>JANBU - 잔반을 부탁해 !</h1>
					<div className="arrow"></div>
					<Link className="btn btn-default selectBtn" to="/search">
						{/* <BiSearchAlt className="icon" size="50" /> */}
						<p>검색</p>
					</Link>
					<Link className="btn btn-default selectBtn" to="/community">
						{/* <FaExchangeAlt className="icon" size="50" /> */}
						<p>나눔/교환</p>
					</Link>
				</div>
			</div>
		</div>
	);
}


export default Home;
