# FastlyApi.LoggingDatadog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name for the real-time logging configuration. | [optional] 
**placement** | [**LoggingPlacement**](LoggingPlacement.md) |  | [optional] 
**format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md) |  | [optional] 
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
**format** | **Object** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Datadog can ingest.  | [optional] 
**region** | **String** | The region that log data will be sent to. | [optional] [default to &#39;US&#39;]
**token** | **String** | The API key from your Datadog account. Required. | [optional] 



## Enum: RegionEnum


* `US` (value: `"US"`)

* `EU` (value: `"EU"`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
