# Header.ModelHeader

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serviceId** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 
**action** | **String** | Accepts a string value. | [optional] 
**cacheCondition** | **String** | Name of the cache condition controlling when this configuration applies. | [optional] 
**dst** | **String** | Header to set. | [optional] 
**ignoreIfSet** | **Number** | Don&#39;t add the header if it is added already. (Only applies to &#39;set&#39; action). | [optional] 
**name** | **String** | A handle to refer to this Header object. | [optional] 
**priority** | **Number** | Priority determines execution order. Lower numbers execute first. | [optional] [default to 100]
**regex** | **String** | Regular expression to use. Only applies to &#x60;regex&#x60; and &#x60;regex_repeat&#x60; actions. | [optional] 
**requestCondition** | **String** | Condition which, if met, will select this configuration during a request. Optional. | [optional] 
**responseCondition** | **String** | Optional name of a response condition to apply. | [optional] 
**src** | **String** | Variable to be used as a source for the header content. Does not apply to &#x60;delete&#x60; action. | [optional] 
**substitution** | **String** | Value to substitute in place of regular expression. Only applies to &#x60;regex&#x60; and &#x60;regex_repeat&#x60; actions. | [optional] 
**type** | **String** | Accepts a string value. | [optional] 



## Enum: ActionEnum


* `set` (value: `"set"`)

* `append` (value: `"append"`)

* `delete` (value: `"delete"`)

* `regex` (value: `"regex"`)

* `regex_repeat` (value: `"regex_repeat"`)





## Enum: TypeEnum


* `request` (value: `"request"`)

* `fetch` (value: `"fetch"`)

* `cache` (value: `"cache"`)

* `response` (value: `"response"`)




