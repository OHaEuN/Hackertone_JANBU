import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	falUser,
	falPencil,
	falMagnifyingGlass
} from '@fortawesome/free-regular-svg-icons';
function Header() {
	return (
		<div id="headerWrap">
			<div id="header__top">
				<h1>잔반을 부탁해</h1>
				{/* <Search /> */}
				<div id="header__top__icons">
					<FontAwesomeIcon icon={falUser} />
					<FontAwesomeIcon icon={falPencil} />
					<FontAwesomeIcon icon={falMagnifyingGlass} />
				</div>
			</div>
			<div id="header__bottom">
				{/* 레시피 */}
				{/* 교환&나눔 */}
				{/* 구매 */}
			</div>
		</div>
	);
}

export default Header;
