
import React, {useEffect} from "react";
import axios from "axios";


function Recipe() {


    useEffect(() => {
      const fetchEvents = async () => {
          const res = await axios.get("https://whispering-mesa-62448.herokuapp.com/api/recipes")
          console.log(res)
          document.querySelector("#recipeTitle").innerHTML=`${res.data[0].name}`;
          document.querySelector("#recipeDes").innerHTML=`${res.data[0].content}`;
          // const recipeimg= res.data[0].
      }
      fetchEvents();
    },[])

    return (
      <div className="recipeComponetWrap">
          {/* <img src={recipeimg}/> */}
          <div id="recipeTitle">recipe title</div>
          <div id="recipeDes">recipe description</div>
          <div id="author">잔반을 부탁해</div>
          <div id="reviewRate">rate</div>
      </div>
      
    );
  }
export default Recipe;