import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import Recipe2 from './Recipe2';
import { axios } from 'axios';
import './SearchResult.css';

function SearchResult(props) {
	useEffect(() => {
		const fetchEvents = async () => {
			const res = await axios.get(
				'https://whispering-mesa-62448.herokuapp.com/api/recipes'
			);
			const arrayLength = res.data.length;
			console.log(`${arrayLength}`);
		};
		fetchEvents();
	}, []);

	const searchValue = props;

	console.log(searchValue.props.length);
	return (
		<>
			{searchValue.props.length === 0 ? (
				<div className="result__box">
					<h3>오늘 이 메뉴는 어때요?</h3>
					{/* for(let i = 0; i < arrayLength; i++){
                        <Recipe props={i}/>
                    } */}
					<div className="recipe__box">
						<Recipe className="recipe__item" />
						<Recipe className="recipe__item" />
						<Recipe className="recipe__item" />
						<Recipe className="recipe__item" />
					</div>
				</div>
			) : (
				<>
					<h3>"{searchValue.props}" 검색 결과입니다.</h3>

					{/* <Recipe props={searchValue}/> */}
					<Recipe />
				</>
			)}
		</>
	);
}

export default SearchResult;
