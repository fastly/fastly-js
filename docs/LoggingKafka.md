# Fastly.LoggingKafka

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name for the real-time logging configuration. | [optional] 
**placement** | [**LoggingPlacement**](LoggingPlacement.md) |  | [optional] 
**format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md) |  | [optional] 
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**tls_ca_cert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_cert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_key** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_hostname** | **String** | The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
**topic** | **String** | The Kafka topic to send logs to. Required. | [optional] 
**brokers** | **String** | A comma-separated list of IP addresses or hostnames of Kafka brokers. Required. | [optional] 
**compression_codec** | **String** | The codec used for compression of your logs. | [optional] 
**required_acks** | **Number** | The number of acknowledgements a leader must receive before a write is considered successful. | [optional] [default to RequiredAcksEnum.one]
**request_max_bytes** | **Number** | The maximum number of bytes sent in one request. Defaults &#x60;0&#x60; (no limit). | [optional] [default to 0]
**parse_log_keyvals** | **Boolean** | Enables parsing of key&#x3D;value tuples from the beginning of a logline, turning them into [record headers](https://cwiki.apache.org/confluence/display/KAFKA/KIP-82+-+Add+Record+Headers). | [optional] 
**auth_method** | **String** | SASL authentication method. | [optional] 
**user** | **String** | SASL user. | [optional] 
**password** | **String** | SASL password. | [optional] 
**use_tls** | [**LoggingUseTls**](LoggingUseTls.md) |  | [optional] 



## Enum: CompressionCodecEnum


* `gzip` (value: `"gzip"`)

* `snappy` (value: `"snappy"`)

* `lz4` (value: `"lz4"`)

* `null` (value: `"null"`)





## Enum: RequiredAcksEnum


* `one` (value: `1`)

* `none` (value: `0`)

* `all` (value: `-1`)





## Enum: AuthMethodEnum


* `plain` (value: `"plain"`)

* `scram-sha-256` (value: `"scram-sha-256"`)

* `scram-sha-512` (value: `"scram-sha-512"`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
