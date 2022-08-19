import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { BsPencil } from 'react-icons/bs';
import './Header.css';
function Header() {
	return (
		<div id="header">
			<div id="header__wrap">
				<div id="header__top">
					<Link className="title" to="/">
						<h1>잔반을 부탁해</h1>
					</Link>
					<div id="header__top__icons">
						<BiSearchAlt className="icon" />
						<BsPencil className="icon" />
						<FiUser className="icon" />
					</div>
				</div>
				<div id="header__bottom">
					<Link className="menu" to="/search">
						<div>레시피</div>
					</Link>
					<Link className="menu" to="/community">
						<div>나눔&교환</div>
					</Link>
					<Link className="menu" to="/store">
						<div>구매</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;
