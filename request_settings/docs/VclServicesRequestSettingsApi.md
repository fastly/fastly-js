# RequestSettings.VclServicesRequestSettingsApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRequestSettings**](VclServicesRequestSettingsApi.md#createRequestSettings) | **POST** /service/{service_id}/version/{version_id}/request_settings | Create a Request Settings object
[**deleteRequestSettings**](VclServicesRequestSettingsApi.md#deleteRequestSettings) | **DELETE** /service/{service_id}/version/{version_id}/request_settings/{request_settings_name} | Delete a Request Settings object
[**getRequestSettings**](VclServicesRequestSettingsApi.md#getRequestSettings) | **GET** /service/{service_id}/version/{version_id}/request_settings/{request_settings_name} | Get a Request Settings object
[**listRequestSettings**](VclServicesRequestSettingsApi.md#listRequestSettings) | **GET** /service/{service_id}/version/{version_id}/request_settings | List Request Settings objects
[**updateRequestSettings**](VclServicesRequestSettingsApi.md#updateRequestSettings) | **PUT** /service/{service_id}/version/{version_id}/request_settings/{request_settings_name} | Update a Request Settings object



## createRequestSettings

> InlineResponse200 createRequestSettings(serviceId, versionId)

Create a Request Settings object

Creates a new Request Settings object.

### Example

```javascript
import RequestSettings from 'request_settings';
let defaultClient = RequestSettings.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new RequestSettings.VclServicesRequestSettingsApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.createRequestSettings(serviceId, versionId).then((data) => {
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


## deleteRequestSettings

> Object deleteRequestSettings(serviceId, versionId, requestSettingsName)

Delete a Request Settings object

Removes the specified Request Settings object.

### Example

```javascript
import RequestSettings from 'request_settings';
let defaultClient = RequestSettings.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new RequestSettings.VclServicesRequestSettingsApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let requestSettingsName = test-request-setting; // String | 
apiInstance.deleteRequestSettings(serviceId, versionId, requestSettingsName).then((data) => {
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
 **requestSettingsName** | **String**|  | 

### Return type

**Object**

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRequestSettings

> InlineResponse200 getRequestSettings(serviceId, versionId, requestSettingsName)

Get a Request Settings object

Gets the specified Request Settings object.

### Example

```javascript
import RequestSettings from 'request_settings';
let defaultClient = RequestSettings.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new RequestSettings.VclServicesRequestSettingsApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let requestSettingsName = test-request-setting; // String | 
apiInstance.getRequestSettings(serviceId, versionId, requestSettingsName).then((data) => {
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
 **requestSettingsName** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRequestSettings

> [InlineResponse200] listRequestSettings(serviceId, versionId)

List Request Settings objects

Returns a list of all Request Settings objects for the given service and version.

### Example

```javascript
import RequestSettings from 'request_settings';
let defaultClient = RequestSettings.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new RequestSettings.VclServicesRequestSettingsApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.listRequestSettings(serviceId, versionId).then((data) => {
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


## updateRequestSettings

> InlineResponse200 updateRequestSettings(serviceId, versionId, requestSettingsName)

Update a Request Settings object

Updates the specified Request Settings object.

### Example

```javascript
import RequestSettings from 'request_settings';
let defaultClient = RequestSettings.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new RequestSettings.VclServicesRequestSettingsApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let requestSettingsName = test-request-setting; // String | 
apiInstance.updateRequestSettings(serviceId, versionId, requestSettingsName).then((data) => {
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
 **requestSettingsName** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

