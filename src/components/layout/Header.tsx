import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuthStore } from '../../stores/auth.store'
import { Button } from '../ui'
import { cn } from '../../lib/utils/cn'

interface NavItem {
  label: string
  href: string
  requiresAuth?: boolean
  roles?: string[]
}

const navItems: NavItem[] = [
  { label: 'Brands', href: '/brands' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'For Brands', href: '/for-brands' },
  { label: 'For Retailers', href: '/for-retailers' },
]

const authNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', requiresAuth: true },
  { label: 'Orders', href: '/orders', requiresAuth: true },
  { label: 'Messages', href: '/messages', requiresAuth: true },
]

export const Header: React.FC = () => {
  const location = useLocation()
  const { user } = useAuthStore()
  const [language, setLanguage] = useState('EN')
  
  const isAuthenticated = !!user
  const isActive = (href: string) => location.pathname === href
  
  const allNavItems = isAuthenticated 
    ? [...navItems, ...authNavItems] 
    : navItems
    
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-gray">
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-light tracking-widest text-deep-charcoal hover:text-rose-gold transition-colors"
        >
          LOVING YOUR SKIN
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {/* Nav Items */}
          <div className="flex items-center gap-2">
            {allNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'px-4 py-2 text-sm rounded-full transition-all duration-200',
                  isActive(item.href)
                    ? 'bg-soft-pink-hover text-deep-charcoal'
                    : 'text-text-primary hover:bg-soft-pink-hover hover:text-deep-charcoal'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* User Actions */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-3 py-1.5 text-xs border border-border-gray rounded-full bg-white cursor-pointer hover:border-rose-gold transition-colors"
            >
              <option value="EN">EN</option>
              <option value="KO">한국어</option>
              <option value="ZH">中文</option>
            </select>
            
            {/* Auth Buttons */}
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <Link to="/cart">
                  <Button variant="secondary" size="small">
                    Cart
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button variant="ghost" size="small">
                    {user?.email}
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login">
                  <Button variant="secondary" size="small">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary" size="small">
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}