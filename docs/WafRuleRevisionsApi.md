# FastlyApi.WafRuleRevisionsApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWafRuleRevision**](WafRuleRevisionsApi.md#getWafRuleRevision) | **GET** /waf/rules/{waf_rule_id}/revisions/{waf_rule_revision_number} | Get a revision of a rule
[**listWafRuleRevisions**](WafRuleRevisionsApi.md#listWafRuleRevisions) | **GET** /waf/rules/{waf_rule_id}/revisions | List revisions for a rule



## getWafRuleRevision

> Object getWafRuleRevision(waf_rule_id, waf_rule_revision_number, opts)

Get a revision of a rule

Get a specific rule revision.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafRuleRevisionsApi();
let waf_rule_id = "waf_rule_id_example"; // String | 
let waf_rule_revision_number = 56; // Number | 
let opts = {
  'include': source,vcl,waf_rule // String | Include relationships. Optional, comma-separated values. Permitted values: `waf_rule`, `vcl`, and `source`. The `vcl` and `source` relationships show the WAF VCL and corresponding ModSecurity source. These fields are blank unless the relationship is included. 
};
apiInstance.getWafRuleRevision(waf_rule_id, waf_rule_revision_number, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **waf_rule_id** | **String**|  | 
 **waf_rule_revision_number** | **Number**|  | 
 **include** | **String**| Include relationships. Optional, comma-separated values. Permitted values: &#x60;waf_rule&#x60;, &#x60;vcl&#x60;, and &#x60;source&#x60;. The &#x60;vcl&#x60; and &#x60;source&#x60; relationships show the WAF VCL and corresponding ModSecurity source. These fields are blank unless the relationship is included.  | [optional] 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## listWafRuleRevisions

> Object listWafRuleRevisions(waf_rule_id, opts)

List revisions for a rule

List all revisions for a specific rule. The &#x60;rule_id&#x60; provided can be the ModSecurity Rule ID or the Fastly generated rule ID.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafRuleRevisionsApi();
let waf_rule_id = "waf_rule_id_example"; // String | 
let opts = {
  'page_number': 56, // Number | Current page.
  'page_size': 20, // Number | Number of records per page.
  'include': waf_rule // String | Include relationships. Optional. Comma-separated values. Permitted values: `waf_rule`. 
};
apiInstance.listWafRuleRevisions(waf_rule_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **waf_rule_id** | **String**|  | 
 **page_number** | **Number**| Current page. | [optional] 
 **page_size** | **Number**| Number of records per page. | [optional] [default to 20]
 **include** | **String**| Include relationships. Optional. Comma-separated values. Permitted values: &#x60;waf_rule&#x60;.  | [optional] 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

