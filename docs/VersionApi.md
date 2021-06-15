# FastlyApi.VersionApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateServiceVersion**](VersionApi.md#activateServiceVersion) | **PUT** /service/{service_id}/version/{version_id}/activate | Activate a service version
[**cloneServiceVersion**](VersionApi.md#cloneServiceVersion) | **PUT** /service/{service_id}/version/{version_id}/clone | Clone a service version
[**createServiceVersion**](VersionApi.md#createServiceVersion) | **POST** /service/{service_id}/version | Create a service version
[**deactivateServiceVersion**](VersionApi.md#deactivateServiceVersion) | **PUT** /service/{service_id}/version/{version_id}/deactivate | Deactivate a service version
[**getServiceVersion**](VersionApi.md#getServiceVersion) | **GET** /service/{service_id}/version/{version_id} | Get a version of a service
[**listServiceVersions**](VersionApi.md#listServiceVersions) | **GET** /service/{service_id}/version | List versions of a service
[**lockServiceVersion**](VersionApi.md#lockServiceVersion) | **PUT** /service/{service_id}/version/{version_id}/lock | Lock a service version
[**updateServiceVersion**](VersionApi.md#updateServiceVersion) | **PUT** /service/{service_id}/version/{version_id} | Update a service version
[**validateServiceVersion**](VersionApi.md#validateServiceVersion) | **GET** /service/{service_id}/version/{version_id}/validate | Validate a service version



## activateServiceVersion

> ModelVersion activateServiceVersion(service_id, version_id)

Activate a service version

Activate the current version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.VersionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.activateServiceVersion(service_id, version_id).then((data) => {
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

[**ModelVersion**](ModelVersion.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cloneServiceVersion

> ModelVersion cloneServiceVersion(service_id, version_id)

Clone a service version

Clone the current configuration into a new version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.VersionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.cloneServiceVersion(service_id, version_id).then((data) => {
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

[**ModelVersion**](ModelVersion.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createServiceVersion

> InlineResponse2001 createServiceVersion(service_id)

Create a service version

Create a version for a particular service.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.VersionApi();
let service_id = "service_id_example"; // String | 
apiInstance.createServiceVersion(service_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deactivateServiceVersion

> ModelVersion deactivateServiceVersion(service_id, version_id)

Deactivate a service version

Deactivate the current version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.VersionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.deactivateServiceVersion(service_id, version_id).then((data) => {
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

[**ModelVersion**](ModelVersion.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getServiceVersion

> ModelVersion getServiceVersion(service_id, version_id)

Get a version of a service

Get the version for a particular service.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.VersionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.getServiceVersion(service_id, version_id).then((data) => {
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

[**ModelVersion**](ModelVersion.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listServiceVersions

> [ModelVersion] listServiceVersions(service_id)

List versions of a service

List the versions for a particular service.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.VersionApi();
let service_id = "service_id_example"; // String | 
apiInstance.listServiceVersions(service_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 

### Return type

[**[ModelVersion]**](ModelVersion.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## lockServiceVersion

> ModelVersion lockServiceVersion(service_id, version_id)

Lock a service version

Locks the specified version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.VersionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.lockServiceVersion(service_id, version_id).then((data) => {
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

[**ModelVersion**](ModelVersion.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateServiceVersion

> ModelVersion updateServiceVersion(service_id, version_id)

Update a service version

Update a particular version for a particular service.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.VersionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.updateServiceVersion(service_id, version_id).then((data) => {
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

[**ModelVersion**](ModelVersion.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## validateServiceVersion

> Object validateServiceVersion(service_id, version_id)

Validate a service version

Validate the version for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.VersionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.validateServiceVersion(service_id, version_id).then((data) => {
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

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

