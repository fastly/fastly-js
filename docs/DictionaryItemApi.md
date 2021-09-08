# Fastly.DictionaryItemApi


```javascript
const apiInstance = new Fastly.DictionaryItemApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**bulkUpdateDictionaryItem**](DictionaryItemApi.md#bulkUpdateDictionaryItem) | **PATCH** /service/{service_id}/dictionary/{dictionary_id}/items | Update multiple entries in an edge dictionary
[**createDictionaryItem**](DictionaryItemApi.md#createDictionaryItem) | **POST** /service/{service_id}/dictionary/{dictionary_id}/item | Create an entry in an edge dictionary
[**deleteDictionaryItem**](DictionaryItemApi.md#deleteDictionaryItem) | **DELETE** /service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key} | Delete an item from an edge dictionary
[**getDictionaryItem**](DictionaryItemApi.md#getDictionaryItem) | **GET** /service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key} | Get an item from an edge dictionary
[**listDictionaryItems**](DictionaryItemApi.md#listDictionaryItems) | **GET** /service/{service_id}/dictionary/{dictionary_id}/items | List items in an edge dictionary
[**updateDictionaryItem**](DictionaryItemApi.md#updateDictionaryItem) | **PATCH** /service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key} | Update an entry in an edge dictionary
[**upsertDictionaryItem**](DictionaryItemApi.md#upsertDictionaryItem) | **PUT** /service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key} | Insert or update an entry in an edge dictionary



## `bulkUpdateDictionaryItem`

```javascript
bulkUpdateDictionaryItem({ service_id, dictionary_id, [inline_object4] })
```

Update DictionaryItem in batch for given service, dictionary ID and key/value pairs for items.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  dictionary_id: "dictionary_id_example", // required
  inline_object4: new Fastly.InlineObject4(),
};

apiInstance.bulkUpdateDictionaryItem(options)
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
**dictionary_id** | **String** |  |
**inline_object4** | [**InlineObject4**](../Model/InlineObject4.md) |  | [optional]

### Return type

**Object**


## `createDictionaryItem`

```javascript
createDictionaryItem({ service_id, dictionary_id, [item_key, ], [item_value] })
```

Create DictionaryItem given service, dictionary ID, item key, and item value.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  dictionary_id: "dictionary_id_example", // required
  item_key: "item_key_example",
  item_value: "item_value_example",
};

apiInstance.createDictionaryItem(options)
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
**dictionary_id** | **String** |  |
**item_key** | **String** | Item key, maximum 256 characters. | [optional]
**item_value** | **String** | Item value, maximum 8000 characters. | [optional]

### Return type

[**DictionaryItemResponse**](DictionaryItemResponse.md)


## `deleteDictionaryItem`

```javascript
deleteDictionaryItem({ service_id, dictionary_id, dictionary_item_key })
```

Delete DictionaryItem given service, dictionary ID, and item key.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  dictionary_id: "dictionary_id_example", // required
  dictionary_item_key: "dictionary_item_key_example", // required
};

apiInstance.deleteDictionaryItem(options)
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
**dictionary_id** | **String** |  |
**dictionary_item_key** | **String** |  |

### Return type

**Object**


## `getDictionaryItem`

```javascript
getDictionaryItem({ service_id, dictionary_id, dictionary_item_key })
```

Retrieve a single DictionaryItem given service, dictionary ID and item key.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  dictionary_id: "dictionary_id_example", // required
  dictionary_item_key: "dictionary_item_key_example", // required
};

apiInstance.getDictionaryItem(options)
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
**dictionary_id** | **String** |  |
**dictionary_item_key** | **String** |  |

### Return type

[**DictionaryItemResponse**](DictionaryItemResponse.md)


## `listDictionaryItems`

```javascript
listDictionaryItems({ service_id, dictionary_id, [page, ], [per_page, ], [sort, ], [direction] })
```

List of DictionaryItems given service and dictionary ID.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  dictionary_id: "dictionary_id_example", // required
  page: 56,
  per_page: 20,
  sort: "'created'",
  direction: ascend,
};

apiInstance.listDictionaryItems(options)
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
**dictionary_id** | **String** |  |
**page** | **Number** | Current page. | [optional]
**per_page** | **Number** | Number of records per page. | [optional] [default to 20]
**sort** | **String** | Field on which to sort. | [optional] [default to &#39;created&#39;]
**direction** | **String** | Direction in which to sort results. | [optional] [default to &#39;ascend&#39;]

### Return type

[**[DictionaryItemResponse]**](DictionaryItemResponse.md)


## `updateDictionaryItem`

```javascript
updateDictionaryItem({ service_id, dictionary_id, dictionary_item_key, [item_key, ], [item_value] })
```

Update DictionaryItem given service, dictionary ID, item key, and item value.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  dictionary_id: "dictionary_id_example", // required
  dictionary_item_key: "dictionary_item_key_example", // required
  item_key: "item_key_example",
  item_value: "item_value_example",
};

apiInstance.updateDictionaryItem(options)
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
**dictionary_id** | **String** |  |
**dictionary_item_key** | **String** |  |
**item_key** | **String** | Item key, maximum 256 characters. | [optional]
**item_value** | **String** | Item value, maximum 8000 characters. | [optional]

### Return type

[**DictionaryItemResponse**](DictionaryItemResponse.md)


## `upsertDictionaryItem`

```javascript
upsertDictionaryItem({ service_id, dictionary_id, dictionary_item_key, [item_key, ], [item_value] })
```

Upsert DictionaryItem given service, dictionary ID, item key, and item value.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  dictionary_id: "dictionary_id_example", // required
  dictionary_item_key: "dictionary_item_key_example", // required
  item_key: "item_key_example",
  item_value: "item_value_example",
};

apiInstance.upsertDictionaryItem(options)
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
**dictionary_id** | **String** |  |
**dictionary_item_key** | **String** |  |
**item_key** | **String** | Item key, maximum 256 characters. | [optional]
**item_value** | **String** | Item value, maximum 8000 characters. | [optional]

### Return type

[**DictionaryItemResponse**](DictionaryItemResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
