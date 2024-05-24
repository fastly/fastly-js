# Fastly.LegacyWafOwaspApi

```javascript
const apiInstance = new Fastly.LegacyWafOwaspApi();
```
## Methods

> [!NOTE]
> All URIs are relative to `https://api.fastly.com`

Method | HTTP request | Description
------ | ------------ | -----------
[**createOwaspSettings**](LegacyWafOwaspApi.md#createOwaspSettings) | **POST** /service/{service_id}/wafs/{firewall_id}/owasp | Create an OWASP settings object
[**getOwaspSettings**](LegacyWafOwaspApi.md#getOwaspSettings) | **GET** /service/{service_id}/wafs/{firewall_id}/owasp | Get the OWASP settings object
[**updateOwaspSettings**](LegacyWafOwaspApi.md#updateOwaspSettings) | **PATCH** /service/{service_id}/wafs/{firewall_id}/owasp | Update the OWASP settings object


## `createOwaspSettings`

```javascript
createOwaspSettings({ service_id, firewall_id, [request_body] })
```

Create an OWASP settings object for a particular service and firewall.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  firewall_id: "firewall_id_example", // required
  request_body: {"data":{"type":"owasp"}},
};

apiInstance.createOwaspSettings(options)
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
**firewall_id** | **String** | Alphanumeric string identifying a Firewall. |
**request_body** | [**{String: Object}**](Object.md) |  | [optional]

### Return type

**Object**


## `getOwaspSettings`

```javascript
getOwaspSettings({ service_id, firewall_id })
```

Get the OWASP settings object for a particular service and firewall.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  firewall_id: "firewall_id_example", // required
};

apiInstance.getOwaspSettings(options)
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
**firewall_id** | **String** | Alphanumeric string identifying a Firewall. |

### Return type

**Object**


## `updateOwaspSettings`

```javascript
updateOwaspSettings({ service_id, firewall_id, [request_body] })
```

Update the OWASP settings object for a particular service and firewall.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  firewall_id: "firewall_id_example", // required
  request_body: {"data":{"id":"0W4guUGZzb2W9Euo4m0oR","type":"owasp","attributes":{"inbound_anomaly_score_threshold":42}}},
};

apiInstance.updateOwaspSettings(options)
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
**firewall_id** | **String** | Alphanumeric string identifying a Firewall. |
**request_body** | [**{String: Object}**](Object.md) |  | [optional]

### Return type

**Object**


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
