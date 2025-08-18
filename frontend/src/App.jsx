// import React from "react"
import { Route, Routes } from 'react-router-dom'
import LandingPage from "./pages/LandingPage"
import UserProvider from './context/userContext'
import Dashboard from './pages/Dashboard'
import EditResume from './components/EditResume'
import { Toaster } from 'react-hot-toast'
// import CreateResumeForm from './components/CreateResumeForm'



function App() {

  return (
    <UserProvider>
      <Routes>
        {/* <Route path="/resume/:id" element={<CreateResumeForm />} /> */}
      <Route path='/' element={<LandingPage />} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/resume/:resumeId' element={<EditResume />} />
    </Routes>

    <Toaster toastOptions={{
      className: "",
      style: {
        fontSize: "13px"
      }
    }}>
      
    </Toaster>
    </UserProvider>
    
  )
}

export default App
