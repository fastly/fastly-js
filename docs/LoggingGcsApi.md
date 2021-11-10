# Fastly.LoggingGcsApi


```javascript
const apiInstance = new Fastly.LoggingGcsApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogGcs**](LoggingGcsApi.md#createLogGcs) | **POST** /service/{service_id}/version/{version_id}/logging/gcs | Create a GCS log endpoint
[**deleteLogGcs**](LoggingGcsApi.md#deleteLogGcs) | **DELETE** /service/{service_id}/version/{version_id}/logging/gcs/{logging_gcs_name} | Delete a GCS log endpoint
[**getLogGcs**](LoggingGcsApi.md#getLogGcs) | **GET** /service/{service_id}/version/{version_id}/logging/gcs/{logging_gcs_name} | Get a GCS log endpoint
[**listLogGcs**](LoggingGcsApi.md#listLogGcs) | **GET** /service/{service_id}/version/{version_id}/logging/gcs | List GCS log endpoints
[**updateLogGcs**](LoggingGcsApi.md#updateLogGcs) | **PUT** /service/{service_id}/version/{version_id}/logging/gcs/{logging_gcs_name} | Update a GCS log endpoint



## `createLogGcs`

```javascript
createLogGcs({ service_id, version_id, [name, ][placement, ][format_version, ][response_condition, ][format, ][message_type, ][timestamp_format, ][period, ][gzip_level, ][compression_codec, ][user, ][secret_key, ][bucket_name, ][path, ][public_key] })
```

Create GCS logging for a particular service and version.

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
  user: "user_example",
  secret_key: "secret_key_example",
  bucket_name: "bucket_name_example",
  path: null,
  public_key: "'null'",
};

apiInstance.createLogGcs(options)
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
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.   | [optional] [one of: 1, 2] [defaults to FormatVersionEnum.v2]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [defaults to '%h %l %u %t "%r" %&gt;s %b']
**message_type** | **String** | How the message should be formatted. | [optional] [one of: "classic", "loggly", "logplex", "blank"] [defaults to 'classic']
**timestamp_format** | **String** | Date and time in ISO 8601 format. | [optional]
**period** | **Number** | How frequently log files are finalized so they can be available for reading (in seconds). | [optional] [defaults to 3600]
**gzip_level** | **Number** | What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \\\&quot;gzip.\\\&quot; Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error. | [optional] [defaults to 0]
**compression_codec** | **String** | The codec used for compression of your logs. Valid values are `zstd`, `snappy`, and `gzip`. If the specified codec is \\\&quot;gzip\\\&quot;, `gzip_level` will default to 3. To specify a different level, leave `compression_codec` blank and explicitly set the level using `gzip_level`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error. | [optional] [one of: "zstd", "snappy", "gzip"]
**user** | **String** | Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required. | [optional]
**secret_key** | **String** | Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required. | [optional]
**bucket_name** | **String** | The name of the GCS bucket. | [optional]
**path** | [**String**](../Model/String.md) |  | [optional]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [defaults to 'null']

### Return type

[**LoggingGcsResponse**](LoggingGcsResponse.md)


## `deleteLogGcs`

```javascript
deleteLogGcs({ service_id, version_id, logging_gcs_name })
```

Delete the GCS Logging for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_gcs_name: "logging_gcs_name_example", // required
};

apiInstance.deleteLogGcs(options)
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
**logging_gcs_name** | **String** |  |

### Return type

**Object**


## `getLogGcs`

```javascript
getLogGcs({ service_id, version_id, logging_gcs_name })
```

Get the GCS Logging for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_gcs_name: "logging_gcs_name_example", // required
};

apiInstance.getLogGcs(options)
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
**logging_gcs_name** | **String** |  |

### Return type

[**LoggingGcsResponse**](LoggingGcsResponse.md)


## `listLogGcs`

```javascript
listLogGcs({ service_id, version_id })
```

List all of the GCS log endpoints for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listLogGcs(options)
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

[**[LoggingGcsResponse]**](LoggingGcsResponse.md)


## `updateLogGcs`

```javascript
updateLogGcs({ service_id, version_id, logging_gcs_name, [name, ][placement, ][format_version, ][response_condition, ][format, ][message_type, ][timestamp_format, ][period, ][gzip_level, ][compression_codec, ][user, ][secret_key, ][bucket_name, ][path, ][public_key] })
```

Update the GCS for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_gcs_name: "logging_gcs_name_example", // required
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
  user: "user_example",
  secret_key: "secret_key_example",
  bucket_name: "bucket_name_example",
  path: null,
  public_key: "'null'",
};

apiInstance.updateLogGcs(options)
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
**logging_gcs_name** | **String** |  |
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
**user** | **String** | Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required. | [optional]
**secret_key** | **String** | Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required. | [optional]
**bucket_name** | **String** | The name of the GCS bucket. | [optional]
**path** | [**String**](../Model/String.md) |  | [optional]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [defaults to 'null']

### Return type

[**LoggingGcsResponse**](LoggingGcsResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
