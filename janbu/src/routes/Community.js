import React, {useEffect} from "react";
import axios from "axios";


function Community () {
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get("https://api.covid19api.com/total/dayone/country/kr")
            console.log(res)
            document.querySelector(".contents").innerHTML=`${res.data[600].Deaths}명 사망`;
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