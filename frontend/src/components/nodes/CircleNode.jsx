import React, { useState, useRef, useEffect } from "react";
import { Handle, Position } from "reactflow";

const CircleNode = ({ id, data }) => {
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
    <div className="w-24 h-24 bg-green-600 border border-green-500 rounded-full text-white text-xs font-medium flex items-center justify-center">
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <div className="text-center" onDoubleClick={handleDoubleClick}>
        {isEditing ? (
          <input
            ref={inputRef}
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            onBlur={handleSubmit}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none outline-none text-center w-16 text-white text-xs placeholder-green-200"
            placeholder="Text..."
          />
        ) : (
          <div className="cursor-pointer">{label}</div>
        )}
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
};

export default CircleNode;
