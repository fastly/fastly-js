# FastlyApi.BackendApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createBackend**](BackendApi.md#createBackend) | **POST** /service/{service_id}/version/{version_id}/backend | Create a backend
[**deleteBackend**](BackendApi.md#deleteBackend) | **DELETE** /service/{service_id}/version/{version_id}/backend/{backend_name} | Delete a backend
[**getBackend**](BackendApi.md#getBackend) | **GET** /service/{service_id}/version/{version_id}/backend/{backend_name} | Describe a backend
[**listBackends**](BackendApi.md#listBackends) | **GET** /service/{service_id}/version/{version_id}/backend | List backends
[**updateBackend**](BackendApi.md#updateBackend) | **PUT** /service/{service_id}/version/{version_id}/backend/{backend_name} | Update a backend



## `createBackend`

> BackendResponse createBackend(service_id, version_id, opts)

Create a backend

Create a backend for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.BackendApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'address': "address_example", // String | A hostname, IPv4, or IPv6 address for the backend. This is the preferred way to specify the location of your backend.
  'auto_loadbalance': true, // Boolean | Whether or not this backend should be automatically load balanced. If true, all backends with this setting that don't have a `request_condition` will be selected based on their `weight`.
  'between_bytes_timeout': 56, // Number | Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using `bereq.between_bytes_timeout`.
  'client_cert': "client_cert_example", // String | Unused.
  'comment': "comment_example", // String | A freeform descriptive note.
  'connect_timeout': 56, // Number | Maximum duration in milliseconds to wait for a connection to this backend to be established. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.connect_timeout`.
  'first_byte_timeout': 56, // Number | Maximum duration in milliseconds to wait for the server response to begin after a TCP connection is established and the request has been sent. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.first_byte_timeout`.
  'healthcheck': "healthcheck_example", // String | The name of the healthcheck to use with this backend.
  'hostname': "hostname_example", // String | The hostname of the backend. May be used as an alternative to `address` to set the backend location.
  'ipv4': "ipv4_example", // String | IPv4 address of the backend. May be used as an alternative to `address` to set the backend location.
  'ipv6': "ipv6_example", // String | IPv6 address of the backend. May be used as an alternative to `address` to set the backend location.
  'max_conn': 56, // Number | Maximum number of concurrent connections this backend will accept.
  'max_tls_version': "max_tls_version_example", // String | Maximum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
  'min_tls_version': "min_tls_version_example", // String | Minimum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
  'name': "name_example", // String | The name of the backend.
  'override_host': "override_host_example", // String | If set, will replace the client-supplied HTTP `Host` header on connections to this backend. Applied after VCL has been processed, so this setting will take precedence over changing `bereq.http.Host` in VCL.
  'port': 56, // Number | Port on which the backend server is listening for connections from Fastly. Setting `port` to 80 or 443 will also set `use_ssl` automatically (to false and true respectively), unless explicitly overridden by setting `use_ssl` in the same request.
  'request_condition': "request_condition_example", // String | Name of a Condition, which if satisfied, will select this backend during a request. If set, will override any `auto_loadbalance` setting. By default, the first backend added to a service is selected for all requests.
  'shield': "shield_example", // String | Data center POP code of the data center to use as a [shield](https://docs.fastly.com/en/guides/shielding).
  'ssl_ca_cert': "ssl_ca_cert_example", // String | CA certificate attached to origin.
  'ssl_cert_hostname': "ssl_cert_hostname_example", // String | Overrides `ssl_hostname`, but only for cert verification. Does not affect SNI at all.
  'ssl_check_cert': true, // Boolean | Be strict on checking SSL certs.
  'ssl_ciphers': "ssl_ciphers_example", // String | List of [OpenSSL ciphers](https://www.openssl.org/docs/manmaster/man1/ciphers.html) to support for connections to this origin. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
  'ssl_client_cert': "ssl_client_cert_example", // String | Client certificate attached to origin.
  'ssl_client_key': "ssl_client_key_example", // String | Client key attached to origin.
  'ssl_hostname': "ssl_hostname_example", // String | Use `ssl_cert_hostname` and `ssl_sni_hostname` to configure certificate validation.
  'ssl_sni_hostname': "ssl_sni_hostname_example", // String | Overrides `ssl_hostname`, but only for SNI in the handshake. Does not affect cert validation at all.
  'use_ssl': true, // Boolean | Whether or not to require TLS for connections to this backend.
  'weight': 56 // Number | Weight used to load balance this backend against others. May be any positive integer. If `auto_loadbalance` is true, the chance of this backend being selected is equal to its own weight over the sum of all weights for backends that have `auto_loadbalance` set to true.
};
apiInstance.createBackend(service_id, version_id, opts).then((data) => {
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
**address** | **String** | A hostname, IPv4, or IPv6 address for the backend. This is the preferred way to specify the location of your backend. | [optional]
**auto_loadbalance** | **Boolean** | Whether or not this backend should be automatically load balanced. If true, all backends with this setting that don&#39;t have a &#x60;request_condition&#x60; will be selected based on their &#x60;weight&#x60;. | [optional]
**between_bytes_timeout** | **Number** | Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using &#x60;bereq.between_bytes_timeout&#x60;. | [optional]
**client_cert** | **String** | Unused. | [optional]
**comment** | **String** | A freeform descriptive note. | [optional]
**connect_timeout** | **Number** | Maximum duration in milliseconds to wait for a connection to this backend to be established. If exceeded, the connection is aborted and a synthethic &#x60;503&#x60; response will be presented instead. May be set at runtime using &#x60;bereq.connect_timeout&#x60;. | [optional]
**first_byte_timeout** | **Number** | Maximum duration in milliseconds to wait for the server response to begin after a TCP connection is established and the request has been sent. If exceeded, the connection is aborted and a synthethic &#x60;503&#x60; response will be presented instead. May be set at runtime using &#x60;bereq.first_byte_timeout&#x60;. | [optional]
**healthcheck** | **String** | The name of the healthcheck to use with this backend. | [optional]
**hostname** | **String** | The hostname of the backend. May be used as an alternative to &#x60;address&#x60; to set the backend location. | [optional]
**ipv4** | **String** | IPv4 address of the backend. May be used as an alternative to &#x60;address&#x60; to set the backend location. | [optional]
**ipv6** | **String** | IPv6 address of the backend. May be used as an alternative to &#x60;address&#x60; to set the backend location. | [optional]
**max_conn** | **Number** | Maximum number of concurrent connections this backend will accept. | [optional]
**max_tls_version** | **String** | Maximum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic &#x60;503&#x60; error response will be generated. | [optional]
**min_tls_version** | **String** | Minimum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic &#x60;503&#x60; error response will be generated. | [optional]
**name** | **String** | The name of the backend. | [optional]
**override_host** | **String** | If set, will replace the client-supplied HTTP &#x60;Host&#x60; header on connections to this backend. Applied after VCL has been processed, so this setting will take precedence over changing &#x60;bereq.http.Host&#x60; in VCL. | [optional]
**port** | **Number** | Port on which the backend server is listening for connections from Fastly. Setting &#x60;port&#x60; to 80 or 443 will also set &#x60;use_ssl&#x60; automatically (to false and true respectively), unless explicitly overridden by setting &#x60;use_ssl&#x60; in the same request. | [optional]
**request_condition** | **String** | Name of a Condition, which if satisfied, will select this backend during a request. If set, will override any &#x60;auto_loadbalance&#x60; setting. By default, the first backend added to a service is selected for all requests. | [optional]
**shield** | **String** | Data center POP code of the data center to use as a [shield](https://docs.fastly.com/en/guides/shielding). | [optional]
**ssl_ca_cert** | **String** | CA certificate attached to origin. | [optional]
**ssl_cert_hostname** | **String** | Overrides &#x60;ssl_hostname&#x60;, but only for cert verification. Does not affect SNI at all. | [optional]
**ssl_check_cert** | **Boolean** | Be strict on checking SSL certs. | [optional] [default to true]
**ssl_ciphers** | **String** | List of [OpenSSL ciphers](https://www.openssl.org/docs/manmaster/man1/ciphers.html) to support for connections to this origin. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic &#x60;503&#x60; error response will be generated. | [optional]
**ssl_client_cert** | **String** | Client certificate attached to origin. | [optional]
**ssl_client_key** | **String** | Client key attached to origin. | [optional]
**ssl_hostname** | **String** | Use &#x60;ssl_cert_hostname&#x60; and &#x60;ssl_sni_hostname&#x60; to configure certificate validation. | [optional]
**ssl_sni_hostname** | **String** | Overrides &#x60;ssl_hostname&#x60;, but only for SNI in the handshake. Does not affect cert validation at all. | [optional]
**use_ssl** | **Boolean** | Whether or not to require TLS for connections to this backend. | [optional]
**weight** | **Number** | Weight used to load balance this backend against others. May be any positive integer. If &#x60;auto_loadbalance&#x60; is true, the chance of this backend being selected is equal to its own weight over the sum of all weights for backends that have &#x60;auto_loadbalance&#x60; set to true. | [optional]

### Return type

[**BackendResponse**](BackendResponse.md)


## `deleteBackend`

> Object deleteBackend(service_id, version_id, backend_name)

Delete a backend

Delete the backend for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.BackendApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let backend_name = "backend_name_example"; // String | 
apiInstance.deleteBackend(service_id, version_id, backend_name).then((data) => {
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
**backend_name** | **String** |  |

### Return type

**Object**


## `getBackend`

> BackendResponse getBackend(service_id, version_id, backend_name)

Describe a backend

Get the backend for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.BackendApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let backend_name = "backend_name_example"; // String | 
apiInstance.getBackend(service_id, version_id, backend_name).then((data) => {
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
**backend_name** | **String** |  |

### Return type

[**BackendResponse**](BackendResponse.md)


## `listBackends`

> [BackendResponse] listBackends(service_id, version_id)

List backends

List all backends for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.BackendApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listBackends(service_id, version_id).then((data) => {
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

[**[BackendResponse]**](BackendResponse.md)


## `updateBackend`

> BackendResponse updateBackend(service_id, version_id, backend_name, opts)

Update a backend

Update the backend for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.BackendApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let backend_name = "backend_name_example"; // String | 
let opts = {
  'address': "address_example", // String | A hostname, IPv4, or IPv6 address for the backend. This is the preferred way to specify the location of your backend.
  'auto_loadbalance': true, // Boolean | Whether or not this backend should be automatically load balanced. If true, all backends with this setting that don't have a `request_condition` will be selected based on their `weight`.
  'between_bytes_timeout': 56, // Number | Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using `bereq.between_bytes_timeout`.
  'client_cert': "client_cert_example", // String | Unused.
  'comment': "comment_example", // String | A freeform descriptive note.
  'connect_timeout': 56, // Number | Maximum duration in milliseconds to wait for a connection to this backend to be established. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.connect_timeout`.
  'first_byte_timeout': 56, // Number | Maximum duration in milliseconds to wait for the server response to begin after a TCP connection is established and the request has been sent. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.first_byte_timeout`.
  'healthcheck': "healthcheck_example", // String | The name of the healthcheck to use with this backend.
  'hostname': "hostname_example", // String | The hostname of the backend. May be used as an alternative to `address` to set the backend location.
  'ipv4': "ipv4_example", // String | IPv4 address of the backend. May be used as an alternative to `address` to set the backend location.
  'ipv6': "ipv6_example", // String | IPv6 address of the backend. May be used as an alternative to `address` to set the backend location.
  'max_conn': 56, // Number | Maximum number of concurrent connections this backend will accept.
  'max_tls_version': "max_tls_version_example", // String | Maximum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
  'min_tls_version': "min_tls_version_example", // String | Minimum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
  'name': "name_example", // String | The name of the backend.
  'override_host': "override_host_example", // String | If set, will replace the client-supplied HTTP `Host` header on connections to this backend. Applied after VCL has been processed, so this setting will take precedence over changing `bereq.http.Host` in VCL.
  'port': 56, // Number | Port on which the backend server is listening for connections from Fastly. Setting `port` to 80 or 443 will also set `use_ssl` automatically (to false and true respectively), unless explicitly overridden by setting `use_ssl` in the same request.
  'request_condition': "request_condition_example", // String | Name of a Condition, which if satisfied, will select this backend during a request. If set, will override any `auto_loadbalance` setting. By default, the first backend added to a service is selected for all requests.
  'shield': "shield_example", // String | Data center POP code of the data center to use as a [shield](https://docs.fastly.com/en/guides/shielding).
  'ssl_ca_cert': "ssl_ca_cert_example", // String | CA certificate attached to origin.
  'ssl_cert_hostname': "ssl_cert_hostname_example", // String | Overrides `ssl_hostname`, but only for cert verification. Does not affect SNI at all.
  'ssl_check_cert': true, // Boolean | Be strict on checking SSL certs.
  'ssl_ciphers': "ssl_ciphers_example", // String | List of [OpenSSL ciphers](https://www.openssl.org/docs/manmaster/man1/ciphers.html) to support for connections to this origin. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
  'ssl_client_cert': "ssl_client_cert_example", // String | Client certificate attached to origin.
  'ssl_client_key': "ssl_client_key_example", // String | Client key attached to origin.
  'ssl_hostname': "ssl_hostname_example", // String | Use `ssl_cert_hostname` and `ssl_sni_hostname` to configure certificate validation.
  'ssl_sni_hostname': "ssl_sni_hostname_example", // String | Overrides `ssl_hostname`, but only for SNI in the handshake. Does not affect cert validation at all.
  'use_ssl': true, // Boolean | Whether or not to require TLS for connections to this backend.
  'weight': 56 // Number | Weight used to load balance this backend against others. May be any positive integer. If `auto_loadbalance` is true, the chance of this backend being selected is equal to its own weight over the sum of all weights for backends that have `auto_loadbalance` set to true.
};
apiInstance.updateBackend(service_id, version_id, backend_name, opts).then((data) => {
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
**backend_name** | **String** |  |
**address** | **String** | A hostname, IPv4, or IPv6 address for the backend. This is the preferred way to specify the location of your backend. | [optional]
**auto_loadbalance** | **Boolean** | Whether or not this backend should be automatically load balanced. If true, all backends with this setting that don&#39;t have a &#x60;request_condition&#x60; will be selected based on their &#x60;weight&#x60;. | [optional]
**between_bytes_timeout** | **Number** | Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using &#x60;bereq.between_bytes_timeout&#x60;. | [optional]
**client_cert** | **String** | Unused. | [optional]
**comment** | **String** | A freeform descriptive note. | [optional]
**connect_timeout** | **Number** | Maximum duration in milliseconds to wait for a connection to this backend to be established. If exceeded, the connection is aborted and a synthethic &#x60;503&#x60; response will be presented instead. May be set at runtime using &#x60;bereq.connect_timeout&#x60;. | [optional]
**first_byte_timeout** | **Number** | Maximum duration in milliseconds to wait for the server response to begin after a TCP connection is established and the request has been sent. If exceeded, the connection is aborted and a synthethic &#x60;503&#x60; response will be presented instead. May be set at runtime using &#x60;bereq.first_byte_timeout&#x60;. | [optional]
**healthcheck** | **String** | The name of the healthcheck to use with this backend. | [optional]
**hostname** | **String** | The hostname of the backend. May be used as an alternative to &#x60;address&#x60; to set the backend location. | [optional]
**ipv4** | **String** | IPv4 address of the backend. May be used as an alternative to &#x60;address&#x60; to set the backend location. | [optional]
**ipv6** | **String** | IPv6 address of the backend. May be used as an alternative to &#x60;address&#x60; to set the backend location. | [optional]
**max_conn** | **Number** | Maximum number of concurrent connections this backend will accept. | [optional]
**max_tls_version** | **String** | Maximum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic &#x60;503&#x60; error response will be generated. | [optional]
**min_tls_version** | **String** | Minimum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic &#x60;503&#x60; error response will be generated. | [optional]
**name** | **String** | The name of the backend. | [optional]
**override_host** | **String** | If set, will replace the client-supplied HTTP &#x60;Host&#x60; header on connections to this backend. Applied after VCL has been processed, so this setting will take precedence over changing &#x60;bereq.http.Host&#x60; in VCL. | [optional]
**port** | **Number** | Port on which the backend server is listening for connections from Fastly. Setting &#x60;port&#x60; to 80 or 443 will also set &#x60;use_ssl&#x60; automatically (to false and true respectively), unless explicitly overridden by setting &#x60;use_ssl&#x60; in the same request. | [optional]
**request_condition** | **String** | Name of a Condition, which if satisfied, will select this backend during a request. If set, will override any &#x60;auto_loadbalance&#x60; setting. By default, the first backend added to a service is selected for all requests. | [optional]
**shield** | **String** | Data center POP code of the data center to use as a [shield](https://docs.fastly.com/en/guides/shielding). | [optional]
**ssl_ca_cert** | **String** | CA certificate attached to origin. | [optional]
**ssl_cert_hostname** | **String** | Overrides &#x60;ssl_hostname&#x60;, but only for cert verification. Does not affect SNI at all. | [optional]
**ssl_check_cert** | **Boolean** | Be strict on checking SSL certs. | [optional] [default to true]
**ssl_ciphers** | **String** | List of [OpenSSL ciphers](https://www.openssl.org/docs/manmaster/man1/ciphers.html) to support for connections to this origin. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic &#x60;503&#x60; error response will be generated. | [optional]
**ssl_client_cert** | **String** | Client certificate attached to origin. | [optional]
**ssl_client_key** | **String** | Client key attached to origin. | [optional]
**ssl_hostname** | **String** | Use &#x60;ssl_cert_hostname&#x60; and &#x60;ssl_sni_hostname&#x60; to configure certificate validation. | [optional]
**ssl_sni_hostname** | **String** | Overrides &#x60;ssl_hostname&#x60;, but only for SNI in the handshake. Does not affect cert validation at all. | [optional]
**use_ssl** | **Boolean** | Whether or not to require TLS for connections to this backend. | [optional]
**weight** | **Number** | Weight used to load balance this backend against others. May be any positive integer. If &#x60;auto_loadbalance&#x60; is true, the chance of this backend being selected is equal to its own weight over the sum of all weights for backends that have &#x60;auto_loadbalance&#x60; set to true. | [optional]

### Return type

[**BackendResponse**](BackendResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
