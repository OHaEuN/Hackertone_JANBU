import React, { useEffect } from 'react';
import axios from 'axios';

function Recipe2() {
	useEffect(() => {
		const fetchEvents = async () => {
			const result = await axios.get(
				'https://whispering-mesa-62448.herokuapp.com/api/recipes'
			);
			document.querySelector(
				'#recipeTitle2'
			).innerHTML = `${result.data[3].name}`;
			document.querySelector(
				'#recipeDes2'
			).innerHTML = `${result.data[3].content}`;
			document.querySelector(
				'#reviewRate2'
			).innerHTML = `${result.data[3].rating}`;
			// const recipeimg= res.data[0].
		};
		fetchEvents();
	}, []);

	return (
		<div className="recipeComponetWrap">
			{/* <img src={recipeimg}/> */}
			<div id="recipeTitle2">recipe title</div>
			<div id="recipeDes2">recipe description</div>
			<div id="author">잔반을 부탁해</div>
			<div id="reviewRate2">rate</div>
		</div>
	);
}
export default Recipe2;
