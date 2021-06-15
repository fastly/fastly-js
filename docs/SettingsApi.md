# FastlyApi.SettingsApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getServiceSettings**](SettingsApi.md#getServiceSettings) | **GET** /service/{service_id}/version/{version_id}/settings | Get service settings
[**updateServiceSettings**](SettingsApi.md#updateServiceSettings) | **PUT** /service/{service_id}/version/{version_id}/settings | Update service settings



## getServiceSettings

> ModelSettings getServiceSettings(service_id, version_id)

Get service settings

Get the settings for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.SettingsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.getServiceSettings(service_id, version_id).then((data) => {
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

[**ModelSettings**](ModelSettings.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateServiceSettings

> ModelSettings updateServiceSettings(service_id, version_id)

Update service settings

Update the settings for a particular service and version. NOTE: If you override TTLs with custom VCL, any general.default_ttl value will not be honored and the expected behavior may change. 

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.SettingsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.updateServiceSettings(service_id, version_id).then((data) => {
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

[**ModelSettings**](ModelSettings.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

