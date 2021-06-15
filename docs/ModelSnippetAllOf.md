# FastlyApi.ModelSnippetAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] 
**version** | **String** | Numeric string value identifying a service version. | [optional] 
**name** | **String** | The name for the snippet. | [optional] 
**id** | **String** | Alphanumeric string identifying a VCL Snippet. | [optional] [readonly] 
**dynamic** | **String** | Sets the snippet version to regular (&#x60;\&quot;0\&quot;&#x60;) or dynamic (&#x60;\&quot;1\&quot;&#x60;). | [optional] 
**type** | **String** | The location in generated VCL where the snippet should be placed. | [optional] 
**content** | **String** | The VCL code that specifies exactly what the snippet does. | [optional] 
**priority** | **String** | Numeric string value. Priority determines execution order. Lower numbers execute first. | [optional] [default to &#39;100&#39;]



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




