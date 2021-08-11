# FastlyApi.RequestSettingsApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createRequestSettings**](RequestSettingsApi.md#createRequestSettings) | **POST** /service/{service_id}/version/{version_id}/request_settings | Create a Request Settings object
[**deleteRequestSettings**](RequestSettingsApi.md#deleteRequestSettings) | **DELETE** /service/{service_id}/version/{version_id}/request_settings/{request_settings_name} | Delete a Request Settings object
[**getRequestSettings**](RequestSettingsApi.md#getRequestSettings) | **GET** /service/{service_id}/version/{version_id}/request_settings/{request_settings_name} | Get a Request Settings object
[**listRequestSettings**](RequestSettingsApi.md#listRequestSettings) | **GET** /service/{service_id}/version/{version_id}/request_settings | List Request Settings objects
[**updateRequestSettings**](RequestSettingsApi.md#updateRequestSettings) | **PUT** /service/{service_id}/version/{version_id}/request_settings/{request_settings_name} | Update a Request Settings object



## `createRequestSettings`

> createRequestSettings(service_id, version_id)

Create a Request Settings object

Creates a new Request Settings object.

### Example

```javascript
let apiInstance = new FastlyApi.RequestSettingsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.createRequestSettings(service_id, version_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

[**RequestSettingsResponse**](RequestSettingsResponse.md)


## `deleteRequestSettings`

> deleteRequestSettings(service_id, version_id, request_settings_name)

Delete a Request Settings object

Removes the specified Request Settings object.

### Example

```javascript
let apiInstance = new FastlyApi.RequestSettingsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let request_settings_name = "request_settings_name_example"; // String | 
apiInstance.deleteRequestSettings(service_id, version_id, request_settings_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**request_settings_name** | **String** |  |

### Return type

**Object**


## `getRequestSettings`

> getRequestSettings(service_id, version_id, request_settings_name)

Get a Request Settings object

Gets the specified Request Settings object.

### Example

```javascript
let apiInstance = new FastlyApi.RequestSettingsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let request_settings_name = "request_settings_name_example"; // String | 
apiInstance.getRequestSettings(service_id, version_id, request_settings_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**request_settings_name** | **String** |  |

### Return type

[**RequestSettingsResponse**](RequestSettingsResponse.md)


## `listRequestSettings`

> listRequestSettings(service_id, version_id)

List Request Settings objects

Returns a list of all Request Settings objects for the given service and version.

### Example

```javascript
let apiInstance = new FastlyApi.RequestSettingsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listRequestSettings(service_id, version_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

[**[RequestSettingsResponse]**](RequestSettingsResponse.md)


## `updateRequestSettings`

> updateRequestSettings(service_id, version_id, request_settings_name, opts)

Update a Request Settings object

Updates the specified Request Settings object.

### Example

```javascript
let apiInstance = new FastlyApi.RequestSettingsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let request_settings_name = "request_settings_name_example"; // String | 
let opts = {
  'action': "action_example", // String | Allows you to terminate request handling and immediately perform an action.
  'bypass_busy_wait': 56, // Number | Disable collapsed forwarding, so you don't wait for other objects to origin.
  'default_host': "default_host_example", // String | Sets the host header.
  'force_miss': 56, // Number | Allows you to force a cache miss for the request. Replaces the item in the cache if the content is cacheable.
  'force_ssl': 56, // Number | Forces the request use SSL (redirects a non-SSL to SSL).
  'geo_headers': 56, // Number | Injects Fastly-Geo-Country, Fastly-Geo-City, and Fastly-Geo-Region into the request headers.
  'hash_keys': "hash_keys_example", // String | Comma separated list of varnish request object fields that should be in the hash key.
  'max_stale_age': 56, // Number | How old an object is allowed to be to serve stale-if-error or stale-while-revalidate.
  'name': "name_example", // String | Name for the request settings.
  'request_condition': "request_condition_example", // String | Condition which, if met, will select this configuration during a request. Optional.
  'timer_support': 56, // Number | Injects the X-Timer info into the request for viewing origin fetch durations.
  'xff': "xff_example" // String | Short for X-Forwarded-For.
};
apiInstance.updateRequestSettings(service_id, version_id, request_settings_name, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**service_id** | **String** |  |
**version_id** | **Number** |  |
**request_settings_name** | **String** |  |
**action** | **String** | Allows you to terminate request handling and immediately perform an action. | [optional]
**bypass_busy_wait** | **Number** | Disable collapsed forwarding, so you don&#39;t wait for other objects to origin. | [optional]
**default_host** | **String** | Sets the host header. | [optional]
**force_miss** | **Number** | Allows you to force a cache miss for the request. Replaces the item in the cache if the content is cacheable. | [optional]
**force_ssl** | **Number** | Forces the request use SSL (redirects a non-SSL to SSL). | [optional]
**geo_headers** | **Number** | Injects Fastly-Geo-Country, Fastly-Geo-City, and Fastly-Geo-Region into the request headers. | [optional]
**hash_keys** | **String** | Comma separated list of varnish request object fields that should be in the hash key. | [optional]
**max_stale_age** | **Number** | How old an object is allowed to be to serve stale-if-error or stale-while-revalidate. | [optional]
**name** | **String** | Name for the request settings. | [optional]
**request_condition** | **String** | Condition which, if met, will select this configuration during a request. Optional. | [optional]
**timer_support** | **Number** | Injects the X-Timer info into the request for viewing origin fetch durations. | [optional]
**xff** | **String** | Short for X-Forwarded-For. | [optional]

### Return type

[**RequestSettingsResponse**](RequestSettingsResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
