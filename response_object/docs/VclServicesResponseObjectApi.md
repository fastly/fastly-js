# ResponseObject.VclServicesResponseObjectApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createResponseObject**](VclServicesResponseObjectApi.md#createResponseObject) | **POST** /service/{service_id}/version/{version_id}/response_object | Create a Response object
[**deleteResponseObject**](VclServicesResponseObjectApi.md#deleteResponseObject) | **DELETE** /service/{service_id}/version/{version_id}/response_object/{response_object_name} | Delete a Response Object
[**getResponseObject**](VclServicesResponseObjectApi.md#getResponseObject) | **GET** /service/{service_id}/version/{version_id}/response_object/{response_object_name} | Get a Response object
[**listResponseObjects**](VclServicesResponseObjectApi.md#listResponseObjects) | **GET** /service/{service_id}/version/{version_id}/response_object | List Response objects
[**updateResponseObject**](VclServicesResponseObjectApi.md#updateResponseObject) | **PUT** /service/{service_id}/version/{version_id}/response_object/{response_object_name} | Update a Response object



## createResponseObject

> InlineResponse200 createResponseObject(serviceId, versionId)

Create a Response object

Creates a new Response Object.

### Example

```javascript
import ResponseObject from 'response_object';
let defaultClient = ResponseObject.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new ResponseObject.VclServicesResponseObjectApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.createResponseObject(serviceId, versionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteResponseObject

> Object deleteResponseObject(serviceId, versionId, responseObjectName)

Delete a Response Object

Deletes the specified Response Object.

### Example

```javascript
import ResponseObject from 'response_object';
let defaultClient = ResponseObject.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new ResponseObject.VclServicesResponseObjectApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let responseObjectName = test-response; // String | 
apiInstance.deleteResponseObject(serviceId, versionId, responseObjectName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 
 **responseObjectName** | **String**|  | 

### Return type

**Object**

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getResponseObject

> InlineResponse200 getResponseObject(serviceId, versionId, responseObjectName)

Get a Response object

Gets the specified Response Object.

### Example

```javascript
import ResponseObject from 'response_object';
let defaultClient = ResponseObject.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new ResponseObject.VclServicesResponseObjectApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let responseObjectName = test-response; // String | 
apiInstance.getResponseObject(serviceId, versionId, responseObjectName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 
 **responseObjectName** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listResponseObjects

> [InlineResponse200] listResponseObjects(serviceId, versionId)

List Response objects

Returns all Response Objects for the specified service and version.

### Example

```javascript
import ResponseObject from 'response_object';
let defaultClient = ResponseObject.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new ResponseObject.VclServicesResponseObjectApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.listResponseObjects(serviceId, versionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 

### Return type

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateResponseObject

> InlineResponse200 updateResponseObject(serviceId, versionId, responseObjectName)

Update a Response object

Updates the specified Response Object.

### Example

```javascript
import ResponseObject from 'response_object';
let defaultClient = ResponseObject.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new ResponseObject.VclServicesResponseObjectApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let responseObjectName = test-response; // String | 
apiInstance.updateResponseObject(serviceId, versionId, responseObjectName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 
 **responseObjectName** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

