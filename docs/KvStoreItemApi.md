# Fastly.KvStoreItemApi

```javascript
const apiInstance = new Fastly.KvStoreItemApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**deleteKeyFromStore**](KvStoreItemApi.md#deleteKeyFromStore) | **DELETE** /resources/stores/kv/{store_id}/keys/{key_name} | Delete kv store item.
[**getKeys**](KvStoreItemApi.md#getKeys) | **GET** /resources/stores/kv/{store_id}/keys | List kv store keys.
[**getValueForKey**](KvStoreItemApi.md#getValueForKey) | **GET** /resources/stores/kv/{store_id}/keys/{key_name} | Get the value of an kv store item
[**setValueForKey**](KvStoreItemApi.md#setValueForKey) | **PUT** /resources/stores/kv/{store_id}/keys/{key_name} | Insert an item into an kv store


## `deleteKeyFromStore`

```javascript
deleteKeyFromStore({ store_id, key_name })
```

Delete an item from an kv store

### Example

```javascript
const options = {
  store_id: "store_id_example", // required
  key_name: "key_name_example", // required
};

apiInstance.deleteKeyFromStore(options)
  .then(() => {
    console.log('API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**store_id** | **String** |  |
**key_name** | **String** |  |

### Return type

null (empty response body)


## `getKeys`

```javascript
getKeys({ store_id, [cursor, ][limit, ][prefix] })
```

List the keys of all items within an kv store.

### Example

```javascript
const options = {
  store_id: "store_id_example", // required
  cursor: "cursor_example",
  limit: 100,
  prefix: "prefix_example",
};

apiInstance.getKeys(options)
  .then((data) => {
    console.log(data, "API called successfully.");
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**store_id** | **String** |  |
**cursor** | **String** |  | [optional]
**limit** | **Number** |  | [optional] [defaults to 100]
**prefix** | **String** |  | [optional]

### Return type

[**InlineResponse2004**](InlineResponse2004.md)


## `getValueForKey`

```javascript
getValueForKey({ store_id, key_name })
```

Get the value associated with a key.

### Example

```javascript
const options = {
  store_id: "store_id_example", // required
  key_name: "key_name_example", // required
};

apiInstance.getValueForKey(options)
  .then((data) => {
    console.log(data, "API called successfully.");
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**store_id** | **String** |  |
**key_name** | **String** |  |

### Return type

**Blob**


## `setValueForKey`

```javascript
setValueForKey({ store_id, key_name, [if_generation_match, ][time_to_live_sec, ][metadata, ][add, ][append, ][prepend, ][background_fetch, ][body] })
```

Set a new value for a new or existing key in an kv store.

### Example

```javascript
const options = {
  store_id: "store_id_example", // required
  key_name: "key_name_example", // required
  if_generation_match: 56,
  time_to_live_sec: 56,
  metadata: "metadata_example",
  add: true,
  append: true,
  prepend: true,
  background_fetch: true,
  body: null,
};

apiInstance.setValueForKey(options)
  .then((data) => {
    console.log(data, "API called successfully.");
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**store_id** | **String** |  |
**key_name** | **String** |  |
**if_generation_match** | **Number** |  | [optional]
**time_to_live_sec** | **Number** |  | [optional]
**metadata** | **String** |  | [optional]
**add** | **Boolean** |  | [optional]
**append** | **Boolean** |  | [optional]
**prepend** | **Boolean** |  | [optional]
**background_fetch** | **Boolean** |  | [optional]
**body** | **Blob** |  | [optional]

### Return type

**Blob**


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
