import React, { useState, useRef, useEffect } from "react";
import { Handle, Position } from "reactflow";

const DiamondNode = ({ id, data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [label, setLabel] = useState(data.label);
  const inputRef = useRef();

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = () => {
    setIsEditing(false);
    if (data.onLabelChange) {
      data.onLabelChange(id, label);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    } else if (e.key === "Escape") {
      setLabel(data.label);
      setIsEditing(false);
    }
  };

  return (
    <div className="relative">
      <Handle type="target" position={Position.Top} className="w-3 h-3 z-10" />
      <div className="w-16 h-16 bg-purple-600 border border-purple-500 transform rotate-45 flex items-center justify-center">
        <div
          className="transform -rotate-45 text-white text-xs font-medium text-center"
          onDoubleClick={handleDoubleClick}
        >
          {isEditing ? (
            <input
              ref={inputRef}
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              onBlur={handleSubmit}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-center w-10 text-white text-xs placeholder-purple-200"
              placeholder="Text"
            />
          ) : (
            <div className="cursor-pointer">{label.split(" ")[0]}</div>
          )}
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 z-10"
      />
    </div>
  );
};

export default DiamondNode;
