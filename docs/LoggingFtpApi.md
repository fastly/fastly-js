# FastlyApi.LoggingFtpApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogFtp**](LoggingFtpApi.md#createLogFtp) | **POST** /service/{service_id}/version/{version_id}/logging/ftp | Create an FTP log endpoint
[**deleteLogFtp**](LoggingFtpApi.md#deleteLogFtp) | **DELETE** /service/{service_id}/version/{version_id}/logging/ftp/{logging_ftp_name} | Delete an FTP log endpoint
[**getLogFtp**](LoggingFtpApi.md#getLogFtp) | **GET** /service/{service_id}/version/{version_id}/logging/ftp/{logging_ftp_name} | Get an FTP log endpoint
[**listLogFtp**](LoggingFtpApi.md#listLogFtp) | **GET** /service/{service_id}/version/{version_id}/logging/ftp | List FTP log endpoints
[**updateLogFtp**](LoggingFtpApi.md#updateLogFtp) | **PUT** /service/{service_id}/version/{version_id}/logging/ftp/{logging_ftp_name} | Update an FTP log endpoint



## `createLogFtp`

> createLogFtp(service_id, version_id, opts)

Create an FTP log endpoint

Create a FTP for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingFtpApi();
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
  'address': "address_example", // String | An hostname or IPv4 address.
  'hostname': "hostname_example", // String | Hostname used.
  'ipv4': "ipv4_example", // String | IPv4 address of the host.
  'password': "password_example", // String | The password for the server. For anonymous use an email address.
  'path': "path_example", // String | The path to upload log files to. If the path ends in `/` then it is treated as a directory.
  'port': 21, // Number | The port number.
  'public_key': "'null'", // String | A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
  'user': "user_example" // String | The username for the server. Can be anonymous.
};
apiInstance.createLogFtp(service_id, version_id, opts).then((data) => {
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

> deleteLogFtp(service_id, version_id, logging_ftp_name)

Delete an FTP log endpoint

Delete the FTP for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingFtpApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_ftp_name = "logging_ftp_name_example"; // String | 
apiInstance.deleteLogFtp(service_id, version_id, logging_ftp_name).then((data) => {
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
**logging_ftp_name** | **String** |  |

### Return type

**Object**


## `getLogFtp`

> getLogFtp(service_id, version_id, logging_ftp_name)

Get an FTP log endpoint

Get the FTP for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingFtpApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_ftp_name = "logging_ftp_name_example"; // String | 
apiInstance.getLogFtp(service_id, version_id, logging_ftp_name).then((data) => {
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
**logging_ftp_name** | **String** |  |

### Return type

[**LoggingFtpResponse**](LoggingFtpResponse.md)


## `listLogFtp`

> listLogFtp(service_id, version_id)

List FTP log endpoints

List all of the FTPs for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingFtpApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogFtp(service_id, version_id).then((data) => {
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

[**[LoggingFtpResponse]**](LoggingFtpResponse.md)


## `updateLogFtp`

> updateLogFtp(service_id, version_id, logging_ftp_name, opts)

Update an FTP log endpoint

Update the FTP for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingFtpApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_ftp_name = "logging_ftp_name_example"; // String | 
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
  'address': "address_example", // String | An hostname or IPv4 address.
  'hostname': "hostname_example", // String | Hostname used.
  'ipv4': "ipv4_example", // String | IPv4 address of the host.
  'password': "password_example", // String | The password for the server. For anonymous use an email address.
  'path': "path_example", // String | The path to upload log files to. If the path ends in `/` then it is treated as a directory.
  'port': 21, // Number | The port number.
  'public_key': "'null'", // String | A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
  'user': "user_example" // String | The username for the server. Can be anonymous.
};
apiInstance.updateLogFtp(service_id, version_id, logging_ftp_name, opts).then((data) => {
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
