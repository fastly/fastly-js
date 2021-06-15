# FastlyApi.DirectorApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDirector**](DirectorApi.md#createDirector) | **POST** /service/{service_id}/version/{version_id}/director | Create a director
[**deleteDirector**](DirectorApi.md#deleteDirector) | **DELETE** /service/{service_id}/version/{version_id}/director/{director_name} | Delete a director
[**getDirector**](DirectorApi.md#getDirector) | **GET** /service/{service_id}/version/{version_id}/director/{director_name} | Get a director
[**listDirectors**](DirectorApi.md#listDirectors) | **GET** /service/{service_id}/version/{version_id}/director | List directors
[**updateDirector**](DirectorApi.md#updateDirector) | **PUT** /service/{service_id}/version/{version_id}/director/{director_name} | Update a director



## createDirector

> ModelDirector createDirector(service_id, version_id, opts)

Create a director

Create a director for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DirectorApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'backends': new FastlyApi.SchemasModelBackend(), // [SchemasModelBackend] | List of backends associated to a director.
  'capacity': 56, // Number | Unused.
  'comment': "''", // String | A freeform descriptive note.
  'name': "name_example", // String | Name for the Director.
  'quorum': 75, // Number | The percentage of capacity that needs to be up for a director to be considered up. `0` to `100`.
  'shield': "'null'", // String | Selected POP to serve as a shield for the backends. Defaults to `null` meaning no origin shielding if not set. Refer to the [datacenters API endpoint](/reference/api/utils/datacenter/) to get a list of available POPs used for shielding.
  'type': 1, // Number | What type of load balance group to use.
  'retries': 5 // Number | How many backends to search if it fails.
};
apiInstance.createDirector(service_id, version_id, opts).then((data) => {
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
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **backends** | [**[SchemasModelBackend]**](SchemasModelBackend.md)| List of backends associated to a director. | [optional] 
 **capacity** | **Number**| Unused. | [optional] 
 **comment** | **String**| A freeform descriptive note. | [optional] [default to &#39;&#39;]
 **name** | **String**| Name for the Director. | [optional] 
 **quorum** | **Number**| The percentage of capacity that needs to be up for a director to be considered up. &#x60;0&#x60; to &#x60;100&#x60;. | [optional] [default to 75]
 **shield** | **String**| Selected POP to serve as a shield for the backends. Defaults to &#x60;null&#x60; meaning no origin shielding if not set. Refer to the [datacenters API endpoint](/reference/api/utils/datacenter/) to get a list of available POPs used for shielding. | [optional] [default to &#39;null&#39;]
 **type** | **Number**| What type of load balance group to use. | [optional] [default to 1]
 **retries** | **Number**| How many backends to search if it fails. | [optional] [default to 5]

### Return type

[**ModelDirector**](ModelDirector.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteDirector

> Object deleteDirector(service_id, version_id, director_name)

Delete a director

Delete the director for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DirectorApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let director_name = "director_name_example"; // String | 
apiInstance.deleteDirector(service_id, version_id, director_name).then((data) => {
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
 **director_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDirector

> ModelDirector getDirector(service_id, version_id, director_name)

Get a director

Get the director for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DirectorApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let director_name = "director_name_example"; // String | 
apiInstance.getDirector(service_id, version_id, director_name).then((data) => {
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
 **director_name** | **String**|  | 

### Return type

[**ModelDirector**](ModelDirector.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listDirectors

> [ModelDirector] listDirectors(service_id, version_id)

List directors

List the directors for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DirectorApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listDirectors(service_id, version_id).then((data) => {
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

[**[ModelDirector]**](ModelDirector.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDirector

> ModelDirector updateDirector(service_id, version_id, director_name)

Update a director

Update the director for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DirectorApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let director_name = "director_name_example"; // String | 
apiInstance.updateDirector(service_id, version_id, director_name).then((data) => {
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
 **director_name** | **String**|  | 

### Return type

[**ModelDirector**](ModelDirector.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

