import { ActionBlueprintGraph } from "../types";

type TemporaryStoredDataPanelProps = {
  graph: ActionBlueprintGraph;
  formValuesByFormId: Record<string, Record<string, string>>;
  submittedFormIds: Record<string, boolean>;
  resolveFormNameByFormId: (graph: ActionBlueprintGraph, formId: string) => string;
};

export function TemporaryStoredDataPanel(props: TemporaryStoredDataPanelProps) {
  const { graph, formValuesByFormId, submittedFormIds, resolveFormNameByFormId } = props;

  return (
    <section className="prefillPanel">
      <h3>Temporary Stored Data</h3>
      {Object.keys(formValuesByFormId).filter((formId) => submittedFormIds[formId]).length === 0 ? (
        <p>No runtime form data captured yet.</p>
      ) : (
        <div className="runtimeTableWrap">
          <table className="runtimeTable">
            <thead>
              <tr>
                <th>Form</th>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(formValuesByFormId)
                .filter(([formId]) => submittedFormIds[formId])
                .flatMap(([formId, values]) => {
                  const rows = Object.entries(values);
                  if (rows.length === 0) {
                    return (
                      <tr key={`${formId}__empty`}>
                        <td>{resolveFormNameByFormId(graph, formId)}</td>
                        <td colSpan={2}>No values captured yet.</td>
                      </tr>
                    );
                  }
                  return rows.map(([fieldKey, value], idx) => (
                    <tr key={`${formId}__${fieldKey}`}>
                      {idx === 0 ? <td rowSpan={rows.length}>{resolveFormNameByFormId(graph, formId)}</td> : null}
                      <td>{fieldKey}</td>
                      <td>{value || "-"}</td>
                    </tr>
                  ));
                })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
