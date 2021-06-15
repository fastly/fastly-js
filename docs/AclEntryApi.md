# FastlyApi.AclEntryApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkUpdateAclEntries**](AclEntryApi.md#bulkUpdateAclEntries) | **PATCH** /service/{service_id}/acl/{acl_id}/entries | Update multiple ACL entries
[**createAclEntry**](AclEntryApi.md#createAclEntry) | **POST** /service/{service_id}/acl/{acl_id}/entry | Create an ACL entry
[**deleteAclEntry**](AclEntryApi.md#deleteAclEntry) | **DELETE** /service/{service_id}/acl/{acl_id}/entry/{acl_entry_id} | Delete an ACL entry
[**getAclEntry**](AclEntryApi.md#getAclEntry) | **GET** /service/{service_id}/acl/{acl_id}/entry/{acl_entry_id} | Describe an ACL entry
[**listAclEntries**](AclEntryApi.md#listAclEntries) | **GET** /service/{service_id}/acl/{acl_id}/entries | List ACL entries
[**updateAclEntry**](AclEntryApi.md#updateAclEntry) | **PATCH** /service/{service_id}/acl/{acl_id}/entry/{acl_entry_id} | Update an ACL entry



## bulkUpdateAclEntries

> Object bulkUpdateAclEntries(service_id, acl_id, opts)

Update multiple ACL entries

Update multiple ACL entries on the same ACL.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.AclEntryApi();
let service_id = "service_id_example"; // String | 
let acl_id = "acl_id_example"; // String | 
let opts = {
  'inline_object1': new FastlyApi.InlineObject1() // InlineObject1 | 
};
apiInstance.bulkUpdateAclEntries(service_id, acl_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **acl_id** | **String**|  | 
 **inline_object1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAclEntry

> ModelAclEntry createAclEntry(service_id, acl_id, opts)

Create an ACL entry

Add an ACL entry to an ACL.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.AclEntryApi();
let service_id = "service_id_example"; // String | 
let acl_id = "acl_id_example"; // String | 
let opts = {
  'model_acl_entry': {"subnet":8,"ip":"127.0.0.1"} // ModelAclEntry | 
};
apiInstance.createAclEntry(service_id, acl_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **acl_id** | **String**|  | 
 **model_acl_entry** | [**ModelAclEntry**](ModelAclEntry.md)|  | [optional] 

### Return type

[**ModelAclEntry**](ModelAclEntry.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAclEntry

> Object deleteAclEntry(service_id, acl_id, acl_entry_id)

Delete an ACL entry

Delete an ACL entry from a specified ACL.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.AclEntryApi();
let service_id = "service_id_example"; // String | 
let acl_id = "acl_id_example"; // String | 
let acl_entry_id = "acl_entry_id_example"; // String | 
apiInstance.deleteAclEntry(service_id, acl_id, acl_entry_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **acl_id** | **String**|  | 
 **acl_entry_id** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAclEntry

> ModelAclEntry getAclEntry(service_id, acl_id, acl_entry_id)

Describe an ACL entry

Retrieve a single ACL entry.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.AclEntryApi();
let service_id = "service_id_example"; // String | 
let acl_id = "acl_id_example"; // String | 
let acl_entry_id = "acl_entry_id_example"; // String | 
apiInstance.getAclEntry(service_id, acl_id, acl_entry_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **acl_id** | **String**|  | 
 **acl_entry_id** | **String**|  | 

### Return type

[**ModelAclEntry**](ModelAclEntry.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAclEntries

> [ModelAclEntry] listAclEntries(service_id, acl_id, opts)

List ACL entries

List ACL entries for a specified ACL.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.AclEntryApi();
let service_id = "service_id_example"; // String | 
let acl_id = "acl_id_example"; // String | 
let opts = {
  'page': 56, // Number | Current page.
  'per_page': 20, // Number | Number of records per page.
  'sort': "'created'", // String | Field on which to sort.
  'direction': new FastlyApi.Direction() // Direction | Direction in which to sort results.
};
apiInstance.listAclEntries(service_id, acl_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **acl_id** | **String**|  | 
 **page** | **Number**| Current page. | [optional] 
 **per_page** | **Number**| Number of records per page. | [optional] [default to 20]
 **sort** | **String**| Field on which to sort. | [optional] [default to &#39;created&#39;]
 **direction** | [**Direction**](.md)| Direction in which to sort results. | [optional] 

### Return type

[**[ModelAclEntry]**](ModelAclEntry.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAclEntry

> ModelAclEntry updateAclEntry(service_id, acl_id, acl_entry_id, opts)

Update an ACL entry

Update an ACL entry for a specified ACL.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.AclEntryApi();
let service_id = "service_id_example"; // String | 
let acl_id = "acl_id_example"; // String | 
let acl_entry_id = "acl_entry_id_example"; // String | 
let opts = {
  'model_acl_entry': {"ip":"127.0.0.1"} // ModelAclEntry | 
};
apiInstance.updateAclEntry(service_id, acl_id, acl_entry_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **acl_id** | **String**|  | 
 **acl_entry_id** | **String**|  | 
 **model_acl_entry** | [**ModelAclEntry**](ModelAclEntry.md)|  | [optional] 

### Return type

[**ModelAclEntry**](ModelAclEntry.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

