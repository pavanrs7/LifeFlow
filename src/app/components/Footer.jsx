import React from 'react'

export const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; 2025 Life Flow. All rights reserved.{" "}
            <Link
              href="/privacy-policy"
              className="text-yellow-300 hover:underline"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
