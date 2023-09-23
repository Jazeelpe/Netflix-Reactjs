import Navbar from './components/Navbar'
import Home from './pages/Home'
import Main from './components/Main'
import { Outlet } from 'react-router-dom'
import Signup from './pages/Signup'
import SignIn from './pages/SignIn'
const App = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
    </>
  )
}

export default App
