# Fastly.SchemasSnippetResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name for the snippet. | [optional] 
**dynamic** | **String** | Sets the snippet version. | [optional]  [one of: "0", "1"]
**type** | **String** | The location in generated VCL where the snippet should be placed. | [optional]  [one of: "init", "recv", "hash", "hit", "miss", "pass", "fetch", "error", "deliver", "log", "none"]
**content** | **String** | The VCL code that specifies exactly what the snippet does. | [optional] 
**priority** | **String** | Numeric string value. Priority determines execution order. Lower numbers execute first. | [optional]  [defaults to '100']
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**id** | **String** | Alphanumeric string identifying a VCL Snippet. | [optional] [readonly] 


[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
