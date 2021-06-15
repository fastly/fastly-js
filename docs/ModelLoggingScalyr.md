# FastlyApi.ModelLoggingScalyr

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 
**name** | **String** | The name for the real-time logging configuration. | [optional] 
**placement** | [**LoggingPlacement**](LoggingPlacement.md) |  | [optional] 
**format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md) |  | [optional] 
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**region** | **String** | The region that log data will be sent to. | [optional] [default to &#39;US&#39;]
**token** | **String** | The token to use for authentication ([https://www.scalyr.com/keys](https://www.scalyr.com/keys)). | [optional] 
**project_id** | **String** | The name of the logfile within Scalyr. | [optional] [default to &#39;logplex&#39;]



## Enum: RegionEnum


* `US` (value: `"US"`)

* `EU` (value: `"EU"`)




