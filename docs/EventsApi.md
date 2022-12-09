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
  event_id: "event_id_example", // required
};

apiInstance.getEvent(options)
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
**event_id** | **String** | Alphanumeric string identifying an event. |

### Return type

[**EventResponse**](EventResponse.md)


## `listEvents`

```javascript
listEvents({ , [filter_customer_id, ][filter_event_type, ][filter_service_id, ][filter_user_id, ][filter_token_id, ][page_number, ][page_size, ][sort] })
```

List all events for a particular customer. Events can be filtered by user, customer and event type. Events can be sorted by date.

### Example

```javascript
const options = {
  filter_customer_id: x4xCwxxJxGCx123Rx5xTx,
  filter_event_type: "filter_event_type_example",
  filter_service_id: "filter_service_id_example",
  filter_user_id: "filter_user_id_example",
  filter_token_id: "filter_token_id_example",
  page_number: 1,
  page_size: 20,
  sort: "created_at",
};

apiInstance.listEvents(options)
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
**filter_customer_id** | **String** | Limit the results returned to a specific customer. | [optional]
**filter_event_type** | **String** | Limit the returned events to a specific `event_type`. | [optional]
**filter_service_id** | **String** | Limit the results returned to a specific service. | [optional]
**filter_user_id** | **String** | Limit the results returned to a specific user. | [optional]
**filter_token_id** | **String** | Limit the returned events to a specific token. | [optional]
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [defaults to 20]
**sort** | **String** | The order in which to list the results by creation date. | [optional] [one of: "created_at", "-created_at"]

### Return type

[**EventsResponse**](EventsResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
