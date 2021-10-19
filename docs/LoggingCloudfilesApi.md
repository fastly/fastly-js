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
createLogCloudfiles({ service_id, version_id, [format, ][format_version, ][name, ][placement, ][response_condition, ][compression_codec, ][gzip_level, ][message_type, ][period, ][timestamp_format, ][access_key, ][bucket_name, ][path, ][public_key, ][region, ][user] })
```

Create a Cloud Files log endpoint for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  format: '%h %l %u %t "%r" %&gt;s %b',
  format_version: FormatVersionEnum.v2,
  name: "name_example",
  placement: ,
  response_condition: "response_condition_example",
  compression_codec: ,
  gzip_level: 0,
  message_type: 'classic',
  period: 3600,
  timestamp_format: "timestamp_format_example",
  access_key: "access_key_example",
  bucket_name: "bucket_name_example",
  path: 'null',
  public_key: 'null',
  region: ,
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
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in &#x60;vcl_log&#x60; if &#x60;format_version&#x60; is set to &#x60;2&#x60; and in &#x60;vcl_deliver&#x60; if &#x60;format_version&#x60; is set to &#x60;1&#x60;.   | [optional] [default to FormatVersionEnum.v2]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with &#x60;format_version&#x60; of 2 are placed in &#x60;vcl_log&#x60; and those with &#x60;format_version&#x60; of 1 are placed in &#x60;vcl_deliver&#x60;.  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**compression_codec** | **String** | The codec used for compression of your logs. Valid values are &#x60;zstd&#x60;, &#x60;snappy&#x60;, and &#x60;gzip&#x60;. If the specified codec is \\\&quot;gzip\\\&quot;, &#x60;gzip_level&#x60; will default to 3. To specify a different level, leave &#x60;compression_codec&#x60; blank and explicitly set the level using &#x60;gzip_level&#x60;. Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional]
**gzip_level** | **Number** | What level of gzip encoding to have when sending logs (default &#x60;0&#x60;, no compression). If an explicit non-zero value is set, then &#x60;compression_codec&#x60; will default to \\\&quot;gzip.\\\&quot; Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional] [default to 0]
**message_type** | **String** | How the message should be formatted. | [optional] [default to &#39;classic&#39;]
**period** | **Number** | How frequently log files are finalized so they can be available for reading (in seconds). | [optional] [default to 3600]
**timestamp_format** | **String** | Date and time in ISO 8601 format. | [optional]
**access_key** | **String** | Your Cloud Files account access key. | [optional]
**bucket_name** | **String** | The name of your Cloud Files container. | [optional]
**path** | **String** | The path to upload logs to. | [optional] [default to &#39;null&#39;]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
**region** | **String** | The region to stream logs to. | [optional]
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
updateLogCloudfiles({ service_id, version_id, logging_cloudfiles_name, [format, ][format_version, ][name, ][placement, ][response_condition, ][compression_codec, ][gzip_level, ][message_type, ][period, ][timestamp_format, ][access_key, ][bucket_name, ][path, ][public_key, ][region, ][user] })
```

Update the Cloud Files log endpoint for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_cloudfiles_name: "logging_cloudfiles_name_example", // required
  format: '%h %l %u %t "%r" %&gt;s %b',
  format_version: FormatVersionEnum.v2,
  name: "name_example",
  placement: ,
  response_condition: "response_condition_example",
  compression_codec: ,
  gzip_level: 0,
  message_type: 'classic',
  period: 3600,
  timestamp_format: "timestamp_format_example",
  access_key: "access_key_example",
  bucket_name: "bucket_name_example",
  path: 'null',
  public_key: 'null',
  region: ,
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
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in &#x60;vcl_log&#x60; if &#x60;format_version&#x60; is set to &#x60;2&#x60; and in &#x60;vcl_deliver&#x60; if &#x60;format_version&#x60; is set to &#x60;1&#x60;.   | [optional] [default to FormatVersionEnum.v2]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with &#x60;format_version&#x60; of 2 are placed in &#x60;vcl_log&#x60; and those with &#x60;format_version&#x60; of 1 are placed in &#x60;vcl_deliver&#x60;.  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**compression_codec** | **String** | The codec used for compression of your logs. Valid values are &#x60;zstd&#x60;, &#x60;snappy&#x60;, and &#x60;gzip&#x60;. If the specified codec is \\\&quot;gzip\\\&quot;, &#x60;gzip_level&#x60; will default to 3. To specify a different level, leave &#x60;compression_codec&#x60; blank and explicitly set the level using &#x60;gzip_level&#x60;. Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional]
**gzip_level** | **Number** | What level of gzip encoding to have when sending logs (default &#x60;0&#x60;, no compression). If an explicit non-zero value is set, then &#x60;compression_codec&#x60; will default to \\\&quot;gzip.\\\&quot; Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional] [default to 0]
**message_type** | **String** | How the message should be formatted. | [optional] [default to &#39;classic&#39;]
**period** | **Number** | How frequently log files are finalized so they can be available for reading (in seconds). | [optional] [default to 3600]
**timestamp_format** | **String** | Date and time in ISO 8601 format. | [optional]
**access_key** | **String** | Your Cloud Files account access key. | [optional]
**bucket_name** | **String** | The name of your Cloud Files container. | [optional]
**path** | **String** | The path to upload logs to. | [optional] [default to &#39;null&#39;]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
**region** | **String** | The region to stream logs to. | [optional]
**user** | **String** | The username for your Cloud Files account. | [optional]

### Return type

[**LoggingCloudfilesResponse**](LoggingCloudfilesResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
