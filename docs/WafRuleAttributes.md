# Fastly.WafRuleAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**modsec_rule_id** | **Number** | Corresponding ModSecurity rule ID. | [optional] [readonly] 
**publisher** | **String** | Rule publisher. | [optional] [readonly]  [one of: "fastly", "trustwave", "owasp"]
**type** | **String** | The rule&#39;s [type](https://docs.fastly.com/en/guides/managing-rules-on-the-fastly-waf#understanding-the-types-of-rules). | [optional] [readonly]  [one of: "strict", "score", "threshold"]



 

### `publisher`

* `fastly` (value: `"fastly"`)

* `trustwave` (value: `"trustwave"`)

* `owasp` (value: `"owasp"`)





 

### `type`

* `strict` (value: `"strict"`)

* `score` (value: `"score"`)

* `threshold` (value: `"threshold"`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
