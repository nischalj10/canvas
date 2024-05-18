import type { Node, NodeTypes } from "reactflow";
import { TextNode } from "./TextNode";

export const initialNodes = [
  { id: "a", type: "default", position: { x: 0, y: 0 }, data: { label: "wire" } },
  { id: "b", type: "default", position: { x: 100, y: 100 }, data: { label: "your ideas" } },
  { id: "c", type: "default", position: { x: 500, y: 100 }, data: { label: "my ideas" } },
] satisfies Node[];

export const nodeTypes = {
  // custom node types
  "text-node" : TextNode,
} satisfies NodeTypes;