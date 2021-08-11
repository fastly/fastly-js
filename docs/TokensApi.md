# FastlyApi.TokensApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**bulkRevokeTokens**](TokensApi.md#bulkRevokeTokens) | **DELETE** /tokens | Revoke multiple tokens
[**createToken**](TokensApi.md#createToken) | **POST** /tokens | Create a token
[**getTokenCurrent**](TokensApi.md#getTokenCurrent) | **GET** /tokens/self | Get the current token
[**listTokensCustomer**](TokensApi.md#listTokensCustomer) | **GET** /customer/{customer_id}/tokens | List tokens for a customer
[**listTokensUser**](TokensApi.md#listTokensUser) | **GET** /tokens | List tokens for the authenticated user
[**revokeToken**](TokensApi.md#revokeToken) | **DELETE** /tokens/{token_id} | Revoke a token
[**revokeTokenCurrent**](TokensApi.md#revokeTokenCurrent) | **DELETE** /tokens/self | Revoke the current token



## `bulkRevokeTokens`

> bulkRevokeTokens(opts)

Revoke multiple tokens

Revoke Tokens in bulk format. Users may only revoke their own tokens. Superusers may revoke tokens of others.

### Example

```javascript
let apiInstance = new FastlyApi.TokensApi();
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
**body** | **Object** |  | [optional]

### Return type

null (empty response body)


## `createToken`

> TokenCreatedResponse createToken()

Create a token

Create an API token. If two-factor authentication is enabled for your account, review [the instructions](/reference/api/auth/) for including a one-time password in the request. 

### Example

```javascript
let apiInstance = new FastlyApi.TokensApi();
apiInstance.createToken().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameters.

### Return type

[**TokenCreatedResponse**](TokenCreatedResponse.md)


## `getTokenCurrent`

> TokenResponse getTokenCurrent()

Get the current token

Get a single token based on the access_token used in the request.

### Example

```javascript
let apiInstance = new FastlyApi.TokensApi();
apiInstance.getTokenCurrent().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameters.

### Return type

[**TokenResponse**](TokenResponse.md)


## `listTokensCustomer`

> [TokenResponse] listTokensCustomer(customer_id)

List tokens for a customer

List all tokens belonging to a specific customer.

### Example

```javascript
let apiInstance = new FastlyApi.TokensApi();
let customer_id = "customer_id_example"; // String | 
apiInstance.listTokensCustomer(customer_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**customer_id** | **String** |  |

### Return type

[**[TokenResponse]**](TokenResponse.md)


## `listTokensUser`

> [TokenResponse] listTokensUser()

List tokens for the authenticated user

List all tokens belonging to the authenticated user.

### Example

```javascript
let apiInstance = new FastlyApi.TokensApi();
apiInstance.listTokensUser().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameters.

### Return type

[**[TokenResponse]**](TokenResponse.md)


## `revokeToken`

> revokeToken(token_id)

Revoke a token

Revoke a specific token by its id.

### Example

```javascript
let apiInstance = new FastlyApi.TokensApi();
let token_id = "token_id_example"; // String | 
apiInstance.revokeToken(token_id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**token_id** | **String** |  |

### Return type

null (empty response body)


## `revokeTokenCurrent`

> revokeTokenCurrent()

Revoke the current token

Revoke a token that is used to authenticate the request.

### Example

```javascript
let apiInstance = new FastlyApi.TokensApi();
apiInstance.revokeTokenCurrent().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameters.

### Return type

null (empty response body)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
