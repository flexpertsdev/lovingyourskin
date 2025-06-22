import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Landing } from '../pages/Landing'
import { ComponentDemo } from '../pages/ComponentDemo'

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/components" element={<ComponentDemo />} />
      
      {/* Placeholder routes */}
      <Route path="/brands" element={<div className="p-8 text-center">Brands Page - Coming Soon</div>} />
      <Route path="/how-it-works" element={<div className="p-8 text-center">How It Works - Coming Soon</div>} />
      <Route path="/for-brands" element={<div className="p-8 text-center">For Brands - Coming Soon</div>} />
      <Route path="/for-retailers" element={<div className="p-8 text-center">For Retailers - Coming Soon</div>} />
      <Route path="/login" element={<div className="p-8 text-center">Login - Coming Soon</div>} />
      <Route path="/register" element={<div className="p-8 text-center">Register - Coming Soon</div>} />
      
      {/* 404 */}
      <Route path="*" element={<div className="p-8 text-center">404 - Page Not Found</div>} />
    </Routes>
  )
}