import React, { useState, useEffect, useCallback, useRef } from "react";
import { useUser } from "@clerk/clerk-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  IoCloseOutline as XMarkIcon,
  IoDocumentTextOutline as DocumentTextIcon,
} from "react-icons/io5";
import Sidebar from "./Sidebar";
import CanvasSurface from "../../components/CanvasSurface";

const CanvasPage = () => {
  const { isSignedIn, user } = useUser();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [showTitleModal, setShowTitleModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [projectData, setProjectData] = useState({ nodes: [], edges: [] });
  const isUpdatingFromParent = useRef(false);

  // Modal states
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const isNewProject = searchParams.get("new") === "true";
  const projectId = searchParams.get("project");

  useEffect(() => {
    if (isSignedIn && user) {
      if (isNewProject) {
        setShowTitleModal(true);
      } else if (projectId) {
        loadExistingProject(projectId);
      } else {
        // Redirect to dashboard if no project specified
        navigate("/dashboard");
      }
    }
  }, [isSignedIn, user, isNewProject, projectId, navigate]);

  const loadExistingProject = (id) => {
    const userProjects = JSON.parse(
      localStorage.getItem(`projects_${user.id}`) || "[]",
    );
    const project = userProjects.find((p) => p.id === id);

    if (project) {
      setCurrentProject(project);
      isUpdatingFromParent.current = true;
      setProjectData(project.data || { nodes: [], edges: [] });
      // Reset the flag after a short delay to allow the update to complete
      setTimeout(() => {
        isUpdatingFromParent.current = false;
      }, 100);
    } else {
      // Project not found, redirect to dashboard
      navigate("/dashboard");
    }
  };

  // Modal handlers
  const handleModalSave = () => {
    if (!title.trim()) {
      setError("Project title is required");
      return;
    }

    if (title.trim().length < 3) {
      setError("Project title must be at least 3 characters long");
      return;
    }

    handleSaveProjectTitle(title.trim());
    setTitle("");
    setError("");
  };

  const handleModalClose = () => {
    setTitle("");
    setError("");
    setShowTitleModal(false);
    navigate("/dashboard");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleModalSave();
    }
  };

  const handleSaveProjectTitle = (projectTitle) => {
    const newProject = {
      id: `project_${Date.now()}`,
      title: projectTitle,
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString(),
      data: { nodes: [], edges: [] },
      nodeCount: 0,
      edgeCount: 0,
    };

    const userProjects = JSON.parse(
      localStorage.getItem(`projects_${user.id}`) || "[]",
    );
    userProjects.push(newProject);
    localStorage.setItem(`projects_${user.id}`, JSON.stringify(userProjects));

    setCurrentProject(newProject);
    isUpdatingFromParent.current = true;
    setProjectData(newProject.data);
    setShowTitleModal(false);

    // Reset the flag after a short delay
    setTimeout(() => {
      isUpdatingFromParent.current = false;
    }, 100);

    // Update URL without the 'new' parameter
    const newUrl = `/canvas?project=${newProject.id}`;
    window.history.replaceState({}, "", newUrl);
  };

  const handleProjectDataChange = useCallback(
    (nodes, edges) => {
      // Prevent circular updates
      if (isUpdatingFromParent.current) {
        return;
      }

      const updatedData = { nodes, edges };
      setProjectData(updatedData);

      // Save to localStorage
      if (currentProject && user) {
        const userProjects = JSON.parse(
          localStorage.getItem(`projects_${user.id}`) || "[]",
        );
        const projectIndex = userProjects.findIndex(
          (p) => p.id === currentProject.id,
        );

        if (projectIndex !== -1) {
          userProjects[projectIndex] = {
            ...userProjects[projectIndex],
            data: updatedData,
            lastModified: new Date().toISOString(),
            nodeCount: nodes.length,
            edgeCount: edges.length,
          };
          localStorage.setItem(
            `projects_${user.id}`,
            JSON.stringify(userProjects),
          );

          // Update current project state
          setCurrentProject(userProjects[projectIndex]);
        }
      }
    },
    [currentProject, user],
  );

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
    <>
      <div className="h-screen bg-neutral-950 text-white flex">
        <Sidebar currentProject={currentProject} />
        <CanvasSurface
          projectData={projectData}
          onDataChange={handleProjectDataChange}
        />
      </div>

      {/* Project Title Modal */}
      {showTitleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleModalClose}
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
                  <h2 className="text-lg font-semibold text-white">
                    New Project
                  </h2>
                  <p className="text-sm text-white/60">
                    Give your whiteboard a name
                  </p>
                </div>
              </div>
              <button
                onClick={handleModalClose}
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
                  💡 <strong>Tip:</strong> Choose a descriptive name that helps
                  you identify this project later.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-white/10">
              <button
                onClick={handleModalClose}
                className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleModalSave}
                disabled={!title.trim()}
                className="px-6 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Create Project
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CanvasPage;
