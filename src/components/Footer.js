import React from "react";
import mLogo from "../assets/mLogo.png";
import tiktok from "../assets/tiktok.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
function Footer() {
  return (
    <div className="flex h-[62.5rem] flex-col items-center justify-center">
      <div className=" flex w-[78.125rem] flex-col items-center border-[1px] border-[#dcca8733]">
        <h5 className="m-0 mb-2 mt-16 text-[#fff]">Get in Touch</h5>
        <div className="m-0 mb-9 h-0.5 w-7 bg-[linear-gradient(_to_right,rgba(220,202,135,1),rgba(220,202,135,0.24),rgba(220,202,135,1)_)]"></div>
        <h2 className="m-0 mb-6 text-[#dcca87]">Receive new our updates</h2>
        <p className="m-0 mb-7 text-[#fff]">Don't miss out on us</p>
        <form className="m-0 mb-16 flex w-[46.25rem] justify-between">
          <input
            type="text"
            className="font-cormorant w-[35rem] border-[1px] border-[#dcca87a9] bg-transparent text-[1rem] text-base font-semibold not-italic leading-[175%] tracking-[0.64px] text-[#fff]"
          ></input>
          <button>Subscribe</button>
        </form>
      </div>
      <div className="mt-[7.5rem] flex items-start justify-between gap-[7.5rem]">
        <div>
          <h4 className="m-0 mb-5 text-[#f5efdb]">Working Hours</h4>
          <p className="m-0 text-[#aaa]">Tuesday-Friday</p>
          <p className="m-0 text-[#aaa]">09:00AM - 10:00PM</p>
          <p className="m-0 text-[#aaa]">
            <br></br>
          </p>
          <p className="m-0 text-[#aaa]">Saturday-Monday</p>
          <p className="m-0 text-[#aaa]">11:00AM - 00:00AM</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={mLogo} className="mb-8 w-[7.5rem]" alt="logo"></img>
          <h5 className="m-0 mb-3 w-[25rem] text-[1rem] text-[#fff]">
            Lorem ipsum dolor sit amet, consectetur adipiscing, consectetur
            adipiscing{" "}
          </h5>
          <div className="m-0 mb-9 h-0.5 w-7 bg-[linear-gradient(_to_right,rgba(220,202,135,1),rgba(220,202,135,0.24),rgba(220,202,135,1)_)]"></div>
          <div className="mb-12 flex justify-between gap-3">
            <img src={instagram} alt="social" className="w-7" />
            <img src={tiktok} alt="social" className="w-7" />
            <img src={facebook} alt="social" className="w-7" />
          </div>
          <p className="m-0 text-[#aaa]">2023 Duc Do. </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="m-0 mb-5 text-[#f5efdb]">Contact Us</h4>
          <p className="m-0 text-[#aaa]">9909 Yonge St, Toronto ON</p>
          <p className="m-0 text-[#aaa]">
            <br></br>
          </p>
          <p className="m-0 text-[#aaa]">+1(123)-456-7890</p>

          <p className="m-0 text-[#aaa]">mcdcompany@mcdco.ca</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
