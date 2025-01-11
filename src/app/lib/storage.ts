// this is lin/storage.ts
export interface DonorRequest {
  id: string;
  name: string;
  address: string;
  bloodType: string;
  rarity: string;
  status: "pending" | "approved" | "rejected";
}

export interface BloodRequest {
  id: string;
  name: string;
  bloodType: string;
  quantity: number;
  status: "pending" | "fulfilled" | "rejected";
}

class Storage {
  private donorRequests: DonorRequest[] = [];
  private bloodRequests: BloodRequest[] = [];

  addDonorRequest(request: Omit<DonorRequest, "id" | "status">): DonorRequest {
    const newRequest: DonorRequest = {
      ...request,
      id: Date.now().toString(),
      status: "pending",
    };
    this.donorRequests.push(newRequest);
    return newRequest;
  }

  addBloodRequest(request: Omit<BloodRequest, "id" | "status">): BloodRequest {
    const newRequest: BloodRequest = {
      ...request,
      id: Date.now().toString(),
      status: "pending",
    };
    this.bloodRequests.push(newRequest);
    return newRequest;
  }

  getDonorRequests(): DonorRequest[] {
    return this.donorRequests;
  }

  getBloodRequests(): BloodRequest[] {
    return this.bloodRequests;
  }

  updateDonorRequestStatus(
    id: string,
    status: "approved" | "rejected"
  ): DonorRequest | null {
    const request = this.donorRequests.find((r) => r.id === id);
    if (request) {
      request.status = status;
      return request;
    }
    return null;
  }

  updateBloodRequestStatus(
    id: string,
    status: "fulfilled" | "rejected"
  ): BloodRequest | null {
    const request = this.bloodRequests.find((r) => r.id === id);
    if (request) {
      request.status = status;
      return request;
    }
    return null;
  }
}

export const storage = new Storage();
