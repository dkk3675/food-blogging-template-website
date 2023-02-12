import React from "react";
import Truck from '../assets/truck.png';
import Pizza from '../assets/pizza.png';
import Spicy from '../assets/red-spicy.png';

const Homepage = () => {
    return(
        <div className='homepage flex flex-wrap flex-row h-[900px] lm:h-[650px] lg:h-[700px] md:flex-col-reverse md:w-full md:h-[120vh]'>
            <div className="flex flex-wrap w-1/4 flex-col md:justify-center md:w-full md:p-10 md:h-[35vh]">
                <div className="flex flex-wrap h-[20%] p-5 pl-14 md:hidden lms:hidden">
                    <img src={Truck} alt="" className="h-20" />
                </div>
                <div className="flex flex-wrap h-[70%] p-5 pl-14 items-center md:w-full md:p-5 ">
                    <span className="md:flex md:flex-wrap md:w-full md:justify-center">
                        <h1 className="h-[20%] w-[30vw] font-bold text-6xl text-[#0E2368] md:text-4xl md:w-full md:text-center">Discover the <span className='text-[#E23744]'>Best</span> Food and Drinks</h1>
                        <p className="h-[8%] w-[25vw] mt-10 text-[#444957] font-normal text-base md:text-xs md:w-full md:text-center">Naturally made Healthcare Products for the better care & support of your body.</p>
                        <button className="h-16 w-48 bg-[#E23744] text-white rounded-full text-xl font-bold mt-10 md:text-xs md:w-[120px] md:h-10">Explore Now!</button>
                    </span>
                </div>
            </div>
            <div className="flex flex-wrap w-3/4 justify-end items-start md:w-full md:h-[85vh] md:items-start">
                <img src={Pizza} alt="" className="absolute h-[804px] w-[735px] lm:h-[600px] lm:w-[450px] lg:h-[700px] lg:w-[600px] md:h-[60vh] md:w-full" />
                <img src={Spicy} alt="" className="absolute h-[839px] w-[752px] lm:h-[620px] lm:w-[470px] lg:h-[720px] lg:w-[620px] md:h-[62vh] md:w-full" />
                <div className="absolute h-[15%] p-5 md:h-[30%] md:p-1">
                    <button className="bg-transparent text-white font-semibold text-base border-white rounded-full border-2 w-32 h-12 mt-3 mr-3 md:w-28 md:h-7 md:text-xs">Get In Touch</button>
                </div>
            </div>
        </div>
    );
}

export default Homepage;