import { useAuth } from "@clerk/clerk-react";

const API_BASE_URL = "http://localhost:4000/api";

class DiagramService {
  constructor() {
    this.getAuthToken = null;
  }

  // Set the auth token getter function
  setAuthProvider(getAuthToken) {
    this.getAuthToken = getAuthToken;
  }

  // Get all diagrams for the authenticated user
  async getAllDiagrams() {
    try {
      const token = await this.getAuthToken();
      const response = await fetch(`${API_BASE_URL}/diagrams`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch diagrams");
      }

      return data;
    } catch (error) {
      console.error("Error fetching diagrams:", error);
      throw error;
    }
  }

  // Get a single diagram by ID
  async getDiagram(diagramId) {
    try {
      const token = await this.getAuthToken();
      const response = await fetch(`${API_BASE_URL}/diagrams/${diagramId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch diagram");
      }

      return data;
    } catch (error) {
      console.error("Error fetching diagram:", error);
      throw error;
    }
  }

  // Create a new diagram
  async createDiagram(diagramData) {
    try {
      const token = await this.getAuthToken();
      const response = await fetch(`${API_BASE_URL}/diagrams`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(diagramData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to create diagram");
      }

      return data;
    } catch (error) {
      console.error("Error creating diagram:", error);
      throw error;
    }
  }

  // Update/Save a diagram
  async saveDiagram(diagramId, updateData) {
    try {
      const token = await this.getAuthToken();
      const response = await fetch(`${API_BASE_URL}/diagrams/${diagramId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to save diagram");
      }

      return data;
    } catch (error) {
      console.error("Error saving diagram:", error);
      throw error;
    }
  }

  // Delete a diagram
  async deleteDiagram(diagramId) {
    try {
      const token = await this.getAuthToken();
      const response = await fetch(`${API_BASE_URL}/diagrams/${diagramId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to delete diagram");
      }

      return data;
    } catch (error) {
      console.error("Error deleting diagram:", error);
      throw error;
    }
  }
}

// Create a singleton instance
const diagramService = new DiagramService();

// Hook to initialize the service with auth
export const useDiagramService = () => {
  const { getToken } = useAuth();

  // Initialize the service with the auth token getter
  if (!diagramService.getAuthToken) {
    diagramService.setAuthProvider(getToken);
  }

  return diagramService;
};

export default diagramService;
