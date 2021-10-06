# Fastly.PoolApi


```javascript
const apiInstance = new Fastly.PoolApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createServerPool**](PoolApi.md#createServerPool) | **POST** /service/{service_id}/version/{version_id}/pool | Create a server pool
[**deleteServerPool**](PoolApi.md#deleteServerPool) | **DELETE** /service/{service_id}/version/{version_id}/pool/{pool_name} | Delete a server pool
[**getServerPool**](PoolApi.md#getServerPool) | **GET** /service/{service_id}/version/{version_id}/pool/{pool_name} | Get a server pool
[**listServerPools**](PoolApi.md#listServerPools) | **GET** /service/{service_id}/version/{version_id}/pool | List server pools
[**updateServerPool**](PoolApi.md#updateServerPool) | **PUT** /service/{service_id}/version/{version_id}/pool/{pool_name} | Update a server pool



## `createServerPool`

```javascript
createServerPool({ service_id, version_id, [tls_ca_cert, ], [tls_cert_hostname, ], [tls_client_cert, ], [tls_client_key, ], [use_tls] })
```

Creates a pool for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  tls_ca_cert: "'null'",
  tls_cert_hostname: "'null'",
  tls_client_cert: "'null'",
  tls_client_key: "'null'",
  use_tls: 0,
};

apiInstance.createServerPool(options)
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
**version_id** | **Number** |  |
**tls_ca_cert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_cert_hostname** | **String** | The hostname used to verify a server&#39;s certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN). | [optional] [default to &#39;null&#39;]
**tls_client_cert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_key** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**use_tls** | **Number** | Whether to use TLS. | [optional] [default to 0]

### Return type

[**ServiceIdAndVersion**](ServiceIdAndVersion.md)


## `deleteServerPool`

```javascript
deleteServerPool({ service_id, version_id, pool_name })
```

Deletes a specific pool for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  pool_name: "pool_name_example", // required
};

apiInstance.deleteServerPool(options)
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
**version_id** | **Number** |  |
**pool_name** | **String** |  |

### Return type

**Object**


## `getServerPool`

```javascript
getServerPool({ service_id, version_id, pool_name })
```

Gets a single pool for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  pool_name: "pool_name_example", // required
};

apiInstance.getServerPool(options)
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
**version_id** | **Number** |  |
**pool_name** | **String** |  |

### Return type

[**ServiceIdAndVersion**](ServiceIdAndVersion.md)


## `listServerPools`

```javascript
listServerPools({ service_id, version_id })
```

Lists all pools for a particular service and pool.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listServerPools(options)
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
**version_id** | **Number** |  |

### Return type

[**[ServiceIdAndVersion]**](ServiceIdAndVersion.md)


## `updateServerPool`

```javascript
updateServerPool({ service_id, version_id, pool_name, [tls_ca_cert, ], [tls_cert_hostname, ], [tls_client_cert, ], [tls_client_key, ], [use_tls] })
```

Updates a specific pool for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  pool_name: "pool_name_example", // required
  tls_ca_cert: "'null'",
  tls_cert_hostname: "'null'",
  tls_client_cert: "'null'",
  tls_client_key: "'null'",
  use_tls: UseTlsEnum.no_tls,
};

apiInstance.updateServerPool(options)
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
**version_id** | **Number** |  |
**pool_name** | **String** |  |
**tls_ca_cert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_cert_hostname** | **String** | The hostname used to verify a server&#39;s certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN). | [optional] [default to &#39;null&#39;]
**tls_client_cert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_key** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**use_tls** | **Number** | Whether to use TLS. | [optional] [default to UseTlsEnum.no_tls]

### Return type

[**ServiceIdAndVersion**](ServiceIdAndVersion.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
