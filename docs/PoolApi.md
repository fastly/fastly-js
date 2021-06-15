# FastlyApi.PoolApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createServerPool**](PoolApi.md#createServerPool) | **POST** /service/{service_id}/version/{version_id}/pool | Create a server pool
[**deleteServerPool**](PoolApi.md#deleteServerPool) | **DELETE** /service/{service_id}/version/{version_id}/pool/{pool_name} | Delete a server pool
[**getServerPool**](PoolApi.md#getServerPool) | **GET** /service/{service_id}/version/{version_id}/pool/{pool_name} | Get a server pool
[**listServerPools**](PoolApi.md#listServerPools) | **GET** /service/{service_id}/version/{version_id}/pool | List server pools
[**updateServerPool**](PoolApi.md#updateServerPool) | **PUT** /service/{service_id}/version/{version_id}/pool/{pool_name} | Update a server pool



## createServerPool

> ModelPool createServerPool(service_id, version_id)

Create a server pool

Creates a pool for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.PoolApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.createServerPool(service_id, version_id).then((data) => {
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

[**ModelPool**](ModelPool.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteServerPool

> Object deleteServerPool(service_id, version_id, pool_name)

Delete a server pool

Deletes a specific pool for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.PoolApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let pool_name = "pool_name_example"; // String | 
apiInstance.deleteServerPool(service_id, version_id, pool_name).then((data) => {
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
 **pool_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getServerPool

> ModelPool getServerPool(service_id, version_id, pool_name)

Get a server pool

Gets a single pool for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.PoolApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let pool_name = "pool_name_example"; // String | 
apiInstance.getServerPool(service_id, version_id, pool_name).then((data) => {
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
 **pool_name** | **String**|  | 

### Return type

[**ModelPool**](ModelPool.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listServerPools

> [ModelPool] listServerPools(service_id, version_id)

List server pools

Lists all pools for a particular service and pool.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.PoolApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listServerPools(service_id, version_id).then((data) => {
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

[**[ModelPool]**](ModelPool.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateServerPool

> ModelPool updateServerPool(service_id, version_id, pool_name)

Update a server pool

Updates a specific pool for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.PoolApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let pool_name = "pool_name_example"; // String | 
apiInstance.updateServerPool(service_id, version_id, pool_name).then((data) => {
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
 **pool_name** | **String**|  | 

### Return type

[**ModelPool**](ModelPool.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

