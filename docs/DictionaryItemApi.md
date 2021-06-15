# FastlyApi.DictionaryItemApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkUpdateDictionaryItem**](DictionaryItemApi.md#bulkUpdateDictionaryItem) | **PATCH** /service/{service_id}/dictionary/{dictionary_id}/items | Update multiple entries in an edge dictionary
[**createDictionaryItem**](DictionaryItemApi.md#createDictionaryItem) | **POST** /service/{service_id}/dictionary/{dictionary_id}/item | Create an entry in an edge dictionary
[**deleteDictionaryItem**](DictionaryItemApi.md#deleteDictionaryItem) | **DELETE** /service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key} | Delete an item from an edge dictionary
[**getDictionaryItem**](DictionaryItemApi.md#getDictionaryItem) | **GET** /service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key} | Get an item from an edge dictionary
[**listDictionaryItems**](DictionaryItemApi.md#listDictionaryItems) | **GET** /service/{service_id}/dictionary/{dictionary_id}/items | List items in an edge dictionary
[**updateDictionaryItem**](DictionaryItemApi.md#updateDictionaryItem) | **PATCH** /service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key} | Update an entry in an edge dictionary
[**upsertDictionaryItem**](DictionaryItemApi.md#upsertDictionaryItem) | **PUT** /service/{service_id}/dictionary/{dictionary_id}/item/{dictionary_item_key} | Insert or update an entry in an edge dictionary



## bulkUpdateDictionaryItem

> Object bulkUpdateDictionaryItem(service_id, dictionary_id, opts)

Update multiple entries in an edge dictionary

Update DictionaryItem in batch for given service, dictionary ID and key/value pairs for items.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DictionaryItemApi();
let service_id = "service_id_example"; // String | 
let dictionary_id = "dictionary_id_example"; // String | 
let opts = {
  'inline_object': new FastlyApi.InlineObject() // InlineObject | 
};
apiInstance.bulkUpdateDictionaryItem(service_id, dictionary_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **dictionary_id** | **String**|  | 
 **inline_object** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createDictionaryItem

> ModelDictionaryItem createDictionaryItem(service_id, dictionary_id, opts)

Create an entry in an edge dictionary

Create DictionaryItem given service, dictionary ID, item key, and item value.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DictionaryItemApi();
let service_id = "service_id_example"; // String | 
let dictionary_id = "dictionary_id_example"; // String | 
let opts = {
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'dictionary_id2': "dictionary_id_example", // String | Alphanumeric string identifying a Dictionary.
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'item_key': "item_key_example", // String | Item key, maximum 256 characters.
  'item_value': "item_value_example" // String | Item value, maximum 8000 characters.
};
apiInstance.createDictionaryItem(service_id, dictionary_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **dictionary_id** | **String**|  | 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **dictionary_id2** | **String**| Alphanumeric string identifying a Dictionary. | [optional] 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **item_key** | **String**| Item key, maximum 256 characters. | [optional] 
 **item_value** | **String**| Item value, maximum 8000 characters. | [optional] 

### Return type

[**ModelDictionaryItem**](ModelDictionaryItem.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteDictionaryItem

> Object deleteDictionaryItem(service_id, dictionary_id, dictionary_item_key)

Delete an item from an edge dictionary

Delete DictionaryItem given service, dictionary ID, and item key.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DictionaryItemApi();
let service_id = "service_id_example"; // String | 
let dictionary_id = "dictionary_id_example"; // String | 
let dictionary_item_key = "dictionary_item_key_example"; // String | 
apiInstance.deleteDictionaryItem(service_id, dictionary_id, dictionary_item_key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **dictionary_id** | **String**|  | 
 **dictionary_item_key** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDictionaryItem

> ModelDictionaryItem getDictionaryItem(service_id, dictionary_id, dictionary_item_key)

Get an item from an edge dictionary

Retrieve a single DictionaryItem given service, dictionary ID and item key.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DictionaryItemApi();
let service_id = "service_id_example"; // String | 
let dictionary_id = "dictionary_id_example"; // String | 
let dictionary_item_key = "dictionary_item_key_example"; // String | 
apiInstance.getDictionaryItem(service_id, dictionary_id, dictionary_item_key).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **dictionary_id** | **String**|  | 
 **dictionary_item_key** | **String**|  | 

### Return type

[**ModelDictionaryItem**](ModelDictionaryItem.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listDictionaryItems

> [ModelDictionaryItem] listDictionaryItems(service_id, dictionary_id, opts)

List items in an edge dictionary

List of DictionaryItems given service and dictionary ID.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DictionaryItemApi();
let service_id = "service_id_example"; // String | 
let dictionary_id = "dictionary_id_example"; // String | 
let opts = {
  'page': 56, // Number | Current page.
  'per_page': 20, // Number | Number of records per page.
  'sort': "'created'", // String | Field on which to sort.
  'direction': new FastlyApi.Direction() // Direction | Direction in which to sort results.
};
apiInstance.listDictionaryItems(service_id, dictionary_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **dictionary_id** | **String**|  | 
 **page** | **Number**| Current page. | [optional] 
 **per_page** | **Number**| Number of records per page. | [optional] [default to 20]
 **sort** | **String**| Field on which to sort. | [optional] [default to &#39;created&#39;]
 **direction** | [**Direction**](.md)| Direction in which to sort results. | [optional] 

### Return type

[**[ModelDictionaryItem]**](ModelDictionaryItem.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDictionaryItem

> ModelDictionaryItem updateDictionaryItem(service_id, dictionary_id, dictionary_item_key, opts)

Update an entry in an edge dictionary

Update DictionaryItem given service, dictionary ID, item key, and item value.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DictionaryItemApi();
let service_id = "service_id_example"; // String | 
let dictionary_id = "dictionary_id_example"; // String | 
let dictionary_item_key = "dictionary_item_key_example"; // String | 
let opts = {
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'dictionary_id2': "dictionary_id_example", // String | Alphanumeric string identifying a Dictionary.
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'item_key': "item_key_example", // String | Item key, maximum 256 characters.
  'item_value': "item_value_example" // String | Item value, maximum 8000 characters.
};
apiInstance.updateDictionaryItem(service_id, dictionary_id, dictionary_item_key, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **dictionary_id** | **String**|  | 
 **dictionary_item_key** | **String**|  | 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **dictionary_id2** | **String**| Alphanumeric string identifying a Dictionary. | [optional] 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **item_key** | **String**| Item key, maximum 256 characters. | [optional] 
 **item_value** | **String**| Item value, maximum 8000 characters. | [optional] 

### Return type

[**ModelDictionaryItem**](ModelDictionaryItem.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## upsertDictionaryItem

> ModelDictionaryItem upsertDictionaryItem(service_id, dictionary_id, dictionary_item_key, opts)

Insert or update an entry in an edge dictionary

Upsert DictionaryItem given service, dictionary ID, item key, and item value.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.DictionaryItemApi();
let service_id = "service_id_example"; // String | 
let dictionary_id = "dictionary_id_example"; // String | 
let dictionary_item_key = "dictionary_item_key_example"; // String | 
let opts = {
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'dictionary_id2': "dictionary_id_example", // String | Alphanumeric string identifying a Dictionary.
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'item_key': "item_key_example", // String | Item key, maximum 256 characters.
  'item_value': "item_value_example" // String | Item value, maximum 8000 characters.
};
apiInstance.upsertDictionaryItem(service_id, dictionary_id, dictionary_item_key, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **dictionary_id** | **String**|  | 
 **dictionary_item_key** | **String**|  | 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **dictionary_id2** | **String**| Alphanumeric string identifying a Dictionary. | [optional] 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **item_key** | **String**| Item key, maximum 256 characters. | [optional] 
 **item_value** | **String**| Item value, maximum 8000 characters. | [optional] 

### Return type

[**ModelDictionaryItem**](ModelDictionaryItem.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

