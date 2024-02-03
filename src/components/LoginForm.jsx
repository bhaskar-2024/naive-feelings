import React from 'react'
import { useState } from 'react';
import { login } from '../store/AuthSlice';
import authService from '../Appwrite/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function LoginhtmlForm() {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
   
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [error, setError] = useState("")
    const submitHandler = async(email , password)=>{
        
        let data = {
            email : email,
            password : password
        }
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/main/Home")
            }
        } catch (error) {
            console.error("Login error:", error);
            setError(error.message)
        }
        
    }
  return (
    <>
    <section className="bg-gray-50 px-6 py-8 dark:bg-gray-900 h-screen">
  <div className="flex flex-col shadow-black items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-4xl mr-4   font-bold text-gray-900 dark:text-white">
          Naive Feelings  
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form 
              onSubmit={(e) => {e.preventDefault(); submitHandler(e)}}
              className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input
                        value={email}
                        onChange = {(e) =>{setEmail(e.target.value)}}
                       type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label htmlFor="passwordin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input 
                      value={password}
                      onChange = {(e) => {setPassword(e.target.value)}}
                      type="password" name="password" id="passwordin" placeholder="••••••••"className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div className="flex items-center justify-between">
                     
                    
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don't have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
                  </div>
               </div>
         </div>
        </section>
    </>
  )
}

export default LoginhtmlForm