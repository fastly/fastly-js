# Server.LoadBalancingPoolsServerApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPoolServer**](LoadBalancingPoolsServerApi.md#createPoolServer) | **POST** /service/{service_id}/pool/{pool_id}/server | Add a server to a pool
[**deletePoolServer**](LoadBalancingPoolsServerApi.md#deletePoolServer) | **DELETE** /service/{service_id}/pool/{pool_id}/server/{server_id} | Delete a server from a pool
[**getPoolServer**](LoadBalancingPoolsServerApi.md#getPoolServer) | **GET** /service/{service_id}/pool/{pool_id}/server/{server_id} | Get a pool server
[**listPoolServers**](LoadBalancingPoolsServerApi.md#listPoolServers) | **GET** /service/{service_id}/pool/{pool_id}/servers | List servers in a pool
[**updatePoolServer**](LoadBalancingPoolsServerApi.md#updatePoolServer) | **PUT** /service/{service_id}/pool/{pool_id}/server/{server_id} | Update a server



## createPoolServer

> InlineResponse200 createPoolServer(serviceId, poolId)

Add a server to a pool

Creates a single server for a particular service and pool.

### Example

```javascript
import Server from 'server';
let defaultClient = Server.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Server.LoadBalancingPoolsServerApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let poolId = 2Yd1WfiCBPENLloXfXmlO; // String | 
apiInstance.createPoolServer(serviceId, poolId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **poolId** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deletePoolServer

> Object deletePoolServer(serviceId, poolId, serverId)

Delete a server from a pool

Deletes a single server for a particular service and pool.

### Example

```javascript
import Server from 'server';
let defaultClient = Server.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Server.LoadBalancingPoolsServerApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let poolId = 2Yd1WfiCBPENLloXfXmlO; // String | 
let serverId = 6kEuoknxiaDBCLiAjKqyXq; // String | 
apiInstance.deletePoolServer(serviceId, poolId, serverId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **poolId** | **String**|  | 
 **serverId** | **String**|  | 

### Return type

**Object**

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPoolServer

> InlineResponse200 getPoolServer(serviceId, poolId, serverId)

Get a pool server

Gets a single server for a particular service and pool.

### Example

```javascript
import Server from 'server';
let defaultClient = Server.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Server.LoadBalancingPoolsServerApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let poolId = 2Yd1WfiCBPENLloXfXmlO; // String | 
let serverId = 6kEuoknxiaDBCLiAjKqyXq; // String | 
apiInstance.getPoolServer(serviceId, poolId, serverId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **poolId** | **String**|  | 
 **serverId** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPoolServers

> [InlineResponse200] listPoolServers(serviceId, poolId)

List servers in a pool

Lists all servers for a particular service and pool.

### Example

```javascript
import Server from 'server';
let defaultClient = Server.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Server.LoadBalancingPoolsServerApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let poolId = 2Yd1WfiCBPENLloXfXmlO; // String | 
apiInstance.listPoolServers(serviceId, poolId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **poolId** | **String**|  | 

### Return type

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatePoolServer

> InlineResponse200 updatePoolServer(serviceId, poolId, serverId)

Update a server

Updates a single server for a particular service and pool.

### Example

```javascript
import Server from 'server';
let defaultClient = Server.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Server.LoadBalancingPoolsServerApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let poolId = 2Yd1WfiCBPENLloXfXmlO; // String | 
let serverId = 6kEuoknxiaDBCLiAjKqyXq; // String | 
apiInstance.updatePoolServer(serviceId, poolId, serverId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **poolId** | **String**|  | 
 **serverId** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

