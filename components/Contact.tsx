'use client'
import { useState } from "react"

export const ContactComponent = function() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event: any) => {
    const { id, value } = event.target;
    console.log(value)
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }
  function handler(event: any) {
    event.preventDefault();
    alert(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
  }
  return <div id="contact" className="flex flex-col justify-center px-4 sm:px-6 lg-px-8 md:min-h-screen py-28">
      <div className="flex flex-col pb-2">
        <h2 className="text-2xl sm:text-4xl font-bold text-center">Contact</h2>
        <hr className="border-t-4 border-customPurple rounded-full w-10 mx-auto mt-5"/>
        <p className="text-center text-base sm:text-xl font-medium mx-auto md:w-1/2 px-10 py-8 md:px-0">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        <form className="flex flex-col bg-white w-full sm:w-3/5 mx-auto rounded-md" onSubmit={handler} >
          <div className="space-y-2 px-10 mt-10">
            <label className="block text-sm font-semibold">Name</label>
            <input 
              id="name" 
              type="text" 
              placeholder="Enter Your Name" 
              required 
              onChange={handleChange} 
              className="shadow w-full bg-lightGray h-14 px-2 rounded-md"
            />
          </div>
          <div className="space-y-2 px-10 mt-10">
            <label className="block text-sm font-semibold">Email</label>
            <input 
              id="email" 
              type="text" 
              placeholder="Enter Your Email" 
              required 
              onChange={handleChange}
              className="shadow w-full bg-lightGray h-14 px-2 rounded-md"
            />
          </div>
          <div className="space-y-2 px-10 mt-10">
            <label className="block text-sm font-semibold">Message</label>
            <textarea 
              id="message" 
              rows={9} 
              placeholder="Enter Your Message" 
              required 
              onChange={handleChange}
              className="shadow w-full bg-lightGray rounded-md p-2"
            />
          </div>
          
          <div className="flex justify-end px-10">
            <button type="submit" className="text-white bg-customPurple focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm w-1/4 my-8 py-4 ">
              Submit
            </button>
          </div>
        </form>
      </div>
    
  </div>
}