import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";


function SearchBar(){
  const [searchValue, setValue] = useState("");
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue(keyword);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("Search keyword");
  }, [searchValue]);
  

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="키워드 입력"
      />
      <button type="submit" onClick={onClick}>검색</button>
      <div id="result">
        <SearchResult props={searchValue}/>
      </div>
    </div>
  );
  }

export default SearchBar;
