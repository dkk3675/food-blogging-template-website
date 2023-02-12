import React from "react";
import {ReactComponent as Serving} from "../assets/serving.svg";

const About = () => {
    return(
        <div className="about flex flex-wrap w-full h-full items-center mt-40 md:h-[468px] lm:h-[900px]">
            <div className="gradient flex flex-wrap flex-row w-full h-fit">
                <div className="flex flex-wrap justify-center items-center w-[49vw] h-fit md:hidden">
                    <Serving className="w-[384px] h-fit lm:w-[500px]" />
                </div>
                <div className="w-[49vw] flex flex-wrap items-center justify-center md:w-full md:pt-20 md:pb-20 md:pl-11 md:pr-11 md:h-full">
                    <span className="md:flex md:flex-wrap md:justify-center md:items-center pl-20 md:pl-0">
                        <h1 className="text-[#0E2368] font-semibold text-5xl font-poppins md:text-2xl">About Us</h1>
                        <p className="font-normal text-sm mt-5 pr-60 lm:pr-20 md:p-0 text-[#444957] md:text-center md:text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
                        <button className="bg-[#E23744] rounded-full text-white w-32 h-10 font-semibold text-base mt-5 md:text-xs md:w-24 md:h-6">Read More</button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default About;