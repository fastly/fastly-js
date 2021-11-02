# Fastly.LoggingCloudfilesApi


```javascript
const apiInstance = new Fastly.LoggingCloudfilesApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogCloudfiles**](LoggingCloudfilesApi.md#createLogCloudfiles) | **POST** /service/{service_id}/version/{version_id}/logging/cloudfiles | Create a Cloud Files log endpoint
[**deleteLogCloudfiles**](LoggingCloudfilesApi.md#deleteLogCloudfiles) | **DELETE** /service/{service_id}/version/{version_id}/logging/cloudfiles/{logging_cloudfiles_name} | Delete the Cloud Files log endpoint
[**getLogCloudfiles**](LoggingCloudfilesApi.md#getLogCloudfiles) | **GET** /service/{service_id}/version/{version_id}/logging/cloudfiles/{logging_cloudfiles_name} | Get a Cloud Files log endpoint
[**listLogCloudfiles**](LoggingCloudfilesApi.md#listLogCloudfiles) | **GET** /service/{service_id}/version/{version_id}/logging/cloudfiles | List Cloud Files log endpoints
[**updateLogCloudfiles**](LoggingCloudfilesApi.md#updateLogCloudfiles) | **PUT** /service/{service_id}/version/{version_id}/logging/cloudfiles/{logging_cloudfiles_name} | Update the Cloud Files log endpoint



## `createLogCloudfiles`

```javascript
createLogCloudfiles({ service_id, version_id, [name, ][placement, ][format_version, ][response_condition, ][format, ][message_type, ][timestamp_format, ][period, ][gzip_level, ][compression_codec, ][access_key, ][bucket_name, ][path, ][region, ][public_key, ][user] })
```

Create a Cloud Files log endpoint for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  name: "name_example",
  placement: new Fastly.LoggingPlacement(),
  format_version: new Fastly.LoggingFormatVersion(),
  response_condition: "response_condition_example",
  format: '%h %l %u %t "%r" %&gt;s %b',
  message_type: new Fastly.LoggingMessageType(),
  timestamp_format: "timestamp_format_example",
  period: 3600,
  gzip_level: 0,
  compression_codec: new Fastly.LoggingCompressionCodec(),
  access_key: "access_key_example",
  bucket_name: "bucket_name_example",
  path: 'null',
  region: ,
  public_key: 'null',
  user: "user_example",
};

apiInstance.createLogCloudfiles(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

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

```javascript
deleteLogCloudfiles({ service_id, version_id, logging_cloudfiles_name })
```

Delete the Cloud Files log endpoint for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_cloudfiles_name: "logging_cloudfiles_name_example", // required
};

apiInstance.deleteLogCloudfiles(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**logging_cloudfiles_name** | **String** |  |

### Return type

**Object**


## `getLogCloudfiles`

```javascript
getLogCloudfiles({ service_id, version_id, logging_cloudfiles_name })
```

Get the Cloud Files log endpoint for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_cloudfiles_name: "logging_cloudfiles_name_example", // required
};

apiInstance.getLogCloudfiles(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**logging_cloudfiles_name** | **String** |  |

### Return type

[**LoggingCloudfilesResponse**](LoggingCloudfilesResponse.md)


## `listLogCloudfiles`

```javascript
listLogCloudfiles({ service_id, version_id })
```

List all of the Cloud Files log endpoints for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listLogCloudfiles(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

[**[LoggingCloudfilesResponse]**](LoggingCloudfilesResponse.md)


## `updateLogCloudfiles`

```javascript
updateLogCloudfiles({ service_id, version_id, logging_cloudfiles_name, [name, ][placement, ][format_version, ][response_condition, ][format, ][message_type, ][timestamp_format, ][period, ][gzip_level, ][compression_codec, ][access_key, ][bucket_name, ][path, ][region, ][public_key, ][user] })
```

Update the Cloud Files log endpoint for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_cloudfiles_name: "logging_cloudfiles_name_example", // required
  name: "name_example",
  placement: new Fastly.LoggingPlacement(),
  format_version: new Fastly.LoggingFormatVersion(),
  response_condition: "response_condition_example",
  format: '%h %l %u %t "%r" %&gt;s %b',
  message_type: new Fastly.LoggingMessageType(),
  timestamp_format: "timestamp_format_example",
  period: 3600,
  gzip_level: 0,
  compression_codec: new Fastly.LoggingCompressionCodec(),
  access_key: "access_key_example",
  bucket_name: "bucket_name_example",
  path: 'null',
  region: ,
  public_key: 'null',
  user: "user_example",
};

apiInstance.updateLogCloudfiles(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

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
