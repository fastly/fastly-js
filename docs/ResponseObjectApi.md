# FastlyApi.ResponseObjectApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createResponseObject**](ResponseObjectApi.md#createResponseObject) | **POST** /service/{service_id}/version/{version_id}/response_object | Create a Response object
[**deleteResponseObject**](ResponseObjectApi.md#deleteResponseObject) | **DELETE** /service/{service_id}/version/{version_id}/response_object/{response_object_name} | Delete a Response Object
[**getResponseObject**](ResponseObjectApi.md#getResponseObject) | **GET** /service/{service_id}/version/{version_id}/response_object/{response_object_name} | Get a Response object
[**listResponseObjects**](ResponseObjectApi.md#listResponseObjects) | **GET** /service/{service_id}/version/{version_id}/response_object | List Response objects
[**updateResponseObject**](ResponseObjectApi.md#updateResponseObject) | **PUT** /service/{service_id}/version/{version_id}/response_object/{response_object_name} | Update a Response object



## `createResponseObject`

> ResponseObjectResponse createResponseObject(service_id, version_id)

Create a Response object

Creates a new Response Object.

### Example

```javascript
let apiInstance = new FastlyApi.ResponseObjectApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.createResponseObject(service_id, version_id).then((data) => {
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

[**ResponseObjectResponse**](ResponseObjectResponse.md)


## `deleteResponseObject`

> Object deleteResponseObject(service_id, version_id, response_object_name)

Delete a Response Object

Deletes the specified Response Object.

### Example

```javascript
let apiInstance = new FastlyApi.ResponseObjectApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let response_object_name = "response_object_name_example"; // String | 
apiInstance.deleteResponseObject(service_id, version_id, response_object_name).then((data) => {
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
**response_object_name** | **String** |  |

### Return type

**Object**


## `getResponseObject`

> ResponseObjectResponse getResponseObject(service_id, version_id, response_object_name)

Get a Response object

Gets the specified Response Object.

### Example

```javascript
let apiInstance = new FastlyApi.ResponseObjectApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let response_object_name = "response_object_name_example"; // String | 
apiInstance.getResponseObject(service_id, version_id, response_object_name).then((data) => {
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
**response_object_name** | **String** |  |

### Return type

[**ResponseObjectResponse**](ResponseObjectResponse.md)


## `listResponseObjects`

> [ResponseObjectResponse] listResponseObjects(service_id, version_id)

List Response objects

Returns all Response Objects for the specified service and version.

### Example

```javascript
let apiInstance = new FastlyApi.ResponseObjectApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listResponseObjects(service_id, version_id).then((data) => {
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

[**[ResponseObjectResponse]**](ResponseObjectResponse.md)


## `updateResponseObject`

> ResponseObjectResponse updateResponseObject(service_id, version_id, response_object_name)

Update a Response object

Updates the specified Response Object.

### Example

```javascript
let apiInstance = new FastlyApi.ResponseObjectApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let response_object_name = "response_object_name_example"; // String | 
apiInstance.updateResponseObject(service_id, version_id, response_object_name).then((data) => {
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
**response_object_name** | **String** |  |

### Return type

[**ResponseObjectResponse**](ResponseObjectResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
