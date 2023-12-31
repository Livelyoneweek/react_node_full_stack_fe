import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
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
import { useEffect } from 'react'
import ProtectedPage from './pages/ProtectedPage'
import ProtectedRoutes from './conponents/ProtectedRoutes'
import NotAuthRoutes from './conponents/NotAuthRoutes'
import UploadProductPage from './pages/UploadProductPage'
import DetailProductPage from './pages/DetailProductPage'
import CartPage from './pages/CartPage'
import HistoryPage from './pages/HistoryPage'

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
  const {pathname} = useLocation();

  useEffect(() => {
    if(isAuth) {
      dispatch(authUser());
    }
  }, [isAuth, pathname,dispatch])

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />} />

          {/* 로그인한 사람만 갈 수 있는 경로 */}
          <Route element={<ProtectedRoutes isAuth={isAuth} />}>
            <Route path='/protected' element={<ProtectedPage />} />
            <Route path='/product/upload' element={<UploadProductPage />} />
            <Route path='/product/:productId' element={<DetailProductPage />} />
            <Route path='/user/cart' element={<CartPage />} />
            <Route path='/history' element={<HistoryPage />} />
          </Route>

          {/* 로그인한 사람은 갈 수 없는 경로 */}
          <Route element={<NotAuthRoutes isAuth={isAuth} />}>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
