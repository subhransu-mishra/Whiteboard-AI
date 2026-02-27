import React, { useState, useRef, useEffect } from "react";
import { Handle, Position } from "reactflow";

const TextNode = ({ id, data }) => {
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
    <div className="px-3 py-2 bg-neutral-800 border border-white/20 rounded text-white text-sm font-medium min-w-[100px] text-center">
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      <div onDoubleClick={handleDoubleClick}>
        {isEditing ? (
          <input
            ref={inputRef}
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            onBlur={handleSubmit}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none outline-none text-center w-full text-white placeholder-neutral-400"
            placeholder="Enter text..."
          />
        ) : (
          <div className="cursor-pointer">{label}</div>
        )}
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  );
};

export default TextNode;
