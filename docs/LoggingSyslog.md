# Fastly.LoggingSyslog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name for the real-time logging configuration. | [optional] 
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.  | [optional]  [one of: "none", "waf_debug", "null"]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  | [optional]  [one of: 1, 2]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional]  [defaults to '%h %l %u %t "%r" %&gt;s %b']
**tls_ca_cert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional]  [defaults to 'null']
**tls_client_cert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional]  [defaults to 'null']
**tls_client_key** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional]  [defaults to 'null']
**tls_hostname** | **String** | The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional]  [defaults to 'null']
**address** | **String** | A hostname or IPv4 address. | [optional] 
**port** | **Number** | The port number. | [optional]  [defaults to 514]
**message_type** | [**LoggingMessageType**](LoggingMessageType.md) |  | [optional] 
**hostname** | **String** | The hostname used for the syslog endpoint. | [optional] 
**ipv4** | **String** | The IPv4 address used for the syslog endpoint. | [optional] 
**token** | **String** | Whether to prepend each message with a specific token. | [optional]  [defaults to 'null']
**use_tls** | [**LoggingUseTls**](LoggingUseTls.md) |  | [optional] 


[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
