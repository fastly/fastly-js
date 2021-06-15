# FastlyApi.RateLimiterApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRateLimiter**](RateLimiterApi.md#createRateLimiter) | **POST** /service/{service_id}/version/{version_id}/rate-limiters | Create a rate limiter
[**deleteRateLimiter**](RateLimiterApi.md#deleteRateLimiter) | **DELETE** /rate-limiters/{rate_limiter_id} | Delete a rate limiter
[**getRateLimiter**](RateLimiterApi.md#getRateLimiter) | **GET** /rate-limiters/{rate_limiter_id} | Get a rate limiter
[**listRateLimiters**](RateLimiterApi.md#listRateLimiters) | **GET** /service/{service_id}/version/{version_id}/rate-limiters | List rate limiters
[**updateRateLimiter**](RateLimiterApi.md#updateRateLimiter) | **PUT** /rate-limiters/{rate_limiter_id} | Update a rate limiter



## createRateLimiter

> [ModelRateLimiter] createRateLimiter(service_id, version_id, opts)

Create a rate limiter

Create a rate limiter for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.RateLimiterApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'name': "name_example", // String | A human readable name for the rate limiting rule.
  'uri_dictionary_name': "uri_dictionary_name_example", // String | The name of an Edge Dictionary containing URIs as keys. If not defined or null, all origin URIs will be rate limited.
  'http_methods': "http_methods_example", // [String] | Array of HTTP methods to apply rate limiting to.
  'rps_limit': 56, // Number | Upper limit of requests per second allowed by the rate limiter.
  'window_size': 56, // Number | Number of seconds during which the RPS limit must be exceeded in order to trigger a violation.
  'client_key': "client_key_example", // [String] | Array of VCL variables used to generate a counter key to identify a client. Examples variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`.
  'penalty_box_duration': 56, // Number | Length of time in seconds that the rate limiter is in effect after the initial violation is detected.
  'action': "action_example", // String | The action to take when a rate limiter violation is detected. \\\"response\\\" and \\\"response_object\\\" prevent an origin request; \\\"log_only\\\" logs the violation but allows the origin request to continue.
  'response': new FastlyApi.ModelRateLimiterAllOfResponse(), // ModelRateLimiterAllOfResponse | 
  'response_object_name': "response_object_name_example", // String | Name of existing response object. Required if `action` is \\\"response_object\\\". Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration.
  'logger_type': "logger_type_example", // String | Name of the type of logging endpoint to be used when action is \\\"log_only\\\". The logging endpoint type is used to determine the appropriate log format to use when emitting log entries.
  'feature_revision': 56 // Number | Revision number of the rate limiting feature implementation. Defaults to the most recent revision.
};
apiInstance.createRateLimiter(service_id, version_id, opts).then((data) => {
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
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **name** | **String**| A human readable name for the rate limiting rule. | [optional] 
 **uri_dictionary_name** | **String**| The name of an Edge Dictionary containing URIs as keys. If not defined or null, all origin URIs will be rate limited. | [optional] 
 **http_methods** | [**[String]**](String.md)| Array of HTTP methods to apply rate limiting to. | [optional] 
 **rps_limit** | **Number**| Upper limit of requests per second allowed by the rate limiter. | [optional] 
 **window_size** | **Number**| Number of seconds during which the RPS limit must be exceeded in order to trigger a violation. | [optional] 
 **client_key** | [**[String]**](String.md)| Array of VCL variables used to generate a counter key to identify a client. Examples variables include &#x60;req.http.Fastly-Client-IP&#x60;, &#x60;req.http.User-Agent&#x60;, or a custom header like &#x60;req.http.API-Key&#x60;. | [optional] 
 **penalty_box_duration** | **Number**| Length of time in seconds that the rate limiter is in effect after the initial violation is detected. | [optional] 
 **action** | **String**| The action to take when a rate limiter violation is detected. \\\&quot;response\\\&quot; and \\\&quot;response_object\\\&quot; prevent an origin request; \\\&quot;log_only\\\&quot; logs the violation but allows the origin request to continue. | [optional] 
 **response** | [**ModelRateLimiterAllOfResponse**](ModelRateLimiterAllOfResponse.md)|  | [optional] 
 **response_object_name** | **String**| Name of existing response object. Required if &#x60;action&#x60; is \\\&quot;response_object\\\&quot;. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration. | [optional] 
 **logger_type** | **String**| Name of the type of logging endpoint to be used when action is \\\&quot;log_only\\\&quot;. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries. | [optional] 
 **feature_revision** | **Number**| Revision number of the rate limiting feature implementation. Defaults to the most recent revision. | [optional] 

### Return type

[**[ModelRateLimiter]**](ModelRateLimiter.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteRateLimiter

> Object deleteRateLimiter(rate_limiter_id)

Delete a rate limiter

Delete a rate limiter by its ID.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.RateLimiterApi();
let rate_limiter_id = "rate_limiter_id_example"; // String | 
apiInstance.deleteRateLimiter(rate_limiter_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rate_limiter_id** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRateLimiter

> [ModelRateLimiter] getRateLimiter(rate_limiter_id)

Get a rate limiter

Get a rate limiter by its ID.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.RateLimiterApi();
let rate_limiter_id = "rate_limiter_id_example"; // String | 
apiInstance.getRateLimiter(rate_limiter_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rate_limiter_id** | **String**|  | 

### Return type

[**[ModelRateLimiter]**](ModelRateLimiter.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRateLimiters

> [ModelRateLimiter] listRateLimiters(service_id, version_id)

List rate limiters

List all rate limiters for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.RateLimiterApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listRateLimiters(service_id, version_id).then((data) => {
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

[**[ModelRateLimiter]**](ModelRateLimiter.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateRateLimiter

> [ModelRateLimiter] updateRateLimiter(rate_limiter_id, opts)

Update a rate limiter

Update a rate limiter by its ID.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.RateLimiterApi();
let rate_limiter_id = "rate_limiter_id_example"; // String | 
let opts = {
  'service_id': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'name': "name_example", // String | A human readable name for the rate limiting rule.
  'uri_dictionary_name': "uri_dictionary_name_example", // String | The name of an Edge Dictionary containing URIs as keys. If not defined or null, all origin URIs will be rate limited.
  'http_methods': "http_methods_example", // [String] | Array of HTTP methods to apply rate limiting to.
  'rps_limit': 56, // Number | Upper limit of requests per second allowed by the rate limiter.
  'window_size': 56, // Number | Number of seconds during which the RPS limit must be exceeded in order to trigger a violation.
  'client_key': "client_key_example", // [String] | Array of VCL variables used to generate a counter key to identify a client. Examples variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`.
  'penalty_box_duration': 56, // Number | Length of time in seconds that the rate limiter is in effect after the initial violation is detected.
  'action': "action_example", // String | The action to take when a rate limiter violation is detected. \\\"response\\\" and \\\"response_object\\\" prevent an origin request; \\\"log_only\\\" logs the violation but allows the origin request to continue.
  'response': new FastlyApi.ModelRateLimiterAllOfResponse(), // ModelRateLimiterAllOfResponse | 
  'response_object_name': "response_object_name_example", // String | Name of existing response object. Required if `action` is \\\"response_object\\\". Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration.
  'logger_type': "logger_type_example", // String | Name of the type of logging endpoint to be used when action is \\\"log_only\\\". The logging endpoint type is used to determine the appropriate log format to use when emitting log entries.
  'feature_revision': 56 // Number | Revision number of the rate limiting feature implementation. Defaults to the most recent revision.
};
apiInstance.updateRateLimiter(rate_limiter_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rate_limiter_id** | **String**|  | 
 **service_id** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **name** | **String**| A human readable name for the rate limiting rule. | [optional] 
 **uri_dictionary_name** | **String**| The name of an Edge Dictionary containing URIs as keys. If not defined or null, all origin URIs will be rate limited. | [optional] 
 **http_methods** | [**[String]**](String.md)| Array of HTTP methods to apply rate limiting to. | [optional] 
 **rps_limit** | **Number**| Upper limit of requests per second allowed by the rate limiter. | [optional] 
 **window_size** | **Number**| Number of seconds during which the RPS limit must be exceeded in order to trigger a violation. | [optional] 
 **client_key** | [**[String]**](String.md)| Array of VCL variables used to generate a counter key to identify a client. Examples variables include &#x60;req.http.Fastly-Client-IP&#x60;, &#x60;req.http.User-Agent&#x60;, or a custom header like &#x60;req.http.API-Key&#x60;. | [optional] 
 **penalty_box_duration** | **Number**| Length of time in seconds that the rate limiter is in effect after the initial violation is detected. | [optional] 
 **action** | **String**| The action to take when a rate limiter violation is detected. \\\&quot;response\\\&quot; and \\\&quot;response_object\\\&quot; prevent an origin request; \\\&quot;log_only\\\&quot; logs the violation but allows the origin request to continue. | [optional] 
 **response** | [**ModelRateLimiterAllOfResponse**](ModelRateLimiterAllOfResponse.md)|  | [optional] 
 **response_object_name** | **String**| Name of existing response object. Required if &#x60;action&#x60; is \\\&quot;response_object\\\&quot;. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration. | [optional] 
 **logger_type** | **String**| Name of the type of logging endpoint to be used when action is \\\&quot;log_only\\\&quot;. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries. | [optional] 
 **feature_revision** | **Number**| Revision number of the rate limiting feature implementation. Defaults to the most recent revision. | [optional] 

### Return type

[**[ModelRateLimiter]**](ModelRateLimiter.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

