# Fastly.WafActiveRulesApi


```javascript
const apiInstance = new Fastly.WafActiveRulesApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**bulkDeleteWafActiveRules**](WafActiveRulesApi.md#bulkDeleteWafActiveRules) | **DELETE** /waf/firewalls/{firewall_id}/versions/{version_id}/active-rules | Delete multiple active rules from a WAF
[**bulkUpdateWafActiveRules**](WafActiveRulesApi.md#bulkUpdateWafActiveRules) | **PATCH** /waf/firewalls/{firewall_id}/versions/{version_id}/active-rules/bulk | Update multiple active rules
[**createWafActiveRule**](WafActiveRulesApi.md#createWafActiveRule) | **POST** /waf/firewalls/{firewall_id}/versions/{version_id}/active-rules | Add a rule to a WAF as an active rule
[**createWafActiveRulesTag**](WafActiveRulesApi.md#createWafActiveRulesTag) | **POST** /waf/firewalls/{firewall_id}/versions/{version_id}/tags/{waf_tag_name}/active-rules | Create active rules by tag
[**deleteWafActiveRule**](WafActiveRulesApi.md#deleteWafActiveRule) | **DELETE** /waf/firewalls/{firewall_id}/versions/{version_id}/active-rules/{waf_rule_id} | Delete an active rule
[**getWafActiveRule**](WafActiveRulesApi.md#getWafActiveRule) | **GET** /waf/firewalls/{firewall_id}/versions/{version_id}/active-rules/{waf_rule_id} | Get an active WAF rule object
[**listWafActiveRules**](WafActiveRulesApi.md#listWafActiveRules) | **GET** /waf/firewalls/{firewall_id}/versions/{version_id}/active-rules | List active rules on a WAF
[**updateWafActiveRule**](WafActiveRulesApi.md#updateWafActiveRule) | **PATCH** /waf/firewalls/{firewall_id}/versions/{version_id}/active-rules/{waf_rule_id} | Update an active rule



## `bulkDeleteWafActiveRules`

```javascript
bulkDeleteWafActiveRules({ firewall_id, version_id, [body] })
```

Delete many active rules on a particular firewall version using the active rule ID. Limited to 500 rules per request.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  version_id: 56, // required
  body: {"data":[{"type":"waf_active_rule","id":"3krg2uUGZzb2W9Euo4moOR"}]},
};

apiInstance.bulkDeleteWafActiveRules(options)
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
**version_id** | **Number** |  |
**body** | **Object** |  | [optional]

### Return type

null (empty response body)


## `bulkUpdateWafActiveRules`

```javascript
bulkUpdateWafActiveRules({ firewall_id, version_id, [body] })
```

Bulk update all active rules on a [firewall version](https://developer.fastly.com/reference/api/waf/firewall-version/). This endpoint will not add new active rules, only update existing active rules.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  version_id: 56, // required
  body: {"type":"waf_active_rule","attributes":{"revision":"latest"}},
};

apiInstance.bulkUpdateWafActiveRules(options)
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
**version_id** | **Number** |  |
**body** | **WafActiveRuleData** |  | [optional]

### Return type

null (empty response body)


## `createWafActiveRule`

```javascript
createWafActiveRule({ firewall_id, version_id, [waf_active_rule] })
```

Create an active rule for a particular firewall version.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  version_id: 56, // required
  waf_active_rule: {"data":{"type":"waf_active_rule","attributes":{"status":"log"},"relationships":{"waf_rule_revision":{"data":{"type":"waf_rule_revision","id":"r3Vg2uUGZzb2W9Euo4mo0R","examples":null}}}}},
};

apiInstance.createWafActiveRule(options)
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
**version_id** | **Number** |  |
**waf_active_rule** | [**WafActiveRule**](../Model/WafActiveRule.md) |  | [optional]

### Return type

[**WafActiveRuleCreationResponse**](WafActiveRuleCreationResponse.md)


## `createWafActiveRulesTag`

```javascript
createWafActiveRulesTag({ firewall_id, version_id, waf_tag_name, [waf_active_rule] })
```

Create active rules by tag. This endpoint will create active rules using the latest revision available for each rule.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  version_id: 56, // required
  waf_tag_name: "waf_tag_name_example", // required
  waf_active_rule: {"data":{"type":"waf_active_rule","attributes":{"status":"log"}}},
};

apiInstance.createWafActiveRulesTag(options)
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
**version_id** | **Number** |  |
**waf_tag_name** | **String** |  |
**waf_active_rule** | [**WafActiveRule**](../Model/WafActiveRule.md) |  | [optional]

### Return type

null (empty response body)


## `deleteWafActiveRule`

```javascript
deleteWafActiveRule({ firewall_id, version_id, waf_rule_id })
```

Delete an active rule for a particular firewall version.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  version_id: 56, // required
  waf_rule_id: "waf_rule_id_example", // required
};

apiInstance.deleteWafActiveRule(options)
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
**version_id** | **Number** |  |
**waf_rule_id** | **String** |  |

### Return type

null (empty response body)


## `getWafActiveRule`

```javascript
getWafActiveRule({ firewall_id, version_id, waf_rule_id, [include] })
```

Get a specific active rule object. Includes details of the rule revision associated with the active rule object by default.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  version_id: 56, // required
  waf_rule_id: "waf_rule_id_example", // required
  include: waf_rule_revision,waf_firewall_version,
};

apiInstance.getWafActiveRule(options)
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
**version_id** | **Number** |  |
**waf_rule_id** | **String** |  |
**include** | **String** | Include relationships. Optional, comma-separated values. Permitted values: &#x60;waf_rule_revision&#x60; and &#x60;waf_firewall_version&#x60;.  | [optional]

### Return type

[**WafActiveRuleResponse**](WafActiveRuleResponse.md)


## `listWafActiveRules`

```javascript
listWafActiveRules({ firewall_id, version_id, [filter_status, ][filter_waf_rule_revision_message, ][filter_waf_rule_revision_modsec_rule_id, ][filter_outdated, ][include, ][page_number, ][page_size] })
```

List all active rules for a particular firewall version.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  version_id: 56, // required
  filter_status: "filter_status_example",
  filter_waf_rule_revision_message: "filter_waf_rule_revision_message_example",
  filter_waf_rule_revision_modsec_rule_id: "filter_waf_rule_revision_modsec_rule_id_example",
  filter_outdated: "filter_outdated_example",
  include: waf_rule_revision,waf_firewall_version,
  page_number: 56,
  page_size: 20,
};

apiInstance.listWafActiveRules(options)
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
**version_id** | **Number** |  |
**filter_status** | **String** | Limit results to active rules with the specified status. | [optional]
**filter_waf_rule_revision_message** | **String** | Limit results to active rules with the specified message. | [optional]
**filter_waf_rule_revision_modsec_rule_id** | **String** | Limit results to active rules that represent the specified ModSecurity modsec_rule_id. | [optional]
**filter_outdated** | **String** | Limit results to active rules referencing an outdated rule revision. | [optional]
**include** | **String** | Include relationships. Optional, comma-separated values. Permitted values: &#x60;waf_rule_revision&#x60; and &#x60;waf_firewall_version&#x60;.  | [optional]
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [default to 20]

### Return type

[**WafActiveRulesResponse**](WafActiveRulesResponse.md)


## `updateWafActiveRule`

```javascript
updateWafActiveRule({ firewall_id, version_id, waf_rule_id, [waf_active_rule] })
```

Update an active rule's status for a particular firewall version.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  version_id: 56, // required
  waf_rule_id: "waf_rule_id_example", // required
  waf_active_rule: {"data":{"id":"3krg2uUGZzb2W9Euo4moOR","type":"waf_active_rule","attributes":{"status":"block"}}},
};

apiInstance.updateWafActiveRule(options)
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
**version_id** | **Number** |  |
**waf_rule_id** | **String** |  |
**waf_active_rule** | [**WafActiveRule**](../Model/WafActiveRule.md) |  | [optional]

### Return type

[**WafActiveRuleResponse**](WafActiveRuleResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
