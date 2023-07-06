# Fastly.LegacyWafRuleApi

```javascript
const apiInstance = new Fastly.LegacyWafRuleApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**getLegacyWafFirewallRuleVcl**](LegacyWafRuleApi.md#getLegacyWafFirewallRuleVcl) | **GET** /wafs/{firewall_id}/rules/{waf_rule_id}/vcl | Get VCL for a rule associated with a firewall
[**getLegacyWafRule**](LegacyWafRuleApi.md#getLegacyWafRule) | **GET** /wafs/rules/{waf_rule_id} | Get a rule
[**getLegacyWafRuleVcl**](LegacyWafRuleApi.md#getLegacyWafRuleVcl) | **GET** /wafs/rules/{waf_rule_id}/vcl | Get VCL for a rule
[**listLegacyWafRules**](LegacyWafRuleApi.md#listLegacyWafRules) | **GET** /wafs/rules | List rules in the latest configuration set


## `getLegacyWafFirewallRuleVcl`

```javascript
getLegacyWafFirewallRuleVcl({ firewall_id, waf_rule_id })
```

Get associated VCL for a specific rule associated with a specific firewall.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  waf_rule_id: "waf_rule_id_example", // required
};

apiInstance.getLegacyWafFirewallRuleVcl(options)
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
**waf_rule_id** | **String** | Alphanumeric string identifying a WAF rule. |

### Return type

**Object**


## `getLegacyWafRule`

```javascript
getLegacyWafRule({ waf_rule_id, [filter_configuration_set_id, ][include] })
```

Get a specific rule.

### Example

```javascript
const options = {
  waf_rule_id: "waf_rule_id_example", // required
  filter_configuration_set_id: "filter_configuration_set_id_example",
  include: tags,
};

apiInstance.getLegacyWafRule(options)
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
**waf_rule_id** | **String** | Alphanumeric string identifying a WAF rule. |
**filter_configuration_set_id** | **String** | Optional. Limit rule to a specific configuration set or pass \&quot;all\&quot; to search all configuration sets, including stale ones. | [optional]
**include** | **String** | Include relationships. Optional. Comma separated values. Permitted values: `tags`, `rule_statuses`, `source`, and `vcl`.  | [optional]

### Return type

**Object**


## `getLegacyWafRuleVcl`

```javascript
getLegacyWafRuleVcl({ waf_rule_id })
```

Get associated VCL for a specific rule.

### Example

```javascript
const options = {
  waf_rule_id: "waf_rule_id_example", // required
};

apiInstance.getLegacyWafRuleVcl(options)
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
**waf_rule_id** | **String** | Alphanumeric string identifying a WAF rule. |

### Return type

**Object**


## `listLegacyWafRules`

```javascript
listLegacyWafRules({ , [filter_rule_id, ][filter_severity, ][filter_tags_name, ][filter_configuration_set_id, ][page_number, ][page_size, ][include] })
```

List all rules in the latest configuration set.

### Example

```javascript
const options = {
  filter_rule_id: "filter_rule_id_example",
  filter_severity: "filter_severity_example",
  filter_tags_name: "filter_tags_name_example",
  filter_configuration_set_id: "filter_configuration_set_id_example",
  page_number: 1,
  page_size: 20,
  include: "include_example",
};

apiInstance.listLegacyWafRules(options)
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
**filter_rule_id** | **String** | Limit the returned rules to a specific rule ID. | [optional]
**filter_severity** | **String** | Limit the returned rules to a specific severity. | [optional]
**filter_tags_name** | **String** | Limit the returned rules to a set linked to a tag by name. | [optional]
**filter_configuration_set_id** | **String** | Optional. Limit rules to specific configuration set or pass \&quot;all\&quot; to search all configuration sets, including stale ones. | [optional]
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [defaults to 20]
**include** | **String** | Include relationships. Optional. Comma separated values. Permitted values: `tags`, `rule_statuses`, and `source`.  | [optional]

### Return type

**[Object]**


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
