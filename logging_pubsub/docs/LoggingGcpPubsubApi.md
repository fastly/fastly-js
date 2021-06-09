# GoogleCloudPubSubLogging.LoggingGcpPubsubApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogGcpPubsub**](LoggingGcpPubsubApi.md#createLogGcpPubsub) | **POST** /service/{service_id}/version/{version_id}/logging/pubsub | Create a GCP Cloud Pub/Sub log endpoint
[**deleteLogGcpPubsub**](LoggingGcpPubsubApi.md#deleteLogGcpPubsub) | **DELETE** /service/{service_id}/version/{version_id}/logging/pubsub/{logging_google_pubsub_name} | Delete a GCP Cloud Pub/Sub log endpoint
[**getLogGcpPubsub**](LoggingGcpPubsubApi.md#getLogGcpPubsub) | **GET** /service/{service_id}/version/{version_id}/logging/pubsub/{logging_google_pubsub_name} | Get a GCP Cloud Pub/Sub log endpoint
[**listLogGcpPubsub**](LoggingGcpPubsubApi.md#listLogGcpPubsub) | **GET** /service/{service_id}/version/{version_id}/logging/pubsub | List GCP Cloud Pub/Sub log endpoints
[**updateLogGcpPubsub**](LoggingGcpPubsubApi.md#updateLogGcpPubsub) | **PUT** /service/{service_id}/version/{version_id}/logging/pubsub/{logging_google_pubsub_name} | Update a GCP Cloud Pub/Sub log endpoint



## createLogGcpPubsub

> InlineObject createLogGcpPubsub(serviceId, versionId, opts)

Create a GCP Cloud Pub/Sub log endpoint

Create a Pub/Sub logging object for a particular service and version.

### Example

```javascript
import GoogleCloudPubSubLogging from 'google_cloud_pub_sub_logging';
let defaultClient = GoogleCloudPubSubLogging.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new GoogleCloudPubSubLogging.LoggingGcpPubsubApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let opts = {
  'createdAt': "createdAt_example", // String | Date and time in ISO 8601 format.
  'deletedAt': "deletedAt_example", // String | Date and time in ISO 8601 format.
  'updatedAt': "updatedAt_example", // String | Date and time in ISO 8601 format.
  'serviceId2': "serviceId_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': "placement_example", // String | Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
  'formatVersion': 2, // Number | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
  'responseCondition': "responseCondition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'user': "user_example", // String | Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
  'secretKey': "secretKey_example", // String | Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
  'topic': "topic_example", // String | The Google Cloud Pub/Sub topic to which logs will be published. Required.
  'projectId': "projectId_example" // String | Your Google Cloud Platform project ID. Required
};
apiInstance.createLogGcpPubsub(serviceId, versionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 
 **createdAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deletedAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updatedAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **serviceId2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **name** | **String**| The name for the real-time logging configuration. | [optional] 
 **placement** | **String**| Where in the generated VCL the logging call should be placed. If not set, endpoints with &#x60;format_version&#x60; of 2 are placed in &#x60;vcl_log&#x60; and those with &#x60;format_version&#x60; of 1 are placed in &#x60;vcl_deliver&#x60;.  | [optional] 
 **formatVersion** | **Number**| The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in &#x60;vcl_log&#x60; if &#x60;format_version&#x60; is set to &#x60;2&#x60; and in &#x60;vcl_deliver&#x60; if &#x60;format_version&#x60; is set to &#x60;1&#x60;.   | [optional] [default to 2]
 **responseCondition** | **String**| The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
 **format** | **String**| A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
 **user** | **String**| Your Google Cloud Platform service account email address. The &#x60;client_email&#x60; field in your service account authentication JSON. Required. | [optional] 
 **secretKey** | **String**| Your Google Cloud Platform account secret key. The &#x60;private_key&#x60; field in your service account authentication JSON. Required. | [optional] 
 **topic** | **String**| The Google Cloud Pub/Sub topic to which logs will be published. Required. | [optional] 
 **projectId** | **String**| Your Google Cloud Platform project ID. Required | [optional] 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteLogGcpPubsub

> Object deleteLogGcpPubsub(serviceId, versionId, loggingGooglePubsubName)

Delete a GCP Cloud Pub/Sub log endpoint

Delete a Pub/Sub logging object for a particular service and version.

### Example

```javascript
import GoogleCloudPubSubLogging from 'google_cloud_pub_sub_logging';
let defaultClient = GoogleCloudPubSubLogging.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new GoogleCloudPubSubLogging.LoggingGcpPubsubApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let loggingGooglePubsubName = log-endpoint-name; // String | 
apiInstance.deleteLogGcpPubsub(serviceId, versionId, loggingGooglePubsubName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 
 **loggingGooglePubsubName** | **String**|  | 

### Return type

**Object**

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogGcpPubsub

> InlineObject getLogGcpPubsub(serviceId, versionId, loggingGooglePubsubName)

Get a GCP Cloud Pub/Sub log endpoint

Get the details for a Pub/Sub logging object for a particular service and version.

### Example

```javascript
import GoogleCloudPubSubLogging from 'google_cloud_pub_sub_logging';
let defaultClient = GoogleCloudPubSubLogging.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new GoogleCloudPubSubLogging.LoggingGcpPubsubApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let loggingGooglePubsubName = log-endpoint-name; // String | 
apiInstance.getLogGcpPubsub(serviceId, versionId, loggingGooglePubsubName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 
 **loggingGooglePubsubName** | **String**|  | 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLogGcpPubsub

> [InlineResponse200] listLogGcpPubsub(serviceId, versionId)

List GCP Cloud Pub/Sub log endpoints

List all of the Pub/Sub logging objects for a particular service and version.

### Example

```javascript
import GoogleCloudPubSubLogging from 'google_cloud_pub_sub_logging';
let defaultClient = GoogleCloudPubSubLogging.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new GoogleCloudPubSubLogging.LoggingGcpPubsubApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.listLogGcpPubsub(serviceId, versionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 

### Return type

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLogGcpPubsub

> InlineObject1 updateLogGcpPubsub(serviceId, versionId, loggingGooglePubsubName, opts)

Update a GCP Cloud Pub/Sub log endpoint

Update a Pub/Sub logging object for a particular service and version.

### Example

```javascript
import GoogleCloudPubSubLogging from 'google_cloud_pub_sub_logging';
let defaultClient = GoogleCloudPubSubLogging.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new GoogleCloudPubSubLogging.LoggingGcpPubsubApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let loggingGooglePubsubName = log-endpoint-name; // String | 
let opts = {
  'createdAt': "createdAt_example", // String | Date and time in ISO 8601 format.
  'deletedAt': "deletedAt_example", // String | Date and time in ISO 8601 format.
  'updatedAt': "updatedAt_example", // String | Date and time in ISO 8601 format.
  'serviceId2': "serviceId_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': "placement_example", // String | Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
  'formatVersion': FormatVersionEnum.2, // Number | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
  'responseCondition': "responseCondition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'user': "user_example", // String | Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
  'secretKey': "secretKey_example", // String | Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
  'topic': "topic_example", // String | The Google Cloud Pub/Sub topic to which logs will be published. Required.
  'projectId': "projectId_example" // String | Your Google Cloud Platform project ID. Required
};
apiInstance.updateLogGcpPubsub(serviceId, versionId, loggingGooglePubsubName, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **versionId** | **Number**|  | 
 **loggingGooglePubsubName** | **String**|  | 
 **createdAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deletedAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updatedAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **serviceId2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **name** | **String**| The name for the real-time logging configuration. | [optional] 
 **placement** | **String**| Where in the generated VCL the logging call should be placed. If not set, endpoints with &#x60;format_version&#x60; of 2 are placed in &#x60;vcl_log&#x60; and those with &#x60;format_version&#x60; of 1 are placed in &#x60;vcl_deliver&#x60;.  | [optional] 
 **formatVersion** | **Number**| The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in &#x60;vcl_log&#x60; if &#x60;format_version&#x60; is set to &#x60;2&#x60; and in &#x60;vcl_deliver&#x60; if &#x60;format_version&#x60; is set to &#x60;1&#x60;.   | [optional] [default to FormatVersionEnum.2]
 **responseCondition** | **String**| The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
 **format** | **String**| A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
 **user** | **String**| Your Google Cloud Platform service account email address. The &#x60;client_email&#x60; field in your service account authentication JSON. Required. | [optional] 
 **secretKey** | **String**| Your Google Cloud Platform account secret key. The &#x60;private_key&#x60; field in your service account authentication JSON. Required. | [optional] 
 **topic** | **String**| The Google Cloud Pub/Sub topic to which logs will be published. Required. | [optional] 
 **projectId** | **String**| Your Google Cloud Platform project ID. Required | [optional] 

### Return type

[**InlineObject1**](InlineObject1.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

