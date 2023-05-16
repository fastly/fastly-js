# Fastly.KvStoreApi

```javascript
const apiInstance = new Fastly.KvStoreApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createStore**](KvStoreApi.md#createStore) | **POST** /resources/stores/kv | Create an kv store.
[**deleteStore**](KvStoreApi.md#deleteStore) | **DELETE** /resources/stores/kv/{store_id} | Delete an kv store.
[**getStore**](KvStoreApi.md#getStore) | **GET** /resources/stores/kv/{store_id} | Describe an kv store.
[**getStores**](KvStoreApi.md#getStores) | **GET** /resources/stores/kv | List kv stores.


## `createStore`

```javascript
createStore({ , [location, ][store] })
```

Create a new kv store.

### Example

```javascript
const options = {
  location: "location_example",
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
**location** | **String** |  | [optional]
**store** | [**Store**](Store.md) |  | [optional]

### Return type

[**StoreResponse**](StoreResponse.md)


## `deleteStore`

```javascript
deleteStore({ store_id, [force] })
```

An kv store must be empty before it can be deleted.  Deleting an kv store that still contains keys will result in a `409` (Conflict).

### Example

```javascript
const options = {
  store_id: "store_id_example", // required
  force: true,
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
**force** | **Boolean** |  | [optional]

### Return type

null (empty response body)


## `getStore`

```javascript
getStore({ store_id })
```

Get an kv store by ID.

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

[**InlineResponse2003**](InlineResponse2003.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
