# Star.AccountStarApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createServiceStar**](AccountStarApi.md#createServiceStar) | **POST** /stars | Create a star
[**deleteServiceStar**](AccountStarApi.md#deleteServiceStar) | **DELETE** /stars/{star_id} | Delete a star
[**getServiceStar**](AccountStarApi.md#getServiceStar) | **GET** /stars/{star_id} | Get a star
[**listServiceStars**](AccountStarApi.md#listServiceStars) | **GET** /stars | List stars



## createServiceStar

> InlineObject createServiceStar(opts)

Create a star

Create star.

### Example

```javascript
import Star from 'star';
let defaultClient = Star.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new Star.AccountStarApi();
let opts = {
  'inlineObject': new Star.InlineObject() // InlineObject | 
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
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## deleteServiceStar

> deleteServiceStar(starId)

Delete a star

Delete star.

### Example

```javascript
import Star from 'star';
let defaultClient = Star.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new Star.AccountStarApi();
let starId = 3krg2uUGZzb2W9Euo4moOY; // String | 
apiInstance.deleteServiceStar(starId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **starId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getServiceStar

> InlineResponse200 getServiceStar(starId)

Get a star

Show star.

### Example

```javascript
import Star from 'star';
let defaultClient = Star.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new Star.AccountStarApi();
let starId = 3krg2uUGZzb2W9Euo4moOY; // String | 
apiInstance.getServiceStar(starId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **starId** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## listServiceStars

> InlineResponse2001 listServiceStars()

List stars

List stars.

### Example

```javascript
import Star from 'star';
let defaultClient = Star.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new Star.AccountStarApi();
apiInstance.listServiceStars().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

