# Fastly.LoggingPapertrailApi


```javascript
const apiInstance = new Fastly.LoggingPapertrailApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogPapertrail**](LoggingPapertrailApi.md#createLogPapertrail) | **POST** /service/{service_id}/version/{version_id}/logging/papertrail | Create a Papertrail log endpoint
[**deleteLogPapertrail**](LoggingPapertrailApi.md#deleteLogPapertrail) | **DELETE** /service/{service_id}/version/{version_id}/logging/papertrail/{logging_papertrail_name} | Delete a Papertrail log endpoint
[**getLogPapertrail**](LoggingPapertrailApi.md#getLogPapertrail) | **GET** /service/{service_id}/version/{version_id}/logging/papertrail/{logging_papertrail_name} | Get a Papertrail log endpoint
[**listLogPapertrail**](LoggingPapertrailApi.md#listLogPapertrail) | **GET** /service/{service_id}/version/{version_id}/logging/papertrail | List Papertrail log endpoints
[**updateLogPapertrail**](LoggingPapertrailApi.md#updateLogPapertrail) | **PUT** /service/{service_id}/version/{version_id}/logging/papertrail/{logging_papertrail_name} | Update a Papertrail log endpoint



## `createLogPapertrail`

```javascript
createLogPapertrail({ service_id, version_id, [address, ], [port] })
```

Create a Papertrail for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  address: "address_example",
  port: 514,
};

apiInstance.createLogPapertrail(options)
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
**address** | **String** | A hostname or IPv4 address. | [optional]
**port** | **Number** | The port number. | [optional] [default to 514]

### Return type

[**ServiceIdAndVersion**](ServiceIdAndVersion.md)


## `deleteLogPapertrail`

```javascript
deleteLogPapertrail({ service_id, version_id, logging_papertrail_name })
```

Delete the Papertrail for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_papertrail_name: "logging_papertrail_name_example", // required
};

apiInstance.deleteLogPapertrail(options)
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
**logging_papertrail_name** | **String** |  |

### Return type

**Object**


## `getLogPapertrail`

```javascript
getLogPapertrail({ service_id, version_id, logging_papertrail_name })
```

Get the Papertrail for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_papertrail_name: "logging_papertrail_name_example", // required
};

apiInstance.getLogPapertrail(options)
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
**logging_papertrail_name** | **String** |  |

### Return type

[**ServiceIdAndVersion**](ServiceIdAndVersion.md)


## `listLogPapertrail`

```javascript
listLogPapertrail({ service_id, version_id })
```

List all of the Papertrails for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listLogPapertrail(options)
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

[**[ServiceIdAndVersion]**](ServiceIdAndVersion.md)


## `updateLogPapertrail`

```javascript
updateLogPapertrail({ service_id, version_id, logging_papertrail_name, [address, ], [port] })
```

Update the Papertrail for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_papertrail_name: "logging_papertrail_name_example", // required
  address: "address_example",
  port: 514,
};

apiInstance.updateLogPapertrail(options)
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
**logging_papertrail_name** | **String** |  |
**address** | **String** | A hostname or IPv4 address. | [optional]
**port** | **Number** | The port number. | [optional] [default to 514]

### Return type

[**ServiceIdAndVersion**](ServiceIdAndVersion.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
