# Fastly.LoggingGenericCommon

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_type** | **String** | How the message should be formatted. | [optional]  [one of: "classic", "loggly", "logplex", "blank"]
**timestamp_format** | **String** | A timestamp format | [optional] [readonly] 
**compression_codec** | **String** | The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error. | [optional]  [one of: "zstd", "snappy", "gzip"]


[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
