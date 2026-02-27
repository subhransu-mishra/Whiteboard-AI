import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import {
  IoAddCircleOutline as PlusCircleIcon,
  IoDocumentTextOutline as DocumentIcon,
  IoTimeOutline as ClockIcon,
  IoEllipsisVertical as EllipsisVerticalIcon,
  IoTrashOutline as TrashIcon,
  IoPencilOutline as PencilIcon,
} from "react-icons/io5";

const Dashboard = () => {
  const { isSignedIn, user } = useUser();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);

  // Load projects from localStorage on component mount
  useEffect(() => {
    const loadProjects = () => {
      if (isSignedIn && user) {
        const userProjects = JSON.parse(
          localStorage.getItem(`projects_${user.id}`) || "[]",
        );
        setProjects(userProjects);
      }
    };

    loadProjects();
  }, [isSignedIn, user]);

  const handleNewProject = () => {
    navigate("/canvas?new=true");
  };

  const handleOpenProject = (projectId) => {
    navigate(`/canvas?project=${projectId}`);
  };

  const handleDeleteProject = (projectId) => {
    const updatedProjects = projects.filter(
      (project) => project.id !== projectId,
    );
    setProjects(updatedProjects);
    localStorage.setItem(
      `projects_${user.id}`,
      JSON.stringify(updatedProjects),
    );
    setShowDeleteConfirm(null);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white antialiased flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Access Restricted</h2>
          <p className="text-white/70">
            Please sign in to access your dashboard.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      {/* Header */}
      <header className="border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div
              className="h-9 w-12 rounded-lg "
              aria-hidden="true"
            />
            <img
              src="/logo.png"
              alt="Sketch On Logo"
              className="h-9 w-10 rounded-lg"
            />
            <div>
              <p className="text-xl font-semibold">Sketch On</p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Dashboard
              </p>
            </div>
          </div>
          <Link
            to="/"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mb-2">
            Welcome back, {user?.firstName || user?.username || "User"}! 👋
          </h1>
          <p className="text-white/60">
            Continue working on your projects or start a new one.
          </p>
        </div>

        {/* New Project Button */}
        <div className="mb-8">
          <button
            onClick={handleNewProject}
            className="inline-flex items-center gap-3 rounded-xl border border-dashed border-white/20 bg-white/5 px-6 py-4 text-left transition hover:border-white/40 hover:bg-white/10"
          >
            <PlusCircleIcon className="h-8 w-8 text-blue-400" />
            <div>
              <p className="font-semibold text-white">Start a new project</p>
              <p className="text-sm text-white/60">
                Create a new whiteboard canvas
              </p>
            </div>
          </button>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <DocumentIcon className="h-5 w-5" />
              Your Projects ({projects.length})
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-white/20 hover:bg-white/10"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-white/50 mt-1">
                        <ClockIcon className="h-3 w-3" />
                        {formatDate(project.lastModified)}
                      </div>
                    </div>

                    {/* Dropdown Menu */}
                    <div className="relative">
                      <button
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-white/10 rounded"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDeleteConfirm(
                            showDeleteConfirm === project.id
                              ? null
                              : project.id,
                          );
                        }}
                      >
                        <EllipsisVerticalIcon className="h-4 w-4" />
                      </button>

                      {showDeleteConfirm === project.id && (
                        <div className="absolute right-0 top-8 z-10 rounded-lg border border-white/20 bg-neutral-800 p-2 shadow-xl">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteProject(project.id);
                            }}
                            className="flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-red-400/10 rounded transition-colors"
                          >
                            <TrashIcon className="h-4 w-4" />
                            Delete Project
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-sm text-white/60">
                      {project.nodeCount || 0} nodes • {project.edgeCount || 0}{" "}
                      connections
                    </p>
                  </div>

                  <button
                    onClick={() => handleOpenProject(project.id)}
                    className="w-full rounded-lg border border-white/15 bg-white/5 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
                  >
                    Open Project
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <DocumentIcon className="h-16 w-16 text-white/20 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white/80 mb-2">
              No projects yet
            </h3>
            <p className="text-white/50 mb-6">
              Start your first whiteboard project to get started.
            </p>
            <button
              onClick={handleNewProject}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white text-neutral-950 px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              <PlusCircleIcon className="h-4 w-4" />
              Create Your First Project
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
