# Fastly.ResourceApi

```javascript
const apiInstance = new Fastly.ResourceApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createResource**](ResourceApi.md#createResource) | **POST** /service/{service_id}/version/{version_id}/resource | Create a resource
[**deleteResource**](ResourceApi.md#deleteResource) | **DELETE** /service/{service_id}/version/{version_id}/resource/{id} | Delete a resource
[**getResource**](ResourceApi.md#getResource) | **GET** /service/{service_id}/version/{version_id}/resource/{id} | Display a resource
[**listResources**](ResourceApi.md#listResources) | **GET** /service/{service_id}/version/{version_id}/resource | List resources
[**updateResource**](ResourceApi.md#updateResource) | **PUT** /service/{service_id}/version/{version_id}/resource/{id} | Update a resource


## `createResource`

```javascript
createResource({ service_id, version_id, [name, ][resource_id] })
```

Create a resource.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  name: "name_example",
  resource_id: "resource_id_example",
};

apiInstance.createResource(options)
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
**name** | **String** | The name of the resource. | [optional]
**resource_id** | **String** | The ID of the linked resource. | [optional]

### Return type

[**ResourceResponse**](ResourceResponse.md)


## `deleteResource`

```javascript
deleteResource({ service_id, version_id, id })
```

Delete a resource.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  id: "id_example", // required
};

apiInstance.deleteResource(options)
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
**id** | **String** | An alphanumeric string identifying the resource link. |

### Return type

[**InlineResponse200**](InlineResponse200.md)


## `getResource`

```javascript
getResource({ service_id, version_id, id })
```

Display a resource by its identifier.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  id: "id_example", // required
};

apiInstance.getResource(options)
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
**id** | **String** | An alphanumeric string identifying the resource link. |

### Return type

[**ResourceResponse**](ResourceResponse.md)


## `listResources`

```javascript
listResources({ service_id, version_id })
```

List resources.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listResources(options)
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

[**[ResourceResponse]**](ResourceResponse.md)


## `updateResource`

```javascript
updateResource({ service_id, version_id, id, [name] })
```

Update a resource.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  id: "id_example", // required
  name: "name_example",
};

apiInstance.updateResource(options)
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
**id** | **String** | An alphanumeric string identifying the resource link. |
**name** | **String** | The name of the resource. | [optional]

### Return type

[**ResourceResponse**](ResourceResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
