# FastlyApi.DictionaryApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createDictionary**](DictionaryApi.md#createDictionary) | **POST** /service/{service_id}/version/{version_id}/dictionary | Create an edge dictionary
[**deleteDictionary**](DictionaryApi.md#deleteDictionary) | **DELETE** /service/{service_id}/version/{version_id}/dictionary/{dictionary_name} | Delete an edge dictionary
[**getDictionary**](DictionaryApi.md#getDictionary) | **GET** /service/{service_id}/version/{version_id}/dictionary/{dictionary_name} | Get an edge dictionary
[**listDictionaries**](DictionaryApi.md#listDictionaries) | **GET** /service/{service_id}/version/{version_id}/dictionary | List edge dictionaries
[**updateDictionary**](DictionaryApi.md#updateDictionary) | **PUT** /service/{service_id}/version/{version_id}/dictionary/{dictionary_name} | Update an edge dictionary



## `createDictionary`

> createDictionary(service_id, version_id, opts)

Create an edge dictionary

Create named dictionary for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.DictionaryApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'name': "name_example", // String | Name for the Dictionary.
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
**service_id** | **String** |  |
**version_id** | **Number** |  |
**name** | **String** | Name for the Dictionary. | [optional]
**write_only** | **Boolean** | Determines if items in the dictionary are readable or not. | [optional] [default to false]

### Return type

[**DictionaryResponse**](DictionaryResponse.md)


## `deleteDictionary`

> deleteDictionary(service_id, version_id, dictionary_name)

Delete an edge dictionary

Delete named dictionary for a particular service and version.

### Example

```javascript
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
**service_id** | **String** |  |
**version_id** | **Number** |  |
**dictionary_name** | **String** |  |

### Return type

**Object**


## `getDictionary`

> getDictionary(service_id, version_id, dictionary_name)

Get an edge dictionary

Retrieve a single dictionary by name for the version and service.

### Example

```javascript
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
**service_id** | **String** |  |
**version_id** | **Number** |  |
**dictionary_name** | **String** |  |

### Return type

[**DictionaryResponse**](DictionaryResponse.md)


## `listDictionaries`

> listDictionaries(service_id, version_id)

List edge dictionaries

List all dictionaries for the version of the service.

### Example

```javascript
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
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

[**[DictionaryResponse]**](DictionaryResponse.md)


## `updateDictionary`

> updateDictionary(service_id, version_id, dictionary_name, opts)

Update an edge dictionary

Update named dictionary for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.DictionaryApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let dictionary_name = "dictionary_name_example"; // String | 
let opts = {
  'name': "name_example", // String | Name for the Dictionary.
  'write_only': false // Boolean | Determines if items in the dictionary are readable or not.
};
apiInstance.updateDictionary(service_id, version_id, dictionary_name, opts).then((data) => {
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
**dictionary_name** | **String** |  |
**name** | **String** | Name for the Dictionary. | [optional]
**write_only** | **Boolean** | Determines if items in the dictionary are readable or not. | [optional] [default to false]

### Return type

[**DictionaryResponse**](DictionaryResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
