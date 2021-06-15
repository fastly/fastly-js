# FastlyApi.TlsActivationsApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTlsActivation**](TlsActivationsApi.md#createTlsActivation) | **POST** /tls/activations | Enable TLS for a domain using a custom certificate
[**deleteTlsActivation**](TlsActivationsApi.md#deleteTlsActivation) | **DELETE** /tls/activations/{tls_activation_id} | Disable TLS on a domain
[**getTlsActivation**](TlsActivationsApi.md#getTlsActivation) | **GET** /tls/activations/{tls_activation_id} | Get a TLS activation
[**listTlsActivations**](TlsActivationsApi.md#listTlsActivations) | **GET** /tls/activations | List TLS activations
[**updateTlsActivation**](TlsActivationsApi.md#updateTlsActivation) | **PATCH** /tls/activations/{tls_activation_id} | Update a certificate



## createTlsActivation

> Object createTlsActivation(opts)

Enable TLS for a domain using a custom certificate

Enable TLS for a particular TLS domain and certificate combination. These relationships must be specified to create the TLS activation.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.TlsActivationsApi();
let opts = {
  'body': {"data":{"type":"tls_activation","relationships":{"tls_certificate":{"data":{"type":"tls_certificate","id":"cRTguUGZzb2W9Euo4moOr"}},"tls_configuration":{"data":{"type":"tls_configuration","id":"t7CguUGZzb2W9Euo5FoKa"}},"tls_domain":{"data":{"type":"tls_domain","id":"DOMAIN_NAME"}}}}} // Object | 
};
apiInstance.createTlsActivation(opts).then((data) => {
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


## deleteTlsActivation

> deleteTlsActivation(tls_activation_id)

Disable TLS on a domain

Disable TLS on the domain associated with this TLS activation.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.TlsActivationsApi();
let tls_activation_id = "tls_activation_id_example"; // String | 
apiInstance.deleteTlsActivation(tls_activation_id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tls_activation_id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getTlsActivation

> Object getTlsActivation(tls_activation_id, opts)

Get a TLS activation

Show a TLS activation.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.TlsActivationsApi();
let tls_activation_id = "tls_activation_id_example"; // String | 
let opts = {
  'include': tls_certificate,tls_configuration,tls_domain // String | Include related objects. Optional, comma-separated values. Permitted values: `tls_certificate`, `tls_configuration`, and `tls_domain`. 
};
apiInstance.getTlsActivation(tls_activation_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tls_activation_id** | **String**|  | 
 **include** | **String**| Include related objects. Optional, comma-separated values. Permitted values: &#x60;tls_certificate&#x60;, &#x60;tls_configuration&#x60;, and &#x60;tls_domain&#x60;.  | [optional] 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## listTlsActivations

> Object listTlsActivations(opts)

List TLS activations

List all TLS activations.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.TlsActivationsApi();
let opts = {
  'filter_tls_certificate_id': "filter_tls_certificate_id_example", // String | Limit the returned activations to a specific certificate.
  'filter_tls_configuration_id': "filter_tls_configuration_id_example", // String | Limit the returned activations to a specific TLS configuration.
  'filter_tls_domain_id': "filter_tls_domain_id_example", // String | Limit the returned rules to a specific domain name.
  'include': tls_certificate,tls_configuration,tls_domain, // String | Include related objects. Optional, comma-separated values. Permitted values: `tls_certificate`, `tls_configuration`, and `tls_domain`. 
  'page_number': 56, // Number | Current page.
  'page_size': 20 // Number | Number of records per page.
};
apiInstance.listTlsActivations(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_tls_certificate_id** | **String**| Limit the returned activations to a specific certificate. | [optional] 
 **filter_tls_configuration_id** | **String**| Limit the returned activations to a specific TLS configuration. | [optional] 
 **filter_tls_domain_id** | **String**| Limit the returned rules to a specific domain name. | [optional] 
 **include** | **String**| Include related objects. Optional, comma-separated values. Permitted values: &#x60;tls_certificate&#x60;, &#x60;tls_configuration&#x60;, and &#x60;tls_domain&#x60;.  | [optional] 
 **page_number** | **Number**| Current page. | [optional] 
 **page_size** | **Number**| Number of records per page. | [optional] [default to 20]

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## updateTlsActivation

> Object updateTlsActivation(tls_activation_id, opts)

Update a certificate

Update the certificate used to terminate TLS traffic for the domain associated with this TLS activation.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.TlsActivationsApi();
let tls_activation_id = "tls_activation_id_example"; // String | 
let opts = {
  'body': {"data":{"type":"tls_activation","relationships":{"tls_certificate":{"data":{"type":"tls_certificate","id":"cRTguUGZzb2W9Euo4moOr"}}}}} // Object | 
};
apiInstance.updateTlsActivation(tls_activation_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tls_activation_id** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

