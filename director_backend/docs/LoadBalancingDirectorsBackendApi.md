# DirectorBackend.LoadBalancingDirectorsBackendApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDirectorBackend**](LoadBalancingDirectorsBackendApi.md#createDirectorBackend) | **POST** /service/{service_id}/version/{version_id}/director/{director_name}/backend/{backend_name} | Create a director-backend relationship
[**deleteDirectorBackend**](LoadBalancingDirectorsBackendApi.md#deleteDirectorBackend) | **DELETE** /service/{service_id}/version/{version_id}/director/{director_name}/backend/{backend_name} | Delete a director-backend relationship
[**getDirectorBackend**](LoadBalancingDirectorsBackendApi.md#getDirectorBackend) | **GET** /service/{service_id}/version/{version_id}/director/{director_name}/backend/{backend_name} | Get a director-backend relationship



## createDirectorBackend

> InlineResponse200 createDirectorBackend(directorName, serviceId, versionId, backendName)

Create a director-backend relationship

Establishes a relationship between a Backend and a Director. The Backend is then considered a member of the Director and can be used to balance traffic onto.

### Example

```javascript
import DirectorBackend from 'director_backend';
let defaultClient = DirectorBackend.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new DirectorBackend.LoadBalancingDirectorsBackendApi();
let directorName = director-name; // String | 
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let backendName = backend-name; // String | 
apiInstance.createDirectorBackend(directorName, serviceId, versionId, backendName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directorName** | **String**|  | 
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 
 **backendName** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteDirectorBackend

> Object deleteDirectorBackend(directorName, serviceId, versionId, backendName)

Delete a director-backend relationship

Deletes the relationship between a Backend and a Director. The Backend is no longer considered a member of the Director and thus will not have traffic balanced onto it from this Director.

### Example

```javascript
import DirectorBackend from 'director_backend';
let defaultClient = DirectorBackend.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new DirectorBackend.LoadBalancingDirectorsBackendApi();
let directorName = director-name; // String | 
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let backendName = backend-name; // String | 
apiInstance.deleteDirectorBackend(directorName, serviceId, versionId, backendName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directorName** | **String**|  | 
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 
 **backendName** | **String**|  | 

### Return type

**Object**

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDirectorBackend

> InlineResponse200 getDirectorBackend(directorName, serviceId, versionId, backendName)

Get a director-backend relationship

Returns the relationship between a Backend and a Director. If the Backend has been associated with the Director, it returns a simple record indicating this. Otherwise, returns a 404.

### Example

```javascript
import DirectorBackend from 'director_backend';
let defaultClient = DirectorBackend.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new DirectorBackend.LoadBalancingDirectorsBackendApi();
let directorName = director-name; // String | 
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let backendName = backend-name; // String | 
apiInstance.getDirectorBackend(directorName, serviceId, versionId, backendName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directorName** | **String**|  | 
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 
 **backendName** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

