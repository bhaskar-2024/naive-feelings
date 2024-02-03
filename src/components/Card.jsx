import React from 'react'
import SingleComment from './SingleComment'
function Card() {
  return (
    <main className='flex flex-col px-2 my-5 lg:pt-2 lg:pl-24  lg:pr-24 lg:flex lg:flex-row w-screen h-screen'>
        <section className='w-full h-full lg:w-1/2 '>
        <div className='w-full flex'>
          <div className='h-10 w-10 m-1 ml-3 lg:h-10 lg:w-10  flex justify-center items-center text-3xl text-white bg-lime-950 border-gray-900'>U</div>
          <div>
            <div>Name will be here</div>
            <div>Time and date</div>
          </div>
        </div>
           

            <div className='w-full h-5/6 object-fit p-1 '>
            <img className="h-full w-full rounded-lg shadow-xl  dark:shadow-gray-800" src="https://i.pinimg.com/736x/1a/3f/e5/1a3fe5176544407217fb04560e68f01a.jpg" alt="image description"/>

            </div>
            
        </section>
        
        
       
        <section className="bg-white overflow-scroll dark:bg-gray-900 rounded-md shadow shadow-black py-8 lg:mt-12 h-5/6  antialiased">
  <div className="max-w-2xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl lg:text-3xl font-bold text-gray-900 dark:text-white">Comments </h2>
    </div>
    <form className="mb-2 mt-0 ">
        <div className="py-2 px-4 mb-4 shadow bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea id="comment" rows="3"
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..." required></textarea>
        </div>
        <button type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 shadow shadow-black">
            Post comment
        </button>
    </form>
    <div >
    <SingleComment></SingleComment>
    <SingleComment></SingleComment>
    <SingleComment></SingleComment>
    <SingleComment></SingleComment>
    <SingleComment></SingleComment>
    <SingleComment></SingleComment>
    </div>
    
    
    
  </div>
</section>
    </main>
  )
}

export default Card