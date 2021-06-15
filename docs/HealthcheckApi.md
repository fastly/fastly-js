# FastlyApi.HealthcheckApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createHealthcheck**](HealthcheckApi.md#createHealthcheck) | **POST** /service/{service_id}/version/{version_id}/healthcheck | Create a healthcheck
[**deleteHealthcheck**](HealthcheckApi.md#deleteHealthcheck) | **DELETE** /service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name} | Delete a healthcheck
[**getHealthcheck**](HealthcheckApi.md#getHealthcheck) | **GET** /service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name} | Get a healthcheck
[**listHealthchecks**](HealthcheckApi.md#listHealthchecks) | **GET** /service/{service_id}/version/{version_id}/healthcheck | List healthchecks
[**updateHealthcheck**](HealthcheckApi.md#updateHealthcheck) | **PUT** /service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name} | Update a healthcheck



## createHealthcheck

> ModelHealthcheck createHealthcheck(service_id, version_id, opts)

Create a healthcheck

Create a healthcheck for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.HealthcheckApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'check_interval': 56, // Number | How often to run the healthcheck in milliseconds.
  'comment': "''", // String | A freeform descriptive note.
  'expected_response': 56, // Number | The status code expected from the host.
  'host': "host_example", // String | Which host to check.
  'http_version': "http_version_example", // String | Whether to use version 1.0 or 1.1 HTTP.
  'initial': 56, // Number | When loading a config, the initial number of probes to be seen as OK.
  'method': "method_example", // String | Which HTTP method to use.
  'name': "name_example", // String | The name of the healthcheck.
  'path': "path_example", // String | The path to check.
  'threshold': 56, // Number | How many healthchecks must succeed to be considered healthy.
  'timeout': 56, // Number | Timeout in milliseconds.
  'window': 56 // Number | The number of most recent healthcheck queries to keep for this healthcheck.
};
apiInstance.createHealthcheck(service_id, version_id, opts).then((data) => {
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
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **check_interval** | **Number**| How often to run the healthcheck in milliseconds. | [optional] 
 **comment** | **String**| A freeform descriptive note. | [optional] [default to &#39;&#39;]
 **expected_response** | **Number**| The status code expected from the host. | [optional] 
 **host** | **String**| Which host to check. | [optional] 
 **http_version** | **String**| Whether to use version 1.0 or 1.1 HTTP. | [optional] 
 **initial** | **Number**| When loading a config, the initial number of probes to be seen as OK. | [optional] 
 **method** | **String**| Which HTTP method to use. | [optional] 
 **name** | **String**| The name of the healthcheck. | [optional] 
 **path** | **String**| The path to check. | [optional] 
 **threshold** | **Number**| How many healthchecks must succeed to be considered healthy. | [optional] 
 **timeout** | **Number**| Timeout in milliseconds. | [optional] 
 **window** | **Number**| The number of most recent healthcheck queries to keep for this healthcheck. | [optional] 

### Return type

[**ModelHealthcheck**](ModelHealthcheck.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteHealthcheck

> Object deleteHealthcheck(service_id, version_id, healthcheck_name)

Delete a healthcheck

Delete the healthcheck for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.HealthcheckApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let healthcheck_name = "healthcheck_name_example"; // String | 
apiInstance.deleteHealthcheck(service_id, version_id, healthcheck_name).then((data) => {
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
 **healthcheck_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHealthcheck

> ModelHealthcheck getHealthcheck(service_id, version_id, healthcheck_name)

Get a healthcheck

Get the healthcheck for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.HealthcheckApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let healthcheck_name = "healthcheck_name_example"; // String | 
apiInstance.getHealthcheck(service_id, version_id, healthcheck_name).then((data) => {
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
 **healthcheck_name** | **String**|  | 

### Return type

[**ModelHealthcheck**](ModelHealthcheck.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listHealthchecks

> [ModelHealthcheck] listHealthchecks(service_id, version_id)

List healthchecks

List all of the healthchecks for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.HealthcheckApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listHealthchecks(service_id, version_id).then((data) => {
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

[**[ModelHealthcheck]**](ModelHealthcheck.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateHealthcheck

> ModelHealthcheck updateHealthcheck(service_id, version_id, healthcheck_name, opts)

Update a healthcheck

Update the healthcheck for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.HealthcheckApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let healthcheck_name = "healthcheck_name_example"; // String | 
let opts = {
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'check_interval': 56, // Number | How often to run the healthcheck in milliseconds.
  'comment': "''", // String | A freeform descriptive note.
  'expected_response': 56, // Number | The status code expected from the host.
  'host': "host_example", // String | Which host to check.
  'http_version': "http_version_example", // String | Whether to use version 1.0 or 1.1 HTTP.
  'initial': 56, // Number | When loading a config, the initial number of probes to be seen as OK.
  'method': "method_example", // String | Which HTTP method to use.
  'name': "name_example", // String | The name of the healthcheck.
  'path': "path_example", // String | The path to check.
  'threshold': 56, // Number | How many healthchecks must succeed to be considered healthy.
  'timeout': 56, // Number | Timeout in milliseconds.
  'window': 56 // Number | The number of most recent healthcheck queries to keep for this healthcheck.
};
apiInstance.updateHealthcheck(service_id, version_id, healthcheck_name, opts).then((data) => {
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
 **healthcheck_name** | **String**|  | 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **check_interval** | **Number**| How often to run the healthcheck in milliseconds. | [optional] 
 **comment** | **String**| A freeform descriptive note. | [optional] [default to &#39;&#39;]
 **expected_response** | **Number**| The status code expected from the host. | [optional] 
 **host** | **String**| Which host to check. | [optional] 
 **http_version** | **String**| Whether to use version 1.0 or 1.1 HTTP. | [optional] 
 **initial** | **Number**| When loading a config, the initial number of probes to be seen as OK. | [optional] 
 **method** | **String**| Which HTTP method to use. | [optional] 
 **name** | **String**| The name of the healthcheck. | [optional] 
 **path** | **String**| The path to check. | [optional] 
 **threshold** | **Number**| How many healthchecks must succeed to be considered healthy. | [optional] 
 **timeout** | **Number**| Timeout in milliseconds. | [optional] 
 **window** | **Number**| The number of most recent healthcheck queries to keep for this healthcheck. | [optional] 

### Return type

[**ModelHealthcheck**](ModelHealthcheck.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

