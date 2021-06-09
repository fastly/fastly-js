# User.AccountUserApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](AccountUserApi.md#createUser) | **POST** /user | Create a user
[**deleteUser**](AccountUserApi.md#deleteUser) | **DELETE** /user/{user_id} | Delete a user
[**getCurrentUser**](AccountUserApi.md#getCurrentUser) | **GET** /current_user | Get the current user
[**getUser**](AccountUserApi.md#getUser) | **GET** /user/{user_id} | Get a user
[**requestPasswordReset**](AccountUserApi.md#requestPasswordReset) | **POST** /user/{user_login}/password/request_reset | Request a password reset
[**updateUser**](AccountUserApi.md#updateUser) | **PUT** /user/{user_id} | Update a user
[**updateUserPassword**](AccountUserApi.md#updateUserPassword) | **POST** /current_user/password | Update the user&#39;s password



## createUser

> InlineResponse200 createUser()

Create a user

Create a user.

### Example

```javascript
import User from 'user';
let defaultClient = User.ApiClient.instance;
// Configure API key authorization: token_superuser
let token_superuser = defaultClient.authentications['token_superuser'];
token_superuser.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_superuser.apiKeyPrefix = 'Token';

let apiInstance = new User.AccountUserApi();
apiInstance.createUser().then((data) => {
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

[token_superuser](../README.md#token_superuser)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteUser

> Object deleteUser(userId)

Delete a user

Delete a user.

### Example

```javascript
import User from 'user';
let defaultClient = User.ApiClient.instance;
// Configure API key authorization: token_superuser
let token_superuser = defaultClient.authentications['token_superuser'];
token_superuser.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_superuser.apiKeyPrefix = 'Token';

let apiInstance = new User.AccountUserApi();
let userId = x9KzsrACXZv8tPwlEDsKb6; // String | 
apiInstance.deleteUser(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

**Object**

### Authorization

[token_superuser](../README.md#token_superuser)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCurrentUser

> InlineResponse200 getCurrentUser()

Get the current user

Get the logged in user.

### Example

```javascript
import User from 'user';
let defaultClient = User.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new User.AccountUserApi();
apiInstance.getCurrentUser().then((data) => {
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

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUser

> InlineResponse200 getUser(userId)

Get a user

Get a specific user.

### Example

```javascript
import User from 'user';
let defaultClient = User.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new User.AccountUserApi();
let userId = x9KzsrACXZv8tPwlEDsKb6; // String | 
apiInstance.getUser(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## requestPasswordReset

> Object requestPasswordReset(userLogin)

Request a password reset

Requests a password reset for the specified user.

### Example

```javascript
import User from 'user';

let apiInstance = new User.AccountUserApi();
let userLogin = krisowner@example.com; // String | 
apiInstance.requestPasswordReset(userLogin).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userLogin** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUser

> InlineResponse200 updateUser(userId)

Update a user

Update a user. Only users with the role of &#x60;superuser&#x60; can make changes to other users on the account. Non-superusers may use this endpoint to make changes to their own account. Modifications to &#x60;login&#x60; email require a valid password in the request body. Two-factor attributes are not editable via this endpoint.

### Example

```javascript
import User from 'user';
let defaultClient = User.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new User.AccountUserApi();
let userId = x9KzsrACXZv8tPwlEDsKb6; // String | 
apiInstance.updateUser(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## updateUserPassword

> InlineResponse200 updateUserPassword()

Update the user&#39;s password

Update the user&#39;s password to a new one.

### Example

```javascript
import User from 'user';
let defaultClient = User.ApiClient.instance;
// Configure HTTP basic authorization: session_password_change
let session_password_change = defaultClient.authentications['session_password_change'];
session_password_change.username = 'YOUR USERNAME';
session_password_change.password = 'YOUR PASSWORD';

let apiInstance = new User.AccountUserApi();
apiInstance.updateUserPassword().then((data) => {
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

[session_password_change](../README.md#session_password_change)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

