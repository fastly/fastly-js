# RealTimeAnalytics.MetricsStatsRealtimeApi

All URIs are relative to *https://rt.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStatsLast120Seconds**](MetricsStatsRealtimeApi.md#getStatsLast120Seconds) | **GET** /v1/channel/{service_id}/ts/h | Get real-time data for the last 120 seconds
[**getStatsLast120SecondsLimitEntries**](MetricsStatsRealtimeApi.md#getStatsLast120SecondsLimitEntries) | **GET** /v1/channel/{service_id}/ts/h/limit/{max_entries} | Get a limited number of real-time data entries
[**getStatsLastSecond**](MetricsStatsRealtimeApi.md#getStatsLastSecond) | **GET** /v1/channel/{service_id}/ts/{timestamp_in_seconds} | Get real-time data for the last second



## getStatsLast120Seconds

> getStatsLast120Seconds(serviceId)

Get real-time data for the last 120 seconds

Get data for the 120 seconds preceding the latest timestamp available for a service.

### Example

```javascript
import RealTimeAnalytics from 'real_time_analytics';
let defaultClient = RealTimeAnalytics.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new RealTimeAnalytics.MetricsStatsRealtimeApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
apiInstance.getStatsLast120Seconds(serviceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStatsLast120SecondsLimitEntries

> getStatsLast120SecondsLimitEntries(serviceId, maxEntries)

Get a limited number of real-time data entries

Get data for the 120 seconds preceding the latest timestamp available for a service, up to a maximum of &#x60;max_entries&#x60; entries.

### Example

```javascript
import RealTimeAnalytics from 'real_time_analytics';
let defaultClient = RealTimeAnalytics.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new RealTimeAnalytics.MetricsStatsRealtimeApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let maxEntries = 1; // Number | Maximum number of results to show.
apiInstance.getStatsLast120SecondsLimitEntries(serviceId, maxEntries).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **maxEntries** | **Number**| Maximum number of results to show. | 

### Return type

null (empty response body)

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStatsLastSecond

> getStatsLastSecond(serviceId, timestampInSeconds)

Get real-time data for the last second

Get real-time data for the last second. For the first request, the timestamp can be &#x60;0&#x60;. The response will then return a new timestamp field, which should be used for the next request.

### Example

```javascript
import RealTimeAnalytics from 'real_time_analytics';
let defaultClient = RealTimeAnalytics.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new RealTimeAnalytics.MetricsStatsRealtimeApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let timestampInSeconds = 1608560817; // Number | Timestamp in seconds (Unix epoch time).
apiInstance.getStatsLastSecond(serviceId, timestampInSeconds).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **timestampInSeconds** | **Number**| Timestamp in seconds (Unix epoch time). | 

### Return type

null (empty response body)

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

