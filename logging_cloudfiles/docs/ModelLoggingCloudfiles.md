# CloudFiles.ModelLoggingCloudfiles

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deletedAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updatedAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**serviceId** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 
**name** | **String** | The name for the real-time logging configuration. | [optional] 
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with &#x60;format_version&#x60; of 2 are placed in &#x60;vcl_log&#x60; and those with &#x60;format_version&#x60; of 1 are placed in &#x60;vcl_deliver&#x60;.  | [optional] 
**formatVersion** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in &#x60;vcl_log&#x60; if &#x60;format_version&#x60; is set to &#x60;2&#x60; and in &#x60;vcl_deliver&#x60; if &#x60;format_version&#x60; is set to &#x60;1&#x60;.   | [optional] [default to FormatVersionEnum.2]
**responseCondition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**messageType** | **String** | How the message should be formatted. | [optional] [default to &#39;classic&#39;]
**timestampFormat** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**period** | **Number** | How frequently log files are finalized so they can be available for reading (in seconds). | [optional] [default to 3600]
**gzipLevel** | **Number** | What level of gzip encoding to have when sending logs (default &#x60;0&#x60;, no compression). If an explicit non-zero value is set, then &#x60;compression_codec&#x60; will default to \&quot;gzip.\&quot; Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional] [default to 0]
**compressionCodec** | **String** | The codec used for compression of your logs. Valid values are &#x60;zstd&#x60;, &#x60;snappy&#x60;, and &#x60;gzip&#x60;. If the specified codec is \&quot;gzip\&quot;, &#x60;gzip_level&#x60; will default to 3. To specify a different level, leave &#x60;compression_codec&#x60; blank and explicitly set the level using &#x60;gzip_level&#x60;. Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional] 
**accessKey** | **String** | Your Cloud Files account access key. | [optional] 
**bucketName** | **String** | The name of your Cloud Files container. | [optional] 
**path** | **String** | The path to upload logs to. | [optional] [default to &#39;null&#39;]
**region** | **String** | The region to stream logs to. | [optional] 
**publicKey** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
**user** | **String** | The username for your Cloudfile account. | [optional] 



## Enum: PlacementEnum


* `none` (value: `"none"`)

* `waf_debug` (value: `"waf_debug"`)

* `null` (value: `"null"`)





## Enum: FormatVersionEnum


* `1` (value: `1`)

* `2` (value: `2`)





## Enum: MessageTypeEnum


* `classic` (value: `"classic"`)

* `loggly` (value: `"loggly"`)

* `logplex` (value: `"logplex"`)

* `blank` (value: `"blank"`)





## Enum: CompressionCodecEnum


* `zstd` (value: `"zstd"`)

* `snappy` (value: `"snappy"`)

* `gzip` (value: `"gzip"`)





## Enum: RegionEnum


* `DFW` (value: `"DFW"`)

* `ORD` (value: `"ORD"`)

* `IAD` (value: `"IAD"`)

* `LON` (value: `"LON"`)

* `SYD` (value: `"SYD"`)

* `HKG` (value: `"HKG"`)

* `null` (value: `"null"`)




