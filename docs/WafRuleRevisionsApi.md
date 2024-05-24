# Fastly.WafRuleRevisionsApi

```javascript
const apiInstance = new Fastly.WafRuleRevisionsApi();
```
## Methods

> [!NOTE]
> All URIs are relative to `https://api.fastly.com`

Method | HTTP request | Description
------ | ------------ | -----------
[**getWafRuleRevision**](WafRuleRevisionsApi.md#getWafRuleRevision) | **GET** /waf/rules/{waf_rule_id}/revisions/{waf_rule_revision_number} | Get a revision of a rule
[**listWafRuleRevisions**](WafRuleRevisionsApi.md#listWafRuleRevisions) | **GET** /waf/rules/{waf_rule_id}/revisions | List revisions for a rule


## `getWafRuleRevision`

```javascript
getWafRuleRevision({ waf_rule_id, waf_rule_revision_number, [include] })
```

Get a specific rule revision.

### Example

```javascript
const options = {
  waf_rule_id: "waf_rule_id_example", // required
  waf_rule_revision_number: 56, // required
  include: source,vcl,waf_rule,
};

apiInstance.getWafRuleRevision(options)
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
**waf_rule_revision_number** | **Number** | Revision number. |
**include** | **String** | Include relationships. Optional, comma-separated values. Permitted values: `waf_rule`, `vcl`, and `source`. The `vcl` and `source` relationships show the WAF VCL and corresponding ModSecurity source. These fields are blank unless the relationship is included.  | [optional]

### Return type

[**WafRuleRevisionResponse**](WafRuleRevisionResponse.md)


## `listWafRuleRevisions`

```javascript
listWafRuleRevisions({ waf_rule_id, [page_number, ][page_size, ][include] })
```

List all revisions for a specific rule. The `rule_id` provided can be the ModSecurity Rule ID or the Fastly generated rule ID.

### Example

```javascript
const options = {
  waf_rule_id: "waf_rule_id_example", // required
  page_number: 1,
  page_size: 20,
  include: "waf_rule",
};

apiInstance.listWafRuleRevisions(options)
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
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [defaults to 20]
**include** | **String** | Include relationships. Optional. | [optional] [one of: "waf_rule"]

### Return type

[**WafRuleRevisionsResponse**](WafRuleRevisionsResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
