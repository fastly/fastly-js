# Fastly.LoggingScalyr

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in &#x60;vcl_log&#x60; if &#x60;format_version&#x60; is set to &#x60;2&#x60; and in &#x60;vcl_deliver&#x60; if &#x60;format_version&#x60; is set to &#x60;1&#x60;.   | [optional] [default to FormatVersionEnum.v2]
**name** | **String** | The name for the real-time logging configuration. | [optional] 
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with &#x60;format_version&#x60; of 2 are placed in &#x60;vcl_log&#x60; and those with &#x60;format_version&#x60; of 1 are placed in &#x60;vcl_deliver&#x60;.  | [optional] 
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
**project_id** | **String** | The name of the logfile within Scalyr. | [optional] [default to &#39;logplex&#39;]
**region** | **String** | The region that log data will be sent to. | [optional] [default to &#39;US&#39;]
**token** | **String** | The token to use for authentication ([https://www.scalyr.com/keys](https://www.scalyr.com/keys)). | [optional] 



## Enum: FormatVersionEnum


* `v1` (value: `1`)

* `v2` (value: `2`)





## Enum: PlacementEnum


* `none` (value: `"none"`)

* `waf_debug` (value: `"waf_debug"`)





## Enum: RegionEnum


* `US` (value: `"US"`)

* `EU` (value: `"EU"`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
