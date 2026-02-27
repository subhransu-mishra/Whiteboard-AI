import React, { useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";

import RectangleNode from "./nodes/RectangleNode";
import CircleNode from "./nodes/CircleNode";
import DiamondNode from "./nodes/DiamondNode";
import TextNode from "./nodes/TextNode";

const nodeTypes = {
  rectangle: RectangleNode,
  circle: CircleNode,
  diamond: DiamondNode,
  textNode: TextNode,
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const CanvasSurface = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onNodeLabelChange = useCallback(
    (nodeId, newLabel) => {
      setNodes((nds) =>
        nds.map((node) =>
          node.id === nodeId
            ? { ...node, data: { ...node.data, label: newLabel } }
            : node,
        ),
      );
    },
    [setNodes],
  );

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = event.currentTarget.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = {
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      };

      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node`, onLabelChange: onNodeLabelChange },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [setNodes, onNodeLabelChange],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <div className="flex-1 h-full">
      <ReactFlow
        nodes={nodes.map((node) => ({
          ...node,
          data: { ...node.data, onLabelChange: onNodeLabelChange },
        }))}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        fitView
        className="bg-neutral-950"
      >
        <Controls className="bg-neutral-800 border border-white/10" />
        <Background color="#404040" />
      </ReactFlow>
    </div>
  );
};

export default CanvasSurface;
