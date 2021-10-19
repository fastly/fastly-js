# Fastly.LoggingSyslogResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in &#x60;vcl_log&#x60; if &#x60;format_version&#x60; is set to &#x60;2&#x60; and in &#x60;vcl_deliver&#x60; if &#x60;format_version&#x60; is set to &#x60;1&#x60;.   | [optional] [default to FormatVersionEnum.v2]
**name** | **String** | The name for the real-time logging configuration. | [optional] 
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with &#x60;format_version&#x60; of 2 are placed in &#x60;vcl_log&#x60; and those with &#x60;format_version&#x60; of 1 are placed in &#x60;vcl_deliver&#x60;.  | [optional] 
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
**tls_ca_cert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_cert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_key** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_hostname** | **String** | The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
**address** | **String** | A hostname or IPv4 address. | [optional] 
**port** | **Number** | The port number. | [optional] [default to 514]
**hostname** | **String** | The hostname used for the syslog endpoint. | [optional] 
**ipv4** | **String** | The IPv4 address used for the syslog endpoint. | [optional] 
**message_type** | [**LoggingMessageType**](LoggingMessageType.md) |  | [optional] 
**token** | **String** | Whether to prepend each message with a specific token. | [optional] [default to &#39;null&#39;]
**use_tls** | [**LoggingUseTls**](LoggingUseTls.md) |  | [optional] 
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 



## Enum: FormatVersionEnum


* `v1` (value: `1`)

* `v2` (value: `2`)





## Enum: PlacementEnum


* `none` (value: `"none"`)

* `waf_debug` (value: `"waf_debug"`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
