'use client'
import Lottie from "lottie-react";
import mouseAnimation from '@/public/mouse-animation.json';
export const IntroComponent = function() {
  return <div>
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg-px-8 pt-56 pb-28 min-h-screen">
      <h1 className="text-2xl text-center md:text-4xl lg:text-6xl font-bold sm:font-extrabold pb-10 px-10 lg:px-0">HEY, I&apos;M ARSHID BHAT</h1>
      <p className="text-center text-lg sm:text-xl font-medium md:w-1/2 px-10 md:px-0">A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
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