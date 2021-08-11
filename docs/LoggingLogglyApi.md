# FastlyApi.LoggingLogglyApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogLoggly**](LoggingLogglyApi.md#createLogLoggly) | **POST** /service/{service_id}/version/{version_id}/logging/loggly | Create a Loggly log endpoint
[**deleteLogLoggly**](LoggingLogglyApi.md#deleteLogLoggly) | **DELETE** /service/{service_id}/version/{version_id}/logging/loggly/{logging_loggly_name} | Delete a Loggly log endpoint
[**getLogLoggly**](LoggingLogglyApi.md#getLogLoggly) | **GET** /service/{service_id}/version/{version_id}/logging/loggly/{logging_loggly_name} | Get a Loggly log endpoint
[**listLogLoggly**](LoggingLogglyApi.md#listLogLoggly) | **GET** /service/{service_id}/version/{version_id}/logging/loggly | List Loggly log endpoints
[**updateLogLoggly**](LoggingLogglyApi.md#updateLogLoggly) | **PUT** /service/{service_id}/version/{version_id}/logging/loggly/{logging_loggly_name} | Update a Loggly log endpoint



## `createLogLoggly`

> createLogLoggly(service_id, version_id, opts)

Create a Loggly log endpoint

Create a Loggly logging object for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingLogglyApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'token': "token_example" // String | The token to use for authentication ([https://www.loggly.com/docs/customer-token-authentication-token/](https://www.loggly.com/docs/customer-token-authentication-token/)).
};
apiInstance.createLogLoggly(service_id, version_id, opts).then((data) => {
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
**token** | **String** | The token to use for authentication ([https://www.loggly.com/docs/customer-token-authentication-token/](https://www.loggly.com/docs/customer-token-authentication-token/)). | [optional]

### Return type

[**LoggingLogglyResponse**](LoggingLogglyResponse.md)


## `deleteLogLoggly`

> deleteLogLoggly(service_id, version_id, logging_loggly_name)

Delete a Loggly log endpoint

Delete the Loggly logging object for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingLogglyApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_loggly_name = "logging_loggly_name_example"; // String | 
apiInstance.deleteLogLoggly(service_id, version_id, logging_loggly_name).then((data) => {
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
**logging_loggly_name** | **String** |  |

### Return type

**Object**


## `getLogLoggly`

> getLogLoggly(service_id, version_id, logging_loggly_name)

Get a Loggly log endpoint

Get the Loggly logging object for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingLogglyApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_loggly_name = "logging_loggly_name_example"; // String | 
apiInstance.getLogLoggly(service_id, version_id, logging_loggly_name).then((data) => {
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
**logging_loggly_name** | **String** |  |

### Return type

[**LoggingLogglyResponse**](LoggingLogglyResponse.md)


## `listLogLoggly`

> listLogLoggly(service_id, version_id)

List Loggly log endpoints

List all Loggly logging objects for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingLogglyApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogLoggly(service_id, version_id).then((data) => {
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

[**[LoggingLogglyResponse]**](LoggingLogglyResponse.md)


## `updateLogLoggly`

> updateLogLoggly(service_id, version_id, logging_loggly_name, opts)

Update a Loggly log endpoint

Update the Loggly logging object for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingLogglyApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_loggly_name = "logging_loggly_name_example"; // String | 
let opts = {
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'token': "token_example" // String | The token to use for authentication ([https://www.loggly.com/docs/customer-token-authentication-token/](https://www.loggly.com/docs/customer-token-authentication-token/)).
};
apiInstance.updateLogLoggly(service_id, version_id, logging_loggly_name, opts).then((data) => {
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
**logging_loggly_name** | **String** |  |
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**token** | **String** | The token to use for authentication ([https://www.loggly.com/docs/customer-token-authentication-token/](https://www.loggly.com/docs/customer-token-authentication-token/)). | [optional]

### Return type

[**LoggingLogglyResponse**](LoggingLogglyResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
