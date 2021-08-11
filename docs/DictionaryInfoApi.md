# FastlyApi.DictionaryInfoApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**getDictionaryInfo**](DictionaryInfoApi.md#getDictionaryInfo) | **GET** /service/{service_id}/version/{version_id}/dictionary/{dictionary_id}/info | Get edge dictionary metadata



## `getDictionaryInfo`

> getDictionaryInfo(service_id, version_id, dictionary_id)

Get edge dictionary metadata

Retrieve metadata for a single dictionary by ID for a version and service.

### Example

```javascript
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
**service_id** | **String** |  |
**version_id** | **Number** |  |
**dictionary_id** | **String** |  |

### Return type

[**DictionaryInfoResponse**](DictionaryInfoResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
