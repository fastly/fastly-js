# FastlyApi.WafRulesApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWafRule**](WafRulesApi.md#getWafRule) | **GET** /waf/rules/{waf_rule_id} | Get a rule
[**listWafRules**](WafRulesApi.md#listWafRules) | **GET** /waf/rules | List available WAF rules



## getWafRule

> Object getWafRule(waf_rule_id, opts)

Get a rule

Get a specific rule. The &#x60;id&#x60; provided can be the ModSecurity Rule ID or the Fastly generated rule ID.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafRulesApi();
let waf_rule_id = "waf_rule_id_example"; // String | 
let opts = {
  'include': waf_tags,waf_rule_revisions // String | Include relationships. Optional, comma-separated values. Permitted values: `waf_tags` and `waf_rule_revisions`. 
};
apiInstance.getWafRule(waf_rule_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **waf_rule_id** | **String**|  | 
 **include** | **String**| Include relationships. Optional, comma-separated values. Permitted values: &#x60;waf_tags&#x60; and &#x60;waf_rule_revisions&#x60;.  | [optional] 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## listWafRules

> Object listWafRules(opts)

List available WAF rules

List all available WAF rules.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafRulesApi();
let opts = {
  'filter_modsec_rule_id': "filter_modsec_rule_id_example", // String | Limit the returned rules to a specific ModSecurity rule ID.
  'filter_waf_tags_name': "filter_waf_tags_name_example", // String | Limit the returned rules to a set linked to a tag by name.
  'filter_waf_rule_revisions_source': "filter_waf_rule_revisions_source_example", // String | Limit the returned rules to a set linked to a source.
  'filter_waf_firewall_id_not_match': "filter_waf_firewall_id_not_match_example", // String | Limit the returned rules to a set not included in the active firewall version for a firewall.
  'page_number': 56, // Number | Current page.
  'page_size': 20, // Number | Number of records per page.
  'include': waf_tags,waf_rule_revisions // String | Include relationships. Optional, comma-separated values. Permitted values: `waf_tags` and `waf_rule_revisions`. 
};
apiInstance.listWafRules(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_modsec_rule_id** | **String**| Limit the returned rules to a specific ModSecurity rule ID. | [optional] 
 **filter_waf_tags_name** | **String**| Limit the returned rules to a set linked to a tag by name. | [optional] 
 **filter_waf_rule_revisions_source** | **String**| Limit the returned rules to a set linked to a source. | [optional] 
 **filter_waf_firewall_id_not_match** | **String**| Limit the returned rules to a set not included in the active firewall version for a firewall. | [optional] 
 **page_number** | **Number**| Current page. | [optional] 
 **page_size** | **Number**| Number of records per page. | [optional] [default to 20]
 **include** | **String**| Include relationships. Optional, comma-separated values. Permitted values: &#x60;waf_tags&#x60; and &#x60;waf_rule_revisions&#x60;.  | [optional] 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

