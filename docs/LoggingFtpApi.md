# FastlyApi.LoggingFtpApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogFtp**](LoggingFtpApi.md#createLogFtp) | **POST** /service/{service_id}/version/{version_id}/logging/ftp | Create an FTP log endpoint
[**deleteLogFtp**](LoggingFtpApi.md#deleteLogFtp) | **DELETE** /service/{service_id}/version/{version_id}/logging/ftp/{logging_ftp_name} | Delete an FTP log endpoint
[**getLogFtp**](LoggingFtpApi.md#getLogFtp) | **GET** /service/{service_id}/version/{version_id}/logging/ftp/{logging_ftp_name} | Get an FTP log endpoint
[**listLogFtp**](LoggingFtpApi.md#listLogFtp) | **GET** /service/{service_id}/version/{version_id}/logging/ftp | List FTP log endpoints
[**updateLogFtp**](LoggingFtpApi.md#updateLogFtp) | **PUT** /service/{service_id}/version/{version_id}/logging/ftp/{logging_ftp_name} | Update an FTP log endpoint



## createLogFtp

> ModelLoggingFtp createLogFtp(service_id, version_id, opts)

Create an FTP log endpoint

Create a FTP for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingFtpApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
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
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **name** | **String**| The name for the real-time logging configuration. | [optional] 
 **placement** | [**LoggingPlacement**](LoggingPlacement.md)|  | [optional] 
 **format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md)|  | [optional] 
 **response_condition** | **String**| The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
 **format** | **String**| A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
 **message_type** | [**LoggingMessageType**](LoggingMessageType.md)|  | [optional] 
 **timestamp_format** | **String**| Date and time in ISO 8601 format. | [optional] 
 **period** | **Number**| How frequently log files are finalized so they can be available for reading (in seconds). | [optional] [default to 3600]
 **gzip_level** | **Number**| What level of gzip encoding to have when sending logs (default &#x60;0&#x60;, no compression). If an explicit non-zero value is set, then &#x60;compression_codec&#x60; will default to \\\&quot;gzip.\\\&quot; Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional] [default to 0]
 **compression_codec** | [**LoggingCompressionCodec**](LoggingCompressionCodec.md)|  | [optional] 
 **address** | **String**| An hostname or IPv4 address. | [optional] 
 **hostname** | **String**| Hostname used. | [optional] 
 **ipv4** | **String**| IPv4 address of the host. | [optional] 
 **password** | **String**| The password for the server. For anonymous use an email address. | [optional] 
 **path** | **String**| The path to upload log files to. If the path ends in &#x60;/&#x60; then it is treated as a directory. | [optional] 
 **port** | **Number**| The port number. | [optional] [default to 21]
 **public_key** | **String**| A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
 **user** | **String**| The username for the server. Can be anonymous. | [optional] 

### Return type

[**ModelLoggingFtp**](ModelLoggingFtp.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteLogFtp

> Object deleteLogFtp(service_id, version_id, logging_ftp_name)

Delete an FTP log endpoint

Delete the FTP for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

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
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **logging_ftp_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogFtp

> ModelLoggingFtp getLogFtp(service_id, version_id, logging_ftp_name)

Get an FTP log endpoint

Get the FTP for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

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
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **logging_ftp_name** | **String**|  | 

### Return type

[**ModelLoggingFtp**](ModelLoggingFtp.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLogFtp

> [ModelLoggingFtp] listLogFtp(service_id, version_id)

List FTP log endpoints

List all of the FTPs for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

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
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 

### Return type

[**[ModelLoggingFtp]**](ModelLoggingFtp.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLogFtp

> ModelLoggingFtp updateLogFtp(service_id, version_id, logging_ftp_name, opts)

Update an FTP log endpoint

Update the FTP for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingFtpApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_ftp_name = "logging_ftp_name_example"; // String | 
let opts = {
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
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
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **logging_ftp_name** | **String**|  | 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **name** | **String**| The name for the real-time logging configuration. | [optional] 
 **placement** | [**LoggingPlacement**](LoggingPlacement.md)|  | [optional] 
 **format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md)|  | [optional] 
 **response_condition** | **String**| The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
 **format** | **String**| A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
 **message_type** | [**LoggingMessageType**](LoggingMessageType.md)|  | [optional] 
 **timestamp_format** | **String**| Date and time in ISO 8601 format. | [optional] 
 **period** | **Number**| How frequently log files are finalized so they can be available for reading (in seconds). | [optional] [default to 3600]
 **gzip_level** | **Number**| What level of gzip encoding to have when sending logs (default &#x60;0&#x60;, no compression). If an explicit non-zero value is set, then &#x60;compression_codec&#x60; will default to \\\&quot;gzip.\\\&quot; Specifying both &#x60;compression_codec&#x60; and &#x60;gzip_level&#x60; in the same API request will result in an error. | [optional] [default to 0]
 **compression_codec** | [**LoggingCompressionCodec**](LoggingCompressionCodec.md)|  | [optional] 
 **address** | **String**| An hostname or IPv4 address. | [optional] 
 **hostname** | **String**| Hostname used. | [optional] 
 **ipv4** | **String**| IPv4 address of the host. | [optional] 
 **password** | **String**| The password for the server. For anonymous use an email address. | [optional] 
 **path** | **String**| The path to upload log files to. If the path ends in &#x60;/&#x60; then it is treated as a directory. | [optional] 
 **port** | **Number**| The port number. | [optional] [default to 21]
 **public_key** | **String**| A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
 **user** | **String**| The username for the server. Can be anonymous. | [optional] 

### Return type

[**ModelLoggingFtp**](ModelLoggingFtp.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

