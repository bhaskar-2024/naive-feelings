import React from 'react'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate = useNavigate();
  function loginHandler(){
    navigate("/Login");
  }
  function signupHandler(){
    navigate("/Signup");
  }
  return (
    <main className="main-page  flex-col items-center flex  justify-center h-screen w-screen">
      <div className="text-white text-center font-serif font-extrabold text-5xl mb-12">
        Naive Feelings
      </div>
      <div className="text-white  text-2xl text-center p-6 lg:p-11 lg:pr-32  lg:pl-32 font-mono mb-40 h-1/4">
        I suppose in the end, the whole of life becomes an act of letting go,
        but what always hurts the most is not taking a moment to say goodbye.
        <div className="text-sm mt-4 pr-6 text-right">― Yann Martel, Life of Pi</div>
      </div>
      <div className=" flex-col flex-shrink items-center flex lg:flex-row lg:space-x-14 justify-center">
        <button className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group">
          <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
          <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
            Home
          </span>
          <span className="absolute inset-0 border-2 border-white rounded-full"></span>
        </button>
        <div className="mt-5 lg:mt-0 lg:space-x-14">
          <button 
          onClick={loginHandler}
          className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold mr-5 rounded-full lg:m-0 group">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              Log In
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </button>
          <button 
          onClick={signupHandler}
          className="relative inline-flex items-center  justify-start px-5 py-3 overflow-hidden font-bold rounded-full group">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              Sign-Up
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default LandingPage