import React, { useState } from "react";
import {
  IoCloseOutline as XMarkIcon,
  IoDocumentTextOutline as DocumentTextIcon,
} from "react-icons/io5";

const ProjectTitleModal = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSave = () => {
    if (!title.trim()) {
      setError("Project title is required");
      return;
    }

    if (title.trim().length < 3) {
      setError("Project title must be at least 3 characters long");
      return;
    }

    onSave(title.trim());
    setTitle("");
    setError("");
  };

  const handleClose = () => {
    setTitle("");
    setError("");
    onClose();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-4 bg-neutral-900 border border-white/10 rounded-xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <DocumentTextIcon className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">New Project</h2>
              <p className="text-sm text-white/60">
                Give your whiteboard a name
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-white/10 rounded-lg transition-colors"
          >
            <XMarkIcon className="h-5 w-5 text-white/60" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <label
              htmlFor="project-title"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Project Title
            </label>
            <input
              id="project-title"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (error) setError("");
              }}
              onKeyPress={handleKeyPress}
              placeholder="Enter your project title..."
              className="w-full px-4 py-3 bg-neutral-800 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-colors"
              autoFocus
            />
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
          </div>

          <div className="text-xs text-white/50 bg-white/5 border border-white/10 rounded-lg p-3">
            <p>
              💡 <strong>Tip:</strong> Choose a descriptive name that helps you
              identify this project later.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-white/10">
          <button
            onClick={handleClose}
            className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!title.trim()}
            className="px-6 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectTitleModal;
