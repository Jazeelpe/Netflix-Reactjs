import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center z-[100] w-full absolute px-4 py-2">
      <Link to="/">
        <h1 className="text-red-700 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div>
        <Link to="/signin">
          <button className="text-white pr-4 ">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 px-6 py-2 rounded cursor-pointer ">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
