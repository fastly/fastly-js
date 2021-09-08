# Fastly.LoggingLogentries

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md) |  | [optional] 
**name** | **String** | The name for the real-time logging configuration. | [optional] 
**placement** | [**LoggingPlacement**](LoggingPlacement.md) |  | [optional] 
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
**port** | **Number** | The port number. | [optional] [default to 20000]
**region** | **String** | The region to which to stream logs. | [optional] 
**token** | **String** | Use token based authentication ([https://logentries.com/doc/input-token/](https://logentries.com/doc/input-token/)). | [optional] 
**use_tls** | [**LoggingUseTls**](LoggingUseTls.md) |  | [optional] 



## Enum: RegionEnum


* `US` (value: `"US"`)

* `US-2` (value: `"US-2"`)

* `US-3` (value: `"US-3"`)

* `EU` (value: `"EU"`)

* `CA` (value: `"CA"`)

* `AU` (value: `"AU"`)

* `AP` (value: `"AP"`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
