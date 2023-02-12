import React from "react";
import Truck from "../assets/truck.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram,faTwitter,faFacebookF} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return(
        <div className="footer flex flex-wrap flex-row h-3/5 bg-[#F8F8F8] mt-10 mb-0 md:flex-col md:w-full md:h-1/3">
            <div className="flex flex-wrap w-[20vw] justify-center items-center md:h-[10%] md:justify-center md:w-full md:p-5 lm:w-[20vw]">
                <img src={Truck} alt="" className="h-20 md:w-[75px] md:h-[58px] lg:h-20" />
            </div>
            <div className="flex flex-wrap flex-row h-[50%] md:flex-col md:w-full">
                <span className="flex flex-wrap w-[25vw] items-center p-16 md:w-full md:flex-col md:items-start md:p-10">
                    <h2 className="font-semibold text-lg text-[#0E2368] md:text-base">Contact Us</h2>
                    <p className="font-normal text-sm text-[#646874] pt-5">Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
                    <p className="font-normal text-sm text-[#646874] pt-5 lm:break-all lm:whitespace-normal md:w-[9px]">example2020@gmail.com</p>
                    <p className="font-normal text-sm text-[#646874] pt-5">(904) 443-0343</p>
                </span>
                <span className="flex flex-wrap w-[14vw] items-center p-16 md:w-full md:p-10 md:flex-col md:items-start">
                    <h2 className="font-semibold text-lg text-[#0E2368]">More</h2>
                    <button className="font-normal text-sm text-[#646874] pt-5">About Us</button>
                    <button className="font-normal text-sm text-[#646874] pt-5">Products</button>
                    <button className="font-normal text-sm text-[#646874] pt-5">Career</button>
                    <button className="font-normal text-sm text-[#646874] pt-5">Contact Us</button>
                </span>
                <div className="flex flex-wrap flex-row w-[35vw] justify-center p-16 md:flex-col-reverse md:w-full md:p-0 lg:w-[30vw] lg:pl-0 lg:pr-0">
                    <span className="flex flex-wrap h-32 justify-center">
                        <h2 className="flex flex-wrap h-10 md:w-[15vw] font-semibold text-lg text-[#0E2368] p-5 md:hidden">Social Links</h2>
                        <div className="flex flex-wrap h-20 justify-center w-[25vw] lm:w-[30vw] md:w-full lg:mt-5">
                            <button className="m-5"><FontAwesomeIcon icon={faInstagram} size='2x' className="text-[#0E2368]" /></button>
                            <button className="m-5"><FontAwesomeIcon icon={faTwitter} size='2x' className="text-[#0E2368]" /></button>
                            <button className="m-5"><FontAwesomeIcon icon={faFacebookF} size='2x' className="text-[#0E2368]" /></button>
                        </div>
                    </span>
                    <div className="text-[#828B9C] text-center font-roboto font-normal text-base flex flex-wrap items-end h-20 w-[32vw] justify-center md:w-full md:items-center md:justify-center">© 2022 Food Truck Example</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;