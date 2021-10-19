# Fastly.LoggingHoneycombResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **Object** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest. | [optional] 
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in &#x60;vcl_log&#x60; if &#x60;format_version&#x60; is set to &#x60;2&#x60; and in &#x60;vcl_deliver&#x60; if &#x60;format_version&#x60; is set to &#x60;1&#x60;.   | [optional] [default to FormatVersionEnum.v2]
**name** | **String** | The name for the real-time logging configuration. | [optional] 
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with &#x60;format_version&#x60; of 2 are placed in &#x60;vcl_log&#x60; and those with &#x60;format_version&#x60; of 1 are placed in &#x60;vcl_deliver&#x60;.  | [optional] 
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
**dataset** | **String** | The Honeycomb Dataset you want to log to. | [optional] 
**token** | **String** | The Write Key from the Account page of your Honeycomb account. | [optional] 
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 



## Enum: FormatVersionEnum


* `v1` (value: `1`)

* `v2` (value: `2`)





## Enum: PlacementEnum


* `none` (value: `"none"`)

* `waf_debug` (value: `"waf_debug"`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
