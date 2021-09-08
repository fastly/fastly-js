# Fastly.LoggingLogentriesApi


```javascript
const apiInstance = new Fastly.LoggingLogentriesApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogLogentries**](LoggingLogentriesApi.md#createLogLogentries) | **POST** /service/{service_id}/version/{version_id}/logging/logentries | Create a Logentries log endpoint
[**deleteLogLogentries**](LoggingLogentriesApi.md#deleteLogLogentries) | **DELETE** /service/{service_id}/version/{version_id}/logging/logentries/{logging_logentries_name} | Delete a Logentries log endpoint
[**getLogLogentries**](LoggingLogentriesApi.md#getLogLogentries) | **GET** /service/{service_id}/version/{version_id}/logging/logentries/{logging_logentries_name} | Get a Logentries log endpoint
[**listLogLogentries**](LoggingLogentriesApi.md#listLogLogentries) | **GET** /service/{service_id}/version/{version_id}/logging/logentries | List Logentries log endpoints
[**updateLogLogentries**](LoggingLogentriesApi.md#updateLogLogentries) | **PUT** /service/{service_id}/version/{version_id}/logging/logentries/{logging_logentries_name} | Update a Logentries log endpoint



## `createLogLogentries`

```javascript
createLogLogentries({ service_id, version_id, [format], , [format_version], , [name], , [placement], , [response_condition], , [port], , [region], , [token], , [use_tls] })
```

Create a Logentry for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required
  format: "'%h %l %u %t \"%r\" %&gt;s %b'",  format_version: new Fastly.LoggingFormatVersion(),  name: "name_example",  placement: new Fastly.LoggingPlacement(),  response_condition: "response_condition_example",  port: 20000,  region: "region_example",  token: "token_example",  use_tls: new Fastly.LoggingUseTls(),
};

apiInstance.createLogLogentries(options)
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
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**port** | **Number** | The port number. | [optional] [default to 20000]
**region** | **String** | The region to which to stream logs. | [optional]
**token** | **String** | Use token based authentication ([https://logentries.com/doc/input-token/](https://logentries.com/doc/input-token/)). | [optional]
**use_tls** | [**LoggingUseTls**](../Model/LoggingUseTls.md) |  | [optional]

### Return type

[**LoggingLogentriesResponse**](LoggingLogentriesResponse.md)


## `deleteLogLogentries`

```javascript
deleteLogLogentries({ service_id, version_id, logging_logentries_name })
```

Delete the Logentry for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required  logging_logentries_name: "logging_logentries_name_example", // required

};

apiInstance.deleteLogLogentries(options)
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
**logging_logentries_name** | **String** |  |

### Return type

**Object**


## `getLogLogentries`

```javascript
getLogLogentries({ service_id, version_id, logging_logentries_name })
```

Get the Logentry for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required  logging_logentries_name: "logging_logentries_name_example", // required

};

apiInstance.getLogLogentries(options)
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
**logging_logentries_name** | **String** |  |

### Return type

[**LoggingLogentriesResponse**](LoggingLogentriesResponse.md)


## `listLogLogentries`

```javascript
listLogLogentries({ service_id, version_id })
```

List all of the Logentries for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required

};

apiInstance.listLogLogentries(options)
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

[**[LoggingLogentriesResponse]**](LoggingLogentriesResponse.md)


## `updateLogLogentries`

```javascript
updateLogLogentries({ service_id, version_id, logging_logentries_name, [format], , [format_version], , [name], , [placement], , [response_condition], , [port], , [region], , [token], , [use_tls] })
```

Update the Logentry for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required  logging_logentries_name: "logging_logentries_name_example", // required
  format: "'%h %l %u %t \"%r\" %&gt;s %b'",  format_version: new Fastly.LoggingFormatVersion(),  name: "name_example",  placement: new Fastly.LoggingPlacement(),  response_condition: "response_condition_example",  port: 20000,  region: "region_example",  token: "token_example",  use_tls: new Fastly.LoggingUseTls(),
};

apiInstance.updateLogLogentries(options)
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
**logging_logentries_name** | **String** |  |
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**port** | **Number** | The port number. | [optional] [default to 20000]
**region** | **String** | The region to which to stream logs. | [optional]
**token** | **String** | Use token based authentication ([https://logentries.com/doc/input-token/](https://logentries.com/doc/input-token/)). | [optional]
**use_tls** | [**LoggingUseTls**](../Model/LoggingUseTls.md) |  | [optional]

### Return type

[**LoggingLogentriesResponse**](LoggingLogentriesResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
