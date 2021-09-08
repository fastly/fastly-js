# Fastly.WafFirewallVersionsApi


```javascript
const apiInstance = new Fastly.WafFirewallVersionsApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**cloneWafFirewallVersion**](WafFirewallVersionsApi.md#cloneWafFirewallVersion) | **PUT** /waf/firewalls/{firewall_id}/versions/{firewall_version_number}/clone | Clone a firewall version
[**createWafFirewallVersion**](WafFirewallVersionsApi.md#createWafFirewallVersion) | **POST** /waf/firewalls/{firewall_id}/versions | Create a firewall version
[**deployActivateWafFirewallVersion**](WafFirewallVersionsApi.md#deployActivateWafFirewallVersion) | **PUT** /waf/firewalls/{firewall_id}/versions/{firewall_version_number}/activate | Deploy or activate a firewall version
[**getWafFirewallVersion**](WafFirewallVersionsApi.md#getWafFirewallVersion) | **GET** /waf/firewalls/{firewall_id}/versions/{firewall_version_number} | Get a firewall version
[**listWafFirewallVersions**](WafFirewallVersionsApi.md#listWafFirewallVersions) | **GET** /waf/firewalls/{firewall_id}/versions | List firewall versions
[**updateWafFirewallVersion**](WafFirewallVersionsApi.md#updateWafFirewallVersion) | **PATCH** /waf/firewalls/{firewall_id}/versions/{firewall_version_number} | Update a firewall version



## `cloneWafFirewallVersion`

```javascript
cloneWafFirewallVersion({ firewall_id, firewall_version_number })
```

Clone a specific, existing firewall version into a new, draft firewall version.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  firewall_version_number: 56, // required
};

apiInstance.cloneWafFirewallVersion(options)
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
**firewall_id** | **String** |  |
**firewall_version_number** | **Number** |  |

### Return type

[**WafFirewallVersionResponse**](WafFirewallVersionResponse.md)


## `createWafFirewallVersion`

```javascript
createWafFirewallVersion({ firewall_id, [waf_firewall_version] })
```

Create a new, draft firewall version.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required

  waf_firewall_version: new Fastly.WafFirewallVersion(),
};

apiInstance.createWafFirewallVersion(options)
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
**firewall_id** | **String** |  |
**waf_firewall_version** | [**WafFirewallVersion**](../Model/WafFirewallVersion.md) |  | [optional]

### Return type

[**WafFirewallVersionResponse**](WafFirewallVersionResponse.md)


## `deployActivateWafFirewallVersion`

```javascript
deployActivateWafFirewallVersion({ firewall_id, firewall_version_number })
```

Deploy or activate a specific firewall version. If a firewall has been disabled, deploying a firewall version will automatically enable the firewall again.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  firewall_version_number: 56, // required
};

apiInstance.deployActivateWafFirewallVersion(options)
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
**firewall_id** | **String** |  |
**firewall_version_number** | **Number** |  |

### Return type

**Object**


## `getWafFirewallVersion`

```javascript
getWafFirewallVersion({ firewall_id, firewall_version_number, [include] })
```

Get details about a specific firewall version.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  firewall_version_number: 56, // required

  include: waf_firewall,waf_active_rules,
};

apiInstance.getWafFirewallVersion(options)
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
**firewall_id** | **String** |  |
**firewall_version_number** | **Number** |  |
**include** | **String** | Include relationships. Optional, comma-separated values. Permitted values: &#x60;waf_firewall&#x60; and &#x60;waf_active_rules&#x60;.  | [optional]

### Return type

[**WafFirewallVersionResponse**](WafFirewallVersionResponse.md)


## `listWafFirewallVersions`

```javascript
listWafFirewallVersions({ firewall_id, [include], , [page_number], , [page_size] })
```

Get a list of firewall versions associated with a specific firewall.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required

  include: waf_firewall,

  page_number: 56,

  page_size: 20,
};

apiInstance.listWafFirewallVersions(options)
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
**firewall_id** | **String** |  |
**include** | **String** | Include relationships. Optional. | [optional]
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [default to 20]

### Return type

[**WafFirewallVersionsResponse**](WafFirewallVersionsResponse.md)


## `updateWafFirewallVersion`

```javascript
updateWafFirewallVersion({ firewall_id, firewall_version_number, [waf_firewall_version] })
```

Update a specific firewall version.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  firewall_version_number: 56, // required

  waf_firewall_version: new Fastly.WafFirewallVersion(),
};

apiInstance.updateWafFirewallVersion(options)
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
**firewall_id** | **String** |  |
**firewall_version_number** | **Number** |  |
**waf_firewall_version** | [**WafFirewallVersion**](../Model/WafFirewallVersion.md) |  | [optional]

### Return type

[**WafFirewallVersionResponse**](WafFirewallVersionResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
