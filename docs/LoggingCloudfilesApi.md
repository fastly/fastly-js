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
  placement: "none",
  format_version: 1,
  response_condition: "response_condition_example",
  format: "'%h %l %u %t \"%r\" %&gt;s %b'",
  message_type: "classic",
  timestamp_format: "timestamp_format_example",
  period: 3600,
  gzip_level: 0,
  compression_codec: "zstd",
  access_key: "access_key_example",
  bucket_name: "bucket_name_example",
  path: "'null'",
  region: "DFW",
  public_key: "'null'",
  user: "user_example",
};

apiInstance.createLogCloudfiles(options)
  .then((data) => {
    console.log(data, "API called successfully.");
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
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.  | [optional] [one of: "none", "waf_debug"]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.   | [optional] [one of: 1, 2] [defaults to 2]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [defaults to '%h %l %u %t "%r" %&gt;s %b']
**message_type** | **String** | How the message should be formatted. | [optional] [one of: "classic", "loggly", "logplex", "blank"] [defaults to 'classic']
**timestamp_format** | **String** | Date and time in ISO 8601 format. | [optional]
**period** | **Number** | How frequently log files are finalized so they can be available for reading (in seconds). | [optional] [defaults to 3600]
**gzip_level** | **Number** | What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\&quot;gzip.\\\&quot; Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error. | [optional] [defaults to 0]
**compression_codec** | **String** | The codec used for compression of your logs. Valid values are `zstd`, `snappy`, and `gzip`. If the specified codec is \\\&quot;gzip\\\&quot;, `gzip_level` will default to 3. To specify a different level, leave `compression_codec` blank and explicitly set the level using `gzip_level`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error. | [optional] [one of: "zstd", "snappy", "gzip"]
**access_key** | **String** | Your Cloud Files account access key. | [optional]
**bucket_name** | **String** | The name of your Cloud Files container. | [optional]
**path** | **String** | The path to upload logs to. | [optional] [defaults to 'null']
**region** | **String** | The region to stream logs to. | [optional] [one of: "DFW", "ORD", "IAD", "LON", "SYD", "HKG", "null"]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [defaults to 'null']
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
    console.log(data, "API called successfully.");
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
    console.log(data, "API called successfully.");
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
    console.log(data, "API called successfully.");
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
  placement: "none",
  format_version: 1,
  response_condition: "response_condition_example",
  format: "'%h %l %u %t \"%r\" %&gt;s %b'",
  message_type: "classic",
  timestamp_format: "timestamp_format_example",
  period: 3600,
  gzip_level: 0,
  compression_codec: "zstd",
  access_key: "access_key_example",
  bucket_name: "bucket_name_example",
  path: "'null'",
  region: "DFW",
  public_key: "'null'",
  user: "user_example",
};

apiInstance.updateLogCloudfiles(options)
  .then((data) => {
    console.log(data, "API called successfully.");
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
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.  | [optional] [one of: "none", "waf_debug"]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.   | [optional] [one of: 1, 2] [defaults to FormatVersionEnum.v2]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [defaults to '%h %l %u %t "%r" %&gt;s %b']
**message_type** | **String** | How the message should be formatted. | [optional] [one of: "classic", "loggly", "logplex", "blank"] [defaults to 'classic']
**timestamp_format** | **String** | Date and time in ISO 8601 format. | [optional]
**period** | **Number** | How frequently log files are finalized so they can be available for reading (in seconds). | [optional] [defaults to 3600]
**gzip_level** | **Number** | What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\&quot;gzip.\\\&quot; Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error. | [optional] [defaults to 0]
**compression_codec** | **String** | The codec used for compression of your logs. Valid values are `zstd`, `snappy`, and `gzip`. If the specified codec is \\\&quot;gzip\\\&quot;, `gzip_level` will default to 3. To specify a different level, leave `compression_codec` blank and explicitly set the level using `gzip_level`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error. | [optional] [one of: "zstd", "snappy", "gzip"]
**access_key** | **String** | Your Cloud Files account access key. | [optional]
**bucket_name** | **String** | The name of your Cloud Files container. | [optional]
**path** | **String** | The path to upload logs to. | [optional] [defaults to 'null']
**region** | **String** | The region to stream logs to. | [optional] [one of: "DFW", "ORD", "IAD", "LON", "SYD", "HKG", "null"]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [defaults to 'null']
**user** | **String** | The username for your Cloud Files account. | [optional]

### Return type

[**LoggingCloudfilesResponse**](LoggingCloudfilesResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
