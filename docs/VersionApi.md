# FastlyApi.VersionApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**activateServiceVersion**](VersionApi.md#activateServiceVersion) | **PUT** /service/{service_id}/version/{version_id}/activate | Activate a service version
[**cloneServiceVersion**](VersionApi.md#cloneServiceVersion) | **PUT** /service/{service_id}/version/{version_id}/clone | Clone a service version
[**createServiceVersion**](VersionApi.md#createServiceVersion) | **POST** /service/{service_id}/version | Create a service version
[**deactivateServiceVersion**](VersionApi.md#deactivateServiceVersion) | **PUT** /service/{service_id}/version/{version_id}/deactivate | Deactivate a service version
[**getServiceVersion**](VersionApi.md#getServiceVersion) | **GET** /service/{service_id}/version/{version_id} | Get a version of a service
[**listServiceVersions**](VersionApi.md#listServiceVersions) | **GET** /service/{service_id}/version | List versions of a service
[**lockServiceVersion**](VersionApi.md#lockServiceVersion) | **PUT** /service/{service_id}/version/{version_id}/lock | Lock a service version
[**updateServiceVersion**](VersionApi.md#updateServiceVersion) | **PUT** /service/{service_id}/version/{version_id} | Update a service version
[**validateServiceVersion**](VersionApi.md#validateServiceVersion) | **GET** /service/{service_id}/version/{version_id}/validate | Validate a service version



## `activateServiceVersion`

> activateServiceVersion(service_id, version_id)

Activate a service version

Activate the current version.

### Example

```javascript
let apiInstance = new FastlyApi.VersionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.activateServiceVersion(service_id, version_id).then((data) => {
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

[**VersionResponse**](VersionResponse.md)


## `cloneServiceVersion`

> cloneServiceVersion(service_id, version_id)

Clone a service version

Clone the current configuration into a new version.

### Example

```javascript
let apiInstance = new FastlyApi.VersionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.cloneServiceVersion(service_id, version_id).then((data) => {
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

[**Version**](Version.md)


## `createServiceVersion`

> createServiceVersion(service_id)

Create a service version

Create a version for a particular service.

### Example

```javascript
let apiInstance = new FastlyApi.VersionApi();
let service_id = "service_id_example"; // String | 
apiInstance.createServiceVersion(service_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |

### Return type

[**VersionCreateResponse**](VersionCreateResponse.md)


## `deactivateServiceVersion`

> deactivateServiceVersion(service_id, version_id)

Deactivate a service version

Deactivate the current version.

### Example

```javascript
let apiInstance = new FastlyApi.VersionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.deactivateServiceVersion(service_id, version_id).then((data) => {
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

[**VersionResponse**](VersionResponse.md)


## `getServiceVersion`

> getServiceVersion(service_id, version_id)

Get a version of a service

Get the version for a particular service.

### Example

```javascript
let apiInstance = new FastlyApi.VersionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.getServiceVersion(service_id, version_id).then((data) => {
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

[**VersionResponse**](VersionResponse.md)


## `listServiceVersions`

> listServiceVersions(service_id)

List versions of a service

List the versions for a particular service.

### Example

```javascript
let apiInstance = new FastlyApi.VersionApi();
let service_id = "service_id_example"; // String | 
apiInstance.listServiceVersions(service_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |

### Return type

[**[VersionResponse]**](VersionResponse.md)


## `lockServiceVersion`

> lockServiceVersion(service_id, version_id)

Lock a service version

Locks the specified version.

### Example

```javascript
let apiInstance = new FastlyApi.VersionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.lockServiceVersion(service_id, version_id).then((data) => {
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

[**Version**](Version.md)


## `updateServiceVersion`

> updateServiceVersion(service_id, version_id, opts)

Update a service version

Update a particular version for a particular service.

### Example

```javascript
let apiInstance = new FastlyApi.VersionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'active': false, // Boolean | Whether this is the active version or not.
  'comment': "comment_example", // String | A freeform descriptive note.
  'deployed': true, // Boolean | Unused at this time.
  'locked': false, // Boolean | Whether this version is locked or not. Objects can not be added or edited on locked versions.
  'number': 56, // Number | The number of this version.
  'staging': false, // Boolean | Unused at this time.
  'testing': false // Boolean | Unused at this time.
};
apiInstance.updateServiceVersion(service_id, version_id, opts).then((data) => {
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
**active** | **Boolean** | Whether this is the active version or not. | [optional] [default to false]
**comment** | **String** | A freeform descriptive note. | [optional]
**deployed** | **Boolean** | Unused at this time. | [optional]
**locked** | **Boolean** | Whether this version is locked or not. Objects can not be added or edited on locked versions. | [optional] [default to false]
**number** | **Number** | The number of this version. | [optional]
**staging** | **Boolean** | Unused at this time. | [optional] [default to false]
**testing** | **Boolean** | Unused at this time. | [optional] [default to false]

### Return type

[**VersionResponse**](VersionResponse.md)


## `validateServiceVersion`

> validateServiceVersion(service_id, version_id)

Validate a service version

Validate the version for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.VersionApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.validateServiceVersion(service_id, version_id).then((data) => {
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

**Object**


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
