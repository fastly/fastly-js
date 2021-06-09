# RateLimiter.VclServicesRateLimiterApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRateLimiter**](VclServicesRateLimiterApi.md#createRateLimiter) | **POST** /service/{service_id}/version/{version_id}/rate-limiters | Create a rate limiter
[**deleteRateLimiter**](VclServicesRateLimiterApi.md#deleteRateLimiter) | **DELETE** /rate-limiters/{rate_limiter_id} | Delete a rate limiter
[**getRateLimiter**](VclServicesRateLimiterApi.md#getRateLimiter) | **GET** /rate-limiters/{rate_limiter_id} | Get a rate limiter
[**listRateLimiters**](VclServicesRateLimiterApi.md#listRateLimiters) | **GET** /service/{service_id}/version/{version_id}/rate-limiters | List rate limiters
[**updateRateLimiter**](VclServicesRateLimiterApi.md#updateRateLimiter) | **PUT** /rate-limiters/{rate_limiter_id} | Update a rate limiter



## createRateLimiter

> [InlineObject] createRateLimiter(serviceId, versionId, name, httpMethods, rpsLimit, windowSize, clientKey, penaltyBoxDuration, action, opts)

Create a rate limiter

Create a rate limiter for a particular service and version.

### Example

```javascript
import RateLimiter from 'rate_limiter';
let defaultClient = RateLimiter.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new RateLimiter.VclServicesRateLimiterApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
let name = "name_example"; // String | A human readable name for the rate limiting rule.
let httpMethods = "httpMethods_example"; // [String] | Array of HTTP methods to apply rate limiting to.
let rpsLimit = 56; // Number | Upper limit of requests per second allowed by the rate limiter.
let windowSize = 56; // Number | Number of seconds during which the RPS limit must be exceeded in order to trigger a violation.
let clientKey = "clientKey_example"; // [String] | Array of VCL variables used to generate a counter key to identify a client. Examples variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`.
let penaltyBoxDuration = 56; // Number | Length of time in seconds that the rate limiter is in effect after the initial violation is detected.
let action = "action_example"; // String | The action to take when a rate limiter violation is detected. \\\"response\\\" and \\\"response_object\\\" prevent an origin request; \\\"log_only\\\" logs the violation but allows the origin request to continue.
let opts = {
  'serviceId2': "serviceId_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'createdAt': "createdAt_example", // String | Date and time in ISO 8601 format.
  'deletedAt': "deletedAt_example", // String | Date and time in ISO 8601 format.
  'updatedAt': "updatedAt_example", // String | Date and time in ISO 8601 format.
  'uriDictionaryName': "uriDictionaryName_example", // String | The name of an Edge Dictionary containing URIs as keys. If not defined or null, all origin URIs will be rate limited.
  'response': new RateLimiter.ServiceServiceIdVersionVersionIdRateLimitersResponse(), // ServiceServiceIdVersionVersionIdRateLimitersResponse | 
  'responseObjectName': "responseObjectName_example", // String | Name of existing response object. Required if `action` is \\\"response_object\\\". Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration.
  'loggerType': "loggerType_example", // String | Name of the type of logging endpoint to be used when action is \\\"log_only\\\". The logging endpoint type is used to determine the appropriate log format to use when emitting log entries.
  'featureRevision': 56 // Number | Revision number of the rate limiting feature implementation. Defaults to the most recent revision.
};
apiInstance.createRateLimiter(serviceId, versionId, name, httpMethods, rpsLimit, windowSize, clientKey, penaltyBoxDuration, action, opts).then((data) => {
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
 **name** | **String**| A human readable name for the rate limiting rule. | 
 **httpMethods** | [**[String]**](String.md)| Array of HTTP methods to apply rate limiting to. | 
 **rpsLimit** | **Number**| Upper limit of requests per second allowed by the rate limiter. | 
 **windowSize** | **Number**| Number of seconds during which the RPS limit must be exceeded in order to trigger a violation. | 
 **clientKey** | [**[String]**](String.md)| Array of VCL variables used to generate a counter key to identify a client. Examples variables include &#x60;req.http.Fastly-Client-IP&#x60;, &#x60;req.http.User-Agent&#x60;, or a custom header like &#x60;req.http.API-Key&#x60;. | 
 **penaltyBoxDuration** | **Number**| Length of time in seconds that the rate limiter is in effect after the initial violation is detected. | 
 **action** | **String**| The action to take when a rate limiter violation is detected. \\\&quot;response\\\&quot; and \\\&quot;response_object\\\&quot; prevent an origin request; \\\&quot;log_only\\\&quot; logs the violation but allows the origin request to continue. | 
 **serviceId2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **createdAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deletedAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updatedAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **uriDictionaryName** | **String**| The name of an Edge Dictionary containing URIs as keys. If not defined or null, all origin URIs will be rate limited. | [optional] 
 **response** | [**ServiceServiceIdVersionVersionIdRateLimitersResponse**](ServiceServiceIdVersionVersionIdRateLimitersResponse.md)|  | [optional] 
 **responseObjectName** | **String**| Name of existing response object. Required if &#x60;action&#x60; is \\\&quot;response_object\\\&quot;. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration. | [optional] 
 **loggerType** | **String**| Name of the type of logging endpoint to be used when action is \\\&quot;log_only\\\&quot;. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries. | [optional] 
 **featureRevision** | **Number**| Revision number of the rate limiting feature implementation. Defaults to the most recent revision. | [optional] 

### Return type

[**[InlineObject]**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteRateLimiter

> Object deleteRateLimiter(rateLimiterId)

Delete a rate limiter

Delete a rate limiter by its ID.

### Example

```javascript
import RateLimiter from 'rate_limiter';
let defaultClient = RateLimiter.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new RateLimiter.VclServicesRateLimiterApi();
let rateLimiterId = "rateLimiterId_example"; // String | 
apiInstance.deleteRateLimiter(rateLimiterId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rateLimiterId** | **String**|  | 

### Return type

**Object**

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRateLimiter

> [InlineObject] getRateLimiter(rateLimiterId)

Get a rate limiter

Get a rate limiter by its ID.

### Example

```javascript
import RateLimiter from 'rate_limiter';
let defaultClient = RateLimiter.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new RateLimiter.VclServicesRateLimiterApi();
let rateLimiterId = "rateLimiterId_example"; // String | 
apiInstance.getRateLimiter(rateLimiterId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rateLimiterId** | **String**|  | 

### Return type

[**[InlineObject]**](InlineObject.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRateLimiters

> [InlineResponse200] listRateLimiters(serviceId, versionId)

List rate limiters

List all rate limiters for a particular service and version.

### Example

```javascript
import RateLimiter from 'rate_limiter';
let defaultClient = RateLimiter.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new RateLimiter.VclServicesRateLimiterApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let versionId = 1; // Number | 
apiInstance.listRateLimiters(serviceId, versionId).then((data) => {
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


## updateRateLimiter

> [InlineObject1] updateRateLimiter(rateLimiterId, name, httpMethods, rpsLimit, windowSize, clientKey, penaltyBoxDuration, action, opts)

Update a rate limiter

Update a rate limiter by its ID.

### Example

```javascript
import RateLimiter from 'rate_limiter';
let defaultClient = RateLimiter.ApiClient.instance;
// Configure API key authorization: token_engineer
let token_engineer = defaultClient.authentications['token_engineer'];
token_engineer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_engineer.apiKeyPrefix = 'Token';

let apiInstance = new RateLimiter.VclServicesRateLimiterApi();
let rateLimiterId = "rateLimiterId_example"; // String | 
let name = "name_example"; // String | A human readable name for the rate limiting rule.
let httpMethods = "httpMethods_example"; // [String] | Array of HTTP methods to apply rate limiting to.
let rpsLimit = 56; // Number | Upper limit of requests per second allowed by the rate limiter.
let windowSize = 56; // Number | Number of seconds during which the RPS limit must be exceeded in order to trigger a violation.
let clientKey = "clientKey_example"; // [String] | Array of VCL variables used to generate a counter key to identify a client. Examples variables include `req.http.Fastly-Client-IP`, `req.http.User-Agent`, or a custom header like `req.http.API-Key`.
let penaltyBoxDuration = 56; // Number | Length of time in seconds that the rate limiter is in effect after the initial violation is detected.
let action = "action_example"; // String | The action to take when a rate limiter violation is detected. \\\"response\\\" and \\\"response_object\\\" prevent an origin request; \\\"log_only\\\" logs the violation but allows the origin request to continue.
let opts = {
  'serviceId': "serviceId_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'createdAt': "createdAt_example", // String | Date and time in ISO 8601 format.
  'deletedAt': "deletedAt_example", // String | Date and time in ISO 8601 format.
  'updatedAt': "updatedAt_example", // String | Date and time in ISO 8601 format.
  'uriDictionaryName': "uriDictionaryName_example", // String | The name of an Edge Dictionary containing URIs as keys. If not defined or null, all origin URIs will be rate limited.
  'response': new RateLimiter.ServiceServiceIdVersionVersionIdRateLimitersResponse(), // ServiceServiceIdVersionVersionIdRateLimitersResponse | 
  'responseObjectName': "responseObjectName_example", // String | Name of existing response object. Required if `action` is \\\"response_object\\\". Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration.
  'loggerType': "loggerType_example", // String | Name of the type of logging endpoint to be used when action is \\\"log_only\\\". The logging endpoint type is used to determine the appropriate log format to use when emitting log entries.
  'featureRevision': 56 // Number | Revision number of the rate limiting feature implementation. Defaults to the most recent revision.
};
apiInstance.updateRateLimiter(rateLimiterId, name, httpMethods, rpsLimit, windowSize, clientKey, penaltyBoxDuration, action, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rateLimiterId** | **String**|  | 
 **name** | **String**| A human readable name for the rate limiting rule. | 
 **httpMethods** | [**[String]**](String.md)| Array of HTTP methods to apply rate limiting to. | 
 **rpsLimit** | **Number**| Upper limit of requests per second allowed by the rate limiter. | 
 **windowSize** | **Number**| Number of seconds during which the RPS limit must be exceeded in order to trigger a violation. | 
 **clientKey** | [**[String]**](String.md)| Array of VCL variables used to generate a counter key to identify a client. Examples variables include &#x60;req.http.Fastly-Client-IP&#x60;, &#x60;req.http.User-Agent&#x60;, or a custom header like &#x60;req.http.API-Key&#x60;. | 
 **penaltyBoxDuration** | **Number**| Length of time in seconds that the rate limiter is in effect after the initial violation is detected. | 
 **action** | **String**| The action to take when a rate limiter violation is detected. \\\&quot;response\\\&quot; and \\\&quot;response_object\\\&quot; prevent an origin request; \\\&quot;log_only\\\&quot; logs the violation but allows the origin request to continue. | 
 **serviceId** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **createdAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deletedAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updatedAt** | **String**| Date and time in ISO 8601 format. | [optional] 
 **uriDictionaryName** | **String**| The name of an Edge Dictionary containing URIs as keys. If not defined or null, all origin URIs will be rate limited. | [optional] 
 **response** | [**ServiceServiceIdVersionVersionIdRateLimitersResponse**](ServiceServiceIdVersionVersionIdRateLimitersResponse.md)|  | [optional] 
 **responseObjectName** | **String**| Name of existing response object. Required if &#x60;action&#x60; is \\\&quot;response_object\\\&quot;. Note that the rate limiter response is only updated to reflect the response object content when saving the rate limiter configuration. | [optional] 
 **loggerType** | **String**| Name of the type of logging endpoint to be used when action is \\\&quot;log_only\\\&quot;. The logging endpoint type is used to determine the appropriate log format to use when emitting log entries. | [optional] 
 **featureRevision** | **Number**| Revision number of the rate limiting feature implementation. Defaults to the most recent revision. | [optional] 

### Return type

[**[InlineObject1]**](InlineObject1.md)

### Authorization

[token_engineer](../README.md#token_engineer)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

