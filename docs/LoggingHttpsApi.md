# FastlyApi.LoggingHttpsApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogHttps**](LoggingHttpsApi.md#createLogHttps) | **POST** /service/{service_id}/version/{version_id}/logging/https | Create an HTTPS log endpoint
[**deleteLogHttps**](LoggingHttpsApi.md#deleteLogHttps) | **DELETE** /service/{service_id}/version/{version_id}/logging/https/{logging_https_name} | Delete an HTTPS log endpoint
[**getLogHttps**](LoggingHttpsApi.md#getLogHttps) | **GET** /service/{service_id}/version/{version_id}/logging/https/{logging_https_name} | Get an HTTPS log endpoint
[**listLogHttps**](LoggingHttpsApi.md#listLogHttps) | **GET** /service/{service_id}/version/{version_id}/logging/https | List HTTPS log endpoints
[**updateLogHttps**](LoggingHttpsApi.md#updateLogHttps) | **PUT** /service/{service_id}/version/{version_id}/logging/https/{logging_https_name} | Update an HTTPS log endpoint



## `createLogHttps`

> createLogHttps(service_id, version_id, opts)

Create an HTTPS log endpoint

Create an HTTPS object for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingHttpsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'tls_ca_cert': "'null'", // String | A secure certificate to authenticate a server with. Must be in PEM format.
  'tls_client_cert': "'null'", // String | The client certificate used to make authenticated requests. Must be in PEM format.
  'tls_client_key': "'null'", // String | The client private key used to make authenticated requests. Must be in PEM format.
  'tls_hostname': "'null'", // String | The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
  'request_max_entries': 0, // Number | The maximum number of logs sent in one request. Defaults `0` (no limit).
  'request_max_bytes': 0, // Number | The maximum number of bytes sent in one request. Defaults `0` (no limit).
  'url': "url_example", // String | The URL to send logs to. Must use HTTPS. Required.
  'content_type': "'null'", // String | Content type of the header sent with the request.
  'header_name': "'null'", // String | Name of the custom header sent with the request.
  'message_type': new FastlyApi.LoggingMessageType(), // LoggingMessageType | 
  'header_value': "'null'", // String | Value of the custom header sent with the request.
  'method': "'POST'", // String | HTTP method used for request.
  'json_format': "json_format_example" // String | Enforces valid JSON formatting for log entries.
};
apiInstance.createLogHttps(service_id, version_id, opts).then((data) => {
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

> deleteLogHttps(service_id, version_id, logging_https_name)

Delete an HTTPS log endpoint

Delete the HTTPS object for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingHttpsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_https_name = "logging_https_name_example"; // String | 
apiInstance.deleteLogHttps(service_id, version_id, logging_https_name).then((data) => {
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
**logging_https_name** | **String** |  |

### Return type

**Object**


## `getLogHttps`

> getLogHttps(service_id, version_id, logging_https_name)

Get an HTTPS log endpoint

Get the HTTPS object for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingHttpsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_https_name = "logging_https_name_example"; // String | 
apiInstance.getLogHttps(service_id, version_id, logging_https_name).then((data) => {
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
**logging_https_name** | **String** |  |

### Return type

[**LoggingHttpsResponse**](LoggingHttpsResponse.md)


## `listLogHttps`

> listLogHttps(service_id, version_id)

List HTTPS log endpoints

List all of the HTTPS objects for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingHttpsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogHttps(service_id, version_id).then((data) => {
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

[**[LoggingHttpsResponse]**](LoggingHttpsResponse.md)


## `updateLogHttps`

> updateLogHttps(service_id, version_id, logging_https_name, opts)

Update an HTTPS log endpoint

Update the HTTPS object for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingHttpsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_https_name = "logging_https_name_example"; // String | 
let opts = {
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'tls_ca_cert': "'null'", // String | A secure certificate to authenticate a server with. Must be in PEM format.
  'tls_client_cert': "'null'", // String | The client certificate used to make authenticated requests. Must be in PEM format.
  'tls_client_key': "'null'", // String | The client private key used to make authenticated requests. Must be in PEM format.
  'tls_hostname': "'null'", // String | The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
  'request_max_entries': 0, // Number | The maximum number of logs sent in one request. Defaults `0` (no limit).
  'request_max_bytes': 0, // Number | The maximum number of bytes sent in one request. Defaults `0` (no limit).
  'url': "url_example", // String | The URL to send logs to. Must use HTTPS. Required.
  'content_type': "'null'", // String | Content type of the header sent with the request.
  'header_name': "'null'", // String | Name of the custom header sent with the request.
  'message_type': new FastlyApi.LoggingMessageType(), // LoggingMessageType | 
  'header_value': "'null'", // String | Value of the custom header sent with the request.
  'method': "'POST'", // String | HTTP method used for request.
  'json_format': "json_format_example" // String | Enforces valid JSON formatting for log entries.
};
apiInstance.updateLogHttps(service_id, version_id, logging_https_name, opts).then((data) => {
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
