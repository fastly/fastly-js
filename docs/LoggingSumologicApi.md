# FastlyApi.LoggingSumologicApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogSumologic**](LoggingSumologicApi.md#createLogSumologic) | **POST** /service/{service_id}/version/{version_id}/logging/sumologic | Create a Sumologic log endpoint
[**deleteLogSumologic**](LoggingSumologicApi.md#deleteLogSumologic) | **DELETE** /service/{service_id}/version/{version_id}/logging/sumologic/{logging_sumologic_name} | Delete a Sumologic log endpoint
[**getLogSumologic**](LoggingSumologicApi.md#getLogSumologic) | **GET** /service/{service_id}/version/{version_id}/logging/sumologic/{logging_sumologic_name} | Get a Sumologic log endpoint
[**listLogSumologic**](LoggingSumologicApi.md#listLogSumologic) | **GET** /service/{service_id}/version/{version_id}/logging/sumologic | List Sumologic log endpoints
[**updateLogSumologic**](LoggingSumologicApi.md#updateLogSumologic) | **PUT** /service/{service_id}/version/{version_id}/logging/sumologic/{logging_sumologic_name} | Update a Sumologic log endpoint



## `createLogSumologic`

> LoggingSumologicResponse createLogSumologic(service_id, version_id, opts)

Create a Sumologic log endpoint

Create a Sumologic for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingSumologicApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'message_type': new FastlyApi.LoggingMessageType(), // LoggingMessageType | 
  'url': "url_example" // String | The URL to post logs to.
};
apiInstance.createLogSumologic(service_id, version_id, opts).then((data) => {
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
**message_type** | [**LoggingMessageType**](../Model/LoggingMessageType.md) |  | [optional]
**url** | **String** | The URL to post logs to. | [optional]

### Return type

[**LoggingSumologicResponse**](LoggingSumologicResponse.md)


## `deleteLogSumologic`

> Object deleteLogSumologic(service_id, version_id, logging_sumologic_name)

Delete a Sumologic log endpoint

Delete the Sumologic for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingSumologicApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_sumologic_name = "logging_sumologic_name_example"; // String | 
apiInstance.deleteLogSumologic(service_id, version_id, logging_sumologic_name).then((data) => {
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
**logging_sumologic_name** | **String** |  |

### Return type

**Object**


## `getLogSumologic`

> LoggingSumologicResponse getLogSumologic(service_id, version_id, logging_sumologic_name)

Get a Sumologic log endpoint

Get the Sumologic for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingSumologicApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_sumologic_name = "logging_sumologic_name_example"; // String | 
apiInstance.getLogSumologic(service_id, version_id, logging_sumologic_name).then((data) => {
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
**logging_sumologic_name** | **String** |  |

### Return type

[**LoggingSumologicResponse**](LoggingSumologicResponse.md)


## `listLogSumologic`

> [LoggingSumologicResponse] listLogSumologic(service_id, version_id)

List Sumologic log endpoints

List all of the Sumologics for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingSumologicApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogSumologic(service_id, version_id).then((data) => {
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

[**[LoggingSumologicResponse]**](LoggingSumologicResponse.md)


## `updateLogSumologic`

> LoggingSumologicResponse updateLogSumologic(service_id, version_id, logging_sumologic_name, opts)

Update a Sumologic log endpoint

Update the Sumologic for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingSumologicApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_sumologic_name = "logging_sumologic_name_example"; // String | 
let opts = {
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'message_type': new FastlyApi.LoggingMessageType(), // LoggingMessageType | 
  'url': "url_example" // String | The URL to post logs to.
};
apiInstance.updateLogSumologic(service_id, version_id, logging_sumologic_name, opts).then((data) => {
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
**logging_sumologic_name** | **String** |  |
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**message_type** | [**LoggingMessageType**](../Model/LoggingMessageType.md) |  | [optional]
**url** | **String** | The URL to post logs to. | [optional]

### Return type

[**LoggingSumologicResponse**](LoggingSumologicResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
