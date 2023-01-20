# Fastly.ObjectStoreApi

```javascript
const apiInstance = new Fastly.ObjectStoreApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createStore**](ObjectStoreApi.md#createStore) | **POST** /resources/stores/object | Create an object store.
[**deleteKeyFromStore**](ObjectStoreApi.md#deleteKeyFromStore) | **DELETE** /resources/stores/object/{store_id}/keys/{key_name} | Delete object store key.
[**deleteStore**](ObjectStoreApi.md#deleteStore) | **DELETE** /resources/stores/object/{store_id} | Delete an object store.
[**getKeys**](ObjectStoreApi.md#getKeys) | **GET** /resources/stores/object/{store_id}/keys | List object store keys.
[**getStore**](ObjectStoreApi.md#getStore) | **GET** /resources/stores/object/{store_id} | Describe an object store.
[**getStores**](ObjectStoreApi.md#getStores) | **GET** /resources/stores/object | List object stores.
[**getValueForKey**](ObjectStoreApi.md#getValueForKey) | **GET** /resources/stores/object/{store_id}/keys/{key_name} | Get object store key value.
[**setValueForKey**](ObjectStoreApi.md#setValueForKey) | **PUT** /resources/stores/object/{store_id}/keys/{key_name} | Insert object store key-value.


## `createStore`

```javascript
createStore({ , [store] })
```

Create a new object store.

### Example

```javascript
const options = {
  store: {"name":"my-store"},
};

apiInstance.createStore(options)
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
**store** | [**Store**](Store.md) |  | [optional]

### Return type

[**StoreResponse**](StoreResponse.md)


## `deleteKeyFromStore`

```javascript
deleteKeyFromStore({ store_id, key_name })
```

Delete a key from a customer store.

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


## `deleteStore`

```javascript
deleteStore({ store_id })
```

An object store must be empty before it can be deleted.  Deleting an object store that still contains keys will result in a 409 Conflict.

### Example

```javascript
const options = {
  store_id: "store_id_example", // required
};

apiInstance.deleteStore(options)
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

### Return type

null (empty response body)


## `getKeys`

```javascript
getKeys({ store_id, [cursor, ][limit] })
```

List all keys within an object store.

### Example

```javascript
const options = {
  store_id: "store_id_example", // required
  cursor: "cursor_example",
  limit: 100,
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

### Return type

[**KeyResponse**](KeyResponse.md)


## `getStore`

```javascript
getStore({ store_id })
```

Get an object store by ID.

### Example

```javascript
const options = {
  store_id: "store_id_example", // required
};

apiInstance.getStore(options)
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

### Return type

[**StoreResponse**](StoreResponse.md)


## `getStores`

```javascript
getStores({ , [cursor, ][limit] })
```

Get all stores for a given customer.

### Example

```javascript
const options = {
  cursor: "cursor_example",
  limit: 100,
};

apiInstance.getStores(options)
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
**cursor** | **String** |  | [optional]
**limit** | **Number** |  | [optional] [defaults to 100]

### Return type

[**GetStoresResponse**](GetStoresResponse.md)


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

**File**


## `setValueForKey`

```javascript
setValueForKey({ store_id, key_name, [body] })
```

Insert a new key-value pair into an object store.

### Example

```javascript
const options = {
  store_id: "store_id_example", // required
  key_name: "key_name_example", // required
  body: "/path/to/file",
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
**body** | **File****File** |  | [optional]

### Return type

**File**


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
