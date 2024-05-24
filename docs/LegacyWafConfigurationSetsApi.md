# Fastly.LegacyWafConfigurationSetsApi

```javascript
const apiInstance = new Fastly.LegacyWafConfigurationSetsApi();
```
## Methods

> [!NOTE]
> All URIs are relative to `https://api.fastly.com`

Method | HTTP request | Description
------ | ------------ | -----------
[**listWafConfigSets**](LegacyWafConfigurationSetsApi.md#listWafConfigSets) | **GET** /wafs/configuration_sets | List configuration sets
[**listWafsConfigSet**](LegacyWafConfigurationSetsApi.md#listWafsConfigSet) | **GET** /wafs/configuration_sets/{configuration_set_id}/relationships/wafs | List WAFs currently using a configuration set
[**useWafConfigSet**](LegacyWafConfigurationSetsApi.md#useWafConfigSet) | **PATCH** /wafs/configuration_sets/{configuration_set_id}/relationships/wafs | Apply a configuration set to a WAF


## `listWafConfigSets`

```javascript
listWafConfigSets()
```

List all Configuration sets.

### Example

```javascript
apiInstance.listWafConfigSets()
  .then((data) => {
    console.log(data, "API called successfully.");
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

This endpoint does not need any parameters.

### Return type

**Object**


## `listWafsConfigSet`

```javascript
listWafsConfigSet({ configuration_set_id })
```

List the WAF objects currently using the specified configuration set.

### Example

```javascript
const options = {
  configuration_set_id: "configuration_set_id_example", // required
};

apiInstance.listWafsConfigSet(options)
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
**configuration_set_id** | **String** | Alphanumeric string identifying a WAF configuration set. |

### Return type

**Object**


## `useWafConfigSet`

```javascript
useWafConfigSet({ configuration_set_id, [request_body] })
```

Update one or more WAF objects to use the specified configuration set.

### Example

```javascript
const options = {
  configuration_set_id: "configuration_set_id_example", // required
  request_body: {"data":[{"id":"w4Fg2uUGZzb2W9Euo4m0Or","type":"waf"},{"id":"w4Fg2uUGZzb2W9Euo5q2Az","type":"waf"}]},
};

apiInstance.useWafConfigSet(options)
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
**configuration_set_id** | **String** | Alphanumeric string identifying a WAF configuration set. |
**request_body** | [**{String: Object}**](Object.md) |  | [optional]

### Return type

**Object**


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
