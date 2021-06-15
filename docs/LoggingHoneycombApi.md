# FastlyApi.LoggingHoneycombApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogHoneycomb**](LoggingHoneycombApi.md#createLogHoneycomb) | **POST** /service/{service_id}/version/{version_id}/logging/honeycomb | Create a Honeycomb log endpoint
[**deleteLogHoneycomb**](LoggingHoneycombApi.md#deleteLogHoneycomb) | **DELETE** /service/{service_id}/version/{version_id}/logging/honeycomb/{logging_honeycomb_name} | Delete the Honeycomb log endpoint
[**getLogHoneycomb**](LoggingHoneycombApi.md#getLogHoneycomb) | **GET** /service/{service_id}/version/{version_id}/logging/honeycomb/{logging_honeycomb_name} | Get a Honeycomb log endpoint
[**listLogHoneycomb**](LoggingHoneycombApi.md#listLogHoneycomb) | **GET** /service/{service_id}/version/{version_id}/logging/honeycomb | List Honeycomb log endpoints
[**updateLogHoneycomb**](LoggingHoneycombApi.md#updateLogHoneycomb) | **PUT** /service/{service_id}/version/{version_id}/logging/honeycomb/{logging_honeycomb_name} | Update a Honeycomb log endpoint



## createLogHoneycomb

> ModelLoggingHoneycomb createLogHoneycomb(service_id, version_id, opts)

Create a Honeycomb log endpoint

Create a Honeycomb logging object for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingHoneycombApi();
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
  'format': null, // Object | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest.
  'dataset': "dataset_example", // String | The Honeycomb Dataset you want to log to.
  'token': "token_example" // String | The Write Key from the Account page of your Honeycomb account.
};
apiInstance.createLogHoneycomb(service_id, version_id, opts).then((data) => {
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
 **format** | [**Object**](Object.md)| A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest. | [optional] 
 **dataset** | **String**| The Honeycomb Dataset you want to log to. | [optional] 
 **token** | **String**| The Write Key from the Account page of your Honeycomb account. | [optional] 

### Return type

[**ModelLoggingHoneycomb**](ModelLoggingHoneycomb.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteLogHoneycomb

> Object deleteLogHoneycomb(service_id, version_id, logging_honeycomb_name)

Delete the Honeycomb log endpoint

Delete the Honeycomb logging object for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingHoneycombApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_honeycomb_name = "logging_honeycomb_name_example"; // String | 
apiInstance.deleteLogHoneycomb(service_id, version_id, logging_honeycomb_name).then((data) => {
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
 **logging_honeycomb_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogHoneycomb

> ModelLoggingHoneycomb getLogHoneycomb(service_id, version_id, logging_honeycomb_name)

Get a Honeycomb log endpoint

Get the details of a Honeycomb logging object for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingHoneycombApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_honeycomb_name = "logging_honeycomb_name_example"; // String | 
apiInstance.getLogHoneycomb(service_id, version_id, logging_honeycomb_name).then((data) => {
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
 **logging_honeycomb_name** | **String**|  | 

### Return type

[**ModelLoggingHoneycomb**](ModelLoggingHoneycomb.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLogHoneycomb

> [ModelLoggingHoneycomb] listLogHoneycomb(service_id, version_id)

List Honeycomb log endpoints

List all of the Honeycomb logging objects for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingHoneycombApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogHoneycomb(service_id, version_id).then((data) => {
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

[**[ModelLoggingHoneycomb]**](ModelLoggingHoneycomb.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLogHoneycomb

> ModelLoggingHoneycomb updateLogHoneycomb(service_id, version_id, logging_honeycomb_name, opts)

Update a Honeycomb log endpoint

Update a Honeycomb logging object for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingHoneycombApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_honeycomb_name = "logging_honeycomb_name_example"; // String | 
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
  'format': null, // Object | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest.
  'dataset': "dataset_example", // String | The Honeycomb Dataset you want to log to.
  'token': "token_example" // String | The Write Key from the Account page of your Honeycomb account.
};
apiInstance.updateLogHoneycomb(service_id, version_id, logging_honeycomb_name, opts).then((data) => {
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
 **logging_honeycomb_name** | **String**|  | 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **name** | **String**| The name for the real-time logging configuration. | [optional] 
 **placement** | [**LoggingPlacement**](LoggingPlacement.md)|  | [optional] 
 **format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md)|  | [optional] 
 **response_condition** | **String**| The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
 **format** | [**Object**](Object.md)| A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest. | [optional] 
 **dataset** | **String**| The Honeycomb Dataset you want to log to. | [optional] 
 **token** | **String**| The Write Key from the Account page of your Honeycomb account. | [optional] 

### Return type

[**ModelLoggingHoneycomb**](ModelLoggingHoneycomb.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

