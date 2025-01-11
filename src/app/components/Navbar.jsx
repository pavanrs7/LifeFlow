import React from "react";
import Link from "next/link";
import { User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z"
                  className="text-red-500"
                />
                <path
                  d="M12 6v12M18 12H6"
                  className="text-red-500"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-xl font-bold text-gray-800">LifeFlow</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-red-500 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/donor"
                  className="text-gray-600 hover:text-red-500 transition-colors duration-200"
                >
                  Donate Blood
                </Link>
              </li>
              <li>
                <Link
                  href="/request"
                  className="text-gray-600 hover:text-red-500 transition-colors duration-200"
                >
                  Request Blood
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="text-gray-600 hover:text-red-500 transition-colors duration-200"
                >
                  Admin
                </Link>
              </li>
              <Link
                href="/aihelp"
                className="text-gray-600 hover:text-red-500 transition-colors duration-200"
              >
                AI Help
              </Link>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-red-500 transition-colors duration-200"
                >
                  About us
                </Link>
              </li>
            </ul>
          </div>

          {/* Login Button */}
          <div className="flex items-center">
            <Link
              href="/login"
              className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
            >
              <User size={18} />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
