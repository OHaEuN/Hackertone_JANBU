import { useState } from "react";
import Recipe from './Recipe';

function SearchResult (props){
    const searchValue = props;


    return (
        <>
            {searchValue.props === "" ?
                <h3>오늘 이 메뉴는 어때요?</h3>
                : 
                <h3>"{searchValue.props}" 검색 결과입니다.</h3>
            }
            <Recipe props={searchValue}/>
        </>
    );
}

export default SearchResult;