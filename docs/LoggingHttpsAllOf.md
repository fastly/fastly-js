# Fastly.LoggingHttpsAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **String** | The URL to send logs to. Must use HTTPS. Required. | [optional] 
**request_max_entries** | **Number** | The maximum number of logs sent in one request. Defaults `0` (no limit). | [optional] [defaults to 0]
**request_max_bytes** | **Number** | The maximum number of bytes sent in one request. Defaults `0` (no limit). | [optional] [defaults to 0]
**content_type** | **String** | Content type of the header sent with the request. | [optional] [defaults to 'null']
**header_name** | **String** | Name of the custom header sent with the request. | [optional] [defaults to 'null']
**message_type** | [**LoggingMessageType**](LoggingMessageType.md) |  | [optional] 
**header_value** | **String** | Value of the custom header sent with the request. | [optional] [defaults to 'null']
**method** | **String** | HTTP method used for request. | [optional]  [one of: "POST", "PUT"][defaults to 'POST']
**json_format** | **String** | Enforces valid JSON formatting for log entries. | [optional]  [one of: "0", "1", "2"]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [defaults to '%h %l %u %t "%r" %&gt;s %b']



 

### `method`

* `POST` (value: `"POST"`)

* `PUT` (value: `"PUT"`)





 

### `json_format`

* `disabled` (value: `"0"`)

* `json_array` (value: `"1"`)

* `newline_delimited_json` (value: `"2"`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
