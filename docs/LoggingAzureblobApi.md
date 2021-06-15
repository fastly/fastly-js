# FastlyApi.LoggingAzureblobApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogAzure**](LoggingAzureblobApi.md#createLogAzure) | **POST** /service/{service_id}/version/{version_id}/logging/azureblob | Create an Azure Blob Storage log endpoint
[**deleteLoogAzure**](LoggingAzureblobApi.md#deleteLoogAzure) | **DELETE** /service/{service_id}/version/{version_id}/logging/azureblob/{logging_azureblob_name} | Delete the Azure Blob Storage log endpoint
[**getLogAzure**](LoggingAzureblobApi.md#getLogAzure) | **GET** /service/{service_id}/version/{version_id}/logging/azureblob/{logging_azureblob_name} | Get an Azure Blob Storage log endpoint
[**listLogAzure**](LoggingAzureblobApi.md#listLogAzure) | **GET** /service/{service_id}/version/{version_id}/logging/azureblob | List Azure Blob Storage log endpoints
[**updateLogAzure**](LoggingAzureblobApi.md#updateLogAzure) | **PUT** /service/{service_id}/version/{version_id}/logging/azureblob/{logging_azureblob_name} | Update an Azure Blob Storage log endpoint



## createLogAzure

> ModelLoggingAzureblob createLogAzure(service_id, version_id, opts)

Create an Azure Blob Storage log endpoint

Create an Azure Blob Storage logging endpoint for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingAzureblobApi();
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
  'path': "'null'", // String | The path to upload logs to.
  'account_name': "account_name_example", // String | The unique Azure Blob Storage namespace in which your data objects are stored. Required.
  'container': "container_example", // String | The name of the Azure Blob Storage container in which to store logs. Required.
  'sas_token': "sas_token_example", // String | The Azure shared access signature providing write access to the blob service objects. Be sure to update your token before it expires or the logging functionality will not work. Required.
  'public_key': "'null'", // String | A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
  'file_max_bytes': 56 // Number | The maximum number of bytes for each uploaded file. A value of 0 can be used to indicate there is no limit on the size of uploaded files, otherwise the minimum value is 1048576 bytes (1 MiB.)
};
apiInstance.createLogAzure(service_id, version_id, opts).then((data) => {
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
 **path** | **String**| The path to upload logs to. | [optional] [default to &#39;null&#39;]
 **account_name** | **String**| The unique Azure Blob Storage namespace in which your data objects are stored. Required. | [optional] 
 **container** | **String**| The name of the Azure Blob Storage container in which to store logs. Required. | [optional] 
 **sas_token** | **String**| The Azure shared access signature providing write access to the blob service objects. Be sure to update your token before it expires or the logging functionality will not work. Required. | [optional] 
 **public_key** | **String**| A PGP public key that Fastly will use to encrypt your log files before writing them to disk. | [optional] [default to &#39;null&#39;]
 **file_max_bytes** | **Number**| The maximum number of bytes for each uploaded file. A value of 0 can be used to indicate there is no limit on the size of uploaded files, otherwise the minimum value is 1048576 bytes (1 MiB.) | [optional] 

### Return type

[**ModelLoggingAzureblob**](ModelLoggingAzureblob.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteLoogAzure

> Object deleteLoogAzure(service_id, version_id, logging_azureblob_name)

Delete the Azure Blob Storage log endpoint

Delete the Azure Blob Storage logging endpoint for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingAzureblobApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_azureblob_name = "logging_azureblob_name_example"; // String | 
apiInstance.deleteLoogAzure(service_id, version_id, logging_azureblob_name).then((data) => {
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
 **logging_azureblob_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogAzure

> ModelLoggingAzureblob getLogAzure(service_id, version_id, logging_azureblob_name)

Get an Azure Blob Storage log endpoint

Get the Azure Blob Storage logging endpoint for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingAzureblobApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_azureblob_name = "logging_azureblob_name_example"; // String | 
apiInstance.getLogAzure(service_id, version_id, logging_azureblob_name).then((data) => {
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
 **logging_azureblob_name** | **String**|  | 

### Return type

[**ModelLoggingAzureblob**](ModelLoggingAzureblob.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLogAzure

> [ModelLoggingAzureblob] listLogAzure(service_id, version_id)

List Azure Blob Storage log endpoints

List all of the Azure Blob Storage logging endpoints for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingAzureblobApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogAzure(service_id, version_id).then((data) => {
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

[**[ModelLoggingAzureblob]**](ModelLoggingAzureblob.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLogAzure

> ModelLoggingAzureblob updateLogAzure(service_id, version_id, logging_azureblob_name)

Update an Azure Blob Storage log endpoint

Update the Azure Blob Storage logging endpoint for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingAzureblobApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_azureblob_name = "logging_azureblob_name_example"; // String | 
apiInstance.updateLogAzure(service_id, version_id, logging_azureblob_name).then((data) => {
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
 **logging_azureblob_name** | **String**|  | 

### Return type

[**ModelLoggingAzureblob**](ModelLoggingAzureblob.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

