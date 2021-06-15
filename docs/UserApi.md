# FastlyApi.UserApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UserApi.md#createUser) | **POST** /user | Create a user
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /user/{user_id} | Delete a user
[**getCurrentUser**](UserApi.md#getCurrentUser) | **GET** /current_user | Get the current user
[**getUser**](UserApi.md#getUser) | **GET** /user/{user_id} | Get a user
[**requestPasswordReset**](UserApi.md#requestPasswordReset) | **POST** /user/{user_login}/password/request_reset | Request a password reset
[**updateUser**](UserApi.md#updateUser) | **PUT** /user/{user_id} | Update a user
[**updateUserPassword**](UserApi.md#updateUserPassword) | **POST** /current_user/password | Update the user&#39;s password



## createUser

> ModelUser createUser()

Create a user

Create a user.

### Example

```javascript
import FastlyApi from 'fastly_api';

let apiInstance = new FastlyApi.UserApi();
apiInstance.createUser().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ModelUser**](ModelUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteUser

> Object deleteUser(user_id)

Delete a user

Delete a user.

### Example

```javascript
import FastlyApi from 'fastly_api';

let apiInstance = new FastlyApi.UserApi();
let user_id = "user_id_example"; // String | 
apiInstance.deleteUser(user_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCurrentUser

> ModelUser getCurrentUser()

Get the current user

Get the logged in user.

### Example

```javascript
import FastlyApi from 'fastly_api';

let apiInstance = new FastlyApi.UserApi();
apiInstance.getCurrentUser().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ModelUser**](ModelUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUser

> ModelUser getUser(user_id)

Get a user

Get a specific user.

### Example

```javascript
import FastlyApi from 'fastly_api';

let apiInstance = new FastlyApi.UserApi();
let user_id = "user_id_example"; // String | 
apiInstance.getUser(user_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **String**|  | 

### Return type

[**ModelUser**](ModelUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## requestPasswordReset

> Object requestPasswordReset(user_login)

Request a password reset

Requests a password reset for the specified user.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.UserApi();
let user_login = "user_login_example"; // String | 
apiInstance.requestPasswordReset(user_login).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_login** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUser

> ModelUser updateUser(user_id)

Update a user

Update a user. Only users with the role of &#x60;superuser&#x60; can make changes to other users on the account. Non-superusers may use this endpoint to make changes to their own account. Modifications to &#x60;login&#x60; email require a valid password in the request body. Two-factor attributes are not editable via this endpoint.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.UserApi();
let user_id = "user_id_example"; // String | 
apiInstance.updateUser(user_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **String**|  | 

### Return type

[**ModelUser**](ModelUser.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## updateUserPassword

> ModelUser updateUserPassword()

Update the user&#39;s password

Update the user&#39;s password to a new one.

### Example

```javascript
import FastlyApi from 'fastly_api';

let apiInstance = new FastlyApi.UserApi();
apiInstance.updateUserPassword().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ModelUser**](ModelUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

