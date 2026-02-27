import React from "react";

const Sidebar = () => {
  const symbols = [
    { id: "rectangle", type: "rectangle", label: "Rectangle", icon: "⬜" },
    { id: "circle", type: "circle", label: "Circle", icon: "⚪" },
    { id: "diamond", type: "diamond", label: "Diamond", icon: "♦️" },
    { id: "textNode", type: "textNode", label: "Text Box", icon: "📝" },
  ];

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="w-64 bg-neutral-900 border-r border-white/10 p-4">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white mb-4">Components</h2>
        <div className="space-y-2">
          {symbols.map((symbol) => (
            <div
              key={symbol.id}
              className="flex items-center gap-3 p-3 bg-neutral-800 rounded-lg border border-white/10 cursor-grab hover:bg-neutral-700 transition-colors"
              draggable
              onDragStart={(event) => onDragStart(event, symbol.type)}
            >
              <span className="text-xl">{symbol.icon}</span>
              <span className="text-sm font-medium text-white/80">
                {symbol.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
