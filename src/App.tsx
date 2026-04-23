import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Onboarding from './pages/Onboarding'
import Dashboard from './pages/Dashboard'
import { Flex } from '@chakra-ui/react'
import ProtectedRoute from './security/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Flex minH="100vh" flexDir="column" align="center" px={6} pt={10} as="main">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/onboarding" element={<Onboarding />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Flex>
    </BrowserRouter>
  )
}

export default App
