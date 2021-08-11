# FastlyApi.LoggingCloudfilesApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogCloudfiles**](LoggingCloudfilesApi.md#createLogCloudfiles) | **POST** /service/{service_id}/version/{version_id}/logging/cloudfiles | Create a Cloud Files log endpoint
[**deleteLogCloudfiles**](LoggingCloudfilesApi.md#deleteLogCloudfiles) | **DELETE** /service/{service_id}/version/{version_id}/logging/cloudfiles/{logging_cloudfiles_name} | Delete the Cloud Files log endpoint
[**getLogCloudfiles**](LoggingCloudfilesApi.md#getLogCloudfiles) | **GET** /service/{service_id}/version/{version_id}/logging/cloudfiles/{logging_cloudfiles_name} | Get a Cloud Files log endpoint
[**listLogCloudfiles**](LoggingCloudfilesApi.md#listLogCloudfiles) | **GET** /service/{service_id}/version/{version_id}/logging/cloudfiles | List Cloud Files log endpoints
[**updateLogCloudfiles**](LoggingCloudfilesApi.md#updateLogCloudfiles) | **PUT** /service/{service_id}/version/{version_id}/logging/cloudfiles/{logging_cloudfiles_name} | Update the Cloud Files log endpoint



## `createLogCloudfiles`

> LoggingCloudfilesResponse createLogCloudfiles(service_id, version_id, opts)

Create a Cloud Files log endpoint

Create a Cloud Files log endpoint for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingCloudfilesApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'message_type': new FastlyApi.LoggingMessageType(), // LoggingMessageType | 
  'timestamp_format': "timestamp_format_example", // String | Date and time in ISO 8601 format.
  'period': 3600, // Number | How frequently log files are finalized so they can be available for reading (in seconds).
  'gzip_level': 0, // Number | What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
  'compression_codec': new FastlyApi.LoggingCompressionCodec(), // LoggingCompressionCodec | 
  'access_key': "access_key_example", // String | Your Cloud Files account access key.
  'bucket_name': "bucket_name_example", // String | The name of your Cloud Files container.
  'path': "'null'", // String | The path to upload logs to.
  'region': "region_example", // String | The region to stream logs to.
  'public_key': "'null'", // String | A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
  'user': "user_example" // String | The username for your Cloud Files account.
};
apiInstance.createLogCloudfiles(service_id, version_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**message_type** | [**LoggingMessageType**](../Model/LoggingMessageType.md) |  | [optional]
**timestamp_format** | **String** | Date and time in ISO 8601 format. | [optional]
**period** | **Number** | How frequently log files are finalized so they can be available for reading (in seconds). | [optional] [default to 3600]
**gzip_level** | **Number** | What level of gzip encoding to have when sending logs (default &#x60;0&#x60;, no compression). If an explicit non-zero value is set, then &#x60;compression_codec&#x60; will default to \\\&quot;gzip.\\\&quot; Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional] [default to 0]
**compression_codec** | [**LoggingCompressionCodec**](../Model/LoggingCompressionCodec.md) |  | [optional]
**access_key** | **String** | Your Cloud Files account access key. | [optional]
**bucket_name** | **String** | The name of your Cloud Files container. | [optional]
**path** | **String** | The path to upload logs to. | [optional] [default to &#39;null&#39;]
**region** | **String** | The region to stream logs to. | [optional]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
**user** | **String** | The username for your Cloud Files account. | [optional]

### Return type

[**LoggingCloudfilesResponse**](LoggingCloudfilesResponse.md)


## `deleteLogCloudfiles`

> Object deleteLogCloudfiles(service_id, version_id, logging_cloudfiles_name)

Delete the Cloud Files log endpoint

Delete the Cloud Files log endpoint for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingCloudfilesApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_cloudfiles_name = "logging_cloudfiles_name_example"; // String | 
apiInstance.deleteLogCloudfiles(service_id, version_id, logging_cloudfiles_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**logging_cloudfiles_name** | **String** |  |

### Return type

**Object**


## `getLogCloudfiles`

> LoggingCloudfilesResponse getLogCloudfiles(service_id, version_id, logging_cloudfiles_name)

Get a Cloud Files log endpoint

Get the Cloud Files log endpoint for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingCloudfilesApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_cloudfiles_name = "logging_cloudfiles_name_example"; // String | 
apiInstance.getLogCloudfiles(service_id, version_id, logging_cloudfiles_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**logging_cloudfiles_name** | **String** |  |

### Return type

[**LoggingCloudfilesResponse**](LoggingCloudfilesResponse.md)


## `listLogCloudfiles`

> [LoggingCloudfilesResponse] listLogCloudfiles(service_id, version_id)

List Cloud Files log endpoints

List all of the Cloud Files log endpoints for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingCloudfilesApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogCloudfiles(service_id, version_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

[**[LoggingCloudfilesResponse]**](LoggingCloudfilesResponse.md)


## `updateLogCloudfiles`

> LoggingCloudfilesResponse updateLogCloudfiles(service_id, version_id, logging_cloudfiles_name, opts)

Update the Cloud Files log endpoint

Update the Cloud Files log endpoint for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingCloudfilesApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_cloudfiles_name = "logging_cloudfiles_name_example"; // String | 
let opts = {
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'message_type': new FastlyApi.LoggingMessageType(), // LoggingMessageType | 
  'timestamp_format': "timestamp_format_example", // String | Date and time in ISO 8601 format.
  'period': 3600, // Number | How frequently log files are finalized so they can be available for reading (in seconds).
  'gzip_level': 0, // Number | What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\"gzip.\\\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
  'compression_codec': new FastlyApi.LoggingCompressionCodec(), // LoggingCompressionCodec | 
  'access_key': "access_key_example", // String | Your Cloud Files account access key.
  'bucket_name': "bucket_name_example", // String | The name of your Cloud Files container.
  'path': "'null'", // String | The path to upload logs to.
  'region': "region_example", // String | The region to stream logs to.
  'public_key': "'null'", // String | A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
  'user': "user_example" // String | The username for your Cloud Files account.
};
apiInstance.updateLogCloudfiles(service_id, version_id, logging_cloudfiles_name, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**logging_cloudfiles_name** | **String** |  |
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**message_type** | [**LoggingMessageType**](../Model/LoggingMessageType.md) |  | [optional]
**timestamp_format** | **String** | Date and time in ISO 8601 format. | [optional]
**period** | **Number** | How frequently log files are finalized so they can be available for reading (in seconds). | [optional] [default to 3600]
**gzip_level** | **Number** | What level of gzip encoding to have when sending logs (default &#x60;0&#x60;, no compression). If an explicit non-zero value is set, then &#x60;compression_codec&#x60; will default to \\\&quot;gzip.\\\&quot; Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional] [default to 0]
**compression_codec** | [**LoggingCompressionCodec**](../Model/LoggingCompressionCodec.md) |  | [optional]
**access_key** | **String** | Your Cloud Files account access key. | [optional]
**bucket_name** | **String** | The name of your Cloud Files container. | [optional]
**path** | **String** | The path to upload logs to. | [optional] [default to &#39;null&#39;]
**region** | **String** | The region to stream logs to. | [optional]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
**user** | **String** | The username for your Cloud Files account. | [optional]

### Return type

[**LoggingCloudfilesResponse**](LoggingCloudfilesResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
