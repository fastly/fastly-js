# FastlyApi.VclApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomVcl**](VclApi.md#createCustomVcl) | **POST** /service/{service_id}/version/{version_id}/vcl | Create a custom VCL file
[**deleteCustomVcl**](VclApi.md#deleteCustomVcl) | **DELETE** /service/{service_id}/version/{version_id}/vcl/{vcl_name} | Delete a custom VCL file
[**getCustomVcl**](VclApi.md#getCustomVcl) | **GET** /service/{service_id}/version/{version_id}/vcl/{vcl_name} | Get a custom VCL file
[**getCustomVclBoilerplate**](VclApi.md#getCustomVclBoilerplate) | **GET** /service/{service_id}/version/{version_id}/boilerplate | Get boilerplate VCL
[**getCustomVclGenerated**](VclApi.md#getCustomVclGenerated) | **GET** /service/{service_id}/version/{version_id}/generated_vcl | Get the generated VCL for a service
[**getCustomVclGeneratedHighlighted**](VclApi.md#getCustomVclGeneratedHighlighted) | **GET** /service/{service_id}/version/{version_id}/generated_vcl/content | Get the generated VCL with syntax highlighting
[**getCustomVclHighlighted**](VclApi.md#getCustomVclHighlighted) | **GET** /service/{service_id}/version/{version_id}/vcl/{vcl_name}/content | Get a custom VCL file with syntax highlighting
[**getCustomVclRaw**](VclApi.md#getCustomVclRaw) | **GET** /service/{service_id}/version/{version_id}/vcl/{vcl_name}/download | Download a custom VCL file
[**listCustomVcl**](VclApi.md#listCustomVcl) | **GET** /service/{service_id}/version/{version_id}/vcl | List custom VCL files
[**setCustomVclMain**](VclApi.md#setCustomVclMain) | **PUT** /service/{service_id}/version/{version_id}/vcl/{vcl_name}/main | Set a custom VCL file as main
[**updateCustomVcl**](VclApi.md#updateCustomVcl) | **PUT** /service/{service_id}/version/{version_id}/vcl/{vcl_name} | Update a custom VCL file



## createCustomVcl

> ModelVcl createCustomVcl(service_id, version_id)

Create a custom VCL file

Upload a VCL for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.createCustomVcl(service_id, version_id).then((data) => {
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

[**ModelVcl**](ModelVcl.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteCustomVcl

> Object deleteCustomVcl(service_id, version_id, vcl_name)

Delete a custom VCL file

Delete the uploaded VCL for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let vcl_name = "vcl_name_example"; // String | 
apiInstance.deleteCustomVcl(service_id, version_id, vcl_name).then((data) => {
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
 **vcl_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomVcl

> ModelVcl getCustomVcl(service_id, version_id, vcl_name, opts)

Get a custom VCL file

Get the uploaded VCL for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let vcl_name = "vcl_name_example"; // String | 
let opts = {
  'no_content': "no_content_example" // String | Omit VCL content (default 0).
};
apiInstance.getCustomVcl(service_id, version_id, vcl_name, opts).then((data) => {
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
 **vcl_name** | **String**|  | 
 **no_content** | **String**| Omit VCL content (default 0). | [optional] 

### Return type

[**ModelVcl**](ModelVcl.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomVclBoilerplate

> getCustomVclBoilerplate(service_id, version_id)

Get boilerplate VCL

Return boilerplate VCL with the service&#39;s TTL from the [settings](/reference/api/vcl-services/settings/).

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.getCustomVclBoilerplate(service_id, version_id).then(() => {
  console.log('API called successfully.');
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

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


## getCustomVclGenerated

> ModelVcl getCustomVclGenerated(service_id, version_id)

Get the generated VCL for a service

Display the generated VCL for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.getCustomVclGenerated(service_id, version_id).then((data) => {
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

[**ModelVcl**](ModelVcl.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomVclGeneratedHighlighted

> getCustomVclGeneratedHighlighted(service_id, version_id)

Get the generated VCL with syntax highlighting

Display the content of generated VCL with HTML syntax highlighting. Include line numbers by sending &#x60;lineno&#x3D;true&#x60; as a request parameter.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.getCustomVclGeneratedHighlighted(service_id, version_id).then(() => {
  console.log('API called successfully.');
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

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomVclHighlighted

> getCustomVclHighlighted(service_id, version_id, vcl_name)

Get a custom VCL file with syntax highlighting

Get the uploaded VCL for a particular service and version with HTML syntax highlighting. Include line numbers by sending &#x60;lineno&#x3D;true&#x60; as a request parameter.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let vcl_name = "vcl_name_example"; // String | 
apiInstance.getCustomVclHighlighted(service_id, version_id, vcl_name).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **vcl_name** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomVclRaw

> getCustomVclRaw(service_id, version_id, vcl_name)

Download a custom VCL file

Download the specified VCL.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let vcl_name = "vcl_name_example"; // String | 
apiInstance.getCustomVclRaw(service_id, version_id, vcl_name).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **vcl_name** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


## listCustomVcl

> [ModelVcl] listCustomVcl(service_id, version_id)

List custom VCL files

List the uploaded VCLs for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listCustomVcl(service_id, version_id).then((data) => {
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

[**[ModelVcl]**](ModelVcl.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setCustomVclMain

> ModelVcl setCustomVclMain(service_id, version_id, vcl_name)

Set a custom VCL file as main

Set the specified VCL as the main.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let vcl_name = "vcl_name_example"; // String | 
apiInstance.setCustomVclMain(service_id, version_id, vcl_name).then((data) => {
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
 **vcl_name** | **String**|  | 

### Return type

[**ModelVcl**](ModelVcl.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCustomVcl

> ModelVcl updateCustomVcl(service_id, version_id, vcl_name)

Update a custom VCL file

Update the uploaded VCL for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.VclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let vcl_name = "vcl_name_example"; // String | 
apiInstance.updateCustomVcl(service_id, version_id, vcl_name).then((data) => {
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
 **vcl_name** | **String**|  | 

### Return type

[**ModelVcl**](ModelVcl.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

