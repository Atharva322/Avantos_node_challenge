import { ActionBlueprintGraph } from "../types";
import { PatternStatus } from "../appTypes";

type CurrentRelationshipsProps = {
  graph: ActionBlueprintGraph;
  patternStatus: PatternStatus;
  removeLink: (sourceFormId: string, targetFormId: string) => void;
  resolveFormNameByNodeId: (graph: ActionBlueprintGraph, nodeId: string) => string;
  getFormIdByNodeId: (graph: ActionBlueprintGraph, nodeId: string) => string | null;
};

export function CurrentRelationships(props: CurrentRelationshipsProps) {
  const { graph, patternStatus, removeLink, resolveFormNameByNodeId, getFormIdByNodeId } = props;

  return (
    <>
      <h3>Current Relations</h3>
      <div className="mappingValue">
        {graph.edges.length === 0
          ? "No links yet."
          : graph.edges.map((edge) => {
              const sourceName = resolveFormNameByNodeId(graph, edge.source);
              const targetName = resolveFormNameByNodeId(graph, edge.target);
              const sourceFormId = getFormIdByNodeId(graph, edge.source);
              const targetFormId = getFormIdByNodeId(graph, edge.target);
              return (
                <div key={`${edge.source}:${edge.target}`} className="toolbar">
                  <span>
                    {sourceName} {"->"} {targetName}
                  </span>
                  <button
                    className="clearBtn"
                    onClick={() => sourceFormId && targetFormId && removeLink(sourceFormId, targetFormId)}
                    disabled={patternStatus === "saved"}
                  >
                    Delete Link
                  </button>
                </div>
              );
            })}
      </div>
    </>
  );
}
