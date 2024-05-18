import type { Edge, EdgeTypes } from "reactflow";
import { DefaultEdge } from "./DefaultEdge";

export enum MarkerType {
  Arrow = 'arrow',
  ArrowClosed = 'arrowclosed',
}

export const edgeTypes = {
  // custom edge types if needed
} satisfies EdgeTypes;

export const initialEdges = [
  { id: "a->b", source: "a", target: "b", animated: false, markerEnd: {type: MarkerType.ArrowClosed}},
] satisfies Edge[];