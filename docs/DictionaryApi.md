# FastlyApi.DictionaryApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDictionary**](DictionaryApi.md#createDictionary) | **POST** /service/{service_id}/version/{version_id}/dictionary | Create an edge dictionary
[**deleteDictionary**](DictionaryApi.md#deleteDictionary) | **DELETE** /service/{service_id}/version/{version_id}/dictionary/{dictionary_name} | Delete an edge dictionary
[**getDictionary**](DictionaryApi.md#getDictionary) | **GET** /service/{service_id}/version/{version_id}/dictionary/{dictionary_name} | Get an edge dictionary
[**listDictionaries**](DictionaryApi.md#listDictionaries) | **GET** /service/{service_id}/version/{version_id}/dictionary | List edge dictionaries
[**updateDictionary**](DictionaryApi.md#updateDictionary) | **PUT** /service/{service_id}/version/{version_id}/dictionary/{dictionary_name} | Update an edge dictionary



## createDictionary

> ModelDictionary createDictionary(service_id, version_id, opts)

Create an edge dictionary

Create named dictionary for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DictionaryApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'id': "id_example", // String | Alphanumeric string identifying a Dictionary.
  'name': "name_example", // String | Name for the Dictionary.
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'write_only': false // Boolean | Determines if items in the dictionary are readable or not.
};
apiInstance.createDictionary(service_id, version_id, opts).then((data) => {
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
 **id** | **String**| Alphanumeric string identifying a Dictionary. | [optional] 
 **name** | **String**| Name for the Dictionary. | [optional] 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **write_only** | **Boolean**| Determines if items in the dictionary are readable or not. | [optional] [default to false]

### Return type

[**ModelDictionary**](ModelDictionary.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteDictionary

> Object deleteDictionary(service_id, version_id, dictionary_name)

Delete an edge dictionary

Delete named dictionary for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DictionaryApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let dictionary_name = "dictionary_name_example"; // String | 
apiInstance.deleteDictionary(service_id, version_id, dictionary_name).then((data) => {
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
 **dictionary_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDictionary

> ModelDictionary getDictionary(service_id, version_id, dictionary_name)

Get an edge dictionary

Retrieve a single dictionary by name for the version and service.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DictionaryApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let dictionary_name = "dictionary_name_example"; // String | 
apiInstance.getDictionary(service_id, version_id, dictionary_name).then((data) => {
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
 **dictionary_name** | **String**|  | 

### Return type

[**ModelDictionary**](ModelDictionary.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listDictionaries

> [ModelDictionary] listDictionaries(service_id, version_id)

List edge dictionaries

List all dictionaries for the version of the service.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DictionaryApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listDictionaries(service_id, version_id).then((data) => {
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

[**[ModelDictionary]**](ModelDictionary.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDictionary

> ModelDictionary updateDictionary(service_id, version_id, dictionary_name)

Update an edge dictionary

Update named dictionary for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DictionaryApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let dictionary_name = "dictionary_name_example"; // String | 
apiInstance.updateDictionary(service_id, version_id, dictionary_name).then((data) => {
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
 **dictionary_name** | **String**|  | 

### Return type

[**ModelDictionary**](ModelDictionary.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

