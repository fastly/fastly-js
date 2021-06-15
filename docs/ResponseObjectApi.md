# FastlyApi.ResponseObjectApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createResponseObject**](ResponseObjectApi.md#createResponseObject) | **POST** /service/{service_id}/version/{version_id}/response_object | Create a Response object
[**deleteResponseObject**](ResponseObjectApi.md#deleteResponseObject) | **DELETE** /service/{service_id}/version/{version_id}/response_object/{response_object_name} | Delete a Response Object
[**getResponseObject**](ResponseObjectApi.md#getResponseObject) | **GET** /service/{service_id}/version/{version_id}/response_object/{response_object_name} | Get a Response object
[**listResponseObjects**](ResponseObjectApi.md#listResponseObjects) | **GET** /service/{service_id}/version/{version_id}/response_object | List Response objects
[**updateResponseObject**](ResponseObjectApi.md#updateResponseObject) | **PUT** /service/{service_id}/version/{version_id}/response_object/{response_object_name} | Update a Response object



## createResponseObject

> ModelResponseObject createResponseObject(service_id, version_id)

Create a Response object

Creates a new Response Object.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ResponseObjectApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.createResponseObject(service_id, version_id).then((data) => {
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

[**ModelResponseObject**](ModelResponseObject.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteResponseObject

> Object deleteResponseObject(service_id, version_id, response_object_name)

Delete a Response Object

Deletes the specified Response Object.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ResponseObjectApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let response_object_name = "response_object_name_example"; // String | 
apiInstance.deleteResponseObject(service_id, version_id, response_object_name).then((data) => {
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
 **response_object_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getResponseObject

> ModelResponseObject getResponseObject(service_id, version_id, response_object_name)

Get a Response object

Gets the specified Response Object.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ResponseObjectApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let response_object_name = "response_object_name_example"; // String | 
apiInstance.getResponseObject(service_id, version_id, response_object_name).then((data) => {
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
 **response_object_name** | **String**|  | 

### Return type

[**ModelResponseObject**](ModelResponseObject.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listResponseObjects

> [ModelResponseObject] listResponseObjects(service_id, version_id)

List Response objects

Returns all Response Objects for the specified service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ResponseObjectApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listResponseObjects(service_id, version_id).then((data) => {
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

[**[ModelResponseObject]**](ModelResponseObject.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateResponseObject

> ModelResponseObject updateResponseObject(service_id, version_id, response_object_name)

Update a Response object

Updates the specified Response Object.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ResponseObjectApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let response_object_name = "response_object_name_example"; // String | 
apiInstance.updateResponseObject(service_id, version_id, response_object_name).then((data) => {
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
 **response_object_name** | **String**|  | 

### Return type

[**ModelResponseObject**](ModelResponseObject.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

