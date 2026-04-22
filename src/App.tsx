import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Onboarding from './pages/Onboarding'
import Dashboard from './pages/Dashboard'
import { Flex } from '@chakra-ui/react'

function App() {
  return (
    <Flex minH="100vh" flexDir="column" align="center" px={6} pt={10} as="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Navigate to="/onboarding"/>/>
          <Route path="/onboarding" element=<Onboarding/>/>
          <Route path="/dashboard" element=<Dashboard/>/>
        </Routes>
      </BrowserRouter>
    </Flex>
  )
}

export default App
