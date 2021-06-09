# Director.LoadBalancingDirectorsDirectorApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDirector**](LoadBalancingDirectorsDirectorApi.md#createDirector) | **POST** /service/{service_id}/version/{version_id}/director | Create a director
[**deleteDirector**](LoadBalancingDirectorsDirectorApi.md#deleteDirector) | **DELETE** /service/{service_id}/version/{version_id}/director/{director_name} | Delete a director
[**getDirector**](LoadBalancingDirectorsDirectorApi.md#getDirector) | **GET** /service/{service_id}/version/{version_id}/director/{director_name} | Get a director
[**listDirectors**](LoadBalancingDirectorsDirectorApi.md#listDirectors) | **GET** /service/{service_id}/version/{version_id}/director | List directors
[**updateDirector**](LoadBalancingDirectorsDirectorApi.md#updateDirector) | **PUT** /service/{service_id}/version/{version_id}/director/{director_name} | Update a director



## createDirector

> InlineObject createDirector(serviceId, versionId, opts)

Create a director

Create a director for a particular service and version.

### Example

```javascript
import Director from 'director';
let defaultClient = Director.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Director.LoadBalancingDirectorsDirectorApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let opts = {
  'createdAt': "createdAt_example", // String | Date and time in ISO 8601 format.
  'deletedAt': "deletedAt_example", // String | Date and time in ISO 8601 format.
  'updatedAt': "updatedAt_example", // String | Date and time in ISO 8601 format.
  'serviceId2': "serviceId_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'backends': new Director.ServiceServiceIdVersionVersionIdDirectorBackends(), // [ServiceServiceIdVersionVersionIdDirectorBackends] | List of backends associated to a director.
  'capacity': 56, // Number | Unused.
  'comment': "''", // String | A freeform descriptive note.
  'name': "name_example", // String | Name for the Director.
  'quorum': 75, // Number | The percentage of capacity that needs to be up for a director to be considered up. `0` to `100`.
  'shield': "'null'", // String | Selected POP to serve as a shield for the backends. Defaults to `null` meaning no origin shielding if not set. Refer to the [datacenters API endpoint](/reference/api/utils/datacenter/) to get a list of available POPs used for shielding.
  'type': 1, // Number | What type of load balance group to use.
  'retries': 5 // Number | How many backends to search if it fails.
};
apiInstance.createDirector(serviceId, versionId, opts).then((data) => {
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
 **createdAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deletedAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updatedAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **serviceId2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **backends** | [**[ServiceServiceIdVersionVersionIdDirectorBackends]**](ServiceServiceIdVersionVersionIdDirectorBackends.md)| List of backends associated to a director. | [optional] 
 **capacity** | **Number**| Unused. | [optional] 
 **comment** | **String**| A freeform descriptive note. | [optional] [default to &#39;&#39;]
 **name** | **String**| Name for the Director. | [optional] 
 **quorum** | **Number**| The percentage of capacity that needs to be up for a director to be considered up. &#x60;0&#x60; to &#x60;100&#x60;. | [optional] [default to 75]
 **shield** | **String**| Selected POP to serve as a shield for the backends. Defaults to &#x60;null&#x60; meaning no origin shielding if not set. Refer to the [datacenters API endpoint](/reference/api/utils/datacenter/) to get a list of available POPs used for shielding. | [optional] [default to &#39;null&#39;]
 **type** | **Number**| What type of load balance group to use. | [optional] [default to 1]
 **retries** | **Number**| How many backends to search if it fails. | [optional] [default to 5]

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteDirector

> Object deleteDirector(serviceId, versionId, directorName)

Delete a director

Delete the director for a particular service and version.

### Example

```javascript
import Director from 'director';
let defaultClient = Director.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Director.LoadBalancingDirectorsDirectorApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let directorName = director-name; // String | 
apiInstance.deleteDirector(serviceId, versionId, directorName).then((data) => {
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
 **directorName** | **String**|  | 

### Return type

**Object**

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDirector

> InlineObject getDirector(serviceId, versionId, directorName)

Get a director

Get the director for a particular service and version.

### Example

```javascript
import Director from 'director';
let defaultClient = Director.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Director.LoadBalancingDirectorsDirectorApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let directorName = director-name; // String | 
apiInstance.getDirector(serviceId, versionId, directorName).then((data) => {
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
 **directorName** | **String**|  | 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listDirectors

> [InlineResponse200] listDirectors(serviceId, versionId)

List directors

List the directors for a particular service and version.

### Example

```javascript
import Director from 'director';
let defaultClient = Director.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Director.LoadBalancingDirectorsDirectorApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.listDirectors(serviceId, versionId).then((data) => {
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


## updateDirector

> InlineObject updateDirector(serviceId, versionId, directorName)

Update a director

Update the director for a particular service and version.

### Example

```javascript
import Director from 'director';
let defaultClient = Director.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Director.LoadBalancingDirectorsDirectorApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let directorName = director-name; // String | 
apiInstance.updateDirector(serviceId, versionId, directorName).then((data) => {
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
 **directorName** | **String**|  | 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

