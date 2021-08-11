# FastlyApi.PoolApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createServerPool**](PoolApi.md#createServerPool) | **POST** /service/{service_id}/version/{version_id}/pool | Create a server pool
[**deleteServerPool**](PoolApi.md#deleteServerPool) | **DELETE** /service/{service_id}/version/{version_id}/pool/{pool_name} | Delete a server pool
[**getServerPool**](PoolApi.md#getServerPool) | **GET** /service/{service_id}/version/{version_id}/pool/{pool_name} | Get a server pool
[**listServerPools**](PoolApi.md#listServerPools) | **GET** /service/{service_id}/version/{version_id}/pool | List server pools
[**updateServerPool**](PoolApi.md#updateServerPool) | **PUT** /service/{service_id}/version/{version_id}/pool/{pool_name} | Update a server pool



## `createServerPool`

> PoolResponse createServerPool(service_id, version_id, opts)

Create a server pool

Creates a pool for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.PoolApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'tls_ca_cert': "'null'", // String | A secure certificate to authenticate a server with. Must be in PEM format.
  'tls_client_cert': "'null'", // String | The client certificate used to make authenticated requests. Must be in PEM format.
  'tls_client_key': "'null'", // String | The client private key used to make authenticated requests. Must be in PEM format.
  'tls_cert_hostname': "'null'", // String | The hostname used to verify a server's certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN).
  'use_tls': 0, // Number | Whether to use TLS.
  'name': "name_example", // String | Name for the Pool.
  'shield': "'null'", // String | Selected POP to serve as a shield for the servers. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding.
  'request_condition': "request_condition_example", // String | Condition which, if met, will select this configuration during a request. Optional.
  'max_conn_default': 56, // Number | Maximum number of connections.
  'connect_timeout': 56, // Number | How long to wait for a timeout in milliseconds. Optional.
  'first_byte_timeout': 56, // Number | How long to wait for the first byte in milliseconds. Optional.
  'quorum': 75, // Number | Percentage of capacity (`0-100`) that needs to be operationally available for a pool to be considered up.
  'tls_ciphers': "tls_ciphers_example", // String | List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.0.2/man1/ciphers) for details). Optional.
  'tls_sni_hostname': "tls_sni_hostname_example", // String | SNI hostname. Optional.
  'tls_check_cert': 56, // Number | Be strict on checking TLS certs. Optional.
  'min_tls_version': 56, // Number | Minimum allowed TLS version on connections to this server. Optional.
  'max_tls_version': 56, // Number | Maximum allowed TLS version on connections to this server. Optional.
  'healthcheck': "healthcheck_example", // String | Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools.
  'comment': "comment_example", // String | A freeform descriptive note.
  'type': "type_example", // String | What type of load balance group to use.
  'override_host': "'null'" // String | The hostname to [override the Host header](https://docs.fastly.com/en/guides/specifying-an-override-host). Defaults to `null` meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting.
};
apiInstance.createServerPool(service_id, version_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**tls_ca_cert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_cert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_key** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_cert_hostname** | **String** | The hostname used to verify a server&#39;s certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN). | [optional] [default to &#39;null&#39;]
**use_tls** | **Number** | Whether to use TLS. | [optional] [default to 0]
**name** | **String** | Name for the Pool. | [optional]
**shield** | **String** | Selected POP to serve as a shield for the servers. Defaults to &#x60;null&#x60; meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding. | [optional] [default to &#39;null&#39;]
**request_condition** | **String** | Condition which, if met, will select this configuration during a request. Optional. | [optional]
**max_conn_default** | **Number** | Maximum number of connections. | [optional]
**connect_timeout** | **Number** | How long to wait for a timeout in milliseconds. Optional. | [optional]
**first_byte_timeout** | **Number** | How long to wait for the first byte in milliseconds. Optional. | [optional]
**quorum** | **Number** | Percentage of capacity (&#x60;0-100&#x60;) that needs to be operationally available for a pool to be considered up. | [optional] [default to 75]
**tls_ciphers** | **String** | List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.0.2/man1/ciphers) for details). Optional. | [optional]
**tls_sni_hostname** | **String** | SNI hostname. Optional. | [optional]
**tls_check_cert** | **Number** | Be strict on checking TLS certs. Optional. | [optional]
**min_tls_version** | **Number** | Minimum allowed TLS version on connections to this server. Optional. | [optional]
**max_tls_version** | **Number** | Maximum allowed TLS version on connections to this server. Optional. | [optional]
**healthcheck** | **String** | Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools. | [optional]
**comment** | **String** | A freeform descriptive note. | [optional]
**type** | **String** | What type of load balance group to use. | [optional]
**override_host** | **String** | The hostname to [override the Host header](https://docs.fastly.com/en/guides/specifying-an-override-host). Defaults to &#x60;null&#x60; meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting. | [optional] [default to &#39;null&#39;]

### Return type

[**PoolResponse**](PoolResponse.md)


## `deleteServerPool`

> Object deleteServerPool(service_id, version_id, pool_name)

Delete a server pool

Deletes a specific pool for a particular service and version.

### Example

```javascript
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
**service_id** | **String** |  |
**version_id** | **Number** |  |
**pool_name** | **String** |  |

### Return type

**Object**


## `getServerPool`

> PoolResponse getServerPool(service_id, version_id, pool_name)

Get a server pool

Gets a single pool for a particular service and version.

### Example

```javascript
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
**service_id** | **String** |  |
**version_id** | **Number** |  |
**pool_name** | **String** |  |

### Return type

[**PoolResponse**](PoolResponse.md)


## `listServerPools`

> [PoolResponse] listServerPools(service_id, version_id)

List server pools

Lists all pools for a particular service and pool.

### Example

```javascript
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
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

[**[PoolResponse]**](PoolResponse.md)


## `updateServerPool`

> PoolResponse updateServerPool(service_id, version_id, pool_name, opts)

Update a server pool

Updates a specific pool for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.PoolApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let pool_name = "pool_name_example"; // String | 
let opts = {
  'tls_ca_cert': "'null'", // String | A secure certificate to authenticate a server with. Must be in PEM format.
  'tls_client_cert': "'null'", // String | The client certificate used to make authenticated requests. Must be in PEM format.
  'tls_client_key': "'null'", // String | The client private key used to make authenticated requests. Must be in PEM format.
  'tls_cert_hostname': "'null'", // String | The hostname used to verify a server's certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN).
  'use_tls': UseTlsEnum.no_tls, // Number | Whether to use TLS.
  'name': "name_example", // String | Name for the Pool.
  'shield': "'null'", // String | Selected POP to serve as a shield for the servers. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding.
  'request_condition': "request_condition_example", // String | Condition which, if met, will select this configuration during a request. Optional.
  'max_conn_default': 56, // Number | Maximum number of connections.
  'connect_timeout': 56, // Number | How long to wait for a timeout in milliseconds. Optional.
  'first_byte_timeout': 56, // Number | How long to wait for the first byte in milliseconds. Optional.
  'quorum': 75, // Number | Percentage of capacity (`0-100`) that needs to be operationally available for a pool to be considered up.
  'tls_ciphers': "tls_ciphers_example", // String | List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.0.2/man1/ciphers) for details). Optional.
  'tls_sni_hostname': "tls_sni_hostname_example", // String | SNI hostname. Optional.
  'tls_check_cert': 56, // Number | Be strict on checking TLS certs. Optional.
  'min_tls_version': 56, // Number | Minimum allowed TLS version on connections to this server. Optional.
  'max_tls_version': 56, // Number | Maximum allowed TLS version on connections to this server. Optional.
  'healthcheck': "healthcheck_example", // String | Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools.
  'comment': "comment_example", // String | A freeform descriptive note.
  'type': "type_example", // String | What type of load balance group to use.
  'override_host': "'null'" // String | The hostname to [override the Host header](https://docs.fastly.com/en/guides/specifying-an-override-host). Defaults to `null` meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting.
};
apiInstance.updateServerPool(service_id, version_id, pool_name, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**pool_name** | **String** |  |
**tls_ca_cert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_cert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_key** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_cert_hostname** | **String** | The hostname used to verify a server&#39;s certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN). | [optional] [default to &#39;null&#39;]
**use_tls** | **Number** | Whether to use TLS. | [optional] [default to UseTlsEnum.no_tls]
**name** | **String** | Name for the Pool. | [optional]
**shield** | **String** | Selected POP to serve as a shield for the servers. Defaults to &#x60;null&#x60; meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding. | [optional] [default to &#39;null&#39;]
**request_condition** | **String** | Condition which, if met, will select this configuration during a request. Optional. | [optional]
**max_conn_default** | **Number** | Maximum number of connections. | [optional]
**connect_timeout** | **Number** | How long to wait for a timeout in milliseconds. Optional. | [optional]
**first_byte_timeout** | **Number** | How long to wait for the first byte in milliseconds. Optional. | [optional]
**quorum** | **Number** | Percentage of capacity (&#x60;0-100&#x60;) that needs to be operationally available for a pool to be considered up. | [optional] [default to 75]
**tls_ciphers** | **String** | List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.0.2/man1/ciphers) for details). Optional. | [optional]
**tls_sni_hostname** | **String** | SNI hostname. Optional. | [optional]
**tls_check_cert** | **Number** | Be strict on checking TLS certs. Optional. | [optional]
**min_tls_version** | **Number** | Minimum allowed TLS version on connections to this server. Optional. | [optional]
**max_tls_version** | **Number** | Maximum allowed TLS version on connections to this server. Optional. | [optional]
**healthcheck** | **String** | Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools. | [optional]
**comment** | **String** | A freeform descriptive note. | [optional]
**type** | **String** | What type of load balance group to use. | [optional]
**override_host** | **String** | The hostname to [override the Host header](https://docs.fastly.com/en/guides/specifying-an-override-host). Defaults to &#x60;null&#x60; meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting. | [optional] [default to &#39;null&#39;]

### Return type

[**PoolResponse**](PoolResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
