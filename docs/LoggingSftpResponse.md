# Fastly.LoggingSftpResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name for the real-time logging configuration. | [optional] 
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.  | [optional]  [one of: "none", "waf_debug", "null"]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.   | [optional]  [one of: 1, 2]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional]  [defaults to '%h %l %u %t "%r" %&gt;s %b']
**message_type** | **String** | How the message should be formatted. | [optional]  [one of: "classic", "loggly", "logplex", "blank"]
**timestamp_format** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**period** | **Number** | How frequently log files are finalized so they can be available for reading (in seconds). | [optional]  [defaults to 3600]
**gzip_level** | **Number** | What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \&quot;gzip.\&quot; Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error. | [optional]  [defaults to 0]
**compression_codec** | **String** | The codec used for compression of your logs. Valid values are `zstd`, `snappy`, and `gzip`. If the specified codec is \&quot;gzip\&quot;, `gzip_level` will default to 3. To specify a different level, leave `compression_codec` blank and explicitly set the level using `gzip_level`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error. | [optional]  [one of: "zstd", "snappy", "gzip"]
**address** | **String** | A hostname or IPv4 address. | [optional] 
**port** | **Object** | The port number. | [optional] 
**password** | **String** | The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference. | [optional] 
**path** | **String** | The path to upload logs to. | [optional]  [defaults to 'null']
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional]  [defaults to 'null']
**secret_key** | **String** | The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference. | [optional]  [defaults to 'null']
**ssh_known_hosts** | **String** | A list of host keys for all hosts we can connect to over SFTP. | [optional] 
**user** | **String** | The username for the server. | [optional] 
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 


[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
