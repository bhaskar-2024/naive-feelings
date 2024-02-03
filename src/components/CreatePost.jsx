import React from 'react'

function CreatePost() {
  return (
    <div className='h-screen bg-slate-900 flex justify-center items-center '>
        <form className='w-2/3  h-2/3 border-x-4 bg-slate-900  text-white border-y-4 lg:flex-row lg:flex flex space-y-10 lg:space-y-0 flex-col justify-center items-center space-x-4 '>
            <div className='font-bold text-lg'>Create your new post here</div>
            <input type="file" className='rounded-md' />
            <button type ="submit" className='border border-white p-2 rounded-lg hover:bg-white hover:text-slate-900 font-bold'>UPLOAD</button>
        </form>
    </div>
  )
}

export default CreatePost