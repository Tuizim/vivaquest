import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Onboarding from './pages/Onboarding'
import Dashboard from './pages/Dashboard'
import { Flex } from '@chakra-ui/react'
import ProtectedRoute from './security/ProtectedRoute'
import { useDayReset } from './hooks/useDayReset'
import HabitsManager from './pages/HabitsManager'
import { Profile } from './pages/Profile'
import { sidebar } from './styles/tokens'
import { Sidebar } from './components/navigation/Sidebar'

function App() {
  useDayReset()

  return (
    <BrowserRouter>
      <Sidebar />
      <Flex
        minH="100vh"
        flexDir="column"
        align="center"
        ml={sidebar.ml}
        as="main"
      >
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/onboarding" element={<Onboarding />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/habits-manager" element={<HabitsManager />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Flex>
    </BrowserRouter>
  )
}

export default App
