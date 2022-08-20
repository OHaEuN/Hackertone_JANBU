import React, { useEffect, useState } from 'react';
import SearchResult from './SearchResult';
import './SearchBar.css';
import { BiSearchAlt } from 'react-icons/bi';

function SearchBar() {
	const [keywordArray, addKeywordToArray] = useState([]);
	const [keyword, setKeyword] = useState('');
	const handleAdd = (event) => {
		if (event.key === 'Enter' || event.key === 'Space') {
			console.log('키워드 배열에 추가함');
			addKeywordToArray(current => [keyword, ...current]);
			return setKeyword('');
		}
	};
	const handleSearchClick = () => {
		console.log(keywordArray);
	};
	const onChange = (event) => setKeyword(event.target.value);

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
							onKeyPress={handleAdd}
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
						<div>메뉴로 검색하기 </div>
					</div>
				</div>
				<SearchResult props={keywordArray} />
			</div>
		</div>
	);
}

export default SearchBar;
