# FastlyApi.WafFirewallsApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWafFirewall**](WafFirewallsApi.md#createWafFirewall) | **POST** /waf/firewalls | Create a firewall
[**deleteWafFirewall**](WafFirewallsApi.md#deleteWafFirewall) | **DELETE** /waf/firewalls/{firewall_id} | Delete a firewall
[**getWafFirewall**](WafFirewallsApi.md#getWafFirewall) | **GET** /waf/firewalls/{firewall_id} | Get a firewall
[**listWafFirewalls**](WafFirewallsApi.md#listWafFirewalls) | **GET** /waf/firewalls | List firewalls
[**updateWafFirewall**](WafFirewallsApi.md#updateWafFirewall) | **PATCH** /waf/firewalls/{firewall_id} | Update a firewall



## createWafFirewall

> Object createWafFirewall(opts)

Create a firewall

Create a firewall object for a particular service and service version using a defined &#x60;prefetch_condition&#x60; and &#x60;response&#x60;. If the &#x60;prefetch_condition&#x60; or the &#x60;response&#x60; is missing from the request body, Fastly will generate a default object on your service. 

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafFirewallsApi();
let opts = {
  'body': {"data":{"type":"waf_firewall","attributes":{"prefetch_condition":"WAF_Condition","response":"WAF_Error","service_id":"SU1Z0isxPaozGVKXdv0eY","service_version_number":1}}} // Object | 
};
apiInstance.createWafFirewall(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## deleteWafFirewall

> deleteWafFirewall(firewall_id, opts)

Delete a firewall

Delete the firewall object for a particular service and service version. 

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafFirewallsApi();
let firewall_id = "firewall_id_example"; // String | 
let opts = {
  'body': {"data":{"id":"fW7g2uUGZzb2W9Euo4Mo0r","type":"waf_firewall","attributes":{"service_version_number":1}}} // Object | 
};
apiInstance.deleteWafFirewall(firewall_id, opts).then(() => {
  console.log('API called successfully.');
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

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## getWafFirewall

> Object getWafFirewall(firewall_id, opts)

Get a firewall

Get a specific firewall object. 

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafFirewallsApi();
let firewall_id = "firewall_id_example"; // String | 
let opts = {
  'filter_service_version_number': "filter_service_version_number_example", // String | Limit the results returned to a specific service version.
  'include': waf_firewall_versions // String | Include related objects. Optional, comma-separated values. Permitted values: `waf_firewall_versions`. 
};
apiInstance.getWafFirewall(firewall_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **firewall_id** | **String**|  | 
 **filter_service_version_number** | **String**| Limit the results returned to a specific service version. | [optional] 
 **include** | **String**| Include related objects. Optional, comma-separated values. Permitted values: &#x60;waf_firewall_versions&#x60;.  | [optional] 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## listWafFirewalls

> Object listWafFirewalls(opts)

List firewalls

List all firewall objects.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafFirewallsApi();
let opts = {
  'page_number': 56, // Number | Current page.
  'page_size': 20, // Number | Number of records per page.
  'filter_service_id': "filter_service_id_example", // String | Limit the results returned to a specific service.
  'filter_service_version_number': "filter_service_version_number_example", // String | Limit the results returned to a specific service version.
  'include': waf_firewall_versions // String | Include related objects. Optional, comma-separated values. Permitted values: `waf_firewall_versions`. 
};
apiInstance.listWafFirewalls(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_number** | **Number**| Current page. | [optional] 
 **page_size** | **Number**| Number of records per page. | [optional] [default to 20]
 **filter_service_id** | **String**| Limit the results returned to a specific service. | [optional] 
 **filter_service_version_number** | **String**| Limit the results returned to a specific service version. | [optional] 
 **include** | **String**| Include related objects. Optional, comma-separated values. Permitted values: &#x60;waf_firewall_versions&#x60;.  | [optional] 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## updateWafFirewall

> Object updateWafFirewall(firewall_id, opts)

Update a firewall

Update a firewall object for a particular service and service version. Specifying a &#x60;service_version_number&#x60; is required. 

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.WafFirewallsApi();
let firewall_id = "firewall_id_example"; // String | 
let opts = {
  'body': {"update":{"summary":"Update a firewall object for a particular service and service version. Specifying a `service_version_number` is required.","value":{"data":{"id":"fW7g2uUGZzb2W9Euo4Mo0r","type":"waf_firewall","attributes":{"response":"NEW_RESPONSE","service_version_number":1}}}}} // Object | 
};
apiInstance.updateWafFirewall(firewall_id, opts).then((data) => {
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

