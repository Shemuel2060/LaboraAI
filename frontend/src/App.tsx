import { Routes, Route } from 'react-router-dom'
import { LandingPage } from '@/features/landing' // Using the barrel file

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<div>Real App Coming Soon</div>} />
    </Routes>
  )
}

export default App
