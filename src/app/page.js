"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const HomePage = () => (
  <>
    <div className="relative bg-gradient-to-r from-red-600 to-red-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-20">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Every Drop of Blood <br />
              Can Save a Life
            </h1>
            <p className="text-lg text-red-100">
              Your blood donation can help save up to three lives. Join our
              mission to ensure no one runs out of blood when they need it most.
            </p>
            <div className="flex space-x-4 pt-4">
              <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors flex items-center space-x-2">
                <span>Donate Now</span>
                <ArrowRight size={18} />
              </button>
              <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <Image
              src="/blood.webp"
              alt="Blood Donation Illustration"
              width={600}
              height={400}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-red-900 bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold">150K+</h3>
              <p className="text-red-100">Lives Saved</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">50K+</h3>
              <p className="text-red-100">Active Donors</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">100+</h3>
              <p className="text-red-100">Donation Centers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const App = () => {
  return (
    <div>
      <header className="bg-red-600 text-white py-4 shadow-md sticky top-0 z-50"></header>

      <main>
        <HomePage />
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; 2025 Life Flow. All rights reserved.{" "}
            <Link
              href="/privacy-policy"
              className="text-red-300 hover:underline"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
