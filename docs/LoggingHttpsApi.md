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
createLogHttps({ service_id, version_id, [name, ][placement, ][format_version, ][response_condition, ][format, ][tls_ca_cert, ][tls_client_cert, ][tls_client_key, ][tls_hostname, ][request_max_entries, ][request_max_bytes, ][url, ][content_type, ][header_name, ][message_type, ][header_value, ][method, ][json_format] })
```

Create an HTTPS object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  name: "name_example",
  placement: new Fastly.LoggingPlacement(),
  format_version: new Fastly.LoggingFormatVersion(),
  response_condition: "response_condition_example",
  format: '%h %l %u %t "%r" %&gt;s %b',
  tls_ca_cert: 'null',
  tls_client_cert: 'null',
  tls_client_key: 'null',
  tls_hostname: 'null',
  request_max_entries: 0,
  request_max_bytes: 0,
  url: "url_example",
  content_type: 'null',
  header_name: 'null',
  message_type: new Fastly.LoggingMessageType(),
  header_value: 'null',
  method: 'POST',
  json_format: ,
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
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**tls_ca_cert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_cert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_key** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_hostname** | **String** | The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
**request_max_entries** | **Number** | The maximum number of logs sent in one request. Defaults &#x60;0&#x60; (no limit). | [optional] [default to 0]
**request_max_bytes** | **Number** | The maximum number of bytes sent in one request. Defaults &#x60;0&#x60; (no limit). | [optional] [default to 0]
**url** | **String** | The URL to send logs to. Must use HTTPS. Required. | [optional]
**content_type** | **String** | Content type of the header sent with the request. | [optional] [default to &#39;null&#39;]
**header_name** | **String** | Name of the custom header sent with the request. | [optional] [default to &#39;null&#39;]
**message_type** | [**LoggingMessageType**](../Model/LoggingMessageType.md) |  | [optional]
**header_value** | **String** | Value of the custom header sent with the request. | [optional] [default to &#39;null&#39;]
**method** | **String** | HTTP method used for request. | [optional] [default to &#39;POST&#39;]
**json_format** | **String** | Enforces valid JSON formatting for log entries. | [optional]

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
updateLogHttps({ service_id, version_id, logging_https_name, [name, ][placement, ][format_version, ][response_condition, ][format, ][tls_ca_cert, ][tls_client_cert, ][tls_client_key, ][tls_hostname, ][request_max_entries, ][request_max_bytes, ][url, ][content_type, ][header_name, ][message_type, ][header_value, ][method, ][json_format] })
```

Update the HTTPS object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_https_name: "logging_https_name_example", // required
  name: "name_example",
  placement: new Fastly.LoggingPlacement(),
  format_version: new Fastly.LoggingFormatVersion(),
  response_condition: "response_condition_example",
  format: '%h %l %u %t "%r" %&gt;s %b',
  tls_ca_cert: 'null',
  tls_client_cert: 'null',
  tls_client_key: 'null',
  tls_hostname: 'null',
  request_max_entries: 0,
  request_max_bytes: 0,
  url: "url_example",
  content_type: 'null',
  header_name: 'null',
  message_type: new Fastly.LoggingMessageType(),
  header_value: 'null',
  method: 'POST',
  json_format: ,
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
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**tls_ca_cert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_cert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_key** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_hostname** | **String** | The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
**request_max_entries** | **Number** | The maximum number of logs sent in one request. Defaults &#x60;0&#x60; (no limit). | [optional] [default to 0]
**request_max_bytes** | **Number** | The maximum number of bytes sent in one request. Defaults &#x60;0&#x60; (no limit). | [optional] [default to 0]
**url** | **String** | The URL to send logs to. Must use HTTPS. Required. | [optional]
**content_type** | **String** | Content type of the header sent with the request. | [optional] [default to &#39;null&#39;]
**header_name** | **String** | Name of the custom header sent with the request. | [optional] [default to &#39;null&#39;]
**message_type** | [**LoggingMessageType**](../Model/LoggingMessageType.md) |  | [optional]
**header_value** | **String** | Value of the custom header sent with the request. | [optional] [default to &#39;null&#39;]
**method** | **String** | HTTP method used for request. | [optional] [default to &#39;POST&#39;]
**json_format** | **String** | Enforces valid JSON formatting for log entries. | [optional]

### Return type

[**LoggingHttpsResponse**](LoggingHttpsResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
