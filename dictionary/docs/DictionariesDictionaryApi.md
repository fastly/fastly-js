# Dictionary.DictionariesDictionaryApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDictionary**](DictionariesDictionaryApi.md#createDictionary) | **POST** /service/{service_id}/version/{version_id}/dictionary | Create an edge dictionary
[**deleteDictionary**](DictionariesDictionaryApi.md#deleteDictionary) | **DELETE** /service/{service_id}/version/{version_id}/dictionary/{dictionary_name} | Delete an edge dictionary
[**getDictionary**](DictionariesDictionaryApi.md#getDictionary) | **GET** /service/{service_id}/version/{version_id}/dictionary/{dictionary_name} | Get an edge dictionary
[**listDictionaries**](DictionariesDictionaryApi.md#listDictionaries) | **GET** /service/{service_id}/version/{version_id}/dictionary | List edge dictionaries
[**updateDictionary**](DictionariesDictionaryApi.md#updateDictionary) | **PUT** /service/{service_id}/version/{version_id}/dictionary/{dictionary_name} | Update an edge dictionary



## createDictionary

> InlineObject createDictionary(serviceId, versionId, opts)

Create an edge dictionary

Create named dictionary for a particular service and version.

### Example

```javascript
import Dictionary from 'dictionary';
let defaultClient = Dictionary.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Dictionary.DictionariesDictionaryApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let opts = {
  'createdAt': "createdAt_example", // String | Date and time in ISO 8601 format.
  'deletedAt': "deletedAt_example", // String | Date and time in ISO 8601 format.
  'updatedAt': "updatedAt_example", // String | Date and time in ISO 8601 format.
  'id': "id_example", // String | Alphanumeric string identifying a Dictionary.
  'name': "name_example", // String | Name for the Dictionary.
  'serviceId2': "serviceId_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'writeOnly': false // Boolean | Determines if items in the dictionary are readable or not.
};
apiInstance.createDictionary(serviceId, versionId, opts).then((data) => {
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
 **createdAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deletedAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updatedAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **id** | **String**| Alphanumeric string identifying a Dictionary. | [optional] 
 **name** | **String**| Name for the Dictionary. | [optional] 
 **serviceId2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **writeOnly** | **Boolean**| Determines if items in the dictionary are readable or not. | [optional] [default to false]

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteDictionary

> Object deleteDictionary(serviceId, versionId, dictionaryName)

Delete an edge dictionary

Delete named dictionary for a particular service and version.

### Example

```javascript
import Dictionary from 'dictionary';
let defaultClient = Dictionary.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Dictionary.DictionariesDictionaryApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let dictionaryName = my_dictionary; // String | 
apiInstance.deleteDictionary(serviceId, versionId, dictionaryName).then((data) => {
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
 **dictionaryName** | **String**|  | 

### Return type

**Object**

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDictionary

> InlineObject getDictionary(serviceId, versionId, dictionaryName)

Get an edge dictionary

Retrieve a single dictionary by name for the version and service.

### Example

```javascript
import Dictionary from 'dictionary';
let defaultClient = Dictionary.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Dictionary.DictionariesDictionaryApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let dictionaryName = my_dictionary; // String | 
apiInstance.getDictionary(serviceId, versionId, dictionaryName).then((data) => {
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
 **dictionaryName** | **String**|  | 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listDictionaries

> [InlineResponse200] listDictionaries(serviceId, versionId)

List edge dictionaries

List all dictionaries for the version of the service.

### Example

```javascript
import Dictionary from 'dictionary';
let defaultClient = Dictionary.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Dictionary.DictionariesDictionaryApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.listDictionaries(serviceId, versionId).then((data) => {
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


## updateDictionary

> InlineObject updateDictionary(serviceId, versionId, dictionaryName)

Update an edge dictionary

Update named dictionary for a particular service and version.

### Example

```javascript
import Dictionary from 'dictionary';
let defaultClient = Dictionary.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Dictionary.DictionariesDictionaryApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let dictionaryName = my_dictionary; // String | 
apiInstance.updateDictionary(serviceId, versionId, dictionaryName).then((data) => {
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
 **dictionaryName** | **String**|  | 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

