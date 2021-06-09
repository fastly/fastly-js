# Version.ServicesVersionApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateServiceVersion**](ServicesVersionApi.md#activateServiceVersion) | **PUT** /service/{service_id}/version/{version_id}/activate | Activate a service version
[**cloneServiceVersion**](ServicesVersionApi.md#cloneServiceVersion) | **PUT** /service/{service_id}/version/{version_id}/clone | Clone a service version
[**createServiceVersion**](ServicesVersionApi.md#createServiceVersion) | **POST** /service/{service_id}/version | Create a service version
[**deactivateServiceVersion**](ServicesVersionApi.md#deactivateServiceVersion) | **PUT** /service/{service_id}/version/{version_id}/deactivate | Deactivate a service version
[**getServiceVersion**](ServicesVersionApi.md#getServiceVersion) | **GET** /service/{service_id}/version/{version_id} | Get a version of a service
[**listServiceVersions**](ServicesVersionApi.md#listServiceVersions) | **GET** /service/{service_id}/version | List versions of a service
[**lockServiceVersion**](ServicesVersionApi.md#lockServiceVersion) | **PUT** /service/{service_id}/version/{version_id}/lock | Lock a service version
[**updateServiceVersion**](ServicesVersionApi.md#updateServiceVersion) | **PUT** /service/{service_id}/version/{version_id} | Update a service version
[**validateServiceVersion**](ServicesVersionApi.md#validateServiceVersion) | **GET** /service/{service_id}/version/{version_id}/validate | Validate a service version



## activateServiceVersion

> InlineResponse200 activateServiceVersion(serviceId, versionId)

Activate a service version

Activate the current version.

### Example

```javascript
import Version from 'version';
let defaultClient = Version.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new Version.ServicesVersionApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.activateServiceVersion(serviceId, versionId).then((data) => {
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

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cloneServiceVersion

> InlineResponse200 cloneServiceVersion(serviceId, versionId)

Clone a service version

Clone the current configuration into a new version.

### Example

```javascript
import Version from 'version';
let defaultClient = Version.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new Version.ServicesVersionApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.cloneServiceVersion(serviceId, versionId).then((data) => {
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

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createServiceVersion

> InlineResponse2001 createServiceVersion(serviceId)

Create a service version

Create a version for a particular service.

### Example

```javascript
import Version from 'version';
let defaultClient = Version.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new Version.ServicesVersionApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
apiInstance.createServiceVersion(serviceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deactivateServiceVersion

> InlineResponse200 deactivateServiceVersion(serviceId, versionId)

Deactivate a service version

Deactivate the current version.

### Example

```javascript
import Version from 'version';
let defaultClient = Version.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new Version.ServicesVersionApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.deactivateServiceVersion(serviceId, versionId).then((data) => {
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

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getServiceVersion

> InlineResponse200 getServiceVersion(serviceId, versionId)

Get a version of a service

Get the version for a particular service.

### Example

```javascript
import Version from 'version';
let defaultClient = Version.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new Version.ServicesVersionApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.getServiceVersion(serviceId, versionId).then((data) => {
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

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listServiceVersions

> [InlineResponse200] listServiceVersions(serviceId)

List versions of a service

List the versions for a particular service.

### Example

```javascript
import Version from 'version';
let defaultClient = Version.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new Version.ServicesVersionApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
apiInstance.listServiceVersions(serviceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 

### Return type

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## lockServiceVersion

> InlineResponse200 lockServiceVersion(serviceId, versionId)

Lock a service version

Locks the specified version.

### Example

```javascript
import Version from 'version';
let defaultClient = Version.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new Version.ServicesVersionApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.lockServiceVersion(serviceId, versionId).then((data) => {
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

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateServiceVersion

> InlineResponse200 updateServiceVersion(serviceId, versionId)

Update a service version

Update a particular version for a particular service.

### Example

```javascript
import Version from 'version';
let defaultClient = Version.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new Version.ServicesVersionApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.updateServiceVersion(serviceId, versionId).then((data) => {
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

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## validateServiceVersion

> Object validateServiceVersion(serviceId, versionId)

Validate a service version

Validate the version for a particular service and version.

### Example

```javascript
import Version from 'version';
let defaultClient = Version.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new Version.ServicesVersionApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.validateServiceVersion(serviceId, versionId).then((data) => {
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

**Object**

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

