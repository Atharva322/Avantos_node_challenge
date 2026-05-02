# General Response Examples

### GET /api/v1/admin/widget-definitions - widget-definitions-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/WidgetDefinitionListOutputBody.json",
      "definitions": [
        {
          "$schema": "https://example.com/schemas/WidgetDefinitionOutput.json",
          "configSchema": {
            "key": {}
          },
          "createdAt": "2024-01-01T00:00:00Z",
          "defaultConfig": {
            "key": {}
          },
          "defaultHeight": 2,
          "defaultWidth": 2,
          "description": "Shows upcoming meetings",
          "displayName": "Meetings Widget",
          "id": "wdef_123",
          "maxHeight": 4,
          "maxWidth": 4,
          "minHeight": 1,
          "minWidth": 1,
          "name": "meetings",
          "updatedAt": "2024-01-01T00:00:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/admin/widget-definitions - widget-definition-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/WidgetDefinitionCreateOutputBody.json",
      "id": "wdef_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/admin/widget-definitions/{definition_id} - widget-definition-delete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/WidgetDefinitionDeleteOutputBody.json",
      "message": "Widget definition deleted successfully"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/admin/widget-definitions/{definition_id} - widget-definition-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/WidgetDefinitionOutput.json",
      "configSchema": {
        "key": {}
      },
      "createdAt": "2024-01-01T00:00:00Z",
      "defaultConfig": {
        "key": {}
      },
      "defaultHeight": 2,
      "defaultWidth": 2,
      "description": "Shows upcoming meetings",
      "displayName": "Meetings Widget",
      "id": "wdef_123",
      "maxHeight": 4,
      "maxWidth": 4,
      "minHeight": 1,
      "minWidth": 1,
      "name": "meetings",
      "updatedAt": "2024-01-01T00:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/admin/widget-definitions/{definition_id} - widget-definition-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/WidgetDefinitionUpdateOutputBody.json",
      "message": "Widget definition updated successfully"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/abac/explain - abac-access-explainer

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ABACExplainerOutputBody.json",
      "abac_disabled": true,
      "client_org_properties": {
        "key": {}
      },
      "combined_expression": "string",
      "has_access": true,
      "policy_evaluations": [
        {
          "effect": "string",
          "explanation": "string",
          "expression": "string",
          "matched": true,
          "policy_name": "string"
        }
      ],
      "reason": "string",
      "user_context": {
        "additional_attributes": {
          "key": "string"
        },
        "agent_id": "string",
        "email": "string",
        "external_id": "string",
        "role": "string"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs - action-run-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/blueprint-version-reassign - action-run-blueprint-version-reassign-bulk

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunBulkBlueprintVersionReassignResponseBody.json",
      "failed_runs": {
        "key": {
          "component_errors": [
            {
              "component_key": {},
              "message": {}
            }
          ],
          "prefill_errors": [
            {
              "component_key": {},
              "error_type": {},
              "field_name": {},
              "message": {},
              "referenced_component_key": {}
            }
          ]
        }
      },
      "reassigned_run_ids": [
        "ar_123",
        "ar_456",
        "ar_789"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/client-organisation/batch-update - action-run-client-organisation-batch-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunClientOrganisationBatchUpdateOutputBody.json",
      "results": [
        {
          "action_run_id": "string",
          "error": "string",
          "success": true
        }
      ],
      "summary": {
        "failed": 1,
        "successful": 1,
        "total_requested": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/list - action-run-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "string",
      "counts": {
        "canceled_count": 1,
        "completed_count": 1,
        "in_progress_count": 1,
        "scheduled_count": 1,
        "todo_count": 1
      },
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "runs": [
        {
          "action_run_data": {
            "financial_account": {
              "account_number": "1234567890",
              "data_provider_name": "Bank of America"
            }
          },
          "agents": {
            "key": {}
          },
          "aum": 1000000000,
          "blueprint_category": "Move Money",
          "blueprint_description": "This action is used to transfer assets from one account to another",
          "blueprint_id": "bp_12345",
          "blueprint_name": "Transfer of Assets",
          "blueprint_version_id": "bpv_12345",
          "cancellation_reason": "No longer needed",
          "cancelled_at": "2023-01-01T12:30:00Z",
          "cancelled_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "child_runs": [
            {
              "action_run_data": {},
              "agents": {},
              "aum": {},
              "blueprint_category": {},
              "blueprint_description": {},
              "blueprint_id": {},
              "blueprint_name": {},
              "blueprint_version_id": {},
              "cancellation_reason": {},
              "cancelled_at": {},
              "cancelled_by": {},
              "child_runs": {},
              "client_organisation_external_id": {},
              "client_organisation_id": {},
              "client_organisation_market": {},
              "client_organisation_name": {},
              "client_organisation_national_css_coverage": {},
              "client_organisation_type": {},
              "client_organisation_uhnw_service_level": {},
              "client_segmentation": {},
              "completed_at": {},
              "created_at": {},
              "current_task": {},
              "deadline": {},
              "environment": {},
              "expected_completion_date": {},
              "id": {},
              "locked_at": {},
              "locked_by": {},
              "logs": {},
              "name": {},
              "next_step_date": {},
              "parent_blueprint_category": {},
              "parent_blueprint_description": {},
              "parent_blueprint_name": {},
              "parent_nickname": {},
              "parent_run_id": {},
              "ready_at": {},
              "recommended": {},
              "recommended_by": {},
              "rejected_at": {},
              "rejected_by": {},
              "rejection_reason": {},
              "scheduled_at": {},
              "slug": {},
              "source_system": {},
              "started_at": {},
              "started_by": {},
              "status": {},
              "temp_legacy_slug": {},
              "tenant_id": {}
            }
          ],
          "client_organisation_external_id": "co_xyz",
          "client_organisation_id": "co_xyz",
          "client_organisation_market": "Seattle",
          "client_organisation_name": "Client Org",
          "client_organisation_national_css_coverage": true,
          "client_organisation_type": "Existing",
          "client_organisation_uhnw_service_level": true,
          "client_segmentation": "High Net Worth",
          "completed_at": "2023-01-01T13:00:00Z",
          "created_at": "2023-01-01T12:00:00Z",
          "current_task": {
            "id": "ar_c_12345",
            "name": "Submit Application",
            "status": "todo"
          },
          "deadline": "2023-01-15T12:00:00Z",
          "environment": "merceradvisors-uat",
          "expected_completion_date": "2023-01-20T12:00:00Z",
          "id": "ar_12345",
          "locked_at": "2026-01-15T10:30:00Z",
          "locked_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "logs": [
            {
              "changed_by": {},
              "custom_status": {},
              "event_type": {},
              "id": {},
              "metadata": {},
              "old_custom_status": {},
              "old_status": {},
              "run_id": {},
              "status": {},
              "tenant_id": {},
              "time": {}
            }
          ],
          "name": "My Action Run",
          "next_step_date": "2023-01-15T12:00:00Z",
          "parent_blueprint_category": "HR",
          "parent_blueprint_description": "Standardized onboarding flow for new hires",
          "parent_blueprint_name": "Employee Onboarding",
          "parent_nickname": "Q3 onboarding cohort",
          "parent_run_id": "ar_parent_12345",
          "ready_at": "2023-01-01T12:04:00Z",
          "recommended": true,
          "recommended_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "rejected_at": "2023-01-01T12:10:00Z",
          "rejected_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "rejection_reason": "Not appropriate",
          "scheduled_at": "2023-01-02T09:00:00Z",
          "slug": "12345",
          "source_system": "avantos",
          "started_at": "2023-01-01T12:05:00Z",
          "started_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "status": "processing",
          "temp_legacy_slug": "string",
          "tenant_id": "t_67890"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/lock - action-run-bulk-lock

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/unlock - action-run-bulk-unlock

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/action-runs/{action_run_id} - action-run-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunGetDescription.json",
      "action_details": {
        "cancellation_reason": "No longer needed",
        "cancelled_at": "2023-04-01T12:00:00Z",
        "cancelled_by": {
          "first_name": "John",
          "id": "u_12345",
          "last_name": "Doe"
        },
        "category": "onboarding",
        "completed_at": "2023-04-01T12:00:00Z",
        "created_at": "2023-04-01T12:00:00Z",
        "deadline": "2023-04-15T12:00:00Z",
        "expected_completion_date": "2023-04-20T12:00:00Z",
        "id": "ar_12345",
        "next_step": "2023-04-01T12:00:00Z",
        "ready_at": "2023-04-01T12:00:00Z",
        "rejection": {
          "rejected_at": "2023-04-01T12:00:00Z",
          "rejected_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "rejection_reason": "The action run was rejected because it was no longer needed"
        },
        "scheduled_at": "2023-04-01T12:00:00Z",
        "started_at": "2023-04-01T12:00:00Z",
        "type": "distribution"
      },
      "blueprint": {
        "category": "Onboarding",
        "description": "Process for onboarding new customers",
        "id": "bp_12345",
        "name": "Customer Onboarding",
        "promoted_data_order": [
          "Promoted Field Name"
        ],
        "short_description": "Onboard customers",
        "version_id": "bpv_12345"
      },
      "child_trackers": [
        {
          "action_run_id": "ar_child_123",
          "component_key": "action_1",
          "name": "Client Onboarding",
          "section_name": "Section 1",
          "status": "in_progress",
          "status_tracker": [
            {
              "ReviewTask": {},
              "SubmitTask": {}
            }
          ]
        }
      ],
      "client_organisation_id": "co_xyz",
      "components": [
        {
          "action_run_id": "ar_12345",
          "blueprint_category": "onboarding",
          "blueprint_component_id": "bp_c_12345",
          "cancelled_at": "2023-04-01T12:00:00Z",
          "cancelled_by": "test@example.com",
          "cancelled_reason": "Test reason",
          "component_key": "customer-details",
          "component_name": "Customer Details",
          "component_type": "form",
          "id": "ar_c_12345",
          "resolved_form_id": "string",
          "result_data": {
            "key": {}
          },
          "skipped": false,
          "status": "todo",
          "submission_restricted": false,
          "tags": [
            "esign"
          ],
          "tasks": [
            {
              "action_run_id": {},
              "assigned": {},
              "can_begin": {},
              "cancellation_reason": {},
              "cancelled_at": {},
              "cancelled_by": {},
              "completed_at": {},
              "completed_by": {},
              "component_key": {},
              "created_at": {},
              "cron_job_queued": {},
              "data": {},
              "deadline": {},
              "environment": {},
              "id": {},
              "logs": {},
              "name": {},
              "next_step_date": {},
              "note": {},
              "permitted_roles": {},
              "rejected": {},
              "scheduled_at": {},
              "section_name": {},
              "sla_duration": {},
              "started_at": {},
              "status": {},
              "tags": {},
              "task_type": {},
              "total_time_waiting_ms": {},
              "unblocked_at": {},
              "waiting_for": {},
              "who_waiting_on": {}
            }
          ],
          "tenant_id": "t_67890"
        }
      ],
      "custom_status": "Draft",
      "data": {
        "key": {}
      },
      "environment": "production",
      "generator_field_path": "accounts",
      "id": "ar_12345",
      "locked_at": "2026-01-15T10:30:00Z",
      "name": "My Action Run",
      "parent_component_id": "arc_12345",
      "parent_run_id": "ar_parent_12345",
      "recommended": true,
      "run_context": "<p>Hello</p>",
      "slug": "12345",
      "started_by": {
        "first_name": "John",
        "id": "u_12345",
        "last_name": "Doe"
      },
      "state_model": {
        "$schema": "https://example.com/schemas/ActionRunStateModelOutput.json",
        "created_at": "2026-01-15T10:30:00Z",
        "current_state": "draft",
        "current_state_display_color": "Neutral",
        "current_state_display_name": "Draft",
        "current_state_is_required": false,
        "data": {
          "key": {}
        },
        "id": "string",
        "schema_id": "string",
        "tracker": [
          {
            "display_color": "Neutral",
            "display_name": "Draft",
            "entered_at": "2026-01-15T10:30:00Z",
            "entered_by": {
              "email": {},
              "first_name": {},
              "id": {},
              "last_name": {},
              "middle_name": {}
            },
            "input": {
              "key": {}
            },
            "input_schema": [
              {}
            ],
            "is_final": false,
            "is_required": true,
            "state_name": "draft",
            "status": "completed",
            "transition_key": "approve"
          }
        ],
        "updated_at": "2026-01-15T10:30:00Z"
      },
      "status": "in_progress",
      "status_tracker": [
        {
          "ReviewTask": {
            "action_run_id": "ar_12345",
            "assigned": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "can_begin": true,
            "cancellation_reason": "Task was cancelled because it was no longer needed",
            "cancelled_at": "2023-04-01T12:00:00Z",
            "cancelled_by": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "completed_at": "2023-04-01T12:00:00Z",
            "completed_by": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "component_key": "component_12345",
            "created_at": "2023-04-01T12:00:00Z",
            "cron_job_queued": "job_123",
            "data": {
              "financial_account": {
                "account_number": "1234567890",
                "data_provider_name": "Bank of America"
              }
            },
            "deadline": "2023-04-01T12:00:00Z",
            "environment": "merceradvisors-uat",
            "id": "task_12345",
            "logs": [
              {}
            ],
            "name": "Submit: Customer Details",
            "next_step_date": "2023-04-01T12:00:00Z",
            "note": "We're still waiting on Bob to submit the details",
            "permitted_roles": [
              "admin",
              "user"
            ],
            "rejected": {
              "reason": {},
              "rejected_at": {},
              "rejected_by": {}
            },
            "scheduled_at": "2023-04-01T12:00:00Z",
            "section_name": "string",
            "sla_duration": {
              "time": 3600,
              "unit": "minutes"
            },
            "started_at": "2023-04-01T12:00:00Z",
            "status": "todo",
            "tags": [
              "urgent",
              "compliance"
            ],
            "task_type": "submission",
            "total_time_waiting_ms": 3600000,
            "unblocked_at": "2023-04-01T12:00:00Z",
            "waiting_for": "Team Member",
            "who_waiting_on": "Client"
          },
          "SubmitTask": {
            "action_run_id": "ar_12345",
            "assigned": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "can_begin": true,
            "cancellation_reason": "Task was cancelled because it was no longer needed",
            "cancelled_at": "2023-04-01T12:00:00Z",
            "cancelled_by": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "completed_at": "2023-04-01T12:00:00Z",
            "completed_by": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "component_key": "component_12345",
            "created_at": "2023-04-01T12:00:00Z",
            "cron_job_queued": "job_123",
            "data": {
              "financial_account": {
                "account_number": "1234567890",
                "data_provider_name": "Bank of America"
              }
            },
            "deadline": "2023-04-01T12:00:00Z",
            "environment": "merceradvisors-uat",
            "id": "task_12345",
            "logs": [
              {}
            ],
            "name": "Submit: Customer Details",
            "next_step_date": "2023-04-01T12:00:00Z",
            "note": "We're still waiting on Bob to submit the details",
            "permitted_roles": [
              "admin",
              "user"
            ],
            "rejected": {
              "reason": {},
              "rejected_at": {},
              "rejected_by": {}
            },
            "scheduled_at": "2023-04-01T12:00:00Z",
            "section_name": "string",
            "sla_duration": {
              "time": 3600,
              "unit": "minutes"
            },
            "started_at": "2023-04-01T12:00:00Z",
            "status": "todo",
            "tags": [
              "urgent",
              "compliance"
            ],
            "task_type": "submission",
            "total_time_waiting_ms": 3600000,
            "unblocked_at": "2023-04-01T12:00:00Z",
            "waiting_for": "Team Member",
            "who_waiting_on": "Client"
          }
        }
      ],
      "tasks_data": [
        {
          "data": {
            "key": {
              "label": {},
              "value": {}
            }
          },
          "id": "t_12345",
          "name": "Customer Details"
        }
      ],
      "tenant_id": "t_67890",
      "type": "action_component_data"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/accept - action-run-accept-recommendation

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/blueprint-version - action-run-blueprint-version-reassign

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/client-organisation - action-run-client-organisation-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/action-runs/{action_run_id}/comments - action-run-comments-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetActionRunCommentsOutputBody.json",
      "comments": [
        {
          "created_at": "2021-01-01T00:00:00Z",
          "created_by": {
            "first_name": "John",
            "id": "a_12345",
            "last_name": "Doe"
          },
          "entity_id": "ar_456",
          "entity_type": "action_run",
          "environment": "staging",
          "external_id": "ext_123",
          "id": "123",
          "tagged_users": [
            {
              "first_name": "John",
              "id": "ag_123",
              "last_name": "Doe"
            },
            {
              "first_name": "Jane",
              "id": "ag_456",
              "last_name": "Smith"
            }
          ],
          "text": "This is a comment",
          "updated_at": "2021-01-01T00:00:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/action-runs/{action_run_id}/components/{component_id}/generators/{field_path}/tree - action-run-component-generator-tree

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GeneratorComponentTreeBody.json",
      "action_run_id": "string",
      "child_runs": [
        {
          "action_run_id": "string",
          "blueprint_id": "string",
          "child_runs": [
            {
              "action_run_id": {},
              "blueprint_id": {},
              "child_runs": {},
              "components": {},
              "name": {},
              "status": {}
            }
          ],
          "components": [
            {
              "component_id": {},
              "component_key": {},
              "component_name": {},
              "component_type": {},
              "form_id": {},
              "form_schema": {},
              "generator_children": {},
              "status": {},
              "tag": {},
              "task_data": {}
            }
          ],
          "name": "string",
          "status": "processing"
        }
      ],
      "component_id": "string",
      "component_key": "string",
      "field_path": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/context - action-run-context-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/action-runs/{action_run_id}/data-snapshots/current - action-run-current-data-snapshot-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunCurrentDataSnapshotGetOutputBody.json",
      "data": {
        "key": {}
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/name - action-run-name-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/action-runs/{action_run_id}/pre-assignments - action-run-pre-assignments-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunPreAssignmentsGetOutputBody.json",
      "pre_assignments": [
        {
          "$schema": "https://example.com/schemas/PreAssignmentResponse.json",
          "assigned_agent_id": "ag_456",
          "can_assign": true,
          "count": 15,
          "created_at": "2026-01-15T10:30:00Z",
          "id": "pa_123",
          "roles": [
            "Admin",
            "Advisor"
          ],
          "updated_at": "2026-01-15T10:30:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/pre-assignments/{pre_assignment_id}/assign - action-run-pre-assignment-assign

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PreAssignmentResponse.json",
      "assigned_agent_id": "ag_456",
      "can_assign": true,
      "count": 15,
      "created_at": "2026-01-15T10:30:00Z",
      "id": "pa_123",
      "roles": [
        "Admin",
        "Advisor"
      ],
      "updated_at": "2026-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/reassign - action-run-reassign

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunTasksBulkAssignOutputBody.json",
      "failed_tasks": [
        {
          "reason": "Permission denied",
          "task_id": "task_123"
        }
      ],
      "successful_task_ids": [
        "string"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/reject - action-run-reject-recommendation

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/request-cancel - action-run-request-cancel

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunRequestCancelOutputBody.json",
      "user_tasks_map": {
        "agent_1234": [
          "task_id_1",
          "task_id_2"
        ]
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/schedule - action-run-schedule-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/state-model/advance - action-run-state-model-advance

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunStateModelOutput.json",
      "created_at": "2026-01-15T10:30:00Z",
      "current_state": "draft",
      "current_state_display_color": "Neutral",
      "current_state_display_name": "Draft",
      "current_state_is_required": false,
      "data": {
        "key": {}
      },
      "id": "string",
      "schema_id": "string",
      "tracker": [
        {
          "display_color": "Neutral",
          "display_name": "Draft",
          "entered_at": "2026-01-15T10:30:00Z",
          "entered_by": {
            "email": "john.doe@example.com",
            "first_name": "John",
            "id": "a_12345",
            "last_name": "Doe",
            "middle_name": "string"
          },
          "input": {
            "key": {}
          },
          "input_schema": [
            {
              "description": {},
              "enum_values": {},
              "key": {},
              "label": {},
              "required": {},
              "type": {}
            }
          ],
          "is_final": false,
          "is_required": true,
          "state_name": "draft",
          "status": "completed",
          "transition_key": "approve"
        }
      ],
      "updated_at": "2026-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/action-runs/{action_run_id}/state-model/transitions - action-run-state-model-transitions-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunStateModelTransitionsGetOutputBody.json",
      "current_state": "draft",
      "current_state_display_color": "Neutral",
      "current_state_display_name": "Draft",
      "current_state_is_final": false,
      "transitions": [
        {
          "condition_satisfied": true,
          "display_name": "Accept",
          "input_schema": [
            {
              "description": {},
              "enum_values": {},
              "key": {},
              "label": {},
              "required": {},
              "type": {}
            }
          ],
          "key": "approve",
          "to_state": "approved",
          "to_state_display_color": "Positive",
          "to_state_display_name": "Approved",
          "to_state_is_final": true,
          "to_state_is_required": false
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/action-runs/{action_run_id}/status-logs - action-run-status-logs

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunStatusLogsOutputBody.json",
      "logs": [
        {
          "changed_by": "string",
          "custom_status": "string",
          "event_type": "string",
          "id": "string",
          "metadata": {
            "key": {}
          },
          "old_custom_status": "string",
          "old_status": "string",
          "run_id": "string",
          "status": "string",
          "tenant_id": "string",
          "time": "2026-01-15T10:30:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/approve - action-run-task-approve

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/assign - action-run-task-assign

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/cancel - action-run-task-cancel-confirm

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/change-next-step-date - action-run-task-next-step-date-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/claim - action-run-task-claim

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/cron-job-queued - action-run-task-cron-job-queued-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/reject - action-run-task-reject

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/render - action-run-task-render

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionFormTaskRenderDescription.json",
      "created_at": "2024-01-01T00:00:00Z",
      "created_by": "user@email.com",
      "custom_javascript": "string",
      "custom_javascript_execute_on_load": true,
      "custom_javascript_functions": "string",
      "custom_javascript_triggering_fields": [
        "string"
      ],
      "default_input_mapping": {
        "key": {}
      },
      "default_output_mapping": {
        "key": {}
      },
      "description": "This is my form",
      "dynamic_field_config": {
        "key": {
          "child_form_javascript": {
            "key": {}
          },
          "e_signature_mappings": {
            "key": {}
          },
          "endpoint_id": "string",
          "no_results_message": "string",
          "output_key": "string",
          "payload_fields": {
            "key": {}
          },
          "pdf_preview_payloads": {
            "key": {}
          },
          "selector_field": "string"
        }
      },
      "embedded_js": [
        {
          "custom_javascript": "string",
          "custom_javascript_functions": "string",
          "imported_js_function_config": [
            {
              "key": {}
            }
          ],
          "prefix": "string",
          "triggering_fields": [
            "string"
          ]
        }
      ],
      "field_schema": {
        "additionalProperties": {
          "key": {}
        },
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "else": {
          "key": {}
        },
        "if": {
          "key": {}
        },
        "oneOf": [
          {}
        ],
        "properties": {
          "key": {}
        },
        "required": [
          {}
        ],
        "then": {
          "key": {}
        },
        "type": "string"
      },
      "graph_etag": "string",
      "id": "f_456",
      "imported_js_function_config": [
        {
          "key": {}
        }
      ],
      "is_reusable": true,
      "name": "My Form",
      "resolved_form_id": "string",
      "result_data": {
        "key": {}
      },
      "submission_restricted": false,
      "task_status": "todo",
      "task_type": "submission",
      "ui_schema": {
        "elements": [
          {}
        ],
        "options": {
          "key": {}
        },
        "type": "string"
      },
      "updated_at": "2024-01-01T00:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/reopen - action-run-task-reopen

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/save - action-run-task-patch

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/save - action-run-task-save

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/schedule - action-run-task-schedule-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/start - action-run-task-start

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/submit - action-run-task-submit

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunTaskSubmitOutputBody.json",
      "new_status": "pending_approval"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/action-runs/{action_run_id}/tasks/{task_id}/waiting - action-run-task-update-waiting

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/actions/blueprints - action-blueprint-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "ai_context_description": "AI-optimized customer onboarding workflow",
        "ai_description": "Process for onboarding new customers",
        "category": "onboarding",
        "created_at": "2023-04-01T12:00:00Z",
        "description": "Process for onboarding new customers",
        "draft_count": 2,
        "has_published_version": true,
        "id": "bp_12345",
        "is_ai_recommendable": false,
        "is_journey": false,
        "name": "Customer Onboarding",
        "short_description": "Quick onboarding flow",
        "tenant_id": "t_67890",
        "updated_at": "2023-04-02T15:30:00Z"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/actions/blueprints - action-blueprint-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionBlueprintCreateOutputBody.json",
      "base_version_id": "string",
      "blueprint_id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id} - action-blueprint-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id} - action-blueprint-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionBlueprintDescription.json",
      "ai_context_description": "AI-optimized customer onboarding workflow",
      "ai_description": "AI-optimized customer onboarding workflow",
      "category": "onboarding",
      "created_at": "2023-04-01T12:00:00Z",
      "deleted_at": "2023-04-02T15:30:00Z",
      "description": "Process for onboarding new customers",
      "environments": [
        {
          "environment": "production",
          "promotion_notes": "Tested in staging, ready for production",
          "tagged_at": "2023-04-01T12:00:00Z",
          "tagged_by_agent_id": "a_12345",
          "version": "v1.0.0"
        }
      ],
      "id": "bp_12345",
      "is_ai_recommendable": false,
      "is_journey": false,
      "name": "Customer Onboarding",
      "short_description": "short description",
      "tenant_id": "t_67890",
      "updated_at": "2023-04-02T15:30:00Z",
      "versions": [
        {
          "blueprint_id": "bp_12345",
          "components": [
            {
              "allowed_submission_states": {},
              "approval_auto_assign_config": {},
              "approval_required": {},
              "approval_roles": {},
              "approval_scheduled_delay": {},
              "approval_sla_duration": {},
              "approval_task_name": {},
              "auto_approve_condition": {},
              "auto_assign_config": {},
              "auto_submit_condition": {},
              "call_as_config": {},
              "child_components": {},
              "component_id": {},
              "component_key": {},
              "component_type": {},
              "config": {},
              "config_assignee": {},
              "data_promotion_config": {},
              "db_output_mapping": {},
              "dl_input_mapping": {},
              "dl_output_mapping": {},
              "dont_fail_on_non_200": {},
              "expression": {},
              "force_draft": {},
              "id": {},
              "input_mapping": {},
              "item_schema": {},
              "name": {},
              "output_mapping": {},
              "parent_promotion_fields": {},
              "permitted_roles": {},
              "prerequisites": {},
              "run_context": {},
              "run_name": {},
              "run_scheduled_at": {},
              "run_started_by_user": {},
              "scheduled_delay": {},
              "section_name": {},
              "skip_completion_wait": {},
              "sla_duration": {},
              "state_transition_rules": {},
              "synchronous_execution": {},
              "tags": {},
              "target_status": {},
              "task_name_override_expression": {},
              "task_tags": {}
            }
          ],
          "created_at": "2023-04-01T12:00:00Z",
          "custom_javascript_function_id": "cjsf_123",
          "custom_status_configuration": {},
          "id": "bpv_12345",
          "is_journey": false,
          "status": "draft",
          "tenant_id": "t_67890",
          "updated_at": "2023-04-02T15:30:00Z",
          "version_notes": "Initial version",
          "version_number": "v1.0.0"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id} - action-blueprint-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/environments/history - blueprint-environment-history-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "blueprint_id": "bp_456",
        "blueprint_version_id": "bpv_789",
        "environment": "production",
        "id": "bve_12345",
        "promotion_notes": "Tested in staging, ready for production",
        "replaced_at": "2023-04-02T15:30:00Z",
        "tagged_at": "2023-04-01T12:00:00Z",
        "tagged_by_agent_email": "john.doe@example.com",
        "tagged_by_agent_id": "a_12345",
        "tenant_id": "t_67890"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/environments/{environment}/version - blueprint-environment-version-set

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/is-journey - action-blueprint-toggle-is-journey

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/versions - action-blueprint-version-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionBlueprintVersionDescription.json",
      "blueprint_id": "bp_12345",
      "branches": [
        {
          "$schema": "https://example.com/schemas/ActionBranchDescription.json",
          "condition": {
            "left": {
              "object": "client",
              "property": "name",
              "type": "property"
            },
            "operator": "==",
            "right": {
              "type": "literal",
              "value": "John"
            },
            "type": "binary"
          },
          "created_at": "2024-10-29T11:22:33.027873-03:00",
          "created_by": "test@avantos.ai",
          "description": "Description for example branch",
          "id": "b_01jbcagb1wfy2v0g1xcq53y4rn",
          "name": "Dummy Branch",
          "tenant_id": "123",
          "updated_at": "2024-10-29T11:22:33.02018-03:00"
        }
      ],
      "components": [
        {
          "allowed_submission_states": [
            "string"
          ],
          "approval_auto_assign_config": {
            "form_field": "string",
            "form_key": "string",
            "type": "client_org_role",
            "value": "string"
          },
          "approval_required": false,
          "approval_roles": [
            "string"
          ],
          "approval_scheduled_delay": {
            "time": 3600,
            "unit": "minutes"
          },
          "approval_sla_duration": {
            "time": 3600,
            "unit": "minutes"
          },
          "approval_task_name": "string",
          "auto_approve_condition": {},
          "auto_assign_config": {
            "form_field": "string",
            "form_key": "string",
            "type": "client_org_role",
            "value": "string"
          },
          "auto_submit_condition": {},
          "call_as_config": {
            "form_field": "string",
            "form_key": "string",
            "type": "client_org_role",
            "value": "string"
          },
          "child_components": [
            "form-1",
            "form-2"
          ],
          "component_id": "f_12345",
          "component_key": "component-key-1",
          "component_type": "form",
          "config": "string",
          "config_assignee": "assignee@example.com",
          "data_promotion_config": {
            "key": "string"
          },
          "db_output_mapping": {
            "key": {
              "column": {},
              "record_id": {},
              "table": {},
              "validation": {}
            }
          },
          "dl_input_mapping": {
            "key": {
              "source": {},
              "type": {}
            }
          },
          "dl_output_mapping": {
            "key": {
              "source": {},
              "target": {},
              "type": {}
            }
          },
          "dont_fail_on_non_200": false,
          "expression": "{result: clientOrg.name + ' - ' + action.Status}",
          "force_draft": false,
          "id": "bp_c_12345",
          "input_mapping": {
            "key": {}
          },
          "item_schema": {},
          "name": "Customer Onboarding",
          "output_mapping": [
            {
              "child_component_key": {},
              "child_output_key": {},
              "parent_output_key": {}
            }
          ],
          "parent_promotion_fields": [
            "string"
          ],
          "permitted_roles": [
            "string"
          ],
          "prerequisites": [
            "string"
          ],
          "run_context": "Processing payment for order #123",
          "run_name": "Process Payment",
          "run_scheduled_at": "2023-04-01T12:00:00Z",
          "run_started_by_user": "example@email.com",
          "scheduled_delay": {
            "time": 3600,
            "unit": "minutes"
          },
          "section_name": "string",
          "skip_completion_wait": false,
          "sla_duration": {
            "time": 3600,
            "unit": "minutes"
          },
          "state_transition_rules": {
            "state_transition_rules_if": {},
            "state_transition_rules_then": "pending_approval"
          },
          "synchronous_execution": false,
          "tags": [
            "esign"
          ],
          "target_status": "complete",
          "task_name_override_expression": {},
          "task_tags": [
            "string"
          ]
        }
      ],
      "created_at": "2023-04-01T12:00:00Z",
      "custom_javascript_function_id": "cjsf_123",
      "custom_status_configuration": {},
      "forms": [
        {
          "$schema": "https://example.com/schemas/ActionFormDescription.json",
          "created_at": "2024-01-01T00:00:00Z",
          "created_by": "user@email.com",
          "custom_javascript": "string",
          "custom_javascript_execute_on_load": true,
          "custom_javascript_functions": "string",
          "custom_javascript_triggering_fields": [
            "string"
          ],
          "default_input_mapping": {
            "key": {}
          },
          "default_output_mapping": {
            "key": {}
          },
          "description": "This is my form",
          "dynamic_field_config": {
            "key": {
              "child_form_javascript": {},
              "e_signature_mappings": {},
              "endpoint_id": {},
              "no_results_message": {},
              "output_key": {},
              "payload_fields": {},
              "pdf_preview_payloads": {},
              "selector_field": {}
            }
          },
          "embedded_js": [
            {
              "custom_javascript": {},
              "custom_javascript_functions": {},
              "imported_js_function_config": {},
              "prefix": {},
              "triggering_fields": {}
            }
          ],
          "field_schema": {
            "additionalProperties": {
              "key": {}
            },
            "allOf": [
              {}
            ],
            "anyOf": [
              {}
            ],
            "else": {
              "key": {}
            },
            "if": {
              "key": {}
            },
            "oneOf": [
              {}
            ],
            "properties": {
              "key": {}
            },
            "required": [
              {}
            ],
            "then": {
              "key": {}
            },
            "type": "string"
          },
          "id": "f_456",
          "imported_js_function_config": [
            {
              "key": {}
            }
          ],
          "is_reusable": true,
          "name": "My Form",
          "ui_schema": {
            "elements": [
              {}
            ],
            "options": {
              "key": {}
            },
            "type": "string"
          },
          "updated_at": "2024-01-01T00:00:00Z"
        }
      ],
      "id": "bpv_12345",
      "status": "draft",
      "tenant_id": "t_67890",
      "triggers": [
        {
          "$schema": "https://example.com/schemas/TriggerEndpointDescription.json",
          "created_at": "2021-01-01T00:00:00Z",
          "custom_headers_template": {
            "userId": "{{.user_id}}"
          },
          "custom_headers_template_variables": [
            "user_id"
          ],
          "error_message_template": [
            {
              "message": {},
              "pattern": {}
            }
          ],
          "id": "te_213j32",
          "name": "Send Email",
          "output_mapping": {
            "id": ".data.value.id"
          },
          "path_template": "/api/v1/customer/{{.customer_id}}/do/something/",
          "path_template_variables": [
            "customer_id"
          ],
          "payload_template": {
            "subject": "{{.subject}}",
            "to": "{{.to}}"
          },
          "payload_template_variables": [
            "to",
            "subject"
          ],
          "payload_type": "json",
          "query_parameter_template": {
            "user_id": "{{.user_id}}"
          },
          "query_parameter_template_variables": [
            "user_id"
          ],
          "request_method": "POST",
          "timeout_seconds": 10,
          "trigger_service_id": "ts_213j32",
          "updated_at": "2021-01-01T00:00:00Z"
        }
      ],
      "updated_at": "2023-04-02T15:30:00Z",
      "version_notes": "Initial version",
      "version_number": "v1.0.0"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/versions/{blueprint_version_id} - action-blueprint-version-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/versions/{blueprint_version_id}/published - action-blueprint-version-published

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/{blueprint_version_id}/graph - action-blueprint-graph-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionBlueprintGraphDescription.json",
      "blueprint_id": "bp_12345",
      "blueprint_name": "Customer Onboarding",
      "branches": [
        {
          "$schema": "https://example.com/schemas/ActionBranchDescription.json",
          "condition": {
            "left": {
              "object": "client",
              "property": "name",
              "type": "property"
            },
            "operator": "==",
            "right": {
              "type": "literal",
              "value": "John"
            },
            "type": "binary"
          },
          "created_at": "2024-10-29T11:22:33.027873-03:00",
          "created_by": "test@avantos.ai",
          "description": "Description for example branch",
          "id": "b_01jbcagb1wfy2v0g1xcq53y4rn",
          "name": "Dummy Branch",
          "tenant_id": "123",
          "updated_at": "2024-10-29T11:22:33.02018-03:00"
        }
      ],
      "component_task_priorities": {
        "form-1": "high",
        "form-2": "low"
      },
      "custom_javascript_function_id": "cjsf_123",
      "custom_status_configuration": {},
      "edges": [
        {
          "source": "string",
          "target": "string"
        }
      ],
      "forms": [
        {
          "$schema": "https://example.com/schemas/ActionFormDescription.json",
          "created_at": "2024-01-01T00:00:00Z",
          "created_by": "user@email.com",
          "custom_javascript": "string",
          "custom_javascript_execute_on_load": true,
          "custom_javascript_functions": "string",
          "custom_javascript_triggering_fields": [
            "string"
          ],
          "default_input_mapping": {
            "key": {}
          },
          "default_output_mapping": {
            "key": {}
          },
          "description": "This is my form",
          "dynamic_field_config": {
            "key": {
              "child_form_javascript": {},
              "e_signature_mappings": {},
              "endpoint_id": {},
              "no_results_message": {},
              "output_key": {},
              "payload_fields": {},
              "pdf_preview_payloads": {},
              "selector_field": {}
            }
          },
          "embedded_js": [
            {
              "custom_javascript": {},
              "custom_javascript_functions": {},
              "imported_js_function_config": {},
              "prefix": {},
              "triggering_fields": {}
            }
          ],
          "field_schema": {
            "additionalProperties": {
              "key": {}
            },
            "allOf": [
              {}
            ],
            "anyOf": [
              {}
            ],
            "else": {
              "key": {}
            },
            "if": {
              "key": {}
            },
            "oneOf": [
              {}
            ],
            "properties": {
              "key": {}
            },
            "required": [
              {}
            ],
            "then": {
              "key": {}
            },
            "type": "string"
          },
          "id": "f_456",
          "imported_js_function_config": [
            {
              "key": {}
            }
          ],
          "is_reusable": true,
          "name": "My Form",
          "ui_schema": {
            "elements": [
              {}
            ],
            "options": {
              "key": {}
            },
            "type": "string"
          },
          "updated_at": "2024-01-01T00:00:00Z"
        }
      ],
      "nodes": [
        {
          "data": {
            "allowed_submission_states": [
              {}
            ],
            "approval_auto_assign_config": {
              "form_field": {},
              "form_key": {},
              "type": {},
              "value": {}
            },
            "approval_required": false,
            "approval_roles": [
              {}
            ],
            "approval_scheduled_delay": {
              "time": 3600,
              "unit": "minutes"
            },
            "approval_sla_duration": {
              "time": 3600,
              "unit": "minutes"
            },
            "approval_task_name": "string",
            "auto_approve_condition": {},
            "auto_assign_config": {
              "form_field": {},
              "form_key": {},
              "type": {},
              "value": {}
            },
            "auto_submit_condition": {},
            "call_as_config": {
              "form_field": {},
              "form_key": {},
              "type": {},
              "value": {}
            },
            "child_components": [
              "form-1",
              "form-2"
            ],
            "component_id": "f_12345",
            "component_key": "component-key-1",
            "component_type": "form",
            "config": "string",
            "config_assignee": "assignee@example.com",
            "data_promotion_config": {
              "key": {}
            },
            "db_output_mapping": {
              "key": {}
            },
            "dl_input_mapping": {
              "key": {}
            },
            "dl_output_mapping": {
              "key": {}
            },
            "dont_fail_on_non_200": false,
            "expression": "{result: clientOrg.name + ' - ' + action.Status}",
            "force_draft": false,
            "id": "bp_c_12345",
            "input_mapping": {
              "key": {}
            },
            "item_schema": {},
            "name": "Customer Onboarding",
            "output_mapping": [
              {}
            ],
            "parent_promotion_fields": [
              {}
            ],
            "permitted_roles": [
              {}
            ],
            "prerequisites": [
              {}
            ],
            "run_context": "Processing payment for order #123",
            "run_name": "Process Payment",
            "run_scheduled_at": "2023-04-01T12:00:00Z",
            "run_started_by_user": "example@email.com",
            "scheduled_delay": {
              "time": 3600,
              "unit": "minutes"
            },
            "section_name": "string",
            "skip_completion_wait": false,
            "sla_duration": {
              "time": 3600,
              "unit": "minutes"
            },
            "state_transition_rules": {
              "state_transition_rules_if": {},
              "state_transition_rules_then": {}
            },
            "synchronous_execution": false,
            "tags": [
              {}
            ],
            "target_status": "complete",
            "task_name_override_expression": {},
            "task_tags": [
              {}
            ]
          },
          "hidden": false,
          "id": "string",
          "position": {
            "x": 100,
            "y": 200
          },
          "type": "form"
        }
      ],
      "promoted_data_order": [
        "string"
      ],
      "state_model_schema": {
        "data_schema": {},
        "description": "string",
        "id": "string",
        "initial_state": "draft",
        "name": "LoanApplication",
        "states": [
          {
            "description": "string",
            "display_color": "Neutral",
            "display_name": "Draft",
            "is_final": false,
            "is_required": false,
            "metadata": {
              "key": {}
            },
            "name": "draft"
          }
        ],
        "transitions": [
          {
            "condition": {},
            "display_name": "Accept",
            "from_states": [
              "draft"
            ],
            "input_schema": [
              {}
            ],
            "key": "submit_application",
            "on_transition": {
              "update_data": {}
            },
            "priority": 0,
            "to_state": "submitted",
            "trigger": {
              "config": {},
              "type": {}
            }
          }
        ]
      },
      "status": "draft",
      "tenant_id": "t_67890",
      "triggers": [
        {
          "$schema": "https://example.com/schemas/TriggerEndpointDescription.json",
          "created_at": "2021-01-01T00:00:00Z",
          "custom_headers_template": {
            "userId": "{{.user_id}}"
          },
          "custom_headers_template_variables": [
            "user_id"
          ],
          "error_message_template": [
            {
              "message": {},
              "pattern": {}
            }
          ],
          "id": "te_213j32",
          "name": "Send Email",
          "output_mapping": {
            "id": ".data.value.id"
          },
          "path_template": "/api/v1/customer/{{.customer_id}}/do/something/",
          "path_template_variables": [
            "customer_id"
          ],
          "payload_template": {
            "subject": "{{.subject}}",
            "to": "{{.to}}"
          },
          "payload_template_variables": [
            "to",
            "subject"
          ],
          "payload_type": "json",
          "query_parameter_template": {
            "user_id": "{{.user_id}}"
          },
          "query_parameter_template_variables": [
            "user_id"
          ],
          "request_method": "POST",
          "timeout_seconds": 10,
          "trigger_service_id": "ts_213j32",
          "updated_at": "2021-01-01T00:00:00Z"
        }
      ],
      "version_id": "bpv_123",
      "version_notes": "Initial draft",
      "version_number": "v1.0.0"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/{blueprint_version_id}/graph - action-blueprint-graph-put

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionBlueprintGraphPutOutputBody.json",
      "id": "string",
      "new_components": {
        "key": "string"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/actions/components/branches - action-component-branch-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "$schema": "https://example.com/schemas/ActionBranchDescription.json",
        "condition": {
          "left": {
            "object": "client",
            "property": "name",
            "type": "property"
          },
          "operator": "==",
          "right": {
            "type": "literal",
            "value": "John"
          },
          "type": "binary"
        },
        "created_at": "2024-10-29T11:22:33.027873-03:00",
        "created_by": "test@avantos.ai",
        "description": "Description for example branch",
        "id": "b_01jbcagb1wfy2v0g1xcq53y4rn",
        "name": "Dummy Branch",
        "tenant_id": "123",
        "updated_at": "2024-10-29T11:22:33.02018-03:00"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/actions/components/branches - action-component-branch-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionComponentBranchCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/actions/components/branches/{branch_id} - action-component-branch-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionBranchDescription.json",
      "condition": {
        "left": {
          "object": "client",
          "property": "name",
          "type": "property"
        },
        "operator": "==",
        "right": {
          "type": "literal",
          "value": "John"
        },
        "type": "binary"
      },
      "created_at": "2024-10-29T11:22:33.027873-03:00",
      "created_by": "test@avantos.ai",
      "description": "Description for example branch",
      "id": "b_01jbcagb1wfy2v0g1xcq53y4rn",
      "name": "Dummy Branch",
      "tenant_id": "123",
      "updated_at": "2024-10-29T11:22:33.02018-03:00"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/actions/components/branches/{branch_id} - action-component-branch-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/actions/components/forms - action-component-form-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionComponentFormCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/actions/components/forms/list - action-component-form-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionComponentFormListOutputBody.json",
      "forms": [
        {
          "$schema": "https://example.com/schemas/ActionFormDescription.json",
          "created_at": "2024-01-01T00:00:00Z",
          "created_by": "user@email.com",
          "custom_javascript": "string",
          "custom_javascript_execute_on_load": true,
          "custom_javascript_functions": "string",
          "custom_javascript_triggering_fields": [
            "string"
          ],
          "default_input_mapping": {
            "key": {}
          },
          "default_output_mapping": {
            "key": {}
          },
          "description": "This is my form",
          "dynamic_field_config": {
            "key": {
              "child_form_javascript": {},
              "e_signature_mappings": {},
              "endpoint_id": {},
              "no_results_message": {},
              "output_key": {},
              "payload_fields": {},
              "pdf_preview_payloads": {},
              "selector_field": {}
            }
          },
          "embedded_js": [
            {
              "custom_javascript": {},
              "custom_javascript_functions": {},
              "imported_js_function_config": {},
              "prefix": {},
              "triggering_fields": {}
            }
          ],
          "field_schema": {
            "additionalProperties": {
              "key": {}
            },
            "allOf": [
              {}
            ],
            "anyOf": [
              {}
            ],
            "else": {
              "key": {}
            },
            "if": {
              "key": {}
            },
            "oneOf": [
              {}
            ],
            "properties": {
              "key": {}
            },
            "required": [
              {}
            ],
            "then": {
              "key": {}
            },
            "type": "string"
          },
          "id": "f_456",
          "imported_js_function_config": [
            {
              "key": {}
            }
          ],
          "is_reusable": true,
          "name": "My Form",
          "ui_schema": {
            "elements": [
              {}
            ],
            "options": {
              "key": {}
            },
            "type": "string"
          },
          "updated_at": "2024-01-01T00:00:00Z"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 10,
        "total_pages": 100,
        "total_records": 1000
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/actions/components/forms/{form_id} - action-component-form-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/actions/components/forms/{form_id} - action-component-form-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionFormDescription.json",
      "created_at": "2024-01-01T00:00:00Z",
      "created_by": "user@email.com",
      "custom_javascript": "string",
      "custom_javascript_execute_on_load": true,
      "custom_javascript_functions": "string",
      "custom_javascript_triggering_fields": [
        "string"
      ],
      "default_input_mapping": {
        "key": {}
      },
      "default_output_mapping": {
        "key": {}
      },
      "description": "This is my form",
      "dynamic_field_config": {
        "key": {
          "child_form_javascript": {
            "key": {}
          },
          "e_signature_mappings": {
            "key": {}
          },
          "endpoint_id": "string",
          "no_results_message": "string",
          "output_key": "string",
          "payload_fields": {
            "key": {}
          },
          "pdf_preview_payloads": {
            "key": {}
          },
          "selector_field": "string"
        }
      },
      "embedded_js": [
        {
          "custom_javascript": "string",
          "custom_javascript_functions": "string",
          "imported_js_function_config": [
            {
              "key": {}
            }
          ],
          "prefix": "string",
          "triggering_fields": [
            "string"
          ]
        }
      ],
      "field_schema": {
        "additionalProperties": {
          "key": {}
        },
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "else": {
          "key": {}
        },
        "if": {
          "key": {}
        },
        "oneOf": [
          {}
        ],
        "properties": {
          "key": {}
        },
        "required": [
          {}
        ],
        "then": {
          "key": {}
        },
        "type": "string"
      },
      "id": "f_456",
      "imported_js_function_config": [
        {
          "key": {}
        }
      ],
      "is_reusable": true,
      "name": "My Form",
      "ui_schema": {
        "elements": [
          {}
        ],
        "options": {
          "key": {}
        },
        "type": "string"
      },
      "updated_at": "2024-01-01T00:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/actions/components/forms/{form_id} - action-component-form-update-details

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/actions/components/forms/{form_id} - action-component-form-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/actions/components/forms/{form_id}/clone - action-component-form-clone

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionComponentFormCloneOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/actions/components/forms/{form_id}/custom-javascript - action-component-form-update-custom-javascript

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/actions/{action_blueprint_id}/client-organisations/{client_organization_id}/configuration/render - action-run-configuration-render

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionFormRenderDescription.json",
      "created_at": "2024-01-01T00:00:00Z",
      "created_by": "user@email.com",
      "custom_javascript": "string",
      "custom_javascript_execute_on_load": true,
      "custom_javascript_functions": "string",
      "custom_javascript_triggering_fields": [
        "string"
      ],
      "default_input_mapping": {
        "key": {}
      },
      "default_output_mapping": {
        "key": {}
      },
      "description": "This is my form",
      "dynamic_field_config": {
        "key": {
          "child_form_javascript": {
            "key": {}
          },
          "e_signature_mappings": {
            "key": {}
          },
          "endpoint_id": "string",
          "no_results_message": "string",
          "output_key": "string",
          "payload_fields": {
            "key": {}
          },
          "pdf_preview_payloads": {
            "key": {}
          },
          "selector_field": "string"
        }
      },
      "embedded_js": [
        {
          "custom_javascript": "string",
          "custom_javascript_functions": "string",
          "imported_js_function_config": [
            {
              "key": {}
            }
          ],
          "prefix": "string",
          "triggering_fields": [
            "string"
          ]
        }
      ],
      "field_schema": {
        "additionalProperties": {
          "key": {}
        },
        "allOf": [
          {}
        ],
        "anyOf": [
          {}
        ],
        "else": {
          "key": {}
        },
        "if": {
          "key": {}
        },
        "oneOf": [
          {}
        ],
        "properties": {
          "key": {}
        },
        "required": [
          {}
        ],
        "then": {
          "key": {}
        },
        "type": "string"
      },
      "id": "f_456",
      "imported_js_function_config": [
        {
          "key": {}
        }
      ],
      "is_reusable": true,
      "name": "My Form",
      "result_data": {
        "key": {}
      },
      "ui_schema": {
        "elements": [
          {}
        ],
        "options": {
          "key": {}
        },
        "type": "string"
      },
      "updated_at": "2024-01-01T00:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/admin/api-token-roles - admin-api-token-roles-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/APITokenRoleListOutputBody.json",
      "roles": [
        "string"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/admin/api-tokens - admin-api-tokens-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/APITokenListOutputBody.json",
      "data": [
        {
          "$schema": "https://example.com/schemas/APITokenListItemOutput.json",
          "auth_method": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "expires_at": "2026-01-15T10:30:00Z",
          "id": "string",
          "is_active": true,
          "last_used_at": "2026-01-15T10:30:00Z",
          "name": "string",
          "role": "string",
          "scope_type": "string",
          "token_id": "string",
          "token_id_prefix": "string",
          "trigger_grants": [
            {
              "grant_target_id": {},
              "grant_type": {}
            }
          ]
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/admin/api-tokens - admin-api-tokens-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/APITokenCreateOutputBody.json",
      "auth_method": "string",
      "created_at": "2026-01-15T10:30:00Z",
      "expires_at": "2026-01-15T10:30:00Z",
      "id": "string",
      "name": "string",
      "role": "string",
      "scope_type": "string",
      "token": "string",
      "token_id": "string",
      "trigger_grants": [
        {
          "grant_target_id": "string",
          "grant_type": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/admin/api-tokens/{token_id} - admin-api-tokens-delete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/APITokenDeleteOutputBody.json",
      "message": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/admin/api-tokens/{token_id} - admin-api-tokens-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/APITokenListItemOutput.json",
      "auth_method": "string",
      "created_at": "2026-01-15T10:30:00Z",
      "expires_at": "2026-01-15T10:30:00Z",
      "id": "string",
      "is_active": true,
      "last_used_at": "2026-01-15T10:30:00Z",
      "name": "string",
      "role": "string",
      "scope_type": "string",
      "token_id": "string",
      "token_id_prefix": "string",
      "trigger_grants": [
        {
          "grant_target_id": "string",
          "grant_type": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/admin/datadog/logs - admin-datadog-logs-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DatadogLogsGetOutputBody.json",
      "logs": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agent-business-group-roles - agent-business-group-role-list-by-type-and-name

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "agent_external_id": "ag_123",
        "agent_id": "ag_123",
        "agent_role": "Director",
        "business_group_id": "bg_123",
        "business_group_name": "Region 1",
        "business_group_status": "active",
        "business_group_type": "region",
        "first_name": "John",
        "last_name": "Doe",
        "relationship_created_at": "2024-01-01T09:00:00Z",
        "relationship_description": "This is the first region.",
        "relationship_updated_at": "2024-01-01T09:00:00Z",
        "tenant_id": "t_123"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agent-organisations - agent-organisation-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentOrganisationListOutputBody.json",
      "organisations": [
        {
          "agent_organisation_role": "Advisor",
          "agent_organisation_type": "Corporation",
          "created_at": "2023-04-01T12:00:00Z",
          "description": "A leading advisory firm specializing in wealth management",
          "external_id": "ext_123456",
          "extra_properties": {
            "employees": "50",
            "licenses": "Series 7, Series 66",
            "specialty": "Wealth Management"
          },
          "id": "ao_123456",
          "name": "Acme Advisors",
          "parent_id": "ao_987654",
          "status": "Active",
          "tenant_id": "tenant_789",
          "updated_at": "2023-04-15T09:30:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agent-organisations - agent-organisation-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentOrganisationCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agent-organisations/{agent_organisation_id}/addresses - agent-organisation-address-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentOrganisationAddressListOutputBody.json",
      "addresses": [
        {
          "address_id": "string",
          "address_line_1": "string",
          "address_line_2": "string",
          "address_type": "string",
          "city": "string",
          "country": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "description": "string",
          "entity_id": "string",
          "entity_type": "string",
          "state": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "zipcode": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agent-organisations/{agent_organisation_id}/addresses - agent-organisation-address-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateAgentOrganisationAddressOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agent-organisations/{agent_organisation_id}/agents - agent-organisation-agent-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentOrganisationAgentListOutputBody.json",
      "agents": [
        {
          "active": true,
          "additional_attributes": "string",
          "advisor_identification": "string",
          "agent_id": "string",
          "compliance_record": "string",
          "contacts": {
            "key": {
              "type": {},
              "value": {}
            }
          },
          "created_at": "2026-01-15T10:30:00Z",
          "date_of_birth": "string",
          "external_id": "string",
          "first_name": "string",
          "gender": "string",
          "idp_subject": "string",
          "last_name": "string",
          "license": "string",
          "manager_id": "string",
          "marital_status": "string",
          "middle_name": "string",
          "nationality": "string",
          "organisation_id": "string",
          "person_id": "string",
          "preferred_contact_method": "string",
          "qualification": "string",
          "regulatory_status": "string",
          "relationship_extra_properties": {
            "key": "string"
          },
          "relationship_type": "string",
          "specialization": "string",
          "ssn": "string",
          "suffix": "string",
          "tenant_id": "string",
          "title": "string",
          "type": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "years_of_experience": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agent-organisations/{agent_organisation_id}/client-organisations - agent-organisation-client-organisation-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentOrganisationClientOrganisationListOutputBody.json",
      "organisations": [
        {
          "client_organisation_role": "string",
          "client_organisation_type": "string",
          "description": "string",
          "id": "string",
          "name": "string",
          "relationship_status": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agent-organisations/{agent_organisation_id}/contacts - agent-organisation-contact-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientContactListOutputBody.json",
      "contacts": [
        {
          "agent_id": "string",
          "agent_organisation_id": "string",
          "client_id": "string",
          "client_organisation_id": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "id": "string",
          "role": "string",
          "tenant_id": "string",
          "type": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "value": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agent-organisations/{agent_organisation_id}/contacts - agent-organisation-contact-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateContactDetailsOutputBody.json",
      "ids": [
        "cd_1",
        "cd_2"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agent-organisations/{id} - agent-organisation-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentOrganisationGetOutputBody.json",
      "agent_organisation": {
        "agent_organisation_role": "Advisor",
        "agent_organisation_type": "Corporation",
        "created_at": "2023-04-01T12:00:00Z",
        "description": "A leading advisory firm specializing in wealth management",
        "external_id": "ext_123456",
        "extra_properties": {
          "employees": "50",
          "licenses": "Series 7, Series 66",
          "specialty": "Wealth Management"
        },
        "id": "ao_123456",
        "name": "Acme Advisors",
        "parent_id": "ao_987654",
        "status": "Active",
        "tenant_id": "tenant_789",
        "updated_at": "2023-04-15T09:30:00Z"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents - agent-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentCreateOutputBody.json",
      "id": "agent_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents-list - agent-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentListOutputBody.json",
      "agents": [
        {
          "active": true,
          "agent_id": "ag_123456",
          "email": "john.doe@example.com",
          "external_id": "ext_789",
          "firstname": "John",
          "idp_subject": "auth0|123456",
          "lastname": "Doe",
          "manager_id": "ag_789",
          "type": "Financial Advisor"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agents/id-by-external-id - agent-id-by-external-id

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetAgentIDByExternalIDOutputBody.json",
      "agent_id": "ag_789",
      "email": "john.doe@example.com",
      "first_name": "John",
      "last_name": "Doe",
      "middle_name": "Doe"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agents/oauth-tokens - agent-oauth-token-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentOauthTokensListOutputBody.json",
      "tokens": [
        {
          "$schema": "https://example.com/schemas/AgentOauthTokenResponse.json",
          "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
          "accounts": [
            {
              "account_id": {},
              "account_name": {},
              "base_uri": {},
              "is_default": {}
            }
          ],
          "agent_id": "ag_123",
          "created_at": "2024-01-01T00:00:00Z",
          "expires_at": "2024-01-01T01:00:00Z",
          "external_id": "user@example.com",
          "id": "aot_01k4q8ef9zfmxsh3j80jhs8zky",
          "provider": "docusign",
          "refresh_token_expires_at": "2024-01-31T00:55:00Z",
          "tenant_id": "test-tenant",
          "updated_at": "2024-01-01T00:00:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents/oauth-tokens - agent-oauth-token-create

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents/oauth-tokens/{token_id}/reconnect - agent-oauth-token-reconnect

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents/oauth-tokens/{token_id}/refresh - agent-oauth-token-refresh

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentOauthTokenResponse.json",
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "accounts": [
        {
          "account_id": "abc123",
          "account_name": "Production Account",
          "base_uri": "https://demo.docusign.net",
          "is_default": true
        }
      ],
      "agent_id": "ag_123",
      "created_at": "2024-01-01T00:00:00Z",
      "expires_at": "2024-01-01T01:00:00Z",
      "external_id": "user@example.com",
      "id": "aot_01k4q8ef9zfmxsh3j80jhs8zky",
      "provider": "docusign",
      "refresh_token_expires_at": "2024-01-31T00:55:00Z",
      "tenant_id": "test-tenant",
      "updated_at": "2024-01-01T00:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/agents/oauth-tokens/{token_id}/remove - agent-oauth-token-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents/search - agent-search

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentSearchOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "results": [
        {
          "agent_external_id": "ext_agent_456",
          "agent_id": "agent_123",
          "agent_type": "advisor",
          "all_client_organisations": [
            {
              "client_organisation_role": {},
              "client_organisation_type": {},
              "description": {},
              "direct_assignment": {},
              "external_id": {},
              "id": {},
              "name": {},
              "relationship_type": {},
              "status": {}
            }
          ],
          "contacts": {
            "primary_email": {
              "role": "primary_email",
              "value": "john@example.com"
            }
          },
          "created_at": "2024-01-01T09:00:00Z",
          "first_name": "John",
          "last_name": "Doe",
          "primary_client_organisation_id": "org_123",
          "primary_client_organisation_name": "Acme Corp",
          "primary_relationship_type": "advisor",
          "suffix": "Jr.",
          "title": "Senior Advisor",
          "updated_at": "2024-01-01T09:00:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/agents/{agent_id}/addresses - agent-address-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agents/{agent_id}/addresses - agent-address-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentAddressListOutputBody.json",
      "addresses": [
        {
          "AddressID": "string",
          "AddressLine1": "string",
          "AddressLine2": "string",
          "AddressType": "string",
          "City": "string",
          "Country": "string",
          "CreatedAt": "2026-01-15T10:30:00Z",
          "Description": "string",
          "EntityID": "string",
          "EntityType": "string",
          "State": "string",
          "UpdatedAt": "2026-01-15T10:30:00Z",
          "Zipcode": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents/{agent_id}/addresses - agent-address-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateAgentAddressOutputBody.json",
      "id": "addr_456"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/agents/{agent_id}/addresses - agent-address-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/UpdateAgentAddressOutputBody.json",
      "id": "addr_456"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents/{agent_id}/advisor-repcodes - advisor-repcode-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AdvisorRepcodeCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agents/{agent_id}/advisor-repcodes/{repcode_id} - advisor-repcode-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AdvisorRepcodeGetOutputBody.json",
      "repcode": {
        "advisor_id": "string",
        "description": "string",
        "repcode_id": "string",
        "tenant_id": "string"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agents/{agent_id}/client-organisations - agent-client-organisation-relationship-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentClientOrganisationRelationshipListOutputBody.json",
      "client_organisations": [
        {
          "agent_id": "ag_123abc",
          "client_organisation_id": "org_123abc",
          "client_organisation_role": "Client",
          "client_organisation_type": "Corporation",
          "description": "A leading technology company",
          "extra_properties": {
            "annual_revenue": "$500M",
            "employees": "5000",
            "industry": "Technology"
          },
          "name": "Acme Corp",
          "parent_id": "org_123abc",
          "relationship_type": "Primary",
          "tenant_id": "tenant_123abc"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents/{agent_id}/client-relationships - agent-client-organisation-relationship-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentClientOrganisationRelationshipCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/agents/{agent_id}/client-relationships/{client_organisation_id}/{relationship_type} - agent-client-organisation-relationship-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agents/{agent_id}/contacts - agent-contact-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentContactListOutputBody.json",
      "contacts": [
        {
          "agent_id": "string",
          "agent_organisation_id": "string",
          "client_id": "string",
          "client_organisation_id": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "id": "string",
          "role": "string",
          "tenant_id": "string",
          "type": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "value": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents/{agent_id}/contacts - agent-contact-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateContactDetailsOutputBody.json",
      "ids": [
        "cd_1",
        "cd_2"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents/{agent_id}/document - agent-document-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateDocumentCatalogEntryOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agents/{agent_id}/documents - agent-documents-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetDocumentsOutputBody.json",
      "documents": [
        {
          "access_level": "private",
          "additional_attributes": {
            "department": "finance",
            "priority": "high"
          },
          "agent_id": "agent_123",
          "approved_by": "user_123",
          "client_id": "client_789",
          "created_at": "2024-01-15T14:30:00Z",
          "deleted_at": "2024-02-15T14:30:00Z",
          "description": "Client's 2023 tax return document",
          "document_status": "approved",
          "document_subtype": "2023 Tax Return",
          "document_type": "bank_statement",
          "external_id": "DOC-2024-01",
          "file_name": "tax_return_2023.pdf",
          "file_type": "pdf",
          "id": "doc_123",
          "rejection_reason": "Invalid format",
          "retention_policy": "5 years",
          "service_agreement_id": "sa_456",
          "storage_container": "my-document-bucket",
          "storage_mode": "PLATFORM_MANAGED",
          "storage_object_key": "clients/2024/doc.pdf",
          "storage_provider": "S3",
          "tenant_id": "tenant_456",
          "updated_at": "2024-01-15T14:30:00Z",
          "upload_date": "2024-01-15T14:30:00Z",
          "upload_status": "VERIFIED"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/agents/{agent_id}/meetings - meeting-agent-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingAgentListOutputBody.json",
      "meetings": [
        {
          "$schema": "https://example.com/schemas/MeetingDescription.json",
          "actions_skipped": false,
          "ai_transcript_id": "123",
          "client_organisation_external_id": "ext_org_123",
          "client_organisation_id": "org_123",
          "client_organisation_name": "Acme Inc.",
          "created_at": "2024-03-10T09:00:00Z",
          "description": "Quarterly performance review meeting",
          "end_time": "2024-03-15T15:00:00Z",
          "external_id": "1234567890",
          "extra_properties": {},
          "id": "m_123",
          "initiating_agent": {
            "first_name": "John",
            "id": "a_123",
            "last_name": "Smith"
          },
          "is_historical": false,
          "location": "Conference Room A",
          "meeting_link": "https://meet.example.com/123",
          "meeting_type": "review",
          "my_meeting": true,
          "participants": [
            {
              "first_name": "John",
              "id": "a_123",
              "last_name": "Smith",
              "type": "agent"
            }
          ],
          "primary_client_id": "c_123",
          "record_type": "Historical_FSC_Advisory_Sales",
          "start_time": "2024-03-15T14:00:00Z",
          "status": "scheduled",
          "subject": "Quarterly Review",
          "tenant_id": "123",
          "updated_at": "2024-03-10T09:00:00Z"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agents/{id} - agent-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentGetOutputBody.json",
      "agent": {
        "active": true,
        "additional_attributes": {
          "key": "string"
        },
        "advisor_identification": "string",
        "compliance_record": "string",
        "created_at": "2026-01-15T10:30:00Z",
        "external_id": "string",
        "id": "string",
        "license": "string",
        "manager_id": "string",
        "organisation_id": "string",
        "person": {
          "created_at": "2026-01-15T10:30:00Z",
          "date_of_birth": "2026-01-15T10:30:00Z",
          "external_id": "string",
          "first_name": "string",
          "gender": "string",
          "id": "string",
          "last_name": "string",
          "marital_status": "string",
          "middle_name": "string",
          "nationality": "string",
          "preferred_contact_method": "string",
          "ssn": "string",
          "suffix": "string",
          "tenant_id": "string",
          "title": "string",
          "updated_at": "2026-01-15T10:30:00Z"
        },
        "person_id": "string",
        "qualification": "string",
        "regulatory_status": "string",
        "specialization": "string",
        "tenant_id": "string",
        "type": "string",
        "updated_at": "2026-01-15T10:30:00Z",
        "years_of_experience": "string"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/agents/{id} - agent-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentUpdateOutputBody.json",
      "id": "agent_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/agents/{id}/person-view - agent-person-view-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AgentPersonViewGetOutputBody.json",
      "agent": {
        "active": true,
        "additional_attributes": "string",
        "advisor_identification": "string",
        "agent_id": "string",
        "compliance_record": "string",
        "contacts": {
          "key": {
            "type": "string",
            "value": "string"
          }
        },
        "created_at": "2026-01-15T10:30:00Z",
        "date_of_birth": "string",
        "external_id": "string",
        "first_name": "string",
        "gender": "string",
        "idp_subject": "string",
        "last_name": "string",
        "license": "string",
        "manager_id": "string",
        "marital_status": "string",
        "middle_name": "string",
        "nationality": "string",
        "organisation_id": "string",
        "person_id": "string",
        "preferred_contact_method": "string",
        "qualification": "string",
        "regulatory_status": "string",
        "relationship_extra_properties": {
          "key": "string"
        },
        "relationship_type": "string",
        "specialization": "string",
        "ssn": "string",
        "suffix": "string",
        "tenant_id": "string",
        "title": "string",
        "type": "string",
        "updated_at": "2026-01-15T10:30:00Z",
        "years_of_experience": "string"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/aggregate - object-aggregate-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ObjectAggregateOutputBody.json",
      "aggregate_result": 10
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/array-forms-config - array-forms-config-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ArrayFormsConfigDescription.json",
      "configs": [
        {
          "array_child_form_id": "f_456",
          "array_property_name": "array_property_name",
          "parent_task_form_id": "f_456"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/array-forms-config - array-forms-config-put

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/authorization - authorization-check

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/book-of-business - book-of-business

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/BookOfBusinessOutputBody.json",
      "protection_pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "protection_policies": [
        {
          "additional_attributes": {
            "key": "string"
          },
          "agent_organisation_external_id": "00057",
          "agent_organisation_id": "ao_123",
          "agent_organisation_name": "Howard J Elias Inc",
          "agents": [
            {
              "agent_external_id": {},
              "agent_id": {},
              "agent_name": {},
              "effective_from": {},
              "effective_to": {},
              "role": {}
            }
          ],
          "carrier": "State Farm",
          "client_organisation_external_id": "SF-CO-001",
          "client_organisation_id": "co_123",
          "client_organisation_name": "Acme Corporation",
          "clients": [
            {
              "client_external_id": {},
              "client_id": {},
              "client_name": {},
              "effective_from": {},
              "effective_to": {},
              "role": {}
            }
          ],
          "created_at": "2024-01-01T09:00:00Z",
          "effective_date": "2024-02-01T00:00:00Z",
          "external_id": "SF-POL-001",
          "face_amount": "250000.00",
          "id": "policy_123",
          "issue_date": "2024-01-15T00:00:00Z",
          "line_of_business": "Life",
          "policy_number": "POL-2024-001",
          "premium_amount": "500.00",
          "premium_frequency": "Monthly",
          "status": "Active",
          "subtype": "Term Life",
          "tenant_id": "t_123",
          "termination_date": "2054-02-01T00:00:00Z",
          "updated_at": "2024-01-15T14:30:00Z",
          "valuations": [
            {
              "business_date": {},
              "canonical_valuation_type": {},
              "currency": {},
              "source_measure_code": {},
              "source_measure_field": {},
              "source_measure_label": {},
              "valuation_amount": {},
              "valuation_type": {}
            }
          ]
        }
      ],
      "summary": {
        "protection_lines_of_business": [
          "Life",
          "Annuity"
        ],
        "protection_policy_count": 11,
        "wealth_account_count": 50
      },
      "wealth_accounts": [
        {
          "account_created_at": "2026-01-15T10:30:00Z",
          "account_id": "acct_01j9k2m3n4p5q6r7s8t9u0",
          "account_notes": "string",
          "account_number": "1234567890",
          "account_updated_at": "2026-01-15T10:30:00Z",
          "additional_attributes": {
            "key": {}
          },
          "balance": "50000.00",
          "beneficiary_first_name": "Alice",
          "beneficiary_id": "client_01j9k2m3n4p5q6r7s8t9u2",
          "beneficiary_last_name": "Smith",
          "cash_balance": "5000.00",
          "client_organisation_description": "string",
          "client_organisation_external_id": "co_123456",
          "client_organisation_id": "org_01j9k2m3n4p5q6r7s8t9u0",
          "client_organisation_name": "Smith Family Trust",
          "client_organisation_role": "beneficiary",
          "client_organisation_type": "family",
          "closed_date": "2026-01-15T10:30:00Z",
          "currency_code": "USD",
          "custodian": "Fidelity",
          "external_id": "fa_123456",
          "model_portfolio": "Aggressive Growth",
          "name": "Retirement Account",
          "open_date": "2026-01-15T10:30:00Z",
          "primary_owner_first_name": "John",
          "primary_owner_id": "client_01j9k2m3n4p5q6r7s8t9u0",
          "primary_owner_last_name": "Smith",
          "product_model": "Growth",
          "product_name": "Traditional IRA",
          "product_type": "IRA",
          "relationship_status": "Active",
          "rep_splits": [
            {
              "balance": {},
              "business_date": {},
              "currency": {},
              "writing_code": {}
            }
          ],
          "secondary_owner_first_name": "Jane",
          "secondary_owner_id": "client_01j9k2m3n4p5q6r7s8t9u1",
          "secondary_owner_last_name": "Smith",
          "status": "active",
          "tax_status": "taxable"
        }
      ],
      "wealth_pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/book-of-business/summary - book-of-business-summary

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/BookOfBusinessHouseholdSummaryAPI.json",
      "annualized_premium_disability": "48000.00",
      "annualized_premium_life": "125000.00",
      "annualized_premium_protection_split_adjusted": "109500.00",
      "annualized_premium_protection_total": "173000.00",
      "disability_household_count": 7,
      "fixed_annuity_household_count": 9,
      "household_count": 57,
      "life_household_count": 18,
      "pending_annuity_household_count": 4,
      "total_aum_wealth": "2500000.50",
      "total_clients_count": 44,
      "wealth_household_count": 41
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/business-groups - business-group-list-by-role

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "$schema": "https://example.com/schemas/BusinessGroup.json",
        "additional_attributes": {
          "key": "value"
        },
        "agents": {
          "Director": {
            "agent_id": "ag_123",
            "first_name": "John",
            "last_name": "Doe"
          }
        },
        "created_at": "2024-01-01T09:00:00Z",
        "description": "This is the first region.",
        "external_id": "bg_123",
        "group_type": "region",
        "id": "bg_123",
        "name": "Region 1",
        "status": "active",
        "tenant_id": "t_123",
        "updated_at": "2024-01-01T09:00:00Z"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/business-groups/coverage-details/search - business-group-coverage-details-search

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/SearchBusinessGroupCoverageDetailsOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "results": [
        {
          "agent_count": 5,
          "agents": {
            "advisor": [
              {
                "agent_id": "agent_123",
                "first_name": "John",
                "last_name": "Doe"
              },
              {
                "agent_id": "agent_456",
                "first_name": "Jane",
                "last_name": "Smith"
              }
            ]
          },
          "business_group_created_at": "2024-01-01T09:00:00Z",
          "business_group_description": "Geographic coverage for Northwest",
          "business_group_extra_properties": {
            "priority": "high"
          },
          "business_group_id": "bg_123",
          "business_group_name": "Northwest Region Team",
          "business_group_status": "active",
          "business_group_type": "geographic",
          "business_group_updated_at": "2024-01-01T09:00:00Z",
          "capacity_limit": 150,
          "client_organisation_count": 10,
          "coverage_description": "Northwest Region",
          "coverage_value": "northwest",
          "coverages": [
            {
              "coverage_id": "cov_001",
              "priority": 1,
              "value": "northeast"
            }
          ],
          "priority": 1
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/business-groups/coverage-lookups/summary - business-group-coverage-lookup-summary

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetBusinessGroupCoverageLookupSummaryOutputBody.json",
      "coverage_summaries": [
        {
          "business_groups": [
            {
              "agent_count": {},
              "business_group_external_id": {},
              "business_group_extra_properties": {},
              "business_group_id": {},
              "business_group_name": {},
              "capacity_limit": {},
              "client_count": {},
              "priority": {}
            }
          ],
          "category": "business_group_coverage",
          "coverage_description": "Northeast Region Coverage",
          "coverage_value": "Northeast",
          "lookup_id": "lookup_northeast",
          "team_count": 5,
          "total_agents": 45,
          "total_clients": 230
        }
      ],
      "totals": {
        "total_agents": 320,
        "total_clients": 1250,
        "total_lookups": 8,
        "total_teams": 45
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/business-groups/find-by-coverage - business-groups-find-by-coverage

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "business_group_id": "bg_123",
        "business_group_name": "Northeast Team",
        "coverage_matches": [
          {
            "capacity_limit": 50,
            "coverage_lookup_id": "lkp_123",
            "coverage_value": "northeast",
            "priority": 1
          }
        ],
        "priority": 1
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/business-groups/{business_group_id} - business-group-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/business-groups/{business_group_id} - business-group-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/BusinessGroupUpdateOutputBody.json",
      "id": "bg_01JGQK9X1ABCDEFGHIJKLMNOP"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/business-groups/{business_group_id}/coverage - business-group-coverage-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "business_group_id": "bg_123",
        "capacity_limit": 50,
        "coverage_description": "Northeast Region",
        "coverage_lookup_id": "lkp_123",
        "coverage_value": "northeast",
        "created_at": "2024-01-01T09:00:00Z",
        "id": "bgc_01JGQK9X1ABCDEFGHIJKLMNOP",
        "priority": 1,
        "tenant_id": "t_123",
        "updated_at": "2024-01-01T09:00:00Z"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/business-groups/{business_group_id}/coverage - business-group-coverage-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateBusinessGroupCoverageOutputBody.json",
      "id": "bgc_01JGQK9X1ABCDEFGHIJKLMNOP"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/business-groups/{business_group_id}/members - business-group-add-member

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/business-groups/{business_group_id}/members/{agent_id}/roles/{role} - business-group-remove-member

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/cdc/pipeline-configs - cdc-pipeline-config-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "$schema": "https://example.com/schemas/CDCPipelineConfigResponse.json",
        "config": {},
        "created_at": "2026-01-15T10:30:00Z",
        "has_credentials": true,
        "id": "string",
        "pipeline": "string",
        "tenant_id": "string",
        "updated_at": "2026-01-15T10:30:00Z"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/cdc/pipeline-configs/{pipeline} - cdc-pipeline-config-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/cdc/pipeline-configs/{pipeline} - cdc-pipeline-config-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CDCPipelineConfigResponse.json",
      "config": {},
      "created_at": "2026-01-15T10:30:00Z",
      "has_credentials": true,
      "id": "string",
      "pipeline": "string",
      "tenant_id": "string",
      "updated_at": "2026-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/cdc/pipeline-configs/{pipeline} - cdc-pipeline-config-upsert

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CDCPipelineConfigResponse.json",
      "config": {},
      "created_at": "2026-01-15T10:30:00Z",
      "has_credentials": true,
      "id": "string",
      "pipeline": "string",
      "tenant_id": "string",
      "updated_at": "2026-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-component/jwt - client-component-jwt-generate

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientComponentJWTOutputBody.json",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "url": "https://testapi.merceradvisors.com/api/v1/Identity/InitiateClientComponent?accessToken=..."
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/client-organisation-relationships/{relationship_id} - client-organisation-relationship-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/client-organisation-relationships/{relationship_id} - client-organisation-relationship-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/UpdateClientOrganisationRelationshipOutputBody.json",
      "success": true
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations - client-organisation-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationListOutputBody.json",
      "organisations": [
        {
          "agent_organisation_id": "ao_246810",
          "agents": {
            "key": {}
          },
          "approx_aum": 1000000000,
          "client_organisation_role": "Primary Client",
          "client_organisation_type": "Corporation",
          "client_segmentation": "High Net Worth",
          "created_at": "2023-04-01T12:00:00Z",
          "description": "A leading technology company specializing in innovative solutions",
          "external_id": "ext_123456",
          "extra_properties": {
            "annual_revenue": "$500M",
            "employees": "5000",
            "industry": "Technology"
          },
          "growth_opportunity_next_step_date": "2023-05-01",
          "id": "co_123456",
          "last_interaction_date": "2024-03-15",
          "name": "Acme Corporation",
          "next_meeting": "2023-05-01",
          "notes": "Important client notes",
          "parent_id": "co_987654",
          "relationship_start_date": "2020-01-01",
          "relationship_status": "EXISTING",
          "tenant_id": "tenant_789",
          "updated_at": "2023-04-15T09:30:00Z"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-organisations - client-organisation-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations-graph/{client_organisation_id} - client-organisation-graph-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationGraphDocument.json",
      "agent_organisation": {
        "agent_organisation_role": "string",
        "agent_organisation_type": "string",
        "id": "string",
        "name": "string"
      },
      "agents": {
        "key": {}
      },
      "client_addresses": {
        "key": {
          "key": {
            "address_line1": "string",
            "address_line2": "string",
            "city": "string",
            "country": "string",
            "state": "string",
            "updated_at": "2026-01-15T10:30:00Z",
            "zipcode": "string"
          }
        }
      },
      "client_organisation": {
        "approx_aum": 1.0,
        "client_organisation_role": "string",
        "client_organisation_type": "string",
        "client_segmentation": "string",
        "description": "string",
        "external_id": "string",
        "extra_properties": {
          "key": {}
        },
        "growth_opportunity_next_step_date": "2026-01-15T10:30:00Z",
        "id": "string",
        "is_mercer_employee": true,
        "name": "string",
        "national_css_coverage": true,
        "next_meeting": "2026-01-15T10:30:00Z",
        "relationship_status": "string",
        "updated_at": "2026-01-15T10:30:00Z"
      },
      "clients": {
        "key": {
          "id": "string",
          "person": {
            "first_name": "string",
            "last_name": "string"
          },
          "role": "string",
          "updated_at": "2026-01-15T10:30:00Z"
        }
      },
      "document_revision": "string",
      "financial_accounts": [
        {
          "account_created_at": "2026-01-15T10:30:00Z",
          "account_id": "string",
          "account_notes": "string",
          "account_number": "string",
          "account_updated_at": "2026-01-15T10:30:00Z",
          "additional_attributes": {
            "key": {}
          },
          "balance": "string",
          "beneficiary_first_name": "string",
          "beneficiary_id": "string",
          "beneficiary_last_name": "string",
          "cash_balance": "string",
          "client_organisation_description": "string",
          "client_organisation_external_id": "string",
          "client_organisation_id": "string",
          "client_organisation_name": "string",
          "client_organisation_role": "string",
          "client_organisation_type": "string",
          "closed_date": "2026-01-15T10:30:00Z",
          "currency_code": "string",
          "custodian": "string",
          "external_id": "string",
          "model_portfolio": "string",
          "name": "string",
          "open_date": "2026-01-15T10:30:00Z",
          "primary_owner_first_name": "string",
          "primary_owner_id": "string",
          "primary_owner_last_name": "string",
          "product_model": "string",
          "product_name": "string",
          "product_type": "string",
          "relationship_status": "string",
          "rep_splits": [
            {
              "balance": {},
              "business_date": {},
              "currency": {},
              "writing_code": {}
            }
          ],
          "secondary_owner_first_name": "string",
          "secondary_owner_id": "string",
          "secondary_owner_last_name": "string",
          "status": "string",
          "tax_status": "string",
          "tenant_id": "string"
        }
      ],
      "office": "string",
      "org_address_summary": {
        "key": {}
      },
      "org_contacts": [
        {
          "role": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "region": "string",
      "schema_version": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/client-organisations-graph/{client_organisation_id} - client-organisation-graph-patch

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationGraphDocument.json",
      "agent_organisation": {
        "agent_organisation_role": "string",
        "agent_organisation_type": "string",
        "id": "string",
        "name": "string"
      },
      "agents": {
        "key": {}
      },
      "client_addresses": {
        "key": {
          "key": {
            "address_line1": "string",
            "address_line2": "string",
            "city": "string",
            "country": "string",
            "state": "string",
            "updated_at": "2026-01-15T10:30:00Z",
            "zipcode": "string"
          }
        }
      },
      "client_organisation": {
        "approx_aum": 1.0,
        "client_organisation_role": "string",
        "client_organisation_type": "string",
        "client_segmentation": "string",
        "description": "string",
        "external_id": "string",
        "extra_properties": {
          "key": {}
        },
        "growth_opportunity_next_step_date": "2026-01-15T10:30:00Z",
        "id": "string",
        "is_mercer_employee": true,
        "name": "string",
        "national_css_coverage": true,
        "next_meeting": "2026-01-15T10:30:00Z",
        "relationship_status": "string",
        "updated_at": "2026-01-15T10:30:00Z"
      },
      "clients": {
        "key": {
          "id": "string",
          "person": {
            "first_name": "string",
            "last_name": "string"
          },
          "role": "string",
          "updated_at": "2026-01-15T10:30:00Z"
        }
      },
      "document_revision": "string",
      "financial_accounts": [
        {
          "account_created_at": "2026-01-15T10:30:00Z",
          "account_id": "string",
          "account_notes": "string",
          "account_number": "string",
          "account_updated_at": "2026-01-15T10:30:00Z",
          "additional_attributes": {
            "key": {}
          },
          "balance": "string",
          "beneficiary_first_name": "string",
          "beneficiary_id": "string",
          "beneficiary_last_name": "string",
          "cash_balance": "string",
          "client_organisation_description": "string",
          "client_organisation_external_id": "string",
          "client_organisation_id": "string",
          "client_organisation_name": "string",
          "client_organisation_role": "string",
          "client_organisation_type": "string",
          "closed_date": "2026-01-15T10:30:00Z",
          "currency_code": "string",
          "custodian": "string",
          "external_id": "string",
          "model_portfolio": "string",
          "name": "string",
          "open_date": "2026-01-15T10:30:00Z",
          "primary_owner_first_name": "string",
          "primary_owner_id": "string",
          "primary_owner_last_name": "string",
          "product_model": "string",
          "product_name": "string",
          "product_type": "string",
          "relationship_status": "string",
          "rep_splits": [
            {
              "balance": {},
              "business_date": {},
              "currency": {},
              "writing_code": {}
            }
          ],
          "secondary_owner_first_name": "string",
          "secondary_owner_id": "string",
          "secondary_owner_last_name": "string",
          "status": "string",
          "tax_status": "string",
          "tenant_id": "string"
        }
      ],
      "office": "string",
      "org_address_summary": {
        "key": {}
      },
      "org_contacts": [
        {
          "role": "string",
          "type": "string",
          "value": "string"
        }
      ],
      "region": "string",
      "schema_version": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/access-check - client-organisation-access-check

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganizationAccessCheckOutputBody.json",
      "has_access": true
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-organisations/bulk-access-check - client-organisation-bulk-access-check

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganizationBulkAccessCheckOutputBody.json",
      "accessible_ids": [
        "string"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/id-by-external-id - client-organisation-id-by-external-id

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetClientOrganisationIDByExternalIDOutputBody.json",
      "client_organisation_id": "co_789"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/markets - client-organisation-markets

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationMarketAggregationOutputBody.json",
      "markets": [
        "string"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-organisations/opportunities - client-org-opportunities-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrgOpportunitiesListOutputBody.json",
      "opportunities": [
        {
          "amount": "1000000",
          "amount_transferred": "1000000",
          "category": "Expand",
          "client_organisation_external_id": "org_123abc",
          "client_organisation_extra_properties": {
            "annual_revenue": "$500M",
            "employees": "5000",
            "industry": "Technology"
          },
          "client_organisation_growth_opportunity_next_step_date": "2024-12-31",
          "client_organisation_id": "org_123abc",
          "client_organisation_name": "Acme Inc.",
          "client_organisation_status": "prospect",
          "client_organisation_type": "prospect",
          "closed_amount": "1000000",
          "created_at": "2024-01-01T00:00:00Z",
          "description": "Potential investment in emerging markets",
          "expected_close_date": "2024-12-31",
          "expected_revenue": "1000000",
          "external_id": "opp_123",
          "extra_properties": {
            "platform": "Zoom",
            "recording_url": "https://example.com/recording"
          },
          "id": "opp_123abc",
          "import_type": "prospect",
          "is_closed": false,
          "lead_source": "prospect",
          "name": "New Investment Opportunity",
          "next_meeting_date": "2024-12-31",
          "next_step": "Schedule follow-up meeting",
          "next_step_date": "2024-12-31",
          "opportunity_type": "investment",
          "owner_id": "agent_123",
          "probability": 75.5,
          "probability_categorisation": "High",
          "prospective_external_id": "org_123abc",
          "prospective_id": "org_123abc",
          "prospective_name": "Acme Inc.",
          "prospective_type": "prospect",
          "record_type": "Historical_FSC_Advisory_Sales",
          "relationship_type": "prospect",
          "stage": "Identify",
          "stage_changed_date": "2024-01-15T00:00:00Z",
          "status": "open",
          "sub_category": "Manage Balance Sheet",
          "updated_at": "2024-01-01T00:00:00Z",
          "wealth_advisor_agent_id": "agent_123abc",
          "wealth_advisor_first_name": "John",
          "wealth_advisor_last_name": "Doe"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-organisations/opportunities-summary - client-org-opportunities-summary

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrgOpportunitiesSummaryOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "relationship_summaries": [
        {
          "client_organisation_external_id": "ext_org123",
          "client_organisation_extra_properties": {
            "account_bridge": false,
            "ascend_eligible": true,
            "concentrated_positions": true,
            "excess_cash": true,
            "potential_qualified_purchaser": false
          },
          "client_organisation_id": "org123",
          "client_organisation_name": "Acme Corp",
          "client_organisation_type": "Pending NLC",
          "current_aum": "1500000.00",
          "market": "Northeast",
          "next_meeting_date": "2024-01-15T10:00:00Z",
          "next_step_date": "2024-01-20T00:00:00Z",
          "opportunity_ids": [
            "opp_123",
            "opp_456"
          ],
          "tenant_id": "tenant123",
          "total_active_amount": "750000.00",
          "total_deferred_amount": "250000.00",
          "wealth_advisor": {
            "agent_id": "agent123",
            "direct_assignment": true,
            "first_name": "John",
            "last_name": "Doe",
            "middle_name": "A"
          }
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/client-organisations/opportunities/{opportunity_id} - client-org-opportunity-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrgOpportunityUpdateOutputBody.json",
      "id": "coo_123abc"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/tax-pods - client-organisation-tax-pods

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationTaxPodAggregationOutputBody.json",
      "tax_pods": [
        "string"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-organisations/teams/search - team-client-organisation-search

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/SearchTeamsForClientOrganisationsOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "teams": [
        {
          "additional_properties": {
            "priority": "high"
          },
          "client_organisation_client_count": 15,
          "client_organisation_client_segmentation": "Premium",
          "client_organisation_external_id": "co_123",
          "client_organisation_extra_properties": {
            "priority": "high"
          },
          "client_organisation_id": "co_123",
          "client_organisation_name": "Acme Corporation",
          "created_at": "2024-01-01T09:00:00Z",
          "description": "Primary advisory team for the client",
          "id": "ta_123",
          "role": "primary_advisor",
          "team_additional_attributes": {
            "department": "advisory"
          },
          "team_description": "Financial advisory specialists",
          "team_group_type": "team",
          "team_id": "bg_123",
          "team_name": "Advisory Team",
          "team_status": "Active",
          "tenant_id": "t_123",
          "updated_at": "2024-01-01T09:00:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/addresses - client-organisation-address-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationAddressListOutputBody.json",
      "addresses": [
        {
          "address_id": "string",
          "address_line_1": "string",
          "address_line_2": "string",
          "address_type": "string",
          "city": "string",
          "country": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "description": "string",
          "entity_id": "string",
          "entity_type": "string",
          "state": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "zipcode": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/addresses - client-organisation-address-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateClientOrganisationAddressOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/client-organisation-connections - client-organisation-connections-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetClientOrgClientOrgRelationshipsOutputBody.json",
      "relationships": [
        {
          "initiating_client_organisation_external_id": "string",
          "initiating_client_organisation_id": "string",
          "initiating_client_organisation_name": "string",
          "participating_client_organisation_external_id": "string",
          "participating_client_organisation_id": "string",
          "participating_client_organisation_name": "string",
          "relationship_category": "string",
          "relationship_type": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/client-organisation-connections - client-organisation-connection-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateClientOrganisationConnectionOutputBody.json",
      "connection_id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/client-organisation-connections/{connection_id} - client-organisation-connection-delete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DeleteClientOrganisationConnectionOutputBody.json"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/clients - client-organisation-client-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationClientListOutputBody.json",
      "clients": [
        {
          "additional_attributes": {
            "key": "string"
          },
          "client_external_id": "string",
          "client_id": "string",
          "client_organisation_external_id": "string",
          "client_organisation_id": "string",
          "first_name": "string",
          "last_name": "string",
          "role": "string",
          "tenant_id": "string",
          "title": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/clients - client-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientCreateOutputBody.json",
      "id": "client_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/contacts - client-organisation-contact-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationContactListOutputBody.json",
      "contacts": [
        {
          "agent_id": "string",
          "agent_organisation_id": "string",
          "client_id": "string",
          "client_organisation_id": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "id": "string",
          "role": "string",
          "tenant_id": "string",
          "type": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "value": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/contacts - client-organisation-contact-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateContactDetailsOutputBody.json",
      "ids": [
        "cd_1",
        "cd_2"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/dashboard - relationship-dashboard-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RelationshipDashboardByIDOutputBody.json",
      "relationship": {
        "addresses": {
          "BILLING": {
            "city": "Anytown",
            "state": "CA"
          }
        },
        "agent_organisation_id": "org_456def",
        "agent_organisation_name": "XYZ Services",
        "agent_organisation_role": "Agent",
        "agent_organisation_type": "LLC",
        "agents": {
          "PRIMARY": {
            "first_name": "John",
            "last_name": "Doe"
          }
        },
        "approx_aum": 1000000,
        "aum": 1000000,
        "client_organisation_created_at": "2021-01-01T00:00:00Z",
        "client_organisation_description": "A leading technology company",
        "client_organisation_external_id": "org_123",
        "client_organisation_extra_properties": {
          "aum": 1000000000,
          "employees": 500,
          "industry": "Technology"
        },
        "client_organisation_growth_opportunity_next_step": "2024-12-31T00:00:00Z",
        "client_organisation_id": "org_123abc",
        "client_organisation_name": "Acme Corp",
        "client_organisation_role": "Client",
        "client_organisation_type": "Corporation",
        "client_organisation_updated_at": "2021-01-01T00:00:00Z",
        "client_relationship_status": "EXISTING",
        "client_segmentation": "High Net Worth",
        "last_interaction_date": "2024-03-15T00:00:00Z",
        "next_meeting": "2021-01-01T00:00:00Z",
        "office": "Example Office",
        "region": "Example Business Group",
        "relationship_start_date": "2020-01-01T00:00:00Z",
        "valuation": {
          "as_of_business_date": "2025-06-15",
          "authority": "source_asserted",
          "currency": "USD",
          "source_kind": "summary_balance",
          "source_system": "SALESFORCE",
          "total_amount": "2500000.50"
        }
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/financial-accounts - financial-accounts-by-client-organisation-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/FinancialAccountsByClientOrganisationGetOutputBody.json",
      "financial_accounts": [
        {
          "account_created_at": "2026-01-15T10:30:00Z",
          "account_id": "acct_01j9k2m3n4p5q6r7s8t9u0",
          "account_notes": "string",
          "account_number": "1234567890",
          "account_updated_at": "2026-01-15T10:30:00Z",
          "additional_attributes": {
            "key": {}
          },
          "balance": "50000.00",
          "beneficiary_first_name": "Alice",
          "beneficiary_id": "client_01j9k2m3n4p5q6r7s8t9u2",
          "beneficiary_last_name": "Smith",
          "cash_balance": "5000.00",
          "client_organisation_description": "string",
          "client_organisation_external_id": "co_123456",
          "client_organisation_id": "org_01j9k2m3n4p5q6r7s8t9u0",
          "client_organisation_name": "Smith Family Trust",
          "client_organisation_role": "beneficiary",
          "client_organisation_type": "family",
          "closed_date": "2026-01-15T10:30:00Z",
          "currency_code": "USD",
          "custodian": "Fidelity",
          "external_id": "fa_123456",
          "model_portfolio": "Aggressive Growth",
          "name": "Retirement Account",
          "open_date": "2026-01-15T10:30:00Z",
          "primary_owner_first_name": "John",
          "primary_owner_id": "client_01j9k2m3n4p5q6r7s8t9u0",
          "primary_owner_last_name": "Smith",
          "product_model": "Growth",
          "product_name": "Traditional IRA",
          "product_type": "IRA",
          "relationship_status": "active",
          "secondary_owner_first_name": "Jane",
          "secondary_owner_id": "client_01j9k2m3n4p5q6r7s8t9u1",
          "secondary_owner_last_name": "Smith",
          "status": "active",
          "tax_status": "taxable",
          "valuations": [
            {
              "business_date": {},
              "canonical_valuation_type": {},
              "currency": {},
              "source_measure_code": {},
              "source_measure_field": {},
              "source_measure_label": {},
              "valuation_amount": {},
              "valuation_type": {}
            }
          ]
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/policies - policies-by-client-organisation-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PoliciesByClientOrganisationGetOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "policies": [
        {
          "additional_attributes": {
            "key": "string"
          },
          "agent_organisation_external_id": "00057",
          "agent_organisation_id": "ao_123",
          "agent_organisation_name": "Howard J Elias Inc",
          "agents": [
            {
              "agent_external_id": {},
              "agent_id": {},
              "agent_name": {},
              "effective_from": {},
              "effective_to": {},
              "role": {}
            }
          ],
          "carrier": "State Farm",
          "client_organisation_external_id": "SF-CO-001",
          "client_organisation_id": "co_123",
          "client_organisation_name": "Acme Corporation",
          "clients": [
            {
              "client_external_id": {},
              "client_id": {},
              "client_name": {},
              "effective_from": {},
              "effective_to": {},
              "role": {}
            }
          ],
          "created_at": "2024-01-01T09:00:00Z",
          "effective_date": "2024-02-01T00:00:00Z",
          "external_id": "SF-POL-001",
          "face_amount": "250000.00",
          "id": "policy_123",
          "issue_date": "2024-01-15T00:00:00Z",
          "line_of_business": "Life",
          "policy_number": "POL-2024-001",
          "premium_amount": "500.00",
          "premium_frequency": "Monthly",
          "status": "Active",
          "subtype": "Term Life",
          "tenant_id": "t_123",
          "termination_date": "2054-02-01T00:00:00Z",
          "updated_at": "2024-01-15T14:30:00Z",
          "valuations": [
            {
              "business_date": {},
              "canonical_valuation_type": {},
              "currency": {},
              "source_measure_code": {},
              "source_measure_field": {},
              "source_measure_label": {},
              "valuation_amount": {},
              "valuation_type": {}
            }
          ]
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/relationships - client-organisation-relationships-get-all

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetAllClientOrganisationRelationshipsOutputBody.json",
      "connected_clients": [
        {
          "addresses": [
            {
              "address_line1": {},
              "address_line2": {},
              "city": {},
              "country": {},
              "state": {},
              "zipcode": {}
            }
          ],
          "age": 30,
          "client_organisation_id": "org_123",
          "client_organisation_type": "Corporation",
          "client_segmentation": "High Net Worth",
          "connection_extra_properties": {
            "anniversary_date": "2015-06-20",
            "shared_accounts": "joint_checking"
          },
          "contacts": [
            {
              "role": {},
              "type": {},
              "value": {}
            }
          ],
          "current_employer": "Acme Inc.",
          "dob": "2021-01-01",
          "employment_status": "Employed",
          "external_id": "ext_123",
          "extra_properties": {
            "annual_revenue": "$500M",
            "employees": "5000",
            "industry": "Technology"
          },
          "first_name": "John",
          "gender": "Male",
          "id": "cli_123",
          "last_name": "Doe",
          "marital_status": "Married",
          "middle_name": "James",
          "name": "Acme Corp",
          "occupation": "Software Engineer",
          "preferred_name": "John",
          "raw_roles": "Spouse",
          "relationship_category": "client_relationships",
          "relationship_extra_properties": {
            "annual_revenue": "$500M",
            "employees": "5000",
            "industry": "Technology"
          },
          "relationship_id": "rel_456",
          "role": "Primary Client",
          "ssn": "123-45-6789",
          "status": "Active",
          "subtype": "Client",
          "suffix": "Jr.",
          "title": "Mr."
        }
      ],
      "connected_organisations": [
        {
          "connection_extra_properties": {
            "ownership_percentage": "75.5",
            "voting_rights": "controlling"
          },
          "connection_id": "conn_456",
          "external_id": "ext_789",
          "id": "org_789",
          "name": "Globex Corp",
          "relationship_category": "organization_relationships",
          "role": "Primary Client"
        }
      ],
      "member_clients": [
        {
          "addresses": [
            {
              "address_line1": {},
              "address_line2": {},
              "city": {},
              "country": {},
              "state": {},
              "zipcode": {}
            }
          ],
          "age": 30,
          "client_organisation_id": "org_123",
          "client_organisation_type": "Corporation",
          "client_segmentation": "High Net Worth",
          "connection_extra_properties": {
            "anniversary_date": "2015-06-20",
            "shared_accounts": "joint_checking"
          },
          "contacts": [
            {
              "role": {},
              "type": {},
              "value": {}
            }
          ],
          "current_employer": "Acme Inc.",
          "dob": "2021-01-01",
          "employment_status": "Employed",
          "external_id": "ext_123",
          "extra_properties": {
            "annual_revenue": "$500M",
            "employees": "5000",
            "industry": "Technology"
          },
          "first_name": "John",
          "gender": "Male",
          "id": "cli_123",
          "last_name": "Doe",
          "marital_status": "Married",
          "middle_name": "James",
          "name": "Acme Corp",
          "occupation": "Software Engineer",
          "preferred_name": "John",
          "raw_roles": "Spouse",
          "relationship_category": "client_relationships",
          "relationship_extra_properties": {
            "annual_revenue": "$500M",
            "employees": "5000",
            "industry": "Technology"
          },
          "relationship_id": "rel_456",
          "role": "Primary Client",
          "ssn": "123-45-6789",
          "status": "Active",
          "subtype": "Client",
          "suffix": "Jr.",
          "title": "Mr."
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/rmds - rmd-list-by-client-organisation

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ListRMDsByClientOrganisationIDOutputBody.json",
      "rmds": [
        {
          "assigned_agent_first_name": "string",
          "assigned_agent_last_name": "string",
          "assigned_to_id": "string",
          "client_first_name": "string",
          "client_id": "string",
          "client_last_name": "string",
          "client_organisation_name": "string",
          "client_organisation_status": "string",
          "client_organisation_type": "string",
          "client_organization_id": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "details": "string",
          "distribution_source": "string",
          "external_id": "string",
          "extra_properties": {
            "key": "string"
          },
          "federal_withholding_pct": "string",
          "financial_account_external_id": "string",
          "financial_account_id": "string",
          "financial_account_name": "string",
          "financial_account_number": "string",
          "financial_account_status": "string",
          "first_year": true,
          "id": "string",
          "life_expectancy_factor": "string",
          "next_step_date": "2026-01-15T10:30:00Z",
          "outside_account_number": "string",
          "prior_year_end_balance": "string",
          "relationship_status": "string",
          "remaining_amount": "string",
          "required_amount": "string",
          "rmd_year": "string",
          "state_withholding_pct": "string",
          "status": "string",
          "ten_year_required": true,
          "tenant_id": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "ytd_distributions": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/sloas - sloa-list-by-client-organisation

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ListSLOASbyClientOrganisationIDOutputBody.json",
      "sloas": [
        {
          "bank_account_name": "string",
          "bank_account_no": "string",
          "bank_name": "string",
          "bank_routing_no": "string",
          "check_payable_address": "string",
          "check_payable_to": "string",
          "client_organisation_id": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "custodian": "string",
          "direction": "string",
          "external_id": "string",
          "extra_properties": {
            "key": "string"
          },
          "financial_account_external_id": "string",
          "financial_account_id": "string",
          "financial_account_name": "string",
          "financial_account_number": "string",
          "id": "string",
          "is_active": true,
          "name": "string",
          "non_related_address_ok": true,
          "status": "string",
          "tenant_id": "string",
          "third_party_account_no": "string",
          "third_party_address": "string",
          "third_party_name": "string",
          "third_party_not_affiliated": true,
          "transfer_channel": "string",
          "updated_at": "2026-01-15T10:30:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/tax-filings - tax-filing-list-by-client-organisation

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ListTaxFilingsByClientOrganisationIDOutputBody.json",
      "tax_filings": [
        {
          "adjusted_gross_income": "string",
          "advisor_review_needed": true,
          "agi": "string",
          "amended_return": true,
          "charitable_donations": "string",
          "client_organisation_external_id": "string",
          "client_organisation_extra_properties": {
            "key": "string"
          },
          "client_organisation_id": "string",
          "client_organisation_name": "string",
          "client_organisation_relationship_status": "string",
          "client_organisation_tax_assistant_email": "string",
          "client_organisation_tax_assistant_external_id": "string",
          "client_organisation_tax_assistant_first_name": "string",
          "client_organisation_tax_assistant_last_name": "string",
          "client_organisation_tax_assistant_title": "string",
          "client_organisation_tax_associate_email": "string",
          "client_organisation_tax_associate_external_id": "string",
          "client_organisation_tax_associate_first_name": "string",
          "client_organisation_tax_associate_last_name": "string",
          "client_organisation_tax_associate_title": "string",
          "client_organisation_tax_manager_email": "string",
          "client_organisation_tax_manager_external_id": "string",
          "client_organisation_tax_manager_first_name": "string",
          "client_organisation_tax_manager_last_name": "string",
          "client_organisation_tax_manager_title": "string",
          "completion_window": "string",
          "complexity_type": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "credits": "string",
          "date_filed": "2026-01-15T10:30:00Z",
          "deductions": "string",
          "document_due_date": "2026-01-15T10:30:00Z",
          "document_received_date": "2026-01-15T10:30:00Z",
          "e_file_authorization_date": "2026-01-15T10:30:00Z",
          "e_file_status": "string",
          "e_file_status_date": "2026-01-15T10:30:00Z",
          "effective_tax_rate": "string",
          "extension_filed": true,
          "external_id": "string",
          "extra_properties": {
            "key": "string"
          },
          "filing_due_date": "2026-01-15T10:30:00Z",
          "filing_method": "string",
          "filing_status": "string",
          "final_year": true,
          "gifting": "string",
          "id": "string",
          "invoicing_method": "string",
          "marginal_tax_rate": "string",
          "organizer_sent": true,
          "organizer_sent_date": "2026-01-15T10:30:00Z",
          "payment_method": "string",
          "prepaid_taxes": "string",
          "reported_income": "string",
          "return_completion_date": "2026-01-15T10:30:00Z",
          "safe_harbor": "string",
          "service_offering": "string",
          "signature_preference": "string",
          "tax_associate_email": "string",
          "tax_associate_external_id": "string",
          "tax_associate_first_name": "string",
          "tax_associate_id": "string",
          "tax_associate_last_name": "string",
          "tax_fee": "string",
          "tax_filing_type": "string",
          "tax_liability": "string",
          "tax_manager_email": "string",
          "tax_manager_external_id": "string",
          "tax_manager_first_name": "string",
          "tax_manager_id": "string",
          "tax_manager_last_name": "string",
          "tax_professional_category": "string",
          "tax_return_status": "string",
          "tax_return_type": "string",
          "tax_service_type_1040": "string",
          "tax_services_final_year": true,
          "tax_support_specialist_email": "string",
          "tax_support_specialist_external_id": "string",
          "tax_support_specialist_first_name": "string",
          "tax_support_specialist_id": "string",
          "tax_support_specialist_last_name": "string",
          "tax_year": "string",
          "tenant_id": "string",
          "updated_at": "2026-01-15T10:30:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/teams - team-client-organisation-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "additional_properties": {
          "priority": "high"
        },
        "client_organisation_client_count": 15,
        "client_organisation_client_segmentation": "Premium",
        "client_organisation_external_id": "co_123",
        "client_organisation_extra_properties": {
          "priority": "high"
        },
        "client_organisation_id": "co_123",
        "client_organisation_name": "Acme Corporation",
        "created_at": "2024-01-01T09:00:00Z",
        "description": "Primary advisory team for the client",
        "id": "ta_123",
        "role": "primary_advisor",
        "team_additional_attributes": {
          "department": "advisory"
        },
        "team_description": "Financial advisory specialists",
        "team_group_type": "team",
        "team_id": "bg_123",
        "team_name": "Advisory Team",
        "team_status": "Active",
        "tenant_id": "t_123",
        "updated_at": "2024-01-01T09:00:00Z"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/teams - team-client-organisation-add

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AddTeamToClientOrganisationOutputBody.json",
      "message": "Team successfully assigned to client organisation",
      "success": true
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/client-organisations/{client_organisation_id}/teams/{business_group_id} - team-client-organisation-remove

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RemoveTeamFromClientOrganisationOutputBody.json",
      "message": "Team successfully removed from client organisation",
      "success": true
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/client-organisations/{id} - client-organisation-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationGetOutputBody.json",
      "client_organisation": {
        "agent_organisation_id": "ao_246810",
        "agents": {
          "key": {}
        },
        "approx_aum": 1000000000,
        "client_organisation_role": "Primary Client",
        "client_organisation_type": "Corporation",
        "client_segmentation": "High Net Worth",
        "created_at": "2023-04-01T12:00:00Z",
        "description": "A leading technology company specializing in innovative solutions",
        "external_id": "ext_123456",
        "extra_properties": {
          "annual_revenue": "$500M",
          "employees": "5000",
          "industry": "Technology"
        },
        "growth_opportunity_next_step_date": "2023-05-01",
        "id": "co_123456",
        "last_interaction_date": "2024-03-15",
        "name": "Acme Corporation",
        "next_meeting": "2023-05-01",
        "notes": "Important client notes",
        "parent_id": "co_987654",
        "relationship_start_date": "2020-01-01",
        "relationship_status": "EXISTING",
        "tenant_id": "tenant_789",
        "updated_at": "2023-04-15T09:30:00Z"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/client-organisations/{id} - client-organisation-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationUpdateOutputBody.json",
      "id": "co_123456"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/client-portal/jwt - client-portal-jwt-generate

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientPortalJWTOutputBody.json",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "url": "https://api.merceradvisors.com/api/v1/Identity/SSOLogin/?accessToken=..."
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/clients - client-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientListByNamePhoneOrEmailOutputBody.json",
      "clients": [
        {
          "client_organisation_external_id": "ext_123456",
          "client_organisation_id": "co_123456",
          "client_organisation_name": "My organisation",
          "client_organisation_wealth_advisor_name": "John Doe",
          "external_id": "ext_123456",
          "id": "cl_123456",
          "name": "John Doe",
          "preferred_email": "john.doe@example.com",
          "preferred_phone": "1234567890"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/clients-organisations/{client_organisation_id}/agents - client-organisation-agent-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationAgentListOutputBody.json",
      "assigned_agents": [
        {
          "agent": {
            "agent_id": "ag_123456",
            "external_id": "456",
            "first_name": "John",
            "last_name": "Doe",
            "primary_email": "string",
            "primary_phone": "string",
            "tenant_id": "ao_123456",
            "title": "Mr"
          },
          "assigned_role": "Primary Advisor",
          "extra_properties": {
            "annual_revenue": "$500M",
            "employees": "5000",
            "industry": "Technology"
          }
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/clients/move - clients-batch-move

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientBatchMoveOutputBody.json",
      "results": [
        {
          "client_id": "string",
          "error": "string",
          "new_relationship_id": "string",
          "success": true
        }
      ],
      "summary": {
        "failed": 1,
        "successful": 1,
        "total_requested": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/clients/search - clients-search

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientsSearchOutputBody.json",
      "clients": [
        {
          "additional_attributes": {
            "key": "string"
          },
          "client_external_id": "string",
          "client_id": "string",
          "client_organisation_external_id": "string",
          "client_organisation_id": "string",
          "first_name": "string",
          "last_name": "string",
          "role": "string",
          "tenant_id": "string",
          "title": "string"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/clients/{client_id} - client-delete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DeleteClientOutputBody.json",
      "id": "c_456"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/clients/{client_id}/addresses - client-address-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/clients/{client_id}/addresses - client-address-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientAddressListOutputBody.json",
      "addresses": [
        {
          "address_id": "string",
          "address_line1": "string",
          "address_line2": "string",
          "address_type": "string",
          "city": "string",
          "country": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "description": "string",
          "entity_id": "string",
          "entity_type": "string",
          "state": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "zipcode": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/clients/{client_id}/addresses - client-address-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateClientAddressOutputBody.json",
      "id": "addr_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/clients/{client_id}/addresses - client-address-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/UpdateClientAddressOutputBody.json",
      "id": "addr_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/clients/{client_id}/agents - client-agent-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientAgentListOutputBody.json",
      "agents": [
        {
          "active": true,
          "additional_attributes": "string",
          "advisor_identification": "string",
          "agent_id": "string",
          "compliance_record": "string",
          "contacts": {
            "key": {
              "type": {},
              "value": {}
            }
          },
          "created_at": "2026-01-15T10:30:00Z",
          "date_of_birth": "string",
          "external_id": "string",
          "first_name": "string",
          "gender": "string",
          "idp_subject": "string",
          "last_name": "string",
          "license": "string",
          "manager_id": "string",
          "marital_status": "string",
          "middle_name": "string",
          "nationality": "string",
          "organisation_id": "string",
          "person_id": "string",
          "preferred_contact_method": "string",
          "qualification": "string",
          "regulatory_status": "string",
          "relationship_extra_properties": {
            "key": "string"
          },
          "relationship_type": "string",
          "specialization": "string",
          "ssn": "string",
          "suffix": "string",
          "tenant_id": "string",
          "title": "string",
          "type": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "years_of_experience": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/clients/{client_id}/client-connections - client-connections-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetClientClientRelationshipsOutputBody.json",
      "relationships": [
        {
          "initiating_client_external_id": "string",
          "initiating_client_first_name": "string",
          "initiating_client_id": "string",
          "initiating_client_last_name": "string",
          "participating_client_external_id": "string",
          "participating_client_first_name": "string",
          "participating_client_id": "string",
          "participating_client_last_name": "string",
          "relationship_category": "string",
          "relationship_type": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/clients/{client_id}/client-connections - client-connection-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateClientClientConnectionOutputBody.json",
      "connection_id": "connection_123abc"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/clients/{client_id}/client-connections/{connection_id} - client-connection-delete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DeleteClientClientConnectionOutputBody.json"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/clients/{client_id}/client-organisation-relationships - client-organisation-relationship-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientOrganisationRelationshipCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/clients/{client_id}/contacts - client-contact-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientContactListOutputBody.json",
      "contacts": [
        {
          "agent_id": "string",
          "agent_organisation_id": "string",
          "client_id": "string",
          "client_organisation_id": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "id": "string",
          "role": "string",
          "tenant_id": "string",
          "type": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "value": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/clients/{client_id}/contacts - client-contact-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateContactDetailsOutputBody.json",
      "ids": [
        "cd_1",
        "cd_2"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/clients/{client_id}/contacts - client-contact-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateContactDetailsOutputBody.json",
      "ids": [
        "cd_1",
        "cd_2"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/clients/{client_id}/document - client-document-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateDocumentCatalogEntryOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/clients/{client_id}/documents - client-documents-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetDocumentsOutputBody.json",
      "documents": [
        {
          "access_level": "private",
          "additional_attributes": {
            "department": "finance",
            "priority": "high"
          },
          "agent_id": "agent_123",
          "approved_by": "user_123",
          "client_id": "client_789",
          "created_at": "2024-01-15T14:30:00Z",
          "deleted_at": "2024-02-15T14:30:00Z",
          "description": "Client's 2023 tax return document",
          "document_status": "approved",
          "document_subtype": "2023 Tax Return",
          "document_type": "bank_statement",
          "external_id": "DOC-2024-01",
          "file_name": "tax_return_2023.pdf",
          "file_type": "pdf",
          "id": "doc_123",
          "rejection_reason": "Invalid format",
          "retention_policy": "5 years",
          "service_agreement_id": "sa_456",
          "storage_container": "my-document-bucket",
          "storage_mode": "PLATFORM_MANAGED",
          "storage_object_key": "clients/2024/doc.pdf",
          "storage_provider": "S3",
          "tenant_id": "tenant_456",
          "updated_at": "2024-01-15T14:30:00Z",
          "upload_date": "2024-01-15T14:30:00Z",
          "upload_status": "VERIFIED"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/clients/{id} - client-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientGetOutputBody.json",
      "client": {
        "additional_attributes": {
          "key": "string"
        },
        "addresses": [
          {
            "address_line1": "string",
            "address_line2": "string",
            "address_type": "string",
            "city": "string",
            "country": "string",
            "description": "string",
            "state": "string",
            "zipcode": "string"
          }
        ],
        "assets": "100000",
        "compliance_record": "1234567890",
        "contacts": [
          {
            "role": "string",
            "type": "string",
            "value": "string"
          }
        ],
        "created_at": "2023-01-01T00:00:00Z",
        "current_employer": "Acme Inc.",
        "date_of_birth": "2023-01-01",
        "documentation": "1234567890",
        "drivers_license_number": "1234567890",
        "employment_status": "Employed",
        "expected_retirement_age": 65,
        "external_id": "cl_123",
        "first_name": "John",
        "gender": "Male",
        "id": "123",
        "investment_goal": "Growth",
        "is_primary": true,
        "last_name": "Doe",
        "maiden_name": "Smith",
        "marital_status": "Single",
        "marketing_salutation": "Dear John",
        "middle_name": "Doe",
        "nationality": "American",
        "occupation": "Software Engineer",
        "officer_or_director": "Yes",
        "organisation_id": "123",
        "personal_interests": "Traveling, Reading",
        "preferred_contact_method": "Email",
        "preferred_name": "John",
        "retired": "Yes",
        "retirement_date": "2025-01-01",
        "role": "Client",
        "security_restrictions": "None",
        "ssn": "1234567890",
        "suffix": "Jr",
        "tenant_id": "123",
        "title": "Mr",
        "updated_at": "2023-01-01T00:00:00Z",
        "wedding_anniversary": "2025-01-01"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/clients/{id} - client-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ClientUpdateOutputBody.json",
      "id": "client_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/comments - comments-list-all

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CommentsListAllOutputBody.json",
      "comments": [
        {
          "created_at": "2021-01-01T00:00:00Z",
          "created_by": "a_1938405",
          "entity_id": "ar_456",
          "entity_type": "action_run",
          "environment": "staging",
          "external_id": "ext_123",
          "id": "123",
          "tagged_users": [
            "John Doe",
            "Jane Smith"
          ],
          "text": "This is a comment"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 10,
        "total_pages": 100,
        "total_records": 1000
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/comments/{entity}/{entity_id} - comment-add

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/component/jwt - component-jwt-generate

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ComponentJWTOutputBody.json",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "url": "https://api.merceradvisors.com/api/v1/Identity/InitiateComponent?accessToken=..."
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/coverage/{coverage_id} - business-group-coverage-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/custodian-forms-config - custodian-forms-config-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustodianFormsConfigGetOutputBody.json",
      "child_forms": [
        {
          "display_condition": "true",
          "e_signature_mapping": "{\"signer_email\": \"data.email\"}",
          "form_id": "f_456",
          "payload_template_override": "{\"name\": \"John Doe\"}"
        }
      ],
      "envelope_metadata_endpoint_id": "e_456",
      "envelope_trigger_endpoint_id": "e_456",
      "l1_config_form_id": "f_456",
      "l2_config_form_id": "f_789",
      "preview_trigger_endpoint_id": "e_456"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/custodian-forms-config - custodian-forms-config-put

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/custom-javascript-functions - custom-javascript-functions-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomJavascriptFunctionsCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/custom-javascript-functions/list - custom-javascript-functions-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomJavascriptFunctionsListOutputBody.json",
      "functions": [
        {
          "$schema": "https://example.com/schemas/CustomJavascriptFunctionsDescription.json",
          "body": "function myFunc() { return 'Hello'; }",
          "created_at": "2024-01-01T00:00:00Z",
          "created_by": "user@email.com",
          "description": "A utility function for form validation",
          "execution_role": "Advisor",
          "id": "cjsf_1",
          "initiation": "const threshold = 0.5;",
          "name": "Global Functions",
          "request_keys": [
            "email",
            "name"
          ],
          "response_keys": [
            "userId",
            "status"
          ],
          "server_side_enabled": false,
          "updated_at": "2024-01-01T00:00:00Z"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/custom-javascript-functions/{id} - custom-javascript-functions-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/custom-javascript-functions/{id} - custom-javascript-functions-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomJavascriptFunctionsDescription.json",
      "body": "function myFunc() { return 'Hello'; }",
      "created_at": "2024-01-01T00:00:00Z",
      "created_by": "user@email.com",
      "description": "A utility function for form validation",
      "execution_role": "Advisor",
      "id": "cjsf_1",
      "initiation": "const threshold = 0.5;",
      "name": "Global Functions",
      "request_keys": [
        "email",
        "name"
      ],
      "response_keys": [
        "userId",
        "status"
      ],
      "server_side_enabled": false,
      "updated_at": "2024-01-01T00:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/custom-javascript-functions/{id} - custom-javascript-functions-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/debug/abac - abac-debug

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ABACDebugResult.json",
      "policy_breakdowns": [
        {
          "atomic_expressions": [
            {
              "count": {},
              "description": {},
              "expression": {},
              "sample_external_ids": {},
              "sql_query": {},
              "type": {}
            }
          ],
          "effect": "grant",
          "policy_name": "WealthAdvisor_MyClients_Grant",
          "total_contribution": 3
        }
      ],
      "summary": {
        "deny_exclusions": 2,
        "grant_contributions": 15,
        "total_accessible": 13,
        "total_atomic_expressions": 8,
        "total_policies": 4
      },
      "user_context": {}
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/document-storage/integrations - document-storage-integration-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "$schema": "https://example.com/schemas/DocumentStorageIntegrationResponse.json",
        "config": {},
        "created_at": "2026-01-15T10:30:00Z",
        "credentials": {},
        "enabled": true,
        "id": "string",
        "provider": "string",
        "tenant_id": "string",
        "updated_at": "2026-01-15T10:30:00Z"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/document-storage/integrations/{provider} - document-storage-integration-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/document-storage/integrations/{provider} - document-storage-integration-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DocumentStorageIntegrationResponse.json",
      "config": {},
      "created_at": "2026-01-15T10:30:00Z",
      "credentials": {},
      "enabled": true,
      "id": "string",
      "provider": "string",
      "tenant_id": "string",
      "updated_at": "2026-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/document-storage/integrations/{provider} - document-storage-integration-upsert

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DocumentStorageIntegrationResponse.json",
      "config": {},
      "created_at": "2026-01-15T10:30:00Z",
      "credentials": {},
      "enabled": true,
      "id": "string",
      "provider": "string",
      "tenant_id": "string",
      "updated_at": "2026-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/document-storage/integrations/{provider}/environments - document-storage-integration-environment-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "$schema": "https://example.com/schemas/DocumentStorageIntegrationEnvironmentResponse.json",
        "config": {},
        "created_at": "2026-01-15T10:30:00Z",
        "credentials": {},
        "enabled": true,
        "environment": "string",
        "id": "string",
        "integration_id": "string",
        "tenant_id": "string",
        "updated_at": "2026-01-15T10:30:00Z"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/document-storage/integrations/{provider}/environments/{environment} - document-storage-integration-environment-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/document-storage/integrations/{provider}/environments/{environment} - document-storage-integration-environment-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DocumentStorageIntegrationEnvironmentResponse.json",
      "config": {},
      "created_at": "2026-01-15T10:30:00Z",
      "credentials": {},
      "enabled": true,
      "environment": "string",
      "id": "string",
      "integration_id": "string",
      "tenant_id": "string",
      "updated_at": "2026-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/document-storage/integrations/{provider}/environments/{environment} - document-storage-integration-environment-upsert

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DocumentStorageIntegrationEnvironmentResponse.json",
      "config": {},
      "created_at": "2026-01-15T10:30:00Z",
      "credentials": {},
      "enabled": true,
      "environment": "string",
      "id": "string",
      "integration_id": "string",
      "tenant_id": "string",
      "updated_at": "2026-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/documents/{document_id} - document-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DocumentGetOutputBody.json",
      "document": {
        "access_level": "private",
        "additional_attributes": {
          "department": "finance",
          "priority": "high"
        },
        "agent_id": "agent_123",
        "approved_by": "user_123",
        "client_id": "client_789",
        "created_at": "2024-01-15T14:30:00Z",
        "deleted_at": "2024-02-15T14:30:00Z",
        "description": "Client's 2023 tax return document",
        "document_status": "approved",
        "document_subtype": "2023 Tax Return",
        "document_type": "bank_statement",
        "external_id": "DOC-2024-01",
        "file_name": "tax_return_2023.pdf",
        "file_type": "pdf",
        "id": "doc_123",
        "rejection_reason": "Invalid format",
        "retention_policy": "5 years",
        "service_agreement_id": "sa_456",
        "storage_container": "my-document-bucket",
        "storage_mode": "PLATFORM_MANAGED",
        "storage_object_key": "clients/2024/doc.pdf",
        "storage_provider": "S3",
        "tenant_id": "tenant_456",
        "updated_at": "2024-01-15T14:30:00Z",
        "upload_date": "2024-01-15T14:30:00Z",
        "upload_status": "VERIFIED"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/email - email-send

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/entities/{entity}/{entity_id}/comments - entity-comments-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetCommentsOutputBody.json",
      "comments": [
        {
          "created_at": "2021-01-01T00:00:00Z",
          "created_by": {
            "first_name": "John",
            "id": "a_12345",
            "last_name": "Doe"
          },
          "entity_id": "ar_456",
          "entity_type": "action_run",
          "environment": "staging",
          "external_id": "ext_123",
          "id": "123",
          "tagged_users": [
            {
              "first_name": "John",
              "id": "ag_123",
              "last_name": "Doe"
            },
            {
              "first_name": "Jane",
              "id": "ag_456",
              "last_name": "Smith"
            }
          ],
          "text": "This is a comment",
          "updated_at": "2021-01-01T00:00:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/environments/blueprints - environment-blueprint-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/EnvironmentBlueprintListOutputBody.json",
      "blueprints": [
        {
          "ai_context_description": "string",
          "ai_description": "string",
          "category": "onboarding",
          "created_at": "2023-04-01T12:00:00Z",
          "description": "Process for onboarding new customers",
          "id": "bp_12345",
          "is_ai_recommendable": false,
          "is_journey": false,
          "name": "Customer Onboarding",
          "short_description": "Quick onboarding flow",
          "tenant_id": "t_67890",
          "updated_at": "2023-04-02T15:30:00Z"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes - esignature-envelope-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ESignatureEnvelopeResponseBody.json",
      "envelope_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "status": "sent",
      "status_datetime": "2024-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/from-template - esignature-envelope-from-template-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ESignatureEnvelopeResponseBody.json",
      "envelope_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "status": "sent",
      "status_datetime": "2024-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id} - esignature-envelope-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ESignatureEnvelopeResponseBody.json",
      "envelope_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "status": "sent",
      "status_datetime": "2024-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id}/documents/delete - esignature-envelope-delete-documents

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id}/documents/update - esignature-envelope-update-documents

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "key": {}
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id}/download - esignature-envelope-download

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ESignatureEnvelopeDownloadBody.json",
      "document_pdf_base64": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id}/recipients/delete - esignature-envelope-delete-recipients

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id}/recipients/update - esignature-envelope-update-recipients

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "key": {}
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/envelopes/{envelope_id}/status - esignature-envelope-status

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "key": {}
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/templates - esignature-templates-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ESignatureTemplatesListBody.json",
      "templates": [
        {
          "created": "2024-01-15T10:30:00.0000000Z",
          "description": "Standard contract template",
          "last_modified": "2024-06-20T14:45:00.0000000Z",
          "name": "Contract Template",
          "template_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/esignature/{token_id}/accounts/{account_id}/templates/{template_id} - esignature-template-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "key": {}
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/execute - trigger-execute

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerExecuteOutputBody.json",
      "mapped_data": {
        "key": "value"
      },
      "raw_data": "{\"key\":\"value\"}"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/experimental-household-member-recommendations/{client_id} - experimental-household-member-recommendations-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/VPOCGetHouseholdMemberRecommendationsOutputBody.json",
      "recommendations": [
        {
          "assets": "1500000.00",
          "client_id": "client_456",
          "contacts": [
            {
              "key": {}
            }
          ],
          "date_of_birth": "1985-03-20T00:00:00Z",
          "first_name": "Jane",
          "last_name": "Smith",
          "organisation_id": "org_789",
          "person_id": "person_101",
          "role": "Spouse",
          "shared_address": {
            "address_data": {
              "key": {}
            },
            "address_id": "addr_123",
            "address_line1": "123 Main St",
            "address_line2": "Apt 4B",
            "city": "New York",
            "country": "USA",
            "state": "NY",
            "zipcode": "10001"
          },
          "tenant_id": "vanguard"
        }
      ],
      "total_count": 1
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/experimental-households-ranking - experimental-household-ranking-trigger

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/VPOCHouseholdRankingOutputBody.json",
      "message": "string",
      "total_households": 1
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/experimental-households-ranking/list - experimental-household-ranking-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/VPOCHouseholdRankingListOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "ranked_households": [
        {
          "additional_attributes": {
            "key": {}
          },
          "current_aum": 2500000.5,
          "household_members": [
            {
              "AdditionalAttributes": {},
              "Addresses": {},
              "Assets": {},
              "ClientID": {},
              "ClientOrganisationName": {},
              "ClientOrganisationType": {},
              "ClientSegmentation": {},
              "ComplianceRecord": {},
              "Contacts": {},
              "CurrentEmployer": {},
              "DateOfBirth": {},
              "Documentation": {},
              "DriversLicenseNumber": {},
              "EmploymentStatus": {},
              "ExpectedRetirementAge": {},
              "ExternalID": {},
              "FirstName": {},
              "Gender": {},
              "InvestmentGoal": {},
              "LastName": {},
              "MaidenName": {},
              "MaritalStatus": {},
              "MarketingSalutation": {},
              "MiddleName": {},
              "Nationality": {},
              "Occupation": {},
              "OfficerOrDirector": {},
              "OrganisationID": {},
              "PersonID": {},
              "PersonalInterests": {},
              "PreferredContactMethod": {},
              "PreferredName": {},
              "Retired": {},
              "RetirementDate": {},
              "Role": {},
              "SSN": {},
              "SecurityRestrictions": {},
              "Suffix": {},
              "TenantID": {},
              "Title": {},
              "WeddingAnniversary": {}
            }
          ],
          "number_of_days_in_backlog": 0,
          "primary_client": "John Doe",
          "promotion_status": "recommended",
          "rank": 1,
          "score": 0.75
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/experimental-onboarding - experimental-onboarding-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/VPOCOnboardingWithProgress.json",
      "action_ids": [
        "string"
      ],
      "action_runs": {},
      "client_organisation_id": "string",
      "client_organisation_name": "string",
      "client_organisation_type": "string",
      "end_date": "2026-01-15T10:30:00Z",
      "id": "string",
      "primary_client_first_name": "string",
      "primary_client_id": "string",
      "primary_client_last_name": "string",
      "progress": {
        "completed_tasks": 1,
        "progress_percentage": 1.0,
        "status": "string",
        "total_tasks": 1
      },
      "relationship_description": "string",
      "relationship_id": "string",
      "relationship_role": "string",
      "started_at": "2026-01-15T10:30:00Z",
      "tenant_id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/experimental-onboarding/list - experimental-onboarding-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/VPOCOnboardingListOutputBody.json",
      "onboardings": [
        {
          "$schema": "https://example.com/schemas/VPOCOnboardingWithProgress.json",
          "action_ids": [
            "string"
          ],
          "action_runs": {},
          "client_organisation_id": "string",
          "client_organisation_name": "string",
          "client_organisation_type": "string",
          "end_date": "2026-01-15T10:30:00Z",
          "id": "string",
          "primary_client_first_name": "string",
          "primary_client_id": "string",
          "primary_client_last_name": "string",
          "progress": {
            "completed_tasks": 1,
            "progress_percentage": 1.0,
            "status": "string",
            "total_tasks": 1
          },
          "relationship_description": "string",
          "relationship_id": "string",
          "relationship_role": "string",
          "started_at": "2026-01-15T10:30:00Z",
          "tenant_id": "string"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/experimental-onboarding/{onboarding_id} - experimental-onboarding-delete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/VPOCOnboardingDeleteOutputBody.json"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/experimental-onboarding/{onboarding_id} - experimental-onboarding-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/VPOCOnboardingWithProgress.json",
      "action_ids": [
        "string"
      ],
      "action_runs": {},
      "client_organisation_id": "string",
      "client_organisation_name": "string",
      "client_organisation_type": "string",
      "end_date": "2026-01-15T10:30:00Z",
      "id": "string",
      "primary_client_first_name": "string",
      "primary_client_id": "string",
      "primary_client_last_name": "string",
      "progress": {
        "completed_tasks": 1,
        "progress_percentage": 1.0,
        "status": "string",
        "total_tasks": 1
      },
      "relationship_description": "string",
      "relationship_id": "string",
      "relationship_role": "string",
      "started_at": "2026-01-15T10:30:00Z",
      "tenant_id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/feature-flags - feature-flags-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "$schema": "https://example.com/schemas/FeatureFlag.json",
        "description": "Enables dark mode theme for the UI",
        "enabled": true,
        "enabled_agents": [
          "agent_123",
          "agent_456"
        ],
        "enabled_for_org": true,
        "key": "enable-dark-mode",
        "name": "Enable Dark Mode"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/feature-flags/{flag_key} - feature-flags-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/FeatureFlag.json",
      "description": "Enables dark mode theme for the UI",
      "enabled": true,
      "enabled_agents": [
        "agent_123",
        "agent_456"
      ],
      "enabled_for_org": true,
      "key": "enable-dark-mode",
      "name": "Enable Dark Mode"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/feature-flags/{flag_key} - feature-flags-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/FeatureFlag.json",
      "description": "Enables dark mode theme for the UI",
      "enabled": true,
      "enabled_agents": [
        "agent_123",
        "agent_456"
      ],
      "enabled_for_org": true,
      "key": "enable-dark-mode",
      "name": "Enable Dark Mode"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/financial-accounts - financial-account-list-by-account-number-or-name

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/FinancialAccountSearchOutputBody.json",
      "financial_accounts": [
        {
          "account_created_at": "2026-01-15T10:30:00Z",
          "account_id": "acct_01j9k2m3n4p5q6r7s8t9u0",
          "account_notes": "string",
          "account_number": "1234567890",
          "account_updated_at": "2026-01-15T10:30:00Z",
          "additional_attributes": {
            "key": {}
          },
          "balance": "50000.00",
          "beneficiary_first_name": "Alice",
          "beneficiary_id": "client_01j9k2m3n4p5q6r7s8t9u2",
          "beneficiary_last_name": "Smith",
          "cash_balance": "5000.00",
          "client_organisation_description": "string",
          "client_organisation_external_id": "co_123456",
          "client_organisation_id": "org_01j9k2m3n4p5q6r7s8t9u0",
          "client_organisation_name": "Smith Family Trust",
          "client_organisation_role": "beneficiary",
          "client_organisation_type": "family",
          "closed_date": "2026-01-15T10:30:00Z",
          "currency_code": "USD",
          "custodian": "Fidelity",
          "external_id": "fa_123456",
          "model_portfolio": "Aggressive Growth",
          "name": "Retirement Account",
          "open_date": "2026-01-15T10:30:00Z",
          "primary_owner_first_name": "John",
          "primary_owner_id": "client_01j9k2m3n4p5q6r7s8t9u0",
          "primary_owner_last_name": "Smith",
          "product_model": "Growth",
          "product_name": "Traditional IRA",
          "product_type": "IRA",
          "relationship_status": "active",
          "secondary_owner_first_name": "Jane",
          "secondary_owner_id": "client_01j9k2m3n4p5q6r7s8t9u1",
          "secondary_owner_last_name": "Smith",
          "status": "active",
          "tax_status": "taxable",
          "valuations": [
            {
              "business_date": {},
              "canonical_valuation_type": {},
              "currency": {},
              "source_measure_code": {},
              "source_measure_field": {},
              "source_measure_label": {},
              "valuation_amount": {},
              "valuation_type": {}
            }
          ]
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/financial-accounts - account-financial-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AccountFinancialCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/financial-accounts/{financial_account_id} - account-financial-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AccountFinancialGetOutputBody.json",
      "account": {
        "account_created_at": "2026-01-15T10:30:00Z",
        "account_id": "acct_01j9k2m3n4p5q6r7s8t9u0",
        "account_notes": "string",
        "account_number": "1234567890",
        "account_updated_at": "2026-01-15T10:30:00Z",
        "additional_attributes": {
          "key": {}
        },
        "balance": "50000.00",
        "beneficiary_first_name": "Alice",
        "beneficiary_id": "client_01j9k2m3n4p5q6r7s8t9u2",
        "beneficiary_last_name": "Smith",
        "cash_balance": "5000.00",
        "client_organisation_description": "string",
        "client_organisation_external_id": "co_123456",
        "client_organisation_id": "org_01j9k2m3n4p5q6r7s8t9u0",
        "client_organisation_name": "Smith Family Trust",
        "client_organisation_role": "beneficiary",
        "client_organisation_type": "family",
        "closed_date": "2026-01-15T10:30:00Z",
        "currency_code": "USD",
        "custodian": "Fidelity",
        "external_id": "fa_123456",
        "model_portfolio": "Aggressive Growth",
        "name": "Retirement Account",
        "open_date": "2026-01-15T10:30:00Z",
        "primary_owner_first_name": "John",
        "primary_owner_id": "client_01j9k2m3n4p5q6r7s8t9u0",
        "primary_owner_last_name": "Smith",
        "product_model": "Growth",
        "product_name": "Traditional IRA",
        "product_type": "IRA",
        "relationship_status": "active",
        "secondary_owner_first_name": "Jane",
        "secondary_owner_id": "client_01j9k2m3n4p5q6r7s8t9u1",
        "secondary_owner_last_name": "Smith",
        "status": "active",
        "tax_status": "taxable",
        "tenant_id": "tenant_01j9k2m3n4p5q6r7s8t9u0"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/financial-accounts/{financial_account_id}/rmds - rmd-list-by-financial-account

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ListRMDsByFinancialAccountIDOutputBody.json",
      "rmds": [
        {
          "assigned_agent_first_name": "string",
          "assigned_agent_last_name": "string",
          "assigned_to_id": "string",
          "client_first_name": "string",
          "client_id": "string",
          "client_last_name": "string",
          "client_organisation_name": "string",
          "client_organisation_status": "string",
          "client_organisation_type": "string",
          "client_organization_id": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "details": "string",
          "distribution_source": "string",
          "external_id": "string",
          "extra_properties": {
            "key": "string"
          },
          "federal_withholding_pct": "string",
          "financial_account_external_id": "string",
          "financial_account_id": "string",
          "financial_account_name": "string",
          "financial_account_number": "string",
          "financial_account_status": "string",
          "first_year": true,
          "id": "string",
          "life_expectancy_factor": "string",
          "next_step_date": "2026-01-15T10:30:00Z",
          "outside_account_number": "string",
          "prior_year_end_balance": "string",
          "relationship_status": "string",
          "remaining_amount": "string",
          "required_amount": "string",
          "rmd_year": "string",
          "state_withholding_pct": "string",
          "status": "string",
          "ten_year_required": true,
          "tenant_id": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "ytd_distributions": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/financial-accounts/{financial_account_id}/sloas - sloa-list-by-financial-account

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ListSLOASbyFinancialAccountIDOutputBody.json",
      "sloas": [
        {
          "bank_account_name": "string",
          "bank_account_no": "string",
          "bank_name": "string",
          "bank_routing_no": "string",
          "check_payable_address": "string",
          "check_payable_to": "string",
          "client_organisation_id": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "custodian": "string",
          "direction": "string",
          "external_id": "string",
          "extra_properties": {
            "key": "string"
          },
          "financial_account_external_id": "string",
          "financial_account_id": "string",
          "financial_account_name": "string",
          "financial_account_number": "string",
          "id": "string",
          "is_active": true,
          "name": "string",
          "non_related_address_ok": true,
          "status": "string",
          "tenant_id": "string",
          "third_party_account_no": "string",
          "third_party_address": "string",
          "third_party_name": "string",
          "third_party_not_affiliated": true,
          "transfer_channel": "string",
          "updated_at": "2026-01-15T10:30:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/financial-products - product-financial-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ProductFinancialCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/financial-products/{financial_product_id} - product-financial-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ProductFinancialGetOutputBody.json",
      "product": {
        "created_at": "2026-01-15T10:30:00Z",
        "description": "A traditional individual retirement account",
        "eligibility_criteria": "Age 18+, US Citizen",
        "external_id": "fp_ext_123",
        "id": "prod_01j9k2m3n4p5q6r7s8t9u0",
        "model": "Growth",
        "model_portfolio": "Aggressive Growth",
        "product_code": "IRA-TRAD",
        "product_name": "Traditional IRA",
        "product_type": "IRA",
        "regulatory_compliance": "SEC Registered",
        "tenant_id": "tenant_01j9k2m3n4p5q6r7s8t9u0",
        "updated_at": "2026-01-15T10:30:00Z"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/gpoc-account-openings/list - gpoc-account-openings-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GPOCAccountOpeningsListOutputBody.json",
      "account_openings": [
        {
          "account_openings": [
            {
              "account_configuration": {},
              "account_data": {},
              "history": {},
              "status": {},
              "task_id": {}
            }
          ],
          "action_run_id": "string",
          "action_run_slug": "string",
          "client_organisation_id": "string",
          "client_organisation_name": "string",
          "started_at": "string",
          "status_logs": [
            {
              "changed_by": {},
              "custom_status": {},
              "event_type": {},
              "metadata": {},
              "old_custom_status": {},
              "time": {}
            }
          ],
          "updated_at": "string"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 10,
        "total_pages": 100,
        "total_records": 1000
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/gpoc-docusign/envelopes - docusign-envelope-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DocuSignEnvelopeResponseDoc.json",
      "envelopeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "status": "sent",
      "statusDateTime": "2024-01-15T10:30:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/gpoc-docusign/envelopes/{envelope_id} - docusign-envelope-status

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "key": {}
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/gpoc-docusign/token - docusign-token-generate

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DocuSignTokenResponseDoc.json",
      "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
      "expires_in": 3600,
      "token_type": "Bearer"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/journeys/list - journey-run-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "string",
      "counts": {
        "canceled_count": 1,
        "completed_count": 1,
        "in_progress_count": 1,
        "scheduled_count": 1,
        "todo_count": 1
      },
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "runs": [
        {
          "action_run_data": {
            "financial_account": {
              "account_number": "1234567890",
              "data_provider_name": "Bank of America"
            }
          },
          "agents": {
            "key": {}
          },
          "aum": 1000000000,
          "blueprint_category": "Move Money",
          "blueprint_description": "This action is used to transfer assets from one account to another",
          "blueprint_id": "bp_12345",
          "blueprint_name": "Transfer of Assets",
          "blueprint_version_id": "bpv_12345",
          "cancellation_reason": "No longer needed",
          "cancelled_at": "2023-01-01T12:30:00Z",
          "cancelled_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "child_runs": [
            {
              "action_run_data": {},
              "agents": {},
              "aum": {},
              "blueprint_category": {},
              "blueprint_description": {},
              "blueprint_id": {},
              "blueprint_name": {},
              "blueprint_version_id": {},
              "cancellation_reason": {},
              "cancelled_at": {},
              "cancelled_by": {},
              "child_runs": {},
              "client_organisation_external_id": {},
              "client_organisation_id": {},
              "client_organisation_market": {},
              "client_organisation_name": {},
              "client_organisation_national_css_coverage": {},
              "client_organisation_type": {},
              "client_organisation_uhnw_service_level": {},
              "client_segmentation": {},
              "completed_at": {},
              "created_at": {},
              "current_task": {},
              "deadline": {},
              "environment": {},
              "expected_completion_date": {},
              "id": {},
              "locked_at": {},
              "locked_by": {},
              "logs": {},
              "name": {},
              "next_step_date": {},
              "parent_blueprint_category": {},
              "parent_blueprint_description": {},
              "parent_blueprint_name": {},
              "parent_nickname": {},
              "parent_run_id": {},
              "ready_at": {},
              "recommended": {},
              "recommended_by": {},
              "rejected_at": {},
              "rejected_by": {},
              "rejection_reason": {},
              "scheduled_at": {},
              "slug": {},
              "source_system": {},
              "started_at": {},
              "started_by": {},
              "status": {},
              "temp_legacy_slug": {},
              "tenant_id": {}
            }
          ],
          "client_organisation_external_id": "co_xyz",
          "client_organisation_id": "co_xyz",
          "client_organisation_market": "Seattle",
          "client_organisation_name": "Client Org",
          "client_organisation_national_css_coverage": true,
          "client_organisation_type": "Existing",
          "client_organisation_uhnw_service_level": true,
          "client_segmentation": "High Net Worth",
          "completed_at": "2023-01-01T13:00:00Z",
          "created_at": "2023-01-01T12:00:00Z",
          "current_task": {
            "id": "ar_c_12345",
            "name": "Submit Application",
            "status": "todo"
          },
          "deadline": "2023-01-15T12:00:00Z",
          "environment": "merceradvisors-uat",
          "expected_completion_date": "2023-01-20T12:00:00Z",
          "id": "ar_12345",
          "locked_at": "2026-01-15T10:30:00Z",
          "locked_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "logs": [
            {
              "changed_by": {},
              "custom_status": {},
              "event_type": {},
              "id": {},
              "metadata": {},
              "old_custom_status": {},
              "old_status": {},
              "run_id": {},
              "status": {},
              "tenant_id": {},
              "time": {}
            }
          ],
          "name": "My Action Run",
          "next_step_date": "2023-01-15T12:00:00Z",
          "parent_blueprint_category": "HR",
          "parent_blueprint_description": "Standardized onboarding flow for new hires",
          "parent_blueprint_name": "Employee Onboarding",
          "parent_nickname": "Q3 onboarding cohort",
          "parent_run_id": "ar_parent_12345",
          "ready_at": "2023-01-01T12:04:00Z",
          "recommended": true,
          "recommended_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "rejected_at": "2023-01-01T12:10:00Z",
          "rejected_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "rejection_reason": "Not appropriate",
          "scheduled_at": "2023-01-02T09:00:00Z",
          "slug": "12345",
          "source_system": "avantos",
          "started_at": "2023-01-01T12:05:00Z",
          "started_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "status": "processing",
          "temp_legacy_slug": "string",
          "tenant_id": "t_67890"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/js_execute/{custom_js_function_id} - js-execute

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/JsExecuteOutputBody.json",
      "response": {
        "key": {}
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/kpis/definitions - kpi-definitions-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/KPIDefinitionListOutputBody.json",
      "definitions": [
        {
          "allowed_dimensions": [
            "string"
          ],
          "description": "Total number of actions created in the period",
          "id": "kpi_123",
          "name": "actions.total_count",
          "period_granularity": "day",
          "status": "active",
          "unit": "count"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/kpis/report - kpi-report

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/KPIReportOutputBody.json",
      "available_dimensions": {
        "key": [
          "string"
        ]
      },
      "data_points": [
        {
          "denominator": "25",
          "numerator": "3",
          "period_end": "2026-01-13T00:00:00Z",
          "period_start": "2026-01-06T00:00:00Z",
          "value": "42"
        }
      ],
      "granularity": "weekly",
      "kpi_id": "kpi_123",
      "kpi_name": "actions.total_count",
      "unit": "count"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/kpis/values/search - kpi-values-search

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/KPIValueSearchOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "values": [
        {
          "client_organisation_id": "co_123",
          "computed_at": "2026-02-03T02:00:00Z",
          "created_at": "2026-02-03T02:00:00Z",
          "denominator": "25",
          "dimensions": {
            "key": "string"
          },
          "id": "kpival_123",
          "kpi_id": "kpi_123",
          "numerator": "3",
          "period_end": "2026-02-02T00:00:00Z",
          "period_granularity": "day",
          "period_start": "2026-02-01T00:00:00Z",
          "run_id": "kpirun_123",
          "status_label": "not_met",
          "tenant_id": "t_123",
          "updated_at": "2026-02-03T02:00:00Z",
          "value": "42"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/list-sync-file - list-sync-files

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/SyncFileListOutputBody.json",
      "sync_files": [
        {
          "additional_metadata": {
            "key": {}
          },
          "duration": 1,
          "end_time": "2026-01-15T10:30:00Z",
          "error_count": 1,
          "error_rate_percent": 1.0,
          "file_size": 1,
          "id": "string",
          "record_count": 1,
          "s3_bucket": "string",
          "s3_key": "string",
          "salesforce_object": "string",
          "start_date": "2026-01-15T10:30:00Z",
          "start_time": "2026-01-15T10:30:00Z",
          "status": "string",
          "tenant_id": "string",
          "updated_at": "2026-01-15T10:30:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/list-sync-file-error-logs - list-sync-file-error-logs

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/SyncFileErrorLogListOutputBody.json",
      "error_logs": [
        {
          "avantos_data_type": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "error_log_id": "string",
          "error_message": "string",
          "error_type": "string",
          "incoming_data_type": "string",
          "raw_data": {
            "key": {}
          },
          "record_id": "string",
          "s3_bucket": "string",
          "s3_key": "string",
          "salesforce_object_type": "string",
          "sync_file_end_time": "2026-01-15T10:30:00Z",
          "sync_file_id": "string",
          "sync_file_start_time": "2026-01-15T10:30:00Z",
          "sync_file_updated_at": "2026-01-15T10:30:00Z",
          "sync_status": "string",
          "tenant_id": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/lookups - lookup-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateLookupOutputBody.json",
      "id": "lkp_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/lookups/{category} - lookup-list-by-category

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "category": "business_group_coverage",
        "created_at": "2024-01-01T09:00:00Z",
        "description": "Northeast United States",
        "external_id": "ext_northeast",
        "extra_properties": {
          "region_code": "NE"
        },
        "id": "lkp_123",
        "is_active": true,
        "tenant_id": "t_123",
        "updated_at": "2024-01-01T09:00:00Z",
        "value": "northeast"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/lookups/{lookup_id} - lookup-delete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "key": {}
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/lookups/{lookup_id} - lookup-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "key": {}
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/manager-teams - manager-team-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ManagerTeamListOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "teams": [
        {
          "active": true,
          "direct_reports_count": 5,
          "manager_email": "john.doe@example.com",
          "manager_external_id": "ext_789",
          "manager_first_name": "John",
          "manager_id": "ag_123456",
          "manager_last_name": "Doe",
          "manager_middle_name": "A",
          "manager_role": "Director",
          "manager_title": "Mr",
          "members": [
            {
              "active": {},
              "agent_id": {},
              "direct_reports_count": {},
              "email": {},
              "external_id": {},
              "first_name": {},
              "last_name": {},
              "level": {},
              "manager_id": {},
              "middle_name": {},
              "path": {},
              "role": {},
              "title": {}
            }
          ],
          "total_reports_count": 15
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/manager-teams/{manager_team_id} - manager-team-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ManagerTeamGetOutputBody.json",
      "team": {
        "manager_email": "john.doe@example.com",
        "manager_id": "ag_123456",
        "manager_name": "John Doe",
        "members": [
          {
            "active": true,
            "agent_id": "ag_123456",
            "direct_reports_count": 3,
            "email": "john.doe@example.com",
            "external_id": "ext_789",
            "first_name": "John",
            "last_name": "Doe",
            "level": 1,
            "manager_id": "ag_789",
            "middle_name": "A",
            "path": [
              "ag_123",
              "ag_456"
            ],
            "role": "Manager",
            "title": "Mr"
          }
        ],
        "pagination": {
          "page": 1,
          "page_size": 1,
          "total_pages": 1,
          "total_records": 1
        },
        "team_size": 15
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/meetings - meeting-list-all

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": [
      {
        "$schema": "https://example.com/schemas/MeetingDescription.json",
        "actions_skipped": false,
        "ai_transcript_id": "123",
        "client_organisation_external_id": "ext_org_123",
        "client_organisation_id": "org_123",
        "client_organisation_name": "Acme Inc.",
        "created_at": "2024-03-10T09:00:00Z",
        "description": "Quarterly performance review meeting",
        "end_time": "2024-03-15T15:00:00Z",
        "external_id": "1234567890",
        "extra_properties": {},
        "id": "m_123",
        "initiating_agent": {
          "first_name": "John",
          "id": "a_123",
          "last_name": "Smith"
        },
        "is_historical": false,
        "location": "Conference Room A",
        "meeting_link": "https://meet.example.com/123",
        "meeting_type": "review",
        "my_meeting": true,
        "participants": [
          {
            "first_name": "John",
            "id": "a_123",
            "last_name": "Smith",
            "type": "agent"
          }
        ],
        "primary_client_id": "c_123",
        "record_type": "Historical_FSC_Advisory_Sales",
        "start_time": "2024-03-15T14:00:00Z",
        "status": "scheduled",
        "subject": "Quarterly Review",
        "tenant_id": "123",
        "updated_at": "2024-03-10T09:00:00Z"
      }
    ]
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings - meeting-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings/email-drafts - meeting-list-by-email-drafts

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingListByEmailDraftsOutputBody.json",
      "meetings": [
        {
          "actions_skipped": false,
          "ai_transcript_id": "123",
          "client_organisation_external_id": "ext_org_123",
          "client_organisation_id": "org_123",
          "client_organisation_name": "Acme Inc.",
          "created_at": "2024-03-10T09:00:00Z",
          "description": "Quarterly performance review meeting",
          "email_draft_id": "ed_123",
          "end_time": "2024-03-15T15:00:00Z",
          "external_id": "1234567890",
          "extra_properties": {},
          "id": "m_123",
          "initiating_agent": {
            "first_name": "John",
            "id": "a_123",
            "last_name": "Smith"
          },
          "is_historical": false,
          "location": "Conference Room A",
          "meeting_link": "https://meet.example.com/123",
          "meeting_type": "review",
          "my_meeting": true,
          "participants": [
            {
              "first_name": "John",
              "id": "a_123",
              "last_name": "Smith",
              "type": "agent"
            }
          ],
          "primary_client_id": "c_123",
          "record_type": "Historical_FSC_Advisory_Sales",
          "start_time": "2024-03-15T14:00:00Z",
          "status": "scheduled",
          "subject": "Quarterly Review",
          "tenant_id": "123",
          "updated_at": "2024-03-10T09:00:00Z"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/meetings/id-by-external-id - meeting-id-by-external-id

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetMeetingIDByExternalIDOutputBody.json",
      "meeting_id": "m_789"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings/list - meeting-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingListOutputBody.json",
      "meetings": [
        {
          "$schema": "https://example.com/schemas/MeetingDescription.json",
          "actions_skipped": false,
          "ai_transcript_id": "123",
          "client_organisation_external_id": "ext_org_123",
          "client_organisation_id": "org_123",
          "client_organisation_name": "Acme Inc.",
          "created_at": "2024-03-10T09:00:00Z",
          "description": "Quarterly performance review meeting",
          "end_time": "2024-03-15T15:00:00Z",
          "external_id": "1234567890",
          "extra_properties": {},
          "id": "m_123",
          "initiating_agent": {
            "first_name": "John",
            "id": "a_123",
            "last_name": "Smith"
          },
          "is_historical": false,
          "location": "Conference Room A",
          "meeting_link": "https://meet.example.com/123",
          "meeting_type": "review",
          "my_meeting": true,
          "participants": [
            {
              "first_name": "John",
              "id": "a_123",
              "last_name": "Smith",
              "type": "agent"
            }
          ],
          "primary_client_id": "c_123",
          "record_type": "Historical_FSC_Advisory_Sales",
          "start_time": "2024-03-15T14:00:00Z",
          "status": "scheduled",
          "subject": "Quarterly Review",
          "tenant_id": "123",
          "updated_at": "2024-03-10T09:00:00Z"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings/summaries - meeting-list-by-summaries

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingListBySummariesOutputBody.json",
      "meetings": [
        {
          "$schema": "https://example.com/schemas/MeetingDescription.json",
          "actions_skipped": false,
          "ai_transcript_id": "123",
          "client_organisation_external_id": "ext_org_123",
          "client_organisation_id": "org_123",
          "client_organisation_name": "Acme Inc.",
          "created_at": "2024-03-10T09:00:00Z",
          "description": "Quarterly performance review meeting",
          "end_time": "2024-03-15T15:00:00Z",
          "external_id": "1234567890",
          "extra_properties": {},
          "id": "m_123",
          "initiating_agent": {
            "first_name": "John",
            "id": "a_123",
            "last_name": "Smith"
          },
          "is_historical": false,
          "location": "Conference Room A",
          "meeting_link": "https://meet.example.com/123",
          "meeting_type": "review",
          "my_meeting": true,
          "participants": [
            {
              "first_name": "John",
              "id": "a_123",
              "last_name": "Smith",
              "type": "agent"
            }
          ],
          "primary_client_id": "c_123",
          "record_type": "Historical_FSC_Advisory_Sales",
          "start_time": "2024-03-15T14:00:00Z",
          "status": "scheduled",
          "subject": "Quarterly Review",
          "tenant_id": "123",
          "updated_at": "2024-03-10T09:00:00Z"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/meetings/{id} - meeting-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/meetings/{id} - meeting-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingDescription.json",
      "actions_skipped": false,
      "ai_transcript_id": "123",
      "client_organisation_external_id": "ext_org_123",
      "client_organisation_id": "org_123",
      "client_organisation_name": "Acme Inc.",
      "created_at": "2024-03-10T09:00:00Z",
      "description": "Quarterly performance review meeting",
      "end_time": "2024-03-15T15:00:00Z",
      "external_id": "1234567890",
      "extra_properties": {},
      "id": "m_123",
      "initiating_agent": {
        "first_name": "John",
        "id": "a_123",
        "last_name": "Smith"
      },
      "is_historical": false,
      "location": "Conference Room A",
      "meeting_link": "https://meet.example.com/123",
      "meeting_type": "review",
      "my_meeting": true,
      "participants": [
        {
          "first_name": "John",
          "id": "a_123",
          "last_name": "Smith",
          "type": "agent"
        }
      ],
      "primary_client_id": "c_123",
      "record_type": "Historical_FSC_Advisory_Sales",
      "start_time": "2024-03-15T14:00:00Z",
      "status": "scheduled",
      "subject": "Quarterly Review",
      "tenant_id": "123",
      "updated_at": "2024-03-10T09:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/meetings/{id} - meeting-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/meetings/{id}/actions-skipped - meeting-actions-skipped-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/meetings/{id}/transcript-id - meeting-transcript-id-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/meetings/{meeting_id}/action-runs - meeting-action-run-relationship-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingActionRunRelationshipListOutputBody.json",
      "relationships": [
        {
          "action_run_created_at": "2024-03-10T09:00:00Z",
          "action_run_id": "ar_123",
          "action_run_name": "Send Follow-up Email",
          "action_run_status": "completed",
          "blueprint_name": "Email Blueprint",
          "meeting_id": "mt_123",
          "relationship_created_at": "2024-03-10T09:00:00Z",
          "relationship_id": "mar_123",
          "relationship_updated_at": "2024-03-10T09:00:00Z",
          "source_system": "avantos",
          "tenant_id": "123"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings/{meeting_id}/action-runs - meeting-action-run-relationship-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingActionRunRelationshipCreateOutputBody.json",
      "id": "mar_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/meetings/{meeting_id}/action-runs/{action_run_id} - meeting-action-run-relationship-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings/{meeting_id}/attendees - meeting-attendee-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingAttendeeCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/meetings/{meeting_id}/attendees/{attendee_id} - meeting-attendee-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/meetings/{meeting_id}/email-draft - meeting-email-draft-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/meetings/{meeting_id}/email-draft - meeting-email-draft-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingEmailDraftDescription.json",
      "body_content": "Thank you for attending...",
      "cc_addresses": [
        "manager@example.com"
      ],
      "created_at": "2024-03-10T09:00:00Z",
      "id": "med_123",
      "is_ai_enhanced": false,
      "is_skipped": false,
      "meeting_id": "mt_123",
      "sent_flag": false,
      "subject": "Meeting Follow-up",
      "tenant_id": "123",
      "to_addresses": [
        "john@example.com"
      ],
      "updated_at": "2024-03-10T09:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings/{meeting_id}/email-draft - meeting-email-draft-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingEmailDraftCreateOutputBody.json",
      "id": "med_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/meetings/{meeting_id}/email-draft - meeting-email-draft-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/meetings/{meeting_id}/email-draft/upsert - meeting-email-draft-upsert

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingEmailDraftUpsertOutputBody.json",
      "created": true,
      "id": "med_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/meetings/{meeting_id}/prep - meeting-prep-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/meetings/{meeting_id}/prep - meeting-prep-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingPrepDescription.json",
      "body_content": "Meeting prep content",
      "created_at": "2024-03-10T09:00:00Z",
      "id": "mp_123",
      "is_ai_enhanced": false,
      "meeting_id": "mt_123",
      "tenant_id": "123",
      "updated_at": "2024-03-10T09:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings/{meeting_id}/prep - meeting-prep-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingPrepCreateOutputBody.json",
      "id": "mp_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/meetings/{meeting_id}/prep - meeting-prep-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/meetings/{meeting_id}/prep/upsert - meeting-prep-upsert

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingPrepUpsertOutputBody.json",
      "created": true,
      "id": "mp_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/meetings/{meeting_id}/summary - meeting-summary-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/meetings/{meeting_id}/summary - meeting-summary-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingSummaryDescription.json",
      "attested_at": "2024-03-10T10:00:00Z",
      "attesting_agent_id": "ag_456",
      "created_at": "2024-03-10T09:00:00Z",
      "id": "ms_123",
      "is_ai_enhanced": false,
      "is_attested": false,
      "meeting_id": "mt_123",
      "summary_content": "Meeting summary content",
      "tenant_id": "123",
      "updated_at": "2024-03-10T09:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings/{meeting_id}/summary - meeting-summary-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingSummaryCreateOutputBody.json",
      "id": "ms_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/meetings/{meeting_id}/summary - meeting-summary-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings/{meeting_id}/summary/attest - meeting-summary-attest

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/meetings/{meeting_id}/summary/unattest - meeting-summary-unattest

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/meetings/{meeting_id}/summary/upsert - meeting-summary-upsert

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/MeetingSummaryUpsertOutputBody.json",
      "created": true,
      "id": "ms_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/notifications/{agent_id} - notification-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/NotificationListOutputBody.json",
      "notifications": [
        {
          "category": "string",
          "content": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "environment": "string",
          "external_id": "string",
          "id": "string",
          "is_escalated": true,
          "is_read": true,
          "name": "string",
          "tenant_id": "string",
          "updated_at": "2026-01-15T10:30:00Z",
          "user_id": "string"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/notifications/{agent_id}/create - notification-create

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/notifications/{notification_id} - notification-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/notifications/{notification_id} - notification-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/NotificationGetOutputBody.json",
      "notification": {
        "category": "string",
        "content": "string",
        "created_at": "2026-01-15T10:30:00Z",
        "environment": "string",
        "external_id": "string",
        "id": "string",
        "is_escalated": true,
        "is_read": true,
        "name": "string",
        "tenant_id": "string",
        "updated_at": "2026-01-15T10:30:00Z",
        "user_id": "string"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/notifications/{notification_id} - notification-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/notifications/{notification_id}/read - notification-mark-as-read

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/opportunities/{opportunity_id} - opportunity-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/OpportunityUpdateOutputBody.json",
      "id": "coo_123abc"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/pages/{page_id}/config - tenant-config-delete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TenantConfigDeleteOutputBody.json",
      "message": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pages/{page_id}/config - tenant-config-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TenantConfigGetOutputBody.json",
      "createdAt": "string",
      "defaultPinnedViewIds": [
        "string"
      ],
      "defaultViewId": "string",
      "id": "string",
      "pageId": "string",
      "tenantId": "string",
      "updatedAt": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/pages/{page_id}/config - tenant-config-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TenantConfigCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/pages/{page_id}/config - tenant-config-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TenantConfigUpdateOutputBody.json",
      "message": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pages/{page_id}/views - custom-views-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomViewsListOutputBody.json",
      "views": [
        {
          "agent_id": "string",
          "column_order": "string",
          "columns_config": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "created_by": "string",
          "description": "string",
          "filters": "string",
          "id": "string",
          "name": "string",
          "only_assigned": true,
          "page_id": "string",
          "promoted": true,
          "role_names": [
            "string"
          ],
          "scope_type": "string",
          "sorting": "string",
          "tenant_id": "string",
          "updated_at": "2026-01-15T10:30:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/pages/{page_id}/views - custom-views-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomViewsCreateOutputBody.json",
      "view_id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pages/{page_id}/views/default - custom-views-get-default

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomViewsGetDefaultOutputBody.json",
      "view_id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pages/{page_id}/views/pinned - custom-views-get-pinned

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomViewsGetPinnedOutputBody.json",
      "view_ids": [
        "string"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/pages/{page_id}/views/pinned - custom-views-set-pinned

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomViewsSetPinnedOutputBody.json",
      "message": "string",
      "success": true
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/pages/{page_id}/views/set-default - custom-views-set-default

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomViewsSetDefaultOutputBody.json",
      "message": "string",
      "success": true
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/pages/{page_id}/views/{view_id} - custom-views-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pages/{page_id}/views/{view_id} - custom-views-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomViewsGetOutputBody.json",
      "view": {
        "agent_id": "string",
        "column_order": "string",
        "columns_config": "string",
        "created_at": "2026-01-15T10:30:00Z",
        "created_by": "string",
        "description": "string",
        "filters": "string",
        "id": "string",
        "name": "string",
        "only_assigned": true,
        "page_id": "string",
        "promoted": true,
        "role_names": [
          "string"
        ],
        "scope_type": "string",
        "sorting": "string",
        "tenant_id": "string",
        "updated_at": "2026-01-15T10:30:00Z"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/pages/{page_id}/views/{view_id} - custom-views-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomViewsUpdateOutputBody.json",
      "view_id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pages/{page}/available-widgets - page-widget-availability-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PageWidgetAvailabilityListOutputBody.json",
      "availableWidgets": [
        {
          "$schema": "https://example.com/schemas/PageWidgetAvailabilityOutput.json",
          "createdAt": "2024-01-01T00:00:00Z",
          "id": "pwa_123",
          "page": "dashboard",
          "widgetDefinition": {
            "$schema": "https://example.com/schemas/WidgetDefinitionOutput.json",
            "configSchema": {
              "key": {}
            },
            "createdAt": "2024-01-01T00:00:00Z",
            "defaultConfig": {
              "key": {}
            },
            "defaultHeight": 2,
            "defaultWidth": 2,
            "description": "Shows upcoming meetings",
            "displayName": "Meetings Widget",
            "id": "wdef_123",
            "maxHeight": 4,
            "maxWidth": 4,
            "minHeight": 1,
            "minWidth": 1,
            "name": "meetings",
            "updatedAt": "2024-01-01T00:00:00Z"
          },
          "widgetDefinitionId": "wdef_123"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/pages/{page}/available-widgets - page-widget-availability-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PageWidgetAvailabilityCreateOutputBody.json",
      "id": "pwa_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/pages/{page}/available-widgets/{availability_id} - page-widget-availability-delete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PageWidgetAvailabilityDeleteOutputBody.json",
      "message": "Page widget availability deleted successfully"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pages/{page}/available-widgets/{availability_id} - page-widget-availability-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PageWidgetAvailabilityOutput.json",
      "createdAt": "2024-01-01T00:00:00Z",
      "id": "pwa_123",
      "page": "dashboard",
      "widgetDefinition": {
        "$schema": "https://example.com/schemas/WidgetDefinitionOutput.json",
        "configSchema": {
          "key": {}
        },
        "createdAt": "2024-01-01T00:00:00Z",
        "defaultConfig": {
          "key": {}
        },
        "defaultHeight": 2,
        "defaultWidth": 2,
        "description": "Shows upcoming meetings",
        "displayName": "Meetings Widget",
        "id": "wdef_123",
        "maxHeight": 4,
        "maxWidth": 4,
        "minHeight": 1,
        "minWidth": 1,
        "name": "meetings",
        "updatedAt": "2024-01-01T00:00:00Z"
      },
      "widgetDefinitionId": "wdef_123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pages/{page}/default-widgets - page-default-widget-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PageDefaultWidgetListOutputBody.json",
      "defaultWidgets": [
        {
          "$schema": "https://example.com/schemas/PageDefaultWidgetOutput.json",
          "config": {
            "key": {}
          },
          "createdAt": "2024-01-01T00:00:00Z",
          "height": 2,
          "id": "pdw_123",
          "isVisible": false,
          "page": "dashboard",
          "updatedAt": "2024-01-01T00:00:00Z",
          "updatedBy": "agent_123",
          "widgetDefinitionId": "wdef_123",
          "width": 2,
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pages/{page}/default-widgets/{widget_definition_id} - page-default-widget-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PageDefaultWidgetOutput.json",
      "config": {
        "key": {}
      },
      "createdAt": "2024-01-01T00:00:00Z",
      "height": 2,
      "id": "pdw_123",
      "isVisible": false,
      "page": "dashboard",
      "updatedAt": "2024-01-01T00:00:00Z",
      "updatedBy": "agent_123",
      "widgetDefinitionId": "wdef_123",
      "width": 2,
      "x": 0,
      "y": 0
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/pages/{page}/default-widgets/{widget_id} - page-default-widget-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PageDefaultWidgetUpdateOutputBody.json"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/pdfs - pdf-upload

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PDFUploadOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/pdfs/list - pdf-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PDFListOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "pdfs": [
        {
          "created_at": "string",
          "created_by": "string",
          "description": "string",
          "file_name": "string",
          "id": "string",
          "name": "string",
          "updated_at": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/pdfs/{pdf_id} - pdf-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pdfs/{pdf_id} - pdf-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PDFGetOutputBody.json",
      "created_at": "string",
      "created_by": "string",
      "description": "string",
      "file_name": "string",
      "fill_field_mapping": {
        "key": {}
      },
      "id": "string",
      "name": "string",
      "updated_at": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/pdfs/{pdf_id} - pdf-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pdfs/{pdf_id}/file - pdf-get-file

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": "string"
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/pdfs/{pdf_id}/fill - pdf-fill

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PDFFillOutputBody.json",
      "filled_pdf_base64": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pdfs/{pdf_id}/fill-mapping - pdf-get-fill-mapping

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PDFGetFillMappingOutputBody.json",
      "fill_field_mapping": {
        "key": {}
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pdfs/{pdf_id}/preview - pdf-preview

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PDFPreviewOutputBody.json",
      "filled_pdf_base64": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pdfs/{pdf_id}/signature-fields - pdf-signature-field-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PDFSignatureFieldListOutputBody.json",
      "ErrorCode": 1,
      "Errors": {},
      "ResultData": [
        {
          "FormId": 1,
          "SignDateFields": [
            {
              "DocusignXCoord": {},
              "DocusignYCoord": {},
              "FieldHeight": {},
              "FieldRole": {},
              "FieldWidth": {},
              "Name": {},
              "Page": {},
              "PageHeight": {},
              "PageWidth": {},
              "PdfXLeftCoord": {},
              "PdfXRightCoord": {},
              "PdfYBottomCoord": {},
              "PdfYTopCoord": {}
            }
          ],
          "SignFields": [
            {
              "DocusignXCoord": {},
              "DocusignYCoord": {},
              "FieldHeight": {},
              "FieldRole": {},
              "FieldWidth": {},
              "Name": {},
              "Page": {},
              "PageHeight": {},
              "PageWidth": {},
              "PdfXLeftCoord": {},
              "PdfXRightCoord": {},
              "PdfYBottomCoord": {},
              "PdfYTopCoord": {}
            }
          ],
          "SignInitialsFields": [
            {
              "DocusignXCoord": {},
              "DocusignYCoord": {},
              "FieldHeight": {},
              "FieldRole": {},
              "FieldWidth": {},
              "Name": {},
              "Page": {},
              "PageHeight": {},
              "PageWidth": {},
              "PdfXLeftCoord": {},
              "PdfXRightCoord": {},
              "PdfYBottomCoord": {},
              "PdfYTopCoord": {}
            }
          ]
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/pdfs/{pdf_id}/signature-fields - pdf-signature-field-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PDFSignatureFieldCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/pdfs/{pdf_id}/signature-fields/{field_id} - pdf-signature-field-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/pdfs/{pdf_id}/signature-fields/{field_id} - pdf-signature-field-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PDFSignatureFieldResponse.json",
      "created_at": "string",
      "height": 1.0,
      "id": "string",
      "label": "string",
      "metadata": {
        "key": {}
      },
      "page_number": 1,
      "pdf_id": "string",
      "role": "string",
      "signature_kind": "signature",
      "tenant_id": "string",
      "updated_at": "string",
      "width": 1.0,
      "x": 1.0,
      "y": 1.0
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/pdfs/{pdf_id}/signature-fields/{field_id} - pdf-signature-field-patch

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/poc-document-schemas - poc-document-schema-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DocumentSchemaCreateOutputBody.json",
      "id": "docschema_2kzn8f0q1r3s5t7v9x"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/poc-document-schemas/list - poc-document-schema-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DocumentSchemaListOutputBody.json",
      "document_schemas": [
        {
          "$schema": "https://example.com/schemas/DocumentSchemaDescription.json",
          "created_at": "2026-02-22T00:00:00Z",
          "created_by": "agent@example.com",
          "description": "Schema for extracting fields from W-2 tax forms",
          "fields": [
            {
              "field_description": {},
              "field_name": {}
            }
          ],
          "id": "docschema_2kzn8f0q1r3s5t7v9x",
          "name": "W-2 Tax Form",
          "updated_at": "2026-02-22T00:00:00Z"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/poc-document-schemas/{document_schema_id} - poc-document-schema-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/poc-document-schemas/{document_schema_id} - poc-document-schema-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/DocumentSchemaDescription.json",
      "created_at": "2026-02-22T00:00:00Z",
      "created_by": "agent@example.com",
      "description": "Schema for extracting fields from W-2 tax forms",
      "fields": [
        {
          "field_description": "Name of the employer as shown on the form",
          "field_name": "employer_name"
        }
      ],
      "id": "docschema_2kzn8f0q1r3s5t7v9x",
      "name": "W-2 Tax Form",
      "updated_at": "2026-02-22T00:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/poc-document-schemas/{document_schema_id} - poc-document-schema-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/policies - policy-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PolicyListOutputBody.json",
      "policies": [
        {
          "description": "Read and write permissions for client data.",
          "policyName": "ClientReadPolicy",
          "rules": [
            {
              "actions": {},
              "object": {}
            }
          ]
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/policies - policy-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PolicyCreateOutputBody.json",
      "policy_id": 201
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/policies/search - policy-search

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PolicySearchOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "policies": [
        {
          "additional_attributes": {
            "key": "string"
          },
          "agent_organisation_external_id": "00057",
          "agent_organisation_id": "ao_123",
          "agent_organisation_name": "Howard J Elias Inc",
          "agents": [
            {
              "agent_external_id": {},
              "agent_id": {},
              "agent_name": {},
              "effective_from": {},
              "effective_to": {},
              "role": {}
            }
          ],
          "carrier": "State Farm",
          "client_organisation_external_id": "SF-CO-001",
          "client_organisation_id": "co_123",
          "client_organisation_name": "Acme Corporation",
          "clients": [
            {
              "client_external_id": {},
              "client_id": {},
              "client_name": {},
              "effective_from": {},
              "effective_to": {},
              "role": {}
            }
          ],
          "created_at": "2024-01-01T09:00:00Z",
          "effective_date": "2024-02-01T00:00:00Z",
          "external_id": "SF-POL-001",
          "face_amount": "250000.00",
          "id": "policy_123",
          "issue_date": "2024-01-15T00:00:00Z",
          "line_of_business": "Life",
          "policy_number": "POL-2024-001",
          "premium_amount": "500.00",
          "premium_frequency": "Monthly",
          "status": "Active",
          "subtype": "Term Life",
          "tenant_id": "t_123",
          "termination_date": "2054-02-01T00:00:00Z",
          "updated_at": "2024-01-15T14:30:00Z",
          "valuations": [
            {
              "business_date": {},
              "canonical_valuation_type": {},
              "currency": {},
              "source_measure_code": {},
              "source_measure_field": {},
              "source_measure_label": {},
              "valuation_amount": {},
              "valuation_type": {}
            }
          ]
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/policies/{policy_id} - policy-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/PolicyGetOutputBody.json",
      "description": "Read and write permissions for client data.",
      "policy_id": 201,
      "policy_name": "ClientReadPolicy"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/qc-check - qc-check-post

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/QCCheckOutputBody.json",
      "errors": [
        "string"
      ],
      "investmentStrategyResult": {
        "automatedQualityControlStatus": "Success",
        "capitalGainsBudgetAspen": 8000,
        "capitalGainsBudgetMatch": "Yes",
        "capitalGainsBudgetOrion": 8000,
        "dcaTotalValueAspen": 0,
        "dcaTotalValueMatch": "Yes",
        "dcaTotalValueOrion": 0,
        "didAnyOrionApiRequestsFail": false,
        "frequentRecurringAutoCashRaisesAspen": [
          {}
        ],
        "frequentRecurringAutoCashRaisesMatch": "Yes",
        "frequentRecurringAutoCashRaisesOrion": [
          {}
        ],
        "incomeProtectionAspen": "No",
        "incomeProtectionMatch": "Yes",
        "incomeProtectionOrion": "No",
        "incomeSleeveAspen": 1000,
        "incomeSleeveMatch": "Yes",
        "incomeSleeveOrion": 1000,
        "lessFrequentRecurringAutoCashRaisesAspen": [
          {}
        ],
        "lessFrequentRecurringAutoCashRaisesMatch": "Yes",
        "lessFrequentRecurringAutoCashRaisesOrion": [
          {}
        ],
        "pendingDistributionAspen": 0,
        "pendingDistributionMatch": "Yes",
        "pendingDistributionOrion": 0,
        "protectedCashAspen": 10000,
        "protectedCashMatch": "Yes",
        "protectedCashOrion": 10000,
        "rebalanceFrequencyAspen": "Quarterly",
        "rebalanceFrequencyMatch": "Yes",
        "rebalanceFrequencyOrion": "Quarterly",
        "securityRestrictionsAspen": [
          {}
        ],
        "securityRestrictionsMatch": "Yes",
        "securityRestrictionsOrion": [
          {}
        ],
        "sleeveStrategyNameAspen": "Nuveen Municipal 1-10 Year",
        "sleeveStrategyNameMatch": "Yes",
        "sleeveStrategyNameOrion": "Nuveen Municipal 1-10 Year",
        "valuesBasedExclusionsIndustryAspen": [
          {}
        ],
        "valuesBasedExclusionsIndustryMatch": "Yes",
        "valuesBasedExclusionsIndustryOrion": [
          {}
        ],
        "valuesBasedExclusionsNonStrictAspen": [
          {}
        ],
        "valuesBasedExclusionsNonStrictMatch": "Yes",
        "valuesBasedExclusionsNonStrictOrion": [
          {}
        ],
        "valuesBasedExclusionsStrictAspen": [
          {}
        ],
        "valuesBasedExclusionsStrictMatch": "Yes",
        "valuesBasedExclusionsStrictOrion": [
          {}
        ]
      },
      "manageCashResult": {
        "automatedQualityControlStatus": "Success",
        "didAnyOrionApiRequestsFail": false,
        "distributionSleeveCurrentMarketValueAspen": 15000,
        "distributionSleeveCurrentMarketValueMatch": "Yes",
        "distributionSleeveCurrentMarketValueOrion": 15000,
        "updatedIncomeSleeveCashAspen": 1000,
        "updatedIncomeSleeveCashMatch": "Yes",
        "updatedIncomeSleeveCashOrion": 1000,
        "updatedPendingDistributionAspen": 0,
        "updatedPendingDistributionMatch": "Yes",
        "updatedPendingDistributionOrion": 0,
        "updatedProtectedCashAspen": 10000,
        "updatedProtectedCashMatch": "Yes",
        "updatedProtectedCashOrion": 10000
      },
      "taskId": "task_123",
      "toolType": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/qc-check-bulk - qc-check-bulk-post

- Status: `multi`

```json
[
  {
    "title": "Accepted",
    "status": "202",
    "body": {
      "$schema": "https://example.com/schemas/QCCheckBulkAsyncOutputBody.json",
      "skippedTasks": 1,
      "startedTasks": 1,
      "tasks": [
        {
          "actionName": "string",
          "actionRunId": "ar_456",
          "reason": "string",
          "skipped": true,
          "started": true,
          "taskId": "task_123",
          "taskName": "string",
          "toolType": "string"
        }
      ],
      "totalTasks": 1
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/relationship-profiles/tax-managers - tax-managers-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TaxManagerAgentRelationshipProfileListOutputBody.json",
      "agent_relationship_profiles": [
        {
          "agent_external_id": "ext_123456",
          "agent_id": "ag_123456",
          "external_id": "ext_789",
          "name": "John Doe",
          "relationship_type": "Tax Manager"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/relationships/client-organisations/{client_organisation_id}/members - relationship-client-organisation-members-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RelationshipClientOrganisationMembersOutputBody.json",
      "members": [
        {
          "additional_attributes": {
            "notes": "VIP client",
            "preferences": {
              "contact_method": "email"
            }
          },
          "addresses": {
            "BILLING": {
              "city": "Anytown",
              "state": "CA"
            }
          },
          "birthdate": "1990-01-01",
          "client_id": "cli_123abc",
          "client_organisation_id": "org_123abc",
          "current_employer": "Acme Inc.",
          "email": "john.doe@example.com",
          "employment_status": "Employed",
          "first_name": "John",
          "is_primary": true,
          "last_name": "Doe",
          "marital_status": "Married",
          "occupation": "Software Engineer",
          "phone": "123-456-7890",
          "preferred_name": "Johnny",
          "role": "PRIMARY",
          "ssn": "123-45-6789",
          "status": "Active",
          "subtype": "Client"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/relationships/client-organisations/{client_organisation_id}/opportunities - relationship-opportunity-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RelationshipOpportunityCreateOutputBody.json",
      "id": "opp_123abc"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/relationships/client-organisations/{client_organisation_id}/opportunities-list - relationship-opportunity-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RelationshipOpportunityListOutputBody.json",
      "opportunities": [
        {
          "amount": "1000000",
          "amount_transferred": "1000000",
          "category": "Expand",
          "client_organisation_external_id": "org_123abc",
          "client_organisation_extra_properties": {
            "annual_revenue": "$500M",
            "employees": "5000",
            "industry": "Technology"
          },
          "client_organisation_growth_opportunity_next_step_date": "2024-12-31",
          "client_organisation_id": "org_123abc",
          "client_organisation_name": "Acme Inc.",
          "client_organisation_status": "prospect",
          "client_organisation_type": "prospect",
          "closed_amount": "1000000",
          "created_at": "2024-01-01T00:00:00Z",
          "description": "Potential investment in emerging markets",
          "expected_close_date": "2024-12-31",
          "expected_revenue": "1000000",
          "external_id": "opp_123",
          "extra_properties": {
            "platform": "Zoom",
            "recording_url": "https://example.com/recording"
          },
          "id": "opp_123abc",
          "import_type": "prospect",
          "is_closed": false,
          "lead_source": "prospect",
          "name": "New Investment Opportunity",
          "next_meeting_date": "2024-12-31",
          "next_step": "Schedule follow-up meeting",
          "next_step_date": "2024-12-31",
          "opportunity_type": "investment",
          "owner_id": "agent_123",
          "probability": 75.5,
          "probability_categorisation": "High",
          "prospective_external_id": "org_123abc",
          "prospective_id": "org_123abc",
          "prospective_name": "Acme Inc.",
          "prospective_type": "prospect",
          "record_type": "Historical_FSC_Advisory_Sales",
          "relationship_type": "prospect",
          "stage": "Identify",
          "stage_changed_date": "2024-01-15T00:00:00Z",
          "status": "open",
          "sub_category": "Manage Balance Sheet",
          "updated_at": "2024-01-01T00:00:00Z",
          "wealth_advisor_agent_id": "agent_123abc",
          "wealth_advisor_first_name": "John",
          "wealth_advisor_last_name": "Doe"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/relationships/dashboard - relationship-dashboard-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RelationshipDashboardListOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 10,
        "total_pages": 100,
        "total_records": 1000
      },
      "relationships_mapped": [
        {
          "primaryAdvisorFirstName": "Bob"
        }
      ],
      "relationships_raw": [
        {
          "addresses": {
            "BILLING": {
              "city": "Anytown",
              "state": "CA"
            }
          },
          "agent_organisation_id": "org_456def",
          "agent_organisation_name": "XYZ Services",
          "agent_organisation_role": "Agent",
          "agent_organisation_type": "LLC",
          "agents": {
            "PRIMARY": {
              "first_name": "John",
              "last_name": "Doe"
            }
          },
          "client_organisation_id": "org_123abc",
          "client_organisation_name": "Acme Corp",
          "client_organisation_role": "Client",
          "client_organisation_type": "Corporation",
          "client_relationship_status": "EXISTING"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/relationships/opportunities/{opportunity_id} - relationship-opportunity-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RelationshipOpportunityGetOutputBody.json",
      "opportunity": {
        "amount": "1000000",
        "amount_transferred": "1000000",
        "category": "Expand",
        "client_organisation_external_id": "org_123abc",
        "client_organisation_extra_properties": {
          "annual_revenue": "$500M",
          "employees": "5000",
          "industry": "Technology"
        },
        "client_organisation_growth_opportunity_next_step_date": "2024-12-31",
        "client_organisation_id": "org_123abc",
        "client_organisation_name": "Acme Inc.",
        "client_organisation_status": "prospect",
        "client_organisation_type": "prospect",
        "closed_amount": "1000000",
        "created_at": "2024-01-01T00:00:00Z",
        "description": "Potential investment in emerging markets",
        "expected_close_date": "2024-12-31",
        "expected_revenue": "1000000",
        "external_id": "opp_123",
        "extra_properties": {
          "platform": "Zoom",
          "recording_url": "https://example.com/recording"
        },
        "id": "opp_123abc",
        "import_type": "prospect",
        "is_closed": false,
        "lead_source": "prospect",
        "name": "New Investment Opportunity",
        "next_meeting_date": "2024-12-31",
        "next_step": "Schedule follow-up meeting",
        "next_step_date": "2024-12-31",
        "opportunity_type": "investment",
        "owner_id": "agent_123",
        "probability": 75.5,
        "probability_categorisation": "High",
        "prospective_external_id": "org_123abc",
        "prospective_id": "org_123abc",
        "prospective_name": "Acme Inc.",
        "prospective_type": "prospect",
        "record_type": "Historical_FSC_Advisory_Sales",
        "relationship_type": "prospect",
        "stage": "Identify",
        "stage_changed_date": "2024-01-15T00:00:00Z",
        "status": "open",
        "sub_category": "Manage Balance Sheet",
        "updated_at": "2024-01-01T00:00:00Z",
        "wealth_advisor_agent_id": "agent_123abc",
        "wealth_advisor_first_name": "John",
        "wealth_advisor_last_name": "Doe"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/reports/manual-mutual-fund-trades - send-mutual-fund-trades-report

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/SendMutualFundTradesReportOutputBody.json"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/role-groups - role-groups-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RoleGroupListOutputBody.json",
      "role_groups": [
        {
          "name": "string",
          "roles": [
            "string"
          ],
          "tenant_id": "string"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/roles - role-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RoleListOutputBody.json",
      "roles": [
        {
          "description": "Manages clients and organisations.",
          "policies": [
            "ClientReadPolicy",
            "ClientWritePolicy"
          ],
          "roleName": "Admin"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/roles - role-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RoleCreateOutputBody.json",
      "role_id": 101
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/roles/enforcer - enforcer-role-rules-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/EnforcerRoleRulesGetOutputBody.json",
      "rules": [
        "rule1",
        "rule2"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/roles/{role_id} - role-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RoleGetOutputBody.json",
      "description": "Manages clients and organisations.",
      "role_id": 101,
      "role_name": "Admin"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/roles/{role_id}/policies - role-policy-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/RolePolicyCreateOutputBody.json",
      "policy_id": 201,
      "role_id": 101
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/salesforce/{object_type} - salesforce-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/SalesforceCreateOutputBody.json",
      "id": "0RExx0000004CqGGAU"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/salesforce/{object_type}/{object_id} - salesforce-delete

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/SalesforceDeleteOutputBody.json"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/salesforce/{object_type}/{object_id} - salesforce-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": "string"
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/search - global-search

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GlobalSearchOutputBody.json",
      "results": [
        {
          "entity_type": "client",
          "error": "string",
          "items": [
            {
              "display_fields": {},
              "display_text": {},
              "highlighted_text": {},
              "id": {},
              "score": {},
              "updated_at": {}
            }
          ],
          "pagination": {
            "page": 1,
            "page_size": 1,
            "total_pages": 1,
            "total_records": 1
          }
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/service-agreements - service-agreement-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ServiceAgreementCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/service-agreements/{service_agreement_id} - service-agreement-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ServiceAgreementGetOutputBody.json",
      "service_agreement": {
        "account_id": "string",
        "additional_attributes": {
          "key": {}
        },
        "advisor_id": "string",
        "agreement_details": {
          "key": {}
        },
        "allocation_details": {
          "key": {}
        },
        "client_id": "string",
        "created_at": "2026-01-15T10:30:00Z",
        "end_date": "2026-01-15T10:30:00Z",
        "fee_details": {
          "key": {}
        },
        "id": "string",
        "product_id": "string",
        "repcode_id": "string",
        "start_date": "2026-01-15T10:30:00Z",
        "tenant_id": "string",
        "updated_at": "2026-01-15T10:30:00Z"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/service-agreements/{service_agreement_id}/document - service-agreement-document-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CreateDocumentCatalogEntryOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/service-agreements/{service_agreement_id}/documents - service-agreement-documents-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetDocumentsOutputBody.json",
      "documents": [
        {
          "access_level": "private",
          "additional_attributes": {
            "department": "finance",
            "priority": "high"
          },
          "agent_id": "agent_123",
          "approved_by": "user_123",
          "client_id": "client_789",
          "created_at": "2024-01-15T14:30:00Z",
          "deleted_at": "2024-02-15T14:30:00Z",
          "description": "Client's 2023 tax return document",
          "document_status": "approved",
          "document_subtype": "2023 Tax Return",
          "document_type": "bank_statement",
          "external_id": "DOC-2024-01",
          "file_name": "tax_return_2023.pdf",
          "file_type": "pdf",
          "id": "doc_123",
          "rejection_reason": "Invalid format",
          "retention_policy": "5 years",
          "service_agreement_id": "sa_456",
          "storage_container": "my-document-bucket",
          "storage_mode": "PLATFORM_MANAGED",
          "storage_object_key": "clients/2024/doc.pdf",
          "storage_provider": "S3",
          "tenant_id": "tenant_456",
          "updated_at": "2024-01-15T14:30:00Z",
          "upload_date": "2024-01-15T14:30:00Z",
          "upload_status": "VERIFIED"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/tasks - action-run-task-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunTaskListOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 10,
        "total_pages": 100,
        "total_records": 1000
      },
      "tasks": [
        {
          "action_number": "A-1",
          "action_run_data": {
            "financial_account": {
              "account_number": "1234567890",
              "data_provider_name": "Bank of America"
            }
          },
          "action_run_id": "ar_12345",
          "action_run_name": "Run 1",
          "action_run_slug": "run_1",
          "action_run_status": "processing",
          "agents": {
            "key": {}
          },
          "assigned": {
            "first_name": "John",
            "id": "a_12345",
            "last_name": "Doe"
          },
          "assigned_agent_first_name": "John",
          "assigned_agent_last_name": "Smith",
          "aum": 1000000000,
          "blueprint_category": "\"financial_account\"",
          "blueprint_name": "\"Financial Account\"",
          "can_begin": true,
          "cancellation_reason": "Task was cancelled because it was no longer needed",
          "cancelled_at": "2023-04-01T12:00:00Z",
          "cancelled_by": {
            "first_name": "John",
            "id": "a_12345",
            "last_name": "Doe"
          },
          "client_organisation_external_id": "external_id",
          "client_organisation_extra_properties": {
            "data_provider_name": "Bank of America",
            "market": "US"
          },
          "client_organisation_id": "co_xyz",
          "client_organisation_name": "Org XYZ",
          "client_organisation_type": "\"bank\"",
          "client_segmentation": "\"high_value\"",
          "completed_at": "2023-04-01T12:00:00Z",
          "completed_by": {
            "first_name": "John",
            "id": "a_12345",
            "last_name": "Doe"
          },
          "component_key": "component_12345",
          "created_at": "2023-04-01T12:00:00Z",
          "cron_job_queued": "job_123",
          "data": {
            "financial_account": {
              "account_number": "1234567890",
              "data_provider_name": "Bank of America"
            }
          },
          "deadline": "2023-04-01T12:00:00Z",
          "environment": "merceradvisors-uat",
          "id": "task_12345",
          "logs": [
            {
              "changed_by": {},
              "description": {},
              "status": {},
              "time": {}
            }
          ],
          "name": "Submit: Customer Details",
          "next_step_date": "2023-04-01T12:00:00Z",
          "note": "We're still waiting on Bob to submit the details",
          "parent_blueprint_category": "HR",
          "parent_blueprint_description": "Standardized onboarding flow for new hires",
          "parent_blueprint_name": "Employee Onboarding",
          "parent_nickname": "Q3 onboarding cohort",
          "parent_run_id": "ar_parent_12345",
          "permitted_roles": [
            "admin",
            "user"
          ],
          "primary_css": {
            "agent_id": "a_12345",
            "first_name": "John",
            "last_name": "Doe",
            "middle_name": "M"
          },
          "priority": "high",
          "rejected": {
            "reason": "Task was rejected because XYZ",
            "rejected_at": "2023-04-01T12:00:00Z",
            "rejected_by": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            }
          },
          "scheduled_at": "2023-04-01T12:00:00Z",
          "section_name": "string",
          "sla_duration": {
            "time": 3600,
            "unit": "minutes"
          },
          "source_system": "\"avantos\"",
          "started_at": "2023-04-01T12:00:00Z",
          "status": "todo",
          "tags": [
            "urgent",
            "compliance"
          ],
          "task_type": "submission",
          "total_time_waiting_ms": 3600000,
          "unblocked_at": "2023-04-01T12:00:00Z",
          "waiting_for": "Team Member",
          "who_waiting_on": "Client"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/tasks/bulk-transfer-assignments - action-run-tasks-bulk-transfer-assignments

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunTasksBulkAssignOutputBody.json",
      "failed_tasks": [
        {
          "reason": "Permission denied",
          "task_id": "task_123"
        }
      ],
      "successful_task_ids": [
        "string"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/tasks/{task_id}/run-info - task-run-info

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TaskRunInfoOutputBody.json",
      "is_legacy": true,
      "run_id": "ar_456",
      "task_id": "ar_t_456"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/tax-filings - tax-filing-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ListTaxFilingsOutputBody.json",
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      },
      "tax_filings": [
        {
          "adjusted_gross_income": "string",
          "advisor_review_needed": true,
          "agi": "string",
          "amended_return": true,
          "charitable_donations": "string",
          "client_organisation_external_id": "string",
          "client_organisation_extra_properties": {
            "key": "string"
          },
          "client_organisation_id": "string",
          "client_organisation_name": "string",
          "client_organisation_relationship_status": "string",
          "client_organisation_tax_assistant_email": "string",
          "client_organisation_tax_assistant_external_id": "string",
          "client_organisation_tax_assistant_first_name": "string",
          "client_organisation_tax_assistant_last_name": "string",
          "client_organisation_tax_assistant_title": "string",
          "client_organisation_tax_associate_email": "string",
          "client_organisation_tax_associate_external_id": "string",
          "client_organisation_tax_associate_first_name": "string",
          "client_organisation_tax_associate_last_name": "string",
          "client_organisation_tax_associate_title": "string",
          "client_organisation_tax_manager_email": "string",
          "client_organisation_tax_manager_external_id": "string",
          "client_organisation_tax_manager_first_name": "string",
          "client_organisation_tax_manager_last_name": "string",
          "client_organisation_tax_manager_title": "string",
          "completion_window": "string",
          "complexity_type": "string",
          "created_at": "2026-01-15T10:30:00Z",
          "credits": "string",
          "date_filed": "2026-01-15T10:30:00Z",
          "deductions": "string",
          "document_due_date": "2026-01-15T10:30:00Z",
          "document_received_date": "2026-01-15T10:30:00Z",
          "e_file_authorization_date": "2026-01-15T10:30:00Z",
          "e_file_status": "string",
          "e_file_status_date": "2026-01-15T10:30:00Z",
          "effective_tax_rate": "string",
          "extension_filed": true,
          "external_id": "string",
          "extra_properties": {
            "key": "string"
          },
          "filing_due_date": "2026-01-15T10:30:00Z",
          "filing_method": "string",
          "filing_status": "string",
          "final_year": true,
          "gifting": "string",
          "id": "string",
          "invoicing_method": "string",
          "marginal_tax_rate": "string",
          "organizer_sent": true,
          "organizer_sent_date": "2026-01-15T10:30:00Z",
          "payment_method": "string",
          "prepaid_taxes": "string",
          "reported_income": "string",
          "return_completion_date": "2026-01-15T10:30:00Z",
          "safe_harbor": "string",
          "service_offering": "string",
          "signature_preference": "string",
          "tax_associate_email": "string",
          "tax_associate_external_id": "string",
          "tax_associate_first_name": "string",
          "tax_associate_id": "string",
          "tax_associate_last_name": "string",
          "tax_fee": "string",
          "tax_filing_type": "string",
          "tax_liability": "string",
          "tax_manager_email": "string",
          "tax_manager_external_id": "string",
          "tax_manager_first_name": "string",
          "tax_manager_id": "string",
          "tax_manager_last_name": "string",
          "tax_professional_category": "string",
          "tax_return_status": "string",
          "tax_return_type": "string",
          "tax_service_type_1040": "string",
          "tax_services_final_year": true,
          "tax_support_specialist_email": "string",
          "tax_support_specialist_external_id": "string",
          "tax_support_specialist_first_name": "string",
          "tax_support_specialist_id": "string",
          "tax_support_specialist_last_name": "string",
          "tax_year": "string",
          "tenant_id": "string",
          "updated_at": "2026-01-15T10:30:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/tax-filings/completion-windows - tax-filing-completion-windows-temp

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TaxFilingCompletionWindowAggregationOutputBody.json",
      "completion_windows": [
        "string"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/tax-filings/tax-pods - tax-filing-tax-pods-temp

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TaxFilingTaxPodAggregationOutputBody.json",
      "tax_pods": [
        "string"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/tax-filings/tax-return-types - tax-return-type-temp

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TaxReturnTypeAggregationOutputBody.json",
      "tax_return_types": [
        "string"
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/tax-filings/{tax_filing_id} - tax-filing-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetTaxFilingByIDOutputBody.json",
      "tax_filing": {
        "adjusted_gross_income": "string",
        "advisor_review_needed": true,
        "agi": "string",
        "amended_return": true,
        "charitable_donations": "string",
        "client_organisation_external_id": "string",
        "client_organisation_extra_properties": {
          "key": "string"
        },
        "client_organisation_id": "string",
        "client_organisation_name": "string",
        "client_organisation_relationship_status": "string",
        "client_organisation_tax_assistant_email": "string",
        "client_organisation_tax_assistant_external_id": "string",
        "client_organisation_tax_assistant_first_name": "string",
        "client_organisation_tax_assistant_last_name": "string",
        "client_organisation_tax_assistant_title": "string",
        "client_organisation_tax_associate_email": "string",
        "client_organisation_tax_associate_external_id": "string",
        "client_organisation_tax_associate_first_name": "string",
        "client_organisation_tax_associate_last_name": "string",
        "client_organisation_tax_associate_title": "string",
        "client_organisation_tax_manager_email": "string",
        "client_organisation_tax_manager_external_id": "string",
        "client_organisation_tax_manager_first_name": "string",
        "client_organisation_tax_manager_last_name": "string",
        "client_organisation_tax_manager_title": "string",
        "completion_window": "string",
        "complexity_type": "string",
        "created_at": "2026-01-15T10:30:00Z",
        "credits": "string",
        "date_filed": "2026-01-15T10:30:00Z",
        "deductions": "string",
        "document_due_date": "2026-01-15T10:30:00Z",
        "document_received_date": "2026-01-15T10:30:00Z",
        "e_file_authorization_date": "2026-01-15T10:30:00Z",
        "e_file_status": "string",
        "e_file_status_date": "2026-01-15T10:30:00Z",
        "effective_tax_rate": "string",
        "extension_filed": true,
        "external_id": "string",
        "extra_properties": {
          "key": "string"
        },
        "filing_due_date": "2026-01-15T10:30:00Z",
        "filing_method": "string",
        "filing_status": "string",
        "final_year": true,
        "gifting": "string",
        "id": "string",
        "invoicing_method": "string",
        "marginal_tax_rate": "string",
        "organizer_sent": true,
        "organizer_sent_date": "2026-01-15T10:30:00Z",
        "payment_method": "string",
        "prepaid_taxes": "string",
        "reported_income": "string",
        "return_completion_date": "2026-01-15T10:30:00Z",
        "safe_harbor": "string",
        "service_offering": "string",
        "signature_preference": "string",
        "tax_associate_email": "string",
        "tax_associate_external_id": "string",
        "tax_associate_first_name": "string",
        "tax_associate_id": "string",
        "tax_associate_last_name": "string",
        "tax_fee": "string",
        "tax_filing_type": "string",
        "tax_liability": "string",
        "tax_manager_email": "string",
        "tax_manager_external_id": "string",
        "tax_manager_first_name": "string",
        "tax_manager_id": "string",
        "tax_manager_last_name": "string",
        "tax_professional_category": "string",
        "tax_return_status": "string",
        "tax_return_type": "string",
        "tax_service_type_1040": "string",
        "tax_services_final_year": true,
        "tax_support_specialist_email": "string",
        "tax_support_specialist_external_id": "string",
        "tax_support_specialist_first_name": "string",
        "tax_support_specialist_id": "string",
        "tax_support_specialist_last_name": "string",
        "tax_year": "string",
        "tenant_id": "string",
        "updated_at": "2026-01-15T10:30:00Z"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/trigger-execution-logs - trigger-execution-logs-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerExecutionLogsListResponseBody.json",
      "data": [
        {
          "action_run_id": "string",
          "error": "string",
          "execution_time_ms": 1,
          "id": "string",
          "mapped_response": {
            "key": {}
          },
          "metadata": {
            "action_run_id": "run_12345",
            "blueprint_name": "Client Onboarding",
            "status": "processing"
          },
          "request_body": "string",
          "request_headers": {
            "key": {}
          },
          "request_method": "string",
          "request_query_params": {
            "key": {}
          },
          "request_url": "string",
          "response_body": "string",
          "response_code": 1,
          "response_headers": {
            "key": {}
          },
          "status": "string",
          "timestamp": "2026-01-15T10:30:00Z",
          "trigger_endpoint_id": "string",
          "trigger_origin": "node",
          "trigger_origin_identifier": "string",
          "user_info": {
            "key": {}
          }
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/triggers/endpoints - trigger-endpoint-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerEndpointListOutputBody.json",
      "trigger_endpoints": [
        {
          "$schema": "https://example.com/schemas/TriggerEndpointDescription.json",
          "created_at": "2021-01-01T00:00:00Z",
          "custom_headers_template": {
            "userId": "{{.user_id}}"
          },
          "custom_headers_template_variables": [
            "user_id"
          ],
          "error_message_template": [
            {
              "message": {},
              "pattern": {}
            }
          ],
          "id": "te_213j32",
          "name": "Send Email",
          "output_mapping": {
            "id": ".data.value.id"
          },
          "path_template": "/api/v1/customer/{{.customer_id}}/do/something/",
          "path_template_variables": [
            "customer_id"
          ],
          "payload_template": {
            "subject": "{{.subject}}",
            "to": "{{.to}}"
          },
          "payload_template_variables": [
            "to",
            "subject"
          ],
          "payload_type": "json",
          "query_parameter_template": {
            "user_id": "{{.user_id}}"
          },
          "query_parameter_template_variables": [
            "user_id"
          ],
          "request_method": "POST",
          "timeout_seconds": 10,
          "trigger_service_id": "ts_213j32",
          "updated_at": "2021-01-01T00:00:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/triggers/endpoints - trigger-endpoint-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerEndpointCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/triggers/endpoints/{trigger_endpoint_id} - trigger-endpoint-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/triggers/endpoints/{trigger_endpoint_id} - trigger-endpoint-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerEndpointDescription.json",
      "created_at": "2021-01-01T00:00:00Z",
      "custom_headers_template": {
        "userId": "{{.user_id}}"
      },
      "custom_headers_template_variables": [
        "user_id"
      ],
      "error_message_template": [
        {
          "message": "This Relationship has not been synced to Orion.",
          "pattern": "ClientId not set.*Salesforce"
        }
      ],
      "id": "te_213j32",
      "name": "Send Email",
      "output_mapping": {
        "id": ".data.value.id"
      },
      "path_template": "/api/v1/customer/{{.customer_id}}/do/something/",
      "path_template_variables": [
        "customer_id"
      ],
      "payload_template": {
        "subject": "{{.subject}}",
        "to": "{{.to}}"
      },
      "payload_template_variables": [
        "to",
        "subject"
      ],
      "payload_type": "json",
      "query_parameter_template": {
        "user_id": "{{.user_id}}"
      },
      "query_parameter_template_variables": [
        "user_id"
      ],
      "request_method": "POST",
      "timeout_seconds": 10,
      "trigger_service_id": "ts_213j32",
      "updated_at": "2021-01-01T00:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/triggers/endpoints/{trigger_endpoint_id} - trigger-endpoint-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/triggers/endpoints/{trigger_endpoint_id}/execute - trigger-endpoint-execute

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerEndpointExecuteOutputBody.json",
      "execution_time_ms": 100,
      "mapped": {
        "age": 30,
        "name": "John"
      },
      "raw": "eyJuYW1lIjoiSm9obiJ9",
      "request_body": "{\"name\": \"John\"}",
      "request_route": "https://dev.api.example.com/something/",
      "response_body": "{\"success\": true}",
      "response_code": 200
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/triggers/services - trigger-service-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerServiceListOutputBody.json",
      "trigger_services": [
        {
          "auth_body": {
            "audience": "https://api.example.com",
            "scope": "read write"
          },
          "auth_body_type": "json",
          "auth_config": {
            "header_key": "Authorization",
            "token": "12345"
          },
          "auth_type": "bearer",
          "base_url": "https://api.sendgrid.com/v3",
          "created_at": "2021-01-01T00:00:00Z",
          "environments": {
            "key": {
              "$schema": {},
              "auth_body": {},
              "auth_body_type": {},
              "auth_config": {},
              "auth_type": {},
              "base_url": {},
              "created_at": {},
              "environment": {},
              "id": {},
              "is_enabled": {},
              "timeout_seconds": {},
              "updated_at": {}
            }
          },
          "id": "ts_213j32",
          "is_enabled": true,
          "is_virtual": false,
          "name": "SendGrid",
          "timeout_seconds": 120,
          "updated_at": "2021-01-01T00:00:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/triggers/services - trigger-service-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerServiceCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/triggers/services/{trigger_service_id} - trigger-service-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/triggers/services/{trigger_service_id} - trigger-service-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerServiceGetOutputBody.json",
      "endpoints": [
        {
          "$schema": "https://example.com/schemas/TriggerEndpointDescription.json",
          "created_at": "2021-01-01T00:00:00Z",
          "custom_headers_template": {
            "userId": "{{.user_id}}"
          },
          "custom_headers_template_variables": [
            "user_id"
          ],
          "error_message_template": [
            {
              "message": {},
              "pattern": {}
            }
          ],
          "id": "te_213j32",
          "name": "Send Email",
          "output_mapping": {
            "id": ".data.value.id"
          },
          "path_template": "/api/v1/customer/{{.customer_id}}/do/something/",
          "path_template_variables": [
            "customer_id"
          ],
          "payload_template": {
            "subject": "{{.subject}}",
            "to": "{{.to}}"
          },
          "payload_template_variables": [
            "to",
            "subject"
          ],
          "payload_type": "json",
          "query_parameter_template": {
            "user_id": "{{.user_id}}"
          },
          "query_parameter_template_variables": [
            "user_id"
          ],
          "request_method": "POST",
          "timeout_seconds": 10,
          "trigger_service_id": "ts_213j32",
          "updated_at": "2021-01-01T00:00:00Z"
        }
      ],
      "service": {
        "auth_body": {
          "audience": "https://api.example.com",
          "scope": "read write"
        },
        "auth_body_type": "json",
        "auth_config": {
          "header_key": "Authorization",
          "token": "12345"
        },
        "auth_type": "bearer",
        "base_url": "https://api.sendgrid.com/v3",
        "created_at": "2021-01-01T00:00:00Z",
        "environments": {
          "key": {
            "$schema": "https://example.com/schemas/TriggerServiceEnvironmentDescription.json",
            "auth_body": {
              "audience": "https://api.example.com",
              "scope": "read write"
            },
            "auth_body_type": "json",
            "auth_config": {
              "header_key": "Authorization",
              "token": "dev-12345"
            },
            "auth_type": "bearer",
            "base_url": "https://dev.api.sendgrid.com/v3",
            "created_at": "2021-01-01T00:00:00Z",
            "environment": "dev",
            "id": "tse_abc123",
            "is_enabled": true,
            "timeout_seconds": 10,
            "updated_at": "2021-01-01T00:00:00Z"
          }
        },
        "id": "ts_213j32",
        "is_enabled": true,
        "is_virtual": false,
        "name": "SendGrid",
        "timeout_seconds": 120,
        "updated_at": "2021-01-01T00:00:00Z"
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/triggers/services/{trigger_service_id} - trigger-service-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/triggers/services/{trigger_service_id}/environments - trigger-service-environment-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerServiceEnvironmentListOutputBody.json",
      "environments": [
        {
          "$schema": "https://example.com/schemas/TriggerServiceEnvironmentDescription.json",
          "auth_body": {
            "audience": "https://api.example.com",
            "scope": "read write"
          },
          "auth_body_type": "json",
          "auth_config": {
            "header_key": "Authorization",
            "token": "dev-12345"
          },
          "auth_type": "bearer",
          "base_url": "https://dev.api.sendgrid.com/v3",
          "created_at": "2021-01-01T00:00:00Z",
          "environment": "dev",
          "id": "tse_abc123",
          "is_enabled": true,
          "timeout_seconds": 10,
          "updated_at": "2021-01-01T00:00:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/triggers/services/{trigger_service_id}/environments - trigger-service-environment-create

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerServiceEnvironmentCreateOutputBody.json",
      "id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### DELETE /api/v1/{tenant_id}/triggers/services/{trigger_service_id}/environments/{environment} - trigger-service-environment-delete

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/triggers/services/{trigger_service_id}/environments/{environment} - trigger-service-environment-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/TriggerServiceEnvironmentDescription.json",
      "auth_body": {
        "audience": "https://api.example.com",
        "scope": "read write"
      },
      "auth_body_type": "json",
      "auth_config": {
        "header_key": "Authorization",
        "token": "dev-12345"
      },
      "auth_type": "bearer",
      "base_url": "https://dev.api.sendgrid.com/v3",
      "created_at": "2021-01-01T00:00:00Z",
      "environment": "dev",
      "id": "tse_abc123",
      "is_enabled": true,
      "timeout_seconds": 10,
      "updated_at": "2021-01-01T00:00:00Z"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/triggers/services/{trigger_service_id}/environments/{environment} - trigger-service-environment-update

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/unqork-custom-api/cash-breakdown - unqork-cash-breakdown

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ResponseUnqorkCashBreakdown.json",
      "data": {
        "resolved": {
          "cashAccounts": [
            {
              "key": {}
            }
          ],
          "cashAvailableForDistribution": 1.0,
          "cashAvailableToInvest": 1.0,
          "contributions": 1.0,
          "dollarCostAverage": 1.0,
          "excessCashToBeInvested": 1.0,
          "excessCashWithTolerance": 1.0,
          "feeCash": 1.0,
          "financialAccountData": {
            "key": {}
          },
          "incomeCash": 1.0,
          "incomingContribution": 1.0,
          "modelCash": 1.0,
          "modelCashMin": 1.0,
          "otherCash": 1.0,
          "pendingDistribution": 1.0,
          "potentialCashToBeRaised": 1.0,
          "protectedCash": 1.0,
          "readyForDistribution": 1.0,
          "recurringDistribution": 1.0,
          "reservedCash": 1.0,
          "sleeveAccounts": [
            {
              "key": {}
            }
          ],
          "totalCash": 1.0
        }
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/unqork-custom-api/identify-tpm - unqork-identify-third-party-manager

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ResponseUnqorkIdentifyThirdPartyManager.json",
      "data": {
        "resolved": {
          "interactionType": "string",
          "thirdPartyManager": "string",
          "thirdPartyManagerAssetType": "string",
          "thirdPartyManagerDetails": [
            {
              "assetType": {},
              "delivery": {},
              "externalId": {},
              "interactionType": {},
              "newImplementationEmail": {},
              "otherEmail": {},
              "portalLink": {},
              "sortOrder": {},
              "strategistId": {},
              "thirdPartyManagerName": {},
              "type": {}
            }
          ],
          "thirdPartyManagerName": "string",
          "thirdPartyManagerType": "string",
          "tpmRecipients": [
            "string"
          ]
        }
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/unqork/action-runs/{unqork_id} - unqork-action-run-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/ActionRunGetDescription.json",
      "action_details": {
        "cancellation_reason": "No longer needed",
        "cancelled_at": "2023-04-01T12:00:00Z",
        "cancelled_by": {
          "first_name": "John",
          "id": "u_12345",
          "last_name": "Doe"
        },
        "category": "onboarding",
        "completed_at": "2023-04-01T12:00:00Z",
        "created_at": "2023-04-01T12:00:00Z",
        "deadline": "2023-04-15T12:00:00Z",
        "expected_completion_date": "2023-04-20T12:00:00Z",
        "id": "ar_12345",
        "next_step": "2023-04-01T12:00:00Z",
        "ready_at": "2023-04-01T12:00:00Z",
        "rejection": {
          "rejected_at": "2023-04-01T12:00:00Z",
          "rejected_by": {
            "first_name": "John",
            "id": "u_12345",
            "last_name": "Doe"
          },
          "rejection_reason": "The action run was rejected because it was no longer needed"
        },
        "scheduled_at": "2023-04-01T12:00:00Z",
        "started_at": "2023-04-01T12:00:00Z",
        "type": "distribution"
      },
      "blueprint": {
        "category": "Onboarding",
        "description": "Process for onboarding new customers",
        "id": "bp_12345",
        "name": "Customer Onboarding",
        "promoted_data_order": [
          "Promoted Field Name"
        ],
        "short_description": "Onboard customers",
        "version_id": "bpv_12345"
      },
      "child_trackers": [
        {
          "action_run_id": "ar_child_123",
          "component_key": "action_1",
          "name": "Client Onboarding",
          "section_name": "Section 1",
          "status": "in_progress",
          "status_tracker": [
            {
              "ReviewTask": {},
              "SubmitTask": {}
            }
          ]
        }
      ],
      "client_organisation_id": "co_xyz",
      "components": [
        {
          "action_run_id": "ar_12345",
          "blueprint_category": "onboarding",
          "blueprint_component_id": "bp_c_12345",
          "cancelled_at": "2023-04-01T12:00:00Z",
          "cancelled_by": "test@example.com",
          "cancelled_reason": "Test reason",
          "component_key": "customer-details",
          "component_name": "Customer Details",
          "component_type": "form",
          "id": "ar_c_12345",
          "resolved_form_id": "string",
          "result_data": {
            "key": {}
          },
          "skipped": false,
          "status": "todo",
          "submission_restricted": false,
          "tags": [
            "esign"
          ],
          "tasks": [
            {
              "action_run_id": {},
              "assigned": {},
              "can_begin": {},
              "cancellation_reason": {},
              "cancelled_at": {},
              "cancelled_by": {},
              "completed_at": {},
              "completed_by": {},
              "component_key": {},
              "created_at": {},
              "cron_job_queued": {},
              "data": {},
              "deadline": {},
              "environment": {},
              "id": {},
              "logs": {},
              "name": {},
              "next_step_date": {},
              "note": {},
              "permitted_roles": {},
              "rejected": {},
              "scheduled_at": {},
              "section_name": {},
              "sla_duration": {},
              "started_at": {},
              "status": {},
              "tags": {},
              "task_type": {},
              "total_time_waiting_ms": {},
              "unblocked_at": {},
              "waiting_for": {},
              "who_waiting_on": {}
            }
          ],
          "tenant_id": "t_67890"
        }
      ],
      "custom_status": "Draft",
      "data": {
        "key": {}
      },
      "environment": "production",
      "generator_field_path": "accounts",
      "id": "ar_12345",
      "locked_at": "2026-01-15T10:30:00Z",
      "name": "My Action Run",
      "parent_component_id": "arc_12345",
      "parent_run_id": "ar_parent_12345",
      "recommended": true,
      "run_context": "<p>Hello</p>",
      "slug": "12345",
      "started_by": {
        "first_name": "John",
        "id": "u_12345",
        "last_name": "Doe"
      },
      "state_model": {
        "$schema": "https://example.com/schemas/ActionRunStateModelOutput.json",
        "created_at": "2026-01-15T10:30:00Z",
        "current_state": "draft",
        "current_state_display_color": "Neutral",
        "current_state_display_name": "Draft",
        "current_state_is_required": false,
        "data": {
          "key": {}
        },
        "id": "string",
        "schema_id": "string",
        "tracker": [
          {
            "display_color": "Neutral",
            "display_name": "Draft",
            "entered_at": "2026-01-15T10:30:00Z",
            "entered_by": {
              "email": {},
              "first_name": {},
              "id": {},
              "last_name": {},
              "middle_name": {}
            },
            "input": {
              "key": {}
            },
            "input_schema": [
              {}
            ],
            "is_final": false,
            "is_required": true,
            "state_name": "draft",
            "status": "completed",
            "transition_key": "approve"
          }
        ],
        "updated_at": "2026-01-15T10:30:00Z"
      },
      "status": "in_progress",
      "status_tracker": [
        {
          "ReviewTask": {
            "action_run_id": "ar_12345",
            "assigned": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "can_begin": true,
            "cancellation_reason": "Task was cancelled because it was no longer needed",
            "cancelled_at": "2023-04-01T12:00:00Z",
            "cancelled_by": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "completed_at": "2023-04-01T12:00:00Z",
            "completed_by": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "component_key": "component_12345",
            "created_at": "2023-04-01T12:00:00Z",
            "cron_job_queued": "job_123",
            "data": {
              "financial_account": {
                "account_number": "1234567890",
                "data_provider_name": "Bank of America"
              }
            },
            "deadline": "2023-04-01T12:00:00Z",
            "environment": "merceradvisors-uat",
            "id": "task_12345",
            "logs": [
              {}
            ],
            "name": "Submit: Customer Details",
            "next_step_date": "2023-04-01T12:00:00Z",
            "note": "We're still waiting on Bob to submit the details",
            "permitted_roles": [
              "admin",
              "user"
            ],
            "rejected": {
              "reason": {},
              "rejected_at": {},
              "rejected_by": {}
            },
            "scheduled_at": "2023-04-01T12:00:00Z",
            "section_name": "string",
            "sla_duration": {
              "time": 3600,
              "unit": "minutes"
            },
            "started_at": "2023-04-01T12:00:00Z",
            "status": "todo",
            "tags": [
              "urgent",
              "compliance"
            ],
            "task_type": "submission",
            "total_time_waiting_ms": 3600000,
            "unblocked_at": "2023-04-01T12:00:00Z",
            "waiting_for": "Team Member",
            "who_waiting_on": "Client"
          },
          "SubmitTask": {
            "action_run_id": "ar_12345",
            "assigned": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "can_begin": true,
            "cancellation_reason": "Task was cancelled because it was no longer needed",
            "cancelled_at": "2023-04-01T12:00:00Z",
            "cancelled_by": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "completed_at": "2023-04-01T12:00:00Z",
            "completed_by": {
              "first_name": "John",
              "id": "a_12345",
              "last_name": "Doe"
            },
            "component_key": "component_12345",
            "created_at": "2023-04-01T12:00:00Z",
            "cron_job_queued": "job_123",
            "data": {
              "financial_account": {
                "account_number": "1234567890",
                "data_provider_name": "Bank of America"
              }
            },
            "deadline": "2023-04-01T12:00:00Z",
            "environment": "merceradvisors-uat",
            "id": "task_12345",
            "logs": [
              {}
            ],
            "name": "Submit: Customer Details",
            "next_step_date": "2023-04-01T12:00:00Z",
            "note": "We're still waiting on Bob to submit the details",
            "permitted_roles": [
              "admin",
              "user"
            ],
            "rejected": {
              "reason": {},
              "rejected_at": {},
              "rejected_by": {}
            },
            "scheduled_at": "2023-04-01T12:00:00Z",
            "section_name": "string",
            "sla_duration": {
              "time": 3600,
              "unit": "minutes"
            },
            "started_at": "2023-04-01T12:00:00Z",
            "status": "todo",
            "tags": [
              "urgent",
              "compliance"
            ],
            "task_type": "submission",
            "total_time_waiting_ms": 3600000,
            "unblocked_at": "2023-04-01T12:00:00Z",
            "waiting_for": "Team Member",
            "who_waiting_on": "Client"
          }
        }
      ],
      "tasks_data": [
        {
          "data": {
            "key": {
              "label": {},
              "value": {}
            }
          },
          "id": "t_12345",
          "name": "Customer Details"
        }
      ],
      "tenant_id": "t_67890",
      "type": "action_component_data"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/unqork/action-runs/{unqork_id} - unqork-action-run-upsert

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/unqork/action-runs/{unqork_id}/comments - unqork-action-run-comments-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/GetUnqorkActionRunCommentsOutputBody.json",
      "comments": [
        {
          "created_at": "2021-01-01T00:00:00Z",
          "created_by": {
            "first_name": "John",
            "id": "a_12345",
            "last_name": "Doe"
          },
          "entity_id": "ar_456",
          "entity_type": "action_run",
          "environment": "staging",
          "external_id": "ext_123",
          "id": "123",
          "tagged_users": [
            {
              "first_name": "John",
              "id": "ag_123",
              "last_name": "Doe"
            },
            {
              "first_name": "Jane",
              "id": "ag_456",
              "last_name": "Smith"
            }
          ],
          "text": "This is a comment",
          "updated_at": "2021-01-01T00:00:00Z"
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/unqork/comments - unqork-comment-create

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/unqork/comments/{unqork_id} - unqork-comment-upsert-as-avantos

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/unqork/notifications/{unqork_id} - unqork-notification-upsert

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/unqork/tasks/{unqork_id} - unqork-task-upsert

- Status: `multi`

```json
[
  {
    "title": "No Content",
    "status": "204",
    "body": {}
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/views/import - custom-views-import

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/CustomViewsImportOutputBody.json",
      "view_id": "string"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### POST /api/v1/{tenant_id}/vpoc-all-clients/search - vpoc-all-clients-search

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/AllClientsSearchOutputBody.json",
      "clients": [
        {
          "client_id": "string",
          "client_organisation_external_id": "string",
          "client_organisation_name": "string",
          "client_organisation_relationship_status": "string",
          "client_organisation_type": "string",
          "client_organisation_wealth_advisor_name": "string",
          "external_id": "string",
          "name": "string",
          "organisation_id": "string",
          "preferred_email": "string",
          "preferred_phone": "string",
          "tenant_id": "string"
        }
      ],
      "pagination": {
        "page": 1,
        "page_size": 1,
        "total_pages": 1,
        "total_records": 1
      }
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/whoami - whoami

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/WhoAmIOutputBody.json",
      "additional_attributes": {
        "key": "string"
      },
      "agent_id": "123",
      "avantos_role": "SuperAdmin",
      "email": "john.doe@example.com",
      "environment": "uat",
      "external_id": "1234567890",
      "feature_list": [
        "string"
      ],
      "first_name": "John",
      "idp_role": "SuperAdmin",
      "last_name": "Doe",
      "login_role": "advisor",
      "role": "AvantosSuperAdmin",
      "tenant_id": "123"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/widgets - widget-list

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/WidgetListOutputBody.json",
      "widgets": [
        {
          "$schema": "https://example.com/schemas/WidgetOutput.json",
          "config": {
            "key": {}
          },
          "createdAt": "2024-01-01T00:00:00Z",
          "height": 2,
          "id": "wdg_123",
          "isVisible": true,
          "page": "dashboard",
          "updatedAt": "2024-01-01T00:00:00Z",
          "widgetDefinitionId": "wdef_123",
          "width": 2,
          "x": 0,
          "y": 0
        }
      ]
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PUT /api/v1/{tenant_id}/widgets/positions - widget-batch-update-positions

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/WidgetBatchUpdatePositionsOutputBody.json"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### GET /api/v1/{tenant_id}/widgets/{widget_id} - widget-get

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/WidgetOutput.json",
      "config": {
        "key": {}
      },
      "createdAt": "2024-01-01T00:00:00Z",
      "height": 2,
      "id": "wdg_123",
      "isVisible": true,
      "page": "dashboard",
      "updatedAt": "2024-01-01T00:00:00Z",
      "widgetDefinitionId": "wdef_123",
      "width": 2,
      "x": 0,
      "y": 0
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

### PATCH /api/v1/{tenant_id}/widgets/{widget_id} - widget-update

- Status: `multi`

```json
[
  {
    "title": "OK",
    "status": "200",
    "body": {
      "$schema": "https://example.com/schemas/WidgetUpdateOutputBody.json"
    }
  },
  {
    "title": "Error",
    "status": "default",
    "body": {
      "$schema": "https://example.com/schemas/ErrorModel.json",
      "detail": "Property foo is required but is missing.",
      "errors": [
        {
          "location": "string",
          "message": "string",
          "value": {}
        }
      ],
      "instance": "https://example.com/error-log/abc123",
      "status": 400,
      "title": "Bad Request",
      "type": "https://example.com/errors/example"
    }
  }
]
```

