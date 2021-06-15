# FastlyApi.ModelWafExclusionsAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | **String** | A conditional expression in VCL used to determine if the condition is met. | [optional] 
**exclusion_type** | **String** | The type of exclusion. | [optional] 
**logging** | **Boolean** | Whether to generate a log upon matching. | [optional] [default to true]
**name** | **String** | Name of the exclusion. | [optional] 
**number** | **Number** | A numeric ID identifying a WAF exclusion. | [optional] 
**variable** | **String** | The variable to exclude. An optional selector can be specified after the variable separated by a colon (&#x60;:&#x60;) to restrict the variable to a particular parameter. Required for &#x60;exclusion_type&#x3D;variable&#x60;. | [optional] 



## Enum: ExclusionTypeEnum


* `rule` (value: `"rule"`)

* `variable` (value: `"variable"`)

* `waf` (value: `"waf"`)





## Enum: VariableEnum


* `cookies` (value: `"req.cookies"`)

* `headers` (value: `"req.headers"`)

* `post` (value: `"req.post"`)

* `post_filename` (value: `"req.post_filename"`)

* `qs` (value: `"req.qs"`)




