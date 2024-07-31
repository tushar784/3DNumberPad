import { useState } from 'react'
import './App.css'
import HeaderSection from './components/HeaderSectiion'
import MainContent from './components/MainContent'
import SplineDesign from './components/SplineDesign'

function App() {
 

  return (
    <div className="flex flex-col min-h-screen font-ibm-plex-mono">
      <HeaderSection />
      <div className="flex-1 flex">
        {/* Left side: Text content */}
        <MainContent />
        
        {/* Right side: Spline design */}
        <div className="w-1/2 bg-[#FFFBF5]">
          <SplineDesign />
        </div>
      </div>
    </div>
  )
}

export default App
