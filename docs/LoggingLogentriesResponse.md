# Fastly.LoggingLogentriesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name for the real-time logging configuration. | [optional] 
**placement** | [**LoggingPlacement**](LoggingPlacement.md) |  | [optional] 
**format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md) |  | [optional] 
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**port** | **Number** | The port number. | [optional] [default to 20000]
**token** | **String** | Use token based authentication ([https://logentries.com/doc/input-token/](https://logentries.com/doc/input-token/)). | [optional] 
**use_tls** | [**LoggingUseTls**](LoggingUseTls.md) |  | [optional] 
**region** | **String** | The region to which to stream logs. | [optional] 
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 



## Enum: RegionEnum


* `US` (value: `"US"`)

* `US-2` (value: `"US-2"`)

* `US-3` (value: `"US-3"`)

* `EU` (value: `"EU"`)

* `CA` (value: `"CA"`)

* `AU` (value: `"AU"`)

* `AP` (value: `"AP"`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
