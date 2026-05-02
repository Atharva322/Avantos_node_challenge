import { ActionBlueprintGraph, PrefillCandidate } from "./types";
import { buildGraphContext, extractFormFields, getDirectUpstreamNodeIds, getTransitiveUpstreamNodeIds } from "./graph";

export type SourceProvider = {
  id: string;
  listCandidates: (graph: ActionBlueprintGraph, targetFormId: string) => PrefillCandidate[];
};

export const directFormProvider: SourceProvider = {
  id: "direct-forms",
  listCandidates(graph, targetFormId) {
    const ctx = buildGraphContext(graph);
    const targetNodeId = ctx.nodeIdByFormId[targetFormId];
    if (!targetNodeId) return [];
    return getDirectUpstreamNodeIds(targetNodeId, ctx).flatMap((nodeId) => {
      const sourceFormId = ctx.formIdByNodeId[nodeId];
      const sourceForm = sourceFormId ? ctx.formById[sourceFormId] : undefined;
      if (!sourceForm) return [];
      return extractFormFields(sourceForm).map((f) => ({
        id: `direct:${nodeId}:${f.key}`,
        kind: "direct_form",
        groupLabel: "Direct Upstream Form Fields",
        label: `${sourceForm.name} -> ${f.label}`,
        sourceRef: {
          component_key: nodeId,
          output_key: f.key,
          type: f.type,
          is_metadata: false
        }
      }));
    });
  }
};

export const transitiveFormProvider: SourceProvider = {
  id: "transitive-forms",
  listCandidates(graph, targetFormId) {
    const ctx = buildGraphContext(graph);
    const targetNodeId = ctx.nodeIdByFormId[targetFormId];
    if (!targetNodeId) return [];
    const direct = new Set(getDirectUpstreamNodeIds(targetNodeId, ctx));
    return getTransitiveUpstreamNodeIds(targetNodeId, ctx)
      .filter((nodeId) => !direct.has(nodeId))
      .flatMap((nodeId) => {
        const sourceFormId = ctx.formIdByNodeId[nodeId];
        const sourceForm = sourceFormId ? ctx.formById[sourceFormId] : undefined;
        if (!sourceForm) return [];
        return extractFormFields(sourceForm).map((f) => ({
          id: `transitive:${nodeId}:${f.key}`,
          kind: "transitive_form",
          groupLabel: "Transitive Upstream Form Fields",
          label: `${sourceForm.name} -> ${f.label}`,
          sourceRef: {
            component_key: nodeId,
            output_key: f.key,
            type: f.type,
            is_metadata: false
          }
        }));
      });
  }
};

const accountFinancialGlobalFields = [
  "account_number",
  "balance",
  "cash_balance",
  "currency_code",
  "custodian",
  "status",
  "tax_status",
  "client_organisation_id"
];

export const globalProvider: SourceProvider = {
  id: "global-account-financial",
  listCandidates() {
    return accountFinancialGlobalFields.map((field) => ({
      id: `global:${field}`,
      kind: "global",
      groupLabel: "Global Data Fields (AccountFinancial)",
      label: `AccountFinancial.${field}`,
      sourceRef: {
        kind: "global",
        namespace: "AccountFinancial",
        path: field
      }
    }));
  }
};

export const providers: SourceProvider[] = [directFormProvider, transitiveFormProvider, globalProvider];
