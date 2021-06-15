# FastlyApi.GzipApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGzipConfig**](GzipApi.md#createGzipConfig) | **POST** /service/{service_id}/version/{version_id}/gzip | Create a gzip configuration
[**deleteGzipConfig**](GzipApi.md#deleteGzipConfig) | **DELETE** /service/{service_id}/version/{version_id}/gzip/{gzip_name} | Delete a gzip configuration
[**getGzipConfigs**](GzipApi.md#getGzipConfigs) | **GET** /service/{service_id}/version/{version_id}/gzip/{gzip_name} | Get a gzip configuration
[**listGzipConfigs**](GzipApi.md#listGzipConfigs) | **GET** /service/{service_id}/version/{version_id}/gzip | List gzip configurations
[**updateGzipConfig**](GzipApi.md#updateGzipConfig) | **PUT** /service/{service_id}/version/{version_id}/gzip/{gzip_name} | Update a gzip configuration



## createGzipConfig

> ModelGzip createGzipConfig(service_id, version_id, opts)

Create a gzip configuration

Create a named gzip configuration on a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.GzipApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'cache_condition': "cache_condition_example", // String | Name of the cache condition controlling when this configuration applies.
  'content_types': "content_types_example", // String | Space-separated list of content types to compress. If you omit this field a default list will be used.
  'extensions': "extensions_example", // String | Space-separated list of file extensions to compress. If you omit this field a default list will be used.
  'name': "name_example" // String | Name of the gzip configuration.
};
apiInstance.createGzipConfig(service_id, version_id, opts).then((data) => {
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
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **cache_condition** | **String**| Name of the cache condition controlling when this configuration applies. | [optional] 
 **content_types** | **String**| Space-separated list of content types to compress. If you omit this field a default list will be used. | [optional] 
 **extensions** | **String**| Space-separated list of file extensions to compress. If you omit this field a default list will be used. | [optional] 
 **name** | **String**| Name of the gzip configuration. | [optional] 

### Return type

[**ModelGzip**](ModelGzip.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteGzipConfig

> Object deleteGzipConfig(service_id, version_id, gzip_name)

Delete a gzip configuration

Delete a named gzip configuration on a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.GzipApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let gzip_name = "gzip_name_example"; // String | 
apiInstance.deleteGzipConfig(service_id, version_id, gzip_name).then((data) => {
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
 **gzip_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGzipConfigs

> ModelGzip getGzipConfigs(service_id, version_id, gzip_name)

Get a gzip configuration

Get the gzip configuration for a particular service, version, and name.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.GzipApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let gzip_name = "gzip_name_example"; // String | 
apiInstance.getGzipConfigs(service_id, version_id, gzip_name).then((data) => {
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
 **gzip_name** | **String**|  | 

### Return type

[**ModelGzip**](ModelGzip.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listGzipConfigs

> [ModelGzip] listGzipConfigs(service_id, version_id)

List gzip configurations

List all gzip configurations for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.GzipApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listGzipConfigs(service_id, version_id).then((data) => {
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

[**[ModelGzip]**](ModelGzip.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateGzipConfig

> ModelGzip updateGzipConfig(service_id, version_id, gzip_name, opts)

Update a gzip configuration

Update a named gzip configuration on a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.GzipApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let gzip_name = "gzip_name_example"; // String | 
let opts = {
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'cache_condition': "cache_condition_example", // String | Name of the cache condition controlling when this configuration applies.
  'content_types': "content_types_example", // String | Space-separated list of content types to compress. If you omit this field a default list will be used.
  'extensions': "extensions_example", // String | Space-separated list of file extensions to compress. If you omit this field a default list will be used.
  'name': "name_example" // String | Name of the gzip configuration.
};
apiInstance.updateGzipConfig(service_id, version_id, gzip_name, opts).then((data) => {
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
 **gzip_name** | **String**|  | 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **cache_condition** | **String**| Name of the cache condition controlling when this configuration applies. | [optional] 
 **content_types** | **String**| Space-separated list of content types to compress. If you omit this field a default list will be used. | [optional] 
 **extensions** | **String**| Space-separated list of file extensions to compress. If you omit this field a default list will be used. | [optional] 
 **name** | **String**| Name of the gzip configuration. | [optional] 

### Return type

[**ModelGzip**](ModelGzip.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

