# FastlyApi.LoggingNewrelicApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogNewrelic**](LoggingNewrelicApi.md#createLogNewrelic) | **POST** /service/{service_id}/version/{version_id}/logging/newrelic | Create a New Relic log endpoint
[**deleteLogNewrelic**](LoggingNewrelicApi.md#deleteLogNewrelic) | **DELETE** /service/{service_id}/version/{version_id}/logging/newrelic/{logging_newrelic_name} | Delete a New Relic log endpoint
[**getLogNewrelic**](LoggingNewrelicApi.md#getLogNewrelic) | **GET** /service/{service_id}/version/{version_id}/logging/newrelic/{logging_newrelic_name} | Get a New Relic log endpoint
[**listLogNewrelic**](LoggingNewrelicApi.md#listLogNewrelic) | **GET** /service/{service_id}/version/{version_id}/logging/newrelic | List New Relic log endpoints
[**updateLogNewrelic**](LoggingNewrelicApi.md#updateLogNewrelic) | **PUT** /service/{service_id}/version/{version_id}/logging/newrelic/{logging_newrelic_name} | Update a New Relic log endpoint



## createLogNewrelic

> ModelLoggingNewrelic createLogNewrelic(service_id, version_id, opts)

Create a New Relic log endpoint

Create a New Relic Logs logging object for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingNewrelicApi();
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
  'format': null, // Object | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that New Relic Logs can ingest.
  'token': "token_example" // String | The Insert API key from the Account page of your New Relic account. Required.
};
apiInstance.createLogNewrelic(service_id, version_id, opts).then((data) => {
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
 **format** | [**Object**](Object.md)| A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that New Relic Logs can ingest. | [optional] 
 **token** | **String**| The Insert API key from the Account page of your New Relic account. Required. | [optional] 

### Return type

[**ModelLoggingNewrelic**](ModelLoggingNewrelic.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteLogNewrelic

> Object deleteLogNewrelic(service_id, version_id, logging_newrelic_name)

Delete a New Relic log endpoint

Delete the New Relic Logs logging object for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingNewrelicApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_newrelic_name = "logging_newrelic_name_example"; // String | 
apiInstance.deleteLogNewrelic(service_id, version_id, logging_newrelic_name).then((data) => {
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
 **logging_newrelic_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogNewrelic

> ModelLoggingNewrelic getLogNewrelic(service_id, version_id, logging_newrelic_name)

Get a New Relic log endpoint

Get the details of a New Relic Logs logging object for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingNewrelicApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_newrelic_name = "logging_newrelic_name_example"; // String | 
apiInstance.getLogNewrelic(service_id, version_id, logging_newrelic_name).then((data) => {
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
 **logging_newrelic_name** | **String**|  | 

### Return type

[**ModelLoggingNewrelic**](ModelLoggingNewrelic.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLogNewrelic

> [ModelLoggingNewrelic] listLogNewrelic(service_id, version_id)

List New Relic log endpoints

List all of the New Relic Logs logging objects for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingNewrelicApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogNewrelic(service_id, version_id).then((data) => {
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

[**[ModelLoggingNewrelic]**](ModelLoggingNewrelic.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLogNewrelic

> ModelLoggingNewrelic updateLogNewrelic(service_id, version_id, logging_newrelic_name, opts)

Update a New Relic log endpoint

Update a New Relic Logs logging object for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingNewrelicApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_newrelic_name = "logging_newrelic_name_example"; // String | 
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
  'format': null, // Object | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that New Relic Logs can ingest.
  'token': "token_example" // String | The Insert API key from the Account page of your New Relic account. Required.
};
apiInstance.updateLogNewrelic(service_id, version_id, logging_newrelic_name, opts).then((data) => {
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
 **logging_newrelic_name** | **String**|  | 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **name** | **String**| The name for the real-time logging configuration. | [optional] 
 **placement** | [**LoggingPlacement**](LoggingPlacement.md)|  | [optional] 
 **format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md)|  | [optional] 
 **response_condition** | **String**| The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
 **format** | [**Object**](Object.md)| A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that New Relic Logs can ingest. | [optional] 
 **token** | **String**| The Insert API key from the Account page of your New Relic account. Required. | [optional] 

### Return type

[**ModelLoggingNewrelic**](ModelLoggingNewrelic.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

