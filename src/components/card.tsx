// src/components/card.tsx
import React from 'react'

export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white shadow rounded p-4">{children}</div>
)

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-2">{children}</div>
)
