# Fastly.LoggingSumologicApi


```javascript
const apiInstance = new Fastly.LoggingSumologicApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogSumologic**](LoggingSumologicApi.md#createLogSumologic) | **POST** /service/{service_id}/version/{version_id}/logging/sumologic | Create a Sumologic log endpoint
[**deleteLogSumologic**](LoggingSumologicApi.md#deleteLogSumologic) | **DELETE** /service/{service_id}/version/{version_id}/logging/sumologic/{logging_sumologic_name} | Delete a Sumologic log endpoint
[**getLogSumologic**](LoggingSumologicApi.md#getLogSumologic) | **GET** /service/{service_id}/version/{version_id}/logging/sumologic/{logging_sumologic_name} | Get a Sumologic log endpoint
[**listLogSumologic**](LoggingSumologicApi.md#listLogSumologic) | **GET** /service/{service_id}/version/{version_id}/logging/sumologic | List Sumologic log endpoints
[**updateLogSumologic**](LoggingSumologicApi.md#updateLogSumologic) | **PUT** /service/{service_id}/version/{version_id}/logging/sumologic/{logging_sumologic_name} | Update a Sumologic log endpoint



## `createLogSumologic`

```javascript
createLogSumologic({ service_id, version_id, [name, ][placement, ][format_version, ][response_condition, ][format, ][message_type, ][url] })
```

Create a Sumologic for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  name: "name_example",
  placement: "none",
  format_version: 1,
  response_condition: "response_condition_example",
  format: "'%h %l %u %t \"%r\" %&gt;s %b'",
  message_type: new Fastly.LoggingMessageType(),
  url: "url_example",
};

apiInstance.createLogSumologic(options)
  .then((data) => {
    console.log(data, "API called successfully.");
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
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.  | [optional] [one of: "none", "waf_debug"]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.   | [optional] [one of: 1, 2] [defaults to FormatVersionEnum.v2]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [defaults to '%h %l %u %t "%r" %&gt;s %b']
**message_type** | [**LoggingMessageType**](../Model/LoggingMessageType.md) |  | [optional]
**url** | **String** | The URL to post logs to. | [optional]

### Return type

[**LoggingSumologicResponse**](LoggingSumologicResponse.md)


## `deleteLogSumologic`

```javascript
deleteLogSumologic({ service_id, version_id, logging_sumologic_name })
```

Delete the Sumologic for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_sumologic_name: "logging_sumologic_name_example", // required
};

apiInstance.deleteLogSumologic(options)
  .then((data) => {
    console.log(data, "API called successfully.");
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
**logging_sumologic_name** | **String** |  |

### Return type

**Object**


## `getLogSumologic`

```javascript
getLogSumologic({ service_id, version_id, logging_sumologic_name })
```

Get the Sumologic for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_sumologic_name: "logging_sumologic_name_example", // required
};

apiInstance.getLogSumologic(options)
  .then((data) => {
    console.log(data, "API called successfully.");
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
**logging_sumologic_name** | **String** |  |

### Return type

[**LoggingSumologicResponse**](LoggingSumologicResponse.md)


## `listLogSumologic`

```javascript
listLogSumologic({ service_id, version_id })
```

List all of the Sumologics for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listLogSumologic(options)
  .then((data) => {
    console.log(data, "API called successfully.");
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

[**[LoggingSumologicResponse]**](LoggingSumologicResponse.md)


## `updateLogSumologic`

```javascript
updateLogSumologic({ service_id, version_id, logging_sumologic_name, [name, ][placement, ][format_version, ][response_condition, ][format, ][message_type, ][url] })
```

Update the Sumologic for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_sumologic_name: "logging_sumologic_name_example", // required
  name: "name_example",
  placement: "none",
  format_version: 1,
  response_condition: "response_condition_example",
  format: "'%h %l %u %t \"%r\" %&gt;s %b'",
  message_type: new Fastly.LoggingMessageType(),
  url: "url_example",
};

apiInstance.updateLogSumologic(options)
  .then((data) => {
    console.log(data, "API called successfully.");
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
**logging_sumologic_name** | **String** |  |
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.  | [optional] [one of: "none", "waf_debug"]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.   | [optional] [one of: 1, 2] [defaults to FormatVersionEnum.v2]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [defaults to '%h %l %u %t "%r" %&gt;s %b']
**message_type** | [**LoggingMessageType**](../Model/LoggingMessageType.md) |  | [optional]
**url** | **String** | The URL to post logs to. | [optional]

### Return type

[**LoggingSumologicResponse**](LoggingSumologicResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
