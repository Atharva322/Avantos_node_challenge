import { WorkflowDesign } from "../appTypes";

type WorkflowDesignPanelProps = {
  workflowName: string;
  setWorkflowName: (value: string) => void;
  persistWorkflowDesign: (options?: { asNew?: boolean }) => void;
  startNewWorkflowDesign: () => void;
  activeWorkflowId: string | null;
  savedWorkflows: WorkflowDesign[];
  loadWorkflowDesign: (id: string) => void;
  deleteWorkflowDesign: (id: string) => void;
};

export function WorkflowDesignPanel(props: WorkflowDesignPanelProps) {
  const {
    workflowName,
    setWorkflowName,
    persistWorkflowDesign,
    startNewWorkflowDesign,
    activeWorkflowId,
    savedWorkflows,
    loadWorkflowDesign,
    deleteWorkflowDesign
  } = props;

  return (
    <>
      <h2>Form Workflow Designs</h2>
      <label className="formRow">
        <span>Workflow Name</span>
        <input value={workflowName} onChange={(e) => setWorkflowName(e.target.value)} placeholder="My Workflow Pattern" />
      </label>
      <button className="closeBtn" onClick={() => persistWorkflowDesign()}>
        Save Workflow Design
      </button>
      <button className="clearBtn" onClick={() => persistWorkflowDesign({ asNew: true })}>
        Save As New
      </button>
      <button className="clearBtn" onClick={startNewWorkflowDesign}>
        New Workflow Design
      </button>
      <p className="sourceModeLine">{activeWorkflowId ? `Active Design ID: ${activeWorkflowId}` : "No active saved design loaded."}</p>
      <div className="mappingValue">
        {savedWorkflows.length === 0 ? "No saved workflow designs yet." : ""}
        {savedWorkflows.map((wf) => (
          <div key={wf.id} className="toolbar">
            <span>
              {wf.name} ({new Date(wf.updatedAt ?? wf.createdAt).toLocaleString()})
            </span>
            <button className="closeBtn" onClick={() => loadWorkflowDesign(wf.id)}>
              Load
            </button>
            <button className="clearBtn" onClick={() => deleteWorkflowDesign(wf.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
