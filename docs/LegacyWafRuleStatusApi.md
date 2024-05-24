# Fastly.LegacyWafRuleStatusApi

```javascript
const apiInstance = new Fastly.LegacyWafRuleStatusApi();
```
## Methods

> [!NOTE]
> All URIs are relative to `https://api.fastly.com`

Method | HTTP request | Description
------ | ------------ | -----------
[**getWafFirewallRuleStatus**](LegacyWafRuleStatusApi.md#getWafFirewallRuleStatus) | **GET** /service/{service_id}/wafs/{firewall_id}/rules/{waf_rule_id}/rule_status | Get the status of a rule on a firewall
[**listWafFirewallRuleStatuses**](LegacyWafRuleStatusApi.md#listWafFirewallRuleStatuses) | **GET** /service/{service_id}/wafs/{firewall_id}/rule_statuses | List rule statuses
[**updateWafFirewallRuleStatus**](LegacyWafRuleStatusApi.md#updateWafFirewallRuleStatus) | **PATCH** /service/{service_id}/wafs/{firewall_id}/rules/{waf_rule_id}/rule_status | Update the status of a rule
[**updateWafFirewallRuleStatusesTag**](LegacyWafRuleStatusApi.md#updateWafFirewallRuleStatusesTag) | **POST** /service/{service_id}/wafs/{firewall_id}/rule_statuses | Create or update status of a tagged group of rules


## `getWafFirewallRuleStatus`

```javascript
getWafFirewallRuleStatus({ service_id, firewall_id, waf_rule_id })
```

Get a specific rule status object for a particular service, firewall, and rule.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  firewall_id: "firewall_id_example", // required
  waf_rule_id: "waf_rule_id_example", // required
};

apiInstance.getWafFirewallRuleStatus(options)
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
**waf_rule_id** | **String** | Alphanumeric string identifying a WAF rule. |

### Return type

**Object**


## `listWafFirewallRuleStatuses`

```javascript
listWafFirewallRuleStatuses({ service_id, firewall_id, [filter_status, ][filter_rule_message, ][filter_rule_rule_id, ][filter_rule_tags, ][filter_rule_tags_name, ][include, ][page_number, ][page_size] })
```

List all rule statuses for a particular service and firewall.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  firewall_id: "firewall_id_example", // required
  filter_status: "filter_status_example",
  filter_rule_message: "filter_rule_message_example",
  filter_rule_rule_id: "filter_rule_rule_id_example",
  filter_rule_tags: "filter_rule_tags_example",
  filter_rule_tags_name: application-FBC Market,
  include: "include_example",
  page_number: 1,
  page_size: 20,
};

apiInstance.listWafFirewallRuleStatuses(options)
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
**filter_status** | **String** | Limit results to rule statuses with the specified status. | [optional]
**filter_rule_message** | **String** | Limit results to rule statuses whose rules have the specified message. | [optional]
**filter_rule_rule_id** | **String** | Limit results to rule statuses whose rules represent the specified ModSecurity rule_id. | [optional]
**filter_rule_tags** | **String** | Limit results to rule statuses whose rules relate to the specified tag IDs. | [optional]
**filter_rule_tags_name** | **String** | Limit results to rule statuses whose rules related to the named tags. | [optional]
**include** | **String** | Include relationships. Optional, comma separated values. Permitted values: `tags`.  | [optional]
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [defaults to 20]

### Return type

**Object**


## `updateWafFirewallRuleStatus`

```javascript
updateWafFirewallRuleStatus({ service_id, firewall_id, waf_rule_id, [request_body] })
```

Update a rule status for a particular service, firewall, and rule.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  firewall_id: "firewall_id_example", // required
  waf_rule_id: "waf_rule_id_example", // required
  request_body: {"data":{"id":"RU1S0isxPaozGVKXdv0eY","type":"rule_status","attributes":{"status":"block"}}},
};

apiInstance.updateWafFirewallRuleStatus(options)
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
**waf_rule_id** | **String** | Alphanumeric string identifying a WAF rule. |
**request_body** | [**{String: Object}**](Object.md) |  | [optional]

### Return type

**Object**


## `updateWafFirewallRuleStatusesTag`

```javascript
updateWafFirewallRuleStatusesTag({ service_id, firewall_id, [name, ][force, ][request_body] })
```

Create or update all rule statuses for a particular service and firewall, based on tag name. By default, only rule status for enabled rules (with status log or block) will be updated. To update rule statuses for disabled rules under the specified tag, use the force attribute.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  firewall_id: "firewall_id_example", // required
  name: "name_example",
  force: "force_example",
  request_body: {"data":{"type":"rule_status","attributes":{"status":"block","name":"application-FBC Market","force":true}}},
};

apiInstance.updateWafFirewallRuleStatusesTag(options)
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
**name** | **String** | The tag name to use to determine the set of rules to update. For example, OWASP or language-php. | [optional]
**force** | **String** | Whether or not to update rule statuses for disabled rules. Optional. | [optional]
**request_body** | [**{String: Object}**](Object.md) |  | [optional]

### Return type

**Object**


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
