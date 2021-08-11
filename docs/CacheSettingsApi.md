# FastlyApi.CacheSettingsApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createCacheSettings**](CacheSettingsApi.md#createCacheSettings) | **POST** /service/{service_id}/version/{version_id}/cache_settings | Create a cache settings object
[**deleteCacheSettings**](CacheSettingsApi.md#deleteCacheSettings) | **DELETE** /service/{service_id}/version/{version_id}/cache_settings/{cache_settings_name} | Delete a cache settings object
[**getCacheSettings**](CacheSettingsApi.md#getCacheSettings) | **GET** /service/{service_id}/version/{version_id}/cache_settings/{cache_settings_name} | Get a cache settings object
[**listCacheSettings**](CacheSettingsApi.md#listCacheSettings) | **GET** /service/{service_id}/version/{version_id}/cache_settings | List cache settings objects
[**updateCacheSettings**](CacheSettingsApi.md#updateCacheSettings) | **PUT** /service/{service_id}/version/{version_id}/cache_settings/{cache_settings_name} | Update a cache settings object



## `createCacheSettings`

> CacheSettingResponse createCacheSettings(service_id, version_id, opts)

Create a cache settings object

Create a cache settings object.

### Example

```javascript
let apiInstance = new FastlyApi.CacheSettingsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'action': "action_example", // String | If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule. 
  'cache_condition': "cache_condition_example", // String | Name of the cache condition controlling when this configuration applies.
  'name': "name_example", // String | Name for the cache settings object.
  'stale_ttl': 56, // Number | Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as 'stale if error').
  'ttl': 56 // Number | Maximum time to consider the object fresh in the cache (the cache 'time to live').
};
apiInstance.createCacheSettings(service_id, version_id, opts).then((data) => {
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
**action** | **String** | If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule.  | [optional]
**cache_condition** | **String** | Name of the cache condition controlling when this configuration applies. | [optional]
**name** | **String** | Name for the cache settings object. | [optional]
**stale_ttl** | **Number** | Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as &#39;stale if error&#39;). | [optional]
**ttl** | **Number** | Maximum time to consider the object fresh in the cache (the cache &#39;time to live&#39;). | [optional]

### Return type

[**CacheSettingResponse**](CacheSettingResponse.md)


## `deleteCacheSettings`

> Object deleteCacheSettings(service_id, version_id, cache_settings_name)

Delete a cache settings object

Delete a specific cache settings object.

### Example

```javascript
let apiInstance = new FastlyApi.CacheSettingsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let cache_settings_name = "cache_settings_name_example"; // String | 
apiInstance.deleteCacheSettings(service_id, version_id, cache_settings_name).then((data) => {
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
**cache_settings_name** | **String** |  |

### Return type

**Object**


## `getCacheSettings`

> CacheSettingResponse getCacheSettings(service_id, version_id, cache_settings_name)

Get a cache settings object

Get a specific cache settings object.

### Example

```javascript
let apiInstance = new FastlyApi.CacheSettingsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let cache_settings_name = "cache_settings_name_example"; // String | 
apiInstance.getCacheSettings(service_id, version_id, cache_settings_name).then((data) => {
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
**cache_settings_name** | **String** |  |

### Return type

[**CacheSettingResponse**](CacheSettingResponse.md)


## `listCacheSettings`

> [CacheSettingResponse] listCacheSettings(service_id, version_id)

List cache settings objects

Get a list of all cache settings for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.CacheSettingsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listCacheSettings(service_id, version_id).then((data) => {
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

[**[CacheSettingResponse]**](CacheSettingResponse.md)


## `updateCacheSettings`

> CacheSettingResponse updateCacheSettings(service_id, version_id, cache_settings_name, opts)

Update a cache settings object

Update a specific cache settings object.

### Example

```javascript
let apiInstance = new FastlyApi.CacheSettingsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let cache_settings_name = "cache_settings_name_example"; // String | 
let opts = {
  'action': "action_example", // String | If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule. 
  'cache_condition': "cache_condition_example", // String | Name of the cache condition controlling when this configuration applies.
  'name': "name_example", // String | Name for the cache settings object.
  'stale_ttl': 56, // Number | Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as 'stale if error').
  'ttl': 56 // Number | Maximum time to consider the object fresh in the cache (the cache 'time to live').
};
apiInstance.updateCacheSettings(service_id, version_id, cache_settings_name, opts).then((data) => {
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
**cache_settings_name** | **String** |  |
**action** | **String** | If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule.  | [optional]
**cache_condition** | **String** | Name of the cache condition controlling when this configuration applies. | [optional]
**name** | **String** | Name for the cache settings object. | [optional]
**stale_ttl** | **Number** | Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as &#39;stale if error&#39;). | [optional]
**ttl** | **Number** | Maximum time to consider the object fresh in the cache (the cache &#39;time to live&#39;). | [optional]

### Return type

[**CacheSettingResponse**](CacheSettingResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
