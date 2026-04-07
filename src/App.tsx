import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Onboarding from './pages/Onboarding'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<Navigate to="/onboarding"/>/>
        <Route path="/onboarding" element=<Onboarding/>/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
