# FastlyApi.TlsDomainsApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listTlsDomains**](TlsDomainsApi.md#listTlsDomains) | **GET** /tls/domains | List TLS domains



## listTlsDomains

> Object listTlsDomains(opts)

List TLS domains

List all TLS domains.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.TlsDomainsApi();
let opts = {
  'filter_in_use': "filter_in_use_example", // String | Optional. Limit the returned domains to those currently using Fastly to terminate TLS with SNI (that is, domains considered \"in use\") Permitted values: true, false.
  'filter_tls_certificates_id': "filter_tls_certificates_id_example", // String | Optional. Limit the returned domains to those listed in the given TLS certificate's SAN list.
  'filter_tls_subscriptions_id': "filter_tls_subscriptions_id_example", // String | Optional. Limit the returned domains to those for a given TLS subscription.
  'include': "include_example", // String | Include related objects. Optional, comma-separated values. Permitted values: `tls_activations`, `tls_certificates`, `tls_subscriptions`, and `tls_subscriptions.tls_authorizations`. 
  'page_number': 56, // Number | Current page.
  'page_size': 20, // Number | Number of records per page.
  'sort': created_at // String | The order in which to list the results by creation date.
};
apiInstance.listTlsDomains(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_in_use** | **String**| Optional. Limit the returned domains to those currently using Fastly to terminate TLS with SNI (that is, domains considered \&quot;in use\&quot;) Permitted values: true, false. | [optional] 
 **filter_tls_certificates_id** | **String**| Optional. Limit the returned domains to those listed in the given TLS certificate&#39;s SAN list. | [optional] 
 **filter_tls_subscriptions_id** | **String**| Optional. Limit the returned domains to those for a given TLS subscription. | [optional] 
 **include** | **String**| Include related objects. Optional, comma-separated values. Permitted values: &#x60;tls_activations&#x60;, &#x60;tls_certificates&#x60;, &#x60;tls_subscriptions&#x60;, and &#x60;tls_subscriptions.tls_authorizations&#x60;.  | [optional] 
 **page_number** | **Number**| Current page. | [optional] 
 **page_size** | **Number**| Number of records per page. | [optional] [default to 20]
 **sort** | **String**| The order in which to list the results by creation date. | [optional] [default to &#39;created_at&#39;]

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

