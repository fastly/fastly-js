# FastlyApi.LoggingSplunkApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogSplunk**](LoggingSplunkApi.md#createLogSplunk) | **POST** /service/{service_id}/version/{version_id}/logging/splunk | Create a Splunk log endpoint
[**deleteLogSplunk**](LoggingSplunkApi.md#deleteLogSplunk) | **DELETE** /service/{service_id}/version/{version_id}/logging/splunk/{logging_splunk_name} | Delete a Splunk log endpoint
[**getLogSplunk**](LoggingSplunkApi.md#getLogSplunk) | **GET** /service/{service_id}/version/{version_id}/logging/splunk/{logging_splunk_name} | Get a Splunk log endpoint
[**listLogSplunk**](LoggingSplunkApi.md#listLogSplunk) | **GET** /service/{service_id}/version/{version_id}/logging/splunk | List Splunk log endpoints
[**updateLogSplunk**](LoggingSplunkApi.md#updateLogSplunk) | **PUT** /service/{service_id}/version/{version_id}/logging/splunk/{logging_splunk_name} | Update a Splunk log endpoint



## createLogSplunk

> ModelLoggingSplunk createLogSplunk(service_id, version_id, opts)

Create a Splunk log endpoint

Create a Splunk logging object for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingSplunkApi();
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
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'tls_ca_cert': "'null'", // String | A secure certificate to authenticate a server with. Must be in PEM format.
  'tls_client_cert': "'null'", // String | The client certificate used to make authenticated requests. Must be in PEM format.
  'tls_client_key': "'null'", // String | The client private key used to make authenticated requests. Must be in PEM format.
  'tls_hostname': "'null'", // String | The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
  'request_max_entries': 0, // Number | The maximum number of logs sent in one request. Defaults `0` for unbounded.
  'request_max_bytes': 0, // Number | The maximum number of bytes sent in one request. Defaults `0` for unbounded.
  'url': "url_example", // String | The URL to post logs to.
  'token': "token_example", // String | A Splunk token for use in posting logs over HTTP to your collector.
  'use_tls': new FastlyApi.LoggingUseTls() // LoggingUseTls | 
};
apiInstance.createLogSplunk(service_id, version_id, opts).then((data) => {
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
 **format** | **String**| A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
 **tls_ca_cert** | **String**| A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tls_client_cert** | **String**| The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tls_client_key** | **String**| The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tls_hostname** | **String**| The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
 **request_max_entries** | **Number**| The maximum number of logs sent in one request. Defaults &#x60;0&#x60; for unbounded. | [optional] [default to 0]
 **request_max_bytes** | **Number**| The maximum number of bytes sent in one request. Defaults &#x60;0&#x60; for unbounded. | [optional] [default to 0]
 **url** | **String**| The URL to post logs to. | [optional] 
 **token** | **String**| A Splunk token for use in posting logs over HTTP to your collector. | [optional] 
 **use_tls** | [**LoggingUseTls**](LoggingUseTls.md)|  | [optional] 

### Return type

[**ModelLoggingSplunk**](ModelLoggingSplunk.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteLogSplunk

> Object deleteLogSplunk(service_id, version_id, logging_splunk_name)

Delete a Splunk log endpoint

Delete the Splunk logging object for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingSplunkApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_splunk_name = "logging_splunk_name_example"; // String | 
apiInstance.deleteLogSplunk(service_id, version_id, logging_splunk_name).then((data) => {
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
 **logging_splunk_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogSplunk

> ModelLoggingSplunk getLogSplunk(service_id, version_id, logging_splunk_name)

Get a Splunk log endpoint

Get the details for a Splunk logging object for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingSplunkApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_splunk_name = "logging_splunk_name_example"; // String | 
apiInstance.getLogSplunk(service_id, version_id, logging_splunk_name).then((data) => {
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
 **logging_splunk_name** | **String**|  | 

### Return type

[**ModelLoggingSplunk**](ModelLoggingSplunk.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLogSplunk

> [ModelLoggingSplunk] listLogSplunk(service_id, version_id)

List Splunk log endpoints

List all of the Splunk logging objects for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingSplunkApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogSplunk(service_id, version_id).then((data) => {
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

[**[ModelLoggingSplunk]**](ModelLoggingSplunk.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLogSplunk

> ModelLoggingSplunk updateLogSplunk(service_id, version_id, logging_splunk_name, opts)

Update a Splunk log endpoint

Update the Splunk logging object for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingSplunkApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_splunk_name = "logging_splunk_name_example"; // String | 
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
  'format': "'%h %l %u %t \"%r\" %&gt;s %b'", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
  'tls_ca_cert': "'null'", // String | A secure certificate to authenticate a server with. Must be in PEM format.
  'tls_client_cert': "'null'", // String | The client certificate used to make authenticated requests. Must be in PEM format.
  'tls_client_key': "'null'", // String | The client private key used to make authenticated requests. Must be in PEM format.
  'tls_hostname': "'null'", // String | The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
  'request_max_entries': 0, // Number | The maximum number of logs sent in one request. Defaults `0` for unbounded.
  'request_max_bytes': 0, // Number | The maximum number of bytes sent in one request. Defaults `0` for unbounded.
  'url': "url_example", // String | The URL to post logs to.
  'token': "token_example", // String | A Splunk token for use in posting logs over HTTP to your collector.
  'use_tls': new FastlyApi.LoggingUseTls() // LoggingUseTls | 
};
apiInstance.updateLogSplunk(service_id, version_id, logging_splunk_name, opts).then((data) => {
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
 **logging_splunk_name** | **String**|  | 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **name** | **String**| The name for the real-time logging configuration. | [optional] 
 **placement** | [**LoggingPlacement**](LoggingPlacement.md)|  | [optional] 
 **format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md)|  | [optional] 
 **response_condition** | **String**| The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
 **format** | **String**| A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). | [optional] [default to &#39;%h %l %u %t &quot;%r&quot; %&amp;gt;s %b&#39;]
 **tls_ca_cert** | **String**| A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tls_client_cert** | **String**| The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tls_client_key** | **String**| The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tls_hostname** | **String**| The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
 **request_max_entries** | **Number**| The maximum number of logs sent in one request. Defaults &#x60;0&#x60; for unbounded. | [optional] [default to 0]
 **request_max_bytes** | **Number**| The maximum number of bytes sent in one request. Defaults &#x60;0&#x60; for unbounded. | [optional] [default to 0]
 **url** | **String**| The URL to post logs to. | [optional] 
 **token** | **String**| A Splunk token for use in posting logs over HTTP to your collector. | [optional] 
 **use_tls** | [**LoggingUseTls**](LoggingUseTls.md)|  | [optional] 

### Return type

[**ModelLoggingSplunk**](ModelLoggingSplunk.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

