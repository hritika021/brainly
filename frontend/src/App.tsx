
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import './App.css'

import { Dashboard } from './pages/Dashboard'
import { Signup } from './pages/Signup'

  function App() {
    return <div className='bg-gray-100 h-screen'>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Dashboard/>} />
    <Route path='/signup' element={<Signup/>}/>
    </Routes></BrowserRouter>
    </div>
}

export default App
