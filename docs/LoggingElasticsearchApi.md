# FastlyApi.LoggingElasticsearchApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogElasticsearch**](LoggingElasticsearchApi.md#createLogElasticsearch) | **POST** /service/{service_id}/version/{version_id}/logging/elasticsearch | Create an Elasticsearch log endpoint
[**deleteLogElasticsearch**](LoggingElasticsearchApi.md#deleteLogElasticsearch) | **DELETE** /service/{service_id}/version/{version_id}/logging/elasticsearch/{logging_elasticsearch_name} | Delete an Elasticsearch log endpoint
[**getLogElasticsearch**](LoggingElasticsearchApi.md#getLogElasticsearch) | **GET** /service/{service_id}/version/{version_id}/logging/elasticsearch/{logging_elasticsearch_name} | Get an Elasticsearch log endpoint
[**listLogElasticsearch**](LoggingElasticsearchApi.md#listLogElasticsearch) | **GET** /service/{service_id}/version/{version_id}/logging/elasticsearch | List Elasticsearch log endpoints
[**updateLogElasticsearch**](LoggingElasticsearchApi.md#updateLogElasticsearch) | **PUT** /service/{service_id}/version/{version_id}/logging/elasticsearch/{logging_elasticsearch_name} | Update an Elasticsearch log endpoint



## createLogElasticsearch

> ModelLoggingElasticsearch createLogElasticsearch(service_id, version_id, opts)

Create an Elasticsearch log endpoint

Create a Elasticsearch logging endpoint for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingElasticsearchApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': null, // Object | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Elasticsearch can ingest.
  'tls_ca_cert': "'null'", // String | A secure certificate to authenticate a server with. Must be in PEM format.
  'tls_client_cert': "'null'", // String | The client certificate used to make authenticated requests. Must be in PEM format.
  'tls_client_key': "'null'", // String | The client private key used to make authenticated requests. Must be in PEM format.
  'tls_hostname': "'null'", // String | The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
  'request_max_entries': 0, // Number | The maximum number of logs sent in one request. Defaults `0` for unbounded.
  'request_max_bytes': 0, // Number | The maximum number of bytes sent in one request. Defaults `0` for unbounded.
  'index': "index_example", // String | The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch [index format rules](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support [strftime](https://www.man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, `#{%F}` will interpolate as `YYYY-MM-DD` with today's date.
  'url': "url_example", // String | The URL to stream logs to. Must use HTTPS.
  'pipeline': "pipeline_example", // String | The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. Learn more about creating a pipeline in the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html).
  'user': "user_example", // String | Basic Auth username.
  'password': "password_example" // String | Basic Auth password.
};
apiInstance.createLogElasticsearch(service_id, version_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **name** | **String**| The name for the real-time logging configuration. | [optional] 
 **placement** | [**LoggingPlacement**](LoggingPlacement.md)|  | [optional] 
 **format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md)|  | [optional] 
 **response_condition** | **String**| The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
 **format** | [**Object**](Object.md)| A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Elasticsearch can ingest. | [optional] 
 **tls_ca_cert** | **String**| A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tls_client_cert** | **String**| The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tls_client_key** | **String**| The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tls_hostname** | **String**| The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
 **request_max_entries** | **Number**| The maximum number of logs sent in one request. Defaults &#x60;0&#x60; for unbounded. | [optional] [default to 0]
 **request_max_bytes** | **Number**| The maximum number of bytes sent in one request. Defaults &#x60;0&#x60; for unbounded. | [optional] [default to 0]
 **index** | **String**| The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch [index format rules](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support [strftime](https://www.man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, &#x60;#{%F}&#x60; will interpolate as &#x60;YYYY-MM-DD&#x60; with today&#39;s date. | [optional] 
 **url** | **String**| The URL to stream logs to. Must use HTTPS. | [optional] 
 **pipeline** | **String**| The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. Learn more about creating a pipeline in the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html). | [optional] 
 **user** | **String**| Basic Auth username. | [optional] 
 **password** | **String**| Basic Auth password. | [optional] 

### Return type

[**ModelLoggingElasticsearch**](ModelLoggingElasticsearch.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteLogElasticsearch

> Object deleteLogElasticsearch(service_id, version_id, logging_elasticsearch_name)

Delete an Elasticsearch log endpoint

Delete the Elasticsearch logging endpoint for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingElasticsearchApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_elasticsearch_name = "logging_elasticsearch_name_example"; // String | 
apiInstance.deleteLogElasticsearch(service_id, version_id, logging_elasticsearch_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **logging_elasticsearch_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogElasticsearch

> ModelLoggingElasticsearch getLogElasticsearch(service_id, version_id, logging_elasticsearch_name)

Get an Elasticsearch log endpoint

Get the Elasticsearch logging endpoint for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingElasticsearchApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_elasticsearch_name = "logging_elasticsearch_name_example"; // String | 
apiInstance.getLogElasticsearch(service_id, version_id, logging_elasticsearch_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **logging_elasticsearch_name** | **String**|  | 

### Return type

[**ModelLoggingElasticsearch**](ModelLoggingElasticsearch.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLogElasticsearch

> [ModelLoggingElasticsearch] listLogElasticsearch(service_id, version_id)

List Elasticsearch log endpoints

List all of the Elasticsearch logging endpoints for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingElasticsearchApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogElasticsearch(service_id, version_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 

### Return type

[**[ModelLoggingElasticsearch]**](ModelLoggingElasticsearch.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLogElasticsearch

> ModelLoggingElasticsearch updateLogElasticsearch(service_id, version_id, logging_elasticsearch_name, opts)

Update an Elasticsearch log endpoint

Update the Elasticsearch logging endpoint for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingElasticsearchApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_elasticsearch_name = "logging_elasticsearch_name_example"; // String | 
let opts = {
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'name': "name_example", // String | The name for the real-time logging configuration.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': null, // Object | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Elasticsearch can ingest.
  'tls_ca_cert': "'null'", // String | A secure certificate to authenticate a server with. Must be in PEM format.
  'tls_client_cert': "'null'", // String | The client certificate used to make authenticated requests. Must be in PEM format.
  'tls_client_key': "'null'", // String | The client private key used to make authenticated requests. Must be in PEM format.
  'tls_hostname': "'null'", // String | The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
  'request_max_entries': 0, // Number | The maximum number of logs sent in one request. Defaults `0` for unbounded.
  'request_max_bytes': 0, // Number | The maximum number of bytes sent in one request. Defaults `0` for unbounded.
  'index': "index_example", // String | The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch [index format rules](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support [strftime](https://www.man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, `#{%F}` will interpolate as `YYYY-MM-DD` with today's date.
  'url': "url_example", // String | The URL to stream logs to. Must use HTTPS.
  'pipeline': "pipeline_example", // String | The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. Learn more about creating a pipeline in the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html).
  'user': "user_example", // String | Basic Auth username.
  'password': "password_example" // String | Basic Auth password.
};
apiInstance.updateLogElasticsearch(service_id, version_id, logging_elasticsearch_name, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **logging_elasticsearch_name** | **String**|  | 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **name** | **String**| The name for the real-time logging configuration. | [optional] 
 **placement** | [**LoggingPlacement**](LoggingPlacement.md)|  | [optional] 
 **format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md)|  | [optional] 
 **response_condition** | **String**| The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
 **format** | [**Object**](Object.md)| A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Elasticsearch can ingest. | [optional] 
 **tls_ca_cert** | **String**| A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tls_client_cert** | **String**| The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tls_client_key** | **String**| The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tls_hostname** | **String**| The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
 **request_max_entries** | **Number**| The maximum number of logs sent in one request. Defaults &#x60;0&#x60; for unbounded. | [optional] [default to 0]
 **request_max_bytes** | **Number**| The maximum number of bytes sent in one request. Defaults &#x60;0&#x60; for unbounded. | [optional] [default to 0]
 **index** | **String**| The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch [index format rules](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support [strftime](https://www.man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, &#x60;#{%F}&#x60; will interpolate as &#x60;YYYY-MM-DD&#x60; with today&#39;s date. | [optional] 
 **url** | **String**| The URL to stream logs to. Must use HTTPS. | [optional] 
 **pipeline** | **String**| The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. Learn more about creating a pipeline in the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html). | [optional] 
 **user** | **String**| Basic Auth username. | [optional] 
 **password** | **String**| Basic Auth password. | [optional] 

### Return type

[**ModelLoggingElasticsearch**](ModelLoggingElasticsearch.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

