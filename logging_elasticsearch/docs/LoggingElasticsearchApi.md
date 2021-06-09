# Elasticsearch.LoggingElasticsearchApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogElasticsearch**](LoggingElasticsearchApi.md#createLogElasticsearch) | **POST** /service/{service_id}/version/{version_id}/logging/elasticsearch | Create an Elasticsearch log endpoint
[**deleteLogElasticsearch**](LoggingElasticsearchApi.md#deleteLogElasticsearch) | **DELETE** /service/{service_id}/version/{version_id}/logging/elasticsearch/{logging_elasticsearch_name} | Delete an Elasticsearch log endpoint
[**getLogElasticsearch**](LoggingElasticsearchApi.md#getLogElasticsearch) | **GET** /service/{service_id}/version/{version_id}/logging/elasticsearch/{logging_elasticsearch_name} | Get an Elasticsearch log endpoint
[**listLogElasticsearch**](LoggingElasticsearchApi.md#listLogElasticsearch) | **GET** /service/{service_id}/version/{version_id}/logging/elasticsearch | List Elasticsearch log endpoints
[**updateLogElasticsearch**](LoggingElasticsearchApi.md#updateLogElasticsearch) | **PUT** /service/{service_id}/version/{version_id}/logging/elasticsearch/{logging_elasticsearch_name} | Update an Elasticsearch log endpoint



## createLogElasticsearch

> InlineObject createLogElasticsearch(serviceId, versionId, opts)

Create an Elasticsearch log endpoint

Create a Elasticsearch logging endpoint for a particular service and version.

### Example

```javascript
import Elasticsearch from 'elasticsearch';
let defaultClient = Elasticsearch.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Elasticsearch.LoggingElasticsearchApi();
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
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Elasticsearch can ingest.
  'tlsCaCert': "'null'", // String | A secure certificate to authenticate a server with. Must be in PEM format.
  'tlsClientCert': "'null'", // String | The client certificate used to make authenticated requests. Must be in PEM format.
  'tlsClientKey': "'null'", // String | The client private key used to make authenticated requests. Must be in PEM format.
  'tlsHostname': "'null'", // String | The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
  'requestMaxEntries': 0, // Number | The maximum number of logs sent in one request. Defaults `0` for unbounded.
  'requestMaxBytes': 0, // Number | The maximum number of bytes sent in one request. Defaults `0` for unbounded.
  'index': "index_example", // String | The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch [index format rules](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support [strftime](https://www.man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, `#{%F}` will interpolate as `YYYY-MM-DD` with today's date.
  'url': "url_example", // String | The URL to stream logs to. Must use HTTPS.
  'pipeline': "pipeline_example", // String | The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. Learn more about creating a pipeline in the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html).
  'user': "user_example", // String | Basic Auth username.
  'password': "password_example" // String | Basic Auth password.
};
apiInstance.createLogElasticsearch(serviceId, versionId, opts).then((data) => {
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
 **format** | **String**| A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Elasticsearch can ingest. | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
 **tlsCaCert** | **String**| A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tlsClientCert** | **String**| The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tlsClientKey** | **String**| The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tlsHostname** | **String**| The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
 **requestMaxEntries** | **Number**| The maximum number of logs sent in one request. Defaults &#x60;0&#x60; for unbounded. | [optional] [default to 0]
 **requestMaxBytes** | **Number**| The maximum number of bytes sent in one request. Defaults &#x60;0&#x60; for unbounded. | [optional] [default to 0]
 **index** | **String**| The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch [index format rules](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support [strftime](https://www.man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, &#x60;#{%F}&#x60; will interpolate as &#x60;YYYY-MM-DD&#x60; with today&#39;s date. | [optional] 
 **url** | **String**| The URL to stream logs to. Must use HTTPS. | [optional] 
 **pipeline** | **String**| The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. Learn more about creating a pipeline in the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html). | [optional] 
 **user** | **String**| Basic Auth username. | [optional] 
 **password** | **String**| Basic Auth password. | [optional] 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteLogElasticsearch

> Object deleteLogElasticsearch(serviceId, versionId, loggingElasticsearchName)

Delete an Elasticsearch log endpoint

Delete the Elasticsearch logging endpoint for a particular service and version.

### Example

```javascript
import Elasticsearch from 'elasticsearch';
let defaultClient = Elasticsearch.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Elasticsearch.LoggingElasticsearchApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let loggingElasticsearchName = log-endpoint-name; // String | 
apiInstance.deleteLogElasticsearch(serviceId, versionId, loggingElasticsearchName).then((data) => {
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
 **loggingElasticsearchName** | **String**|  | 

### Return type

**Object**

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogElasticsearch

> InlineObject getLogElasticsearch(serviceId, versionId, loggingElasticsearchName)

Get an Elasticsearch log endpoint

Get the Elasticsearch logging endpoint for a particular service and version.

### Example

```javascript
import Elasticsearch from 'elasticsearch';
let defaultClient = Elasticsearch.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Elasticsearch.LoggingElasticsearchApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let loggingElasticsearchName = log-endpoint-name; // String | 
apiInstance.getLogElasticsearch(serviceId, versionId, loggingElasticsearchName).then((data) => {
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
 **loggingElasticsearchName** | **String**|  | 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLogElasticsearch

> [InlineResponse200] listLogElasticsearch(serviceId, versionId)

List Elasticsearch log endpoints

List all of the Elasticsearch logging endpoints for a particular service and version.

### Example

```javascript
import Elasticsearch from 'elasticsearch';
let defaultClient = Elasticsearch.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Elasticsearch.LoggingElasticsearchApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.listLogElasticsearch(serviceId, versionId).then((data) => {
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


## updateLogElasticsearch

> InlineObject1 updateLogElasticsearch(serviceId, versionId, loggingElasticsearchName, opts)

Update an Elasticsearch log endpoint

Update the Elasticsearch logging endpoint for a particular service and version.

### Example

```javascript
import Elasticsearch from 'elasticsearch';
let defaultClient = Elasticsearch.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Elasticsearch.LoggingElasticsearchApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let loggingElasticsearchName = log-endpoint-name; // String | 
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
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Elasticsearch can ingest.
  'tlsCaCert': "'null'", // String | A secure certificate to authenticate a server with. Must be in PEM format.
  'tlsClientCert': "'null'", // String | The client certificate used to make authenticated requests. Must be in PEM format.
  'tlsClientKey': "'null'", // String | The client private key used to make authenticated requests. Must be in PEM format.
  'tlsHostname': "'null'", // String | The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
  'requestMaxEntries': 0, // Number | The maximum number of logs sent in one request. Defaults `0` for unbounded.
  'requestMaxBytes': 0, // Number | The maximum number of bytes sent in one request. Defaults `0` for unbounded.
  'index': "index_example", // String | The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch [index format rules](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support [strftime](https://www.man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, `#{%F}` will interpolate as `YYYY-MM-DD` with today's date.
  'url': "url_example", // String | The URL to stream logs to. Must use HTTPS.
  'pipeline': "pipeline_example", // String | The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. Learn more about creating a pipeline in the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html).
  'user': "user_example", // String | Basic Auth username.
  'password': "password_example" // String | Basic Auth password.
};
apiInstance.updateLogElasticsearch(serviceId, versionId, loggingElasticsearchName, opts).then((data) => {
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
 **loggingElasticsearchName** | **String**|  | 
 **createdAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deletedAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updatedAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **serviceId2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **name** | **String**| The name for the real-time logging configuration. | [optional] 
 **placement** | **String**| Where in the generated VCL the logging call should be placed. If not set, endpoints with &#x60;format_version&#x60; of 2 are placed in &#x60;vcl_log&#x60; and those with &#x60;format_version&#x60; of 1 are placed in &#x60;vcl_deliver&#x60;.  | [optional] 
 **formatVersion** | **Number**| The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in &#x60;vcl_log&#x60; if &#x60;format_version&#x60; is set to &#x60;2&#x60; and in &#x60;vcl_deliver&#x60; if &#x60;format_version&#x60; is set to &#x60;1&#x60;.   | [optional] [default to FormatVersionEnum.2]
 **responseCondition** | **String**| The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
 **format** | **String**| A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Elasticsearch can ingest. | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
 **tlsCaCert** | **String**| A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tlsClientCert** | **String**| The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tlsClientKey** | **String**| The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tlsHostname** | **String**| The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
 **requestMaxEntries** | **Number**| The maximum number of logs sent in one request. Defaults &#x60;0&#x60; for unbounded. | [optional] [default to 0]
 **requestMaxBytes** | **Number**| The maximum number of bytes sent in one request. Defaults &#x60;0&#x60; for unbounded. | [optional] [default to 0]
 **index** | **String**| The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch [index format rules](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support [strftime](https://www.man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, &#x60;#{%F}&#x60; will interpolate as &#x60;YYYY-MM-DD&#x60; with today&#39;s date. | [optional] 
 **url** | **String**| The URL to stream logs to. Must use HTTPS. | [optional] 
 **pipeline** | **String**| The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. Learn more about creating a pipeline in the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html). | [optional] 
 **user** | **String**| Basic Auth username. | [optional] 
 **password** | **String**| Basic Auth password. | [optional] 

### Return type

[**InlineObject1**](InlineObject1.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

