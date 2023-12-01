import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NavBar from './layout/Navbar'
import Footer from './layout/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import { authUser } from './store/thunkFunctions'

function Layout() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <ToastContainer position='bottom-right' thema='light' pauseOnHover autoClose={1500} />
      <NavBar />
        <main className='mb-auto w-10/12 max-w-4xl mx-auto'>
          <Outlet />
        </main>
      <Footer />
    </div>
  )
}

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user?.isAuth)
  const {pathname} = useLocation()

  useEffect(() => {
    if(isAuth) {
      dispatch(authUser());
    }
  }, [isAuth, pathname])

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
