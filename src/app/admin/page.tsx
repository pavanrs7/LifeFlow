//this is admin/pages

"use client";

import { useState, useEffect } from "react";
import { storage, DonorRequest, BloodRequest } from "../lib/storage";

export default function AdminPage() {
  const [donorRequests, setDonorRequests] = useState<DonorRequest[]>([]);
  const [bloodRequests, setBloodRequests] = useState<BloodRequest[]>([]);

  useEffect(() => {
    setDonorRequests(storage.getDonorRequests());
    setBloodRequests(storage.getBloodRequests());
  }, []);

  const handleDonorRequestUpdate = (
    id: string,
    status: "approved" | "rejected"
  ) => {
    const updatedRequest = storage.updateDonorRequestStatus(id, status);
    if (updatedRequest) {
      setDonorRequests(storage.getDonorRequests());
    }
  };

  const handleBloodRequestUpdate = (
    id: string,
    status: "fulfilled" | "rejected"
  ) => {
    const updatedRequest = storage.updateBloodRequestStatus(id, status);
    if (updatedRequest) {
      setBloodRequests(storage.getBloodRequests());
    }
  };

  return (
    <div className="pt-5 pl-5">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">Donor Requests</h2>
          {donorRequests.map((request) => (
            <div
              key={request.id}
              className="bg-white shadow-md rounded-lg p-4 mb-4"
            >
              <p>
                <strong>Name:</strong> {request.name}
              </p>
              <p>
                <strong>Blood Type:</strong> {request.bloodType}
              </p>
              <p>
                <strong>Status:</strong> {request.status}
              </p>
              {request.status === "pending" && (
                <div className="mt-2">
                  <button
                    onClick={() =>
                      handleDonorRequestUpdate(request.id, "approved")
                    }
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() =>
                      handleDonorRequestUpdate(request.id, "rejected")
                    }
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Blood Requests</h2>
          {bloodRequests.map((request) => (
            <div
              key={request.id}
              className="bg-white shadow-md rounded-lg p-4 mb-4"
            >
              <p>
                <strong>Name:</strong> {request.name}
              </p>
              <p>
                <strong>Blood Type:</strong> {request.bloodType}
              </p>
              <p>
                <strong>Quantity:</strong> {request.quantity} units
              </p>
              <p>
                <strong>Status:</strong> {request.status}
              </p>
              {request.status === "pending" && (
                <div className="mt-2">
                  <button
                    onClick={() =>
                      handleBloodRequestUpdate(request.id, "fulfilled")
                    }
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Fulfill
                  </button>
                  <button
                    onClick={() =>
                      handleBloodRequestUpdate(request.id, "rejected")
                    }
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
