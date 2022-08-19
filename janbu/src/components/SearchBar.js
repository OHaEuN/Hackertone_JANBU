import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";


function SearchBar(){
  const [keywordArray, addKeywordToArray] = useState([]);
  const [keyword, setKeyword] = useState("");
  const handleAddClick = () => {
    addKeywordToArray([keyword, ...keywordArray]);
  };
  const handleSearchClick = () => {
    console.log(keywordArray);

  };
  const onChange = (event) => setKeyword(event.target.value);
  

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("add keyword for searching");
  }, [keywordArray]);


  

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="키워드 입력"
      >
        <button type="submit" onClick={handleSearchClick}>검색</button>
      </input>
      <button type="submit" onClick={handleAddClick}>재료 추가</button>
      
      <div id="result">
        <SearchResult props={keyword}/>
      </div>
    </div>
  );
  }

export default SearchBar;
