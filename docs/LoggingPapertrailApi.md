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
createLogPapertrail({ service_id, version_id, [format, ], [format_version, ], [name, ], [placement, ], [response_condition, ], [address, ], [port] })
```

Create a Papertrail for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  format: '%h %l %u %t "%r" %&gt;s %b',
  format_version: FormatVersionEnum.v2,
  name: "name_example",
  placement: ,
  response_condition: "response_condition_example",
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
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in &#x60;vcl_log&#x60; if &#x60;format_version&#x60; is set to &#x60;2&#x60; and in &#x60;vcl_deliver&#x60; if &#x60;format_version&#x60; is set to &#x60;1&#x60;.   | [optional] [default to FormatVersionEnum.v2]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with &#x60;format_version&#x60; of 2 are placed in &#x60;vcl_log&#x60; and those with &#x60;format_version&#x60; of 1 are placed in &#x60;vcl_deliver&#x60;.  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**address** | **String** | A hostname or IPv4 address. | [optional]
**port** | **Number** | The port number. | [optional] [default to 514]

### Return type

[**LoggingPapertrailResponse**](LoggingPapertrailResponse.md)


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

[**LoggingPapertrailResponse**](LoggingPapertrailResponse.md)


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

[**[LoggingPapertrailResponse]**](LoggingPapertrailResponse.md)


## `updateLogPapertrail`

```javascript
updateLogPapertrail({ service_id, version_id, logging_papertrail_name, [format, ], [format_version, ], [name, ], [placement, ], [response_condition, ], [address, ], [port] })
```

Update the Papertrail for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_papertrail_name: "logging_papertrail_name_example", // required
  format: '%h %l %u %t "%r" %&gt;s %b',
  format_version: FormatVersionEnum.v2,
  name: "name_example",
  placement: ,
  response_condition: "response_condition_example",
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
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in &#x60;vcl_log&#x60; if &#x60;format_version&#x60; is set to &#x60;2&#x60; and in &#x60;vcl_deliver&#x60; if &#x60;format_version&#x60; is set to &#x60;1&#x60;.   | [optional] [default to FormatVersionEnum.v2]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with &#x60;format_version&#x60; of 2 are placed in &#x60;vcl_log&#x60; and those with &#x60;format_version&#x60; of 1 are placed in &#x60;vcl_deliver&#x60;.  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**address** | **String** | A hostname or IPv4 address. | [optional]
**port** | **Number** | The port number. | [optional] [default to 514]

### Return type

[**LoggingPapertrailResponse**](LoggingPapertrailResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
