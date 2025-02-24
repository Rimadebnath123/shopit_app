import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './components/home/HomePage'



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<HomePage/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App