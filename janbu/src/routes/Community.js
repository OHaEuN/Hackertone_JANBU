import React, {useEffect} from "react";
import axios from "axios";


function Community () {
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get("https://whispering-mesa-62448.herokuapp.com/api/recipes")
            console.log(res)
        }
        fetchEvents();
    })

    return (
        <section>
            <h2>국내 코로나 현황</h2>
            <div className="contents">
            </div>
        </section>
    )
  }

export default Community;