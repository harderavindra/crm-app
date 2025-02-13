import { useState } from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Contacts from './pages/Contacts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Dashboard/>} />
          <Route path='/' element={<Dashboard/>} />
          <Route path='/contacts' element={<Contacts/>} />
        </Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
