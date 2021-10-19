# Fastly.LoggingGenericCommon

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compression_codec** | **String** | The codec used for compression of your logs. Valid values are &#x60;zstd&#x60;, &#x60;snappy&#x60;, and &#x60;gzip&#x60;. If the specified codec is \&quot;gzip\&quot;, &#x60;gzip_level&#x60; will default to 3. To specify a different level, leave &#x60;compression_codec&#x60; blank and explicitly set the level using &#x60;gzip_level&#x60;. Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional] 
**gzip_level** | **Number** | What level of gzip encoding to have when sending logs (default &#x60;0&#x60;, no compression). If an explicit non-zero value is set, then &#x60;compression_codec&#x60; will default to \&quot;gzip.\&quot; Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional] [default to 0]
**message_type** | **String** | How the message should be formatted. | [optional] [default to &#39;classic&#39;]
**period** | **Number** | How frequently log files are finalized so they can be available for reading (in seconds). | [optional] [default to 3600]
**timestamp_format** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 



## Enum: CompressionCodecEnum


* `zstd` (value: `"zstd"`)

* `snappy` (value: `"snappy"`)

* `gzip` (value: `"gzip"`)





## Enum: MessageTypeEnum


* `classic` (value: `"classic"`)

* `loggly` (value: `"loggly"`)

* `logplex` (value: `"logplex"`)

* `blank` (value: `"blank"`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
