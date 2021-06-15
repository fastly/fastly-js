# FastlyApi.OriginInsightsApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOriginInsightsLast120Seconds**](OriginInsightsApi.md#getOriginInsightsLast120Seconds) | **GET** /v1/channel/{service_id}/ts/h?kind&#x3D;origin_insights | Get real-time origin data for the last 120 seconds
[**getOriginInsightsLastMaxEntries**](OriginInsightsApi.md#getOriginInsightsLastMaxEntries) | **GET** /v1/channel/{service_id}/ts/h/limit/{max_entries}?kind&#x3D;origin_insights | Get a limited number of real-time origin data entries
[**getOriginInsightsLastSecond**](OriginInsightsApi.md#getOriginInsightsLastSecond) | **GET** /v1/channel/{service_id}/ts/{start_timestamp}?kind&#x3D;origin_insights | Get real-time origin data for the last second



## getOriginInsightsLast120Seconds

> getOriginInsightsLast120Seconds(service_id)

Get real-time origin data for the last 120 seconds

Get data for the 120 seconds preceding the latest timestamp available for a service.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.OriginInsightsApi();
let service_id = "service_id_example"; // String | 
apiInstance.getOriginInsightsLast120Seconds(service_id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOriginInsightsLastMaxEntries

> getOriginInsightsLastMaxEntries(service_id, max_entries)

Get a limited number of real-time origin data entries

Get data for the &#x60;max_entries&#x60; seconds preceding the latest timestamp available for a service, up to a maximum of 120 entries.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.OriginInsightsApi();
let service_id = "service_id_example"; // String | 
let max_entries = 1; // Number | Maximum number of results to show.
apiInstance.getOriginInsightsLastMaxEntries(service_id, max_entries).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **max_entries** | **Number**| Maximum number of results to show. | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOriginInsightsLastSecond

> getOriginInsightsLastSecond(service_id, start_timestamp)

Get real-time origin data for the last second

Get real-time origin data beginning at the specified reporting period. Specify &#x60;0&#x60; to get a single entry for the last complete second. The &#x60;Timestamp&#x60; field included in the response provides the time index of the latest entry in the dataset and can be provided as the &#x60;start_timestamp&#x60; of the next request for a seamless continuation of the data set from one request to the next. Due to processing latency, the earliest entry in the response dataset may be earlier than &#x60;start_timestamp&#x60; by the value of &#x60;AggregateDelay&#x60;. 

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.OriginInsightsApi();
let service_id = "service_id_example"; // String | 
let start_timestamp = 56; // Number | Timestamp in seconds (Unix epoch time).
apiInstance.getOriginInsightsLastSecond(service_id, start_timestamp).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **start_timestamp** | **Number**| Timestamp in seconds (Unix epoch time). | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

