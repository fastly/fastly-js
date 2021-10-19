# Fastly.LoggingHttps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md) |  | [optional] 
**name** | **String** | The name for the real-time logging configuration. | [optional] 
**placement** | [**LoggingPlacement**](LoggingPlacement.md) |  | [optional] 
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
**tls_ca_cert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_cert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_key** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_hostname** | **String** | The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
**request_max_bytes** | **Number** | The maximum number of bytes sent in one request. Defaults &#x60;0&#x60; (no limit). | [optional] [default to 0]
**request_max_entries** | **Number** | The maximum number of logs sent in one request. Defaults &#x60;0&#x60; (no limit). | [optional] [default to 0]
**content_type** | **String** | Content type of the header sent with the request. | [optional] [default to &#39;null&#39;]
**header_name** | **String** | Name of the custom header sent with the request. | [optional] [default to &#39;null&#39;]
**header_value** | **String** | Value of the custom header sent with the request. | [optional] [default to &#39;null&#39;]
**json_format** | **String** | Enforces valid JSON formatting for log entries. | [optional] 
**message_type** | [**LoggingMessageType**](LoggingMessageType.md) |  | [optional] 
**method** | **String** | HTTP method used for request. | [optional] [default to &#39;POST&#39;]
**url** | **String** | The URL to send logs to. Must use HTTPS. Required. | [optional] 



## Enum: JsonFormatEnum


* `disabled` (value: `"0"`)

* `json_array` (value: `"1"`)

* `newline_delimited_json` (value: `"2"`)





## Enum: MethodEnum


* `POST` (value: `"POST"`)

* `PUT` (value: `"PUT"`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
