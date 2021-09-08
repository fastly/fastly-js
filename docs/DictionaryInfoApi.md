# Fastly.DictionaryInfoApi


```javascript
const apiInstance = new Fastly.DictionaryInfoApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**getDictionaryInfo**](DictionaryInfoApi.md#getDictionaryInfo) | **GET** /service/{service_id}/version/{version_id}/dictionary/{dictionary_id}/info | Get edge dictionary metadata



## `getDictionaryInfo`

```javascript
getDictionaryInfo({ service_id, version_id, dictionary_id })
```

Retrieve metadata for a single dictionary by ID for a version and service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required  dictionary_id: "dictionary_id_example", // required};

apiInstance.getDictionaryInfo(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**dictionary_id** | **String** |  |

### Return type

[**DictionaryInfoResponse**](DictionaryInfoResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
