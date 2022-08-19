import React, { useEffect, useState } from 'react';
import SearchResult from './SearchResult';
import './SearchBar.css';
import { BiSearchAlt } from 'react-icons/bi';

function SearchBar() {
	const [keywordArray, addKeywordToArray] = useState([]);
	const [keyword, setKeyword] = useState('');
	const handleAdd = () => {
		console.log('키워드 배열에 추가함');
		addKeywordToArray([keyword, ...keywordArray]);
	};
	const handleSearchClick = () => {
		console.log(keywordArray);
	};
	const onChange = (event) => setKeyword(event.target.value);
	const handleOnKeyPress = (event) => {
		if (event.key === 'Enter') {
			handleAdd(); // Enter 입력이 되면 클릭 이벤트 실행
			return setKeyword(() => '');
		}
	};

	useEffect(() => {
		console.log("I run when 'keyword' changes.");
	}, [keyword]);
	useEffect(() => {
		console.log('add keyword for searching');
	}, [keywordArray]);

	return (
		<div id="search">
			<div id="search__wrap">
				<div id="mainSearchWrap">
					<div id="mainSearchBar">
						<input
							className="mainSearchBar__item"
							value={keyword}
							onChange={onChange}
							onKeyPress={handleOnKeyPress}
							type="text"
							placeholder="# 재료 입력"
						/>
						<button
							className="mainSearchBar__item"
							type="submit"
							onClick={handleSearchClick}
						>
							<BiSearchAlt />
						</button>
					</div>
					<div id="textbox">
						<div>메뉴로 검색하기 ></div>
					</div>
				</div>
				<div id="result">
					<SearchResult props={keyword} />
				</div>
			</div>
		</div>
	);
}

export default SearchBar;
