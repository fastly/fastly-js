# Fastly.LoggingKafkaResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name for the real-time logging configuration. | [optional] 
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.  | [optional]  [one of: "none", "waf_debug", "null"]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional]  [defaults to '%h %l %u %t "%r" %&gt;s %b']
**format_version** | **String** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  | [optional]  [one of: "1", "2"]
**tls_ca_cert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional]  [defaults to 'null']
**tls_client_cert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional]  [defaults to 'null']
**tls_client_key** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional]  [defaults to 'null']
**tls_hostname** | **String** | The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional]  [defaults to 'null']
**created_at** | **Date** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **Date** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **Date** | Date and time in ISO 8601 format. | [optional] [readonly] 
**service_id** | **String** |  | [optional] [readonly] 
**version** | **String** |  | [optional] [readonly] 
**topic** | **String** | The Kafka topic to send logs to. Required. | [optional] 
**brokers** | **String** | A comma-separated list of IP addresses or hostnames of Kafka brokers. Required. | [optional] 
**compression_codec** | **String** | The codec used for compression of your logs. | [optional]  [one of: "gzip", "snappy", "lz4", "null"]
**required_acks** | **Number** | The number of acknowledgements a leader must receive before a write is considered successful. | [optional]  [one of: 1, 0, -1]
**request_max_bytes** | **Number** | The maximum number of bytes sent in one request. Defaults `0` (no limit). | [optional]  [defaults to 0]
**parse_log_keyvals** | **Boolean** | Enables parsing of key&#x3D;value tuples from the beginning of a logline, turning them into [record headers](https://cwiki.apache.org/confluence/display/KAFKA/KIP-82+-+Add+Record+Headers). | [optional] 
**auth_method** | **String** | SASL authentication method. | [optional]  [one of: "plain", "scram-sha-256", "scram-sha-512"]
**user** | **String** | SASL user. | [optional] 
**password** | **String** | SASL password. | [optional] 
**use_tls** | [**LoggingUseTls**](LoggingUseTls.md) |  | [optional] 


[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
