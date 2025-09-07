"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type PrimaryTheme = 'pink' | 'blue' | 'green' | 'purple' | 'orange'

interface PrimaryThemeContextType {
  theme: PrimaryTheme
  setTheme: (theme: PrimaryTheme) => void
}

const PrimaryThemeContext = createContext<PrimaryThemeContextType | undefined>(undefined)

export function PrimaryThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<PrimaryTheme>('pink')

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('primary-theme') as PrimaryTheme
    if (savedTheme && ['pink', 'blue', 'green', 'purple', 'orange'].includes(savedTheme)) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    // Save theme to localStorage and update CSS variables
    localStorage.setItem('primary-theme', theme)
    updateCSSVariables(theme)
  }, [theme])

  const updateCSSVariables = (newTheme: PrimaryTheme) => {
    const root = document.documentElement
    
    const themes = {
      pink: {
        primary: '#ee2b69',
        primary100: '#ffe8f0',
        secondary: '#fbe843'
      },
      blue: {
        primary: '#2563eb',
        primary100: '#dbeafe',
        secondary: '#f59e0b'
      },
      green: {
        primary: '#059669',
        primary100: '#d1fae5',
        secondary: '#f59e0b'
      },
      purple: {
        primary: '#7c3aed',
        primary100: '#ede9fe',
        secondary: '#f59e0b'
      },
      orange: {
        primary: '#ea580c',
        primary100: '#fed7aa',
        secondary: '#f59e0b'
      }
    }

    const colors = themes[newTheme]
    
    root.style.setProperty('--color-brand-primary', colors.primary)
    root.style.setProperty('--color-brand-primary-100', colors.primary100)
    root.style.setProperty('--color-brand-secondary', colors.secondary)
    root.style.setProperty('--primary', colors.primary)
    root.style.setProperty('--color-primary', colors.primary)
    root.style.setProperty('--color-primary-100', colors.primary100)
    root.style.setProperty('--color-secondary', colors.secondary)
    root.style.setProperty('--secondary', colors.secondary)
    root.style.setProperty('--shadow-300', `2px 2px 0px 2px ${colors.primary}`)
  }

  return (
    <PrimaryThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </PrimaryThemeContext.Provider>
  )
}

export function usePrimaryTheme() {
  const context = useContext(PrimaryThemeContext)
  if (context === undefined) {
    throw new Error('usePrimaryTheme must be used within a PrimaryThemeProvider')
  }
  return context
}
