# Fastly.RateLimiterApi


```javascript
const apiInstance = new Fastly.RateLimiterApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createRateLimiter**](RateLimiterApi.md#createRateLimiter) | **POST** /service/{service_id}/version/{version_id}/rate-limiters | Create a rate limiter
[**deleteRateLimiter**](RateLimiterApi.md#deleteRateLimiter) | **DELETE** /rate-limiters/{rate_limiter_id} | Delete a rate limiter
[**getRateLimiter**](RateLimiterApi.md#getRateLimiter) | **GET** /rate-limiters/{rate_limiter_id} | Get a rate limiter
[**listRateLimiters**](RateLimiterApi.md#listRateLimiters) | **GET** /service/{service_id}/version/{version_id}/rate-limiters | List rate limiters
[**updateRateLimiter**](RateLimiterApi.md#updateRateLimiter) | **PUT** /rate-limiters/{rate_limiter_id} | Update a rate limiter



## `createRateLimiter`

```javascript
createRateLimiter({ service_id, version_id, [action], , [client_key], , [feature_revision], , [http_methods], , [logger_type], , [name], , [penalty_box_duration], , [response], , [response_object_name], , [rps_limit], , [uri_dictionary_name], , [window_size] })
```

Create a rate limiter for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required
  action: "action_example",

  client_key: "client_key_example",

  feature_revision: 56,

  http_methods: "http_methods_example",

  logger_type: "logger_type_example",

  name: "name_example",

  penalty_box_duration: 56,

  response: new Fastly.RateLimiterResponse1(),

  response_object_name: "response_object_name_example",

  rps_limit: 56,

  uri_dictionary_name: "uri_dictionary_name_example",

  window_size: 56,
};

apiInstance.createRateLimiter(options)
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
**action** | **String** | The action to take when a rate limiter violation is detected. | [optional]
**client_key** | [**[String]**](../Model/String.md) | Array of VCL variables used to generate a counter key to identify a client. Example variables include &#x60;req.http.Fastly-Client-IP&#x60;, &#x60;req.http.User-Agent&#x60;, or a custom header like &#x60;req.http.API-Key&#x60;. | [optional]
**feature_revision** | **Number** | Revision number of the rate limiting feature implementation. Defaults to the most recent revision. | [optional]
**http_methods** | [**[String]**](../Model/String.md) | Array of HTTP methods to apply rate limiting to. | [optional]
**logger_type** | **String** | Name of the type of logging endpoint to be used when action is &#x60;log_only&#x60;. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries. | [optional]
**name** | **String** | A human readable name for the rate limiting rule. | [optional]
**penalty_box_duration** | **Number** | Length of time in seconds that the rate limiter is in effect after the initial violation is detected. | [optional]
**response** | [**RateLimiterResponse1**](../Model/RateLimiterResponse1.md) |  | [optional]
**response_object_name** | **String** | Name of existing response object. Required if &#x60;action&#x60; is &#x60;response_object&#x60;. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration. | [optional]
**rps_limit** | **Number** | Upper limit of requests per second allowed by the rate limiter. | [optional]
**uri_dictionary_name** | **String** | The name of an Edge Dictionary containing URIs as keys. If not defined or &#x60;null&#x60;, all origin URIs will be rate limited. | [optional]
**window_size** | **Number** | Number of seconds during which the RPS limit must be exceeded in order to trigger a violation. | [optional]

### Return type

[**RateLimiterResponse**](RateLimiterResponse.md)


## `deleteRateLimiter`

```javascript
deleteRateLimiter({ rate_limiter_id })
```

Delete a rate limiter by its ID.

### Example

```javascript
const options = {
  rate_limiter_id: "rate_limiter_id_example", // required};

apiInstance.deleteRateLimiter(options)
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
**rate_limiter_id** | **String** |  |

### Return type

**Object**


## `getRateLimiter`

```javascript
getRateLimiter({ rate_limiter_id })
```

Get a rate limiter by its ID.

### Example

```javascript
const options = {
  rate_limiter_id: "rate_limiter_id_example", // required};

apiInstance.getRateLimiter(options)
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
**rate_limiter_id** | **String** |  |

### Return type

[**RateLimiterResponse**](RateLimiterResponse.md)


## `listRateLimiters`

```javascript
listRateLimiters({ service_id, version_id })
```

List all rate limiters for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required};

apiInstance.listRateLimiters(options)
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

[**[RateLimiterResponse]**](RateLimiterResponse.md)


## `updateRateLimiter`

```javascript
updateRateLimiter({ rate_limiter_id, [action], , [client_key], , [feature_revision], , [http_methods], , [logger_type], , [name], , [penalty_box_duration], , [response], , [response_object_name], , [rps_limit], , [uri_dictionary_name], , [window_size] })
```

Update a rate limiter by its ID.

### Example

```javascript
const options = {
  rate_limiter_id: "rate_limiter_id_example", // required
  action: "action_example",

  client_key: "client_key_example",

  feature_revision: 56,

  http_methods: "http_methods_example",

  logger_type: "logger_type_example",

  name: "name_example",

  penalty_box_duration: 56,

  response: new Fastly.RateLimiterResponse1(),

  response_object_name: "response_object_name_example",

  rps_limit: 56,

  uri_dictionary_name: "uri_dictionary_name_example",

  window_size: 56,
};

apiInstance.updateRateLimiter(options)
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
**rate_limiter_id** | **String** |  |
**action** | **String** | The action to take when a rate limiter violation is detected. | [optional]
**client_key** | [**[String]**](../Model/String.md) | Array of VCL variables used to generate a counter key to identify a client. Example variables include &#x60;req.http.Fastly-Client-IP&#x60;, &#x60;req.http.User-Agent&#x60;, or a custom header like &#x60;req.http.API-Key&#x60;. | [optional]
**feature_revision** | **Number** | Revision number of the rate limiting feature implementation. Defaults to the most recent revision. | [optional]
**http_methods** | [**[String]**](../Model/String.md) | Array of HTTP methods to apply rate limiting to. | [optional]
**logger_type** | **String** | Name of the type of logging endpoint to be used when action is &#x60;log_only&#x60;. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries. | [optional]
**name** | **String** | A human readable name for the rate limiting rule. | [optional]
**penalty_box_duration** | **Number** | Length of time in seconds that the rate limiter is in effect after the initial violation is detected. | [optional]
**response** | [**RateLimiterResponse1**](../Model/RateLimiterResponse1.md) |  | [optional]
**response_object_name** | **String** | Name of existing response object. Required if &#x60;action&#x60; is &#x60;response_object&#x60;. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration. | [optional]
**rps_limit** | **Number** | Upper limit of requests per second allowed by the rate limiter. | [optional]
**uri_dictionary_name** | **String** | The name of an Edge Dictionary containing URIs as keys. If not defined or &#x60;null&#x60;, all origin URIs will be rate limited. | [optional]
**window_size** | **Number** | Number of seconds during which the RPS limit must be exceeded in order to trigger a violation. | [optional]

### Return type

[**RateLimiterResponse**](RateLimiterResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
