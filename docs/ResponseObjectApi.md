# Fastly.ResponseObjectApi

```javascript
const apiInstance = new Fastly.ResponseObjectApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**deleteResponseObject**](ResponseObjectApi.md#deleteResponseObject) | **DELETE** /service/{service_id}/version/{version_id}/response_object/{response_object_name} | Delete a Response Object
[**getResponseObject**](ResponseObjectApi.md#getResponseObject) | **GET** /service/{service_id}/version/{version_id}/response_object/{response_object_name} | Get a Response object
[**listResponseObjects**](ResponseObjectApi.md#listResponseObjects) | **GET** /service/{service_id}/version/{version_id}/response_object | List Response objects


## `deleteResponseObject`

```javascript
deleteResponseObject({ service_id, version_id, response_object_name })
```

Deletes the specified Response Object.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  response_object_name: "response_object_name_example", // required
};

apiInstance.deleteResponseObject(options)
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
**service_id** | **String** | Alphanumeric string identifying the service. |
**version_id** | **Number** | Integer identifying a service version. |
**response_object_name** | **String** | Name for the request settings. |

### Return type

[**InlineResponse200**](InlineResponse200.md)


## `getResponseObject`

```javascript
getResponseObject({ service_id, version_id, response_object_name })
```

Gets the specified Response Object.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  response_object_name: "response_object_name_example", // required
};

apiInstance.getResponseObject(options)
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
**service_id** | **String** | Alphanumeric string identifying the service. |
**version_id** | **Number** | Integer identifying a service version. |
**response_object_name** | **String** | Name for the request settings. |

### Return type

[**ResponseObjectResponse**](ResponseObjectResponse.md)


## `listResponseObjects`

```javascript
listResponseObjects({ service_id, version_id })
```

Returns all Response Objects for the specified service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listResponseObjects(options)
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
**service_id** | **String** | Alphanumeric string identifying the service. |
**version_id** | **Number** | Integer identifying a service version. |

### Return type

[**[ResponseObjectResponse]**](ResponseObjectResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
