# FastlyApi.ServerApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPoolServer**](ServerApi.md#createPoolServer) | **POST** /service/{service_id}/pool/{pool_id}/server | Add a server to a pool
[**deletePoolServer**](ServerApi.md#deletePoolServer) | **DELETE** /service/{service_id}/pool/{pool_id}/server/{server_id} | Delete a server from a pool
[**getPoolServer**](ServerApi.md#getPoolServer) | **GET** /service/{service_id}/pool/{pool_id}/server/{server_id} | Get a pool server
[**listPoolServers**](ServerApi.md#listPoolServers) | **GET** /service/{service_id}/pool/{pool_id}/servers | List servers in a pool
[**updatePoolServer**](ServerApi.md#updatePoolServer) | **PUT** /service/{service_id}/pool/{pool_id}/server/{server_id} | Update a server



## createPoolServer

> ModelServer createPoolServer(service_id, pool_id)

Add a server to a pool

Creates a single server for a particular service and pool.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ServerApi();
let service_id = "service_id_example"; // String | 
let pool_id = "pool_id_example"; // String | 
apiInstance.createPoolServer(service_id, pool_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **pool_id** | **String**|  | 

### Return type

[**ModelServer**](ModelServer.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deletePoolServer

> Object deletePoolServer(service_id, pool_id, server_id)

Delete a server from a pool

Deletes a single server for a particular service and pool.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ServerApi();
let service_id = "service_id_example"; // String | 
let pool_id = "pool_id_example"; // String | 
let server_id = "server_id_example"; // String | 
apiInstance.deletePoolServer(service_id, pool_id, server_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **pool_id** | **String**|  | 
 **server_id** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPoolServer

> ModelServer getPoolServer(service_id, pool_id, server_id)

Get a pool server

Gets a single server for a particular service and pool.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ServerApi();
let service_id = "service_id_example"; // String | 
let pool_id = "pool_id_example"; // String | 
let server_id = "server_id_example"; // String | 
apiInstance.getPoolServer(service_id, pool_id, server_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **pool_id** | **String**|  | 
 **server_id** | **String**|  | 

### Return type

[**ModelServer**](ModelServer.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPoolServers

> [ModelServer] listPoolServers(service_id, pool_id)

List servers in a pool

Lists all servers for a particular service and pool.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ServerApi();
let service_id = "service_id_example"; // String | 
let pool_id = "pool_id_example"; // String | 
apiInstance.listPoolServers(service_id, pool_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **pool_id** | **String**|  | 

### Return type

[**[ModelServer]**](ModelServer.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatePoolServer

> ModelServer updatePoolServer(service_id, pool_id, server_id)

Update a server

Updates a single server for a particular service and pool.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ServerApi();
let service_id = "service_id_example"; // String | 
let pool_id = "pool_id_example"; // String | 
let server_id = "server_id_example"; // String | 
apiInstance.updatePoolServer(service_id, pool_id, server_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **pool_id** | **String**|  | 
 **server_id** | **String**|  | 

### Return type

[**ModelServer**](ModelServer.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

