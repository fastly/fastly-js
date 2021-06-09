# DictionaryInfo.DictionariesDictionaryInfoApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDictionaryInfo**](DictionariesDictionaryInfoApi.md#getDictionaryInfo) | **GET** /service/{service_id}/version/{version_id}/dictionary/{dictionary_id}/info | Get edge dictionary metadata



## getDictionaryInfo

> InlineResponse200 getDictionaryInfo(serviceId, versionId, dictionaryId)

Get edge dictionary metadata

Retrieve metadata for a single dictionary by ID for a version and service.

### Example

```javascript
import DictionaryInfo from 'dictionary_info';
let defaultClient = DictionaryInfo.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new DictionaryInfo.DictionariesDictionaryInfoApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let dictionaryId = 3vjTN8v1O7nOAY7aNDGOL; // String | 
apiInstance.getDictionaryInfo(serviceId, versionId, dictionaryId).then((data) => {
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
 **dictionaryId** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

