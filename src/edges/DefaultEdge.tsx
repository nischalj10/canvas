import type { EdgeProps } from "reactflow";

export enum MarkerType {
    Arrow = 'arrow',
    ArrowClosed = 'arrowclosed',
}

export type DefaultEdgeSettings = {
    id?: String;
    source?: String;
    destination?: String;
    animated: false;
    markerEnd: {type: MarkerType.ArrowClosed}
}

export function DefaultEdge({ data
}: EdgeProps<DefaultEdgeSettings>) {
    
}
