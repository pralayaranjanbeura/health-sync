


import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Services from '../pages/Services'
import Contact from '../pages/Contact'

import DoctorDetails from '../pages/Doctors/DoctorDetails'
import Doctors from '../pages/Doctors/Doctors'

import MyAccount from '../Dashboard/user-account/MyAccount'
import Dashboard from '../Dashboard/docotr-account/Dashboard'
import ProtectedRoute from './ProtectedRoute'

import {Routes,Route} from "react-router-dom"
const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/doctors/:id' element={<DoctorDetails/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/users/profile/me' element={<ProtectedRoute allowedRole={['patient']}><MyAccount/></ProtectedRoute>}/>
      {/* <Route path='/users/profile/me' element={<MyAccount/>}/> */}
      <Route path='/doctors/profile/me' element={<ProtectedRoute allowedRole={['doctor']}><Dashboard/></ProtectedRoute>}/>
    </Routes>
  )
}

export default Routers