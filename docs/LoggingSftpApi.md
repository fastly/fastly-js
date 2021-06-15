# FastlyApi.LoggingSftpApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogSftp**](LoggingSftpApi.md#createLogSftp) | **POST** /service/{service_id}/version/{version_id}/logging/sftp | Create an SFTP log endpoint
[**deleteLogSftp**](LoggingSftpApi.md#deleteLogSftp) | **DELETE** /service/{service_id}/version/{version_id}/logging/sftp/{logging_sftp_name} | Delete an SFTP log endpoint
[**getLogSftp**](LoggingSftpApi.md#getLogSftp) | **GET** /service/{service_id}/version/{version_id}/logging/sftp/{logging_sftp_name} | Get an SFTP log endpoint
[**listLogSftp**](LoggingSftpApi.md#listLogSftp) | **GET** /service/{service_id}/version/{version_id}/logging/sftp | List SFTP log endpoints
[**updateLogSftp**](LoggingSftpApi.md#updateLogSftp) | **PUT** /service/{service_id}/version/{version_id}/logging/sftp/{logging_sftp_name} | Update an SFTP log endpoint



## createLogSftp

> ModelLoggingSftp createLogSftp(service_id, version_id, opts)

Create an SFTP log endpoint

Create a SFTP for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingSftpApi();
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
  'address': "address_example", // String | A hostname or IPv4 address.
  'port': null, // Object | The port number.
  'password': "password_example", // String | The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
  'path': "'null'", // String | The path to upload logs to.
  'public_key': "'null'", // String | A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
  'secret_key': "'null'", // String | The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
  'ssh_known_hosts': "ssh_known_hosts_example", // String | A list of host keys for all hosts we can connect to over SFTP.
  'user': "user_example" // String | The username for the server.
};
apiInstance.createLogSftp(service_id, version_id, opts).then((data) => {
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
 **address** | **String**| A hostname or IPv4 address. | [optional] 
 **port** | [**Object**](Object.md)| The port number. | [optional] 
 **password** | **String**| The password for the server. If both &#x60;password&#x60; and &#x60;secret_key&#x60; are passed, &#x60;secret_key&#x60; will be used in preference. | [optional] 
 **path** | **String**| The path to upload logs to. | [optional] [default to &#39;null&#39;]
 **public_key** | **String**| A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
 **secret_key** | **String**| The SSH private key for the server. If both &#x60;password&#x60; and &#x60;secret_key&#x60; are passed, &#x60;secret_key&#x60; will be used in preference. | [optional] [default to &#39;null&#39;]
 **ssh_known_hosts** | **String**| A list of host keys for all hosts we can connect to over SFTP. | [optional] 
 **user** | **String**| The username for the server. | [optional] 

### Return type

[**ModelLoggingSftp**](ModelLoggingSftp.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteLogSftp

> Object deleteLogSftp(service_id, version_id, logging_sftp_name)

Delete an SFTP log endpoint

Delete the SFTP for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingSftpApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_sftp_name = "logging_sftp_name_example"; // String | 
apiInstance.deleteLogSftp(service_id, version_id, logging_sftp_name).then((data) => {
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
 **logging_sftp_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogSftp

> ModelLoggingSftp getLogSftp(service_id, version_id, logging_sftp_name)

Get an SFTP log endpoint

Get the SFTP for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingSftpApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_sftp_name = "logging_sftp_name_example"; // String | 
apiInstance.getLogSftp(service_id, version_id, logging_sftp_name).then((data) => {
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
 **logging_sftp_name** | **String**|  | 

### Return type

[**ModelLoggingSftp**](ModelLoggingSftp.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLogSftp

> [ModelLoggingSftp] listLogSftp(service_id, version_id)

List SFTP log endpoints

List all of the SFTPs for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingSftpApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogSftp(service_id, version_id).then((data) => {
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

[**[ModelLoggingSftp]**](ModelLoggingSftp.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLogSftp

> ModelLoggingSftp updateLogSftp(service_id, version_id, logging_sftp_name, opts)

Update an SFTP log endpoint

Update the SFTP for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingSftpApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_sftp_name = "logging_sftp_name_example"; // String | 
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
  'address': "address_example", // String | A hostname or IPv4 address.
  'port': null, // Object | The port number.
  'password': "password_example", // String | The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
  'path': "'null'", // String | The path to upload logs to.
  'public_key': "'null'", // String | A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
  'secret_key': "'null'", // String | The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
  'ssh_known_hosts': "ssh_known_hosts_example", // String | A list of host keys for all hosts we can connect to over SFTP.
  'user': "user_example" // String | The username for the server.
};
apiInstance.updateLogSftp(service_id, version_id, logging_sftp_name, opts).then((data) => {
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
 **logging_sftp_name** | **String**|  | 
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
 **address** | **String**| A hostname or IPv4 address. | [optional] 
 **port** | [**Object**](Object.md)| The port number. | [optional] 
 **password** | **String**| The password for the server. If both &#x60;password&#x60; and &#x60;secret_key&#x60; are passed, &#x60;secret_key&#x60; will be used in preference. | [optional] 
 **path** | **String**| The path to upload logs to. | [optional] [default to &#39;null&#39;]
 **public_key** | **String**| A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
 **secret_key** | **String**| The SSH private key for the server. If both &#x60;password&#x60; and &#x60;secret_key&#x60; are passed, &#x60;secret_key&#x60; will be used in preference. | [optional] [default to &#39;null&#39;]
 **ssh_known_hosts** | **String**| A list of host keys for all hosts we can connect to over SFTP. | [optional] 
 **user** | **String**| The username for the server. | [optional] 

### Return type

[**ModelLoggingSftp**](ModelLoggingSftp.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

