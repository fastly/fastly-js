# FastlyApi.ConditionApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCondition**](ConditionApi.md#createCondition) | **POST** /service/{service_id}/version/{version_id}/condition | Create a condition
[**deleteCondition**](ConditionApi.md#deleteCondition) | **DELETE** /service/{service_id}/version/{version_id}/condition/{condition_name} | Delete a condition
[**getCondition**](ConditionApi.md#getCondition) | **GET** /service/{service_id}/version/{version_id}/condition/{condition_name} | Describe a condition
[**listConditions**](ConditionApi.md#listConditions) | **GET** /service/{service_id}/version/{version_id}/condition | List conditions
[**updateCondition**](ConditionApi.md#updateCondition) | **PUT** /service/{service_id}/version/{version_id}/condition/{condition_name} | Update a condition



## createCondition

> ModelCondition createCondition(service_id, version_id, opts)

Create a condition

Creates a new condition.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ConditionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'comment': "''", // String | A freeform descriptive note.
  'name': "name_example", // String | Name of the condition. Required.
  'priority': 100, // Number | Priority determines execution order. Lower numbers execute first.
  'statement': "statement_example", // String | A conditional expression in VCL used to determine if the condition is met.
  'type': "type_example" // String | Type of the condition. Required.
};
apiInstance.createCondition(service_id, version_id, opts).then((data) => {
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
 **comment** | **String**| A freeform descriptive note. | [optional] [default to &#39;&#39;]
 **name** | **String**| Name of the condition. Required. | [optional] 
 **priority** | **Number**| Priority determines execution order. Lower numbers execute first. | [optional] [default to 100]
 **statement** | **String**| A conditional expression in VCL used to determine if the condition is met. | [optional] 
 **type** | **String**| Type of the condition. Required. | [optional] 

### Return type

[**ModelCondition**](ModelCondition.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteCondition

> Object deleteCondition(service_id, version_id, condition_name)

Delete a condition

Deletes the specified condition.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ConditionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let condition_name = "condition_name_example"; // String | 
apiInstance.deleteCondition(service_id, version_id, condition_name).then((data) => {
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
 **condition_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCondition

> ModelCondition getCondition(service_id, version_id, condition_name)

Describe a condition

Gets the specified condition.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ConditionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let condition_name = "condition_name_example"; // String | 
apiInstance.getCondition(service_id, version_id, condition_name).then((data) => {
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
 **condition_name** | **String**|  | 

### Return type

[**ModelCondition**](ModelCondition.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listConditions

> ModelCondition listConditions(service_id, version_id)

List conditions

Gets all conditions for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ConditionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listConditions(service_id, version_id).then((data) => {
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

[**ModelCondition**](ModelCondition.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCondition

> ModelCondition updateCondition(service_id, version_id, condition_name, opts)

Update a condition

Updates the specified condition.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.ConditionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let condition_name = "condition_name_example"; // String | 
let opts = {
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'comment': "''", // String | A freeform descriptive note.
  'name': "name_example", // String | Name of the condition. Required.
  'priority': 100, // Number | Priority determines execution order. Lower numbers execute first.
  'statement': "statement_example", // String | A conditional expression in VCL used to determine if the condition is met.
  'type': "type_example" // String | Type of the condition. Required.
};
apiInstance.updateCondition(service_id, version_id, condition_name, opts).then((data) => {
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
 **condition_name** | **String**|  | 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **comment** | **String**| A freeform descriptive note. | [optional] [default to &#39;&#39;]
 **name** | **String**| Name of the condition. Required. | [optional] 
 **priority** | **Number**| Priority determines execution order. Lower numbers execute first. | [optional] [default to 100]
 **statement** | **String**| A conditional expression in VCL used to determine if the condition is met. | [optional] 
 **type** | **String**| Type of the condition. Required. | [optional] 

### Return type

[**ModelCondition**](ModelCondition.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

