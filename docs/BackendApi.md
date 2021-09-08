# Fastly.BackendApi


```javascript
const apiInstance = new Fastly.BackendApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createBackend**](BackendApi.md#createBackend) | **POST** /service/{service_id}/version/{version_id}/backend | Create a backend
[**deleteBackend**](BackendApi.md#deleteBackend) | **DELETE** /service/{service_id}/version/{version_id}/backend/{backend_name} | Delete a backend
[**getBackend**](BackendApi.md#getBackend) | **GET** /service/{service_id}/version/{version_id}/backend/{backend_name} | Describe a backend
[**listBackends**](BackendApi.md#listBackends) | **GET** /service/{service_id}/version/{version_id}/backend | List backends
[**updateBackend**](BackendApi.md#updateBackend) | **PUT** /service/{service_id}/version/{version_id}/backend/{backend_name} | Update a backend



## `createBackend`

```javascript
createBackend({ service_id, version_id, [address], , [auto_loadbalance], , [between_bytes_timeout], , [client_cert], , [comment], , [connect_timeout], , [first_byte_timeout], , [healthcheck], , [hostname], , [ipv4], , [ipv6], , [max_conn], , [max_tls_version], , [min_tls_version], , [name], , [override_host], , [port], , [request_condition], , [shield], , [ssl_ca_cert], , [ssl_cert_hostname], , [ssl_check_cert], , [ssl_ciphers], , [ssl_client_cert], , [ssl_client_key], , [ssl_hostname], , [ssl_sni_hostname], , [use_ssl], , [weight] })
```

Create a backend for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required
  address: "address_example",  auto_loadbalance: true,  between_bytes_timeout: 56,  client_cert: "client_cert_example",  comment: "comment_example",  connect_timeout: 56,  first_byte_timeout: 56,  healthcheck: "healthcheck_example",  hostname: "hostname_example",  ipv4: "ipv4_example",  ipv6: "ipv6_example",  max_conn: 56,  max_tls_version: "max_tls_version_example",  min_tls_version: "min_tls_version_example",  name: "name_example",  override_host: "override_host_example",  port: 56,  request_condition: "request_condition_example",  shield: "shield_example",  ssl_ca_cert: "ssl_ca_cert_example",  ssl_cert_hostname: "ssl_cert_hostname_example",  ssl_check_cert: true,  ssl_ciphers: "ssl_ciphers_example",  ssl_client_cert: "ssl_client_cert_example",  ssl_client_key: "ssl_client_key_example",  ssl_hostname: "ssl_hostname_example",  ssl_sni_hostname: "ssl_sni_hostname_example",  use_ssl: true,  weight: 56,
};

apiInstance.createBackend(options)
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

```javascript
deleteBackend({ service_id, version_id, backend_name })
```

Delete the backend for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required  backend_name: "backend_name_example", // required

};

apiInstance.deleteBackend(options)
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
**backend_name** | **String** |  |

### Return type

**Object**


## `getBackend`

```javascript
getBackend({ service_id, version_id, backend_name })
```

Get the backend for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required  backend_name: "backend_name_example", // required

};

apiInstance.getBackend(options)
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
**backend_name** | **String** |  |

### Return type

[**BackendResponse**](BackendResponse.md)


## `listBackends`

```javascript
listBackends({ service_id, version_id })
```

List all backends for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required

};

apiInstance.listBackends(options)
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

[**[BackendResponse]**](BackendResponse.md)


## `updateBackend`

```javascript
updateBackend({ service_id, version_id, backend_name, [address], , [auto_loadbalance], , [between_bytes_timeout], , [client_cert], , [comment], , [connect_timeout], , [first_byte_timeout], , [healthcheck], , [hostname], , [ipv4], , [ipv6], , [max_conn], , [max_tls_version], , [min_tls_version], , [name], , [override_host], , [port], , [request_condition], , [shield], , [ssl_ca_cert], , [ssl_cert_hostname], , [ssl_check_cert], , [ssl_ciphers], , [ssl_client_cert], , [ssl_client_key], , [ssl_hostname], , [ssl_sni_hostname], , [use_ssl], , [weight] })
```

Update the backend for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required  backend_name: "backend_name_example", // required
  address: "address_example",  auto_loadbalance: true,  between_bytes_timeout: 56,  client_cert: "client_cert_example",  comment: "comment_example",  connect_timeout: 56,  first_byte_timeout: 56,  healthcheck: "healthcheck_example",  hostname: "hostname_example",  ipv4: "ipv4_example",  ipv6: "ipv6_example",  max_conn: 56,  max_tls_version: "max_tls_version_example",  min_tls_version: "min_tls_version_example",  name: "name_example",  override_host: "override_host_example",  port: 56,  request_condition: "request_condition_example",  shield: "shield_example",  ssl_ca_cert: "ssl_ca_cert_example",  ssl_cert_hostname: "ssl_cert_hostname_example",  ssl_check_cert: true,  ssl_ciphers: "ssl_ciphers_example",  ssl_client_cert: "ssl_client_cert_example",  ssl_client_key: "ssl_client_key_example",  ssl_hostname: "ssl_hostname_example",  ssl_sni_hostname: "ssl_sni_hostname_example",  use_ssl: true,  weight: 56,
};

apiInstance.updateBackend(options)
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
