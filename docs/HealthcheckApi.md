# Fastly.HealthcheckApi


```javascript
const apiInstance = new Fastly.HealthcheckApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createHealthcheck**](HealthcheckApi.md#createHealthcheck) | **POST** /service/{service_id}/version/{version_id}/healthcheck | Create a healthcheck
[**deleteHealthcheck**](HealthcheckApi.md#deleteHealthcheck) | **DELETE** /service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name} | Delete a healthcheck
[**getHealthcheck**](HealthcheckApi.md#getHealthcheck) | **GET** /service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name} | Get a healthcheck
[**listHealthchecks**](HealthcheckApi.md#listHealthchecks) | **GET** /service/{service_id}/version/{version_id}/healthcheck | List healthchecks
[**updateHealthcheck**](HealthcheckApi.md#updateHealthcheck) | **PUT** /service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name} | Update a healthcheck



## `createHealthcheck`

```javascript
createHealthcheck({ service_id, version_id, [check_interval], , [comment], , [expected_response], , [host], , [http_version], , [initial], , [method], , [name], , [path], , [threshold], , [timeout], , [window] })
```

Create a healthcheck for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required
  check_interval: 56,

  comment: "comment_example",

  expected_response: 56,

  host: "host_example",

  http_version: "http_version_example",

  initial: 56,

  method: "method_example",

  name: "name_example",

  path: "path_example",

  threshold: 56,

  timeout: 56,

  window: 56,
};

apiInstance.createHealthcheck(options)
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
**check_interval** | **Number** | How often to run the healthcheck in milliseconds. | [optional]
**comment** | **String** | A freeform descriptive note. | [optional]
**expected_response** | **Number** | The status code expected from the host. | [optional]
**host** | **String** | Which host to check. | [optional]
**http_version** | **String** | Whether to use version 1.0 or 1.1 HTTP. | [optional]
**initial** | **Number** | When loading a config, the initial number of probes to be seen as OK. | [optional]
**method** | **String** | Which HTTP method to use. | [optional]
**name** | **String** | The name of the healthcheck. | [optional]
**path** | **String** | The path to check. | [optional]
**threshold** | **Number** | How many healthchecks must succeed to be considered healthy. | [optional]
**timeout** | **Number** | Timeout in milliseconds. | [optional]
**window** | **Number** | The number of most recent healthcheck queries to keep for this healthcheck. | [optional]

### Return type

[**HealthcheckResponse**](HealthcheckResponse.md)


## `deleteHealthcheck`

```javascript
deleteHealthcheck({ service_id, version_id, healthcheck_name })
```

Delete the healthcheck for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required  healthcheck_name: "healthcheck_name_example", // required};

apiInstance.deleteHealthcheck(options)
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
**healthcheck_name** | **String** |  |

### Return type

**Object**


## `getHealthcheck`

```javascript
getHealthcheck({ service_id, version_id, healthcheck_name })
```

Get the healthcheck for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required  healthcheck_name: "healthcheck_name_example", // required};

apiInstance.getHealthcheck(options)
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
**healthcheck_name** | **String** |  |

### Return type

[**HealthcheckResponse**](HealthcheckResponse.md)


## `listHealthchecks`

```javascript
listHealthchecks({ service_id, version_id })
```

List all of the healthchecks for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required};

apiInstance.listHealthchecks(options)
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

[**[HealthcheckResponse]**](HealthcheckResponse.md)


## `updateHealthcheck`

```javascript
updateHealthcheck({ service_id, version_id, healthcheck_name, [check_interval], , [comment], , [expected_response], , [host], , [http_version], , [initial], , [method], , [name], , [path], , [threshold], , [timeout], , [window] })
```

Update the healthcheck for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required  healthcheck_name: "healthcheck_name_example", // required
  check_interval: 56,

  comment: "comment_example",

  expected_response: 56,

  host: "host_example",

  http_version: "http_version_example",

  initial: 56,

  method: "method_example",

  name: "name_example",

  path: "path_example",

  threshold: 56,

  timeout: 56,

  window: 56,
};

apiInstance.updateHealthcheck(options)
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
**healthcheck_name** | **String** |  |
**check_interval** | **Number** | How often to run the healthcheck in milliseconds. | [optional]
**comment** | **String** | A freeform descriptive note. | [optional]
**expected_response** | **Number** | The status code expected from the host. | [optional]
**host** | **String** | Which host to check. | [optional]
**http_version** | **String** | Whether to use version 1.0 or 1.1 HTTP. | [optional]
**initial** | **Number** | When loading a config, the initial number of probes to be seen as OK. | [optional]
**method** | **String** | Which HTTP method to use. | [optional]
**name** | **String** | The name of the healthcheck. | [optional]
**path** | **String** | The path to check. | [optional]
**threshold** | **Number** | How many healthchecks must succeed to be considered healthy. | [optional]
**timeout** | **Number** | Timeout in milliseconds. | [optional]
**window** | **Number** | The number of most recent healthcheck queries to keep for this healthcheck. | [optional]

### Return type

[**HealthcheckResponse**](HealthcheckResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
