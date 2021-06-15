# FastlyApi.TlsPrivateKeysApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTlsKey**](TlsPrivateKeysApi.md#createTlsKey) | **POST** /tls/private_keys | Create a TLS private key
[**deleteTlsKey**](TlsPrivateKeysApi.md#deleteTlsKey) | **DELETE** /tls/private_keys/{tls_private_key_id} | Delete a TLS private key
[**getTlsKey**](TlsPrivateKeysApi.md#getTlsKey) | **GET** /tls/private_keys/{tls_private_key_id} | Get a TLS private key
[**listTlsKeys**](TlsPrivateKeysApi.md#listTlsKeys) | **GET** /tls/private_keys | List TLS private keys



## createTlsKey

> Object createTlsKey(opts)

Create a TLS private key

Create a TLS private key.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.TlsPrivateKeysApi();
let opts = {
  'body': {"data":{"type":"tls_private_key","attributes":{"key":"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n","name":"My private key"}}} // Object | 
};
apiInstance.createTlsKey(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## deleteTlsKey

> deleteTlsKey(tls_private_key_id)

Delete a TLS private key

Destroy a TLS private key. Only private keys not already matched to any certificates can be deleted.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.TlsPrivateKeysApi();
let tls_private_key_id = "tls_private_key_id_example"; // String | 
apiInstance.deleteTlsKey(tls_private_key_id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tls_private_key_id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getTlsKey

> Object getTlsKey(tls_private_key_id)

Get a TLS private key

Show a TLS private key.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.TlsPrivateKeysApi();
let tls_private_key_id = "tls_private_key_id_example"; // String | 
apiInstance.getTlsKey(tls_private_key_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tls_private_key_id** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## listTlsKeys

> Object listTlsKeys(opts)

List TLS private keys

List all TLS private keys.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.TlsPrivateKeysApi();
let opts = {
  'filter_in_use': "filter_in_use_example", // String | Limit the returned keys to those without any matching TLS certificates. The only valid value is false.
  'page_number': 56, // Number | Current page.
  'page_size': 20 // Number | Number of records per page.
};
apiInstance.listTlsKeys(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_in_use** | **String**| Limit the returned keys to those without any matching TLS certificates. The only valid value is false. | [optional] 
 **page_number** | **Number**| Current page. | [optional] 
 **page_size** | **Number**| Number of records per page. | [optional] [default to 20]

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

