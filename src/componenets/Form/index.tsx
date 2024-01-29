import React from 'react'
import Button from '../atoms/button'

const Form = () => {
  return (
    <div className="bg-black text-white flex flex-col p-12 bg-opacity-70 rounded-md gap-6 w-[150%]">
      <h1 className="text-3xl font-bold">Sign In</h1>
      <div className="flex flex-col gap-3 items-center">
        <input type="text" placeholder="Email or Phone Number" className="bg-transparent border-gray-700 border-2 p-2 w-full rounded-md py-3"></input>
        <input type="password" placeholder="Password" className="bg-transparent border-gray-700 border-2 p-2 w-full rounded-md py-3"></input>
        <Button className="text-white bg-red-700 hover:bg-red-800 px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 text-sm !rounded-md w-full">Sign In</Button>
        <p className="text-white text-sm">Forgot Password?</p>
        <input type="checkbox" className="bg-black border-gray-700" ></input>
      </div>
    </div>
  )
}

export default Form
