# FastlyApi.ServiceResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**comment** | **String** | A freeform descriptive note. | [optional] 
**name** | **String** | The name of the service. | [optional] 
**customer_id** | **String** | Alphanumeric string identifying the customer. | [optional] [readonly] 
**type** | **String** | The type of this service. | [optional] 
**id** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**publish_key** | **String** | Unused at this time. | [optional] 
**paused** | **Boolean** | Whether the service is paused. Services are paused due to a lack of traffic for an extended period of time. Services are resumed either when a draft version is activated or a locked version is cloned and reactivated. | [optional] 
**version** | **Number** | Current [version](/reference/api/services/version/) of the service. | [optional] 
**versions** | [**[SchemasVersionResponse]**](SchemasVersionResponse.md) | A list of [versions](/reference/api/services/version/) associated with the service. | [optional] 



## Enum: TypeEnum


* `vcl` (value: `"vcl"`)

* `wasm` (value: `"wasm"`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
