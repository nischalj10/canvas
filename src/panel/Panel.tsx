export default function Panel() {
    
    const onDragStart = (event: any, nodeType: any) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

  return (
    <div className="w-1/5 bg-gray-100 rounded-md mr-4 mb-4 flex flex-col items-center justify-center border-l-1 border-black">
      <aside>
        <div className="h-30 w-50 rounded-lg bg-white border p-3" onDragStart={(event) => onDragStart(event, 'default')} draggable>
            Message Node
        </div>
      </aside>
    </div>
  );
}