# FastlyApi.WafFirewallVersionsApi



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

> cloneWafFirewallVersion(firewall_id, firewall_version_number)

Clone a firewall version

Clone a specific, existing firewall version into a new, draft firewall version.

### Example

```javascript
let apiInstance = new FastlyApi.WafFirewallVersionsApi();
let firewall_id = "firewall_id_example"; // String | 
let firewall_version_number = 56; // Number | 
apiInstance.cloneWafFirewallVersion(firewall_id, firewall_version_number).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**firewall_id** | **String** |  |
**firewall_version_number** | **Number** |  |

### Return type

[**WafFirewallVersionResponse**](WafFirewallVersionResponse.md)


## `createWafFirewallVersion`

> createWafFirewallVersion(firewall_id, opts)

Create a firewall version

Create a new, draft firewall version.

### Example

```javascript
let apiInstance = new FastlyApi.WafFirewallVersionsApi();
let firewall_id = "firewall_id_example"; // String | 
let opts = {
  'waf_firewall_version': {} // WafFirewallVersion | 
};
apiInstance.createWafFirewallVersion(firewall_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**firewall_id** | **String** |  |
**waf_firewall_version** | [**WafFirewallVersion**](../Model/WafFirewallVersion.md) |  | [optional]

### Return type

[**WafFirewallVersionResponse**](WafFirewallVersionResponse.md)


## `deployActivateWafFirewallVersion`

> deployActivateWafFirewallVersion(firewall_id, firewall_version_number)

Deploy or activate a firewall version

Deploy or activate a specific firewall version. If a firewall has been disabled, deploying a firewall version will automatically enable the firewall again.

### Example

```javascript
let apiInstance = new FastlyApi.WafFirewallVersionsApi();
let firewall_id = "firewall_id_example"; // String | 
let firewall_version_number = 56; // Number | 
apiInstance.deployActivateWafFirewallVersion(firewall_id, firewall_version_number).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**firewall_id** | **String** |  |
**firewall_version_number** | **Number** |  |

### Return type

**Object**


## `getWafFirewallVersion`

> getWafFirewallVersion(firewall_id, firewall_version_number, opts)

Get a firewall version

Get details about a specific firewall version.

### Example

```javascript
let apiInstance = new FastlyApi.WafFirewallVersionsApi();
let firewall_id = "firewall_id_example"; // String | 
let firewall_version_number = 56; // Number | 
let opts = {
  'include': waf_firewall,waf_active_rules // String | Include relationships. Optional, comma-separated values. Permitted values: `waf_firewall` and `waf_active_rules`. 
};
apiInstance.getWafFirewallVersion(firewall_id, firewall_version_number, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**firewall_id** | **String** |  |
**firewall_version_number** | **Number** |  |
**include** | **String** | Include relationships. Optional, comma-separated values. Permitted values: &#x60;waf_firewall&#x60; and &#x60;waf_active_rules&#x60;.  | [optional]

### Return type

[**WafFirewallVersionResponse**](WafFirewallVersionResponse.md)


## `listWafFirewallVersions`

> listWafFirewallVersions(firewall_id, opts)

List firewall versions

Get a list of firewall versions associated with a specific firewall.

### Example

```javascript
let apiInstance = new FastlyApi.WafFirewallVersionsApi();
let firewall_id = "firewall_id_example"; // String | 
let opts = {
  'include': waf_firewall, // String | Include relationships. Optional.
  'page_number': 56, // Number | Current page.
  'page_size': 20 // Number | Number of records per page.
};
apiInstance.listWafFirewallVersions(firewall_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**firewall_id** | **String** |  |
**include** | **String** | Include relationships. Optional. | [optional]
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [default to 20]

### Return type

[**WafFirewallVersionsResponse**](WafFirewallVersionsResponse.md)


## `updateWafFirewallVersion`

> updateWafFirewallVersion(firewall_id, firewall_version_number, opts)

Update a firewall version

Update a specific firewall version.

### Example

```javascript
let apiInstance = new FastlyApi.WafFirewallVersionsApi();
let firewall_id = "firewall_id_example"; // String | 
let firewall_version_number = 56; // Number | 
let opts = {
  'waf_firewall_version': {"data":{"type":"waf_firewall_version","attributes":{"notice_anomaly_score":12}}} // WafFirewallVersion | 
};
apiInstance.updateWafFirewallVersion(firewall_id, firewall_version_number, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**firewall_id** | **String** |  |
**firewall_version_number** | **Number** |  |
**waf_firewall_version** | [**WafFirewallVersion**](../Model/WafFirewallVersion.md) |  | [optional]

### Return type

[**WafFirewallVersionResponse**](WafFirewallVersionResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
