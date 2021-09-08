# Fastly.LoggingHoneycombApi


```javascript
const apiInstance = new Fastly.LoggingHoneycombApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogHoneycomb**](LoggingHoneycombApi.md#createLogHoneycomb) | **POST** /service/{service_id}/version/{version_id}/logging/honeycomb | Create a Honeycomb log endpoint
[**deleteLogHoneycomb**](LoggingHoneycombApi.md#deleteLogHoneycomb) | **DELETE** /service/{service_id}/version/{version_id}/logging/honeycomb/{logging_honeycomb_name} | Delete the Honeycomb log endpoint
[**getLogHoneycomb**](LoggingHoneycombApi.md#getLogHoneycomb) | **GET** /service/{service_id}/version/{version_id}/logging/honeycomb/{logging_honeycomb_name} | Get a Honeycomb log endpoint
[**listLogHoneycomb**](LoggingHoneycombApi.md#listLogHoneycomb) | **GET** /service/{service_id}/version/{version_id}/logging/honeycomb | List Honeycomb log endpoints
[**updateLogHoneycomb**](LoggingHoneycombApi.md#updateLogHoneycomb) | **PUT** /service/{service_id}/version/{version_id}/logging/honeycomb/{logging_honeycomb_name} | Update a Honeycomb log endpoint



## `createLogHoneycomb`

```javascript
createLogHoneycomb({ service_id, version_id, [format], , [format_version], , [name], , [placement], , [response_condition], , [dataset], , [token] })
```

Create a Honeycomb logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required
  format: null,

  format_version: new Fastly.LoggingFormatVersion(),

  name: "name_example",

  placement: new Fastly.LoggingPlacement(),

  response_condition: "response_condition_example",

  dataset: "dataset_example",

  token: "token_example",
};

apiInstance.createLogHoneycomb(options)
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
**format** | [**Object**](../Model/Object.md) | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest. | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**dataset** | **String** | The Honeycomb Dataset you want to log to. | [optional]
**token** | **String** | The Write Key from the Account page of your Honeycomb account. | [optional]

### Return type

[**LoggingHoneycomb**](LoggingHoneycomb.md)


## `deleteLogHoneycomb`

```javascript
deleteLogHoneycomb({ service_id, version_id, logging_honeycomb_name })
```

Delete the Honeycomb logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required  logging_honeycomb_name: "logging_honeycomb_name_example", // required};

apiInstance.deleteLogHoneycomb(options)
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
**logging_honeycomb_name** | **String** |  |

### Return type

**Object**


## `getLogHoneycomb`

```javascript
getLogHoneycomb({ service_id, version_id, logging_honeycomb_name })
```

Get the details of a Honeycomb logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required  logging_honeycomb_name: "logging_honeycomb_name_example", // required};

apiInstance.getLogHoneycomb(options)
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
**logging_honeycomb_name** | **String** |  |

### Return type

[**LoggingHoneycomb**](LoggingHoneycomb.md)


## `listLogHoneycomb`

```javascript
listLogHoneycomb({ service_id, version_id })
```

List all of the Honeycomb logging objects for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required};

apiInstance.listLogHoneycomb(options)
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

[**[LoggingHoneycombResponse]**](LoggingHoneycombResponse.md)


## `updateLogHoneycomb`

```javascript
updateLogHoneycomb({ service_id, version_id, logging_honeycomb_name, [format], , [format_version], , [name], , [placement], , [response_condition], , [dataset], , [token] })
```

Update a Honeycomb logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required  logging_honeycomb_name: "logging_honeycomb_name_example", // required
  format: null,

  format_version: new Fastly.LoggingFormatVersion(),

  name: "name_example",

  placement: new Fastly.LoggingPlacement(),

  response_condition: "response_condition_example",

  dataset: "dataset_example",

  token: "token_example",
};

apiInstance.updateLogHoneycomb(options)
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
**logging_honeycomb_name** | **String** |  |
**format** | [**Object**](../Model/Object.md) | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest. | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**dataset** | **String** | The Honeycomb Dataset you want to log to. | [optional]
**token** | **String** | The Write Key from the Account page of your Honeycomb account. | [optional]

### Return type

[**LoggingHoneycombResponse**](LoggingHoneycombResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
