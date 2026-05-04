import { ActionBlueprintGraph } from "../types";
import { PatternStatus } from "../appTypes";

type FormLinkingPanelProps = {
  graph: ActionBlueprintGraph;
  linkSourceFormId: string;
  setLinkSourceFormId: (value: string) => void;
  linkTargetFormId: string;
  setLinkTargetFormId: (value: string) => void;
  createLink: () => void;
  removeLink: (sourceFormId: string, targetFormId: string) => void;
  patternStatus: PatternStatus;
};

export function FormLinkingPanel(props: FormLinkingPanelProps) {
  const { graph, linkSourceFormId, setLinkSourceFormId, linkTargetFormId, setLinkTargetFormId, createLink, removeLink, patternStatus } = props;

  return (
    <>
      <h3>Link Forms</h3>
      <label className="formRow">
        <span>Source (Parent)</span>
        <select value={linkSourceFormId} onChange={(e) => setLinkSourceFormId(e.target.value)}>
          <option value="">Select form</option>
          {graph.forms.map((form) => (
            <option key={form.id} value={form.id}>
              {form.name}
            </option>
          ))}
        </select>
      </label>
      <label className="formRow">
        <span>Target (Child)</span>
        <select value={linkTargetFormId} onChange={(e) => setLinkTargetFormId(e.target.value)}>
          <option value="">Select form</option>
          {graph.forms.map((form) => (
            <option key={form.id} value={form.id}>
              {form.name}
            </option>
          ))}
        </select>
      </label>
      <button className="closeBtn" onClick={createLink} disabled={patternStatus === "saved"}>
        Add Link
      </button>
      <button className="clearBtn" onClick={() => removeLink(linkSourceFormId, linkTargetFormId)} disabled={patternStatus === "saved" || !linkSourceFormId || !linkTargetFormId}>
        Delete Selected Link
      </button>
    </>
  );
}
