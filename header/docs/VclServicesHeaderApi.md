# Header.VclServicesHeaderApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createHeaderObject**](VclServicesHeaderApi.md#createHeaderObject) | **POST** /service/{service_id}/version/{version_id}/header | Create a Header object
[**deleteHeaderObject**](VclServicesHeaderApi.md#deleteHeaderObject) | **DELETE** /service/{service_id}/version/{version_id}/header/{header_name} | Delete a Header object
[**getHeaderObject**](VclServicesHeaderApi.md#getHeaderObject) | **GET** /service/{service_id}/version/{version_id}/header/{header_name} | Get a Header object
[**listHeaderObjects**](VclServicesHeaderApi.md#listHeaderObjects) | **GET** /service/{service_id}/version/{version_id}/header | List Header objects
[**updateHeaderObject**](VclServicesHeaderApi.md#updateHeaderObject) | **PUT** /service/{service_id}/version/{version_id}/header/{header_name} | Update a Header object



## createHeaderObject

> InlineResponse200 createHeaderObject(serviceId, versionId)

Create a Header object

Creates a new Header object.

### Example

```javascript
import Header from 'header';
let defaultClient = Header.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Header.VclServicesHeaderApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.createHeaderObject(serviceId, versionId).then((data) => {
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


## deleteHeaderObject

> Object deleteHeaderObject(serviceId, versionId, headerName)

Delete a Header object

Deletes a Header object by name.

### Example

```javascript
import Header from 'header';
let defaultClient = Header.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Header.VclServicesHeaderApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let headerName = test-header; // String | 
apiInstance.deleteHeaderObject(serviceId, versionId, headerName).then((data) => {
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
 **headerName** | **String**|  | 

### Return type

**Object**

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHeaderObject

> InlineResponse200 getHeaderObject(serviceId, versionId, headerName)

Get a Header object

Retrieves a Header object by name.

### Example

```javascript
import Header from 'header';
let defaultClient = Header.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Header.VclServicesHeaderApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let headerName = test-header; // String | 
apiInstance.getHeaderObject(serviceId, versionId, headerName).then((data) => {
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
 **headerName** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listHeaderObjects

> [InlineResponse200] listHeaderObjects(serviceId, versionId)

List Header objects

Retrieves all Header objects for a particular Version of a Service.

### Example

```javascript
import Header from 'header';
let defaultClient = Header.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Header.VclServicesHeaderApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.listHeaderObjects(serviceId, versionId).then((data) => {
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


## updateHeaderObject

> InlineObject updateHeaderObject(serviceId, versionId, headerName, opts)

Update a Header object

Modifies an existing Header object by name.

### Example

```javascript
import Header from 'header';
let defaultClient = Header.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Header.VclServicesHeaderApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let headerName = test-header; // String | 
let opts = {
  'serviceId2': "serviceId_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'action': "action_example", // String | Accepts a string value.
  'cacheCondition': "cacheCondition_example", // String | Name of the cache condition controlling when this configuration applies.
  'dst': "dst_example", // String | Header to set.
  'ignoreIfSet': 56, // Number | Don't add the header if it is added already. (Only applies to 'set' action).
  'name': "name_example", // String | A handle to refer to this Header object.
  'priority': 100, // Number | Priority determines execution order. Lower numbers execute first.
  'regex': "regex_example", // String | Regular expression to use. Only applies to `regex` and `regex_repeat` actions.
  'requestCondition': "requestCondition_example", // String | Condition which, if met, will select this configuration during a request. Optional.
  'responseCondition': "responseCondition_example", // String | Optional name of a response condition to apply.
  'src': "src_example", // String | Variable to be used as a source for the header content. Does not apply to `delete` action.
  'substitution': "substitution_example", // String | Value to substitute in place of regular expression. Only applies to `regex` and `regex_repeat` actions.
  'type': "type_example" // String | Accepts a string value.
};
apiInstance.updateHeaderObject(serviceId, versionId, headerName, opts).then((data) => {
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
 **headerName** | **String**|  | 
 **serviceId2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **action** | **String**| Accepts a string value. | [optional] 
 **cacheCondition** | **String**| Name of the cache condition controlling when this configuration applies. | [optional] 
 **dst** | **String**| Header to set. | [optional] 
 **ignoreIfSet** | **Number**| Don&#39;t add the header if it is added already. (Only applies to &#39;set&#39; action). | [optional] 
 **name** | **String**| A handle to refer to this Header object. | [optional] 
 **priority** | **Number**| Priority determines execution order. Lower numbers execute first. | [optional] [default to 100]
 **regex** | **String**| Regular expression to use. Only applies to &#x60;regex&#x60; and &#x60;regex_repeat&#x60; actions. | [optional] 
 **requestCondition** | **String**| Condition which, if met, will select this configuration during a request. Optional. | [optional] 
 **responseCondition** | **String**| Optional name of a response condition to apply. | [optional] 
 **src** | **String**| Variable to be used as a source for the header content. Does not apply to &#x60;delete&#x60; action. | [optional] 
 **substitution** | **String**| Value to substitute in place of regular expression. Only applies to &#x60;regex&#x60; and &#x60;regex_repeat&#x60; actions. | [optional] 
 **type** | **String**| Accepts a string value. | [optional] 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

