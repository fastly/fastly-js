# Fastly.SchemasSnippetResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **String** | The VCL code that specifies exactly what the snippet does. | [optional] 
**dynamic** | **String** | Sets the snippet version. | [optional] 
**name** | **String** | The name for the snippet. | [optional] 
**priority** | **String** | Numeric string value. Priority determines execution order. Lower numbers execute first. | [optional] [default to &#39;100&#39;]
**type** | **String** | The location in generated VCL where the snippet should be placed. | [optional] 
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**id** | **String** | Alphanumeric string identifying a VCL Snippet. | [optional] [readonly] 



## Enum: DynamicEnum


* `0` (value: `"0"`)

* `1` (value: `"1"`)





## Enum: TypeEnum


* `init` (value: `"init"`)

* `recv` (value: `"recv"`)

* `hash` (value: `"hash"`)

* `hit` (value: `"hit"`)

* `miss` (value: `"miss"`)

* `pass` (value: `"pass"`)

* `fetch` (value: `"fetch"`)

* `error` (value: `"error"`)

* `deliver` (value: `"deliver"`)

* `log` (value: `"log"`)

* `none` (value: `"none"`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)