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
createLogGcs({ service_id, version_id, [format], , [format_version], , [name], , [placement], , [response_condition], , [compression_codec], , [gzip_level], , [message_type], , [period], , [timestamp_format], , [secret_key], , [user], , [bucket_name], , [path], , [public_key] })
```

Create GCS logging for a particular service and version.

### Example

```javascript
const options = {
 service_id: "service_id_example", // required
 version_id: 56, // required
  format: "'%h %l %u %t \"%r\" %&gt;s %b'",
  format_version: new Fastly.LoggingFormatVersion(),
  name: "name_example",
  placement: new Fastly.LoggingPlacement(),
  response_condition: "response_condition_example",
  compression_codec: new Fastly.LoggingCompressionCodec(),
  gzip_level: 0,
  message_type: new Fastly.LoggingMessageType(),
  period: 3600,
  timestamp_format: "timestamp_format_example",
  secret_key: "secret_key_example",
  user: "user_example",
  bucket_name: "bucket_name_example",
  path: null,
  public_key: "'null'",
};

apiInstance.createLogGcs(options)
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
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**compression_codec** | [**LoggingCompressionCodec**](../Model/LoggingCompressionCodec.md) |  | [optional]
**gzip_level** | **Number** | What level of gzip encoding to have when sending logs (default &#x60;0&#x60;, no compression). If an explicit non-zero value is set, then &#x60;compression_codec&#x60; will default to \\\&quot;gzip.\\\&quot; Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional] [default to 0]
**message_type** | [**LoggingMessageType**](../Model/LoggingMessageType.md) |  | [optional]
**period** | **Number** | How frequently log files are finalized so they can be available for reading (in seconds). | [optional] [default to 3600]
**timestamp_format** | **String** | Date and time in ISO 8601 format. | [optional]
**secret_key** | **String** | Your Google Cloud Platform account secret key. The &#x60;private_key&#x60; field in your service account authentication JSON. Required. | [optional]
**user** | **String** | Your Google Cloud Platform service account email address. The &#x60;client_email&#x60; field in your service account authentication JSON. Required. | [optional]
**bucket_name** | **String** | The name of the GCS bucket. | [optional]
**path** | [**String**](../Model/String.md) |  | [optional]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]

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

[**[LoggingGcsResponse]**](LoggingGcsResponse.md)


## `updateLogGcs`

```javascript
updateLogGcs({ service_id, version_id, logging_gcs_name, [format], , [format_version], , [name], , [placement], , [response_condition], , [compression_codec], , [gzip_level], , [message_type], , [period], , [timestamp_format], , [secret_key], , [user], , [bucket_name], , [path], , [public_key] })
```

Update the GCS for a particular service and version.

### Example

```javascript
const options = {
 service_id: "service_id_example", // required
 version_id: 56, // required
 logging_gcs_name: "logging_gcs_name_example", // required
  format: "'%h %l %u %t \"%r\" %&gt;s %b'",
  format_version: new Fastly.LoggingFormatVersion(),
  name: "name_example",
  placement: new Fastly.LoggingPlacement(),
  response_condition: "response_condition_example",
  compression_codec: new Fastly.LoggingCompressionCodec(),
  gzip_level: 0,
  message_type: new Fastly.LoggingMessageType(),
  period: 3600,
  timestamp_format: "timestamp_format_example",
  secret_key: "secret_key_example",
  user: "user_example",
  bucket_name: "bucket_name_example",
  path: null,
  public_key: "'null'",
};

apiInstance.updateLogGcs(options)
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
**logging_gcs_name** | **String** |  |
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**compression_codec** | [**LoggingCompressionCodec**](../Model/LoggingCompressionCodec.md) |  | [optional]
**gzip_level** | **Number** | What level of gzip encoding to have when sending logs (default &#x60;0&#x60;, no compression). If an explicit non-zero value is set, then &#x60;compression_codec&#x60; will default to \\\&quot;gzip.\\\&quot; Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional] [default to 0]
**message_type** | [**LoggingMessageType**](../Model/LoggingMessageType.md) |  | [optional]
**period** | **Number** | How frequently log files are finalized so they can be available for reading (in seconds). | [optional] [default to 3600]
**timestamp_format** | **String** | Date and time in ISO 8601 format. | [optional]
**secret_key** | **String** | Your Google Cloud Platform account secret key. The &#x60;private_key&#x60; field in your service account authentication JSON. Required. | [optional]
**user** | **String** | Your Google Cloud Platform service account email address. The &#x60;client_email&#x60; field in your service account authentication JSON. Required. | [optional]
**bucket_name** | **String** | The name of the GCS bucket. | [optional]
**path** | [**String**](../Model/String.md) |  | [optional]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]

### Return type

[**LoggingGcsResponse**](LoggingGcsResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
