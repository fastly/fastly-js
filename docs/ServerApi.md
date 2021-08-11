# FastlyApi.ServerApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createPoolServer**](ServerApi.md#createPoolServer) | **POST** /service/{service_id}/pool/{pool_id}/server | Add a server to a pool
[**deletePoolServer**](ServerApi.md#deletePoolServer) | **DELETE** /service/{service_id}/pool/{pool_id}/server/{server_id} | Delete a server from a pool
[**getPoolServer**](ServerApi.md#getPoolServer) | **GET** /service/{service_id}/pool/{pool_id}/server/{server_id} | Get a pool server
[**listPoolServers**](ServerApi.md#listPoolServers) | **GET** /service/{service_id}/pool/{pool_id}/servers | List servers in a pool
[**updatePoolServer**](ServerApi.md#updatePoolServer) | **PUT** /service/{service_id}/pool/{pool_id}/server/{server_id} | Update a server



## `createPoolServer`

> ServerResponse createPoolServer(service_id, pool_id, opts)

Add a server to a pool

Creates a single server for a particular service and pool.

### Example

```javascript
let apiInstance = new FastlyApi.ServerApi();
let service_id = "service_id_example"; // String | 
let pool_id = "pool_id_example"; // String | 
let opts = {
  'weight': 100, // Number | Weight (`1-100`) used to load balance this server against others.
  'max_conn': 0, // Number | Maximum number of connections. If the value is `0`, it inherits the value from pool's `max_conn_default`.
  'port': 80, // Number | Port number. Setting port `443` does not force TLS. Set `use_tls` in pool to force TLS.
  'address': "address_example", // String | A hostname, IPv4, or IPv6 address for the server. Required.
  'comment': "comment_example", // String | A freeform descriptive note.
  'disabled': false, // Boolean | Allows servers to be enabled and disabled in a pool.
  'override_host': "'null'" // String | The hostname to override the Host header. Defaults to `null` meaning no override of the Host header if not set. This setting can also be added to a Pool definition. However, the server setting will override the Pool setting.
};
apiInstance.createPoolServer(service_id, pool_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**pool_id** | **String** |  |
**weight** | **Number** | Weight (&#x60;1-100&#x60;) used to load balance this server against others. | [optional] [default to 100]
**max_conn** | **Number** | Maximum number of connections. If the value is &#x60;0&#x60;, it inherits the value from pool&#39;s &#x60;max_conn_default&#x60;. | [optional] [default to 0]
**port** | **Number** | Port number. Setting port &#x60;443&#x60; does not force TLS. Set &#x60;use_tls&#x60; in pool to force TLS. | [optional] [default to 80]
**address** | **String** | A hostname, IPv4, or IPv6 address for the server. Required. | [optional]
**comment** | **String** | A freeform descriptive note. | [optional]
**disabled** | **Boolean** | Allows servers to be enabled and disabled in a pool. | [optional] [default to false]
**override_host** | **String** | The hostname to override the Host header. Defaults to &#x60;null&#x60; meaning no override of the Host header if not set. This setting can also be added to a Pool definition. However, the server setting will override the Pool setting. | [optional] [default to &#39;null&#39;]

### Return type

[**ServerResponse**](ServerResponse.md)


## `deletePoolServer`

> Object deletePoolServer(service_id, pool_id, server_id)

Delete a server from a pool

Deletes a single server for a particular service and pool.

### Example

```javascript
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
**service_id** | **String** |  |
**pool_id** | **String** |  |
**server_id** | **String** |  |

### Return type

**Object**


## `getPoolServer`

> ServerResponse getPoolServer(service_id, pool_id, server_id)

Get a pool server

Gets a single server for a particular service and pool.

### Example

```javascript
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
**service_id** | **String** |  |
**pool_id** | **String** |  |
**server_id** | **String** |  |

### Return type

[**ServerResponse**](ServerResponse.md)


## `listPoolServers`

> [ServerResponse] listPoolServers(service_id, pool_id)

List servers in a pool

Lists all servers for a particular service and pool.

### Example

```javascript
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
**service_id** | **String** |  |
**pool_id** | **String** |  |

### Return type

[**[ServerResponse]**](ServerResponse.md)


## `updatePoolServer`

> ServerResponse updatePoolServer(service_id, pool_id, server_id, opts)

Update a server

Updates a single server for a particular service and pool.

### Example

```javascript
let apiInstance = new FastlyApi.ServerApi();
let service_id = "service_id_example"; // String | 
let pool_id = "pool_id_example"; // String | 
let server_id = "server_id_example"; // String | 
let opts = {
  'weight': 100, // Number | Weight (`1-100`) used to load balance this server against others.
  'max_conn': 0, // Number | Maximum number of connections. If the value is `0`, it inherits the value from pool's `max_conn_default`.
  'port': 80, // Number | Port number. Setting port `443` does not force TLS. Set `use_tls` in pool to force TLS.
  'address': "address_example", // String | A hostname, IPv4, or IPv6 address for the server. Required.
  'comment': "comment_example", // String | A freeform descriptive note.
  'disabled': false, // Boolean | Allows servers to be enabled and disabled in a pool.
  'override_host': "'null'" // String | The hostname to override the Host header. Defaults to `null` meaning no override of the Host header if not set. This setting can also be added to a Pool definition. However, the server setting will override the Pool setting.
};
apiInstance.updatePoolServer(service_id, pool_id, server_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**pool_id** | **String** |  |
**server_id** | **String** |  |
**weight** | **Number** | Weight (&#x60;1-100&#x60;) used to load balance this server against others. | [optional] [default to 100]
**max_conn** | **Number** | Maximum number of connections. If the value is &#x60;0&#x60;, it inherits the value from pool&#39;s &#x60;max_conn_default&#x60;. | [optional] [default to 0]
**port** | **Number** | Port number. Setting port &#x60;443&#x60; does not force TLS. Set &#x60;use_tls&#x60; in pool to force TLS. | [optional] [default to 80]
**address** | **String** | A hostname, IPv4, or IPv6 address for the server. Required. | [optional]
**comment** | **String** | A freeform descriptive note. | [optional]
**disabled** | **Boolean** | Allows servers to be enabled and disabled in a pool. | [optional] [default to false]
**override_host** | **String** | The hostname to override the Host header. Defaults to &#x60;null&#x60; meaning no override of the Host header if not set. This setting can also be added to a Pool definition. However, the server setting will override the Pool setting. | [optional] [default to &#39;null&#39;]

### Return type

[**ServerResponse**](ServerResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
