# FastlyApi.WafExclusionsApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWafRuleExclusion**](WafExclusionsApi.md#createWafRuleExclusion) | **POST** /waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions | Create a WAF rule exclusion
[**deleteWafRuleExclusion**](WafExclusionsApi.md#deleteWafRuleExclusion) | **DELETE** /waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions/{exclusion_number} | Delete a WAF rule exclusion
[**getWafRuleExclusion**](WafExclusionsApi.md#getWafRuleExclusion) | **GET** /waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions/{exclusion_number} | Get a WAF rule exclusion
[**listWafRuleExclusions**](WafExclusionsApi.md#listWafRuleExclusions) | **GET** /waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions | List WAF rule exclusions
[**updateWafRuleExclusion**](WafExclusionsApi.md#updateWafRuleExclusion) | **PATCH** /waf/firewalls/{firewall_id}/versions/{firewall_version_number}/exclusions/{exclusion_number} | Update a WAF rule exclusion



## createWafRuleExclusion

> createWafRuleExclusion(firewall_id, firewall_version_number, opts)

Create a WAF rule exclusion

Create a WAF exclusion for a particular firewall version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafExclusionsApi();
let firewall_id = "firewall_id_example"; // String | 
let firewall_version_number = 56; // Number | 
let opts = {
  'inline_object2': new FastlyApi.InlineObject2() // InlineObject2 | 
};
apiInstance.createWafRuleExclusion(firewall_id, firewall_version_number, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewall_id** | **String**|  | 
 **firewall_version_number** | **Number**|  | 
 **inline_object2** | [**InlineObject2**](InlineObject2.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## deleteWafRuleExclusion

> deleteWafRuleExclusion(firewall_id, firewall_version_number, exclusion_number)

Delete a WAF rule exclusion

Delete a WAF exclusion for a particular firewall version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafExclusionsApi();
let firewall_id = "firewall_id_example"; // String | 
let firewall_version_number = 56; // Number | 
let exclusion_number = 56; // Number | 
apiInstance.deleteWafRuleExclusion(firewall_id, firewall_version_number, exclusion_number).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewall_id** | **String**|  | 
 **firewall_version_number** | **Number**|  | 
 **exclusion_number** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getWafRuleExclusion

> getWafRuleExclusion(firewall_id, firewall_version_number, exclusion_number)

Get a WAF rule exclusion

Get a specific WAF exclusion object.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafExclusionsApi();
let firewall_id = "firewall_id_example"; // String | 
let firewall_version_number = 56; // Number | 
let exclusion_number = 56; // Number | 
apiInstance.getWafRuleExclusion(firewall_id, firewall_version_number, exclusion_number).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewall_id** | **String**|  | 
 **firewall_version_number** | **Number**|  | 
 **exclusion_number** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## listWafRuleExclusions

> listWafRuleExclusions(firewall_id, firewall_version_number, opts)

List WAF rule exclusions

List all exclusions for a particular firewall version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafExclusionsApi();
let firewall_id = "firewall_id_example"; // String | 
let firewall_version_number = 56; // Number | 
let opts = {
  'filter_exclusion_type': "filter_exclusion_type_example", // String | Filters the results based on this exclusion type.
  'filter_name': "filter_name_example", // String | Filters the results based on name.
  'filter_waf_rules_modsec_rule_id': 56, // Number | Filters the results based on this ModSecurity rule ID.
  'page_number': 56, // Number | Current page.
  'page_size': 20, // Number | Number of records per page.
  'include': "include_example" // String | Include relationships. Optional, comma-separated values. Permitted values: `waf_rules` and `waf_rule_revisions`. 
};
apiInstance.listWafRuleExclusions(firewall_id, firewall_version_number, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewall_id** | **String**|  | 
 **firewall_version_number** | **Number**|  | 
 **filter_exclusion_type** | **String**| Filters the results based on this exclusion type. | [optional] 
 **filter_name** | **String**| Filters the results based on name. | [optional] 
 **filter_waf_rules_modsec_rule_id** | **Number**| Filters the results based on this ModSecurity rule ID. | [optional] 
 **page_number** | **Number**| Current page. | [optional] 
 **page_size** | **Number**| Number of records per page. | [optional] [default to 20]
 **include** | **String**| Include relationships. Optional, comma-separated values. Permitted values: &#x60;waf_rules&#x60; and &#x60;waf_rule_revisions&#x60;.  | [optional] 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## updateWafRuleExclusion

> updateWafRuleExclusion(firewall_id, firewall_version_number, exclusion_number, opts)

Update a WAF rule exclusion

Update a WAF exclusion for a particular firewall version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafExclusionsApi();
let firewall_id = "firewall_id_example"; // String | 
let firewall_version_number = 56; // Number | 
let exclusion_number = 56; // Number | 
let opts = {
  'inline_object3': new FastlyApi.InlineObject3() // InlineObject3 | 
};
apiInstance.updateWafRuleExclusion(firewall_id, firewall_version_number, exclusion_number, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewall_id** | **String**|  | 
 **firewall_version_number** | **Number**|  | 
 **exclusion_number** | **Number**|  | 
 **inline_object3** | [**InlineObject3**](InlineObject3.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

