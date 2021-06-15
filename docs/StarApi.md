# FastlyApi.StarApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createServiceStar**](StarApi.md#createServiceStar) | **POST** /stars | Create a star
[**deleteServiceStar**](StarApi.md#deleteServiceStar) | **DELETE** /stars/{star_id} | Delete a star
[**getServiceStar**](StarApi.md#getServiceStar) | **GET** /stars/{star_id} | Get a star
[**listServiceStars**](StarApi.md#listServiceStars) | **GET** /stars | List stars



## createServiceStar

> ResourceStar createServiceStar(opts)

Create a star

Create star.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.StarApi();
let opts = {
  'resource_star': {"data":{"type":"star","relationships":{"user":{"data":{"type":"user","id\"":"6c7kAlo4vACNchGOdQxP37"}},"service\"":{"data\"":{"type":"service","id":"SU1Z0isxPaozGVKXdv0eY"}}}}} // ResourceStar | 
};
apiInstance.createServiceStar(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_star** | [**ResourceStar**](ResourceStar.md)|  | [optional] 

### Return type

[**ResourceStar**](ResourceStar.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## deleteServiceStar

> deleteServiceStar(star_id)

Delete a star

Delete star.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.StarApi();
let star_id = "star_id_example"; // String | 
apiInstance.deleteServiceStar(star_id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **star_id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getServiceStar

> ResourceStar getServiceStar(star_id)

Get a star

Show star.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.StarApi();
let star_id = "star_id_example"; // String | 
apiInstance.getServiceStar(star_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **star_id** | **String**|  | 

### Return type

[**ResourceStar**](ResourceStar.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## listServiceStars

> Object listServiceStars()

List stars

List stars.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.StarApi();
apiInstance.listServiceStars().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

