import { ActionBlueprintGraph } from "../types";

type DesignWhiteboardProps = {
  graph: ActionBlueprintGraph;
  selectedFormId: string | null;
  setSelectedFormId: (id: string) => void;
};

export function DesignWhiteboard({ graph, selectedFormId, setSelectedFormId }: DesignWhiteboardProps) {
  return (
    <>
      <h2>Design Whiteboard</h2>
      {graph.forms.length === 0 ? (
        <p>No forms yet. Create your first form on the left.</p>
      ) : (
        <div className="whiteboardGrid">
          {graph.forms.map((form) => (
            <button key={form.id} className={selectedFormId === form.id ? "row selected" : "row"} onClick={() => setSelectedFormId(form.id)}>
              <strong>{form.name}</strong>
            </button>
          ))}
        </div>
      )}
    </>
  );
}
