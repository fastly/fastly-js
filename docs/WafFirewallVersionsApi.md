# FastlyApi.WafFirewallVersionsApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloneWafFirewallVersion**](WafFirewallVersionsApi.md#cloneWafFirewallVersion) | **PUT** /waf/firewalls/{firewall_id}/versions/{firewall_version_number}/clone | Clone a firewall version
[**createWafFirewallVersion**](WafFirewallVersionsApi.md#createWafFirewallVersion) | **POST** /waf/firewalls/{firewall_id}/versions | Create a firewall version
[**deployActivateWafFirewallVersion**](WafFirewallVersionsApi.md#deployActivateWafFirewallVersion) | **PUT** /waf/firewalls/{firewall_id}/versions/{firewall_version_number}/activate | Deploy or activate a firewall version
[**getWafFirewallVersion**](WafFirewallVersionsApi.md#getWafFirewallVersion) | **GET** /waf/firewalls/{firewall_id}/versions/{firewall_version_number} | Get a firewall version
[**listWafFirewallVersions**](WafFirewallVersionsApi.md#listWafFirewallVersions) | **GET** /waf/firewalls/{firewall_id}/versions | List firewall versions
[**updateWafFirewallVersion**](WafFirewallVersionsApi.md#updateWafFirewallVersion) | **PATCH** /waf/firewalls/{firewall_id}/versions/{firewall_version_number} | Update a firewall version



## cloneWafFirewallVersion

> Object cloneWafFirewallVersion(firewall_id, firewall_version_number)

Clone a firewall version

Clone a specific, existing firewall version into a new, draft firewall version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafFirewallVersionsApi();
let firewall_id = "firewall_id_example"; // String | 
let firewall_version_number = 56; // Number | 
apiInstance.cloneWafFirewallVersion(firewall_id, firewall_version_number).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewall_id** | **String**|  | 
 **firewall_version_number** | **Number**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## createWafFirewallVersion

> Object createWafFirewallVersion(firewall_id, opts)

Create a firewall version

Create a new, draft firewall version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafFirewallVersionsApi();
let firewall_id = "firewall_id_example"; // String | 
let opts = {
  'body': {} // Object | 
};
apiInstance.createWafFirewallVersion(firewall_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewall_id** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## deployActivateWafFirewallVersion

> Object deployActivateWafFirewallVersion(firewall_id, firewall_version_number)

Deploy or activate a firewall version

Deploy or activate a specific firewall version. If a firewall has been disabled, deploying a firewall version will automatically enable the firewall again.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafFirewallVersionsApi();
let firewall_id = "firewall_id_example"; // String | 
let firewall_version_number = 56; // Number | 
apiInstance.deployActivateWafFirewallVersion(firewall_id, firewall_version_number).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewall_id** | **String**|  | 
 **firewall_version_number** | **Number**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## getWafFirewallVersion

> Object getWafFirewallVersion(firewall_id, firewall_version_number, opts)

Get a firewall version

Get details about a specific firewall version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafFirewallVersionsApi();
let firewall_id = "firewall_id_example"; // String | 
let firewall_version_number = 56; // Number | 
let opts = {
  'include': waf_firewall,waf_active_rules // String | Include relationships. Optional, comma-separated values. Permitted values: `waf_firewall` and `waf_active_rules`. 
};
apiInstance.getWafFirewallVersion(firewall_id, firewall_version_number, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewall_id** | **String**|  | 
 **firewall_version_number** | **Number**|  | 
 **include** | **String**| Include relationships. Optional, comma-separated values. Permitted values: &#x60;waf_firewall&#x60; and &#x60;waf_active_rules&#x60;.  | [optional] 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## listWafFirewallVersions

> Object listWafFirewallVersions(firewall_id, opts)

List firewall versions

Get a list of firewall versions associated with a specific firewall.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafFirewallVersionsApi();
let firewall_id = "firewall_id_example"; // String | 
let opts = {
  'include': waf_firewall, // String | Include relationships. Optional. Comma-separated values. Permitted values: `waf_firewall`. 
  'page_number': 56, // Number | Current page.
  'page_size': 20 // Number | Number of records per page.
};
apiInstance.listWafFirewallVersions(firewall_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewall_id** | **String**|  | 
 **include** | **String**| Include relationships. Optional. Comma-separated values. Permitted values: &#x60;waf_firewall&#x60;.  | [optional] 
 **page_number** | **Number**| Current page. | [optional] 
 **page_size** | **Number**| Number of records per page. | [optional] [default to 20]

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## updateWafFirewallVersion

> Object updateWafFirewallVersion(firewall_id, firewall_version_number, opts)

Update a firewall version

Update a specific firewall version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafFirewallVersionsApi();
let firewall_id = "firewall_id_example"; // String | 
let firewall_version_number = 56; // Number | 
let opts = {
  'body': {"data":{"type":"waf_firewall_version","attributes":{"notice_anomaly_score":12}}} // Object | 
};
apiInstance.updateWafFirewallVersion(firewall_id, firewall_version_number, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewall_id** | **String**|  | 
 **firewall_version_number** | **Number**|  | 
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

