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
createLogHoneycomb({ service_id, version_id, [name, ][placement, ][format_version, ][response_condition, ][format, ][dataset, ][token] })
```

Create a Honeycomb logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  name: "name_example",
  placement: "none",
  format_version: 1,
  response_condition: "response_condition_example",
  format: null,
  dataset: "dataset_example",
  token: "token_example",
};

apiInstance.createLogHoneycomb(options)
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
**format** | [**Object**](../Model/Object.md) | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest. | [optional]
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
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_honeycomb_name: "logging_honeycomb_name_example", // required
};

apiInstance.deleteLogHoneycomb(options)
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
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_honeycomb_name: "logging_honeycomb_name_example", // required
};

apiInstance.getLogHoneycomb(options)
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
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listLogHoneycomb(options)
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

[**[LoggingHoneycombResponse]**](LoggingHoneycombResponse.md)


## `updateLogHoneycomb`

```javascript
updateLogHoneycomb({ service_id, version_id, logging_honeycomb_name, [name, ][placement, ][format_version, ][response_condition, ][format, ][dataset, ][token] })
```

Update a Honeycomb logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_honeycomb_name: "logging_honeycomb_name_example", // required
  name: "name_example",
  placement: "none",
  format_version: 1,
  response_condition: "response_condition_example",
  format: null,
  dataset: "dataset_example",
  token: "token_example",
};

apiInstance.updateLogHoneycomb(options)
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
**logging_honeycomb_name** | **String** |  |
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.  | [optional] [one of: "none", "waf_debug"]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.   | [optional] [one of: 1, 2] [defaults to FormatVersionEnum.v2]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | [**Object**](../Model/Object.md) | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest. | [optional]
**dataset** | **String** | The Honeycomb Dataset you want to log to. | [optional]
**token** | **String** | The Write Key from the Account page of your Honeycomb account. | [optional]

### Return type

[**LoggingHoneycombResponse**](LoggingHoneycombResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
