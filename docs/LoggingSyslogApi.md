# Fastly.LoggingSyslogApi


```javascript
const apiInstance = new Fastly.LoggingSyslogApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogSyslog**](LoggingSyslogApi.md#createLogSyslog) | **POST** /service/{service_id}/version/{version_id}/logging/syslog | Create a syslog log endpoint
[**deleteLogSyslog**](LoggingSyslogApi.md#deleteLogSyslog) | **DELETE** /service/{service_id}/version/{version_id}/logging/syslog/{logging_syslog_name} | Delete a syslog log endpoint
[**getLogSyslog**](LoggingSyslogApi.md#getLogSyslog) | **GET** /service/{service_id}/version/{version_id}/logging/syslog/{logging_syslog_name} | Get a syslog log endpoint
[**listLogSyslog**](LoggingSyslogApi.md#listLogSyslog) | **GET** /service/{service_id}/version/{version_id}/logging/syslog | List Syslog log endpoints
[**updateLogSyslog**](LoggingSyslogApi.md#updateLogSyslog) | **PUT** /service/{service_id}/version/{version_id}/logging/syslog/{logging_syslog_name} | Update a syslog log endpoint



## `createLogSyslog`

```javascript
createLogSyslog({ service_id, version_id, [format, ], [format_version, ], [name, ], [placement, ], [response_condition, ], [tls_ca_cert, ], [tls_client_cert, ], [tls_client_key, ], [tls_hostname, ], [address, ], [port, ], [hostname, ], [ipv4, ], [message_type, ], [token, ], [use_tls] })
```

Create a Syslog for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  format: '%h %l %u %t "%r" %&gt;s %b',
  format_version: FormatVersionEnum.v2,
  name: "name_example",
  placement: ,
  response_condition: "response_condition_example",
  tls_ca_cert: 'null',
  tls_client_cert: 'null',
  tls_client_key: 'null',
  tls_hostname: 'null',
  address: "address_example",
  port: 514,
  hostname: "hostname_example",
  ipv4: "ipv4_example",
  message_type: new Fastly.LoggingMessageType(),
  token: 'null',
  use_tls: new Fastly.LoggingUseTls(),
};

apiInstance.createLogSyslog(options)
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
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in &#x60;vcl_log&#x60; if &#x60;format_version&#x60; is set to &#x60;2&#x60; and in &#x60;vcl_deliver&#x60; if &#x60;format_version&#x60; is set to &#x60;1&#x60;.   | [optional] [default to FormatVersionEnum.v2]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with &#x60;format_version&#x60; of 2 are placed in &#x60;vcl_log&#x60; and those with &#x60;format_version&#x60; of 1 are placed in &#x60;vcl_deliver&#x60;.  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**tls_ca_cert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_cert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_key** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_hostname** | **String** | The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
**address** | **String** | A hostname or IPv4 address. | [optional]
**port** | **Number** | The port number. | [optional] [default to 514]
**hostname** | **String** | The hostname used for the syslog endpoint. | [optional]
**ipv4** | **String** | The IPv4 address used for the syslog endpoint. | [optional]
**message_type** | [**LoggingMessageType**](../Model/LoggingMessageType.md) |  | [optional]
**token** | **String** | Whether to prepend each message with a specific token. | [optional] [default to &#39;null&#39;]
**use_tls** | [**LoggingUseTls**](../Model/LoggingUseTls.md) |  | [optional]

### Return type

[**LoggingSyslogResponse**](LoggingSyslogResponse.md)


## `deleteLogSyslog`

```javascript
deleteLogSyslog({ service_id, version_id, logging_syslog_name })
```

Delete the Syslog for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_syslog_name: "logging_syslog_name_example", // required
};

apiInstance.deleteLogSyslog(options)
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
**logging_syslog_name** | **String** |  |

### Return type

**Object**


## `getLogSyslog`

```javascript
getLogSyslog({ service_id, version_id, logging_syslog_name })
```

Get the Syslog for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_syslog_name: "logging_syslog_name_example", // required
};

apiInstance.getLogSyslog(options)
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
**logging_syslog_name** | **String** |  |

### Return type

[**LoggingSyslogResponse**](LoggingSyslogResponse.md)


## `listLogSyslog`

```javascript
listLogSyslog({ service_id, version_id })
```

List all of the Syslogs for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listLogSyslog(options)
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

[**[LoggingSyslogResponse]**](LoggingSyslogResponse.md)


## `updateLogSyslog`

```javascript
updateLogSyslog({ service_id, version_id, logging_syslog_name, [format, ], [format_version, ], [name, ], [placement, ], [response_condition, ], [tls_ca_cert, ], [tls_client_cert, ], [tls_client_key, ], [tls_hostname, ], [address, ], [port, ], [hostname, ], [ipv4, ], [message_type, ], [token, ], [use_tls] })
```

Update the Syslog for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_syslog_name: "logging_syslog_name_example", // required
  format: '%h %l %u %t "%r" %&gt;s %b',
  format_version: FormatVersionEnum.v2,
  name: "name_example",
  placement: ,
  response_condition: "response_condition_example",
  tls_ca_cert: 'null',
  tls_client_cert: 'null',
  tls_client_key: 'null',
  tls_hostname: 'null',
  address: "address_example",
  port: 514,
  hostname: "hostname_example",
  ipv4: "ipv4_example",
  message_type: new Fastly.LoggingMessageType(),
  token: 'null',
  use_tls: new Fastly.LoggingUseTls(),
};

apiInstance.updateLogSyslog(options)
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
**logging_syslog_name** | **String** |  |
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in &#x60;vcl_log&#x60; if &#x60;format_version&#x60; is set to &#x60;2&#x60; and in &#x60;vcl_deliver&#x60; if &#x60;format_version&#x60; is set to &#x60;1&#x60;.   | [optional] [default to FormatVersionEnum.v2]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with &#x60;format_version&#x60; of 2 are placed in &#x60;vcl_log&#x60; and those with &#x60;format_version&#x60; of 1 are placed in &#x60;vcl_deliver&#x60;.  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**tls_ca_cert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_cert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_key** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_hostname** | **String** | The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
**address** | **String** | A hostname or IPv4 address. | [optional]
**port** | **Number** | The port number. | [optional] [default to 514]
**hostname** | **String** | The hostname used for the syslog endpoint. | [optional]
**ipv4** | **String** | The IPv4 address used for the syslog endpoint. | [optional]
**message_type** | [**LoggingMessageType**](../Model/LoggingMessageType.md) |  | [optional]
**token** | **String** | Whether to prepend each message with a specific token. | [optional] [default to &#39;null&#39;]
**use_tls** | [**LoggingUseTls**](../Model/LoggingUseTls.md) |  | [optional]

### Return type

[**LoggingSyslogResponse**](LoggingSyslogResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
