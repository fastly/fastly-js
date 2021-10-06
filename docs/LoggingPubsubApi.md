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
createLogGcpPubsub({ service_id, version_id, [secret_key, ], [user] })
```

Create a Pub/Sub logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  secret_key: "secret_key_example",
  user: "user_example",
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
**secret_key** | **String** | Your Google Cloud Platform account secret key. The &#x60;private_key&#x60; field in your service account authentication JSON. Required. | [optional]
**user** | **String** | Your Google Cloud Platform service account email address. The &#x60;client_email&#x60; field in your service account authentication JSON. Required. | [optional]

### Return type

[**ServiceIdAndVersion**](ServiceIdAndVersion.md)


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

[**ServiceIdAndVersion**](ServiceIdAndVersion.md)


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

[**[ServiceIdAndVersion]**](ServiceIdAndVersion.md)


## `updateLogGcpPubsub`

```javascript
updateLogGcpPubsub({ service_id, version_id, logging_google_pubsub_name, [secret_key, ], [user] })
```

Update a Pub/Sub logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_google_pubsub_name: "logging_google_pubsub_name_example", // required
  secret_key: "secret_key_example",
  user: "user_example",
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
**secret_key** | **String** | Your Google Cloud Platform account secret key. The &#x60;private_key&#x60; field in your service account authentication JSON. Required. | [optional]
**user** | **String** | Your Google Cloud Platform service account email address. The &#x60;client_email&#x60; field in your service account authentication JSON. Required. | [optional]

### Return type

[**ServiceIdAndVersion**](ServiceIdAndVersion.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
