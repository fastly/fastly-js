# Fastly.LoggingLogentriesApi


```javascript
const apiInstance = new Fastly.LoggingLogentriesApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogLogentries**](LoggingLogentriesApi.md#createLogLogentries) | **POST** /service/{service_id}/version/{version_id}/logging/logentries | Create a Logentries log endpoint
[**deleteLogLogentries**](LoggingLogentriesApi.md#deleteLogLogentries) | **DELETE** /service/{service_id}/version/{version_id}/logging/logentries/{logging_logentries_name} | Delete a Logentries log endpoint
[**getLogLogentries**](LoggingLogentriesApi.md#getLogLogentries) | **GET** /service/{service_id}/version/{version_id}/logging/logentries/{logging_logentries_name} | Get a Logentries log endpoint
[**listLogLogentries**](LoggingLogentriesApi.md#listLogLogentries) | **GET** /service/{service_id}/version/{version_id}/logging/logentries | List Logentries log endpoints
[**updateLogLogentries**](LoggingLogentriesApi.md#updateLogLogentries) | **PUT** /service/{service_id}/version/{version_id}/logging/logentries/{logging_logentries_name} | Update a Logentries log endpoint



## `createLogLogentries`

```javascript
createLogLogentries({ service_id, version_id, [name, ][placement, ][format_version, ][response_condition, ][format, ][port, ][token, ][use_tls, ][region] })
```

Create a Logentry for a particular service and version.

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
  port: 20000,
  token: "token_example",
  use_tls: new Fastly.LoggingUseTls(),
  region: ,
};

apiInstance.createLogLogentries(options)
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
**port** | **Number** | The port number. | [optional] [default to 20000]
**token** | **String** | Use token based authentication ([https://logentries.com/doc/input-token/](https://logentries.com/doc/input-token/)). | [optional]
**use_tls** | [**LoggingUseTls**](../Model/LoggingUseTls.md) |  | [optional]
**region** | **String** | The region to which to stream logs. | [optional]

### Return type

[**LoggingLogentriesResponse**](LoggingLogentriesResponse.md)


## `deleteLogLogentries`

```javascript
deleteLogLogentries({ service_id, version_id, logging_logentries_name })
```

Delete the Logentry for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_logentries_name: "logging_logentries_name_example", // required
};

apiInstance.deleteLogLogentries(options)
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
**logging_logentries_name** | **String** |  |

### Return type

**Object**


## `getLogLogentries`

```javascript
getLogLogentries({ service_id, version_id, logging_logentries_name })
```

Get the Logentry for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_logentries_name: "logging_logentries_name_example", // required
};

apiInstance.getLogLogentries(options)
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
**logging_logentries_name** | **String** |  |

### Return type

[**LoggingLogentriesResponse**](LoggingLogentriesResponse.md)


## `listLogLogentries`

```javascript
listLogLogentries({ service_id, version_id })
```

List all of the Logentries for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listLogLogentries(options)
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

[**[LoggingLogentriesResponse]**](LoggingLogentriesResponse.md)


## `updateLogLogentries`

```javascript
updateLogLogentries({ service_id, version_id, logging_logentries_name, [name, ][placement, ][format_version, ][response_condition, ][format, ][port, ][token, ][use_tls, ][region] })
```

Update the Logentry for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_logentries_name: "logging_logentries_name_example", // required
  name: "name_example",
  placement: new Fastly.LoggingPlacement(),
  format_version: new Fastly.LoggingFormatVersion(),
  response_condition: "response_condition_example",
  format: '%h %l %u %t "%r" %&gt;s %b',
  port: 20000,
  token: "token_example",
  use_tls: new Fastly.LoggingUseTls(),
  region: ,
};

apiInstance.updateLogLogentries(options)
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
**logging_logentries_name** | **String** |  |
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**port** | **Number** | The port number. | [optional] [default to 20000]
**token** | **String** | Use token based authentication ([https://logentries.com/doc/input-token/](https://logentries.com/doc/input-token/)). | [optional]
**use_tls** | [**LoggingUseTls**](../Model/LoggingUseTls.md) |  | [optional]
**region** | **String** | The region to which to stream logs. | [optional]

### Return type

[**LoggingLogentriesResponse**](LoggingLogentriesResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
