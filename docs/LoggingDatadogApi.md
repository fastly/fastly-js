# Fastly.LoggingDatadogApi


```javascript
const apiInstance = new Fastly.LoggingDatadogApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogDatadog**](LoggingDatadogApi.md#createLogDatadog) | **POST** /service/{service_id}/version/{version_id}/logging/datadog | Create a Datadog log endpoint
[**deleteLogDatadog**](LoggingDatadogApi.md#deleteLogDatadog) | **DELETE** /service/{service_id}/version/{version_id}/logging/datadog/{logging_datadog_name} | Delete a Datadog log endpoint
[**getLogDatadog**](LoggingDatadogApi.md#getLogDatadog) | **GET** /service/{service_id}/version/{version_id}/logging/datadog/{logging_datadog_name} | Get a Datadog log endpoint
[**listLogDatadog**](LoggingDatadogApi.md#listLogDatadog) | **GET** /service/{service_id}/version/{version_id}/logging/datadog | List Datadog log endpoints
[**updateLogDatadog**](LoggingDatadogApi.md#updateLogDatadog) | **PUT** /service/{service_id}/version/{version_id}/logging/datadog/{logging_datadog_name} | Update a Datadog log endpoint



## `createLogDatadog`

```javascript
createLogDatadog({ service_id, version_id, [format], , [format_version], , [name], , [placement], , [response_condition], , [region], , [token] })
```

Create a Datadog logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required
  format: null,

  format_version: new Fastly.LoggingFormatVersion(),

  name: "name_example",

  placement: new Fastly.LoggingPlacement(),

  response_condition: "response_condition_example",

  region: "'US'",

  token: "token_example",
};

apiInstance.createLogDatadog(options)
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
**format** | [**Object**](../Model/Object.md) | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Datadog can ingest.  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**region** | **String** | The region that log data will be sent to. | [optional] [default to &#39;US&#39;]
**token** | **String** | The API key from your Datadog account. Required. | [optional]

### Return type

[**LoggingDatadogResponse**](LoggingDatadogResponse.md)


## `deleteLogDatadog`

```javascript
deleteLogDatadog({ service_id, version_id, logging_datadog_name })
```

Delete the Datadog logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required  logging_datadog_name: "logging_datadog_name_example", // required};

apiInstance.deleteLogDatadog(options)
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
**logging_datadog_name** | **String** |  |

### Return type

**Object**


## `getLogDatadog`

```javascript
getLogDatadog({ service_id, version_id, logging_datadog_name })
```

Get the details for a Datadog logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required  logging_datadog_name: "logging_datadog_name_example", // required};

apiInstance.getLogDatadog(options)
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
**logging_datadog_name** | **String** |  |

### Return type

[**LoggingDatadogResponse**](LoggingDatadogResponse.md)


## `listLogDatadog`

```javascript
listLogDatadog({ service_id, version_id })
```

List all of the Datadog logging objects for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required};

apiInstance.listLogDatadog(options)
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

[**[LoggingDatadogResponse]**](LoggingDatadogResponse.md)


## `updateLogDatadog`

```javascript
updateLogDatadog({ service_id, version_id, logging_datadog_name, [format], , [format_version], , [name], , [placement], , [response_condition], , [region], , [token] })
```

Update the Datadog logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required  logging_datadog_name: "logging_datadog_name_example", // required
  format: null,

  format_version: new Fastly.LoggingFormatVersion(),

  name: "name_example",

  placement: new Fastly.LoggingPlacement(),

  response_condition: "response_condition_example",

  region: "'US'",

  token: "token_example",
};

apiInstance.updateLogDatadog(options)
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
**logging_datadog_name** | **String** |  |
**format** | [**Object**](../Model/Object.md) | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Datadog can ingest.  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**region** | **String** | The region that log data will be sent to. | [optional] [default to &#39;US&#39;]
**token** | **String** | The API key from your Datadog account. Required. | [optional]

### Return type

[**LoggingDatadogResponse**](LoggingDatadogResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
