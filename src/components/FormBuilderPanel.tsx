import { ActionBlueprintGraph, FormField } from "../types";
import { PatternStatus } from "../appTypes";
import { SOURCE_MODE, SourceTab } from "../sourceCatalog";

type FormBuilderPanelProps = {
  graph: ActionBlueprintGraph;
  selectedFormId: string | null;
  setSelectedFormId: (id: string) => void;
  deleteSelectedForm: () => void;
  patternStatus: PatternStatus;
  selectedFormEditName: string;
  setSelectedFormEditName: (value: string) => void;
  updateSelectedFormName: () => void;
  newFormName: string;
  setNewFormName: (value: string) => void;
  objectSearch: string;
  setObjectSearch: (value: string) => void;
  selectedObjectId: string;
  setSelectedObjectId: (value: string) => void;
  filteredTabs: SourceTab[];
  selectedTab: SourceTab | null;
  selectedObjectFieldKeys: string[];
  setSelectedObjectFieldKeys: (updater: string[] | ((prev: string[]) => string[])) => void;
  addSelectedObjectFieldsToDraft: () => void;
  draftFields: FormField[];
  removeDraftField: (key: string) => void;
  addDraftFieldsToSelectedForm: () => void;
  createForm: () => void;
};

export function FormBuilderPanel(props: FormBuilderPanelProps) {
  const {
    graph,
    selectedFormId,
    setSelectedFormId,
    deleteSelectedForm,
    patternStatus,
    selectedFormEditName,
    setSelectedFormEditName,
    updateSelectedFormName,
    newFormName,
    setNewFormName,
    objectSearch,
    setObjectSearch,
    selectedObjectId,
    setSelectedObjectId,
    filteredTabs,
    selectedTab,
    selectedObjectFieldKeys,
    setSelectedObjectFieldKeys,
    addSelectedObjectFieldsToDraft,
    draftFields,
    removeDraftField,
    addDraftFieldsToSelectedForm,
    createForm
  } = props;

  return (
    <>
      <h2>Forms</h2>
      {graph.forms.map((form) => (
        <button key={form.id} className={selectedFormId === form.id ? "row selected" : "row"} onClick={() => setSelectedFormId(form.id)}>
          {form.name}
        </button>
      ))}
      <button className="clearBtn" onClick={deleteSelectedForm} disabled={!selectedFormId || patternStatus === "saved"}>
        Delete Selected Form
      </button>

      <h3>Edit Selected Form</h3>
      <label className="formRow">
        <span>Form Name</span>
        <input value={selectedFormEditName} onChange={(e) => setSelectedFormEditName(e.target.value)} placeholder="Edit selected form name" />
      </label>
      <button className="closeBtn" onClick={updateSelectedFormName} disabled={!selectedFormId || patternStatus === "saved"}>
        Update Form Name
      </button>

      <h3>Create Form</h3>
      <p className="sourceModeLine">Source Mode: {SOURCE_MODE}</p>
      <label className="formRow">
        <span>Form Name</span>
        <input value={newFormName} onChange={(e) => setNewFormName(e.target.value)} placeholder="Form E" />
      </label>
      <label className="formRow">
        <span>Find Source Tab</span>
        <input value={objectSearch} onChange={(e) => setObjectSearch(e.target.value)} placeholder="Search schemas/operations..." />
      </label>
      <label className="formRow">
        <span>Source Object</span>
        <select value={selectedObjectId} onChange={(e) => setSelectedObjectId(e.target.value)}>
          {filteredTabs.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      {selectedTab?.warning ? <p className="warnLine">{selectedTab.warning}</p> : null}
      <div className="toolbar">
        <button
          className="closeBtn"
          onClick={() => {
            const all = (selectedTab?.fields ?? []).map((field) => field.key);
            setSelectedObjectFieldKeys(all);
          }}
        >
          Select All
        </button>
        <button className="clearBtn" onClick={() => setSelectedObjectFieldKeys([])}>
          Clear Selection
        </button>
      </div>
      <div className="mappingValue sourceFieldList">
        {(selectedTab?.fields ?? []).map((field) => (
          <label key={field.key} className="checkRow">
            <input
              type="checkbox"
              checked={selectedObjectFieldKeys.includes(field.key)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedObjectFieldKeys((prev) => [...prev, field.key]);
                } else {
                  setSelectedObjectFieldKeys((prev) => prev.filter((key) => key !== field.key));
                }
              }}
            />
            {field.label} [{field.type}]
          </label>
        ))}
      </div>
      <button className="closeBtn" onClick={addSelectedObjectFieldsToDraft} disabled={patternStatus === "saved"}>
        Add Selected Fields
      </button>
      <div className="mappingValue draftFieldList">{draftFields.length === 0 ? "No fields selected yet." : draftFields.map((field) => `${field.key}:${field.type}`).join("\n")}</div>
      {draftFields.map((field) => (
        <button key={field.key} className="clearBtn" onClick={() => removeDraftField(field.key)} disabled={patternStatus === "saved"}>
          Remove {field.key}
        </button>
      ))}
      <button className="closeBtn" onClick={addDraftFieldsToSelectedForm} disabled={!selectedFormId || draftFields.length === 0 || patternStatus === "saved"}>
        Add Draft Fields To Selected Form
      </button>
      <button className="closeBtn" onClick={createForm} disabled={patternStatus === "saved"}>
        Add Form
      </button>
    </>
  );
}
