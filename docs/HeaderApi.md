# FastlyApi.HeaderApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createHeaderObject**](HeaderApi.md#createHeaderObject) | **POST** /service/{service_id}/version/{version_id}/header | Create a Header object
[**deleteHeaderObject**](HeaderApi.md#deleteHeaderObject) | **DELETE** /service/{service_id}/version/{version_id}/header/{header_name} | Delete a Header object
[**getHeaderObject**](HeaderApi.md#getHeaderObject) | **GET** /service/{service_id}/version/{version_id}/header/{header_name} | Get a Header object
[**listHeaderObjects**](HeaderApi.md#listHeaderObjects) | **GET** /service/{service_id}/version/{version_id}/header | List Header objects
[**updateHeaderObject**](HeaderApi.md#updateHeaderObject) | **PUT** /service/{service_id}/version/{version_id}/header/{header_name} | Update a Header object



## createHeaderObject

> ModelHeader createHeaderObject(service_id, version_id)

Create a Header object

Creates a new Header object.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.HeaderApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.createHeaderObject(service_id, version_id).then((data) => {
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

[**ModelHeader**](ModelHeader.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteHeaderObject

> Object deleteHeaderObject(service_id, version_id, header_name)

Delete a Header object

Deletes a Header object by name.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.HeaderApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let header_name = "header_name_example"; // String | 
apiInstance.deleteHeaderObject(service_id, version_id, header_name).then((data) => {
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
 **header_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHeaderObject

> ModelHeader getHeaderObject(service_id, version_id, header_name)

Get a Header object

Retrieves a Header object by name.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.HeaderApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let header_name = "header_name_example"; // String | 
apiInstance.getHeaderObject(service_id, version_id, header_name).then((data) => {
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
 **header_name** | **String**|  | 

### Return type

[**ModelHeader**](ModelHeader.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listHeaderObjects

> [ModelHeader] listHeaderObjects(service_id, version_id)

List Header objects

Retrieves all Header objects for a particular Version of a Service.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.HeaderApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listHeaderObjects(service_id, version_id).then((data) => {
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

[**[ModelHeader]**](ModelHeader.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateHeaderObject

> ModelHeader updateHeaderObject(service_id, version_id, header_name, opts)

Update a Header object

Modifies an existing Header object by name.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.HeaderApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let header_name = "header_name_example"; // String | 
let opts = {
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'action': "action_example", // String | Accepts a string value.
  'cache_condition': "cache_condition_example", // String | Name of the cache condition controlling when this configuration applies.
  'dst': "dst_example", // String | Header to set.
  'ignore_if_set': 56, // Number | Don't add the header if it is added already. (Only applies to 'set' action).
  'name': "name_example", // String | A handle to refer to this Header object.
  'priority': 100, // Number | Priority determines execution order. Lower numbers execute first.
  'regex': "regex_example", // String | Regular expression to use. Only applies to `regex` and `regex_repeat` actions.
  'request_condition': "request_condition_example", // String | Condition which, if met, will select this configuration during a request. Optional.
  'response_condition': null, // String | 
  'src': "src_example", // String | Variable to be used as a source for the header content. Does not apply to `delete` action.
  'substitution': "substitution_example", // String | Value to substitute in place of regular expression. Only applies to `regex` and `regex_repeat` actions.
  'type': "type_example" // String | Accepts a string value.
};
apiInstance.updateHeaderObject(service_id, version_id, header_name, opts).then((data) => {
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
 **header_name** | **String**|  | 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **action** | **String**| Accepts a string value. | [optional] 
 **cache_condition** | **String**| Name of the cache condition controlling when this configuration applies. | [optional] 
 **dst** | **String**| Header to set. | [optional] 
 **ignore_if_set** | **Number**| Don&#39;t add the header if it is added already. (Only applies to &#39;set&#39; action). | [optional] 
 **name** | **String**| A handle to refer to this Header object. | [optional] 
 **priority** | **Number**| Priority determines execution order. Lower numbers execute first. | [optional] [default to 100]
 **regex** | **String**| Regular expression to use. Only applies to &#x60;regex&#x60; and &#x60;regex_repeat&#x60; actions. | [optional] 
 **request_condition** | **String**| Condition which, if met, will select this configuration during a request. Optional. | [optional] 
 **response_condition** | [**String**](String.md)|  | [optional] 
 **src** | **String**| Variable to be used as a source for the header content. Does not apply to &#x60;delete&#x60; action. | [optional] 
 **substitution** | **String**| Value to substitute in place of regular expression. Only applies to &#x60;regex&#x60; and &#x60;regex_repeat&#x60; actions. | [optional] 
 **type** | **String**| Accepts a string value. | [optional] 

### Return type

[**ModelHeader**](ModelHeader.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

