import React, { useState } from "react";
import Card from "../assets/card";
import data from "../assets/data";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft,faArrowRight} from "@fortawesome/free-solid-svg-icons";

const Articles = () => {
    const total = Math.ceil(data.length / 3);
    let [current,setCurrent] = useState(1);
    let Increment = () => {
        if(current < total){
            setCurrent(current + 1);
            document.getElementById('carousal').scrollBy(1500,0);
        }
    }
    let Decrement = () => {
        if(current > 1){
            setCurrent(current - 1);
            document.getElementById('carousal').scrollBy(-1500,0);
        }
    }
    return(
        <div className="articles w-full h-full flex flex-wrap flex-col mt-32 md:mt-20 lm:h-full md:h-[1650px]">
            <div>
            <h1 className="font-semibold flex flex-wrap w-full lm:h-1/5 text-[#0E2368] text-6xl pl-32 pb-10 md:justify-center md:text-[28px] md:p-0">Latest Articles</h1>
            </div>
            <div className="flex flex-wrap h-3/4 w-full mt-1">
                <div className="flex flex-wrap flex-col w-full">
                    <div id="carousal" className="flex flex-row overflow-hidden h-[550px] w-full scroll-smooth pl-20 pr-20 md:h-[1500px] md:flex-col md:flex-wrap md:p-0">
                        {data.map((article,index) => {
                            return(
                                <div key={index} className="md:flex md:flex-wrap md:w-full md:mt-5 md:mb-5 md:justify-center">
                                    <Card image={article.image} title={article.title} description={article.description} />
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex flex-wrap h-14 w-full justify-center mt-1">
                        <button onClick={Decrement}>
                            <FontAwesomeIcon icon={faArrowLeft} className={`rounded-md p-2 border-2 ${current !== 1 ? 'border-[#424961] text-[#424961]' : 'border-[#AFAFAF] text-[#AFAFAF]' }`} />
                        </button>
                        <span className="mt-3 text-xl ml-5 mr-5 text-[#424961] font-normal">{current}/{total}</span>
                        <button onClick={Increment}>
                            <FontAwesomeIcon icon={faArrowRight} className={`rounded-md p-2 border-2 ${current !== total ? 'border-[#424961] text-[#424961]' : 'border-[#AFAFAF] text-[#AFAFAF]' }`} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Articles;