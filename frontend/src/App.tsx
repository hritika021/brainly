
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import './App.css'

import { Dashboard } from './pages/Dashboard'

import { Search } from './components/SearchBar'
import {Toaster} from "react-hot-toast"
import { Layout } from './pages/Layout'
import { SharedBrain } from './pages/SharedBrain'
import { Landing } from './pages/Landing'
import { AuthProvider } from './context/AuthContext'

  function App() {
    return <div className='bg-transparent h-screen'>
      <Toaster position='top-center' />
 <AuthProvider>
   <BrowserRouter>
  <Routes>
    <Route element={<Landing/>} path='/'/>
<Route element={<Layout/>}>
      <Route path="/dashboard" element={<Dashboard/>} />
        <Route path='/search' element={
      <Search/>}/>
</Route>
   
    <Route path='/shared/:hash' element={<SharedBrain/>}/>

    </Routes></BrowserRouter>
 </AuthProvider>
    </div>
}

export default App
