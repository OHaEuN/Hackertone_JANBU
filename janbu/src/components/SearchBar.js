import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";


function SearchBar(){
  const [keywordArray, addKeywordToArray] = useState([]);
  const [keyword, setKeyword] = useState("");
  const handleAdd = () => {
    console.log("키워드 배열에 추가함");
    addKeywordToArray([keyword, ...keywordArray]);
  };
  const handleSearchClick = () => {
    console.log(keywordArray);
  };
  const onChange = (event) => setKeyword(event.target.value);
  const handleOnKeyPress = (event) => {
		if (event.key === 'Enter') {
			handleAdd(); // Enter 입력이 되면 클릭 이벤트 실행
		}
	};

  

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  // useEffect(() => {
  //   console.log("add keyword for searching");
  // }, [keywordArray]);


  

  return (
    <div>
      <div id = "mainSearchBar">
        <input
          value={keyword}
          onChange={onChange}
          onKeyPress={handleOnKeyPress}
          type="text"
          placeholder="키워드 입력"
        />
        <button type="submit" onClick={handleSearchClick}>검색</button>
      </div>      
      <div id="result">
        <SearchResult props={keywordArray}/>
      </div>
    </div>
  );
  }

export default SearchBar;
