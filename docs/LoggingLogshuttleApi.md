# Fastly.LoggingLogshuttleApi


```javascript
const apiInstance = new Fastly.LoggingLogshuttleApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogLogshuttle**](LoggingLogshuttleApi.md#createLogLogshuttle) | **POST** /service/{service_id}/version/{version_id}/logging/logshuttle | Create a Log Shuttle log endpoint
[**deleteLogLogshuttle**](LoggingLogshuttleApi.md#deleteLogLogshuttle) | **DELETE** /service/{service_id}/version/{version_id}/logging/logshuttle/{logging_logshuttle_name} | Delete a Log Shuttle log endpoint
[**getLogLogshuttle**](LoggingLogshuttleApi.md#getLogLogshuttle) | **GET** /service/{service_id}/version/{version_id}/logging/logshuttle/{logging_logshuttle_name} | Get a Log Shuttle log endpoint
[**listLogLogshuttle**](LoggingLogshuttleApi.md#listLogLogshuttle) | **GET** /service/{service_id}/version/{version_id}/logging/logshuttle | List Log Shuttle log endpoints
[**updateLogLogshuttle**](LoggingLogshuttleApi.md#updateLogLogshuttle) | **PUT** /service/{service_id}/version/{version_id}/logging/logshuttle/{logging_logshuttle_name} | Update a Log Shuttle log endpoint



## `createLogLogshuttle`

```javascript
createLogLogshuttle({ service_id, version_id, [name, ][placement, ][format_version, ][response_condition, ][format, ][token, ][url] })
```

Create a Log Shuttle logging endpoint for a particular service and version.

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
  token: "token_example",
  url: "url_example",
};

apiInstance.createLogLogshuttle(options)
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
**token** | **String** | The data authentication token associated with this endpoint. | [optional]
**url** | **String** | The URL to stream logs to. | [optional]

### Return type

[**LoggingLogshuttleResponse**](LoggingLogshuttleResponse.md)


## `deleteLogLogshuttle`

```javascript
deleteLogLogshuttle({ service_id, version_id, logging_logshuttle_name })
```

Delete the Log Shuttle logging endpoint for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_logshuttle_name: "logging_logshuttle_name_example", // required
};

apiInstance.deleteLogLogshuttle(options)
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
**logging_logshuttle_name** | **String** |  |

### Return type

**Object**


## `getLogLogshuttle`

```javascript
getLogLogshuttle({ service_id, version_id, logging_logshuttle_name })
```

Get the Log Shuttle logging endpoint for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_logshuttle_name: "logging_logshuttle_name_example", // required
};

apiInstance.getLogLogshuttle(options)
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
**logging_logshuttle_name** | **String** |  |

### Return type

[**LoggingLogshuttleResponse**](LoggingLogshuttleResponse.md)


## `listLogLogshuttle`

```javascript
listLogLogshuttle({ service_id, version_id })
```

List all of the Log Shuttle logging endpoints for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listLogLogshuttle(options)
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

[**[LoggingLogshuttleResponse]**](LoggingLogshuttleResponse.md)


## `updateLogLogshuttle`

```javascript
updateLogLogshuttle({ service_id, version_id, logging_logshuttle_name, [name, ][placement, ][format_version, ][response_condition, ][format, ][token, ][url] })
```

Update the Log Shuttle logging endpoint for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_logshuttle_name: "logging_logshuttle_name_example", // required
  name: "name_example",
  placement: new Fastly.LoggingPlacement(),
  format_version: new Fastly.LoggingFormatVersion(),
  response_condition: "response_condition_example",
  format: '%h %l %u %t "%r" %&gt;s %b',
  token: "token_example",
  url: "url_example",
};

apiInstance.updateLogLogshuttle(options)
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
**logging_logshuttle_name** | **String** |  |
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**token** | **String** | The data authentication token associated with this endpoint. | [optional]
**url** | **String** | The URL to stream logs to. | [optional]

### Return type

[**LoggingLogshuttleResponse**](LoggingLogshuttleResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
