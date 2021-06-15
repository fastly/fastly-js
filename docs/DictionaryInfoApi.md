# FastlyApi.DictionaryInfoApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDictionaryInfo**](DictionaryInfoApi.md#getDictionaryInfo) | **GET** /service/{service_id}/version/{version_id}/dictionary/{dictionary_id}/info | Get edge dictionary metadata



## getDictionaryInfo

> ModelDictionaryInfo getDictionaryInfo(service_id, version_id, dictionary_id)

Get edge dictionary metadata

Retrieve metadata for a single dictionary by ID for a version and service.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DictionaryInfoApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let dictionary_id = "dictionary_id_example"; // String | 
apiInstance.getDictionaryInfo(service_id, version_id, dictionary_id).then((data) => {
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
 **dictionary_id** | **String**|  | 

### Return type

[**ModelDictionaryInfo**](ModelDictionaryInfo.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

