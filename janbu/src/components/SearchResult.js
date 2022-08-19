import React, { useState,useEffect } from "react";
import Recipe from './Recipe';
import { axios } from 'axios';

function SearchResult (props){

    useEffect(() => {
    const fetchEvents = async () => {
        const res = await axios.get("https://whispering-mesa-62448.herokuapp.com/api/recipes")
        const arrayLength = res.data.length
        console.log(`${arrayLength}`);
    }
    fetchEvents();
    },[])

    const searchValue = props;

    return (
        <>
            {searchValue.props === "" ?
                <>
                    <h3>오늘 이 메뉴는 어때요?</h3>
                    {/* for(let i = 0; i < arrayLength; i++){
                        <Recipe props={i}/>
                    } */}
                </>
                
                : 
                <>
                    <h3>"{searchValue.props}" 검색 결과입니다.</h3>
                    {/* <Recipe props={searchValue}/> */}
                </>
                
            }
            <Recipe />
        </>
            
    );
}

export default SearchResult;