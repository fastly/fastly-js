# FastlyApi.LoggingDatadogApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogDatadog**](LoggingDatadogApi.md#createLogDatadog) | **POST** /service/{service_id}/version/{version_id}/logging/datadog | Create a Datadog log endpoint
[**deleteLogDatadog**](LoggingDatadogApi.md#deleteLogDatadog) | **DELETE** /service/{service_id}/version/{version_id}/logging/datadog/{logging_datadog_name} | Delete a Datadog log endpoint
[**getLogDatadog**](LoggingDatadogApi.md#getLogDatadog) | **GET** /service/{service_id}/version/{version_id}/logging/datadog/{logging_datadog_name} | Get a Datadog log endpoint
[**listLogDatadog**](LoggingDatadogApi.md#listLogDatadog) | **GET** /service/{service_id}/version/{version_id}/logging/datadog | List Datadog log endpoints
[**updateLogDatadog**](LoggingDatadogApi.md#updateLogDatadog) | **PUT** /service/{service_id}/version/{version_id}/logging/datadog/{logging_datadog_name} | Update a Datadog log endpoint



## createLogDatadog

> ModelLoggingDatadog createLogDatadog(service_id, version_id, opts)

Create a Datadog log endpoint

Create a Datadog logging object for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingDatadogApi();
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
  'format': null, // Object | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Datadog can ingest. 
  'region': "'US'", // String | The region that log data will be sent to.
  'token': "token_example" // String | The API key from your Datadog account. Required.
};
apiInstance.createLogDatadog(service_id, version_id, opts).then((data) => {
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
 **format** | [**Object**](Object.md)| A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Datadog can ingest.  | [optional] 
 **region** | **String**| The region that log data will be sent to. | [optional] [default to &#39;US&#39;]
 **token** | **String**| The API key from your Datadog account. Required. | [optional] 

### Return type

[**ModelLoggingDatadog**](ModelLoggingDatadog.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteLogDatadog

> Object deleteLogDatadog(service_id, version_id, logging_datadog_name)

Delete a Datadog log endpoint

Delete the Datadog logging object for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingDatadogApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_datadog_name = "logging_datadog_name_example"; // String | 
apiInstance.deleteLogDatadog(service_id, version_id, logging_datadog_name).then((data) => {
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
 **logging_datadog_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogDatadog

> ModelLoggingDatadog getLogDatadog(service_id, version_id, logging_datadog_name)

Get a Datadog log endpoint

Get the details for a Datadog logging object for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingDatadogApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_datadog_name = "logging_datadog_name_example"; // String | 
apiInstance.getLogDatadog(service_id, version_id, logging_datadog_name).then((data) => {
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
 **logging_datadog_name** | **String**|  | 

### Return type

[**ModelLoggingDatadog**](ModelLoggingDatadog.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLogDatadog

> [ModelLoggingDatadog] listLogDatadog(service_id, version_id)

List Datadog log endpoints

List all of the Datadog logging objects for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingDatadogApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogDatadog(service_id, version_id).then((data) => {
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

[**[ModelLoggingDatadog]**](ModelLoggingDatadog.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLogDatadog

> ModelLoggingDatadog updateLogDatadog(service_id, version_id, logging_datadog_name)

Update a Datadog log endpoint

Update the Datadog logging object for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingDatadogApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_datadog_name = "logging_datadog_name_example"; // String | 
apiInstance.updateLogDatadog(service_id, version_id, logging_datadog_name).then((data) => {
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
 **logging_datadog_name** | **String**|  | 

### Return type

[**ModelLoggingDatadog**](ModelLoggingDatadog.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

