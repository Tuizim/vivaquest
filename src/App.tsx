import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Onboarding from './pages/Onboarding'
import Dashboard from './pages/Dashboard'
import { Flex } from '@chakra-ui/react'
import ProtectedRoute from './security/ProtectedRoute'
import { AppNav } from './components/navigation/AppNav'

function App() {
  return (
    <BrowserRouter>
      <AppNav />
      <Flex
        minH="100vh"
        flexDir="column"
        align="center"
        px={6}
        pt={10}
        pb={{ base: "80px", lg: "0" }}
        ml={{ base: "0", lg: "240px" }}
        as="main"
      >
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
