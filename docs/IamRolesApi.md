# Fastly.IamRolesApi

```javascript
const apiInstance = new Fastly.IamRolesApi();
```
## Methods

> [!NOTE]
> All URIs are relative to `https://api.fastly.com`

Method | HTTP request | Description
------ | ------------ | -----------
[**addRolePermissions**](IamRolesApi.md#addRolePermissions) | **POST** /roles/{role_id}/permissions | Add permissions to a role
[**createARole**](IamRolesApi.md#createARole) | **POST** /roles | Create a role
[**deleteARole**](IamRolesApi.md#deleteARole) | **DELETE** /roles/{role_id} | Delete a role
[**getARole**](IamRolesApi.md#getARole) | **GET** /roles/{role_id} | Get a role
[**listRolePermissions**](IamRolesApi.md#listRolePermissions) | **GET** /roles/{role_id}/permissions | List permissions in a role
[**listRoles**](IamRolesApi.md#listRoles) | **GET** /roles | List roles
[**removeRolePermissions**](IamRolesApi.md#removeRolePermissions) | **DELETE** /roles/{role_id}/permissions | Remove permissions from a role
[**updateARole**](IamRolesApi.md#updateARole) | **PATCH** /roles/{role_id} | Update a role


## `addRolePermissions`

```javascript
addRolePermissions({ role_id, [request_body] })
```

Add permissions to a role.

### Example

```javascript
const options = {
  role_id: "role_id_example", // required
  request_body: {"permissions":[{"id":"2bxSauWWdQ5Hmg2d7WQiPU"},{"id":"5QoWSdPgkxvL9eoDMXRDr4"}]},
};

apiInstance.addRolePermissions(options)
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
**request_body** | [**{String: Object}**](Object.md) |  | [optional]

### Return type

**Object**


## `createARole`

```javascript
createARole({ , [request_body] })
```

Create a role.

### Example

```javascript
const options = {
  request_body: {"name":"Security Engineer"},
};

apiInstance.createARole(options)
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
**request_body** | [**{String: Object}**](Object.md) |  | [optional]

### Return type

**Object**


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


## `removeRolePermissions`

```javascript
removeRolePermissions({ role_id, [request_body] })
```

Remove permissions from a role.

### Example

```javascript
const options = {
  role_id: "role_id_example", // required
  request_body: {"permissions":[{"id":"2bxSauWWdQ5Hmg2d7WQiPU"},{"id":"5QoWSdPgkxvL9eoDMXRDr4"}]},
};

apiInstance.removeRolePermissions(options)
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
**request_body** | [**{String: Object}**](Object.md) |  | [optional]

### Return type

null (empty response body)


## `updateARole`

```javascript
updateARole({ role_id, [request_body] })
```

Update a role.

### Example

```javascript
const options = {
  role_id: "role_id_example", // required
  request_body: {"name":"Account Manager","description":"Manage users."},
};

apiInstance.updateARole(options)
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
**request_body** | [**{String: Object}**](Object.md) |  | [optional]

### Return type

**Object**


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
