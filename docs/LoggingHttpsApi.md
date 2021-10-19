# Fastly.LoggingHttpsApi


```javascript
const apiInstance = new Fastly.LoggingHttpsApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogHttps**](LoggingHttpsApi.md#createLogHttps) | **POST** /service/{service_id}/version/{version_id}/logging/https | Create an HTTPS log endpoint
[**deleteLogHttps**](LoggingHttpsApi.md#deleteLogHttps) | **DELETE** /service/{service_id}/version/{version_id}/logging/https/{logging_https_name} | Delete an HTTPS log endpoint
[**getLogHttps**](LoggingHttpsApi.md#getLogHttps) | **GET** /service/{service_id}/version/{version_id}/logging/https/{logging_https_name} | Get an HTTPS log endpoint
[**listLogHttps**](LoggingHttpsApi.md#listLogHttps) | **GET** /service/{service_id}/version/{version_id}/logging/https | List HTTPS log endpoints
[**updateLogHttps**](LoggingHttpsApi.md#updateLogHttps) | **PUT** /service/{service_id}/version/{version_id}/logging/https/{logging_https_name} | Update an HTTPS log endpoint



## `createLogHttps`

```javascript
createLogHttps({ service_id, version_id, [format, ], [format_version, ], [name, ], [placement, ], [response_condition, ], [tls_ca_cert, ], [tls_client_cert, ], [tls_client_key, ], [tls_hostname, ], [request_max_bytes, ], [request_max_entries, ], [content_type, ], [header_name, ], [header_value, ], [json_format, ], [message_type, ], [method, ], [url] })
```

Create an HTTPS object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  format: "'%h %l %u %t \"%r\" %&gt;s %b'",
  format_version: new Fastly.LoggingFormatVersion(),
  name: "name_example",
  placement: new Fastly.LoggingPlacement(),
  response_condition: "response_condition_example",
  tls_ca_cert: "'null'",
  tls_client_cert: "'null'",
  tls_client_key: "'null'",
  tls_hostname: "'null'",
  request_max_bytes: 0,
  request_max_entries: 0,
  content_type: "'null'",
  header_name: "'null'",
  header_value: "'null'",
  json_format: "json_format_example",
  message_type: new Fastly.LoggingMessageType(),
  method: "'POST'",
  url: "url_example",
};

apiInstance.createLogHttps(options)
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
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**tls_ca_cert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_cert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_key** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_hostname** | **String** | The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
**request_max_bytes** | **Number** | The maximum number of bytes sent in one request. Defaults &#x60;0&#x60; (no limit). | [optional] [default to 0]
**request_max_entries** | **Number** | The maximum number of logs sent in one request. Defaults &#x60;0&#x60; (no limit). | [optional] [default to 0]
**content_type** | **String** | Content type of the header sent with the request. | [optional] [default to &#39;null&#39;]
**header_name** | **String** | Name of the custom header sent with the request. | [optional] [default to &#39;null&#39;]
**header_value** | **String** | Value of the custom header sent with the request. | [optional] [default to &#39;null&#39;]
**json_format** | **String** | Enforces valid JSON formatting for log entries. | [optional]
**message_type** | [**LoggingMessageType**](../Model/LoggingMessageType.md) |  | [optional]
**method** | **String** | HTTP method used for request. | [optional] [default to &#39;POST&#39;]
**url** | **String** | The URL to send logs to. Must use HTTPS. Required. | [optional]

### Return type

[**LoggingHttpsResponse**](LoggingHttpsResponse.md)


## `deleteLogHttps`

```javascript
deleteLogHttps({ service_id, version_id, logging_https_name })
```

Delete the HTTPS object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_https_name: "logging_https_name_example", // required
};

apiInstance.deleteLogHttps(options)
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
**logging_https_name** | **String** |  |

### Return type

**Object**


## `getLogHttps`

```javascript
getLogHttps({ service_id, version_id, logging_https_name })
```

Get the HTTPS object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_https_name: "logging_https_name_example", // required
};

apiInstance.getLogHttps(options)
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
**logging_https_name** | **String** |  |

### Return type

[**LoggingHttpsResponse**](LoggingHttpsResponse.md)


## `listLogHttps`

```javascript
listLogHttps({ service_id, version_id })
```

List all of the HTTPS objects for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listLogHttps(options)
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

[**[LoggingHttpsResponse]**](LoggingHttpsResponse.md)


## `updateLogHttps`

```javascript
updateLogHttps({ service_id, version_id, logging_https_name, [format, ], [format_version, ], [name, ], [placement, ], [response_condition, ], [tls_ca_cert, ], [tls_client_cert, ], [tls_client_key, ], [tls_hostname, ], [request_max_bytes, ], [request_max_entries, ], [content_type, ], [header_name, ], [header_value, ], [json_format, ], [message_type, ], [method, ], [url] })
```

Update the HTTPS object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_https_name: "logging_https_name_example", // required
  format: "'%h %l %u %t \"%r\" %&gt;s %b'",
  format_version: new Fastly.LoggingFormatVersion(),
  name: "name_example",
  placement: new Fastly.LoggingPlacement(),
  response_condition: "response_condition_example",
  tls_ca_cert: "'null'",
  tls_client_cert: "'null'",
  tls_client_key: "'null'",
  tls_hostname: "'null'",
  request_max_bytes: 0,
  request_max_entries: 0,
  content_type: "'null'",
  header_name: "'null'",
  header_value: "'null'",
  json_format: "json_format_example",
  message_type: new Fastly.LoggingMessageType(),
  method: "'POST'",
  url: "url_example",
};

apiInstance.updateLogHttps(options)
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
**logging_https_name** | **String** |  |
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**tls_ca_cert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_cert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_key** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_hostname** | **String** | The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
**request_max_bytes** | **Number** | The maximum number of bytes sent in one request. Defaults &#x60;0&#x60; (no limit). | [optional] [default to 0]
**request_max_entries** | **Number** | The maximum number of logs sent in one request. Defaults &#x60;0&#x60; (no limit). | [optional] [default to 0]
**content_type** | **String** | Content type of the header sent with the request. | [optional] [default to &#39;null&#39;]
**header_name** | **String** | Name of the custom header sent with the request. | [optional] [default to &#39;null&#39;]
**header_value** | **String** | Value of the custom header sent with the request. | [optional] [default to &#39;null&#39;]
**json_format** | **String** | Enforces valid JSON formatting for log entries. | [optional]
**message_type** | [**LoggingMessageType**](../Model/LoggingMessageType.md) |  | [optional]
**method** | **String** | HTTP method used for request. | [optional] [default to &#39;POST&#39;]
**url** | **String** | The URL to send logs to. Must use HTTPS. Required. | [optional]

### Return type

[**LoggingHttpsResponse**](LoggingHttpsResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
