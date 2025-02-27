# Fastly.KvStoreApi

```javascript
const apiInstance = new Fastly.KvStoreApi();
```
## Methods

> [!NOTE]
> All URIs are relative to `https://api.fastly.com`

Method | HTTP request | Description
------ | ------------ | -----------
[**kvStoreCreate**](KvStoreApi.md#kvStoreCreate) | **POST** /resources/stores/kv | Create a KV store.
[**kvStoreDelete**](KvStoreApi.md#kvStoreDelete) | **DELETE** /resources/stores/kv/{store_id} | Delete a KV store.
[**kvStoreGet**](KvStoreApi.md#kvStoreGet) | **GET** /resources/stores/kv/{store_id} | Describe a KV store.
[**kvStoreList**](KvStoreApi.md#kvStoreList) | **GET** /resources/stores/kv | List all KV stores.


## `kvStoreCreate`

```javascript
kvStoreCreate({ , [location, ][kv_store_request_create] })
```

Create a KV store.

### Example

```javascript
const options = {
  location: "US",
  kv_store_request_create: {"name":"my-store"},
};

apiInstance.kvStoreCreate(options)
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
**location** | **String** |  | [optional] [one of: "US", "EU", "ASIA", "AUS"]
**kv_store_request_create** | [**KvStoreRequestCreate**](KvStoreRequestCreate.md) |  | [optional]

### Return type

[**KvStoreDetails**](KvStoreDetails.md)


## `kvStoreDelete`

```javascript
kvStoreDelete({ store_id })
```

A KV store must be empty before it can be deleted. Attempting to delete a KV store that contains items will result in a response with a `409` status code.

### Example

```javascript
const options = {
  store_id: "store_id_example", // required
};

apiInstance.kvStoreDelete(options)
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


## `kvStoreGet`

```javascript
kvStoreGet({ store_id })
```

Get details of a KV store.

### Example

```javascript
const options = {
  store_id: "store_id_example", // required
};

apiInstance.kvStoreGet(options)
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

[**KvStoreDetails**](KvStoreDetails.md)


## `kvStoreList`

```javascript
kvStoreList({ , [cursor, ][limit] })
```

List all KV stores.

### Example

```javascript
const options = {
  cursor: "cursor_example",
  limit: 1000,
};

apiInstance.kvStoreList(options)
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
**limit** | **Number** |  | [optional] [defaults to 1000]

### Return type

[**InlineResponse2003**](InlineResponse2003.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
