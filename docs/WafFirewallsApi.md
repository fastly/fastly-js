# FastlyApi.WafFirewallsApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createWafFirewall**](WafFirewallsApi.md#createWafFirewall) | **POST** /waf/firewalls | Create a firewall
[**deleteWafFirewall**](WafFirewallsApi.md#deleteWafFirewall) | **DELETE** /waf/firewalls/{firewall_id} | Delete a firewall
[**getWafFirewall**](WafFirewallsApi.md#getWafFirewall) | **GET** /waf/firewalls/{firewall_id} | Get a firewall
[**listWafFirewalls**](WafFirewallsApi.md#listWafFirewalls) | **GET** /waf/firewalls | List firewalls
[**updateWafFirewall**](WafFirewallsApi.md#updateWafFirewall) | **PATCH** /waf/firewalls/{firewall_id} | Update a firewall



## `createWafFirewall`

> WafFirewallResponse createWafFirewall(opts)

Create a firewall

Create a firewall object for a particular service and service version using a defined `prefetch_condition` and `response`. If the `prefetch_condition` or the `response` is missing from the request body, Fastly will generate a default object on your service. 

### Example

```javascript
let apiInstance = new FastlyApi.WafFirewallsApi();
let opts = {
  'waf_firewall': {"data":{"type":"waf_firewall","attributes":{"prefetch_condition":"WAF_Condition","response":"WAF_Error","service_id":"SU1Z0isxPaozGVKXdv0eY","service_version_number":1}}} // WafFirewall | 
};
apiInstance.createWafFirewall(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**waf_firewall** | [**WafFirewall**](../Model/WafFirewall.md) |  | [optional]

### Return type

[**WafFirewallResponse**](WafFirewallResponse.md)


## `deleteWafFirewall`

> deleteWafFirewall(firewall_id, opts)

Delete a firewall

Delete the firewall object for a particular service and service version. 

### Example

```javascript
let apiInstance = new FastlyApi.WafFirewallsApi();
let firewall_id = "firewall_id_example"; // String | 
let opts = {
  'waf_firewall': {"data":{"id":"fW7g2uUGZzb2W9Euo4Mo0r","type":"waf_firewall","attributes":{"service_version_number":1}}} // WafFirewall | 
};
apiInstance.deleteWafFirewall(firewall_id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**firewall_id** | **String** |  |
**waf_firewall** | [**WafFirewall**](../Model/WafFirewall.md) |  | [optional]

### Return type

null (empty response body)


## `getWafFirewall`

> WafFirewallResponse getWafFirewall(firewall_id, opts)

Get a firewall

Get a specific firewall object.

### Example

```javascript
let apiInstance = new FastlyApi.WafFirewallsApi();
let firewall_id = "firewall_id_example"; // String | 
let opts = {
  'filter_service_version_number': "filter_service_version_number_example", // String | Limit the results returned to a specific service version.
  'include': "'waf_firewall_versions'" // String | Include related objects. Optional.
};
apiInstance.getWafFirewall(firewall_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**firewall_id** | **String** |  |
**filter_service_version_number** | **String** | Limit the results returned to a specific service version. | [optional]
**include** | **String** | Include related objects. Optional. | [optional] [default to &#39;waf_firewall_versions&#39;]

### Return type

[**WafFirewallResponse**](WafFirewallResponse.md)


## `listWafFirewalls`

> WafFirewallsResponse listWafFirewalls(opts)

List firewalls

List all firewall objects.

### Example

```javascript
let apiInstance = new FastlyApi.WafFirewallsApi();
let opts = {
  'page_number': 56, // Number | Current page.
  'page_size': 20, // Number | Number of records per page.
  'filter_service_id': "filter_service_id_example", // String | Limit the results returned to a specific service.
  'filter_service_version_number': "filter_service_version_number_example", // String | Limit the results returned to a specific service version.
  'include': "'waf_firewall_versions'" // String | Include related objects. Optional.
};
apiInstance.listWafFirewalls(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [default to 20]
**filter_service_id** | **String** | Limit the results returned to a specific service. | [optional]
**filter_service_version_number** | **String** | Limit the results returned to a specific service version. | [optional]
**include** | **String** | Include related objects. Optional. | [optional] [default to &#39;waf_firewall_versions&#39;]

### Return type

[**WafFirewallsResponse**](WafFirewallsResponse.md)


## `updateWafFirewall`

> WafFirewallResponse updateWafFirewall(firewall_id, opts)

Update a firewall

Update a firewall object for a particular service and service version. Specifying a `service_version_number` is required. 

### Example

```javascript
let apiInstance = new FastlyApi.WafFirewallsApi();
let firewall_id = "firewall_id_example"; // String | 
let opts = {
  'waf_firewall': {"update":{"summary":"Update a firewall object for a particular service and service version. Specifying a `service_version_number` is required.","value":{"data":{"id":"fW7g2uUGZzb2W9Euo4Mo0r","type":"waf_firewall","attributes":{"response":"NEW_RESPONSE","service_version_number":1}}}}} // WafFirewall | 
};
apiInstance.updateWafFirewall(firewall_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**firewall_id** | **String** |  |
**waf_firewall** | [**WafFirewall**](../Model/WafFirewall.md) |  | [optional]

### Return type

[**WafFirewallResponse**](WafFirewallResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
