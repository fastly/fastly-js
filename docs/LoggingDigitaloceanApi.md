# FastlyApi.LoggingDigitaloceanApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogDigocean**](LoggingDigitaloceanApi.md#createLogDigocean) | **POST** /service/{service_id}/version/{version_id}/logging/digitalocean | Create a DigitalOcean Spaces log endpoint
[**deleteLogDigocean**](LoggingDigitaloceanApi.md#deleteLogDigocean) | **DELETE** /service/{service_id}/version/{version_id}/logging/digitalocean/{logging_digitalocean_name} | Delete a DigitalOcean Spaces log endpoint
[**getLogDigocean**](LoggingDigitaloceanApi.md#getLogDigocean) | **GET** /service/{service_id}/version/{version_id}/logging/digitalocean/{logging_digitalocean_name} | Get a DigitalOcean Spaces log endpoint
[**listLogDigocean**](LoggingDigitaloceanApi.md#listLogDigocean) | **GET** /service/{service_id}/version/{version_id}/logging/digitalocean | List DigitalOcean Spaces log endpoints
[**updateLogDigocean**](LoggingDigitaloceanApi.md#updateLogDigocean) | **PUT** /service/{service_id}/version/{version_id}/logging/digitalocean/{logging_digitalocean_name} | Update a DigitalOcean Spaces log endpoint



## createLogDigocean

> ModelLoggingDigitalocean createLogDigocean(service_id, version_id, opts)

Create a DigitalOcean Spaces log endpoint

Create a DigitalOcean Space for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingDigitaloceanApi();
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
  'bucket_name': "bucket_name_example", // String | The name of the DigitalOcean Space.
  'access_key': "access_key_example", // String | Your DigitalOcean Spaces account access key.
  'secret_key': "secret_key_example", // String | Your DigitalOcean Spaces account secret key.
  'domain': "'nyc3.digitaloceanspaces.com'", // String | The domain of the DigitalOcean Spaces endpoint.
  'path': "'null'", // String | The path to upload logs to.
  'public_key': "'null'" // String | A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
};
apiInstance.createLogDigocean(service_id, version_id, opts).then((data) => {
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
 **bucket_name** | **String**| The name of the DigitalOcean Space. | [optional] 
 **access_key** | **String**| Your DigitalOcean Spaces account access key. | [optional] 
 **secret_key** | **String**| Your DigitalOcean Spaces account secret key. | [optional] 
 **domain** | **String**| The domain of the DigitalOcean Spaces endpoint. | [optional] [default to &#39;nyc3.digitaloceanspaces.com&#39;]
 **path** | **String**| The path to upload logs to. | [optional] [default to &#39;null&#39;]
 **public_key** | **String**| A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]

### Return type

[**ModelLoggingDigitalocean**](ModelLoggingDigitalocean.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteLogDigocean

> Object deleteLogDigocean(service_id, version_id, logging_digitalocean_name)

Delete a DigitalOcean Spaces log endpoint

Delete the DigitalOcean Space for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingDigitaloceanApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_digitalocean_name = "logging_digitalocean_name_example"; // String | 
apiInstance.deleteLogDigocean(service_id, version_id, logging_digitalocean_name).then((data) => {
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
 **logging_digitalocean_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogDigocean

> ModelLoggingDigitalocean getLogDigocean(service_id, version_id, logging_digitalocean_name)

Get a DigitalOcean Spaces log endpoint

Get the DigitalOcean Space for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingDigitaloceanApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_digitalocean_name = "logging_digitalocean_name_example"; // String | 
apiInstance.getLogDigocean(service_id, version_id, logging_digitalocean_name).then((data) => {
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
 **logging_digitalocean_name** | **String**|  | 

### Return type

[**ModelLoggingDigitalocean**](ModelLoggingDigitalocean.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLogDigocean

> [ModelLoggingDigitalocean] listLogDigocean(service_id, version_id)

List DigitalOcean Spaces log endpoints

List all of the DigitalOcean Spaces for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingDigitaloceanApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogDigocean(service_id, version_id).then((data) => {
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

[**[ModelLoggingDigitalocean]**](ModelLoggingDigitalocean.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLogDigocean

> ModelLoggingDigitalocean updateLogDigocean(service_id, version_id, logging_digitalocean_name, opts)

Update a DigitalOcean Spaces log endpoint

Update the DigitalOcean Space for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingDigitaloceanApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_digitalocean_name = "logging_digitalocean_name_example"; // String | 
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
  'bucket_name': "bucket_name_example", // String | The name of the DigitalOcean Space.
  'access_key': "access_key_example", // String | Your DigitalOcean Spaces account access key.
  'secret_key': "secret_key_example", // String | Your DigitalOcean Spaces account secret key.
  'domain': "'nyc3.digitaloceanspaces.com'", // String | The domain of the DigitalOcean Spaces endpoint.
  'path': "'null'", // String | The path to upload logs to.
  'public_key': "'null'" // String | A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
};
apiInstance.updateLogDigocean(service_id, version_id, logging_digitalocean_name, opts).then((data) => {
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
 **logging_digitalocean_name** | **String**|  | 
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
 **bucket_name** | **String**| The name of the DigitalOcean Space. | [optional] 
 **access_key** | **String**| Your DigitalOcean Spaces account access key. | [optional] 
 **secret_key** | **String**| Your DigitalOcean Spaces account secret key. | [optional] 
 **domain** | **String**| The domain of the DigitalOcean Spaces endpoint. | [optional] [default to &#39;nyc3.digitaloceanspaces.com&#39;]
 **path** | **String**| The path to upload logs to. | [optional] [default to &#39;null&#39;]
 **public_key** | **String**| A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]

### Return type

[**ModelLoggingDigitalocean**](ModelLoggingDigitalocean.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

