# Fastly.LoggingHoneycombResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name for the real-time logging configuration. | [optional] 
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.  | [optional]  [one of: "none", "waf_debug"]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.   | [optional]  [one of: 1, 2][defaults to FormatVersionEnum.v2]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
**format** | **Object** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest. | [optional] 
**dataset** | **String** | The Honeycomb Dataset you want to log to. | [optional] 
**token** | **String** | The Write Key from the Account page of your Honeycomb account. | [optional] 
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 



 

### `placement`

* `none` (value: `"none"`)

* `waf_debug` (value: `"waf_debug"`)





 

### `format_version`

* `v1` (value: `1`)

* `v2` (value: `2`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
