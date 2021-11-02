# Fastly.LoggingNewrelicApi


```javascript
const apiInstance = new Fastly.LoggingNewrelicApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogNewrelic**](LoggingNewrelicApi.md#createLogNewrelic) | **POST** /service/{service_id}/version/{version_id}/logging/newrelic | Create a New Relic log endpoint
[**deleteLogNewrelic**](LoggingNewrelicApi.md#deleteLogNewrelic) | **DELETE** /service/{service_id}/version/{version_id}/logging/newrelic/{logging_newrelic_name} | Delete a New Relic log endpoint
[**getLogNewrelic**](LoggingNewrelicApi.md#getLogNewrelic) | **GET** /service/{service_id}/version/{version_id}/logging/newrelic/{logging_newrelic_name} | Get a New Relic log endpoint
[**listLogNewrelic**](LoggingNewrelicApi.md#listLogNewrelic) | **GET** /service/{service_id}/version/{version_id}/logging/newrelic | List New Relic log endpoints
[**updateLogNewrelic**](LoggingNewrelicApi.md#updateLogNewrelic) | **PUT** /service/{service_id}/version/{version_id}/logging/newrelic/{logging_newrelic_name} | Update a New Relic log endpoint



## `createLogNewrelic`

```javascript
createLogNewrelic({ service_id, version_id, [name, ][placement, ][format_version, ][response_condition, ][format, ][token, ][region] })
```

Create a New Relic Logs logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  name: "name_example",
  placement: new Fastly.LoggingPlacement(),
  format_version: new Fastly.LoggingFormatVersion(),
  response_condition: "response_condition_example",
  format: null,
  token: "token_example",
  region: 'US',
};

apiInstance.createLogNewrelic(options)
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
**format** | [**Object**](../Model/Object.md) | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that New Relic Logs can ingest. | [optional]
**token** | **String** | The Insert API key from the Account page of your New Relic account. Required. | [optional]
**region** | **String** | The region to which to stream logs. | [optional] [default to &#39;US&#39;]

### Return type

[**LoggingNewrelicResponse**](LoggingNewrelicResponse.md)


## `deleteLogNewrelic`

```javascript
deleteLogNewrelic({ service_id, version_id, logging_newrelic_name })
```

Delete the New Relic Logs logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_newrelic_name: "logging_newrelic_name_example", // required
};

apiInstance.deleteLogNewrelic(options)
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
**logging_newrelic_name** | **String** |  |

### Return type

**Object**


## `getLogNewrelic`

```javascript
getLogNewrelic({ service_id, version_id, logging_newrelic_name })
```

Get the details of a New Relic Logs logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_newrelic_name: "logging_newrelic_name_example", // required
};

apiInstance.getLogNewrelic(options)
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
**logging_newrelic_name** | **String** |  |

### Return type

[**LoggingNewrelicResponse**](LoggingNewrelicResponse.md)


## `listLogNewrelic`

```javascript
listLogNewrelic({ service_id, version_id })
```

List all of the New Relic Logs logging objects for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listLogNewrelic(options)
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

[**[LoggingNewrelicResponse]**](LoggingNewrelicResponse.md)


## `updateLogNewrelic`

```javascript
updateLogNewrelic({ service_id, version_id, logging_newrelic_name, [name, ][placement, ][format_version, ][response_condition, ][format, ][token, ][region] })
```

Update a New Relic Logs logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_newrelic_name: "logging_newrelic_name_example", // required
  name: "name_example",
  placement: new Fastly.LoggingPlacement(),
  format_version: new Fastly.LoggingFormatVersion(),
  response_condition: "response_condition_example",
  format: null,
  token: "token_example",
  region: 'US',
};

apiInstance.updateLogNewrelic(options)
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
**logging_newrelic_name** | **String** |  |
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | [**Object**](../Model/Object.md) | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that New Relic Logs can ingest. | [optional]
**token** | **String** | The Insert API key from the Account page of your New Relic account. Required. | [optional]
**region** | **String** | The region to which to stream logs. | [optional] [default to &#39;US&#39;]

### Return type

[**LoggingNewrelicResponse**](LoggingNewrelicResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
