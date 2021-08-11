# FastlyApi.AclApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createAcl**](AclApi.md#createAcl) | **POST** /service/{service_id}/version/{version_id}/acl | Create a new ACL
[**deleteAcl**](AclApi.md#deleteAcl) | **DELETE** /service/{service_id}/version/{version_id}/acl/{acl_name} | Delete an ACL
[**getAcl**](AclApi.md#getAcl) | **GET** /service/{service_id}/version/{version_id}/acl/{acl_name} | Describe an ACL
[**listAcls**](AclApi.md#listAcls) | **GET** /service/{service_id}/version/{version_id}/acl | List ACLs
[**updateAcl**](AclApi.md#updateAcl) | **PUT** /service/{service_id}/version/{version_id}/acl/{acl_name} | Update an ACL



## `createAcl`

> AclResponse createAcl(service_id, version_id, opts)

Create a new ACL

Create a new ACL attached to the specified service version. A new, empty ACL must be attached to a draft version of a service. The version associated with the ACL must be activated to be used.

### Example

```javascript
let apiInstance = new FastlyApi.AclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'name': "name_example" // String | Name for the ACL. Must start with an alphanumeric character and contain only alphanumeric characters, underscores, and whitespace.
};
apiInstance.createAcl(service_id, version_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**name** | **String** | Name for the ACL. Must start with an alphanumeric character and contain only alphanumeric characters, underscores, and whitespace. | [optional]

### Return type

[**AclResponse**](AclResponse.md)


## `deleteAcl`

> Object deleteAcl(service_id, version_id, acl_name)

Delete an ACL

Delete an ACL from the specified service version. To remove an ACL from use, the ACL must be deleted from a draft version and the version without the ACL must be activated.

### Example

```javascript
let apiInstance = new FastlyApi.AclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let acl_name = "acl_name_example"; // String | 
apiInstance.deleteAcl(service_id, version_id, acl_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**acl_name** | **String** |  |

### Return type

**Object**


## `getAcl`

> AclResponse getAcl(service_id, version_id, acl_name)

Describe an ACL

Retrieve a single ACL by name for the version and service.

### Example

```javascript
let apiInstance = new FastlyApi.AclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let acl_name = "acl_name_example"; // String | 
apiInstance.getAcl(service_id, version_id, acl_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**acl_name** | **String** |  |

### Return type

[**AclResponse**](AclResponse.md)


## `listAcls`

> [AclResponse] listAcls(service_id, version_id)

List ACLs

List ACLs.

### Example

```javascript
let apiInstance = new FastlyApi.AclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listAcls(service_id, version_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

[**[AclResponse]**](AclResponse.md)


## `updateAcl`

> Acl updateAcl(service_id, version_id, acl_name, opts)

Update an ACL

Update an ACL for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.AclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let acl_name = "acl_name_example"; // String | 
let opts = {
  'name': "name_example" // String | Name for the ACL. Must start with an alphanumeric character and contain only alphanumeric characters, underscores, and whitespace.
};
apiInstance.updateAcl(service_id, version_id, acl_name, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**acl_name** | **String** |  |
**name** | **String** | Name for the ACL. Must start with an alphanumeric character and contain only alphanumeric characters, underscores, and whitespace. | [optional]

### Return type

[**Acl**](Acl.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
