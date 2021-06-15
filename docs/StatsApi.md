# FastlyApi.StatsApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getServiceStats**](StatsApi.md#getServiceStats) | **GET** /service/{service_id}/stats/summary | Get stats for a service



## getServiceStats

> getServiceStats(service_id, opts)

Get stats for a service

Get the stats from a service for a block of time. This lists all stats by PoP location, starting with AMS. This call requires parameters to select block of time to query. Use either a timestamp range (using start_time and end_time) or a specified month/year combo (using month and year).

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.StatsApi();
let service_id = "service_id_example"; // String | 
let opts = {
  'month': 05, // String | 2-digit month.
  'year': 2020, // String | 4-digit year.
  'start_time': 56, // Number | Epoch timestamp. Limits the results returned.
  'end_time': 56 // Number | Epoch timestamp. Limits the results returned.
};
apiInstance.getServiceStats(service_id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **month** | **String**| 2-digit month. | [optional] 
 **year** | **String**| 4-digit year. | [optional] 
 **start_time** | **Number**| Epoch timestamp. Limits the results returned. | [optional] 
 **end_time** | **Number**| Epoch timestamp. Limits the results returned. | [optional] 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

