# Https.LoggingHttpsApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogHttps**](LoggingHttpsApi.md#createLogHttps) | **POST** /service/{service_id}/version/{version_id}/logging/https | Create an HTTPS log endpoint
[**deleteLogHttps**](LoggingHttpsApi.md#deleteLogHttps) | **DELETE** /service/{service_id}/version/{version_id}/logging/https/{logging_https_name} | Delete an HTTPS log endpoint
[**getLogHttps**](LoggingHttpsApi.md#getLogHttps) | **GET** /service/{service_id}/version/{version_id}/logging/https/{logging_https_name} | Get an HTTPS log endpoint
[**listLogHttps**](LoggingHttpsApi.md#listLogHttps) | **GET** /service/{service_id}/version/{version_id}/logging/https | List HTTPS log endpoints
[**updateLogHttps**](LoggingHttpsApi.md#updateLogHttps) | **PUT** /service/{service_id}/version/{version_id}/logging/https/{logging_https_name} | Update an HTTPS log endpoint



## createLogHttps

> InlineObject createLogHttps(serviceId, versionId, opts)

Create an HTTPS log endpoint

Create an HTTPS object for a particular service and version.

### Example

```javascript
import Https from 'https';
let defaultClient = Https.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Https.LoggingHttpsApi();
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
  'tlsCaCert': "'null'", // String | A secure certificate to authenticate a server with. Must be in PEM format.
  'tlsClientCert': "'null'", // String | The client certificate used to make authenticated requests. Must be in PEM format.
  'tlsClientKey': "'null'", // String | The client private key used to make authenticated requests. Must be in PEM format.
  'tlsHostname': "'null'", // String | The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
  'requestMaxEntries': 0, // Number | The maximum number of logs sent in one request. Defaults `0` (no limit).
  'requestMaxBytes': 0, // Number | The maximum number of bytes sent in one request. Defaults `0` (no limit).
  'url': "url_example", // String | The URL to send logs to. Must use HTTPS. Required.
  'contentType': "'null'", // String | Content type of the header sent with the request.
  'headerName': "'null'", // String | Name of the custom header sent with the request.
  'messageType': "'classic'", // String | How the message should be formatted.
  'headerValue': "'null'", // String | Value of the custom header sent with the request.
  'method': "'POST'", // String | HTTP method used for request.
  'jsonFormat': "jsonFormat_example" // String | Enforces valid JSON formatting for log entries.
};
apiInstance.createLogHttps(serviceId, versionId, opts).then((data) => {
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
 **tlsCaCert** | **String**| A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tlsClientCert** | **String**| The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tlsClientKey** | **String**| The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tlsHostname** | **String**| The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
 **requestMaxEntries** | **Number**| The maximum number of logs sent in one request. Defaults &#x60;0&#x60; (no limit). | [optional] [default to 0]
 **requestMaxBytes** | **Number**| The maximum number of bytes sent in one request. Defaults &#x60;0&#x60; (no limit). | [optional] [default to 0]
 **url** | **String**| The URL to send logs to. Must use HTTPS. Required. | [optional] 
 **contentType** | **String**| Content type of the header sent with the request. | [optional] [default to &#39;null&#39;]
 **headerName** | **String**| Name of the custom header sent with the request. | [optional] [default to &#39;null&#39;]
 **messageType** | **String**| How the message should be formatted. | [optional] [default to &#39;classic&#39;]
 **headerValue** | **String**| Value of the custom header sent with the request. | [optional] [default to &#39;null&#39;]
 **method** | **String**| HTTP method used for request. | [optional] [default to &#39;POST&#39;]
 **jsonFormat** | **String**| Enforces valid JSON formatting for log entries. | [optional] 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteLogHttps

> Object deleteLogHttps(serviceId, versionId, loggingHttpsName)

Delete an HTTPS log endpoint

Delete the HTTPS object for a particular service and version.

### Example

```javascript
import Https from 'https';
let defaultClient = Https.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Https.LoggingHttpsApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let loggingHttpsName = log-endpoint-name; // String | 
apiInstance.deleteLogHttps(serviceId, versionId, loggingHttpsName).then((data) => {
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
 **loggingHttpsName** | **String**|  | 

### Return type

**Object**

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogHttps

> InlineObject getLogHttps(serviceId, versionId, loggingHttpsName)

Get an HTTPS log endpoint

Get the HTTPS object for a particular service and version.

### Example

```javascript
import Https from 'https';
let defaultClient = Https.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Https.LoggingHttpsApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let loggingHttpsName = log-endpoint-name; // String | 
apiInstance.getLogHttps(serviceId, versionId, loggingHttpsName).then((data) => {
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
 **loggingHttpsName** | **String**|  | 

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLogHttps

> [InlineResponse200] listLogHttps(serviceId, versionId)

List HTTPS log endpoints

List all of the HTTPS objects for a particular service and version.

### Example

```javascript
import Https from 'https';
let defaultClient = Https.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Https.LoggingHttpsApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.listLogHttps(serviceId, versionId).then((data) => {
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


## updateLogHttps

> InlineObject1 updateLogHttps(serviceId, versionId, loggingHttpsName, opts)

Update an HTTPS log endpoint

Update the HTTPS object for a particular service and version.

### Example

```javascript
import Https from 'https';
let defaultClient = Https.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new Https.LoggingHttpsApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let loggingHttpsName = log-endpoint-name; // String | 
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
  'tlsCaCert': "'null'", // String | A secure certificate to authenticate a server with. Must be in PEM format.
  'tlsClientCert': "'null'", // String | The client certificate used to make authenticated requests. Must be in PEM format.
  'tlsClientKey': "'null'", // String | The client private key used to make authenticated requests. Must be in PEM format.
  'tlsHostname': "'null'", // String | The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
  'requestMaxEntries': 0, // Number | The maximum number of logs sent in one request. Defaults `0` (no limit).
  'requestMaxBytes': 0, // Number | The maximum number of bytes sent in one request. Defaults `0` (no limit).
  'url': "url_example", // String | The URL to send logs to. Must use HTTPS. Required.
  'contentType': "'null'", // String | Content type of the header sent with the request.
  'headerName': "'null'", // String | Name of the custom header sent with the request.
  'messageType': "'classic'", // String | How the message should be formatted.
  'headerValue': "'null'", // String | Value of the custom header sent with the request.
  'method': "'POST'", // String | HTTP method used for request.
  'jsonFormat': "jsonFormat_example" // String | Enforces valid JSON formatting for log entries.
};
apiInstance.updateLogHttps(serviceId, versionId, loggingHttpsName, opts).then((data) => {
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
 **loggingHttpsName** | **String**|  | 
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
 **tlsCaCert** | **String**| A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tlsClientCert** | **String**| The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tlsClientKey** | **String**| The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
 **tlsHostname** | **String**| The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
 **requestMaxEntries** | **Number**| The maximum number of logs sent in one request. Defaults &#x60;0&#x60; (no limit). | [optional] [default to 0]
 **requestMaxBytes** | **Number**| The maximum number of bytes sent in one request. Defaults &#x60;0&#x60; (no limit). | [optional] [default to 0]
 **url** | **String**| The URL to send logs to. Must use HTTPS. Required. | [optional] 
 **contentType** | **String**| Content type of the header sent with the request. | [optional] [default to &#39;null&#39;]
 **headerName** | **String**| Name of the custom header sent with the request. | [optional] [default to &#39;null&#39;]
 **messageType** | **String**| How the message should be formatted. | [optional] [default to &#39;classic&#39;]
 **headerValue** | **String**| Value of the custom header sent with the request. | [optional] [default to &#39;null&#39;]
 **method** | **String**| HTTP method used for request. | [optional] [default to &#39;POST&#39;]
 **jsonFormat** | **String**| Enforces valid JSON formatting for log entries. | [optional] 

### Return type

[**InlineObject1**](InlineObject1.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

