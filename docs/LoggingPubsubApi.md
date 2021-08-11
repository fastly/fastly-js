# FastlyApi.LoggingPubsubApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogGcpPubsub**](LoggingPubsubApi.md#createLogGcpPubsub) | **POST** /service/{service_id}/version/{version_id}/logging/pubsub | Create a GCP Cloud Pub/Sub log endpoint
[**deleteLogGcpPubsub**](LoggingPubsubApi.md#deleteLogGcpPubsub) | **DELETE** /service/{service_id}/version/{version_id}/logging/pubsub/{logging_google_pubsub_name} | Delete a GCP Cloud Pub/Sub log endpoint
[**getLogGcpPubsub**](LoggingPubsubApi.md#getLogGcpPubsub) | **GET** /service/{service_id}/version/{version_id}/logging/pubsub/{logging_google_pubsub_name} | Get a GCP Cloud Pub/Sub log endpoint
[**listLogGcpPubsub**](LoggingPubsubApi.md#listLogGcpPubsub) | **GET** /service/{service_id}/version/{version_id}/logging/pubsub | List GCP Cloud Pub/Sub log endpoints
[**updateLogGcpPubsub**](LoggingPubsubApi.md#updateLogGcpPubsub) | **PUT** /service/{service_id}/version/{version_id}/logging/pubsub/{logging_google_pubsub_name} | Update a GCP Cloud Pub/Sub log endpoint



## `createLogGcpPubsub`

> createLogGcpPubsub(service_id, version_id, opts)

Create a GCP Cloud Pub/Sub log endpoint

Create a Pub/Sub logging object for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingPubsubApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'user': "user_example", // String | Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
  'secret_key': "secret_key_example", // String | Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
  'topic': "topic_example", // String | The Google Cloud Pub/Sub topic to which logs will be published. Required.
  'project_id': "project_id_example" // String | Your Google Cloud Platform project ID. Required
};
apiInstance.createLogGcpPubsub(service_id, version_id, opts).then((data) => {
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

> deleteLogGcpPubsub(service_id, version_id, logging_google_pubsub_name)

Delete a GCP Cloud Pub/Sub log endpoint

Delete a Pub/Sub logging object for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingPubsubApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_google_pubsub_name = "logging_google_pubsub_name_example"; // String | 
apiInstance.deleteLogGcpPubsub(service_id, version_id, logging_google_pubsub_name).then((data) => {
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
**logging_google_pubsub_name** | **String** |  |

### Return type

**Object**


## `getLogGcpPubsub`

> getLogGcpPubsub(service_id, version_id, logging_google_pubsub_name)

Get a GCP Cloud Pub/Sub log endpoint

Get the details for a Pub/Sub logging object for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingPubsubApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_google_pubsub_name = "logging_google_pubsub_name_example"; // String | 
apiInstance.getLogGcpPubsub(service_id, version_id, logging_google_pubsub_name).then((data) => {
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
**logging_google_pubsub_name** | **String** |  |

### Return type

[**LoggingGooglePubsubResponse**](LoggingGooglePubsubResponse.md)


## `listLogGcpPubsub`

> listLogGcpPubsub(service_id, version_id)

List GCP Cloud Pub/Sub log endpoints

List all of the Pub/Sub logging objects for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingPubsubApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogGcpPubsub(service_id, version_id).then((data) => {
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

[**[LoggingGooglePubsubResponse]**](LoggingGooglePubsubResponse.md)


## `updateLogGcpPubsub`

> updateLogGcpPubsub(service_id, version_id, logging_google_pubsub_name, opts)

Update a GCP Cloud Pub/Sub log endpoint

Update a Pub/Sub logging object for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.LoggingPubsubApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_google_pubsub_name = "logging_google_pubsub_name_example"; // String | 
let opts = {
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'user': "user_example", // String | Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
  'secret_key': "secret_key_example", // String | Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
  'topic': "topic_example", // String | The Google Cloud Pub/Sub topic to which logs will be published. Required.
  'project_id': "project_id_example" // String | Your Google Cloud Platform project ID. Required
};
apiInstance.updateLogGcpPubsub(service_id, version_id, logging_google_pubsub_name, opts).then((data) => {
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
