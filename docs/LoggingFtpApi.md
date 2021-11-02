# Fastly.LoggingFtpApi


```javascript
const apiInstance = new Fastly.LoggingFtpApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogFtp**](LoggingFtpApi.md#createLogFtp) | **POST** /service/{service_id}/version/{version_id}/logging/ftp | Create an FTP log endpoint
[**deleteLogFtp**](LoggingFtpApi.md#deleteLogFtp) | **DELETE** /service/{service_id}/version/{version_id}/logging/ftp/{logging_ftp_name} | Delete an FTP log endpoint
[**getLogFtp**](LoggingFtpApi.md#getLogFtp) | **GET** /service/{service_id}/version/{version_id}/logging/ftp/{logging_ftp_name} | Get an FTP log endpoint
[**listLogFtp**](LoggingFtpApi.md#listLogFtp) | **GET** /service/{service_id}/version/{version_id}/logging/ftp | List FTP log endpoints
[**updateLogFtp**](LoggingFtpApi.md#updateLogFtp) | **PUT** /service/{service_id}/version/{version_id}/logging/ftp/{logging_ftp_name} | Update an FTP log endpoint



## `createLogFtp`

```javascript
createLogFtp({ service_id, version_id, [name, ][placement, ][format_version, ][response_condition, ][format, ][message_type, ][timestamp_format, ][period, ][gzip_level, ][compression_codec, ][address, ][hostname, ][ipv4, ][password, ][path, ][port, ][public_key, ][user] })
```

Create a FTP for a particular service and version.

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
  address: "address_example",
  hostname: "hostname_example",
  ipv4: "ipv4_example",
  password: "password_example",
  path: "path_example",
  port: 21,
  public_key: 'null',
  user: "user_example",
};

apiInstance.createLogFtp(options)
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
**address** | **String** | An hostname or IPv4 address. | [optional]
**hostname** | **String** | Hostname used. | [optional]
**ipv4** | **String** | IPv4 address of the host. | [optional]
**password** | **String** | The password for the server. For anonymous use an email address. | [optional]
**path** | **String** | The path to upload log files to. If the path ends in &#x60;/&#x60; then it is treated as a directory. | [optional]
**port** | **Number** | The port number. | [optional] [default to 21]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
**user** | **String** | The username for the server. Can be anonymous. | [optional]

### Return type

[**LoggingFtpResponse**](LoggingFtpResponse.md)


## `deleteLogFtp`

```javascript
deleteLogFtp({ service_id, version_id, logging_ftp_name })
```

Delete the FTP for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_ftp_name: "logging_ftp_name_example", // required
};

apiInstance.deleteLogFtp(options)
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
**logging_ftp_name** | **String** |  |

### Return type

**Object**


## `getLogFtp`

```javascript
getLogFtp({ service_id, version_id, logging_ftp_name })
```

Get the FTP for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_ftp_name: "logging_ftp_name_example", // required
};

apiInstance.getLogFtp(options)
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
**logging_ftp_name** | **String** |  |

### Return type

[**LoggingFtpResponse**](LoggingFtpResponse.md)


## `listLogFtp`

```javascript
listLogFtp({ service_id, version_id })
```

List all of the FTPs for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listLogFtp(options)
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

[**[LoggingFtpResponse]**](LoggingFtpResponse.md)


## `updateLogFtp`

```javascript
updateLogFtp({ service_id, version_id, logging_ftp_name, [name, ][placement, ][format_version, ][response_condition, ][format, ][message_type, ][timestamp_format, ][period, ][gzip_level, ][compression_codec, ][address, ][hostname, ][ipv4, ][password, ][path, ][port, ][public_key, ][user] })
```

Update the FTP for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_ftp_name: "logging_ftp_name_example", // required
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
  address: "address_example",
  hostname: "hostname_example",
  ipv4: "ipv4_example",
  password: "password_example",
  path: "path_example",
  port: 21,
  public_key: 'null',
  user: "user_example",
};

apiInstance.updateLogFtp(options)
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
**logging_ftp_name** | **String** |  |
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
**address** | **String** | An hostname or IPv4 address. | [optional]
**hostname** | **String** | Hostname used. | [optional]
**ipv4** | **String** | IPv4 address of the host. | [optional]
**password** | **String** | The password for the server. For anonymous use an email address. | [optional]
**path** | **String** | The path to upload log files to. If the path ends in &#x60;/&#x60; then it is treated as a directory. | [optional]
**port** | **Number** | The port number. | [optional] [default to 21]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
**user** | **String** | The username for the server. Can be anonymous. | [optional]

### Return type

[**LoggingFtpResponse**](LoggingFtpResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
