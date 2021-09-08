# Fastly.WafRulesApi


```javascript
const apiInstance = new Fastly.WafRulesApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**getWafRule**](WafRulesApi.md#getWafRule) | **GET** /waf/rules/{waf_rule_id} | Get a rule
[**listWafRules**](WafRulesApi.md#listWafRules) | **GET** /waf/rules | List available WAF rules



## `getWafRule`

```javascript
getWafRule({ waf_rule_id, [include] })
```

Get a specific rule. The `id` provided can be the ModSecurity Rule ID or the Fastly generated rule ID.

### Example

```javascript
const options = {
  waf_rule_id: "waf_rule_id_example", // required
  include: waf_tags,waf_rule_revisions,
};

apiInstance.getWafRule(options)
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
**waf_rule_id** | **String** |  |
**include** | **String** | Include relationships. Optional, comma-separated values. Permitted values: &#x60;waf_tags&#x60; and &#x60;waf_rule_revisions&#x60;.  | [optional]

### Return type

[**WafRuleResponse**](WafRuleResponse.md)


## `listWafRules`

```javascript
listWafRules({ [filter_modsec_rule_id], [filter_waf_tags_name], [filter_waf_rule_revisions_source], [filter_waf_firewall_id_not_match], [page_number], [page_size], [include] })
```

List all available WAF rules.

### Example

```javascript
const options = {

  filter_modsec_rule_id: "filter_modsec_rule_id_example",  filter_waf_tags_name: "filter_waf_tags_name_example",  filter_waf_rule_revisions_source: "filter_waf_rule_revisions_source_example",  filter_waf_firewall_id_not_match: "filter_waf_firewall_id_not_match_example",  page_number: 56,  page_size: 20,  include: waf_tags,waf_rule_revisions,
};

apiInstance.listWafRules(options)
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
**filter_modsec_rule_id** | **String** | Limit the returned rules to a specific ModSecurity rule ID. | [optional]
**filter_waf_tags_name** | **String** | Limit the returned rules to a set linked to a tag by name. | [optional]
**filter_waf_rule_revisions_source** | **String** | Limit the returned rules to a set linked to a source. | [optional]
**filter_waf_firewall_id_not_match** | **String** | Limit the returned rules to a set not included in the active firewall version for a firewall. | [optional]
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [default to 20]
**include** | **String** | Include relationships. Optional, comma-separated values. Permitted values: &#x60;waf_tags&#x60; and &#x60;waf_rule_revisions&#x60;.  | [optional]

### Return type

[**WafRulesResponse**](WafRulesResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
