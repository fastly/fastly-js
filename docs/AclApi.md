# FastlyApi.AclApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAcl**](AclApi.md#createAcl) | **POST** /service/{service_id}/version/{version_id}/acl | Create a new ACL
[**deleteAcl**](AclApi.md#deleteAcl) | **DELETE** /service/{service_id}/version/{version_id}/acl/{acl_name} | Delete an ACL
[**getAcl**](AclApi.md#getAcl) | **GET** /service/{service_id}/version/{version_id}/acl/{acl_name} | Describe an ACL
[**listAcls**](AclApi.md#listAcls) | **GET** /service/{service_id}/version/{version_id}/acl | List ACLs
[**updateAcl**](AclApi.md#updateAcl) | **PUT** /service/{service_id}/version/{version_id}/acl/{acl_name} | Update an ACL



## createAcl

> ModelAcl createAcl(service_id, version_id, opts)

Create a new ACL

Create a new ACL attached to the specified service version. A new, empty ACL must be attached to a draft version of a service. The version associated with the ACL must be activated to be used.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.AclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'name': "name_example", // String | Name for the ACL. Must start with an alphanumeric character and contain only alphanumeric characters, underscores, and whitespace. Required.
  'id': "id_example" // String | Alphanumeric string identifying a ACL.
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
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **name** | **String**| Name for the ACL. Must start with an alphanumeric character and contain only alphanumeric characters, underscores, and whitespace. Required. | [optional] 
 **id** | **String**| Alphanumeric string identifying a ACL. | [optional] 

### Return type

[**ModelAcl**](ModelAcl.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteAcl

> Object deleteAcl(service_id, version_id, acl_name)

Delete an ACL

Delete an ACL from the specified service version. To remove an ACL from use, the ACL must be deleted from a draft version and the version without the ACL must be activated.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

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
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **acl_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAcl

> ModelAcl getAcl(service_id, version_id, acl_name)

Describe an ACL

Retrieve a single ACL by name for the version and service.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

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
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **acl_name** | **String**|  | 

### Return type

[**ModelAcl**](ModelAcl.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAcls

> [ModelAcl] listAcls(service_id, version_id)

List ACLs

List ACLs.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

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
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 

### Return type

[**[ModelAcl]**](ModelAcl.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAcl

> ModelAcl updateAcl(service_id, version_id, acl_name, opts)

Update an ACL

Update an ACL for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.AclApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let acl_name = "acl_name_example"; // String | 
let opts = {
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'name': "name_example", // String | Name for the ACL. Must start with an alphanumeric character and contain only alphanumeric characters, underscores, and whitespace. Required.
  'id': "id_example" // String | Alphanumeric string identifying a ACL.
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
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **acl_name** | **String**|  | 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **name** | **String**| Name for the ACL. Must start with an alphanumeric character and contain only alphanumeric characters, underscores, and whitespace. Required. | [optional] 
 **id** | **String**| Alphanumeric string identifying a ACL. | [optional] 

### Return type

[**ModelAcl**](ModelAcl.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

