import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NavBar from './layout/Navbar'
import Footer from './layout/Footer'


function Layout() {
  return (
    <div>
      <NavBar />
        <main>
          <Outlet />
        </main>
      <Footer />
    </div>
  )
}

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />} />

          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App