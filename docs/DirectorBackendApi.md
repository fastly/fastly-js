# FastlyApi.DirectorBackendApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDirectorBackend**](DirectorBackendApi.md#createDirectorBackend) | **POST** /service/{service_id}/version/{version_id}/director/{director_name}/backend/{backend_name} | Create a director-backend relationship
[**deleteDirectorBackend**](DirectorBackendApi.md#deleteDirectorBackend) | **DELETE** /service/{service_id}/version/{version_id}/director/{director_name}/backend/{backend_name} | Delete a director-backend relationship
[**getDirectorBackend**](DirectorBackendApi.md#getDirectorBackend) | **GET** /service/{service_id}/version/{version_id}/director/{director_name}/backend/{backend_name} | Get a director-backend relationship



## createDirectorBackend

> ModelDirectorBackend createDirectorBackend(director_name, service_id, version_id, backend_name)

Create a director-backend relationship

Establishes a relationship between a Backend and a Director. The Backend is then considered a member of the Director and can be used to balance traffic onto.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DirectorBackendApi();
let director_name = "director_name_example"; // String | 
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let backend_name = "backend_name_example"; // String | 
apiInstance.createDirectorBackend(director_name, service_id, version_id, backend_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **director_name** | **String**|  | 
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **backend_name** | **String**|  | 

### Return type

[**ModelDirectorBackend**](ModelDirectorBackend.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteDirectorBackend

> Object deleteDirectorBackend(director_name, service_id, version_id, backend_name)

Delete a director-backend relationship

Deletes the relationship between a Backend and a Director. The Backend is no longer considered a member of the Director and thus will not have traffic balanced onto it from this Director.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DirectorBackendApi();
let director_name = "director_name_example"; // String | 
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let backend_name = "backend_name_example"; // String | 
apiInstance.deleteDirectorBackend(director_name, service_id, version_id, backend_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **director_name** | **String**|  | 
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


## getDirectorBackend

> ModelDirectorBackend getDirectorBackend(director_name, service_id, version_id, backend_name)

Get a director-backend relationship

Returns the relationship between a Backend and a Director. If the Backend has been associated with the Director, it returns a simple record indicating this. Otherwise, returns a 404.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DirectorBackendApi();
let director_name = "director_name_example"; // String | 
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let backend_name = "backend_name_example"; // String | 
apiInstance.getDirectorBackend(director_name, service_id, version_id, backend_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **director_name** | **String**|  | 
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **backend_name** | **String**|  | 

### Return type

[**ModelDirectorBackend**](ModelDirectorBackend.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

