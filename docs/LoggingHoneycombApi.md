# FastlyApi.LoggingHoneycombApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogHoneycomb**](LoggingHoneycombApi.md#createLogHoneycomb) | **POST** /service/{service_id}/version/{version_id}/logging/honeycomb | Create a Honeycomb log endpoint
[**deleteLogHoneycomb**](LoggingHoneycombApi.md#deleteLogHoneycomb) | **DELETE** /service/{service_id}/version/{version_id}/logging/honeycomb/{logging_honeycomb_name} | Delete the Honeycomb log endpoint
[**getLogHoneycomb**](LoggingHoneycombApi.md#getLogHoneycomb) | **GET** /service/{service_id}/version/{version_id}/logging/honeycomb/{logging_honeycomb_name} | Get a Honeycomb log endpoint
[**listLogHoneycomb**](LoggingHoneycombApi.md#listLogHoneycomb) | **GET** /service/{service_id}/version/{version_id}/logging/honeycomb | List Honeycomb log endpoints
[**updateLogHoneycomb**](LoggingHoneycombApi.md#updateLogHoneycomb) | **PUT** /service/{service_id}/version/{version_id}/logging/honeycomb/{logging_honeycomb_name} | Update a Honeycomb log endpoint



## `createLogHoneycomb`

> createLogHoneycomb(service_id, version_id, opts)

Create a Honeycomb log endpoint

Create a Honeycomb logging object for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingHoneycombApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': null, // Object | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest.
  'dataset': "dataset_example", // String | The Honeycomb Dataset you want to log to.
  'token': "token_example" // String | The Write Key from the Account page of your Honeycomb account.
};
apiInstance.createLogHoneycomb(service_id, version_id, opts).then((data) => {
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
**format** | [**Object**](../Model/Object.md) | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest. | [optional]
**dataset** | **String** | The Honeycomb Dataset you want to log to. | [optional]
**token** | **String** | The Write Key from the Account page of your Honeycomb account. | [optional]

### Return type

[**LoggingHoneycomb**](LoggingHoneycomb.md)


## `deleteLogHoneycomb`

> deleteLogHoneycomb(service_id, version_id, logging_honeycomb_name)

Delete the Honeycomb log endpoint

Delete the Honeycomb logging object for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingHoneycombApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_honeycomb_name = "logging_honeycomb_name_example"; // String | 
apiInstance.deleteLogHoneycomb(service_id, version_id, logging_honeycomb_name).then((data) => {
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
**logging_honeycomb_name** | **String** |  |

### Return type

**Object**


## `getLogHoneycomb`

> getLogHoneycomb(service_id, version_id, logging_honeycomb_name)

Get a Honeycomb log endpoint

Get the details of a Honeycomb logging object for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingHoneycombApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_honeycomb_name = "logging_honeycomb_name_example"; // String | 
apiInstance.getLogHoneycomb(service_id, version_id, logging_honeycomb_name).then((data) => {
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
**logging_honeycomb_name** | **String** |  |

### Return type

[**LoggingHoneycomb**](LoggingHoneycomb.md)


## `listLogHoneycomb`

> listLogHoneycomb(service_id, version_id)

List Honeycomb log endpoints

List all of the Honeycomb logging objects for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingHoneycombApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogHoneycomb(service_id, version_id).then((data) => {
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

[**[LoggingHoneycombResponse]**](LoggingHoneycombResponse.md)


## `updateLogHoneycomb`

> updateLogHoneycomb(service_id, version_id, logging_honeycomb_name, opts)

Update a Honeycomb log endpoint

Update a Honeycomb logging object for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingHoneycombApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_honeycomb_name = "logging_honeycomb_name_example"; // String | 
let opts = {
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': null, // Object | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest.
  'dataset': "dataset_example", // String | The Honeycomb Dataset you want to log to.
  'token': "token_example" // String | The Write Key from the Account page of your Honeycomb account.
};
apiInstance.updateLogHoneycomb(service_id, version_id, logging_honeycomb_name, opts).then((data) => {
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
**logging_honeycomb_name** | **String** |  |
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | [**Object**](../Model/Object.md) | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest. | [optional]
**dataset** | **String** | The Honeycomb Dataset you want to log to. | [optional]
**token** | **String** | The Write Key from the Account page of your Honeycomb account. | [optional]

### Return type

[**LoggingHoneycombResponse**](LoggingHoneycombResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
