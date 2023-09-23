import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute bg-black/20 top-0 left-0 w-full h-full">
        <div className="mx-auto max-w-[450px] h-[600px] bg-black/80 my-10 py-12 px-12">
          <h1 className="text-white font-bold text-3xl">Sign Up</h1>
          <div className="w-[320px]">
            <form className="flex flex-col text-white mt-2">
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="my-3 p-2 bg-gray-700"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-2 bg-gray-700"
              />
              <button className="my-3 p-2 bg-red-700 rounded">Sign Up</button>
            </form>
            <div className="text-gray-700 flex justify-between mt-2">
              <p>
                <input type="checkbox" className="mr-1" /> Remember Me
              </p>
              <p>Need help ?</p>
            </div>
            <p className="text-gray-700 mt-14">
              Already subscribed to Netflix ?
              <Link to='/signin'>
                <span className="text-white"> Sign In.</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <img
        className="hidden sm:block w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
    </div>
  )
}

export default Signup
