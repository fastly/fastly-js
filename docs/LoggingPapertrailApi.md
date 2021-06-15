# FastlyApi.LoggingPapertrailApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogPapertrail**](LoggingPapertrailApi.md#createLogPapertrail) | **POST** /service/{service_id}/version/{version_id}/logging/papertrail | Create a Papertrail log endpoint
[**deleteLogPapertrail**](LoggingPapertrailApi.md#deleteLogPapertrail) | **DELETE** /service/{service_id}/version/{version_id}/logging/papertrail/{logging_papertrail_name} | Delete a Papertrail log endpoint
[**getLogPapertrail**](LoggingPapertrailApi.md#getLogPapertrail) | **GET** /service/{service_id}/version/{version_id}/logging/papertrail/{logging_papertrail_name} | Get a Papertrail log endpoint
[**listLogPapertrail**](LoggingPapertrailApi.md#listLogPapertrail) | **GET** /service/{service_id}/version/{version_id}/logging/papertrail | List Papertrail log endpoints
[**updateLogPapertrail**](LoggingPapertrailApi.md#updateLogPapertrail) | **PUT** /service/{service_id}/version/{version_id}/logging/papertrail/{logging_papertrail_name} | Update a Papertrail log endpoint



## createLogPapertrail

> ModelLoggingPapertrail createLogPapertrail(service_id, version_id, opts)

Create a Papertrail log endpoint

Create a Papertrail for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingPapertrailApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'address': "address_example", // String | A hostname or IPv4 address.
  'port': 514 // Number | The port number.
};
apiInstance.createLogPapertrail(service_id, version_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **name** | **String**| The name for the real-time logging configuration. | [optional] 
 **placement** | [**LoggingPlacement**](LoggingPlacement.md)|  | [optional] 
 **format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md)|  | [optional] 
 **response_condition** | **String**| The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
 **format** | **String**| A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
 **address** | **String**| A hostname or IPv4 address. | [optional] 
 **port** | **Number**| The port number. | [optional] [default to 514]

### Return type

[**ModelLoggingPapertrail**](ModelLoggingPapertrail.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteLogPapertrail

> Object deleteLogPapertrail(service_id, version_id, logging_papertrail_name)

Delete a Papertrail log endpoint

Delete the Papertrail for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingPapertrailApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_papertrail_name = "logging_papertrail_name_example"; // String | 
apiInstance.deleteLogPapertrail(service_id, version_id, logging_papertrail_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **logging_papertrail_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogPapertrail

> ModelLoggingPapertrail getLogPapertrail(service_id, version_id, logging_papertrail_name)

Get a Papertrail log endpoint

Get the Papertrail for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingPapertrailApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_papertrail_name = "logging_papertrail_name_example"; // String | 
apiInstance.getLogPapertrail(service_id, version_id, logging_papertrail_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **logging_papertrail_name** | **String**|  | 

### Return type

[**ModelLoggingPapertrail**](ModelLoggingPapertrail.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLogPapertrail

> [ModelLoggingPapertrail] listLogPapertrail(service_id, version_id)

List Papertrail log endpoints

List all of the Papertrails for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingPapertrailApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogPapertrail(service_id, version_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 

### Return type

[**[ModelLoggingPapertrail]**](ModelLoggingPapertrail.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLogPapertrail

> ModelLoggingPapertrail updateLogPapertrail(service_id, version_id, logging_papertrail_name, opts)

Update a Papertrail log endpoint

Update the Papertrail for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingPapertrailApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_papertrail_name = "logging_papertrail_name_example"; // String | 
let opts = {
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'address': "address_example", // String | A hostname or IPv4 address.
  'port': 514 // Number | The port number.
};
apiInstance.updateLogPapertrail(service_id, version_id, logging_papertrail_name, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **logging_papertrail_name** | **String**|  | 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **name** | **String**| The name for the real-time logging configuration. | [optional] 
 **placement** | [**LoggingPlacement**](LoggingPlacement.md)|  | [optional] 
 **format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md)|  | [optional] 
 **response_condition** | **String**| The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
 **format** | **String**| A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
 **address** | **String**| A hostname or IPv4 address. | [optional] 
 **port** | **Number**| The port number. | [optional] [default to 514]

### Return type

[**ModelLoggingPapertrail**](ModelLoggingPapertrail.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

