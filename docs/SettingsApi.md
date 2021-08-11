# FastlyApi.SettingsApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**getServiceSettings**](SettingsApi.md#getServiceSettings) | **GET** /service/{service_id}/version/{version_id}/settings | Get service settings
[**updateServiceSettings**](SettingsApi.md#updateServiceSettings) | **PUT** /service/{service_id}/version/{version_id}/settings | Update service settings



## `getServiceSettings`

> getServiceSettings(service_id, version_id)

Get service settings

Get the settings for a particular service and version.

### Example

```javascript
let apiInstance = new FastlyApi.SettingsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.getServiceSettings(service_id, version_id).then((data) => {
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

[**SettingsResponse**](SettingsResponse.md)


## `updateServiceSettings`

> updateServiceSettings(service_id, version_id)

Update service settings

Update the settings for a particular service and version. NOTE: If you override TTLs with custom VCL, any general.default_ttl value will not be honored and the expected behavior may change. 

### Example

```javascript
let apiInstance = new FastlyApi.SettingsApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.updateServiceSettings(service_id, version_id).then((data) => {
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

[**SettingsResponse**](SettingsResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
