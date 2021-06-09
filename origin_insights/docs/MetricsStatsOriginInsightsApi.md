# OriginInsights.MetricsStatsOriginInsightsApi

All URIs are relative to *https://rt.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOriginInsightsLast120Seconds**](MetricsStatsOriginInsightsApi.md#getOriginInsightsLast120Seconds) | **GET** /v1/channel/{service_id}/ts/h?kind&#x3D;origin_insights | Get real-time origin data for the last 120 seconds
[**getOriginInsightsLastMaxEntries**](MetricsStatsOriginInsightsApi.md#getOriginInsightsLastMaxEntries) | **GET** /v1/channel/{service_id}/ts/h/limit/{max_entries}?kind&#x3D;origin_insights | Get a limited number of real-time origin data entries
[**getOriginInsightsLastSecond**](MetricsStatsOriginInsightsApi.md#getOriginInsightsLastSecond) | **GET** /v1/channel/{service_id}/ts/{start_timestamp}?kind&#x3D;origin_insights | Get real-time origin data for the last second



## getOriginInsightsLast120Seconds

> getOriginInsightsLast120Seconds(serviceId)

Get real-time origin data for the last 120 seconds

Get data for the 120 seconds preceding the latest timestamp available for a service.

### Example

```javascript
import OriginInsights from 'origin_insights';
let defaultClient = OriginInsights.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new OriginInsights.MetricsStatsOriginInsightsApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
apiInstance.getOriginInsightsLast120Seconds(serviceId).then(() => {
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


## getOriginInsightsLastMaxEntries

> getOriginInsightsLastMaxEntries(serviceId, maxEntries)

Get a limited number of real-time origin data entries

Get data for the &#x60;max_entries&#x60; seconds preceding the latest timestamp available for a service, up to a maximum of 120 entries.

### Example

```javascript
import OriginInsights from 'origin_insights';
let defaultClient = OriginInsights.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new OriginInsights.MetricsStatsOriginInsightsApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let maxEntries = 1; // Number | Maximum number of results to show.
apiInstance.getOriginInsightsLastMaxEntries(serviceId, maxEntries).then(() => {
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


## getOriginInsightsLastSecond

> getOriginInsightsLastSecond(serviceId, startTimestamp)

Get real-time origin data for the last second

Get real-time origin data beginning at the specified reporting period. Specify &#x60;0&#x60; to get a single entry for the last complete second. The &#x60;Timestamp&#x60; field included in the response provides the time index of the latest entry in the dataset and can be provided as the &#x60;start_timestamp&#x60; of the next request for a seamless continuation of the data set from one request to the next. Due to processing latency, the earliest entry in the response dataset may be earlier than &#x60;start_timestamp&#x60; by the value of &#x60;AggregateDelay&#x60;. 

### Example

```javascript
import OriginInsights from 'origin_insights';
let defaultClient = OriginInsights.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new OriginInsights.MetricsStatsOriginInsightsApi();
let serviceId = SU1Z0isxPaozGVKXdv0eY; // String | 
let startTimestamp = 1608560817; // Number | Timestamp in seconds (Unix epoch time).
apiInstance.getOriginInsightsLastSecond(serviceId, startTimestamp).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **String**|  | 
 **startTimestamp** | **Number**| Timestamp in seconds (Unix epoch time). | 

### Return type

null (empty response body)

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

