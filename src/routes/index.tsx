import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Landing } from '../pages/Landing'
import { ComponentDemo } from '../pages/ComponentDemo'
import { Login, Register } from '../pages/auth'

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/components" element={<ComponentDemo />} />
      
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Placeholder routes */}
      <Route path="/brands" element={<div className="p-8 text-center">Brands Page - Coming Soon</div>} />
      <Route path="/how-it-works" element={<div className="p-8 text-center">How It Works - Coming Soon</div>} />
      <Route path="/for-brands" element={<div className="p-8 text-center">For Brands - Coming Soon</div>} />
      <Route path="/for-retailers" element={<div className="p-8 text-center">For Retailers - Coming Soon</div>} />
      <Route path="/dashboard" element={<div className="p-8 text-center">Dashboard - Coming Soon</div>} />
      <Route path="/cart" element={<div className="p-8 text-center">Cart - Coming Soon</div>} />
      <Route path="/profile" element={<div className="p-8 text-center">Profile - Coming Soon</div>} />
      
      {/* 404 */}
      <Route path="*" element={<div className="p-8 text-center">404 - Page Not Found</div>} />
    </Routes>
  )
}