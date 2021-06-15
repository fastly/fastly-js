# FastlyApi.ModelLoggingHttpsAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **String** | The URL to send logs to. Must use HTTPS. Required. | [optional] 
**request_max_entries** | **Number** | The maximum number of logs sent in one request. Defaults &#x60;0&#x60; (no limit). | [optional] [default to 0]
**request_max_bytes** | **Number** | The maximum number of bytes sent in one request. Defaults &#x60;0&#x60; (no limit). | [optional] [default to 0]
**content_type** | **String** | Content type of the header sent with the request. | [optional] [default to &#39;null&#39;]
**header_name** | **String** | Name of the custom header sent with the request. | [optional] [default to &#39;null&#39;]
**message_type** | [**LoggingMessageType**](LoggingMessageType.md) |  | [optional] 
**header_value** | **String** | Value of the custom header sent with the request. | [optional] [default to &#39;null&#39;]
**method** | **String** | HTTP method used for request. | [optional] [default to &#39;POST&#39;]
**json_format** | **String** | Enforces valid JSON formatting for log entries. | [optional] 
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]



## Enum: MethodEnum


* `POST` (value: `"POST"`)

* `PUT` (value: `"PUT"`)





## Enum: JsonFormatEnum


* `0` (value: `"0"`)

* `1` (value: `"1"`)

* `2` (value: `"2"`)




