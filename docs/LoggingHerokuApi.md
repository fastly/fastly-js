# FastlyApi.LoggingHerokuApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogHeroku**](LoggingHerokuApi.md#createLogHeroku) | **POST** /service/{service_id}/version/{version_id}/logging/heroku | Create a Heroku log endpoint
[**deleteLogHeroku**](LoggingHerokuApi.md#deleteLogHeroku) | **DELETE** /service/{service_id}/version/{version_id}/logging/heroku/{logging_heroku_name} | Delete the Heroku log endpoint
[**getLogHeroku**](LoggingHerokuApi.md#getLogHeroku) | **GET** /service/{service_id}/version/{version_id}/logging/heroku/{logging_heroku_name} | Get a Heroku log endpoint
[**listLogHeroku**](LoggingHerokuApi.md#listLogHeroku) | **GET** /service/{service_id}/version/{version_id}/logging/heroku | List Heroku log endpoints
[**updateLogHeroku**](LoggingHerokuApi.md#updateLogHeroku) | **PUT** /service/{service_id}/version/{version_id}/logging/heroku/{logging_heroku_name} | Update the Heroku log endpoint



## `createLogHeroku`

> LoggingHerokuResponse createLogHeroku(service_id, version_id, opts)

Create a Heroku log endpoint

Create a Heroku for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingHerokuApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'token': "token_example", // String | The token to use for authentication ([https://devcenter.heroku.com/articles/add-on-partner-log-integration](https://devcenter.heroku.com/articles/add-on-partner-log-integration)).
  'url': "url_example" // String | The URL to stream logs to.
};
apiInstance.createLogHeroku(service_id, version_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**token** | **String** | The token to use for authentication ([https://devcenter.heroku.com/articles/add-on-partner-log-integration](https://devcenter.heroku.com/articles/add-on-partner-log-integration)). | [optional]
**url** | **String** | The URL to stream logs to. | [optional]

### Return type

[**LoggingHerokuResponse**](LoggingHerokuResponse.md)


## `deleteLogHeroku`

> Object deleteLogHeroku(service_id, version_id, logging_heroku_name)

Delete the Heroku log endpoint

Delete the Heroku for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingHerokuApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_heroku_name = "logging_heroku_name_example"; // String | 
apiInstance.deleteLogHeroku(service_id, version_id, logging_heroku_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**logging_heroku_name** | **String** |  |

### Return type

**Object**


## `getLogHeroku`

> LoggingHerokuResponse getLogHeroku(service_id, version_id, logging_heroku_name)

Get a Heroku log endpoint

Get the Heroku for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingHerokuApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_heroku_name = "logging_heroku_name_example"; // String | 
apiInstance.getLogHeroku(service_id, version_id, logging_heroku_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**logging_heroku_name** | **String** |  |

### Return type

[**LoggingHerokuResponse**](LoggingHerokuResponse.md)


## `listLogHeroku`

> [LoggingHerokuResponse] listLogHeroku(service_id, version_id)

List Heroku log endpoints

List all of the Herokus for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingHerokuApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogHeroku(service_id, version_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

[**[LoggingHerokuResponse]**](LoggingHerokuResponse.md)


## `updateLogHeroku`

> LoggingHerokuResponse updateLogHeroku(service_id, version_id, logging_heroku_name, opts)

Update the Heroku log endpoint

Update the Heroku for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingHerokuApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_heroku_name = "logging_heroku_name_example"; // String | 
let opts = {
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'token': "token_example", // String | The token to use for authentication ([https://devcenter.heroku.com/articles/add-on-partner-log-integration](https://devcenter.heroku.com/articles/add-on-partner-log-integration)).
  'url': "url_example" // String | The URL to stream logs to.
};
apiInstance.updateLogHeroku(service_id, version_id, logging_heroku_name, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**logging_heroku_name** | **String** |  |
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**token** | **String** | The token to use for authentication ([https://devcenter.heroku.com/articles/add-on-partner-log-integration](https://devcenter.heroku.com/articles/add-on-partner-log-integration)). | [optional]
**url** | **String** | The URL to stream logs to. | [optional]

### Return type

[**LoggingHerokuResponse**](LoggingHerokuResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
