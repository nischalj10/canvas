import type { OnConnect } from "reactflow";

import { useCallback } from "react";
import {
  Background,
  Controls,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
} from "reactflow";

import "reactflow/dist/style.css";

import { initialNodes, nodeTypes } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";

export enum MarkerType {
  Arrow = 'arrow',
  ArrowClosed = 'arrowclosed',
}

export default function App() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full text-center p-2 z-1 h-4 font-medium">
        BiteSpeed
      </div>
      <div className="flex flex-row w-full flex-grow h-full relative">
        <ReactFlow
          nodes={nodes}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          edges={edges}
          edgeTypes={edgeTypes}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          defaultEdgeOptions={{animated : false, markerEnd: {type: MarkerType.ArrowClosed}}}
          className="w-4/5 h-full"
        >
          <Background />
          <Controls />
        </ReactFlow>
        <div className="w-1/5 bg-gray-100 rounded-md mr-4 mb-4 flex flex-col items-center justify-center border-l-1 border-black">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
            Message Block
          </button>
        </div>
      </div>
    </div>
  );
}
