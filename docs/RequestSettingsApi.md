# Fastly.RequestSettingsApi


```javascript
const apiInstance = new Fastly.RequestSettingsApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createRequestSettings**](RequestSettingsApi.md#createRequestSettings) | **POST** /service/{service_id}/version/{version_id}/request_settings | Create a Request Settings object
[**deleteRequestSettings**](RequestSettingsApi.md#deleteRequestSettings) | **DELETE** /service/{service_id}/version/{version_id}/request_settings/{request_settings_name} | Delete a Request Settings object
[**getRequestSettings**](RequestSettingsApi.md#getRequestSettings) | **GET** /service/{service_id}/version/{version_id}/request_settings/{request_settings_name} | Get a Request Settings object
[**listRequestSettings**](RequestSettingsApi.md#listRequestSettings) | **GET** /service/{service_id}/version/{version_id}/request_settings | List Request Settings objects
[**updateRequestSettings**](RequestSettingsApi.md#updateRequestSettings) | **PUT** /service/{service_id}/version/{version_id}/request_settings/{request_settings_name} | Update a Request Settings object



## `createRequestSettings`

```javascript
createRequestSettings({ service_id, version_id })
```

Creates a new Request Settings object.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.createRequestSettings(options)
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
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

[**RequestSettingsResponse**](RequestSettingsResponse.md)


## `deleteRequestSettings`

```javascript
deleteRequestSettings({ service_id, version_id, request_settings_name })
```

Removes the specified Request Settings object.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  request_settings_name: "request_settings_name_example", // required
};

apiInstance.deleteRequestSettings(options)
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
**service_id** | **String** |  |
**version_id** | **Number** |  |
**request_settings_name** | **String** |  |

### Return type

**Object**


## `getRequestSettings`

```javascript
getRequestSettings({ service_id, version_id, request_settings_name })
```

Gets the specified Request Settings object.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  request_settings_name: "request_settings_name_example", // required
};

apiInstance.getRequestSettings(options)
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
**service_id** | **String** |  |
**version_id** | **Number** |  |
**request_settings_name** | **String** |  |

### Return type

[**RequestSettingsResponse**](RequestSettingsResponse.md)


## `listRequestSettings`

```javascript
listRequestSettings({ service_id, version_id })
```

Returns a list of all Request Settings objects for the given service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listRequestSettings(options)
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
**service_id** | **String** |  |
**version_id** | **Number** |  |

### Return type

[**[RequestSettingsResponse]**](RequestSettingsResponse.md)


## `updateRequestSettings`

```javascript
updateRequestSettings({ service_id, version_id, request_settings_name, [action, ][bypass_busy_wait, ][default_host, ][force_miss, ][force_ssl, ][geo_headers, ][hash_keys, ][max_stale_age, ][name, ][request_condition, ][timer_support, ][xff] })
```

Updates the specified Request Settings object.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  request_settings_name: "request_settings_name_example", // required
  action: "lookup",
  bypass_busy_wait: 56,
  default_host: "default_host_example",
  force_miss: 56,
  force_ssl: 56,
  geo_headers: 56,
  hash_keys: "hash_keys_example",
  max_stale_age: 56,
  name: "name_example",
  request_condition: "request_condition_example",
  timer_support: 56,
  xff: "clear",
};

apiInstance.updateRequestSettings(options)
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
**service_id** | **String** |  |
**version_id** | **Number** |  |
**request_settings_name** | **String** |  |
**action** | **String** | Allows you to terminate request handling and immediately perform an action. | [optional] [one of: "lookup", "pass"]
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
**xff** | **String** | Short for X-Forwarded-For. | [optional] [one of: "clear", "leave", "append", "append_all", "overwrite"]

### Return type

[**RequestSettingsResponse**](RequestSettingsResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
