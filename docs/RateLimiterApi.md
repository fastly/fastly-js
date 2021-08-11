# FastlyApi.RateLimiterApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createRateLimiter**](RateLimiterApi.md#createRateLimiter) | **POST** /service/{service_id}/version/{version_id}/rate-limiters | Create a rate limiter
[**deleteRateLimiter**](RateLimiterApi.md#deleteRateLimiter) | **DELETE** /rate-limiters/{rate_limiter_id} | Delete a rate limiter
[**getRateLimiter**](RateLimiterApi.md#getRateLimiter) | **GET** /rate-limiters/{rate_limiter_id} | Get a rate limiter
[**listRateLimiters**](RateLimiterApi.md#listRateLimiters) | **GET** /service/{service_id}/version/{version_id}/rate-limiters | List rate limiters
[**updateRateLimiter**](RateLimiterApi.md#updateRateLimiter) | **PUT** /rate-limiters/{rate_limiter_id} | Update a rate limiter



## `createRateLimiter`

> createRateLimiter(service_id, version_id, opts)

Create a rate limiter

Create a rate limiter for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.RateLimiterApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'name': "name_example", // String | A human readable name for the rate limiting rule.
  'uri_dictionary_name': "uri_dictionary_name_example", // String | The name of an Edge Dictionary containing URIs as keys. If not defined or `null`, all origin URIs will be rate limited.
  'http_methods': "http_methods_example", // [String] | Array of HTTP methods to apply rate limiting to.
  'rps_limit': 56, // Number | Upper limit of requests per second allowed by the rate limiter.
  'window_size': 56, // Number | Number of seconds during which the RPS limit must be exceeded in order to trigger a violation.
  'client_key': "client_key_example", // [String] | Array of VCL variables used to generate a counter key to identify a client. Example variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`.
  'penalty_box_duration': 56, // Number | Length of time in seconds that the rate limiter is in effect after the initial violation is detected.
  'action': "action_example", // String | The action to take when a rate limiter violation is detected.
  'response': new FastlyApi.RateLimiterResponse1(), // RateLimiterResponse1 | 
  'response_object_name': "response_object_name_example", // String | Name of existing response object. Required if `action` is `response_object`. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration.
  'logger_type': "logger_type_example", // String | Name of the type of logging endpoint to be used when action is `log_only`. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries.
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
**service_id** | **String** |  |
**version_id** | **Number** |  |
**name** | **String** | A human readable name for the rate limiting rule. | [optional]
**uri_dictionary_name** | **String** | The name of an Edge Dictionary containing URIs as keys. If not defined or &#x60;null&#x60;, all origin URIs will be rate limited. | [optional]
**http_methods** | [**[String]**](../Model/String.md) | Array of HTTP methods to apply rate limiting to. | [optional]
**rps_limit** | **Number** | Upper limit of requests per second allowed by the rate limiter. | [optional]
**window_size** | **Number** | Number of seconds during which the RPS limit must be exceeded in order to trigger a violation. | [optional]
**client_key** | [**[String]**](../Model/String.md) | Array of VCL variables used to generate a counter key to identify a client. Example variables include &#x60;req.http.Fastly-Client-IP&#x60;, &#x60;req.http.User-Agent&#x60;, or a custom header like &#x60;req.http.API-Key&#x60;. | [optional]
**penalty_box_duration** | **Number** | Length of time in seconds that the rate limiter is in effect after the initial violation is detected. | [optional]
**action** | **String** | The action to take when a rate limiter violation is detected. | [optional]
**response** | [**RateLimiterResponse1**](../Model/RateLimiterResponse1.md) |  | [optional]
**response_object_name** | **String** | Name of existing response object. Required if &#x60;action&#x60; is &#x60;response_object&#x60;. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration. | [optional]
**logger_type** | **String** | Name of the type of logging endpoint to be used when action is &#x60;log_only&#x60;. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries. | [optional]
**feature_revision** | **Number** | Revision number of the rate limiting feature implementation. Defaults to the most recent revision. | [optional]

### Return type

[**RateLimiterResponse**](RateLimiterResponse.md)


## `deleteRateLimiter`

> deleteRateLimiter(rate_limiter_id)

Delete a rate limiter

Delete a rate limiter by its ID.

### Example

```javascript
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
**rate_limiter_id** | **String** |  |

### Return type

**Object**


## `getRateLimiter`

> getRateLimiter(rate_limiter_id)

Get a rate limiter

Get a rate limiter by its ID.

### Example

```javascript
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
**rate_limiter_id** | **String** |  |

### Return type

[**RateLimiterResponse**](RateLimiterResponse.md)


## `listRateLimiters`

> listRateLimiters(service_id, version_id)

List rate limiters

List all rate limiters for a particular service and version.

### Example

```javascript
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
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

[**[RateLimiterResponse]**](RateLimiterResponse.md)


## `updateRateLimiter`

> updateRateLimiter(rate_limiter_id, opts)

Update a rate limiter

Update a rate limiter by its ID.

### Example

```javascript
let apiInstance = new FastlyApi.RateLimiterApi();
let rate_limiter_id = "rate_limiter_id_example"; // String | 
let opts = {
  'name': "name_example", // String | A human readable name for the rate limiting rule.
  'uri_dictionary_name': "uri_dictionary_name_example", // String | The name of an Edge Dictionary containing URIs as keys. If not defined or `null`, all origin URIs will be rate limited.
  'http_methods': "http_methods_example", // [String] | Array of HTTP methods to apply rate limiting to.
  'rps_limit': 56, // Number | Upper limit of requests per second allowed by the rate limiter.
  'window_size': 56, // Number | Number of seconds during which the RPS limit must be exceeded in order to trigger a violation.
  'client_key': "client_key_example", // [String] | Array of VCL variables used to generate a counter key to identify a client. Example variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`.
  'penalty_box_duration': 56, // Number | Length of time in seconds that the rate limiter is in effect after the initial violation is detected.
  'action': "action_example", // String | The action to take when a rate limiter violation is detected.
  'response': new FastlyApi.RateLimiterResponse1(), // RateLimiterResponse1 | 
  'response_object_name': "response_object_name_example", // String | Name of existing response object. Required if `action` is `response_object`. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration.
  'logger_type': "logger_type_example", // String | Name of the type of logging endpoint to be used when action is `log_only`. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries.
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
**rate_limiter_id** | **String** |  |
**name** | **String** | A human readable name for the rate limiting rule. | [optional]
**uri_dictionary_name** | **String** | The name of an Edge Dictionary containing URIs as keys. If not defined or &#x60;null&#x60;, all origin URIs will be rate limited. | [optional]
**http_methods** | [**[String]**](../Model/String.md) | Array of HTTP methods to apply rate limiting to. | [optional]
**rps_limit** | **Number** | Upper limit of requests per second allowed by the rate limiter. | [optional]
**window_size** | **Number** | Number of seconds during which the RPS limit must be exceeded in order to trigger a violation. | [optional]
**client_key** | [**[String]**](../Model/String.md) | Array of VCL variables used to generate a counter key to identify a client. Example variables include &#x60;req.http.Fastly-Client-IP&#x60;, &#x60;req.http.User-Agent&#x60;, or a custom header like &#x60;req.http.API-Key&#x60;. | [optional]
**penalty_box_duration** | **Number** | Length of time in seconds that the rate limiter is in effect after the initial violation is detected. | [optional]
**action** | **String** | The action to take when a rate limiter violation is detected. | [optional]
**response** | [**RateLimiterResponse1**](../Model/RateLimiterResponse1.md) |  | [optional]
**response_object_name** | **String** | Name of existing response object. Required if &#x60;action&#x60; is &#x60;response_object&#x60;. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration. | [optional]
**logger_type** | **String** | Name of the type of logging endpoint to be used when action is &#x60;log_only&#x60;. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries. | [optional]
**feature_revision** | **Number** | Revision number of the rate limiting feature implementation. Defaults to the most recent revision. | [optional]

### Return type

[**RateLimiterResponse**](RateLimiterResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
