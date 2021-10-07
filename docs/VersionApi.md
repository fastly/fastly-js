# Fastly.VersionApi


```javascript
const apiInstance = new Fastly.VersionApi();
```
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

```javascript
activateServiceVersion({ service_id, version_id })
```

Activate the current version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.activateServiceVersion(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

[**VersionResponse**](VersionResponse.md)


## `cloneServiceVersion`

```javascript
cloneServiceVersion({ service_id, version_id })
```

Clone the current configuration into a new version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.cloneServiceVersion(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

[**Version**](Version.md)


## `createServiceVersion`

```javascript
createServiceVersion({ service_id })
```

Create a version for a particular service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
};

apiInstance.createServiceVersion(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |

### Return type

[**VersionCreateResponse**](VersionCreateResponse.md)


## `deactivateServiceVersion`

```javascript
deactivateServiceVersion({ service_id, version_id })
```

Deactivate the current version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.deactivateServiceVersion(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

[**VersionResponse**](VersionResponse.md)


## `getServiceVersion`

```javascript
getServiceVersion({ service_id, version_id })
```

Get the version for a particular service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.getServiceVersion(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

[**VersionResponse**](VersionResponse.md)


## `listServiceVersions`

```javascript
listServiceVersions({ service_id })
```

List the versions for a particular service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
};

apiInstance.listServiceVersions(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |

### Return type

[**[VersionResponse]**](VersionResponse.md)


## `lockServiceVersion`

```javascript
lockServiceVersion({ service_id, version_id })
```

Locks the specified version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.lockServiceVersion(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

[**Version**](Version.md)


## `updateServiceVersion`

```javascript
updateServiceVersion({ service_id, version_id, [active, ], [comment, ], [deployed, ], [locked, ], [number, ], [staging, ], [testing] })
```

Update a particular version for a particular service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  active: false,
  comment: &quot;comment_example&quot;,
  deployed: true,
  locked: false,
  number: 56,
  staging: false,
  testing: false,
};

apiInstance.updateServiceVersion(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

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

```javascript
validateServiceVersion({ service_id, version_id })
```

Validate the version for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.validateServiceVersion(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

**Object**


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
