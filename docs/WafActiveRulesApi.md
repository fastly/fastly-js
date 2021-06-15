# FastlyApi.WafActiveRulesApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkDeleteWafActiveRules**](WafActiveRulesApi.md#bulkDeleteWafActiveRules) | **DELETE** /waf/firewalls/{firewall_id}/versions/{version_id}/active-rules | Delete multiple active rules from a WAF
[**bulkUpdateWafActiveRules**](WafActiveRulesApi.md#bulkUpdateWafActiveRules) | **PATCH** /waf/firewalls/{firewall_id}/versions/{version_id}/active-rules/bulk | Update multiple active rules
[**createWafActiveRule**](WafActiveRulesApi.md#createWafActiveRule) | **POST** /waf/firewalls/{firewall_id}/versions/{version_id}/active-rules | Add a rule to a WAF as an active rule
[**createWafActiveRulesTag**](WafActiveRulesApi.md#createWafActiveRulesTag) | **POST** /waf/firewalls/{firewall_id}/versions/{version_id}/tags/{waf_tag_name}/active-rules | Create active rules by tag
[**deleteWafActiveRule**](WafActiveRulesApi.md#deleteWafActiveRule) | **DELETE** /waf/firewalls/{firewall_id}/versions/{version_id}/active-rules/{waf_rule_id} | Delete an active rule
[**getWafActiveRule**](WafActiveRulesApi.md#getWafActiveRule) | **GET** /waf/firewalls/{firewall_id}/versions/{version_id}/active-rules/{waf_rule_id} | Get an active WAF rule object
[**listWafActiveRules**](WafActiveRulesApi.md#listWafActiveRules) | **GET** /waf/firewalls/{firewall_id}/versions/{version_id}/active-rules | List active rules on a WAF
[**updateWafActiveRule**](WafActiveRulesApi.md#updateWafActiveRule) | **PATCH** /waf/firewalls/{firewall_id}/versions/{version_id}/active-rules/{waf_rule_id} | Update an active rule



## bulkDeleteWafActiveRules

> bulkDeleteWafActiveRules(firewall_id, version_id, opts)

Delete multiple active rules from a WAF

Delete many active rules on a particular firewall version using the active rule ID. Limited to 500 rules per request.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafActiveRulesApi();
let firewall_id = "firewall_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'body': {"data":[{"type":"waf_active_rule","id":"3krg2uUGZzb2W9Euo4moOR"}]} // Object | 
};
apiInstance.bulkDeleteWafActiveRules(firewall_id, version_id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewall_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/vnd.api+json; ext=bulk
- **Accept**: Not defined


## bulkUpdateWafActiveRules

> bulkUpdateWafActiveRules(firewall_id, version_id, opts)

Update multiple active rules

Bulk update all active rules on a [firewall version](https://developer.fastly.com/reference/api/waf/firewall-version/). This endpoint will not add new active rules, only update existing active rules.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafActiveRulesApi();
let firewall_id = "firewall_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'body': {"type":"waf_active_rule","attributes":{"revision":"latest"}} // Object | 
};
apiInstance.bulkUpdateWafActiveRules(firewall_id, version_id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewall_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: Not defined


## createWafActiveRule

> Object createWafActiveRule(firewall_id, version_id, opts)

Add a rule to a WAF as an active rule

Create an active rule for a particular firewall version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafActiveRulesApi();
let firewall_id = "firewall_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'body': {"data":{"type":"waf_active_rule","attributes":{"status":"log"},"relationships":{"waf_rule_revision":{"data":{"type":"waf_rule_revision","id":"r3Vg2uUGZzb2W9Euo4mo0R","examples":null}}}}} // Object | 
};
apiInstance.createWafActiveRule(firewall_id, version_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewall_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/vnd.api+json, application/vnd.api+json; ext=bulk
- **Accept**: application/vnd.api+json


## createWafActiveRulesTag

> createWafActiveRulesTag(firewall_id, version_id, waf_tag_name, opts)

Create active rules by tag

Create active rules by tag. This endpoint will create active rules using the latest revision available for each rule.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafActiveRulesApi();
let firewall_id = "firewall_id_example"; // String | 
let version_id = 56; // Number | 
let waf_tag_name = "waf_tag_name_example"; // String | 
let opts = {
  'body': {"data":{"type":"waf_active_rule","attributes":{"status":"log"}}} // Object | 
};
apiInstance.createWafActiveRulesTag(firewall_id, version_id, waf_tag_name, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewall_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **waf_tag_name** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: Not defined


## deleteWafActiveRule

> deleteWafActiveRule(firewall_id, version_id, waf_rule_id)

Delete an active rule

Delete an active rule for a particular firewall version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafActiveRulesApi();
let firewall_id = "firewall_id_example"; // String | 
let version_id = 56; // Number | 
let waf_rule_id = "waf_rule_id_example"; // String | 
apiInstance.deleteWafActiveRule(firewall_id, version_id, waf_rule_id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewall_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **waf_rule_id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getWafActiveRule

> Object getWafActiveRule(firewall_id, version_id, waf_rule_id, opts)

Get an active WAF rule object

Get a specific active rule object. Includes details of the rule revision associated with the active rule object by default.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafActiveRulesApi();
let firewall_id = "firewall_id_example"; // String | 
let version_id = 56; // Number | 
let waf_rule_id = "waf_rule_id_example"; // String | 
let opts = {
  'include': waf_rule_revision,waf_firewall_version // String | Include relationships. Optional, comma-separated values. Permitted values: `waf_rule_revision` and `waf_firewall_version`. 
};
apiInstance.getWafActiveRule(firewall_id, version_id, waf_rule_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewall_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **waf_rule_id** | **String**|  | 
 **include** | **String**| Include relationships. Optional, comma-separated values. Permitted values: &#x60;waf_rule_revision&#x60; and &#x60;waf_firewall_version&#x60;.  | [optional] 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## listWafActiveRules

> Object listWafActiveRules(firewall_id, version_id, opts)

List active rules on a WAF

List all active rules for a particular firewall version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafActiveRulesApi();
let firewall_id = "firewall_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'filter_status': "filter_status_example", // String | Limit results to active rules with the specified status.
  'filter_waf_rule_revision_message': "filter_waf_rule_revision_message_example", // String | Limit results to active rules with the specified message.
  'filter_waf_rule_revision_modsec_rule_id': "filter_waf_rule_revision_modsec_rule_id_example", // String | Limit results to active rules that represent the specified ModSecurity modsec_rule_id.
  'filter_outdated': "filter_outdated_example", // String | Limit results to active rules referencing an outdated rule revision.
  'include': waf_rule_revision,waf_firewall_version, // String | Include relationships. Optional, comma-separated values. Permitted values: `waf_rule_revision` and `waf_firewall_version`. 
  'page_number': 56, // Number | Current page.
  'page_size': 20 // Number | Number of records per page.
};
apiInstance.listWafActiveRules(firewall_id, version_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewall_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **filter_status** | **String**| Limit results to active rules with the specified status. | [optional] 
 **filter_waf_rule_revision_message** | **String**| Limit results to active rules with the specified message. | [optional] 
 **filter_waf_rule_revision_modsec_rule_id** | **String**| Limit results to active rules that represent the specified ModSecurity modsec_rule_id. | [optional] 
 **filter_outdated** | **String**| Limit results to active rules referencing an outdated rule revision. | [optional] 
 **include** | **String**| Include relationships. Optional, comma-separated values. Permitted values: &#x60;waf_rule_revision&#x60; and &#x60;waf_firewall_version&#x60;.  | [optional] 
 **page_number** | **Number**| Current page. | [optional] 
 **page_size** | **Number**| Number of records per page. | [optional] [default to 20]

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## updateWafActiveRule

> Object updateWafActiveRule(firewall_id, version_id, waf_rule_id, opts)

Update an active rule

Update an active rule&#39;s status for a particular firewall version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafActiveRulesApi();
let firewall_id = "firewall_id_example"; // String | 
let version_id = 56; // Number | 
let waf_rule_id = "waf_rule_id_example"; // String | 
let opts = {
  'body': {"data":{"id":"3krg2uUGZzb2W9Euo4moOR","type":"waf_active_rule","attributes":{"status":"block"}}} // Object | 
};
apiInstance.updateWafActiveRule(firewall_id, version_id, waf_rule_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewall_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **waf_rule_id** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

