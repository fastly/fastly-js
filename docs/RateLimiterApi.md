# Fastly.RateLimiterApi

```javascript
const apiInstance = new Fastly.RateLimiterApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**deleteRateLimiter**](RateLimiterApi.md#deleteRateLimiter) | **DELETE** /rate-limiters/{rate_limiter_id} | Delete a rate limiter
[**getRateLimiter**](RateLimiterApi.md#getRateLimiter) | **GET** /rate-limiters/{rate_limiter_id} | Get a rate limiter
[**listRateLimiters**](RateLimiterApi.md#listRateLimiters) | **GET** /service/{service_id}/version/{version_id}/rate-limiters | List rate limiters


## `deleteRateLimiter`

```javascript
deleteRateLimiter({ rate_limiter_id })
```

Delete a rate limiter by its ID.

### Example

```javascript
const options = {
  rate_limiter_id: "rate_limiter_id_example", // required
};

apiInstance.deleteRateLimiter(options)
  .then((data) => {
    console.log(data, "API called successfully.");
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**rate_limiter_id** | **String** | Alphanumeric string identifying the rate limiter. |

### Return type

[**InlineResponse200**](InlineResponse200.md)


## `getRateLimiter`

```javascript
getRateLimiter({ rate_limiter_id })
```

Get a rate limiter by its ID.

### Example

```javascript
const options = {
  rate_limiter_id: "rate_limiter_id_example", // required
};

apiInstance.getRateLimiter(options)
  .then((data) => {
    console.log(data, "API called successfully.");
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**rate_limiter_id** | **String** | Alphanumeric string identifying the rate limiter. |

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
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listRateLimiters(options)
  .then((data) => {
    console.log(data, "API called successfully.");
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** | Alphanumeric string identifying the service. |
**version_id** | **Number** | Integer identifying a service version. |

### Return type

[**[RateLimiterResponse]**](RateLimiterResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
