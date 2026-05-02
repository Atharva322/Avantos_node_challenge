'''
## Evaluation Criteria

We will be particularly interested in:

1. Code Organization
    - Clear separation of concerns
    - Thoughtful component hierarchy and composition
2. Extensibility
    - **Does the project have good tests?**
    - Reusable and composable React components
3. Documentation
    - How do I run this locally?
    - How do I extend with new data sources?
4. Code Quality
    - Clean, readable code
    - Reasonable, readable var names
    - Appropriate use of modern React practice


/api/v1/{tenant_id}/actions/blueprints/{action_blueprint_id}/{blueprint_version_id}/graph
action blueprint graph-get 
action_blueprint_id*
:
bp_456
blueprint_version_id*
:
bpv_123
tenant_id*
: 123 

Response example:
Headers
ETag
string
ETag for optimistic concurrency

Body

application/json

application/json
responses
/
200
/
version_number
$schema
string<uri>
A URL to the JSON Schema for this object.

Example:
https://example.com/schemas/ActionBlueprintGraphDescription.json
blueprint_id
string
required
Unique identifier for the action blueprint

Example:
bp_12345
blueprint_name
string
required
The name of the action blueprint

Example:
Customer Onboarding
branches
array[object] or null
required
List of branches (decision points) in this action blueprint

$schema
string<uri>
A URL to the JSON Schema for this object.

Example:
https://example.com/schemas/ActionBranchDescription.json
condition
dictionary[string, any]
required
The condition that must be met for this branch to be taken

Example:
{"left":{"object":"client","property":"name","type":"property"},"operator":"==","right":{"type":"literal","value":"John"},"type":"binary"}
created_at
string<date-time>
required
The date/time the branch was created

Example:
2024-10-29T11:22:33.027873-03:00
created_by
string
required
The responsible for creating the branch

Example:
test@avantos.ai
description
string
required
Detailed description of the branch

Example:
Description for example branch
id
string
required
Unique identifier for the branch

Example:
b_01jbcagb1wfy2v0g1xcq53y4rn
name
string
required
Human-readable name of the branch

Example:
Dummy Branch
tenant_id
string
required
Identifier of the tenant this branch belongs to

Example:
123
updated_at
string<date-time>
required
The last time the branch was updated

Example:
2024-10-29T11:22:33.02018-03:00
component_task_priorities
dictionary[string, string]
Mapping of component keys to task priorities (low, medium, high). Only applicable to form components.

Example:
{"form-1":"high","form-2":"low"}
custom_javascript_function_id
string
The ID of the custom javascript function to use for the action blueprint version

Example:
cjsf_123
custom_status_configuration
any
Configuration for custom action run statuses

edges
array[object] or null
required
source
string
required
The source node ID (The id in this case is the component key)

target
string
required
The target node ID (The id in this case is the component key)

forms
array[object] or null
required
List of forms associated with this action blueprint

$schema
string<uri>
A URL to the JSON Schema for this object.

Example:
https://example.com/schemas/ActionFormDescription.json
created_at
string<date-time>
required
The date and time the form was created

Example:
2024-01-01T00:00:00Z
created_by
string
required
The email of the user who created the form

Example:
user@email.com
custom_javascript
string
Custom javascript to run on the form

custom_javascript_execute_on_load
boolean
required
When false, form-level custom JS does not run on initial load

custom_javascript_functions
string
Custom javascript functions to include in the form run

custom_javascript_triggering_fields
array[string] or null
The fields that will trigger the custom javascript

default_input_mapping
dictionary[string, any]
Default data-layer input mapping rules (dl_enum_* and dl_prefill_*) to snapshot into task nodes on form selection

default_output_mapping
dictionary[string, any]
Default data-layer output mapping rules (dl_writeback_v1) to snapshot into task nodes on form selection

description
string
required
The form description

Example:
This is my form
dynamic_field_config
dictionary[string, object]
required
embedded_js
array[object] or null
JS entries for embedded forms, each scoped to a prefix

field_schema
object
required
The form schema, using jsonforms.io syntax

id
string
required
The form ID

Example:
f_456
imported_js_function_config
array or null
JSON config for imported global JS functions

is_reusable
boolean
required
Whether the form is reusable

name
string
required
The form name

Example:
My Form
ui_schema
object
The form UI schema

updated_at
string<date-time>
required
The date and time the form was last updated

Example:
2024-01-01T00:00:00Z
nodes
array[object] or null
required
data
object
required
The data for the node

hidden
boolean
required
Whether the node is hidden

Example:
false
id
string
required
The id for the node (The id in this case is the component key)

position
object
required
The position of the node

type
string
required
The type of the node

Allowed values:
form
branch
trigger
configuration
forEach
action
statusGate
calculator
dynamicTask
promoted_data_order
array[string] or null
The order of data promotion for the action blueprint

state_model_schema
object
Optional state machine schema for tracking state

data_schema
any
Optional JSON Schema for additional data fields

description
string
Description of the state model schema

id
string
required
Unique identifier for the schema

initial_state
string
required
The initial state for new action runs

Example:
draft
name
string
required
Name of the state model schema

Example:
LoanApplication
states
array[object] or null
required
Array of state definitions

transitions
array[object] or null
required
Array of transition definitions

status
string
required
The status of the blueprint version

Allowed values:
draft
published
historical
archived
Example:
draft
tenant_id
string
required
Identifier of the tenant this blueprint belongs to

Example:
t_67890
triggers
array[object] or null
required
List of trigger endpoints associated with this action blueprint

$schema
string<uri>
A URL to the JSON Schema for this object.

Example:
https://example.com/schemas/TriggerEndpointDescription.json
created_at
string<date-time>
required
The creation time of the trigger endpoint

Example:
2021-01-01T00:00:00Z
custom_headers_template
dictionary[string, string]
required
The custom headers template for the endpoint

Example:
{"userId":"{{.user_id}}"}
custom_headers_template_variables
array[string] or null
required
The variables in the custom headers template

Example:
["user_id"]
error_message_template
array[object] or null
Error message templates for pattern matching

id
string
required
Example:
te_213j32
name
string
required
The name of the trigger endpoint

Example:
Send Email
output_mapping
dictionary[string, string]
required
The output mapping for the endpoint

Example:
{"id":".data.value.id"}
path_template
string
required
The path of the endpoint; must start with a /

Example:
/api/v1/customer/{{.customer_id}}/do/something/
path_template_variables
array[string] or null
required
The variables in the path template

Example:
["customer_id"]
payload_template
any
required
The payload template for the endpoint

Example:
{"subject":"{{.subject}}","to":"{{.to}}"}
payload_template_variables
array[string] or null
required
The variables in the payload template

Example:
["to","subject"]
payload_type
string
required
The payload type for the endpoint

Allowed values:
json
multipart/form-data
application/x-www-form-urlencoded
Example:
json
query_parameter_template
dictionary[string, string]
required
The query parameter template for the endpoint

Example:
{"user_id":"{{.user_id}}"}
query_parameter_template_variables
array[string] or null
required
The variables in the query parameter template

Example:
["user_id"]
request_method
string
required
The HTTP request method for the endpoint

Allowed values:
POST
PUT
GET
DELETE
Example:
POST
timeout_seconds
integer<int64>
The timeout in seconds for requests to the trigger service

Example:
10
trigger_service_id
string
required
The trigger service ID

Example:
ts_213j32
updated_at
string<date-time>
required
The last update time of the trigger endpoint

Example:
2021-01-01T00:00:00Z
version_id
string
required
Unique identifier for the action blueprint version

Example:
bpv_123
version_notes
string
required
The version notes of the blueprint

Example:
Initial draft
version_number
string
required
The version number of the blueprint

Example:
v1.0.0
lets go architecture wise 
generate a list ofexactly  what APIs/components you need from me (names + schema/params)

default_input_mapping
dictionary[string, any]
Default data-layer input mapping rules (dl_enum_* and dl_prefill_*) to snapshot into task nodes on form selection

{
  "column": "blueprint_category",
  "record_id": {
    "component_key": "string",
    "is_metadata": true,
    "output_key": "string",
    "type": "string"
  },
  "table": "action_runs",
  "validation": {
    "component_key": "string",
    "is_metadata": true,
    "output_key": "string",
    "type": "string"
  }
}
explicitly ask me for any missing or api  component/api you need dont assume



Global data search value example?
{
  "$schema": "https://example.com/schemas/GlobalSearchOutputBody.json",
  "results": [
    {
      "entity_type": "client",
      "error": "string",
      "items": [
        {
          "display_fields": {
            "property1": null,
            "property2": null
          },
          "display_text": "John Smith",
          "highlighted_text": "<mark>John</mark> <mark>Smith</mark>",
          "id": "client_abc123",
          "score": 0.85,
          "updated_at": "2024-01-15T10:30:00Z"
        }
      ],
      "pagination": {
        "page": 0,
        "page_size": 0,
        "total_pages": 0,
        "total_records": 0
      }
    }
  ]

  go through current provided and for missing data make sure to ask from me for more api/ components
'''