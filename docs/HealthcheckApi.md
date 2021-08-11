# FastlyApi.HealthcheckApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createHealthcheck**](HealthcheckApi.md#createHealthcheck) | **POST** /service/{service_id}/version/{version_id}/healthcheck | Create a healthcheck
[**deleteHealthcheck**](HealthcheckApi.md#deleteHealthcheck) | **DELETE** /service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name} | Delete a healthcheck
[**getHealthcheck**](HealthcheckApi.md#getHealthcheck) | **GET** /service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name} | Get a healthcheck
[**listHealthchecks**](HealthcheckApi.md#listHealthchecks) | **GET** /service/{service_id}/version/{version_id}/healthcheck | List healthchecks
[**updateHealthcheck**](HealthcheckApi.md#updateHealthcheck) | **PUT** /service/{service_id}/version/{version_id}/healthcheck/{healthcheck_name} | Update a healthcheck



## `createHealthcheck`

> HealthcheckResponse createHealthcheck(service_id, version_id, opts)

Create a healthcheck

Create a healthcheck for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.HealthcheckApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'check_interval': 56, // Number | How often to run the healthcheck in milliseconds.
  'comment': "comment_example", // String | A freeform descriptive note.
  'expected_response': 56, // Number | The status code expected from the host.
  'host': "host_example", // String | Which host to check.
  'http_version': "http_version_example", // String | Whether to use version 1.0 or 1.1 HTTP.
  'initial': 56, // Number | When loading a config, the initial number of probes to be seen as OK.
  'method': "method_example", // String | Which HTTP method to use.
  'name': "name_example", // String | The name of the healthcheck.
  'path': "path_example", // String | The path to check.
  'threshold': 56, // Number | How many healthchecks must succeed to be considered healthy.
  'timeout': 56, // Number | Timeout in milliseconds.
  'window': 56 // Number | The number of most recent healthcheck queries to keep for this healthcheck.
};
apiInstance.createHealthcheck(service_id, version_id, opts).then((data) => {
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

> Object deleteHealthcheck(service_id, version_id, healthcheck_name)

Delete a healthcheck

Delete the healthcheck for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.HealthcheckApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let healthcheck_name = "healthcheck_name_example"; // String | 
apiInstance.deleteHealthcheck(service_id, version_id, healthcheck_name).then((data) => {
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
**healthcheck_name** | **String** |  |

### Return type

**Object**


## `getHealthcheck`

> HealthcheckResponse getHealthcheck(service_id, version_id, healthcheck_name)

Get a healthcheck

Get the healthcheck for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.HealthcheckApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let healthcheck_name = "healthcheck_name_example"; // String | 
apiInstance.getHealthcheck(service_id, version_id, healthcheck_name).then((data) => {
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
**healthcheck_name** | **String** |  |

### Return type

[**HealthcheckResponse**](HealthcheckResponse.md)


## `listHealthchecks`

> [HealthcheckResponse] listHealthchecks(service_id, version_id)

List healthchecks

List all of the healthchecks for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.HealthcheckApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listHealthchecks(service_id, version_id).then((data) => {
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

[**[HealthcheckResponse]**](HealthcheckResponse.md)


## `updateHealthcheck`

> HealthcheckResponse updateHealthcheck(service_id, version_id, healthcheck_name, opts)

Update a healthcheck

Update the healthcheck for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.HealthcheckApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let healthcheck_name = "healthcheck_name_example"; // String | 
let opts = {
  'check_interval': 56, // Number | How often to run the healthcheck in milliseconds.
  'comment': "comment_example", // String | A freeform descriptive note.
  'expected_response': 56, // Number | The status code expected from the host.
  'host': "host_example", // String | Which host to check.
  'http_version': "http_version_example", // String | Whether to use version 1.0 or 1.1 HTTP.
  'initial': 56, // Number | When loading a config, the initial number of probes to be seen as OK.
  'method': "method_example", // String | Which HTTP method to use.
  'name': "name_example", // String | The name of the healthcheck.
  'path': "path_example", // String | The path to check.
  'threshold': 56, // Number | How many healthchecks must succeed to be considered healthy.
  'timeout': 56, // Number | Timeout in milliseconds.
  'window': 56 // Number | The number of most recent healthcheck queries to keep for this healthcheck.
};
apiInstance.updateHealthcheck(service_id, version_id, healthcheck_name, opts).then((data) => {
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
