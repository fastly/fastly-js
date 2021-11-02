# Fastly.LoggingHoneycomb

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name for the real-time logging configuration. | [optional] 
**placement** | [**LoggingPlacement**](LoggingPlacement.md) |  | [optional] 
**format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md) |  | [optional] 
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
**format** | **Object** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest. | [optional] 
**dataset** | **String** | The Honeycomb Dataset you want to log to. | [optional] 
**token** | **String** | The Write Key from the Account page of your Honeycomb account. | [optional] 



[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
