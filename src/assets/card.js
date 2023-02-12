import React from "react";

const Card = ({image, title,description}) => {
    return(
        <div className="card border-[rgba(147, 162, 211, 0.38)] border-2 rounded-2xl w-96 h-[520px] bg-white ml-8 mr-8 flex flex-wrap flex-col p-5 md:w-[271px] md:h-[450px] md:m-0">
            <div className="h-72 flex flex-wrap justify-center items-center p-2 md:h-48 md:p-0">
                <img src={image} alt="" className="md:w-[204px] md:h-[166px]" />
            </div>
            <span className="h-44 flex flex-wrap items-center p-2 md:justify-center md:items-center md:p-0">
                <h1 className="font-poppins text-[#0E2368] font-bold text-xl md:text-base md:pt-5">{title}</h1>
                <p className="w-80 line-clamp-3 mt-1 font-normal text-sm text-[#444957] md:text-xs md:line-clamp-5 md:w-[220px]">{description}</p>
                <button className="border-[#424961] border-2 font-semibold text-base rounded-full text-[#424961] h-9 w-36 mt-5 md:text-xs">Read More</button>
            </span>
        </div>
    );
}

export default Card;