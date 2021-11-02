# Fastly.LoggingScalyrApi


```javascript
const apiInstance = new Fastly.LoggingScalyrApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogScalyr**](LoggingScalyrApi.md#createLogScalyr) | **POST** /service/{service_id}/version/{version_id}/logging/scalyr | Create a Scalyr log endpoint
[**deleteLogScalyr**](LoggingScalyrApi.md#deleteLogScalyr) | **DELETE** /service/{service_id}/version/{version_id}/logging/scalyr/{logging_scalyr_name} | Delete the Scalyr log endpoint
[**getLogScalyr**](LoggingScalyrApi.md#getLogScalyr) | **GET** /service/{service_id}/version/{version_id}/logging/scalyr/{logging_scalyr_name} | Get a Scalyr log endpoint
[**listLogScalyr**](LoggingScalyrApi.md#listLogScalyr) | **GET** /service/{service_id}/version/{version_id}/logging/scalyr | List Scalyr log endpoints
[**updateLogScalyr**](LoggingScalyrApi.md#updateLogScalyr) | **PUT** /service/{service_id}/version/{version_id}/logging/scalyr/{logging_scalyr_name} | Update the Scalyr log endpoint



## `createLogScalyr`

```javascript
createLogScalyr({ service_id, version_id, [name, ][placement, ][format_version, ][response_condition, ][format, ][region, ][token, ][project_id] })
```

Create a Scalyr for a particular service and version.

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
  region: 'US',
  token: "token_example",
  project_id: 'logplex',
};

apiInstance.createLogScalyr(options)
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
**region** | **String** | The region that log data will be sent to. | [optional] [default to &#39;US&#39;]
**token** | **String** | The token to use for authentication ([https://www.scalyr.com/keys](https://www.scalyr.com/keys)). | [optional]
**project_id** | **String** | The name of the logfile within Scalyr. | [optional] [default to &#39;logplex&#39;]

### Return type

[**LoggingScalyrResponse**](LoggingScalyrResponse.md)


## `deleteLogScalyr`

```javascript
deleteLogScalyr({ service_id, version_id, logging_scalyr_name })
```

Delete the Scalyr for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_scalyr_name: "logging_scalyr_name_example", // required
};

apiInstance.deleteLogScalyr(options)
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
**logging_scalyr_name** | **String** |  |

### Return type

**Object**


## `getLogScalyr`

```javascript
getLogScalyr({ service_id, version_id, logging_scalyr_name })
```

Get the Scalyr for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_scalyr_name: "logging_scalyr_name_example", // required
};

apiInstance.getLogScalyr(options)
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
**logging_scalyr_name** | **String** |  |

### Return type

[**LoggingScalyrResponse**](LoggingScalyrResponse.md)


## `listLogScalyr`

```javascript
listLogScalyr({ service_id, version_id })
```

List all of the Scalyrs for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listLogScalyr(options)
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

[**[LoggingScalyrResponse]**](LoggingScalyrResponse.md)


## `updateLogScalyr`

```javascript
updateLogScalyr({ service_id, version_id, logging_scalyr_name, [name, ][placement, ][format_version, ][response_condition, ][format, ][region, ][token, ][project_id] })
```

Update the Scalyr for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_scalyr_name: "logging_scalyr_name_example", // required
  name: "name_example",
  placement: new Fastly.LoggingPlacement(),
  format_version: new Fastly.LoggingFormatVersion(),
  response_condition: "response_condition_example",
  format: '%h %l %u %t "%r" %&gt;s %b',
  region: 'US',
  token: "token_example",
  project_id: 'logplex',
};

apiInstance.updateLogScalyr(options)
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
**logging_scalyr_name** | **String** |  |
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**region** | **String** | The region that log data will be sent to. | [optional] [default to &#39;US&#39;]
**token** | **String** | The token to use for authentication ([https://www.scalyr.com/keys](https://www.scalyr.com/keys)). | [optional]
**project_id** | **String** | The name of the logfile within Scalyr. | [optional] [default to &#39;logplex&#39;]

### Return type

[**LoggingScalyrResponse**](LoggingScalyrResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
