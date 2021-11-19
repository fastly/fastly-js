# Fastly.WafExclusionsApi

```javascript
const apiInstance = new Fastly.WafExclusionsApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createWafRuleExclusion**](WafExclusionsApi.md#createWafRuleExclusion) | **POST** /waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions | Create a WAF rule exclusion
[**deleteWafRuleExclusion**](WafExclusionsApi.md#deleteWafRuleExclusion) | **DELETE** /waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions/{exclusion_number} | Delete a WAF rule exclusion
[**getWafRuleExclusion**](WafExclusionsApi.md#getWafRuleExclusion) | **GET** /waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions/{exclusion_number} | Get a WAF rule exclusion
[**listWafRuleExclusions**](WafExclusionsApi.md#listWafRuleExclusions) | **GET** /waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions | List WAF rule exclusions
[**updateWafRuleExclusion**](WafExclusionsApi.md#updateWafRuleExclusion) | **PATCH** /waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions/{exclusion_number} | Update a WAF rule exclusion


## `createWafRuleExclusion`

```javascript
createWafRuleExclusion({ firewall_id, firewall_version_number, [waf_exclusion] })
```

Create a WAF exclusion for a particular firewall version.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  firewall_version_number: 56, // required
  waf_exclusion: {"data":{"type":"waf_exclusion","attributes":{"exclusion_type":"rule","condition":"req.url.basename == \"index.html\"","name":"test-waf-exclusion"},"relationships":{"waf_rules":{"data":[{"id":2500162,"type":"waf_rule"}]}}}},
};

apiInstance.createWafRuleExclusion(options)
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
**firewall_id** | **String** | Alphanumeric string identifying a WAF Firewall. |
**firewall_version_number** | **Number** | Integer identifying a WAF firewall version. |
**waf_exclusion** | [**WafExclusion**](WafExclusion.md) |  | [optional]

### Return type

[**WafExclusionResponse**](WafExclusionResponse.md)


## `deleteWafRuleExclusion`

```javascript
deleteWafRuleExclusion({ firewall_id, firewall_version_number, exclusion_number })
```

Delete a WAF exclusion for a particular firewall version.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  firewall_version_number: 56, // required
  exclusion_number: 56, // required
};

apiInstance.deleteWafRuleExclusion(options)
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
**firewall_id** | **String** | Alphanumeric string identifying a WAF Firewall. |
**firewall_version_number** | **Number** | Integer identifying a WAF firewall version. |
**exclusion_number** | **Number** | A numeric ID identifying a WAF exclusion. |

### Return type

null (empty response body)


## `getWafRuleExclusion`

```javascript
getWafRuleExclusion({ firewall_id, firewall_version_number, exclusion_number })
```

Get a specific WAF exclusion object.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  firewall_version_number: 56, // required
  exclusion_number: 56, // required
};

apiInstance.getWafRuleExclusion(options)
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
**firewall_id** | **String** | Alphanumeric string identifying a WAF Firewall. |
**firewall_version_number** | **Number** | Integer identifying a WAF firewall version. |
**exclusion_number** | **Number** | A numeric ID identifying a WAF exclusion. |

### Return type

[**WafExclusionResponse**](WafExclusionResponse.md)


## `listWafRuleExclusions`

```javascript
listWafRuleExclusions({ firewall_id, firewall_version_number, [filter_exclusion_type, ][filter_name, ][filter_waf_rules_modsec_rule_id, ][page_number, ][page_size, ][include] })
```

List all exclusions for a particular firewall version.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  firewall_version_number: 56, // required
  filter_exclusion_type: "rule",
  filter_name: "filter_name_example",
  filter_waf_rules_modsec_rule_id: 56,
  page_number: 1,
  page_size: 20,
  include: waf_rules,
};

apiInstance.listWafRuleExclusions(options)
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
**firewall_id** | **String** | Alphanumeric string identifying a WAF Firewall. |
**firewall_version_number** | **Number** | Integer identifying a WAF firewall version. |
**filter_exclusion_type** | **String** | Filters the results based on this exclusion type. | [optional] [one of: "rule", "variable", "waf"]
**filter_name** | **String** | Filters the results based on name. | [optional]
**filter_waf_rules_modsec_rule_id** | **Number** | Filters the results based on this ModSecurity rule ID. | [optional]
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [defaults to 20]
**include** | **String** | Include relationships. Optional, comma-separated values. Permitted values: `waf_rules` and `waf_rule_revisions`.  | [optional]

### Return type

[**WafExclusionsResponse**](WafExclusionsResponse.md)


## `updateWafRuleExclusion`

```javascript
updateWafRuleExclusion({ firewall_id, firewall_version_number, exclusion_number, [waf_exclusion] })
```

Update a WAF exclusion for a particular firewall version.

### Example

```javascript
const options = {
  firewall_id: "firewall_id_example", // required
  firewall_version_number: 56, // required
  exclusion_number: 56, // required
  waf_exclusion: {"data":{"type":"waf_exclusion","attributes":{"logging":false,"condition":"req.url.basename == \"index.html\" || req.url.basename == \"admin.html\"","name":"updated-test-waf-exclusion"}}},
};

apiInstance.updateWafRuleExclusion(options)
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
**firewall_id** | **String** | Alphanumeric string identifying a WAF Firewall. |
**firewall_version_number** | **Number** | Integer identifying a WAF firewall version. |
**exclusion_number** | **Number** | A numeric ID identifying a WAF exclusion. |
**waf_exclusion** | [**WafExclusion**](WafExclusion.md) |  | [optional]

### Return type

[**WafExclusionResponse**](WafExclusionResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
