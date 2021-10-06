# Fastly.LoggingHerokuApi


```javascript
const apiInstance = new Fastly.LoggingHerokuApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogHeroku**](LoggingHerokuApi.md#createLogHeroku) | **POST** /service/{service_id}/version/{version_id}/logging/heroku | Create a Heroku log endpoint
[**deleteLogHeroku**](LoggingHerokuApi.md#deleteLogHeroku) | **DELETE** /service/{service_id}/version/{version_id}/logging/heroku/{logging_heroku_name} | Delete the Heroku log endpoint
[**getLogHeroku**](LoggingHerokuApi.md#getLogHeroku) | **GET** /service/{service_id}/version/{version_id}/logging/heroku/{logging_heroku_name} | Get a Heroku log endpoint
[**listLogHeroku**](LoggingHerokuApi.md#listLogHeroku) | **GET** /service/{service_id}/version/{version_id}/logging/heroku | List Heroku log endpoints
[**updateLogHeroku**](LoggingHerokuApi.md#updateLogHeroku) | **PUT** /service/{service_id}/version/{version_id}/logging/heroku/{logging_heroku_name} | Update the Heroku log endpoint



## `createLogHeroku`

```javascript
createLogHeroku({ service_id, version_id, [format, ], [format_version, ], [name, ], [placement, ], [response_condition] })
```

Create a Heroku for a particular service and version.

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
};

apiInstance.createLogHeroku(options)
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

### Return type

[**ServiceIdAndVersion**](ServiceIdAndVersion.md)


## `deleteLogHeroku`

```javascript
deleteLogHeroku({ service_id, version_id, logging_heroku_name })
```

Delete the Heroku for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_heroku_name: "logging_heroku_name_example", // required
};

apiInstance.deleteLogHeroku(options)
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
**logging_heroku_name** | **String** |  |

### Return type

**Object**


## `getLogHeroku`

```javascript
getLogHeroku({ service_id, version_id, logging_heroku_name })
```

Get the Heroku for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_heroku_name: "logging_heroku_name_example", // required
};

apiInstance.getLogHeroku(options)
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
**logging_heroku_name** | **String** |  |

### Return type

[**ServiceIdAndVersion**](ServiceIdAndVersion.md)


## `listLogHeroku`

```javascript
listLogHeroku({ service_id, version_id })
```

List all of the Herokus for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listLogHeroku(options)
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

[**[ServiceIdAndVersion]**](ServiceIdAndVersion.md)


## `updateLogHeroku`

```javascript
updateLogHeroku({ service_id, version_id, logging_heroku_name, [format, ], [format_version, ], [name, ], [placement, ], [response_condition] })
```

Update the Heroku for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_heroku_name: "logging_heroku_name_example", // required
  format: "'%h %l %u %t \"%r\" %&gt;s %b'",
  format_version: new Fastly.LoggingFormatVersion(),
  name: "name_example",
  placement: new Fastly.LoggingPlacement(),
  response_condition: "response_condition_example",
};

apiInstance.updateLogHeroku(options)
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
**logging_heroku_name** | **String** |  |
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]

### Return type

[**ServiceIdAndVersion**](ServiceIdAndVersion.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
