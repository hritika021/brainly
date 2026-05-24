
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import './App.css'

import { Dashboard } from './pages/Dashboard'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'

  function App() {
    return <div className='bg-gray-100 h-screen'>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Dashboard/>} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/signin' element={<Signin/>}/>
    </Routes></BrowserRouter>
    </div>
}

export default App
