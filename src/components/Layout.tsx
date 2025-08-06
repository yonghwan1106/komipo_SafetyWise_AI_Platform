import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Monitor,
  BookOpen,
  FileText,
  User,
  Menu,
  X,
  Shield,
  Bell,
  Search
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: '대시보드', href: '/dashboard', icon: LayoutDashboard },
    { name: '실시간 모니터링', href: '/monitoring', icon: Monitor },
    { name: '교육 센터', href: '/learning', icon: BookOpen },
    { name: 'ESG 보고서', href: '/reports', icon: FileText },
    { name: '프로필', href: '/profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Title */}
            <div className="flex items-center">
              <button
                type="button"
                className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
              <Link to="/" className="flex items-center ml-2 md:ml-0 hover:opacity-80 transition-opacity">
                <Shield className="h-8 w-8 text-primary-500" />
                <div className="ml-3">
                  <h1 className="text-xl font-bold text-gray-900">SafetyWise AI</h1>
                  <p className="text-xs text-gray-500">2025 KOMIPO 혁신 50대 과제</p>
                </div>
              </Link>
            </div>

            {/* Search and Notifications */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <div className="relative">
                  <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="검색..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
              <button className="relative p-2 text-gray-400 hover:text-gray-500">
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-danger-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="flex items-center space-x-2">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://ui-avatars.com/api/?name=김안전&background=2C5AA0&color=fff"
                  alt="Profile"
                />
                <span className="hidden md:block text-sm font-medium text-gray-700">김안전</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-primary-500" />
                <span className="ml-2 font-bold text-gray-900">SafetyWise AI</span>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="p-4 space-y-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      <div className="flex">
        {/* Desktop Sidebar */}
        <nav className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 md:pt-16">
          <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive
                          ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
            
            {/* Competition Banner */}
            <div className="p-4 m-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg text-white">
              <div className="text-xs font-semibold mb-1">2025 KOMIPO</div>
              <div className="text-sm font-bold">혁신 50대 과제</div>
              <div className="text-xs mt-1 opacity-90">아이디어 공모전</div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="md:pl-64 flex-1">
          <div className="p-4 md:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;