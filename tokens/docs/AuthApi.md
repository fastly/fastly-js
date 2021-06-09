# Tokens.AuthApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkRevokeTokens**](AuthApi.md#bulkRevokeTokens) | **DELETE** /tokens | Revoke multiple tokens
[**createToken**](AuthApi.md#createToken) | **POST** /tokens | Create a token
[**getTokenCurrent**](AuthApi.md#getTokenCurrent) | **GET** /tokens/self | Get the current token
[**listTokensCustomer**](AuthApi.md#listTokensCustomer) | **GET** /customer/{customer_id}/tokens | List tokens for a customer
[**listTokensUser**](AuthApi.md#listTokensUser) | **GET** /tokens | List tokens for the authenticated user
[**revokeToken**](AuthApi.md#revokeToken) | **DELETE** /tokens/{token_id} | Revoke a token
[**revokeTokenCurrent**](AuthApi.md#revokeTokenCurrent) | **DELETE** /tokens/self | Revoke the current token



## bulkRevokeTokens

> bulkRevokeTokens(opts)

Revoke multiple tokens

Revoke Tokens in bulk format. Users may only revoke their own tokens. Superusers may revoke tokens of others.

### Example

```javascript
import Tokens from 'tokens';
let defaultClient = Tokens.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new Tokens.AuthApi();
let opts = {
  'body': {"data":[{"id":"3krg2uUGZzb2W9Euo4moOY","type":"token"},{"id":"71ZA6hv2FO6tGEQIE203Xj","type":"token"}]} // Object | 
};
apiInstance.bulkRevokeTokens(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/vnd.api+json; ext=bulk
- **Accept**: Not defined


## createToken

> InlineResponse2001 createToken()

Create a token

Create an API token. If two-factor authentication is enabled for your account, review [the instructions](/reference/api/auth/) for including a one-time password in the request. 

### Example

```javascript
import Tokens from 'tokens';
let defaultClient = Tokens.ApiClient.instance;
// Configure HTTP basic authorization: username_and_password
let username_and_password = defaultClient.authentications['username_and_password'];
username_and_password.username = 'YOUR USERNAME';
username_and_password.password = 'YOUR PASSWORD';

let apiInstance = new Tokens.AuthApi();
apiInstance.createToken().then((data) => {
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

[username_and_password](../README.md#username_and_password)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## getTokenCurrent

> InlineResponse200 getTokenCurrent()

Get the current token

Get a single token based on the access_token used in the request.

### Example

```javascript
import Tokens from 'tokens';
let defaultClient = Tokens.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new Tokens.AuthApi();
apiInstance.getTokenCurrent().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTokensCustomer

> [InlineResponse200] listTokensCustomer(customerId)

List tokens for a customer

List all tokens belonging to a specific customer.

### Example

```javascript
import Tokens from 'tokens';
let defaultClient = Tokens.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new Tokens.AuthApi();
let customerId = x4xCwxxJxGCx123Rx5xTx; // String | 
apiInstance.listTokensCustomer(customerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 

### Return type

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTokensUser

> [InlineResponse200] listTokensUser()

List tokens for the authenticated user

List all tokens belonging to the authenticated user.

### Example

```javascript
import Tokens from 'tokens';
let defaultClient = Tokens.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new Tokens.AuthApi();
apiInstance.listTokensUser().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## revokeToken

> revokeToken(tokenId)

Revoke a token

Revoke a specific token by its id.

### Example

```javascript
import Tokens from 'tokens';
let defaultClient = Tokens.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new Tokens.AuthApi();
let tokenId = 5Yo3XXnrQpjc20u0ybrf2g; // String | 
apiInstance.revokeToken(tokenId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## revokeTokenCurrent

> revokeTokenCurrent()

Revoke the current token

Revoke a token that is used to authenticate the request.

### Example

```javascript
import Tokens from 'tokens';
let defaultClient = Tokens.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new Tokens.AuthApi();
apiInstance.revokeTokenCurrent().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

