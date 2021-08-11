# FastlyApi.LoggingSyslogApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogSyslog**](LoggingSyslogApi.md#createLogSyslog) | **POST** /service/{service_id}/version/{version_id}/logging/syslog | Create a syslog log endpoint
[**deleteLogSyslog**](LoggingSyslogApi.md#deleteLogSyslog) | **DELETE** /service/{service_id}/version/{version_id}/logging/syslog/{logging_syslog_name} | Delete a syslog log endpoint
[**getLogSyslog**](LoggingSyslogApi.md#getLogSyslog) | **GET** /service/{service_id}/version/{version_id}/logging/syslog/{logging_syslog_name} | Get a syslog log endpoint
[**listLogSyslog**](LoggingSyslogApi.md#listLogSyslog) | **GET** /service/{service_id}/version/{version_id}/logging/syslog | List Syslog log endpoints
[**updateLogSyslog**](LoggingSyslogApi.md#updateLogSyslog) | **PUT** /service/{service_id}/version/{version_id}/logging/syslog/{logging_syslog_name} | Update a syslog log endpoint



## `createLogSyslog`

> LoggingSyslogResponse createLogSyslog(service_id, version_id, opts)

Create a syslog log endpoint

Create a Syslog for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingSyslogApi();
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
  'address': "address_example", // String | A hostname or IPv4 address.
  'port': 514, // Number | The port number.
  'message_type': new FastlyApi.LoggingMessageType(), // LoggingMessageType | 
  'hostname': "hostname_example", // String | The hostname used for the syslog endpoint.
  'ipv4': "ipv4_example", // String | The IPv4 address used for the syslog endpoint.
  'token': "'null'", // String | Whether to prepend each message with a specific token.
  'use_tls': new FastlyApi.LoggingUseTls() // LoggingUseTls | 
};
apiInstance.createLogSyslog(service_id, version_id, opts).then((data) => {
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
**address** | **String** | A hostname or IPv4 address. | [optional]
**port** | **Number** | The port number. | [optional] [default to 514]
**message_type** | [**LoggingMessageType**](../Model/LoggingMessageType.md) |  | [optional]
**hostname** | **String** | The hostname used for the syslog endpoint. | [optional]
**ipv4** | **String** | The IPv4 address used for the syslog endpoint. | [optional]
**token** | **String** | Whether to prepend each message with a specific token. | [optional] [default to &#39;null&#39;]
**use_tls** | [**LoggingUseTls**](../Model/LoggingUseTls.md) |  | [optional]

### Return type

[**LoggingSyslogResponse**](LoggingSyslogResponse.md)


## `deleteLogSyslog`

> Object deleteLogSyslog(service_id, version_id, logging_syslog_name)

Delete a syslog log endpoint

Delete the Syslog for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingSyslogApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_syslog_name = "logging_syslog_name_example"; // String | 
apiInstance.deleteLogSyslog(service_id, version_id, logging_syslog_name).then((data) => {
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
**logging_syslog_name** | **String** |  |

### Return type

**Object**


## `getLogSyslog`

> LoggingSyslogResponse getLogSyslog(service_id, version_id, logging_syslog_name)

Get a syslog log endpoint

Get the Syslog for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingSyslogApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_syslog_name = "logging_syslog_name_example"; // String | 
apiInstance.getLogSyslog(service_id, version_id, logging_syslog_name).then((data) => {
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
**logging_syslog_name** | **String** |  |

### Return type

[**LoggingSyslogResponse**](LoggingSyslogResponse.md)


## `listLogSyslog`

> [LoggingSyslogResponse] listLogSyslog(service_id, version_id)

List Syslog log endpoints

List all of the Syslogs for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingSyslogApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogSyslog(service_id, version_id).then((data) => {
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

[**[LoggingSyslogResponse]**](LoggingSyslogResponse.md)


## `updateLogSyslog`

> LoggingSyslogResponse updateLogSyslog(service_id, version_id, logging_syslog_name, opts)

Update a syslog log endpoint

Update the Syslog for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingSyslogApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_syslog_name = "logging_syslog_name_example"; // String | 
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
  'address': "address_example", // String | A hostname or IPv4 address.
  'port': 514, // Number | The port number.
  'message_type': new FastlyApi.LoggingMessageType(), // LoggingMessageType | 
  'hostname': "hostname_example", // String | The hostname used for the syslog endpoint.
  'ipv4': "ipv4_example", // String | The IPv4 address used for the syslog endpoint.
  'token': "'null'", // String | Whether to prepend each message with a specific token.
  'use_tls': new FastlyApi.LoggingUseTls() // LoggingUseTls | 
};
apiInstance.updateLogSyslog(service_id, version_id, logging_syslog_name, opts).then((data) => {
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
**logging_syslog_name** | **String** |  |
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**tls_ca_cert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_cert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_key** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_hostname** | **String** | The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
**address** | **String** | A hostname or IPv4 address. | [optional]
**port** | **Number** | The port number. | [optional] [default to 514]
**message_type** | [**LoggingMessageType**](../Model/LoggingMessageType.md) |  | [optional]
**hostname** | **String** | The hostname used for the syslog endpoint. | [optional]
**ipv4** | **String** | The IPv4 address used for the syslog endpoint. | [optional]
**token** | **String** | Whether to prepend each message with a specific token. | [optional] [default to &#39;null&#39;]
**use_tls** | [**LoggingUseTls**](../Model/LoggingUseTls.md) |  | [optional]

### Return type

[**LoggingSyslogResponse**](LoggingSyslogResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
