import type { Node, NodeTypes } from "reactflow";
import { TextNode } from "./TextNode";

export const initialNodes = [
  { id: "1", type: "default", position: { x: 0, y: 0 }, data: { label: "wire" } },
  { id: "2", type: "default", position: { x: 100, y: 100 }, data: { label: "your ideas" } },
  { id: "3", type: "default", position: { x: 500, y: 100 }, data: { label: "my ideas" } },
] satisfies Node[];

export const nodeTypes = {
  // custom node types
  "text-node" : TextNode,
} satisfies NodeTypes;