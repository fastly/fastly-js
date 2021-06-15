# FastlyApi.EventsApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEvent**](EventsApi.md#getEvent) | **GET** /events/{event_id} | Get an event
[**listEvents**](EventsApi.md#listEvents) | **GET** /events | List events



## getEvent

> ResourceEvent getEvent(event_id)

Get an event

Get a specific event.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.EventsApi();
let event_id = "event_id_example"; // String | 
apiInstance.getEvent(event_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **String**|  | 

### Return type

[**ResourceEvent**](ResourceEvent.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## listEvents

> Object listEvents(opts)

List events

List all events for a particular customer. Events can be filtered by user, customer and event type. Events can be sorted by date.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.EventsApi();
let opts = {
  'filter_event_type': "filter_event_type_example", // String | Limit the returned events to a specific `event_type`.
  'filter_customer_id': "filter_customer_id_example", // String | Limit the results returned to a specific customer.
  'filter_service_id': "filter_service_id_example", // String | Limit the results returned to a specific service.
  'filter_user_id': "filter_user_id_example", // String | Limit the results returned to a specific user.
  'page_number': 56, // Number | Current page.
  'page_size': 20, // Number | Number of records per page.
  'sort': created_at // String | The order in which to list the results by creation date.
};
apiInstance.listEvents(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_event_type** | **String**| Limit the returned events to a specific &#x60;event_type&#x60;. | [optional] 
 **filter_customer_id** | **String**| Limit the results returned to a specific customer. | [optional] 
 **filter_service_id** | **String**| Limit the results returned to a specific service. | [optional] 
 **filter_user_id** | **String**| Limit the results returned to a specific user. | [optional] 
 **page_number** | **Number**| Current page. | [optional] 
 **page_size** | **Number**| Number of records per page. | [optional] [default to 20]
 **sort** | **String**| The order in which to list the results by creation date. | [optional] [default to &#39;created_at&#39;]

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

