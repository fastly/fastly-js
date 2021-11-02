# Fastly.HeaderResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | Accepts a string value. | [optional] 
**cache_condition** | **String** | Name of the cache condition controlling when this configuration applies. | [optional] 
**dst** | **String** | Header to set. | [optional] 
**ignore_if_set** | **Number** | Don&#39;t add the header if it is added already. Only applies to &#39;set&#39; action. | [optional] 
**name** | **String** | A handle to refer to this Header object. | [optional] 
**priority** | **Number** | Priority determines execution order. Lower numbers execute first. | [optional] [default to 100]
**regex** | **String** | Regular expression to use. Only applies to &#x60;regex&#x60; and &#x60;regex_repeat&#x60; actions. | [optional] 
**request_condition** | **String** | Condition which, if met, will select this configuration during a request. Optional. | [optional] 
**response_condition** | **String** |  | [optional] 
**src** | **String** | Variable to be used as a source for the header content. Does not apply to &#x60;delete&#x60; action. | [optional] 
**substitution** | **String** | Value to substitute in place of regular expression. Only applies to &#x60;regex&#x60; and &#x60;regex_repeat&#x60; actions. | [optional] 
**type** | **String** | Accepts a string value. | [optional] 
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 



## Enum: ActionEnum


* `set` (value: `"set"`)

* `append` (value: `"append"`)

* `delete` (value: `"delete"`)

* `regex` (value: `"regex"`)

* `regex_repeat` (value: `"regex_repeat"`)





## Enum: TypeEnum


* `request` (value: `"request"`)

* `cache` (value: `"cache"`)

* `response` (value: `"response"`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
