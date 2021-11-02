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
createLogSyslog({ service_id, version_id, [name, ][placement, ][format_version, ][response_condition, ][format, ][tls_ca_cert, ][tls_client_cert, ][tls_client_key, ][tls_hostname, ][address, ][port, ][message_type, ][hostname, ][ipv4, ][token, ][use_tls] })
```

Create a Syslog for a particular service and version.

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
  address: "address_example",
  port: 514,
  message_type: new Fastly.LoggingMessageType(),
  hostname: "hostname_example",
  ipv4: "ipv4_example",
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
updateLogSyslog({ service_id, version_id, logging_syslog_name, [name, ][placement, ][format_version, ][response_condition, ][format, ][tls_ca_cert, ][tls_client_cert, ][tls_client_key, ][tls_hostname, ][address, ][port, ][message_type, ][hostname, ][ipv4, ][token, ][use_tls] })
```

Update the Syslog for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_syslog_name: "logging_syslog_name_example", // required
  name: "name_example",
  placement: new Fastly.LoggingPlacement(),
  format_version: new Fastly.LoggingFormatVersion(),
  response_condition: "response_condition_example",
  format: '%h %l %u %t "%r" %&gt;s %b',
  tls_ca_cert: 'null',
  tls_client_cert: 'null',
  tls_client_key: 'null',
  tls_hostname: 'null',
  address: "address_example",
  port: 514,
  message_type: new Fastly.LoggingMessageType(),
  hostname: "hostname_example",
  ipv4: "ipv4_example",
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
