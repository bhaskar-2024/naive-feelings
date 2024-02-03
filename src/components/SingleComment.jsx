import React from 'react'

function SingleComment() {
  return (
    <>
    <article className="p-6 text-base bg-white border-t shadow-md  border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                        alt="Helene Engels"/>Helene Engels</p>
                <p className="text-sm text-gray-600 dark:text-gray-400"></p>
            </div>
           
            {/* <!-- Dropdown menu --> */}
            
        </footer>
        <p className="text-gray-500 dark:text-gray-400">Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.</p>
        
    </article>
    </>
  )
}

export default SingleComment