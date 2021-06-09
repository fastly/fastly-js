# CacheSettings.VclServicesCacheSettingsApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCacheSettings**](VclServicesCacheSettingsApi.md#createCacheSettings) | **POST** /service/{service_id}/version/{version_id}/cache_settings | Create a cache settings object
[**deleteCacheSettings**](VclServicesCacheSettingsApi.md#deleteCacheSettings) | **DELETE** /service/{service_id}/version/{version_id}/cache_settings/{cache_settings_name} | Delete a cache settings object
[**getCacheSettings**](VclServicesCacheSettingsApi.md#getCacheSettings) | **GET** /service/{service_id}/version/{version_id}/cache_settings/{cache_settings_name} | Get a cache settings object
[**listCacheSettings**](VclServicesCacheSettingsApi.md#listCacheSettings) | **GET** /service/{service_id}/version/{version_id}/cache_settings | List cache settings objects
[**updateCacheSettings**](VclServicesCacheSettingsApi.md#updateCacheSettings) | **PUT** /service/{service_id}/version/{version_id}/cache_settings/{cache_settings_name} | Update a cache settings object



## createCacheSettings

> InlineObject createCacheSettings(serviceId, versionId, opts)

Create a cache settings object

Create a cache settings object.

### Example

```javascript
import CacheSettings from 'cache_settings';
let defaultClient = CacheSettings.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new CacheSettings.VclServicesCacheSettingsApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let opts = {
  'serviceId2': "serviceId_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'action': "action_example", // String | If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule. 
  'cacheCondition': "cacheCondition_example", // String | Name of the cache condition controlling when this configuration applies.
  'name': "name_example", // String | Name for the cache settings object.
  'staleTtl': 56, // Number | Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as 'stale if error').
  'ttl': 56 // Number | Maximum time to consider the object fresh in the cache (the cache 'time to live').
};
apiInstance.createCacheSettings(serviceId, versionId, opts).then((data) => {
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
 **action** | **String**| If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule.  | [optional] 
 **cacheCondition** | **String**| Name of the cache condition controlling when this configuration applies. | [optional] 
 **name** | **String**| Name for the cache settings object. | [optional] 
 **staleTtl** | **Number**| Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as &#39;stale if error&#39;). | [optional] 
 **ttl** | **Number**| Maximum time to consider the object fresh in the cache (the cache &#39;time to live&#39;). | [optional] 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteCacheSettings

> Object deleteCacheSettings(serviceId, versionId, cacheSettingsName)

Delete a cache settings object

Delete a specific cache settings object.

### Example

```javascript
import CacheSettings from 'cache_settings';
let defaultClient = CacheSettings.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new CacheSettings.VclServicesCacheSettingsApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let cacheSettingsName = my-cache-setting; // String | 
apiInstance.deleteCacheSettings(serviceId, versionId, cacheSettingsName).then((data) => {
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
 **cacheSettingsName** | **String**|  | 

### Return type

**Object**

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCacheSettings

> InlineObject getCacheSettings(serviceId, versionId, cacheSettingsName)

Get a cache settings object

Get a specific cache settings object.

### Example

```javascript
import CacheSettings from 'cache_settings';
let defaultClient = CacheSettings.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new CacheSettings.VclServicesCacheSettingsApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let cacheSettingsName = my-cache-setting; // String | 
apiInstance.getCacheSettings(serviceId, versionId, cacheSettingsName).then((data) => {
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
 **cacheSettingsName** | **String**|  | 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCacheSettings

> [InlineResponse200] listCacheSettings(serviceId, versionId)

List cache settings objects

Get a list of all cache settings for a particular service and version.

### Example

```javascript
import CacheSettings from 'cache_settings';
let defaultClient = CacheSettings.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new CacheSettings.VclServicesCacheSettingsApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.listCacheSettings(serviceId, versionId).then((data) => {
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


## updateCacheSettings

> InlineObject1 updateCacheSettings(serviceId, versionId, cacheSettingsName, opts)

Update a cache settings object

Update a specific cache settings object.

### Example

```javascript
import CacheSettings from 'cache_settings';
let defaultClient = CacheSettings.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new CacheSettings.VclServicesCacheSettingsApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let cacheSettingsName = my-cache-setting; // String | 
let opts = {
  'serviceId2': "serviceId_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'action': "action_example", // String | If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule. 
  'cacheCondition': "cacheCondition_example", // String | Name of the cache condition controlling when this configuration applies.
  'name': "name_example", // String | Name for the cache settings object.
  'staleTtl': 56, // Number | Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as 'stale if error').
  'ttl': 56 // Number | Maximum time to consider the object fresh in the cache (the cache 'time to live').
};
apiInstance.updateCacheSettings(serviceId, versionId, cacheSettingsName, opts).then((data) => {
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
 **cacheSettingsName** | **String**|  | 
 **serviceId2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **action** | **String**| If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule.  | [optional] 
 **cacheCondition** | **String**| Name of the cache condition controlling when this configuration applies. | [optional] 
 **name** | **String**| Name for the cache settings object. | [optional] 
 **staleTtl** | **Number**| Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as &#39;stale if error&#39;). | [optional] 
 **ttl** | **Number**| Maximum time to consider the object fresh in the cache (the cache &#39;time to live&#39;). | [optional] 

### Return type

[**InlineObject1**](InlineObject1.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

