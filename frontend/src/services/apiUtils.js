// API Configuration
export const API_CONFIG = {
  BASE_URL:
    import.meta.env.VITE_API_BASE_URL ||
    "https://sketchon-backend.onrender.com/api",
  TIMEOUT: 30000, // 30 seconds
};

// Error handling utility
export class APIError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = "APIError";
    this.status = status;
    this.data = data;
  }
}

// Common API response handler
export const handleAPIResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    throw new APIError(
      data.message || "An error occurred",
      response.status,
      data,
    );
  }

  return data;
};

// Loading state manager for UI
export class LoadingManager {
  constructor() {
    this.loadingStates = new Set();
    this.listeners = [];
  }

  startLoading(key) {
    this.loadingStates.add(key);
    this.notifyListeners();
  }

  stopLoading(key) {
    this.loadingStates.delete(key);
    this.notifyListeners();
  }

  isLoading(key) {
    return this.loadingStates.has(key);
  }

  isAnyLoading() {
    return this.loadingStates.size > 0;
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  notifyListeners() {
    this.listeners.forEach((listener) =>
      listener(Array.from(this.loadingStates)),
    );
  }
}

export const loadingManager = new LoadingManager();
