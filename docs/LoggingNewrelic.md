# Fastly.LoggingNewrelic

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name for the real-time logging configuration. | [optional] 
**placement** | [**LoggingPlacement**](LoggingPlacement.md) |  | [optional] 
**format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md) |  | [optional] 
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
**format** | **Object** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that New Relic Logs can ingest. | [optional] 
**token** | **String** | The Insert API key from the Account page of your New Relic account. Required. | [optional] 
**region** | **String** | The region to which to stream logs. | [optional] [default to &#39;US&#39;]



## Enum: RegionEnum


* `US` (value: `"US"`)

* `EU` (value: `"EU"`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
