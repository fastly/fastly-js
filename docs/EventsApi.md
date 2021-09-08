# Fastly.EventsApi


```javascript
const apiInstance = new Fastly.EventsApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**getEvent**](EventsApi.md#getEvent) | **GET** /events/{event_id} | Get an event
[**listEvents**](EventsApi.md#listEvents) | **GET** /events | List events



## `getEvent`

```javascript
getEvent({ event_id })
```

Get a specific event.

### Example

```javascript
const options = {
  event_id: "event_id_example", // required};

apiInstance.getEvent(options)
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
**event_id** | **String** |  |

### Return type

[**EventResponse**](EventResponse.md)


## `listEvents`

```javascript
listEvents({ [filter_event_type], [filter_customer_id], [filter_service_id], [filter_user_id], [page_number], [page_size], [sort] })
```

List all events for a particular customer. Events can be filtered by user, customer and event type. Events can be sorted by date.

### Example

```javascript
const options = {

  filter_event_type: "filter_event_type_example",

  filter_customer_id: "filter_customer_id_example",

  filter_service_id: "filter_service_id_example",

  filter_user_id: "filter_user_id_example",

  page_number: 56,

  page_size: 20,

  sort: "'created_at'",
};

apiInstance.listEvents(options)
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
**filter_event_type** | **String** | Limit the returned events to a specific &#x60;event_type&#x60;. | [optional]
**filter_customer_id** | **String** | Limit the results returned to a specific customer. | [optional]
**filter_service_id** | **String** | Limit the results returned to a specific service. | [optional]
**filter_user_id** | **String** | Limit the results returned to a specific user. | [optional]
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [default to 20]
**sort** | **String** | The order in which to list the results by creation date. | [optional] [default to &#39;created_at&#39;]

### Return type

[**EventsResponse**](EventsResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
