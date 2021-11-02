# Fastly.LoggingAzureblobApi


```javascript
const apiInstance = new Fastly.LoggingAzureblobApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogAzure**](LoggingAzureblobApi.md#createLogAzure) | **POST** /service/{service_id}/version/{version_id}/logging/azureblob | Create an Azure Blob Storage log endpoint
[**deleteLogAzure**](LoggingAzureblobApi.md#deleteLogAzure) | **DELETE** /service/{service_id}/version/{version_id}/logging/azureblob/{logging_azureblob_name} | Delete the Azure Blob Storage log endpoint
[**getLogAzure**](LoggingAzureblobApi.md#getLogAzure) | **GET** /service/{service_id}/version/{version_id}/logging/azureblob/{logging_azureblob_name} | Get an Azure Blob Storage log endpoint
[**listLogAzure**](LoggingAzureblobApi.md#listLogAzure) | **GET** /service/{service_id}/version/{version_id}/logging/azureblob | List Azure Blob Storage log endpoints
[**updateLogAzure**](LoggingAzureblobApi.md#updateLogAzure) | **PUT** /service/{service_id}/version/{version_id}/logging/azureblob/{logging_azureblob_name} | Update an Azure Blob Storage log endpoint



## `createLogAzure`

```javascript
createLogAzure({ service_id, version_id, [name, ][placement, ][format_version, ][response_condition, ][format, ][message_type, ][timestamp_format, ][period, ][gzip_level, ][compression_codec, ][path, ][account_name, ][container, ][sas_token, ][public_key, ][file_max_bytes] })
```

Create an Azure Blob Storage logging endpoint for a particular service and version.

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
  path: 'null',
  account_name: "account_name_example",
  container: "container_example",
  sas_token: "sas_token_example",
  public_key: 'null',
  file_max_bytes: 56,
};

apiInstance.createLogAzure(options)
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
**path** | **String** | The path to upload logs to. | [optional] [default to &#39;null&#39;]
**account_name** | **String** | The unique Azure Blob Storage namespace in which your data objects are stored. Required. | [optional]
**container** | **String** | The name of the Azure Blob Storage container in which to store logs. Required. | [optional]
**sas_token** | **String** | The Azure shared access signature providing write access to the blob service objects. Be sure to update your token before it expires or the logging functionality will not work. Required. | [optional]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
**file_max_bytes** | **Number** | The maximum number of bytes for each uploaded file. A value of 0 can be used to indicate there is no limit on the size of uploaded files, otherwise the minimum value is 1048576 bytes (1 MiB.) | [optional]

### Return type

[**LoggingAzureblobResponse**](LoggingAzureblobResponse.md)


## `deleteLogAzure`

```javascript
deleteLogAzure({ service_id, version_id, logging_azureblob_name })
```

Delete the Azure Blob Storage logging endpoint for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_azureblob_name: "logging_azureblob_name_example", // required
};

apiInstance.deleteLogAzure(options)
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
**logging_azureblob_name** | **String** |  |

### Return type

**Object**


## `getLogAzure`

```javascript
getLogAzure({ service_id, version_id, logging_azureblob_name })
```

Get the Azure Blob Storage logging endpoint for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_azureblob_name: "logging_azureblob_name_example", // required
};

apiInstance.getLogAzure(options)
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
**logging_azureblob_name** | **String** |  |

### Return type

[**LoggingAzureblobResponse**](LoggingAzureblobResponse.md)


## `listLogAzure`

```javascript
listLogAzure({ service_id, version_id })
```

List all of the Azure Blob Storage logging endpoints for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listLogAzure(options)
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

[**[LoggingAzureblobResponse]**](LoggingAzureblobResponse.md)


## `updateLogAzure`

```javascript
updateLogAzure({ service_id, version_id, logging_azureblob_name, [name, ][placement, ][format_version, ][response_condition, ][format, ][message_type, ][timestamp_format, ][period, ][gzip_level, ][compression_codec, ][path, ][account_name, ][container, ][sas_token, ][public_key, ][file_max_bytes] })
```

Update the Azure Blob Storage logging endpoint for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_azureblob_name: "logging_azureblob_name_example", // required
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
  path: 'null',
  account_name: "account_name_example",
  container: "container_example",
  sas_token: "sas_token_example",
  public_key: 'null',
  file_max_bytes: 56,
};

apiInstance.updateLogAzure(options)
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
**logging_azureblob_name** | **String** |  |
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
**path** | **String** | The path to upload logs to. | [optional] [default to &#39;null&#39;]
**account_name** | **String** | The unique Azure Blob Storage namespace in which your data objects are stored. Required. | [optional]
**container** | **String** | The name of the Azure Blob Storage container in which to store logs. Required. | [optional]
**sas_token** | **String** | The Azure shared access signature providing write access to the blob service objects. Be sure to update your token before it expires or the logging functionality will not work. Required. | [optional]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
**file_max_bytes** | **Number** | The maximum number of bytes for each uploaded file. A value of 0 can be used to indicate there is no limit on the size of uploaded files, otherwise the minimum value is 1048576 bytes (1 MiB.) | [optional]

### Return type

[**LoggingAzureblobResponse**](LoggingAzureblobResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
