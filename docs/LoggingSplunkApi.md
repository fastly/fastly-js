# Fastly.LoggingSplunkApi


```javascript
const apiInstance = new Fastly.LoggingSplunkApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogSplunk**](LoggingSplunkApi.md#createLogSplunk) | **POST** /service/{service_id}/version/{version_id}/logging/splunk | Create a Splunk log endpoint
[**deleteLogSplunk**](LoggingSplunkApi.md#deleteLogSplunk) | **DELETE** /service/{service_id}/version/{version_id}/logging/splunk/{logging_splunk_name} | Delete a Splunk log endpoint
[**getLogSplunk**](LoggingSplunkApi.md#getLogSplunk) | **GET** /service/{service_id}/version/{version_id}/logging/splunk/{logging_splunk_name} | Get a Splunk log endpoint
[**listLogSplunk**](LoggingSplunkApi.md#listLogSplunk) | **GET** /service/{service_id}/version/{version_id}/logging/splunk | List Splunk log endpoints
[**updateLogSplunk**](LoggingSplunkApi.md#updateLogSplunk) | **PUT** /service/{service_id}/version/{version_id}/logging/splunk/{logging_splunk_name} | Update a Splunk log endpoint



## `createLogSplunk`

```javascript
createLogSplunk({ service_id, version_id, [format], , [format_version], , [name], , [placement], , [response_condition], , [tls_ca_cert], , [tls_client_cert], , [tls_client_key], , [tls_hostname], , [request_max_bytes], , [request_max_entries], , [token], , [url], , [use_tls] })
```

Create a Splunk logging object for a particular service and version.

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
  token: "token_example",
  url: "url_example",
  use_tls: new Fastly.LoggingUseTls(),
};

apiInstance.createLogSplunk(options)
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
**request_max_bytes** | **Number** | The maximum number of bytes sent in one request. Defaults &#x60;0&#x60; for unbounded. | [optional] [default to 0]
**request_max_entries** | **Number** | The maximum number of logs sent in one request. Defaults &#x60;0&#x60; for unbounded. | [optional] [default to 0]
**token** | **String** | A Splunk token for use in posting logs over HTTP to your collector. | [optional]
**url** | **String** | The URL to post logs to. | [optional]
**use_tls** | [**LoggingUseTls**](../Model/LoggingUseTls.md) |  | [optional]

### Return type

[**LoggingSplunkResponse**](LoggingSplunkResponse.md)


## `deleteLogSplunk`

```javascript
deleteLogSplunk({ service_id, version_id, logging_splunk_name })
```

Delete the Splunk logging object for a particular service and version.

### Example

```javascript
const options = {
 service_id: "service_id_example", // required
 version_id: 56, // required
 logging_splunk_name: "logging_splunk_name_example", // required
};

apiInstance.deleteLogSplunk(options)
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
**logging_splunk_name** | **String** |  |

### Return type

**Object**


## `getLogSplunk`

```javascript
getLogSplunk({ service_id, version_id, logging_splunk_name })
```

Get the details for a Splunk logging object for a particular service and version.

### Example

```javascript
const options = {
 service_id: "service_id_example", // required
 version_id: 56, // required
 logging_splunk_name: "logging_splunk_name_example", // required
};

apiInstance.getLogSplunk(options)
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
**logging_splunk_name** | **String** |  |

### Return type

[**LoggingSplunkResponse**](LoggingSplunkResponse.md)


## `listLogSplunk`

```javascript
listLogSplunk({ service_id, version_id })
```

List all of the Splunk logging objects for a particular service and version.

### Example

```javascript
const options = {
 service_id: "service_id_example", // required
 version_id: 56, // required
};

apiInstance.listLogSplunk(options)
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

[**[LoggingSplunkResponse]**](LoggingSplunkResponse.md)


## `updateLogSplunk`

```javascript
updateLogSplunk({ service_id, version_id, logging_splunk_name, [format], , [format_version], , [name], , [placement], , [response_condition], , [tls_ca_cert], , [tls_client_cert], , [tls_client_key], , [tls_hostname], , [request_max_bytes], , [request_max_entries], , [token], , [url], , [use_tls] })
```

Update the Splunk logging object for a particular service and version.

### Example

```javascript
const options = {
 service_id: "service_id_example", // required
 version_id: 56, // required
 logging_splunk_name: "logging_splunk_name_example", // required
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
  token: "token_example",
  url: "url_example",
  use_tls: new Fastly.LoggingUseTls(),
};

apiInstance.updateLogSplunk(options)
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
**logging_splunk_name** | **String** |  |
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**tls_ca_cert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_cert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_key** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_hostname** | **String** | The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
**request_max_bytes** | **Number** | The maximum number of bytes sent in one request. Defaults &#x60;0&#x60; for unbounded. | [optional] [default to 0]
**request_max_entries** | **Number** | The maximum number of logs sent in one request. Defaults &#x60;0&#x60; for unbounded. | [optional] [default to 0]
**token** | **String** | A Splunk token for use in posting logs over HTTP to your collector. | [optional]
**url** | **String** | The URL to post logs to. | [optional]
**use_tls** | [**LoggingUseTls**](../Model/LoggingUseTls.md) |  | [optional]

### Return type

[**LoggingSplunkResponse**](LoggingSplunkResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
