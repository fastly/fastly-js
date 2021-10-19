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
createServerPool({ service_id, version_id, [tls_ca_cert, ], [tls_cert_hostname, ], [tls_client_cert, ], [tls_client_key, ], [use_tls, ], [comment, ], [connect_timeout, ], [first_byte_timeout, ], [healthcheck, ], [max_conn_default, ], [max_tls_version, ], [min_tls_version, ], [name, ], [override_host, ], [quorum, ], [request_condition, ], [shield, ], [tls_check_cert, ], [tls_ciphers, ], [tls_sni_hostname, ], [type] })
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
  comment: "comment_example",
  connect_timeout: 56,
  first_byte_timeout: 56,
  healthcheck: "healthcheck_example",
  max_conn_default: 56,
  max_tls_version: 56,
  min_tls_version: 56,
  name: "name_example",
  override_host: "'null'",
  quorum: 75,
  request_condition: "request_condition_example",
  shield: "'null'",
  tls_check_cert: 56,
  tls_ciphers: "tls_ciphers_example",
  tls_sni_hostname: "tls_sni_hostname_example",
  type: "type_example",
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
**comment** | **String** | A freeform descriptive note. | [optional]
**connect_timeout** | **Number** | How long to wait for a timeout in milliseconds. Optional. | [optional]
**first_byte_timeout** | **Number** | How long to wait for the first byte in milliseconds. Optional. | [optional]
**healthcheck** | **String** | Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools. | [optional]
**max_conn_default** | **Number** | Maximum number of connections. | [optional]
**max_tls_version** | **Number** | Maximum allowed TLS version on connections to this server. Optional. | [optional]
**min_tls_version** | **Number** | Minimum allowed TLS version on connections to this server. Optional. | [optional]
**name** | **String** | Name for the Pool. | [optional]
**override_host** | **String** | The hostname to [override the Host header](https://docs.fastly.com/en/guides/specifying-an-override-host). Defaults to &#x60;null&#x60; meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting. | [optional] [default to &#39;null&#39;]
**quorum** | **Number** | Percentage of capacity (&#x60;0-100&#x60;) that needs to be operationally available for a pool to be considered up. | [optional] [default to 75]
**request_condition** | **String** | Condition which, if met, will select this configuration during a request. Optional. | [optional]
**shield** | **String** | Selected POP to serve as a shield for the servers. Defaults to &#x60;null&#x60; meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding. | [optional] [default to &#39;null&#39;]
**tls_check_cert** | **Number** | Be strict on checking TLS certs. Optional. | [optional]
**tls_ciphers** | **String** | List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.0.2/man1/ciphers) for details). Optional. | [optional]
**tls_sni_hostname** | **String** | SNI hostname. Optional. | [optional]
**type** | **String** | What type of load balance group to use. | [optional]

### Return type

[**PoolResponse**](PoolResponse.md)


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

[**PoolResponse**](PoolResponse.md)


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

[**[PoolResponse]**](PoolResponse.md)


## `updateServerPool`

```javascript
updateServerPool({ service_id, version_id, pool_name, [tls_ca_cert, ], [tls_cert_hostname, ], [tls_client_cert, ], [tls_client_key, ], [use_tls, ], [comment, ], [connect_timeout, ], [first_byte_timeout, ], [healthcheck, ], [max_conn_default, ], [max_tls_version, ], [min_tls_version, ], [name, ], [override_host, ], [quorum, ], [request_condition, ], [shield, ], [tls_check_cert, ], [tls_ciphers, ], [tls_sni_hostname, ], [type] })
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
  comment: "comment_example",
  connect_timeout: 56,
  first_byte_timeout: 56,
  healthcheck: "healthcheck_example",
  max_conn_default: 56,
  max_tls_version: 56,
  min_tls_version: 56,
  name: "name_example",
  override_host: "'null'",
  quorum: 75,
  request_condition: "request_condition_example",
  shield: "'null'",
  tls_check_cert: 56,
  tls_ciphers: "tls_ciphers_example",
  tls_sni_hostname: "tls_sni_hostname_example",
  type: "type_example",
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
**comment** | **String** | A freeform descriptive note. | [optional]
**connect_timeout** | **Number** | How long to wait for a timeout in milliseconds. Optional. | [optional]
**first_byte_timeout** | **Number** | How long to wait for the first byte in milliseconds. Optional. | [optional]
**healthcheck** | **String** | Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools. | [optional]
**max_conn_default** | **Number** | Maximum number of connections. | [optional]
**max_tls_version** | **Number** | Maximum allowed TLS version on connections to this server. Optional. | [optional]
**min_tls_version** | **Number** | Minimum allowed TLS version on connections to this server. Optional. | [optional]
**name** | **String** | Name for the Pool. | [optional]
**override_host** | **String** | The hostname to [override the Host header](https://docs.fastly.com/en/guides/specifying-an-override-host). Defaults to &#x60;null&#x60; meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting. | [optional] [default to &#39;null&#39;]
**quorum** | **Number** | Percentage of capacity (&#x60;0-100&#x60;) that needs to be operationally available for a pool to be considered up. | [optional] [default to 75]
**request_condition** | **String** | Condition which, if met, will select this configuration during a request. Optional. | [optional]
**shield** | **String** | Selected POP to serve as a shield for the servers. Defaults to &#x60;null&#x60; meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding. | [optional] [default to &#39;null&#39;]
**tls_check_cert** | **Number** | Be strict on checking TLS certs. Optional. | [optional]
**tls_ciphers** | **String** | List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.0.2/man1/ciphers) for details). Optional. | [optional]
**tls_sni_hostname** | **String** | SNI hostname. Optional. | [optional]
**type** | **String** | What type of load balance group to use. | [optional]

### Return type

[**PoolResponse**](PoolResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
