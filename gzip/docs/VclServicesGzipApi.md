# Gzip.VclServicesGzipApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGzipConfig**](VclServicesGzipApi.md#createGzipConfig) | **POST** /service/{service_id}/version/{version_id}/gzip | Create a gzip configuration
[**deleteGzipConfig**](VclServicesGzipApi.md#deleteGzipConfig) | **DELETE** /service/{service_id}/version/{version_id}/gzip/{gzip_name} | Delete a gzip configuration
[**getGzipConfigs**](VclServicesGzipApi.md#getGzipConfigs) | **GET** /service/{service_id}/version/{version_id}/gzip/{gzip_name} | Get a gzip configuration
[**listGzipConfigs**](VclServicesGzipApi.md#listGzipConfigs) | **GET** /service/{service_id}/version/{version_id}/gzip | List gzip configurations
[**updateGzipConfig**](VclServicesGzipApi.md#updateGzipConfig) | **PUT** /service/{service_id}/version/{version_id}/gzip/{gzip_name} | Update a gzip configuration



## createGzipConfig

> InlineObject createGzipConfig(serviceId, versionId, opts)

Create a gzip configuration

Create a named gzip configuration on a particular service and version.

### Example

```javascript
import Gzip from 'gzip';
let defaultClient = Gzip.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Gzip.VclServicesGzipApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let opts = {
  'serviceId2': "serviceId_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'cacheCondition': "cacheCondition_example", // String | Name of the cache condition controlling when this configuration applies.
  'contentTypes': "contentTypes_example", // String | Space-separated list of content types to compress. If you omit this field a default list will be used.
  'extensions': "extensions_example", // String | Space-separated list of file extensions to compress. If you omit this field a default list will be used.
  'name': "name_example" // String | Name of the gzip configuration.
};
apiInstance.createGzipConfig(serviceId, versionId, opts).then((data) => {
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
 **serviceId2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **cacheCondition** | **String**| Name of the cache condition controlling when this configuration applies. | [optional] 
 **contentTypes** | **String**| Space-separated list of content types to compress. If you omit this field a default list will be used. | [optional] 
 **extensions** | **String**| Space-separated list of file extensions to compress. If you omit this field a default list will be used. | [optional] 
 **name** | **String**| Name of the gzip configuration. | [optional] 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteGzipConfig

> Object deleteGzipConfig(serviceId, versionId, gzipName)

Delete a gzip configuration

Delete a named gzip configuration on a particular service and version.

### Example

```javascript
import Gzip from 'gzip';
let defaultClient = Gzip.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Gzip.VclServicesGzipApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let gzipName = gzip-config-name; // String | 
apiInstance.deleteGzipConfig(serviceId, versionId, gzipName).then((data) => {
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
 **gzipName** | **String**|  | 

### Return type

**Object**

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGzipConfigs

> InlineObject getGzipConfigs(serviceId, versionId, gzipName)

Get a gzip configuration

Get the gzip configuration for a particular service, version, and name.

### Example

```javascript
import Gzip from 'gzip';
let defaultClient = Gzip.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Gzip.VclServicesGzipApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let gzipName = gzip-config-name; // String | 
apiInstance.getGzipConfigs(serviceId, versionId, gzipName).then((data) => {
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
 **gzipName** | **String**|  | 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listGzipConfigs

> [InlineResponse200] listGzipConfigs(serviceId, versionId)

List gzip configurations

List all gzip configurations for a particular service and version.

### Example

```javascript
import Gzip from 'gzip';
let defaultClient = Gzip.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Gzip.VclServicesGzipApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.listGzipConfigs(serviceId, versionId).then((data) => {
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


## updateGzipConfig

> InlineObject1 updateGzipConfig(serviceId, versionId, gzipName, opts)

Update a gzip configuration

Update a named gzip configuration on a particular service and version.

### Example

```javascript
import Gzip from 'gzip';
let defaultClient = Gzip.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Gzip.VclServicesGzipApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let gzipName = gzip-config-name; // String | 
let opts = {
  'serviceId2': "serviceId_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'cacheCondition': "cacheCondition_example", // String | Name of the cache condition controlling when this configuration applies.
  'contentTypes': "contentTypes_example", // String | Space-separated list of content types to compress. If you omit this field a default list will be used.
  'extensions': "extensions_example", // String | Space-separated list of file extensions to compress. If you omit this field a default list will be used.
  'name': "name_example" // String | Name of the gzip configuration.
};
apiInstance.updateGzipConfig(serviceId, versionId, gzipName, opts).then((data) => {
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
 **gzipName** | **String**|  | 
 **serviceId2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **cacheCondition** | **String**| Name of the cache condition controlling when this configuration applies. | [optional] 
 **contentTypes** | **String**| Space-separated list of content types to compress. If you omit this field a default list will be used. | [optional] 
 **extensions** | **String**| Space-separated list of file extensions to compress. If you omit this field a default list will be used. | [optional] 
 **name** | **String**| Name of the gzip configuration. | [optional] 

### Return type

[**InlineObject1**](InlineObject1.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

