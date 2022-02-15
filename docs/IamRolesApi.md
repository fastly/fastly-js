# Fastly.IamRolesApi

```javascript
const apiInstance = new Fastly.IamRolesApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**deleteARole**](IamRolesApi.md#deleteARole) | **DELETE** /roles/{role_id} | Delete a role
[**getARole**](IamRolesApi.md#getARole) | **GET** /roles/{role_id} | Get a role
[**listRolePermissions**](IamRolesApi.md#listRolePermissions) | **GET** /roles/{role_id}/permissions | List permissions in a role
[**listRoles**](IamRolesApi.md#listRoles) | **GET** /roles | List roles


## `deleteARole`

```javascript
deleteARole({ role_id })
```

Delete a role.

### Example

```javascript
const options = {
  role_id: "role_id_example", // required
};

apiInstance.deleteARole(options)
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
**role_id** | **String** | Alphanumeric string identifying the role. |

### Return type

null (empty response body)


## `getARole`

```javascript
getARole({ role_id })
```

Get a role.

### Example

```javascript
const options = {
  role_id: "role_id_example", // required
};

apiInstance.getARole(options)
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
**role_id** | **String** | Alphanumeric string identifying the role. |

### Return type

**Object**


## `listRolePermissions`

```javascript
listRolePermissions({ role_id })
```

List all permissions in a role.

### Example

```javascript
const options = {
  role_id: "role_id_example", // required
};

apiInstance.listRolePermissions(options)
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
**role_id** | **String** | Alphanumeric string identifying the role. |

### Return type

**Object**


## `listRoles`

```javascript
listRoles({ , [per_page, ][page] })
```

List all roles.

### Example

```javascript
const options = {
  per_page: 20,
  page: 1,
};

apiInstance.listRoles(options)
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
