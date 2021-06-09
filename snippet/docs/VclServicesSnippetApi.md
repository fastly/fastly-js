# VclSnippets.VclServicesSnippetApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSnippet**](VclServicesSnippetApi.md#createSnippet) | **POST** /service/{service_id}/version/{version_id}/snippet | Create a snippet
[**deleteSnippet**](VclServicesSnippetApi.md#deleteSnippet) | **DELETE** /service/{service_id}/version/{version_id}/snippet/{snippet_name} | Delete a snippet
[**getSnippet**](VclServicesSnippetApi.md#getSnippet) | **GET** /service/{service_id}/version/{version_id}/snippet/{snippet_name} | Get a versioned snippet
[**getSnippetDynamic**](VclServicesSnippetApi.md#getSnippetDynamic) | **GET** /service/{service_id}/snippet/{snippet_id} | Get a dynamic snippet
[**listSnippets**](VclServicesSnippetApi.md#listSnippets) | **GET** /service/{service_id}/version/{version_id}/snippet | List snippets
[**updateSnippet**](VclServicesSnippetApi.md#updateSnippet) | **PUT** /service/{service_id}/version/{version_id}/snippet/{snippet_name} | Update a versioned snippet
[**updateSnippetDynamic**](VclServicesSnippetApi.md#updateSnippetDynamic) | **PUT** /service/{service_id}/snippet/{snippet_id} | Update a dynamic snippet



## createSnippet

> InlineResponse200 createSnippet(serviceId, versionId)

Create a snippet

Create a snippet for a particular service and version.

### Example

```javascript
import VclSnippets from 'vcl_snippets';
let defaultClient = VclSnippets.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new VclSnippets.VclServicesSnippetApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.createSnippet(serviceId, versionId).then((data) => {
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


## deleteSnippet

> Object deleteSnippet(serviceId, versionId, snippetName)

Delete a snippet

Delete a specific snippet for a particular service and version.

### Example

```javascript
import VclSnippets from 'vcl_snippets';
let defaultClient = VclSnippets.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new VclSnippets.VclServicesSnippetApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let snippetName = test-snippet; // String | 
apiInstance.deleteSnippet(serviceId, versionId, snippetName).then((data) => {
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
 **snippetName** | **String**|  | 

### Return type

**Object**

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSnippet

> InlineResponse200 getSnippet(serviceId, versionId, snippetName)

Get a versioned snippet

Get a single snippet for a particular service and version.

### Example

```javascript
import VclSnippets from 'vcl_snippets';
let defaultClient = VclSnippets.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new VclSnippets.VclServicesSnippetApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let snippetName = test-snippet; // String | 
apiInstance.getSnippet(serviceId, versionId, snippetName).then((data) => {
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
 **snippetName** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSnippetDynamic

> InlineResponse200 getSnippetDynamic(serviceId, snippetId)

Get a dynamic snippet

Get a single dynamic snippet for a particular service.

### Example

```javascript
import VclSnippets from 'vcl_snippets';
let defaultClient = VclSnippets.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new VclSnippets.VclServicesSnippetApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let snippetId = 62Yd1WfiCBPENLloXfXmlO; // String | 
apiInstance.getSnippetDynamic(serviceId, snippetId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **snippetId** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSnippets

> [InlineResponse200] listSnippets(serviceId, versionId)

List snippets

List all snippets for a particular service and version.

### Example

```javascript
import VclSnippets from 'vcl_snippets';
let defaultClient = VclSnippets.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new VclSnippets.VclServicesSnippetApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.listSnippets(serviceId, versionId).then((data) => {
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


## updateSnippet

> InlineResponse200 updateSnippet(serviceId, versionId, snippetName)

Update a versioned snippet

Update a specific snippet for a particular service and version.

### Example

```javascript
import VclSnippets from 'vcl_snippets';
let defaultClient = VclSnippets.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new VclSnippets.VclServicesSnippetApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let snippetName = test-snippet; // String | 
apiInstance.updateSnippet(serviceId, versionId, snippetName).then((data) => {
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
 **snippetName** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## updateSnippetDynamic

> InlineResponse200 updateSnippetDynamic(serviceId, snippetId)

Update a dynamic snippet

Update a dynamic snippet for a particular service.

### Example

```javascript
import VclSnippets from 'vcl_snippets';
let defaultClient = VclSnippets.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new VclSnippets.VclServicesSnippetApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let snippetId = 62Yd1WfiCBPENLloXfXmlO; // String | 
apiInstance.updateSnippetDynamic(serviceId, snippetId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **snippetId** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

