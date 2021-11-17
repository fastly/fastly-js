# Fastly.ServiceListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**comment** | **String** | A freeform descriptive note. | [optional] 
**name** | **String** | The name of the service. | [optional] 
**customer_id** | **String** | Alphanumeric string identifying the customer. | [optional] [readonly] 
**type** | **String** | The type of this service. | [optional]  [one of: "vcl", "wasm"]
**id** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Current [version](/reference/api/services/version/) of the service. | [optional] 
**versions** | [**[SchemasVersionResponse]**](SchemasVersionResponse.md) | A list of [versions](/reference/api/services/version/) associated with the service. | [optional] 


[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
