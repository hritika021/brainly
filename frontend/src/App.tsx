
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import './App.css'

import { Dashboard } from './pages/Dashboard'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Search } from './components/SearchBar'
import {Toaster} from "react-hot-toast"

  function App() {
    return <div className='bg-gray-100 h-screen'>
      <Toaster position='top-center' />
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Dashboard/>} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/search' element={
      
      <Search/>}/>
    </Routes></BrowserRouter>
    </div>
}

export default App
