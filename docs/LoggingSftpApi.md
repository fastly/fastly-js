# Fastly.LoggingSftpApi


```javascript
const apiInstance = new Fastly.LoggingSftpApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogSftp**](LoggingSftpApi.md#createLogSftp) | **POST** /service/{service_id}/version/{version_id}/logging/sftp | Create an SFTP log endpoint
[**deleteLogSftp**](LoggingSftpApi.md#deleteLogSftp) | **DELETE** /service/{service_id}/version/{version_id}/logging/sftp/{logging_sftp_name} | Delete an SFTP log endpoint
[**getLogSftp**](LoggingSftpApi.md#getLogSftp) | **GET** /service/{service_id}/version/{version_id}/logging/sftp/{logging_sftp_name} | Get an SFTP log endpoint
[**listLogSftp**](LoggingSftpApi.md#listLogSftp) | **GET** /service/{service_id}/version/{version_id}/logging/sftp | List SFTP log endpoints
[**updateLogSftp**](LoggingSftpApi.md#updateLogSftp) | **PUT** /service/{service_id}/version/{version_id}/logging/sftp/{logging_sftp_name} | Update an SFTP log endpoint



## `createLogSftp`

```javascript
createLogSftp({ service_id, version_id, [name, ][placement, ][format_version, ][response_condition, ][format, ][message_type, ][timestamp_format, ][period, ][gzip_level, ][compression_codec, ][address, ][port, ][password, ][path, ][public_key, ][secret_key, ][ssh_known_hosts, ][user] })
```

Create a SFTP for a particular service and version.

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
  port: null,
  password: "password_example",
  path: 'null',
  public_key: 'null',
  secret_key: 'null',
  ssh_known_hosts: "ssh_known_hosts_example",
  user: "user_example",
};

apiInstance.createLogSftp(options)
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
**address** | **String** | A hostname or IPv4 address. | [optional]
**port** | [**Object**](../Model/Object.md) | The port number. | [optional]
**password** | **String** | The password for the server. If both &#x60;password&#x60; and &#x60;secret_key&#x60; are passed, &#x60;secret_key&#x60; will be used in preference. | [optional]
**path** | **String** | The path to upload logs to. | [optional] [default to &#39;null&#39;]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
**secret_key** | **String** | The SSH private key for the server. If both &#x60;password&#x60; and &#x60;secret_key&#x60; are passed, &#x60;secret_key&#x60; will be used in preference. | [optional] [default to &#39;null&#39;]
**ssh_known_hosts** | **String** | A list of host keys for all hosts we can connect to over SFTP. | [optional]
**user** | **String** | The username for the server. | [optional]

### Return type

[**LoggingSftpResponse**](LoggingSftpResponse.md)


## `deleteLogSftp`

```javascript
deleteLogSftp({ service_id, version_id, logging_sftp_name })
```

Delete the SFTP for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_sftp_name: "logging_sftp_name_example", // required
};

apiInstance.deleteLogSftp(options)
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
**logging_sftp_name** | **String** |  |

### Return type

**Object**


## `getLogSftp`

```javascript
getLogSftp({ service_id, version_id, logging_sftp_name })
```

Get the SFTP for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_sftp_name: "logging_sftp_name_example", // required
};

apiInstance.getLogSftp(options)
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
**logging_sftp_name** | **String** |  |

### Return type

[**LoggingSftpResponse**](LoggingSftpResponse.md)


## `listLogSftp`

```javascript
listLogSftp({ service_id, version_id })
```

List all of the SFTPs for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listLogSftp(options)
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

[**[LoggingSftpResponse]**](LoggingSftpResponse.md)


## `updateLogSftp`

```javascript
updateLogSftp({ service_id, version_id, logging_sftp_name, [name, ][placement, ][format_version, ][response_condition, ][format, ][message_type, ][timestamp_format, ][period, ][gzip_level, ][compression_codec, ][address, ][port, ][password, ][path, ][public_key, ][secret_key, ][ssh_known_hosts, ][user] })
```

Update the SFTP for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_sftp_name: "logging_sftp_name_example", // required
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
  port: null,
  password: "password_example",
  path: 'null',
  public_key: 'null',
  secret_key: 'null',
  ssh_known_hosts: "ssh_known_hosts_example",
  user: "user_example",
};

apiInstance.updateLogSftp(options)
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
**logging_sftp_name** | **String** |  |
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
**address** | **String** | A hostname or IPv4 address. | [optional]
**port** | [**Object**](../Model/Object.md) | The port number. | [optional]
**password** | **String** | The password for the server. If both &#x60;password&#x60; and &#x60;secret_key&#x60; are passed, &#x60;secret_key&#x60; will be used in preference. | [optional]
**path** | **String** | The path to upload logs to. | [optional] [default to &#39;null&#39;]
**public_key** | **String** | A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
**secret_key** | **String** | The SSH private key for the server. If both &#x60;password&#x60; and &#x60;secret_key&#x60; are passed, &#x60;secret_key&#x60; will be used in preference. | [optional] [default to &#39;null&#39;]
**ssh_known_hosts** | **String** | A list of host keys for all hosts we can connect to over SFTP. | [optional]
**user** | **String** | The username for the server. | [optional]

### Return type

[**LoggingSftpResponse**](LoggingSftpResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
