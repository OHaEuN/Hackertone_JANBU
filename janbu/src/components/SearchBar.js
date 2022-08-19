import React, { useEffect, useState } from 'react';
import SearchResult from './SearchResult';
import './SearchBar.css';

function SearchBar() {
	const [searchValue, setValue] = useState('');
	const [keyword, setKeyword] = useState('');
	const onClick = () => setValue(keyword);
	const onChange = (event) => setKeyword(event.target.value);
	const handleOnKeyPress = (event) => {
		if (event.key === 'Enter') {
			onClick(); // Enter 입력이 되면 클릭 이벤트 실행
		}
	};

	useEffect(() => {
		console.log("I run when 'keyword' changes.");
	}, [keyword]);
	useEffect(() => {
		console.log('Search keyword');
	}, [searchValue]);

	return (
		<div id="search">
			<div id="search__wrap">
				<input
					value={keyword}
					onChange={onChange}
					onKeyPress={handleOnKeyPress}
					type="text"
					placeholder="키워드 입력"
				/>
				<button type="submit" onClick={onClick}>
					검색
				</button>
				<div id="result">
					<SearchResult props={searchValue} />
				</div>
			</div>
		</div>
	);
}

export default SearchBar;
