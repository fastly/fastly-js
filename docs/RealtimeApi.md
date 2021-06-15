# FastlyApi.RealtimeApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStatsLast120Seconds**](RealtimeApi.md#getStatsLast120Seconds) | **GET** /v1/channel/{service_id}/ts/h | Get real-time data for the last 120 seconds
[**getStatsLast120SecondsLimitEntries**](RealtimeApi.md#getStatsLast120SecondsLimitEntries) | **GET** /v1/channel/{service_id}/ts/h/limit/{max_entries} | Get a limited number of real-time data entries
[**getStatsLastSecond**](RealtimeApi.md#getStatsLastSecond) | **GET** /v1/channel/{service_id}/ts/{timestamp_in_seconds} | Get real-time data for the last second



## getStatsLast120Seconds

> getStatsLast120Seconds(service_id)

Get real-time data for the last 120 seconds

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

let apiInstance = new FastlyApi.RealtimeApi();
let service_id = "service_id_example"; // String | 
apiInstance.getStatsLast120Seconds(service_id).then(() => {
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


## getStatsLast120SecondsLimitEntries

> getStatsLast120SecondsLimitEntries(service_id, max_entries)

Get a limited number of real-time data entries

Get data for the 120 seconds preceding the latest timestamp available for a service, up to a maximum of &#x60;max_entries&#x60; entries.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.RealtimeApi();
let service_id = "service_id_example"; // String | 
let max_entries = 1; // Number | Maximum number of results to show.
apiInstance.getStatsLast120SecondsLimitEntries(service_id, max_entries).then(() => {
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


## getStatsLastSecond

> getStatsLastSecond(service_id, timestamp_in_seconds)

Get real-time data for the last second

Get real-time data for the last second. For the first request, the timestamp can be &#x60;0&#x60;. The response will then return a new timestamp field, which should be used for the next request.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.RealtimeApi();
let service_id = "service_id_example"; // String | 
let timestamp_in_seconds = 56; // Number | Timestamp in seconds (Unix epoch time).
apiInstance.getStatsLastSecond(service_id, timestamp_in_seconds).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **timestamp_in_seconds** | **Number**| Timestamp in seconds (Unix epoch time). | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

