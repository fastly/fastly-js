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
createLogNewrelic({ service_id, version_id, [format, ][format_version, ][name, ][placement, ][response_condition, ][region, ][token] })
```

Create a New Relic Logs logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  format: null,
  format_version: FormatVersionEnum.v2,
  name: "name_example",
  placement: ,
  response_condition: "response_condition_example",
  region: 'US',
  token: "token_example",
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
**format** | [**Object**](../Model/Object.md) | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that New Relic Logs can ingest. | [optional]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in &#x60;vcl_log&#x60; if &#x60;format_version&#x60; is set to &#x60;2&#x60; and in &#x60;vcl_deliver&#x60; if &#x60;format_version&#x60; is set to &#x60;1&#x60;.   | [optional] [default to FormatVersionEnum.v2]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with &#x60;format_version&#x60; of 2 are placed in &#x60;vcl_log&#x60; and those with &#x60;format_version&#x60; of 1 are placed in &#x60;vcl_deliver&#x60;.  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**region** | **String** | The region to which to stream logs. | [optional] [default to &#39;US&#39;]
**token** | **String** | The Insert API key from the Account page of your New Relic account. Required. | [optional]

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
updateLogNewrelic({ service_id, version_id, logging_newrelic_name, [format, ][format_version, ][name, ][placement, ][response_condition, ][region, ][token] })
```

Update a New Relic Logs logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_newrelic_name: "logging_newrelic_name_example", // required
  format: null,
  format_version: FormatVersionEnum.v2,
  name: "name_example",
  placement: ,
  response_condition: "response_condition_example",
  region: 'US',
  token: "token_example",
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
**format** | [**Object**](../Model/Object.md) | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that New Relic Logs can ingest. | [optional]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in &#x60;vcl_log&#x60; if &#x60;format_version&#x60; is set to &#x60;2&#x60; and in &#x60;vcl_deliver&#x60; if &#x60;format_version&#x60; is set to &#x60;1&#x60;.   | [optional] [default to FormatVersionEnum.v2]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with &#x60;format_version&#x60; of 2 are placed in &#x60;vcl_log&#x60; and those with &#x60;format_version&#x60; of 1 are placed in &#x60;vcl_deliver&#x60;.  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**region** | **String** | The region to which to stream logs. | [optional] [default to &#39;US&#39;]
**token** | **String** | The Insert API key from the Account page of your New Relic account. Required. | [optional]

### Return type

[**LoggingNewrelicResponse**](LoggingNewrelicResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
