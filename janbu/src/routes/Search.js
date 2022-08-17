
// import React, { useEffect, useState } from "react";



// function Search(){
//   const [searchValue, setValue] = useState("");
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue(keyword);
//   const onChange = (event) => setKeyword(event.target.value);
  
//   useEffect(() => {
//     console.log("I run when 'keyword' changes.");
//   }, [keyword]);
//   useEffect(() => {
//     console.log("Search keyword");
//     console.log(searchValue);
//   }, [searchValue]);

//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="키워드 입력"
//       />
//       <button type="submit" onClick={onClick}>검색</button>
//     </div>
//   );

import React from 'react';
import axios from 'axios';
import './Search.css';

function Search() {
	return <h1>search</h1>;

}

export default Search;
