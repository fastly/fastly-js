# FastlyApi.LoggingScalyrApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogScalyr**](LoggingScalyrApi.md#createLogScalyr) | **POST** /service/{service_id}/version/{version_id}/logging/scalyr | Create a Scalyr log endpoint
[**deleteLogScalyr**](LoggingScalyrApi.md#deleteLogScalyr) | **DELETE** /service/{service_id}/version/{version_id}/logging/scalyr/{logging_scalyr_name} | Delete the Scalyr log endpoint
[**getLogScalyr**](LoggingScalyrApi.md#getLogScalyr) | **GET** /service/{service_id}/version/{version_id}/logging/scalyr/{logging_scalyr_name} | Get a Scalyr log endpoint
[**listLogScalyr**](LoggingScalyrApi.md#listLogScalyr) | **GET** /service/{service_id}/version/{version_id}/logging/scalyr | List Scalyr log endpoints
[**updateLogScalyr**](LoggingScalyrApi.md#updateLogScalyr) | **PUT** /service/{service_id}/version/{version_id}/logging/scalyr/{logging_scalyr_name} | Update the Scalyr log endpoint



## `createLogScalyr`

> LoggingScalyrResponse createLogScalyr(service_id, version_id, opts)

Create a Scalyr log endpoint

Create a Scalyr for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingScalyrApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'region': "'US'", // String | The region that log data will be sent to.
  'token': "token_example", // String | The token to use for authentication ([https://www.scalyr.com/keys](https://www.scalyr.com/keys)).
  'project_id': "'logplex'" // String | The name of the logfile within Scalyr.
};
apiInstance.createLogScalyr(service_id, version_id, opts).then((data) => {
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
**region** | **String** | The region that log data will be sent to. | [optional] [default to &#39;US&#39;]
**token** | **String** | The token to use for authentication ([https://www.scalyr.com/keys](https://www.scalyr.com/keys)). | [optional]
**project_id** | **String** | The name of the logfile within Scalyr. | [optional] [default to &#39;logplex&#39;]

### Return type

[**LoggingScalyrResponse**](LoggingScalyrResponse.md)


## `deleteLogScalyr`

> Object deleteLogScalyr(service_id, version_id, logging_scalyr_name)

Delete the Scalyr log endpoint

Delete the Scalyr for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingScalyrApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_scalyr_name = "logging_scalyr_name_example"; // String | 
apiInstance.deleteLogScalyr(service_id, version_id, logging_scalyr_name).then((data) => {
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
**logging_scalyr_name** | **String** |  |

### Return type

**Object**


## `getLogScalyr`

> LoggingScalyrResponse getLogScalyr(service_id, version_id, logging_scalyr_name)

Get a Scalyr log endpoint

Get the Scalyr for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingScalyrApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_scalyr_name = "logging_scalyr_name_example"; // String | 
apiInstance.getLogScalyr(service_id, version_id, logging_scalyr_name).then((data) => {
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
**logging_scalyr_name** | **String** |  |

### Return type

[**LoggingScalyrResponse**](LoggingScalyrResponse.md)


## `listLogScalyr`

> [LoggingScalyrResponse] listLogScalyr(service_id, version_id)

List Scalyr log endpoints

List all of the Scalyrs for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingScalyrApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogScalyr(service_id, version_id).then((data) => {
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

[**[LoggingScalyrResponse]**](LoggingScalyrResponse.md)


## `updateLogScalyr`

> LoggingScalyrResponse updateLogScalyr(service_id, version_id, logging_scalyr_name, opts)

Update the Scalyr log endpoint

Update the Scalyr for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingScalyrApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_scalyr_name = "logging_scalyr_name_example"; // String | 
let opts = {
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'region': "'US'", // String | The region that log data will be sent to.
  'token': "token_example", // String | The token to use for authentication ([https://www.scalyr.com/keys](https://www.scalyr.com/keys)).
  'project_id': "'logplex'" // String | The name of the logfile within Scalyr.
};
apiInstance.updateLogScalyr(service_id, version_id, logging_scalyr_name, opts).then((data) => {
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
