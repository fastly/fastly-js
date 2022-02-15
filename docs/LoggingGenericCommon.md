# Fastly.LoggingGenericCommon

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_type** | **String** | How the message should be formatted. | [optional]  [one of: "classic", "loggly", "logplex", "blank"]
**timestamp_format** | **String** | A timestamp format | [optional] [readonly] 
**period** | **Number** | How frequently log files are finalized so they can be available for reading (in seconds). | [optional]  [defaults to 3600]
**gzip_level** | **Number** | What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \&quot;gzip.\&quot; Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error. | [optional]  [defaults to 0]
**compression_codec** | **String** | The codec used for compression of your logs. Valid values are `zstd`, `snappy`, and `gzip`. If the specified codec is \&quot;gzip\&quot;, `gzip_level` will default to 3. To specify a different level, leave `compression_codec` blank and explicitly set the level using `gzip_level`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error. | [optional]  [one of: "zstd", "snappy", "gzip"]


[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
