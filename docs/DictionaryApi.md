# Fastly.DictionaryApi


```javascript
const apiInstance = new Fastly.DictionaryApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createDictionary**](DictionaryApi.md#createDictionary) | **POST** /service/{service_id}/version/{version_id}/dictionary | Create an edge dictionary
[**deleteDictionary**](DictionaryApi.md#deleteDictionary) | **DELETE** /service/{service_id}/version/{version_id}/dictionary/{dictionary_name} | Delete an edge dictionary
[**getDictionary**](DictionaryApi.md#getDictionary) | **GET** /service/{service_id}/version/{version_id}/dictionary/{dictionary_name} | Get an edge dictionary
[**listDictionaries**](DictionaryApi.md#listDictionaries) | **GET** /service/{service_id}/version/{version_id}/dictionary | List edge dictionaries
[**updateDictionary**](DictionaryApi.md#updateDictionary) | **PUT** /service/{service_id}/version/{version_id}/dictionary/{dictionary_name} | Update an edge dictionary



## `createDictionary`

```javascript
createDictionary({ service_id, version_id, [name, ], [write_only] })
```

Create named dictionary for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  name: &quot;name_example&quot;,
  write_only: false,
};

apiInstance.createDictionary(options)
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
**name** | **String** | Name for the Dictionary. | [optional]
**write_only** | **Boolean** | Determines if items in the dictionary are readable or not. | [optional] [default to false]

### Return type

[**DictionaryResponse**](DictionaryResponse.md)


## `deleteDictionary`

```javascript
deleteDictionary({ service_id, version_id, dictionary_name })
```

Delete named dictionary for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  dictionary_name: "dictionary_name_example", // required
};

apiInstance.deleteDictionary(options)
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
**dictionary_name** | **String** |  |

### Return type

**Object**


## `getDictionary`

```javascript
getDictionary({ service_id, version_id, dictionary_name })
```

Retrieve a single dictionary by name for the version and service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  dictionary_name: "dictionary_name_example", // required
};

apiInstance.getDictionary(options)
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
**dictionary_name** | **String** |  |

### Return type

[**DictionaryResponse**](DictionaryResponse.md)


## `listDictionaries`

```javascript
listDictionaries({ service_id, version_id })
```

List all dictionaries for the version of the service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listDictionaries(options)
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

### Return type

[**[DictionaryResponse]**](DictionaryResponse.md)


## `updateDictionary`

```javascript
updateDictionary({ service_id, version_id, dictionary_name, [name, ], [write_only] })
```

Update named dictionary for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  dictionary_name: "dictionary_name_example", // required
  name: &quot;name_example&quot;,
  write_only: false,
};

apiInstance.updateDictionary(options)
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
**dictionary_name** | **String** |  |
**name** | **String** | Name for the Dictionary. | [optional]
**write_only** | **Boolean** | Determines if items in the dictionary are readable or not. | [optional] [default to false]

### Return type

[**DictionaryResponse**](DictionaryResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
