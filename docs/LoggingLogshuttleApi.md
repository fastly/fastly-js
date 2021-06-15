# FastlyApi.LoggingLogshuttleApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogLogshuttle**](LoggingLogshuttleApi.md#createLogLogshuttle) | **POST** /service/{service_id}/version/{version_id}/logging/logshuttle | Create a Log Shuttle log endpoint
[**deleteLogLogshuttle**](LoggingLogshuttleApi.md#deleteLogLogshuttle) | **DELETE** /service/{service_id}/version/{version_id}/logging/logshuttle/{logging_logshuttle_name} | Delete a Log Shuttle log endpoint
[**getLogLogshuttle**](LoggingLogshuttleApi.md#getLogLogshuttle) | **GET** /service/{service_id}/version/{version_id}/logging/logshuttle/{logging_logshuttle_name} | Get a Log Shuttle log endpoint
[**listLogLogshuttle**](LoggingLogshuttleApi.md#listLogLogshuttle) | **GET** /service/{service_id}/version/{version_id}/logging/logshuttle | List Log Shuttle log endpoints
[**updateLogLogshuttle**](LoggingLogshuttleApi.md#updateLogLogshuttle) | **PUT** /service/{service_id}/version/{version_id}/logging/logshuttle/{logging_logshuttle_name} | Update a Log Shuttle log endpoint



## createLogLogshuttle

> ModelLoggingLogshuttle createLogLogshuttle(service_id, version_id, opts)

Create a Log Shuttle log endpoint

Create a Log Shuttle logging endpoint for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingLogshuttleApi();
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
  'token': "token_example", // String | The data authentication token associated with this endpoint.
  'url': "url_example" // String | The URL to stream logs to.
};
apiInstance.createLogLogshuttle(service_id, version_id, opts).then((data) => {
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
 **token** | **String**| The data authentication token associated with this endpoint. | [optional] 
 **url** | **String**| The URL to stream logs to. | [optional] 

### Return type

[**ModelLoggingLogshuttle**](ModelLoggingLogshuttle.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteLogLogshuttle

> Object deleteLogLogshuttle(service_id, version_id, logging_logshuttle_name)

Delete a Log Shuttle log endpoint

Delete the Log Shuttle logging endpoint for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingLogshuttleApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_logshuttle_name = "logging_logshuttle_name_example"; // String | 
apiInstance.deleteLogLogshuttle(service_id, version_id, logging_logshuttle_name).then((data) => {
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
 **logging_logshuttle_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogLogshuttle

> ModelLoggingLogshuttle getLogLogshuttle(service_id, version_id, logging_logshuttle_name)

Get a Log Shuttle log endpoint

Get the Log Shuttle logging endpoint for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingLogshuttleApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_logshuttle_name = "logging_logshuttle_name_example"; // String | 
apiInstance.getLogLogshuttle(service_id, version_id, logging_logshuttle_name).then((data) => {
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
 **logging_logshuttle_name** | **String**|  | 

### Return type

[**ModelLoggingLogshuttle**](ModelLoggingLogshuttle.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLogLogshuttle

> [ModelLoggingLogshuttle] listLogLogshuttle(service_id, version_id)

List Log Shuttle log endpoints

List all of the Log Shuttle logging endpoints for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingLogshuttleApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogLogshuttle(service_id, version_id).then((data) => {
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

[**[ModelLoggingLogshuttle]**](ModelLoggingLogshuttle.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLogLogshuttle

> ModelLoggingLogshuttle updateLogLogshuttle(service_id, version_id, logging_logshuttle_name, opts)

Update a Log Shuttle log endpoint

Update the Log Shuttle logging endpoint for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingLogshuttleApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_logshuttle_name = "logging_logshuttle_name_example"; // String | 
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
  'token': "token_example", // String | The data authentication token associated with this endpoint.
  'url': "url_example" // String | The URL to stream logs to.
};
apiInstance.updateLogLogshuttle(service_id, version_id, logging_logshuttle_name, opts).then((data) => {
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
 **logging_logshuttle_name** | **String**|  | 
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
 **token** | **String**| The data authentication token associated with this endpoint. | [optional] 
 **url** | **String**| The URL to stream logs to. | [optional] 

### Return type

[**ModelLoggingLogshuttle**](ModelLoggingLogshuttle.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

