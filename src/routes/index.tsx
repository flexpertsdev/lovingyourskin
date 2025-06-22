import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Landing } from '../pages/Landing'
import { ComponentDemo } from '../pages/ComponentDemo'
import { Login, Register } from '../pages/auth'
import { Brands } from '../pages/Brands'
import { BrandDetail } from '../pages/BrandDetail'
import { ProductDetail } from '../pages/ProductDetail'

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/components" element={<ComponentDemo />} />
      
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Product Discovery Routes */}
      <Route path="/brands" element={<Brands />} />
      <Route path="/brands/:brandId" element={<BrandDetail />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      
      {/* Placeholder routes */}
      <Route path="/how-it-works" element={<div className="p-8 text-center">How It Works - Coming Soon</div>} />
      <Route path="/for-brands" element={<div className="p-8 text-center">For Brands - Coming Soon</div>} />
      <Route path="/for-retailers" element={<div className="p-8 text-center">For Retailers - Coming Soon</div>} />
      <Route path="/dashboard" element={<div className="p-8 text-center">Dashboard - Coming Soon</div>} />
      <Route path="/cart" element={<div className="p-8 text-center">Cart - Coming Soon</div>} />
      <Route path="/profile" element={<div className="p-8 text-center">Profile - Coming Soon</div>} />
      <Route path="/orders" element={<div className="p-8 text-center">Orders - Coming Soon</div>} />
      <Route path="/messages" element={<div className="p-8 text-center">Messages - Coming Soon</div>} />
      
      {/* 404 */}
      <Route path="*" element={<div className="p-8 text-center">404 - Page Not Found</div>} />
    </Routes>
  )
}