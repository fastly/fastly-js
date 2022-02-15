# Fastly.IamUserGroupsApi

```javascript
const apiInstance = new Fastly.IamUserGroupsApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**deleteAUserGroup**](IamUserGroupsApi.md#deleteAUserGroup) | **DELETE** /user-groups/{user_group_id} | Delete a user group
[**getAUserGroup**](IamUserGroupsApi.md#getAUserGroup) | **GET** /user-groups/{user_group_id} | Get a user group
[**listUserGroupMembers**](IamUserGroupsApi.md#listUserGroupMembers) | **GET** /user-groups/{user_group_id}/members | List members of a user group
[**listUserGroupRoles**](IamUserGroupsApi.md#listUserGroupRoles) | **GET** /user-groups/{user_group_id}/roles | List roles in a user group
[**listUserGroupServiceGroups**](IamUserGroupsApi.md#listUserGroupServiceGroups) | **GET** /user-groups/{user_group_id}/service-groups | List service groups in a user group
[**listUserGroups**](IamUserGroupsApi.md#listUserGroups) | **GET** /user-groups | List user groups


## `deleteAUserGroup`

```javascript
deleteAUserGroup({ user_group_id })
```

Delete a user group.

### Example

```javascript
const options = {
  user_group_id: "user_group_id_example", // required
};

apiInstance.deleteAUserGroup(options)
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
**user_group_id** | **String** | Alphanumeric string identifying the user group. |

### Return type

null (empty response body)


## `getAUserGroup`

```javascript
getAUserGroup({ user_group_id })
```

Get a user group.

### Example

```javascript
const options = {
  user_group_id: "user_group_id_example", // required
};

apiInstance.getAUserGroup(options)
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
**user_group_id** | **String** | Alphanumeric string identifying the user group. |

### Return type

**Object**


## `listUserGroupMembers`

```javascript
listUserGroupMembers({ user_group_id, [per_page, ][page] })
```

List members of a user group.

### Example

```javascript
const options = {
  user_group_id: "user_group_id_example", // required
  per_page: 20,
  page: 1,
};

apiInstance.listUserGroupMembers(options)
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
**user_group_id** | **String** | Alphanumeric string identifying the user group. |
**per_page** | **Number** | Number of records per page. | [optional] [defaults to 20]
**page** | **Number** | Current page. | [optional]

### Return type

**Object**


## `listUserGroupRoles`

```javascript
listUserGroupRoles({ user_group_id, [per_page, ][page] })
```

List roles in a user group.

### Example

```javascript
const options = {
  user_group_id: "user_group_id_example", // required
  per_page: 20,
  page: 1,
};

apiInstance.listUserGroupRoles(options)
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
**user_group_id** | **String** | Alphanumeric string identifying the user group. |
**per_page** | **Number** | Number of records per page. | [optional] [defaults to 20]
**page** | **Number** | Current page. | [optional]

### Return type

**Object**


## `listUserGroupServiceGroups`

```javascript
listUserGroupServiceGroups({ user_group_id, [per_page, ][page] })
```

List service groups in a user group.

### Example

```javascript
const options = {
  user_group_id: "user_group_id_example", // required
  per_page: 20,
  page: 1,
};

apiInstance.listUserGroupServiceGroups(options)
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
**user_group_id** | **String** | Alphanumeric string identifying the user group. |
**per_page** | **Number** | Number of records per page. | [optional] [defaults to 20]
**page** | **Number** | Current page. | [optional]

### Return type

**Object**


## `listUserGroups`

```javascript
listUserGroups({ , [per_page, ][page] })
```

List all user groups.

### Example

```javascript
const options = {
  per_page: 20,
  page: 1,
};

apiInstance.listUserGroups(options)
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
**per_page** | **Number** | Number of records per page. | [optional] [defaults to 20]
**page** | **Number** | Current page. | [optional]

### Return type

**Object**


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
