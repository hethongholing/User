// src/components/button.tsx
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive'
}

export const Button = ({ children, variant = 'default', ...props }: ButtonProps) => {
  const baseClass = 'px-4 py-2 rounded text-white'
  const variantClass = variant === 'destructive' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'

  return (
    <button className={`${baseClass} ${variantClass}`} {...props}>
      {children}
    </button>
  )
}
