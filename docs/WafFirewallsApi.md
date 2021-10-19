# Fastly.WafFirewallsApi


```javascript
const apiInstance = new Fastly.WafFirewallsApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createWafFirewall**](WafFirewallsApi.md#createWafFirewall) | **POST** /waf/firewalls | Create a firewall
[**deleteWafFirewall**](WafFirewallsApi.md#deleteWafFirewall) | **DELETE** /waf/firewalls/{firewall_id} | Delete a firewall
[**getWafFirewall**](WafFirewallsApi.md#getWafFirewall) | **GET** /waf/firewalls/{firewall_id} | Get a firewall
[**listWafFirewalls**](WafFirewallsApi.md#listWafFirewalls) | **GET** /waf/firewalls | List firewalls
[**updateWafFirewall**](WafFirewallsApi.md#updateWafFirewall) | **PATCH** /waf/firewalls/{firewall_id} | Update a firewall



## `createWafFirewall`

```javascript
createWafFirewall({ , [waf_firewall] })
```

Create a firewall object for a particular service and service version using a defined `prefetch_condition` and `response`. If the `prefetch_condition` or the `response` is missing from the request body, Fastly will generate a default object on your service. 

### Example

```javascript
const options = {
  waf_firewall: {"data":{"attributes":{"prefetch_condition":"WAF_Condition","response":"WAF_Error","service_id":"SU1Z0isxPaozGVKXdv0eY","service_version_number":1},"type":"waf_firewall"}},
};

apiInstance.createWafFirewall(options)
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
**waf_firewall** | [**WafFirewall**](../Model/WafFirewall.md) |  | [optional]

### Return type

[**WafFirewallResponse**](WafFirewallResponse.md)


## `deleteWafFirewall`

```javascript
deleteWafFirewall({ firewall_id, [waf_firewall] })
```

Delete the firewall object for a particular service and service version. 

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  waf_firewall: {"data":{"attributes":{"service_version_number":1},"id":"fW7g2uUGZzb2W9Euo4Mo0r","type":"waf_firewall"}},
};

apiInstance.deleteWafFirewall(options)
  .then(() => {
    console.log('API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**firewall_id** | **String** |  |
**waf_firewall** | [**WafFirewall**](../Model/WafFirewall.md) |  | [optional]

### Return type

null (empty response body)


## `getWafFirewall`

```javascript
getWafFirewall({ firewall_id, [filter_service_version_number, ][include] })
```

Get a specific firewall object.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  filter_service_version_number: "filter_service_version_number_example",
  include: 'waf_firewall_versions',
};

apiInstance.getWafFirewall(options)
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
**filter_service_version_number** | **String** | Limit the results returned to a specific service version. | [optional]
**include** | **String** | Include related objects. Optional. | [optional] [default to &#39;waf_firewall_versions&#39;]

### Return type

[**WafFirewallResponse**](WafFirewallResponse.md)


## `listWafFirewalls`

```javascript
listWafFirewalls({ , [page_number, ][page_size, ][filter_service_id, ][filter_service_version_number, ][include] })
```

List all firewall objects.

### Example

```javascript
const options = {
  page_number: 1,
  page_size: 20,
  filter_service_id: "filter_service_id_example",
  filter_service_version_number: "filter_service_version_number_example",
  include: 'waf_firewall_versions',
};

apiInstance.listWafFirewalls(options)
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
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [default to 20]
**filter_service_id** | **String** | Limit the results returned to a specific service. | [optional]
**filter_service_version_number** | **String** | Limit the results returned to a specific service version. | [optional]
**include** | **String** | Include related objects. Optional. | [optional] [default to &#39;waf_firewall_versions&#39;]

### Return type

[**WafFirewallsResponse**](WafFirewallsResponse.md)


## `updateWafFirewall`

```javascript
updateWafFirewall({ firewall_id, [waf_firewall] })
```

Update a firewall object for a particular service and service version. Specifying a `service_version_number` is required. 

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  waf_firewall: {"update":{"summary":"Update a firewall object for a particular service and service version. Specifying a `service_version_number` is required.","value":{"data":{"attributes":{"response":"NEW_RESPONSE","service_version_number":1},"id":"fW7g2uUGZzb2W9Euo4Mo0r","type":"waf_firewall"}}}},
};

apiInstance.updateWafFirewall(options)
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
**waf_firewall** | [**WafFirewall**](../Model/WafFirewall.md) |  | [optional]

### Return type

[**WafFirewallResponse**](WafFirewallResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
