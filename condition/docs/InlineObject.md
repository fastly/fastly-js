# Condition.InlineObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serviceId** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 
**comment** | **String** | A freeform descriptive note. | [optional] [default to &#39;&#39;]
**name** | **String** | Name of the condition. Required. | [optional] 
**priority** | **Number** | Priority determines execution order. Lower numbers execute first. | [optional] [default to 100]
**statement** | **String** | A conditional expression in VCL used to determine if the condition is met. | [optional] 
**type** | **String** | Type of the condition. Required. | [optional] 



## Enum: TypeEnum


* `request` (value: `"request"`)

* `cache` (value: `"cache"`)

* `response` (value: `"response"`)

* `prefetch` (value: `"prefetch"`)




