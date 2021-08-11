# FastlyApi.UserApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createUser**](UserApi.md#createUser) | **POST** /user | Create a user
[**deleteUser**](UserApi.md#deleteUser) | **DELETE** /user/{user_id} | Delete a user
[**getCurrentUser**](UserApi.md#getCurrentUser) | **GET** /current_user | Get the current user
[**getUser**](UserApi.md#getUser) | **GET** /user/{user_id} | Get a user
[**requestPasswordReset**](UserApi.md#requestPasswordReset) | **POST** /user/{user_login}/password/request_reset | Request a password reset
[**updateUser**](UserApi.md#updateUser) | **PUT** /user/{user_id} | Update a user
[**updateUserPassword**](UserApi.md#updateUserPassword) | **POST** /current_user/password | Update the user&#39;s password



## `createUser`

> UserResponse createUser(opts)

Create a user

Create a user.

### Example

```javascript
let apiInstance = new FastlyApi.UserApi();
let opts = {
  'login': "login_example", // String | The login associated with the user (typically, an email address).
  'name': "name_example", // String | The real life name of the user.
  'limit_services': true, // Boolean | Indicates that the user has limited access to the customer's services.
  'locked': true, // Boolean | Indicates whether the is account is locked for editing or not.
  'require_new_password': true, // Boolean | Indicates if a new password is required at next login.
  'role': new FastlyApi.RoleUser(), // RoleUser | 
  'two_factor_auth_enabled': true, // Boolean | Indicates if 2FA is enabled on the user.
  'two_factor_setup_required': true // Boolean | Indicates if 2FA is required by the user's customer account.
};
apiInstance.createUser(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**login** | **String** | The login associated with the user (typically, an email address). | [optional]
**name** | **String** | The real life name of the user. | [optional]
**limit_services** | **Boolean** | Indicates that the user has limited access to the customer&#39;s services. | [optional]
**locked** | **Boolean** | Indicates whether the is account is locked for editing or not. | [optional]
**require_new_password** | **Boolean** | Indicates if a new password is required at next login. | [optional]
**role** | [**RoleUser**](../Model/RoleUser.md) |  | [optional]
**two_factor_auth_enabled** | **Boolean** | Indicates if 2FA is enabled on the user. | [optional]
**two_factor_setup_required** | **Boolean** | Indicates if 2FA is required by the user&#39;s customer account. | [optional]

### Return type

[**UserResponse**](UserResponse.md)


## `deleteUser`

> Object deleteUser(user_id)

Delete a user

Delete a user.

### Example

```javascript
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
**user_id** | **String** |  |

### Return type

**Object**


## `getCurrentUser`

> UserResponse getCurrentUser()

Get the current user

Get the logged in user.

### Example

```javascript
let apiInstance = new FastlyApi.UserApi();
apiInstance.getCurrentUser().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameters.

### Return type

[**UserResponse**](UserResponse.md)


## `getUser`

> UserResponse getUser(user_id)

Get a user

Get a specific user.

### Example

```javascript
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
**user_id** | **String** |  |

### Return type

[**UserResponse**](UserResponse.md)


## `requestPasswordReset`

> Object requestPasswordReset(user_login)

Request a password reset

Requests a password reset for the specified user.

### Example

```javascript
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
**user_login** | **String** |  |

### Return type

**Object**


## `updateUser`

> UserResponse updateUser(user_id, opts)

Update a user

Update a user. Only users with the role of `superuser` can make changes to other users on the account. Non-superusers may use this endpoint to make changes to their own account. Modifications to `login` email require a valid password in the request body. Two-factor attributes are not editable via this endpoint.

### Example

```javascript
let apiInstance = new FastlyApi.UserApi();
let user_id = "user_id_example"; // String | 
let opts = {
  'login': "login_example", // String | The login associated with the user (typically, an email address).
  'name': "name_example", // String | The real life name of the user.
  'limit_services': true, // Boolean | Indicates that the user has limited access to the customer's services.
  'locked': true, // Boolean | Indicates whether the is account is locked for editing or not.
  'require_new_password': true, // Boolean | Indicates if a new password is required at next login.
  'role': new FastlyApi.RoleUser(), // RoleUser | 
  'two_factor_auth_enabled': true, // Boolean | Indicates if 2FA is enabled on the user.
  'two_factor_setup_required': true // Boolean | Indicates if 2FA is required by the user's customer account.
};
apiInstance.updateUser(user_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**user_id** | **String** |  |
**login** | **String** | The login associated with the user (typically, an email address). | [optional]
**name** | **String** | The real life name of the user. | [optional]
**limit_services** | **Boolean** | Indicates that the user has limited access to the customer&#39;s services. | [optional]
**locked** | **Boolean** | Indicates whether the is account is locked for editing or not. | [optional]
**require_new_password** | **Boolean** | Indicates if a new password is required at next login. | [optional]
**role** | [**RoleUser**](../Model/RoleUser.md) |  | [optional]
**two_factor_auth_enabled** | **Boolean** | Indicates if 2FA is enabled on the user. | [optional]
**two_factor_setup_required** | **Boolean** | Indicates if 2FA is required by the user&#39;s customer account. | [optional]

### Return type

[**UserResponse**](UserResponse.md)


## `updateUserPassword`

> UserResponse updateUserPassword(opts)

Update the user&#39;s password

Update the user's password to a new one.

### Example

```javascript
let apiInstance = new FastlyApi.UserApi();
let opts = {
  'old_password': "old_password_example", // String | The user's current password.
  'new_password': "new_password_example" // String | The user's new password.
};
apiInstance.updateUserPassword(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**old_password** | **String** | The user&#39;s current password. | [optional]
**new_password** | **String** | The user&#39;s new password. | [optional]

### Return type

[**UserResponse**](UserResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
