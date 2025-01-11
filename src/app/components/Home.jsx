import React from "react";
import { Calendar, Phone, Clock, MapPin, Users, Droplet } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Give the Gift of Life
            </h1>
            <p className="text-xl mb-8">
              Your blood donation can save up to three lives. Join us in our
              mission to support UAE's healthcare system.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Donate Now
              </button>
              <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Droplet className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">600+</h3>
              <p className="text-gray-600">Daily Blood Donations</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">10,000+</h3>
              <p className="text-gray-600">Lives Saved Monthly</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">7</h3>
              <p className="text-gray-600">Donation Centers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How to Donate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Calendar className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Book Appointment</h3>
              <p className="text-gray-600">
                Schedule your donation at your preferred center
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Check Eligibility</h3>
              <p className="text-gray-600">
                Review donation requirements and health criteria
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <MapPin className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Center</h3>
              <p className="text-gray-600">
                Arrive at your chosen donation center
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Droplet className="w-10 h-10 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Donate Blood</h3>
              <p className="text-gray-600">
                Complete your donation in 15-20 minutes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-red-50 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Need Emergency Blood?
                </h2>
                <p className="text-gray-600 mb-4 md:mb-0">
                  Contact our 24/7 emergency hotline for immediate assistance
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-red-500" />
                <span className="text-xl font-bold text-red-500">
                  800-BLOOD (25663)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Basic Eligibility Requirements
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-700">• Age: 18-65 years old</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-700">• Weight: Minimum 50 kg</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-700">• Good general health condition</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-700">
                • No major surgery in the last 6 months
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
