'use client'
import { useState } from 'react';

export const NavBarComponent = function() {
  const [isOpen, setIsOpen] = useState(false);
  const toogleMenu = () => {
    setIsOpen(!isOpen);
  }

  return <nav className="bg-lightGray p-4 px-6 sm:px-12 rounded-b-2xl shadow-md fixed top-0 left-0 right-0 z-50">
    <div className="flex justify-between items-center font-calli">
      <div className="font-bold text-xl flex">
        <h3 className="">Arshid Bhat</h3>
      </div>
      <div className="sm:hidden">
        <button className="text-2xl focus:outline-none font-bold" onClick={toogleMenu}>{ isOpen ? '✕' : '☰' }</button>
      </div>
      <div className="hidden sm:flex font-semibold text-lg space-x-4 md:space-x-8">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
    <div className={`${ isOpen ? 'flex flex-col' : 'hidden'} sm:hidden mt-4 space-y-2 font-bold font-calli`}>
      <a href="#">Home</a>
      <a href="#about">About</a>
      <a href="#project">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
}