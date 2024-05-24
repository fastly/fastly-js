# Fastly.LegacyWafFirewallApi

```javascript
const apiInstance = new Fastly.LegacyWafFirewallApi();
```
## Methods

> [!NOTE]
> All URIs are relative to `https://api.fastly.com`

Method | HTTP request | Description
------ | ------------ | -----------
[**createLegacyWafFirewallService**](LegacyWafFirewallApi.md#createLegacyWafFirewallService) | **POST** /service/{service_id}/version/{version_id}/wafs | Create a firewall
[**disableLegacyWafFirewall**](LegacyWafFirewallApi.md#disableLegacyWafFirewall) | **PATCH** /wafs/{firewall_id}/disable | Disable a firewall
[**enableLegacyWafFirewall**](LegacyWafFirewallApi.md#enableLegacyWafFirewall) | **PATCH** /wafs/{firewall_id}/enable | Enable a firewall
[**getLegacyWafFirewall**](LegacyWafFirewallApi.md#getLegacyWafFirewall) | **GET** /wafs/{firewall_id} | Get a firewall object
[**getLegacyWafFirewallService**](LegacyWafFirewallApi.md#getLegacyWafFirewallService) | **GET** /service/{service_id}/version/{version_id}/wafs/{firewall_id} | Get a firewall
[**listLegacyWafFirewalls**](LegacyWafFirewallApi.md#listLegacyWafFirewalls) | **GET** /wafs | List active firewalls
[**listLegacyWafFirewallsService**](LegacyWafFirewallApi.md#listLegacyWafFirewallsService) | **GET** /service/{service_id}/version/{version_id}/wafs | List firewalls
[**updateLegacyWafFirewallService**](LegacyWafFirewallApi.md#updateLegacyWafFirewallService) | **PATCH** /service/{service_id}/version/{version_id}/wafs/{firewall_id} | Update a firewall


## `createLegacyWafFirewallService`

```javascript
createLegacyWafFirewallService({ service_id, version_id, [request_body] })
```

Create a firewall object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  request_body: {"data":{"type":"waf","attributes":{"prefetch_condition":"WAF-Condition","response":"WAF_Error"}}},
};

apiInstance.createLegacyWafFirewallService(options)
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
**request_body** | [**{String: Object}**](Object.md) |  | [optional]

### Return type

**Object**


## `disableLegacyWafFirewall`

```javascript
disableLegacyWafFirewall({ firewall_id, [request_body] })
```

Disable a firewall for a particular service and version. This endpoint is intended to be used in an emergency. Disabling a firewall object for a specific service and version replaces your existing WAF ruleset with an empty ruleset. While disabled, your WAF ruleset will not be applied to your origin traffic. This endpoint is only available to users assigned the role of superuser or above. This is an asynchronous action. To check on the completion of this action, use the related link returned in the response to check on the Update Status of the action.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  request_body: {"data":{"id":"w4Fg2uUGZzb2W9Euo4m0Or","type":"waf"}},
};

apiInstance.disableLegacyWafFirewall(options)
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
**firewall_id** | **String** | Alphanumeric string identifying a Firewall. |
**request_body** | [**{String: Object}**](Object.md) |  | [optional]

### Return type

**Object**


## `enableLegacyWafFirewall`

```javascript
enableLegacyWafFirewall({ firewall_id, [request_body] })
```

Re-enable a firewall object for a particular service and version after it has been disabled. This endpoint is intended to be used in an emergency. When a firewall object is re-enabled, a newly generated WAF ruleset VCL based on the current WAF configuration is used to replace the empty ruleset. This endpoint is only available to users assigned the role of superuser or above. This is an asynchronous action. To check on the completion of this action, use the related link returned in the response to check on the Update Status of the action.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  request_body: {"data":{"id":"w4Fg2uUGZzb2W9Euo4m0Or","type":"waf"}},
};

apiInstance.enableLegacyWafFirewall(options)
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
**firewall_id** | **String** | Alphanumeric string identifying a Firewall. |
**request_body** | [**{String: Object}**](Object.md) |  | [optional]

### Return type

**Object**


## `getLegacyWafFirewall`

```javascript
getLegacyWafFirewall({ firewall_id, [include] })
```

Get a specific firewall object.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  include: configuration_set,
};

apiInstance.getLegacyWafFirewall(options)
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
**firewall_id** | **String** | Alphanumeric string identifying a Firewall. |
**include** | **String** | Include relationships. Optional, comma separated values. Permitted values: `configuration_set`, `owasp`, `rules`, `rule_statuses`.  | [optional]

### Return type

**Object**


## `getLegacyWafFirewallService`

```javascript
getLegacyWafFirewallService({ service_id, version_id, firewall_id })
```

Get a specific firewall object.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  firewall_id: "firewall_id_example", // required
};

apiInstance.getLegacyWafFirewallService(options)
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
**firewall_id** | **String** | Alphanumeric string identifying a Firewall. |

### Return type

**Object**


## `listLegacyWafFirewalls`

```javascript
listLegacyWafFirewalls({ , [filter_rules_rule_id, ][page_number, ][page_size, ][include] })
```

List all active firewall objects.

### Example

```javascript
const options = {
  filter_rules_rule_id: "filter_rules_rule_id_example",
  page_number: 1,
  page_size: 20,
  include: configuration_set,
};

apiInstance.listLegacyWafFirewalls(options)
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
**filter_rules_rule_id** | **String** | Limit the returned firewalls to a specific rule ID. | [optional]
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [defaults to 20]
**include** | **String** | Include relationships. Optional, comma separated values. Permitted values: `configuration_set`, `owasp`.  | [optional]

### Return type

**Object**


## `listLegacyWafFirewallsService`

```javascript
listLegacyWafFirewallsService({ service_id, version_id, [page_number, ][page_size, ][include] })
```

List all firewall objects for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  page_number: 1,
  page_size: 20,
  include: configuration_set,
};

apiInstance.listLegacyWafFirewallsService(options)
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
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [defaults to 20]
**include** | **String** | Include relationships. Optional, comma separated values. Permitted values: `configuration_set`, `owasp`.  | [optional]

### Return type

**Object**


## `updateLegacyWafFirewallService`

```javascript
updateLegacyWafFirewallService({ service_id, version_id, firewall_id, [request_body] })
```

Update a firewall object for a particular service and version. 

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  firewall_id: "firewall_id_example", // required
  request_body: {"data":{"id":"w4Fg2uUGZzb2W9Euo4m0Or","type":"waf","attributes":{"response":"new response"}}},
};

apiInstance.updateLegacyWafFirewallService(options)
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
**firewall_id** | **String** | Alphanumeric string identifying a Firewall. |
**request_body** | [**{String: Object}**](Object.md) |  | [optional]

### Return type

**Object**


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
