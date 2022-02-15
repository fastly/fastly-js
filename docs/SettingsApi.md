# Fastly.SettingsApi

```javascript
const apiInstance = new Fastly.SettingsApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**getServiceSettings**](SettingsApi.md#getServiceSettings) | **GET** /service/{service_id}/version/{version_id}/settings | Get service settings


## `getServiceSettings`

```javascript
getServiceSettings({ service_id, version_id })
```

Get the settings for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.getServiceSettings(options)
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
**service_id** | **String** | Alphanumeric string identifying the service. |
**version_id** | **Number** | Integer identifying a service version. |

### Return type

[**SettingsResponse**](SettingsResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
