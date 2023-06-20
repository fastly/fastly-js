# Fastly.TokensApi

```javascript
const apiInstance = new Fastly.TokensApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**getToken**](TokensApi.md#getToken) | **GET** /tokens/{token_id} | Get a token
[**getTokenCurrent**](TokensApi.md#getTokenCurrent) | **GET** /tokens/self | Get the current token
[**listTokensCustomer**](TokensApi.md#listTokensCustomer) | **GET** /customer/{customer_id}/tokens | List tokens for a customer
[**listTokensUser**](TokensApi.md#listTokensUser) | **GET** /tokens | List tokens for the authenticated user
[**revokeToken**](TokensApi.md#revokeToken) | **DELETE** /tokens/{token_id} | Revoke a token
[**revokeTokenCurrent**](TokensApi.md#revokeTokenCurrent) | **DELETE** /tokens/self | Revoke the current token


## `getToken`

```javascript
getToken({ token_id })
```

Get a single token by its id.

### Example

```javascript
const options = {
  token_id: "token_id_example", // required
};

apiInstance.getToken(options)
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
**token_id** | **String** | Alphanumeric string identifying a token. |

### Return type

[**TokenResponse**](TokenResponse.md)


## `getTokenCurrent`

```javascript
getTokenCurrent()
```

Get a single token based on the access_token used in the request.

### Example

```javascript
apiInstance.getTokenCurrent()
  .then((data) => {
    console.log(data, "API called successfully.");
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

This endpoint does not need any parameters.

### Return type

[**TokenResponse**](TokenResponse.md)


## `listTokensCustomer`

```javascript
listTokensCustomer({ customer_id })
```

List all tokens belonging to a specific customer.

### Example

```javascript
const options = {
  customer_id: "customer_id_example", // required
};

apiInstance.listTokensCustomer(options)
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
**customer_id** | **String** | Alphanumeric string identifying the customer. |

### Return type

[**[TokenResponse]**](TokenResponse.md)


## `listTokensUser`

```javascript
listTokensUser()
```

List all tokens belonging to the authenticated user.

### Example

```javascript
apiInstance.listTokensUser()
  .then((data) => {
    console.log(data, "API called successfully.");
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

This endpoint does not need any parameters.

### Return type

[**[TokenResponse]**](TokenResponse.md)


## `revokeToken`

```javascript
revokeToken({ token_id })
```

Revoke a specific token by its id.

### Example

```javascript
const options = {
  token_id: "token_id_example", // required
};

apiInstance.revokeToken(options)
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
**token_id** | **String** | Alphanumeric string identifying a token. |

### Return type

null (empty response body)


## `revokeTokenCurrent`

```javascript
revokeTokenCurrent()
```

Revoke a token that is used to authenticate the request.

### Example

```javascript
apiInstance.revokeTokenCurrent()
  .then(() => {
    console.log('API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

This endpoint does not need any parameters.

### Return type

null (empty response body)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
