// src/pages/UserDashboard.tsx
import React, { useState } from 'react'

const dummyUsers = [
  { username: 'alice', role: 'Quản trị viên', email: 'alice@example.com' },
  { username: 'bob', role: 'Siêu quản trị viên', email: 'bob@example.com' },
  { username: 'charlie', role: 'Quản trị viên', email: 'charlie@example.com' },
  { username: 'dave', role: 'Người dùng', email: 'dave@example.com' },
]

export default function UserDashboard() {
  const [tab, setTab] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = dummyUsers
    .filter((u) => {
      if (tab === 'admin') return u.role === 'Quản trị viên'
      if (tab === 'superadmin') return u.role === 'Siêu quản trị viên'
      return true
    })
    .filter((u) => u.email.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r px-4 py-6">
        <div className="text-xl font-semibold mb-8">🧱 O2OCom.AI</div>
        <nav className="space-y-4 text-sm font-medium text-gray-700">
          <div className="flex items-center gap-2 text-blue-600 font-semibold">
            <span>📊</span> Dashboard
          </div>
          <div className="flex items-center gap-2 bg-blue-50 text-blue-600 rounded px-2 py-1 font-semibold">
            <span>👤</span> Quản lý người dùng
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span>📋</span> Nhật ký
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span>⚙️</span> Cài đặt
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Quản lý người dùng</h1>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-4 flex gap-6 text-sm">
          <button
            onClick={() => setTab('all')}
            className={`pb-2 ${tab === 'all' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : ''}`}
          >
            Tất cả người dùng
          </button>
          <button
            onClick={() => setTab('admin')}
            className={`pb-2 ${tab === 'admin' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : ''}`}
          >
            Quản trị viên
          </button>
          <button
            onClick={() => setTab('superadmin')}
            className={`pb-2 ${tab === 'superadmin' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : ''}`}
          >
            Siêu quản trị viên
          </button>
        </div>

        {/* Search + Filter */}
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            placeholder="🔍 Tìm kiếm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded px-3 py-2 w-64 text-sm"
          />
          <select className="border px-3 py-2 rounded text-sm text-gray-700">
            <option>Vai trò</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="text-left font-medium px-4 py-2">Tên đăng nhập</th>
                <th className="text-left font-medium px-4 py-2">Vai trò</th>
                <th className="text-left font-medium px-4 py-2">Email</th>
                <th className="text-left font-medium px-4 py-2">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((user, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-2">{user.username}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">
                    <button className="text-blue-600 hover:underline">Chỉnh sửa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
