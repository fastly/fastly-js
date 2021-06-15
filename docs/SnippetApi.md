# FastlyApi.SnippetApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSnippet**](SnippetApi.md#createSnippet) | **POST** /service/{service_id}/version/{version_id}/snippet | Create a snippet
[**deleteSnippet**](SnippetApi.md#deleteSnippet) | **DELETE** /service/{service_id}/version/{version_id}/snippet/{snippet_name} | Delete a snippet
[**getSnippet**](SnippetApi.md#getSnippet) | **GET** /service/{service_id}/version/{version_id}/snippet/{snippet_name} | Get a versioned snippet
[**getSnippetDynamic**](SnippetApi.md#getSnippetDynamic) | **GET** /service/{service_id}/snippet/{snippet_id} | Get a dynamic snippet
[**listSnippets**](SnippetApi.md#listSnippets) | **GET** /service/{service_id}/version/{version_id}/snippet | List snippets
[**updateSnippet**](SnippetApi.md#updateSnippet) | **PUT** /service/{service_id}/version/{version_id}/snippet/{snippet_name} | Update a versioned snippet
[**updateSnippetDynamic**](SnippetApi.md#updateSnippetDynamic) | **PUT** /service/{service_id}/snippet/{snippet_id} | Update a dynamic snippet



## createSnippet

> ModelSnippet createSnippet(service_id, version_id)

Create a snippet

Create a snippet for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.SnippetApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.createSnippet(service_id, version_id).then((data) => {
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

[**ModelSnippet**](ModelSnippet.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteSnippet

> Object deleteSnippet(service_id, version_id, snippet_name)

Delete a snippet

Delete a specific snippet for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.SnippetApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let snippet_name = "snippet_name_example"; // String | 
apiInstance.deleteSnippet(service_id, version_id, snippet_name).then((data) => {
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
 **snippet_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSnippet

> ModelSnippet getSnippet(service_id, version_id, snippet_name)

Get a versioned snippet

Get a single snippet for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.SnippetApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let snippet_name = "snippet_name_example"; // String | 
apiInstance.getSnippet(service_id, version_id, snippet_name).then((data) => {
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
 **snippet_name** | **String**|  | 

### Return type

[**ModelSnippet**](ModelSnippet.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSnippetDynamic

> ModelSnippet getSnippetDynamic(service_id, snippet_id)

Get a dynamic snippet

Get a single dynamic snippet for a particular service.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.SnippetApi();
let service_id = "service_id_example"; // String | 
let snippet_id = "snippet_id_example"; // String | 
apiInstance.getSnippetDynamic(service_id, snippet_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **snippet_id** | **String**|  | 

### Return type

[**ModelSnippet**](ModelSnippet.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSnippets

> [ModelSnippet] listSnippets(service_id, version_id)

List snippets

List all snippets for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.SnippetApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listSnippets(service_id, version_id).then((data) => {
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

[**[ModelSnippet]**](ModelSnippet.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSnippet

> ModelSnippet updateSnippet(service_id, version_id, snippet_name)

Update a versioned snippet

Update a specific snippet for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.SnippetApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let snippet_name = "snippet_name_example"; // String | 
apiInstance.updateSnippet(service_id, version_id, snippet_name).then((data) => {
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
 **snippet_name** | **String**|  | 

### Return type

[**ModelSnippet**](ModelSnippet.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## updateSnippetDynamic

> ModelSnippet updateSnippetDynamic(service_id, snippet_id)

Update a dynamic snippet

Update a dynamic snippet for a particular service.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.SnippetApi();
let service_id = "service_id_example"; // String | 
let snippet_id = "snippet_id_example"; // String | 
apiInstance.updateSnippetDynamic(service_id, snippet_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **snippet_id** | **String**|  | 

### Return type

[**ModelSnippet**](ModelSnippet.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

