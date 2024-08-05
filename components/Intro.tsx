'use client'
import Lottie from "lottie-react";
import mouseAnimation from '@/public/mouse-animation.json';
export const IntroComponent = function() {
  return <div>
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg-px-8 font-serif pt-56 pb-28 min-h-screen">
      <h1 className="text-6xl font-extrabold pb-10">HEY, I&apos;M ARSHID BHAT</h1>
      <p className="text-center text-xl">A Result-Oriented Web Developer building and managing Websites and <br></br>
        Web Applications that leads to the success of the overall product</p>
      <a href="#project" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-10 rounded-lg transition duration-300 mt-10">
        PROJECTS
      </a>
    </div>
    <div className="flex justify-center">
      <Lottie animationData={mouseAnimation} loop={ true } className="w-36 h-36 md:w-52 md:h-52"/>
    </div>
    <hr className="border-t-2 border-gray-500 rounded-full mx-24"/>
  </div>
}