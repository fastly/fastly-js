# FastlyApi.LoggingLogentriesApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogLogentries**](LoggingLogentriesApi.md#createLogLogentries) | **POST** /service/{service_id}/version/{version_id}/logging/logentries | Create a Logentries log endpoint
[**deleteLogLogentries**](LoggingLogentriesApi.md#deleteLogLogentries) | **DELETE** /service/{service_id}/version/{version_id}/logging/logentries/{logging_logentries_name} | Delete a Logentries log endpoint
[**getLogLogentries**](LoggingLogentriesApi.md#getLogLogentries) | **GET** /service/{service_id}/version/{version_id}/logging/logentries/{logging_logentries_name} | Get a Logentries log endpoint
[**listLogLogentries**](LoggingLogentriesApi.md#listLogLogentries) | **GET** /service/{service_id}/version/{version_id}/logging/logentries | List Logentries log endpoints
[**updateLogLogentries**](LoggingLogentriesApi.md#updateLogLogentries) | **PUT** /service/{service_id}/version/{version_id}/logging/logentries/{logging_logentries_name} | Update a Logentries log endpoint



## `createLogLogentries`

> LoggingLogentriesResponse createLogLogentries(service_id, version_id, opts)

Create a Logentries log endpoint

Create a Logentry for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingLogentriesApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'port': 20000, // Number | The port number.
  'token': "token_example", // String | Use token based authentication ([https://logentries.com/doc/input-token/](https://logentries.com/doc/input-token/)).
  'use_tls': new FastlyApi.LoggingUseTls(), // LoggingUseTls | 
  'region': "region_example" // String | The region to which to stream logs.
};
apiInstance.createLogLogentries(service_id, version_id, opts).then((data) => {
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
**port** | **Number** | The port number. | [optional] [default to 20000]
**token** | **String** | Use token based authentication ([https://logentries.com/doc/input-token/](https://logentries.com/doc/input-token/)). | [optional]
**use_tls** | [**LoggingUseTls**](../Model/LoggingUseTls.md) |  | [optional]
**region** | **String** | The region to which to stream logs. | [optional]

### Return type

[**LoggingLogentriesResponse**](LoggingLogentriesResponse.md)


## `deleteLogLogentries`

> Object deleteLogLogentries(service_id, version_id, logging_logentries_name)

Delete a Logentries log endpoint

Delete the Logentry for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingLogentriesApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_logentries_name = "logging_logentries_name_example"; // String | 
apiInstance.deleteLogLogentries(service_id, version_id, logging_logentries_name).then((data) => {
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
**logging_logentries_name** | **String** |  |

### Return type

**Object**


## `getLogLogentries`

> LoggingLogentriesResponse getLogLogentries(service_id, version_id, logging_logentries_name)

Get a Logentries log endpoint

Get the Logentry for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingLogentriesApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_logentries_name = "logging_logentries_name_example"; // String | 
apiInstance.getLogLogentries(service_id, version_id, logging_logentries_name).then((data) => {
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
**logging_logentries_name** | **String** |  |

### Return type

[**LoggingLogentriesResponse**](LoggingLogentriesResponse.md)


## `listLogLogentries`

> [LoggingLogentriesResponse] listLogLogentries(service_id, version_id)

List Logentries log endpoints

List all of the Logentries for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingLogentriesApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogLogentries(service_id, version_id).then((data) => {
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

[**[LoggingLogentriesResponse]**](LoggingLogentriesResponse.md)


## `updateLogLogentries`

> LoggingLogentriesResponse updateLogLogentries(service_id, version_id, logging_logentries_name, opts)

Update a Logentries log endpoint

Update the Logentry for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingLogentriesApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_logentries_name = "logging_logentries_name_example"; // String | 
let opts = {
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'port': 20000, // Number | The port number.
  'token': "token_example", // String | Use token based authentication ([https://logentries.com/doc/input-token/](https://logentries.com/doc/input-token/)).
  'use_tls': new FastlyApi.LoggingUseTls(), // LoggingUseTls | 
  'region': "region_example" // String | The region to which to stream logs.
};
apiInstance.updateLogLogentries(service_id, version_id, logging_logentries_name, opts).then((data) => {
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
**logging_logentries_name** | **String** |  |
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**port** | **Number** | The port number. | [optional] [default to 20000]
**token** | **String** | Use token based authentication ([https://logentries.com/doc/input-token/](https://logentries.com/doc/input-token/)). | [optional]
**use_tls** | [**LoggingUseTls**](../Model/LoggingUseTls.md) |  | [optional]
**region** | **String** | The region to which to stream logs. | [optional]

### Return type

[**LoggingLogentriesResponse**](LoggingLogentriesResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
