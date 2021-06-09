# Healthcheck.ServicesHealthcheckApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createHealthcheck**](ServicesHealthcheckApi.md#createHealthcheck) | **POST** /service/{service_id}/version/{version_id}/healthcheck | Create a healthcheck
[**deleteHealthcheck**](ServicesHealthcheckApi.md#deleteHealthcheck) | **DELETE** /service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name} | Delete a healthcheck
[**getHealthcheck**](ServicesHealthcheckApi.md#getHealthcheck) | **GET** /service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name} | Get a healthcheck
[**listHealthchecks**](ServicesHealthcheckApi.md#listHealthchecks) | **GET** /service/{service_id}/version/{version_id}/healthcheck | List healthchecks
[**updateHealthcheck**](ServicesHealthcheckApi.md#updateHealthcheck) | **PUT** /service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name} | Update a healthcheck



## createHealthcheck

> InlineObject createHealthcheck(serviceId, versionId, opts)

Create a healthcheck

Create a healthcheck for a particular service and version.

### Example

```javascript
import Healthcheck from 'healthcheck';
let defaultClient = Healthcheck.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Healthcheck.ServicesHealthcheckApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let opts = {
  'serviceId2': "serviceId_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'checkInterval': 56, // Number | How often to run the healthcheck in milliseconds.
  'comment': "''", // String | A freeform descriptive note.
  'expectedResponse': 56, // Number | The status code expected from the host.
  'host': "host_example", // String | Which host to check.
  'httpVersion': "httpVersion_example", // String | Whether to use version 1.0 or 1.1 HTTP.
  'initial': 56, // Number | When loading a config, the initial number of probes to be seen as OK.
  'method': "method_example", // String | Which HTTP method to use.
  'name': "name_example", // String | The name of the healthcheck.
  'path': "path_example", // String | The path to check.
  'threshold': 56, // Number | How many healthchecks must succeed to be considered healthy.
  'timeout': 56, // Number | Timeout in milliseconds.
  'window': 56 // Number | The number of most recent healthcheck queries to keep for this healthcheck.
};
apiInstance.createHealthcheck(serviceId, versionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 
 **serviceId2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **checkInterval** | **Number**| How often to run the healthcheck in milliseconds. | [optional] 
 **comment** | **String**| A freeform descriptive note. | [optional] [default to &#39;&#39;]
 **expectedResponse** | **Number**| The status code expected from the host. | [optional] 
 **host** | **String**| Which host to check. | [optional] 
 **httpVersion** | **String**| Whether to use version 1.0 or 1.1 HTTP. | [optional] 
 **initial** | **Number**| When loading a config, the initial number of probes to be seen as OK. | [optional] 
 **method** | **String**| Which HTTP method to use. | [optional] 
 **name** | **String**| The name of the healthcheck. | [optional] 
 **path** | **String**| The path to check. | [optional] 
 **threshold** | **Number**| How many healthchecks must succeed to be considered healthy. | [optional] 
 **timeout** | **Number**| Timeout in milliseconds. | [optional] 
 **window** | **Number**| The number of most recent healthcheck queries to keep for this healthcheck. | [optional] 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteHealthcheck

> Object deleteHealthcheck(serviceId, versionId, healthcheckName)

Delete a healthcheck

Delete the healthcheck for a particular service and version.

### Example

```javascript
import Healthcheck from 'healthcheck';
let defaultClient = Healthcheck.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Healthcheck.ServicesHealthcheckApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let healthcheckName = example-healthcheck; // String | 
apiInstance.deleteHealthcheck(serviceId, versionId, healthcheckName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 
 **healthcheckName** | **String**|  | 

### Return type

**Object**

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHealthcheck

> InlineObject getHealthcheck(serviceId, versionId, healthcheckName)

Get a healthcheck

Get the healthcheck for a particular service and version.

### Example

```javascript
import Healthcheck from 'healthcheck';
let defaultClient = Healthcheck.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Healthcheck.ServicesHealthcheckApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let healthcheckName = example-healthcheck; // String | 
apiInstance.getHealthcheck(serviceId, versionId, healthcheckName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 
 **healthcheckName** | **String**|  | 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listHealthchecks

> [InlineResponse200] listHealthchecks(serviceId, versionId)

List healthchecks

List all of the healthchecks for a particular service and version.

### Example

```javascript
import Healthcheck from 'healthcheck';
let defaultClient = Healthcheck.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Healthcheck.ServicesHealthcheckApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.listHealthchecks(serviceId, versionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 

### Return type

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateHealthcheck

> InlineObject1 updateHealthcheck(serviceId, versionId, healthcheckName, opts)

Update a healthcheck

Update the healthcheck for a particular service and version.

### Example

```javascript
import Healthcheck from 'healthcheck';
let defaultClient = Healthcheck.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Healthcheck.ServicesHealthcheckApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let healthcheckName = example-healthcheck; // String | 
let opts = {
  'serviceId2': "serviceId_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'checkInterval': 56, // Number | How often to run the healthcheck in milliseconds.
  'comment': "''", // String | A freeform descriptive note.
  'expectedResponse': 56, // Number | The status code expected from the host.
  'host': "host_example", // String | Which host to check.
  'httpVersion': "httpVersion_example", // String | Whether to use version 1.0 or 1.1 HTTP.
  'initial': 56, // Number | When loading a config, the initial number of probes to be seen as OK.
  'method': "method_example", // String | Which HTTP method to use.
  'name': "name_example", // String | The name of the healthcheck.
  'path': "path_example", // String | The path to check.
  'threshold': 56, // Number | How many healthchecks must succeed to be considered healthy.
  'timeout': 56, // Number | Timeout in milliseconds.
  'window': 56 // Number | The number of most recent healthcheck queries to keep for this healthcheck.
};
apiInstance.updateHealthcheck(serviceId, versionId, healthcheckName, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 
 **healthcheckName** | **String**|  | 
 **serviceId2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **checkInterval** | **Number**| How often to run the healthcheck in milliseconds. | [optional] 
 **comment** | **String**| A freeform descriptive note. | [optional] [default to &#39;&#39;]
 **expectedResponse** | **Number**| The status code expected from the host. | [optional] 
 **host** | **String**| Which host to check. | [optional] 
 **httpVersion** | **String**| Whether to use version 1.0 or 1.1 HTTP. | [optional] 
 **initial** | **Number**| When loading a config, the initial number of probes to be seen as OK. | [optional] 
 **method** | **String**| Which HTTP method to use. | [optional] 
 **name** | **String**| The name of the healthcheck. | [optional] 
 **path** | **String**| The path to check. | [optional] 
 **threshold** | **Number**| How many healthchecks must succeed to be considered healthy. | [optional] 
 **timeout** | **Number**| Timeout in milliseconds. | [optional] 
 **window** | **Number**| The number of most recent healthcheck queries to keep for this healthcheck. | [optional] 

### Return type

[**InlineObject1**](InlineObject1.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

