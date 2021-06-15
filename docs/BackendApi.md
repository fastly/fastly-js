# FastlyApi.BackendApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBackend**](BackendApi.md#createBackend) | **POST** /service/{service_id}/version/{version_id}/backend | Create a backend
[**deleteBackend**](BackendApi.md#deleteBackend) | **DELETE** /service/{service_id}/version/{version_id}/backend/{backend_name} | Delete a backend
[**getBackend**](BackendApi.md#getBackend) | **GET** /service/{service_id}/version/{version_id}/backend/{backend_name} | Describe a backend
[**listBackends**](BackendApi.md#listBackends) | **GET** /service/{service_id}/version/{version_id}/backend | List backends
[**updateBackend**](BackendApi.md#updateBackend) | **PUT** /service/{service_id}/version/{version_id}/backend/{backend_name} | Update a backend



## createBackend

> ModelBackend createBackend(service_id, version_id)

Create a backend

Create a backend for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.BackendApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.createBackend(service_id, version_id).then((data) => {
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

[**ModelBackend**](ModelBackend.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteBackend

> Object deleteBackend(service_id, version_id, backend_name)

Delete a backend

Delete the backend for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.BackendApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let backend_name = "backend_name_example"; // String | 
apiInstance.deleteBackend(service_id, version_id, backend_name).then((data) => {
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
 **backend_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBackend

> ModelBackend getBackend(service_id, version_id, backend_name)

Describe a backend

Get the backend for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.BackendApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let backend_name = "backend_name_example"; // String | 
apiInstance.getBackend(service_id, version_id, backend_name).then((data) => {
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
 **backend_name** | **String**|  | 

### Return type

[**ModelBackend**](ModelBackend.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listBackends

> [ModelBackend] listBackends(service_id, version_id)

List backends

List all backends for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.BackendApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listBackends(service_id, version_id).then((data) => {
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

[**[ModelBackend]**](ModelBackend.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateBackend

> ModelBackend updateBackend(service_id, version_id, backend_name)

Update a backend

Update the backend for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.BackendApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let backend_name = "backend_name_example"; // String | 
apiInstance.updateBackend(service_id, version_id, backend_name).then((data) => {
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
 **backend_name** | **String**|  | 

### Return type

[**ModelBackend**](ModelBackend.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

