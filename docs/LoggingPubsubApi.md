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
createLogGcpPubsub({ service_id, version_id, [name, ][placement, ][format_version, ][response_condition, ][format, ][user, ][secret_key, ][topic, ][project_id] })
```

Create a Pub/Sub logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  name: "name_example",
  placement: new Fastly.LoggingPlacement(),
  format_version: new Fastly.LoggingFormatVersion(),
  response_condition: "response_condition_example",
  format: '%h %l %u %t "%r" %&gt;s %b',
  user: "user_example",
  secret_key: "secret_key_example",
  topic: "topic_example",
  project_id: "project_id_example",
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
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**user** | **String** | Your Google Cloud Platform service account email address. The &#x60;client_email&#x60; field in your service account authentication JSON. Required. | [optional]
**secret_key** | **String** | Your Google Cloud Platform account secret key. The &#x60;private_key&#x60; field in your service account authentication JSON. Required. | [optional]
**topic** | **String** | The Google Cloud Pub/Sub topic to which logs will be published. Required. | [optional]
**project_id** | **String** | Your Google Cloud Platform project ID. Required | [optional]

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
updateLogGcpPubsub({ service_id, version_id, logging_google_pubsub_name, [name, ][placement, ][format_version, ][response_condition, ][format, ][user, ][secret_key, ][topic, ][project_id] })
```

Update a Pub/Sub logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_google_pubsub_name: "logging_google_pubsub_name_example", // required
  name: "name_example",
  placement: new Fastly.LoggingPlacement(),
  format_version: new Fastly.LoggingFormatVersion(),
  response_condition: "response_condition_example",
  format: '%h %l %u %t "%r" %&gt;s %b',
  user: "user_example",
  secret_key: "secret_key_example",
  topic: "topic_example",
  project_id: "project_id_example",
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
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
**user** | **String** | Your Google Cloud Platform service account email address. The &#x60;client_email&#x60; field in your service account authentication JSON. Required. | [optional]
**secret_key** | **String** | Your Google Cloud Platform account secret key. The &#x60;private_key&#x60; field in your service account authentication JSON. Required. | [optional]
**topic** | **String** | The Google Cloud Pub/Sub topic to which logs will be published. Required. | [optional]
**project_id** | **String** | Your Google Cloud Platform project ID. Required | [optional]

### Return type

[**LoggingGooglePubsubResponse**](LoggingGooglePubsubResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
