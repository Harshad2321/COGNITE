import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import PatientDashboard from './pages/PatientDashboard'
import MemoryLibrary from './pages/MemoryLibrary'
import VirtualGarden from './pages/VirtualGarden'
import CaregiverDashboard from './pages/CaregiverDashboard'
import FamilyPortal from './pages/FamilyPortal'

function RouteLogger() {
  const location = useLocation()
  
  useEffect(() => {
    console.log('Current route:', location.pathname)
  }, [location])
  
  return null
}

function App() {
  console.log('App component rendering...')
  
  return (
    <Router>
      <RouteLogger />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/patient/:id" element={<PatientDashboard />} />
        <Route path="/memory-library/:id" element={<MemoryLibrary />} />
        <Route path="/virtual-garden/:id" element={<VirtualGarden />} />
        <Route path="/caregiver" element={<CaregiverDashboard />} />
        <Route path="/family/:id" element={<FamilyPortal />} />
      </Routes>
    </Router>
  )
}

export default App

