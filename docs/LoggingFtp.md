# FastlyApi.LoggingFtp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name for the real-time logging configuration. | [optional] 
**placement** | [**LoggingPlacement**](LoggingPlacement.md) |  | [optional] 
**format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md) |  | [optional] 
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**message_type** | [**LoggingMessageType**](LoggingMessageType.md) |  | [optional] 
**timestamp_format** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**period** | **Number** | How frequently log files are finalized so they can be available for reading (in seconds). | [optional] [default to 3600]
**gzip_level** | **Number** | What level of gzip encoding to have when sending logs (default &#x60;0&#x60;, no compression). If an explicit non-zero value is set, then &#x60;compression_codec&#x60; will default to \&quot;gzip.\&quot; Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional] [default to 0]
**compression_codec** | [**LoggingCompressionCodec**](LoggingCompressionCodec.md) |  | [optional] 
**address** | **String** | An hostname or IPv4 address. | [optional] 
**hostname** | **String** | Hostname used. | [optional] 
**ipv4** | **String** | IPv4 address of the host. | [optional] 
**password** | **String** | The password for the server. For anonymous use an email address. | [optional] 
**path** | **String** | The path to upload log files to. If the path ends in &#x60;/&#x60; then it is treated as a directory. | [optional] 
**port** | **Number** | The port number. | [optional] [default to 21]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
**user** | **String** | The username for the server. Can be anonymous. | [optional] 



[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
