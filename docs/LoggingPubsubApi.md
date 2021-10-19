# Fastly.LoggingPubsubApi


```javascript
const apiInstance = new Fastly.LoggingPubsubApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogGcpPubsub**](LoggingPubsubApi.md#createLogGcpPubsub) | **POST** /service/{service_id}/version/{version_id}/logging/pubsub | Create a GCP Cloud Pub/Sub log endpoint
[**deleteLogGcpPubsub**](LoggingPubsubApi.md#deleteLogGcpPubsub) | **DELETE** /service/{service_id}/version/{version_id}/logging/pubsub/{logging_google_pubsub_name} | Delete a GCP Cloud Pub/Sub log endpoint
[**getLogGcpPubsub**](LoggingPubsubApi.md#getLogGcpPubsub) | **GET** /service/{service_id}/version/{version_id}/logging/pubsub/{logging_google_pubsub_name} | Get a GCP Cloud Pub/Sub log endpoint
[**listLogGcpPubsub**](LoggingPubsubApi.md#listLogGcpPubsub) | **GET** /service/{service_id}/version/{version_id}/logging/pubsub | List GCP Cloud Pub/Sub log endpoints
[**updateLogGcpPubsub**](LoggingPubsubApi.md#updateLogGcpPubsub) | **PUT** /service/{service_id}/version/{version_id}/logging/pubsub/{logging_google_pubsub_name} | Update a GCP Cloud Pub/Sub log endpoint



## `createLogGcpPubsub`

```javascript
createLogGcpPubsub({ service_id, version_id, [format, ][format_version, ][name, ][placement, ][response_condition, ][secret_key, ][user, ][project_id, ][topic] })
```

Create a Pub/Sub logging object for a particular service and version.

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
  secret_key: "secret_key_example",
  user: "user_example",
  project_id: "project_id_example",
  topic: "topic_example",
};

apiInstance.createLogGcpPubsub(options)
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
**secret_key** | **String** | Your Google Cloud Platform account secret key. The &#x60;private_key&#x60; field in your service account authentication JSON. Required. | [optional]
**user** | **String** | Your Google Cloud Platform service account email address. The &#x60;client_email&#x60; field in your service account authentication JSON. Required. | [optional]
**project_id** | **String** | Your Google Cloud Platform project ID. Required | [optional]
**topic** | **String** | The Google Cloud Pub/Sub topic to which logs will be published. Required. | [optional]

### Return type

[**LoggingGooglePubsubResponse**](LoggingGooglePubsubResponse.md)


## `deleteLogGcpPubsub`

```javascript
deleteLogGcpPubsub({ service_id, version_id, logging_google_pubsub_name })
```

Delete a Pub/Sub logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_google_pubsub_name: "logging_google_pubsub_name_example", // required
};

apiInstance.deleteLogGcpPubsub(options)
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
**logging_google_pubsub_name** | **String** |  |

### Return type

**Object**


## `getLogGcpPubsub`

```javascript
getLogGcpPubsub({ service_id, version_id, logging_google_pubsub_name })
```

Get the details for a Pub/Sub logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_google_pubsub_name: "logging_google_pubsub_name_example", // required
};

apiInstance.getLogGcpPubsub(options)
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
**logging_google_pubsub_name** | **String** |  |

### Return type

[**LoggingGooglePubsubResponse**](LoggingGooglePubsubResponse.md)


## `listLogGcpPubsub`

```javascript
listLogGcpPubsub({ service_id, version_id })
```

List all of the Pub/Sub logging objects for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listLogGcpPubsub(options)
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

[**[LoggingGooglePubsubResponse]**](LoggingGooglePubsubResponse.md)


## `updateLogGcpPubsub`

```javascript
updateLogGcpPubsub({ service_id, version_id, logging_google_pubsub_name, [format, ][format_version, ][name, ][placement, ][response_condition, ][secret_key, ][user, ][project_id, ][topic] })
```

Update a Pub/Sub logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_google_pubsub_name: "logging_google_pubsub_name_example", // required
  format: '%h %l %u %t "%r" %&gt;s %b',
  format_version: FormatVersionEnum.v2,
  name: "name_example",
  placement: ,
  response_condition: "response_condition_example",
  secret_key: "secret_key_example",
  user: "user_example",
  project_id: "project_id_example",
  topic: "topic_example",
};

apiInstance.updateLogGcpPubsub(options)
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
**logging_google_pubsub_name** | **String** |  |
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in &#x60;vcl_log&#x60; if &#x60;format_version&#x60; is set to &#x60;2&#x60; and in &#x60;vcl_deliver&#x60; if &#x60;format_version&#x60; is set to &#x60;1&#x60;.   | [optional] [default to FormatVersionEnum.v2]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with &#x60;format_version&#x60; of 2 are placed in &#x60;vcl_log&#x60; and those with &#x60;format_version&#x60; of 1 are placed in &#x60;vcl_deliver&#x60;.  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**secret_key** | **String** | Your Google Cloud Platform account secret key. The &#x60;private_key&#x60; field in your service account authentication JSON. Required. | [optional]
**user** | **String** | Your Google Cloud Platform service account email address. The &#x60;client_email&#x60; field in your service account authentication JSON. Required. | [optional]
**project_id** | **String** | Your Google Cloud Platform project ID. Required | [optional]
**topic** | **String** | The Google Cloud Pub/Sub topic to which logs will be published. Required. | [optional]

### Return type

[**LoggingGooglePubsubResponse**](LoggingGooglePubsubResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
