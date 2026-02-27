import React from "react";
import { useUser } from "@clerk/clerk-react";
import Sidebar from "./Sidebar";
import CanvasSurface from "../../components/CanvasSurface";

const CanvasPage = () => {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white antialiased flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Access Restricted</h2>
          <p className="text-white/70">Please sign in to access the canvas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-neutral-950 text-white flex">
      <Sidebar />
      <CanvasSurface />
    </div>
  );
};

export default CanvasPage;
