"use client"

import React, { useState } from 'react'
import { Palette, ChevronDown } from 'lucide-react'
import { usePrimaryTheme } from './primary-theme-provider'

const themes = [
  { id: 'pink', name: 'Pink', color: '#ee2b69' },
  { id: 'blue', name: 'Blue', color: '#2563eb' },
  { id: 'green', name: 'Green', color: '#059669' },
  { id: 'purple', name: 'Purple', color: '#7c3aed' },
  { id: 'orange', name: 'Orange', color: '#ea580c' }
] as const

export default function PrimaryThemeToggle() {
  const { theme, setTheme } = usePrimaryTheme()
  const [isOpen, setIsOpen] = useState(false)

  const currentTheme = themes.find(t => t.id === theme) || themes[0]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
        aria-label="Change primary color theme"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div 
          className="w-4 h-4 rounded-full border border-gray-300"
          style={{ backgroundColor: currentTheme.color }}
        />
        <Palette className="w-4 h-4 hidden md:block" />
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
            <div className="p-2">
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                Primary Color
              </div>
              <div className="space-y-1">
                {themes.map((themeOption) => (
                  <button
                    key={themeOption.id}
                    onClick={() => {
                      setTheme(themeOption.id)
                      setIsOpen(false)
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                      theme === themeOption.id
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div 
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: themeOption.color }}
                    />
                    <span>{themeOption.name}</span>
                    {theme === themeOption.id && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
