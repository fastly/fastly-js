# FastlyApi.RequestSettingsApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRequestSettings**](RequestSettingsApi.md#createRequestSettings) | **POST** /service/{service_id}/version/{version_id}/request_settings | Create a Request Settings object
[**deleteRequestSettings**](RequestSettingsApi.md#deleteRequestSettings) | **DELETE** /service/{service_id}/version/{version_id}/request_settings/{request_settings_name} | Delete a Request Settings object
[**getRequestSettings**](RequestSettingsApi.md#getRequestSettings) | **GET** /service/{service_id}/version/{version_id}/request_settings/{request_settings_name} | Get a Request Settings object
[**listRequestSettings**](RequestSettingsApi.md#listRequestSettings) | **GET** /service/{service_id}/version/{version_id}/request_settings | List Request Settings objects
[**updateRequestSettings**](RequestSettingsApi.md#updateRequestSettings) | **PUT** /service/{service_id}/version/{version_id}/request_settings/{request_settings_name} | Update a Request Settings object



## createRequestSettings

> ModelRequestSettings createRequestSettings(service_id, version_id)

Create a Request Settings object

Creates a new Request Settings object.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.RequestSettingsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.createRequestSettings(service_id, version_id).then((data) => {
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

[**ModelRequestSettings**](ModelRequestSettings.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteRequestSettings

> Object deleteRequestSettings(service_id, version_id, request_settings_name)

Delete a Request Settings object

Removes the specified Request Settings object.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.RequestSettingsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let request_settings_name = "request_settings_name_example"; // String | 
apiInstance.deleteRequestSettings(service_id, version_id, request_settings_name).then((data) => {
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
 **request_settings_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRequestSettings

> ModelRequestSettings getRequestSettings(service_id, version_id, request_settings_name)

Get a Request Settings object

Gets the specified Request Settings object.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.RequestSettingsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let request_settings_name = "request_settings_name_example"; // String | 
apiInstance.getRequestSettings(service_id, version_id, request_settings_name).then((data) => {
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
 **request_settings_name** | **String**|  | 

### Return type

[**ModelRequestSettings**](ModelRequestSettings.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRequestSettings

> [ModelRequestSettings] listRequestSettings(service_id, version_id)

List Request Settings objects

Returns a list of all Request Settings objects for the given service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.RequestSettingsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listRequestSettings(service_id, version_id).then((data) => {
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

[**[ModelRequestSettings]**](ModelRequestSettings.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateRequestSettings

> ModelRequestSettings updateRequestSettings(service_id, version_id, request_settings_name)

Update a Request Settings object

Updates the specified Request Settings object.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.RequestSettingsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let request_settings_name = "request_settings_name_example"; // String | 
apiInstance.updateRequestSettings(service_id, version_id, request_settings_name).then((data) => {
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
 **request_settings_name** | **String**|  | 

### Return type

[**ModelRequestSettings**](ModelRequestSettings.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

