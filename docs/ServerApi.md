# Fastly.ServerApi


```javascript
const apiInstance = new Fastly.ServerApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createPoolServer**](ServerApi.md#createPoolServer) | **POST** /service/{service_id}/pool/{pool_id}/server | Add a server to a pool
[**deletePoolServer**](ServerApi.md#deletePoolServer) | **DELETE** /service/{service_id}/pool/{pool_id}/server/{server_id} | Delete a server from a pool
[**getPoolServer**](ServerApi.md#getPoolServer) | **GET** /service/{service_id}/pool/{pool_id}/server/{server_id} | Get a pool server
[**listPoolServers**](ServerApi.md#listPoolServers) | **GET** /service/{service_id}/pool/{pool_id}/servers | List servers in a pool
[**updatePoolServer**](ServerApi.md#updatePoolServer) | **PUT** /service/{service_id}/pool/{pool_id}/server/{server_id} | Update a server



## `createPoolServer`

```javascript
createPoolServer({ service_id, pool_id, [address, ], [comment, ], [disabled, ], [max_conn, ], [override_host, ], [port, ], [weight] })
```

Creates a single server for a particular service and pool.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  pool_id: "pool_id_example", // required
  address: "address_example",
  comment: "comment_example",
  disabled: false,
  max_conn: 0,
  override_host: "'null'",
  port: 80,
  weight: 100,
};

apiInstance.createPoolServer(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**pool_id** | **String** |  |
**address** | **String** | A hostname, IPv4, or IPv6 address for the server. Required. | [optional]
**comment** | **String** | A freeform descriptive note. | [optional]
**disabled** | **Boolean** | Allows servers to be enabled and disabled in a pool. | [optional] [default to false]
**max_conn** | **Number** | Maximum number of connections. If the value is &#x60;0&#x60;, it inherits the value from pool&#39;s &#x60;max_conn_default&#x60;. | [optional] [default to 0]
**override_host** | **String** | The hostname to override the Host header. Defaults to &#x60;null&#x60; meaning no override of the Host header if not set. This setting can also be added to a Pool definition. However, the server setting will override the Pool setting. | [optional] [default to &#39;null&#39;]
**port** | **Number** | Port number. Setting port &#x60;443&#x60; does not force TLS. Set &#x60;use_tls&#x60; in pool to force TLS. | [optional] [default to 80]
**weight** | **Number** | Weight (&#x60;1-100&#x60;) used to load balance this server against others. | [optional] [default to 100]

### Return type

[**Timestamps**](Timestamps.md)


## `deletePoolServer`

```javascript
deletePoolServer({ service_id, pool_id, server_id })
```

Deletes a single server for a particular service and pool.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  pool_id: "pool_id_example", // required
  server_id: "server_id_example", // required
};

apiInstance.deletePoolServer(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**pool_id** | **String** |  |
**server_id** | **String** |  |

### Return type

**Object**


## `getPoolServer`

```javascript
getPoolServer({ service_id, pool_id, server_id })
```

Gets a single server for a particular service and pool.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  pool_id: "pool_id_example", // required
  server_id: "server_id_example", // required
};

apiInstance.getPoolServer(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**pool_id** | **String** |  |
**server_id** | **String** |  |

### Return type

[**Timestamps**](Timestamps.md)


## `listPoolServers`

```javascript
listPoolServers({ service_id, pool_id })
```

Lists all servers for a particular service and pool.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  pool_id: "pool_id_example", // required
};

apiInstance.listPoolServers(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**pool_id** | **String** |  |

### Return type

[**[Timestamps]**](Timestamps.md)


## `updatePoolServer`

```javascript
updatePoolServer({ service_id, pool_id, server_id, [address, ], [comment, ], [disabled, ], [max_conn, ], [override_host, ], [port, ], [weight] })
```

Updates a single server for a particular service and pool.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  pool_id: "pool_id_example", // required
  server_id: "server_id_example", // required
  address: "address_example",
  comment: "comment_example",
  disabled: false,
  max_conn: 0,
  override_host: "'null'",
  port: 80,
  weight: 100,
};

apiInstance.updatePoolServer(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**pool_id** | **String** |  |
**server_id** | **String** |  |
**address** | **String** | A hostname, IPv4, or IPv6 address for the server. Required. | [optional]
**comment** | **String** | A freeform descriptive note. | [optional]
**disabled** | **Boolean** | Allows servers to be enabled and disabled in a pool. | [optional] [default to false]
**max_conn** | **Number** | Maximum number of connections. If the value is &#x60;0&#x60;, it inherits the value from pool&#39;s &#x60;max_conn_default&#x60;. | [optional] [default to 0]
**override_host** | **String** | The hostname to override the Host header. Defaults to &#x60;null&#x60; meaning no override of the Host header if not set. This setting can also be added to a Pool definition. However, the server setting will override the Pool setting. | [optional] [default to &#39;null&#39;]
**port** | **Number** | Port number. Setting port &#x60;443&#x60; does not force TLS. Set &#x60;use_tls&#x60; in pool to force TLS. | [optional] [default to 80]
**weight** | **Number** | Weight (&#x60;1-100&#x60;) used to load balance this server against others. | [optional] [default to 100]

### Return type

[**Timestamps**](Timestamps.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
