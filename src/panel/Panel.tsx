import { useState, useEffect } from "react";

export default function Panel({editMode, setEditMode, selectedNode, updateNodeLabel} : any) {
    const [label, setLabel] = useState("");

    useEffect(() => {
        if (selectedNode) {
          setLabel(selectedNode.data.label);
        }
      }, [selectedNode]);

    const handleLabelChange = (e:any) => {
        setLabel(e.target.value);
    };

    const handleSubmit = () => {
        updateNodeLabel(selectedNode.id, label);
        setEditMode(false);
    };

    const onDragStart = (event: any, nodeType: any) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

  return (
    <div className="w-1/5 bg-gray-100 rounded-md mr-4 mb-4 flex flex-col items-center justify-center border-l-1 border-black">
      {!editMode && 
        <div className="flex flex-col items-center justify-center">
            <p className="mb-3">Drag & Drop Nodes</p>
            <div className="h-30 w-50 rounded-lg bg-white border p-3" onDragStart={(event) => onDragStart(event, 'default')} draggable>
                Message
            </div>
      </div>      
      }
      {editMode && 
        <div>
        {selectedNode && (
          <div className="flex flex-col items-center justify-center">
            <input value={label} onChange={handleLabelChange} className="p-1.5 rounded-md m-2 text-center"/>
            <button onClick={handleSubmit} className="m-2 p-2 bg-black text-white rounded-md">Update Label</button>
          </div>
        )}
      </div>
      }
    </div>
  );
}