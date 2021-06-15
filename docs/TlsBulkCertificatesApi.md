# FastlyApi.TlsBulkCertificatesApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteBulkTlsCert**](TlsBulkCertificatesApi.md#deleteBulkTlsCert) | **DELETE** /tls/bulk/certificates/{certificate_id} | Delete a certificate
[**getTlsBulkCert**](TlsBulkCertificatesApi.md#getTlsBulkCert) | **GET** /tls/bulk/certificates/{certificate_id} | Get a certificate
[**listTlsBulkCerts**](TlsBulkCertificatesApi.md#listTlsBulkCerts) | **GET** /tls/bulk/certificates | List certificates
[**updateBulkTlsCert**](TlsBulkCertificatesApi.md#updateBulkTlsCert) | **PATCH** /tls/bulk/certificates/{certificate_id} | Update a certificate
[**uploadTlsBulkCert**](TlsBulkCertificatesApi.md#uploadTlsBulkCert) | **POST** /tls/bulk/certificates | Upload a certificate



## deleteBulkTlsCert

> deleteBulkTlsCert(certificate_id)

Delete a certificate

Destroy a certificate. This disables TLS for all domains listed as SAN entries.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.TlsBulkCertificatesApi();
let certificate_id = "certificate_id_example"; // String | 
apiInstance.deleteBulkTlsCert(certificate_id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getTlsBulkCert

> Object getTlsBulkCert(certificate_id)

Get a certificate

Retrieve a single certificate.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.TlsBulkCertificatesApi();
let certificate_id = "certificate_id_example"; // String | 
apiInstance.getTlsBulkCert(certificate_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_id** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## listTlsBulkCerts

> Object listTlsBulkCerts(opts)

List certificates

List all certificates.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.TlsBulkCertificatesApi();
let opts = {
  'filter_tls_domain_id_match': "filter_tls_domain_id_match_example", // String | Filter certificates by their matching, fully-qualified domain name. Returns all partial matches. Must provide a value longer than 3 characters.
  'page_number': 56, // Number | Current page.
  'page_size': 20, // Number | Number of records per page.
  'sort': created_at // String | The order in which to list the results by creation date.
};
apiInstance.listTlsBulkCerts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_tls_domain_id_match** | **String**| Filter certificates by their matching, fully-qualified domain name. Returns all partial matches. Must provide a value longer than 3 characters. | [optional] 
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


## updateBulkTlsCert

> Object updateBulkTlsCert(certificate_id, opts)

Update a certificate

Replace a certificate with a newly reissued certificate. By using this endpoint, the original certificate will cease to be used for future TLS handshakes. Thus, only SAN entries that appear in the replacement certificate will become TLS enabled. Any SAN entries that are missing in the replacement certificate will become disabled.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.TlsBulkCertificatesApi();
let certificate_id = "certificate_id_example"; // String | 
let opts = {
  'body': {"data":{"id":"cRTguUGZzb2W9Euo4moOr","type":"tls_bulk_certificate","attributes":{"allow_untrusted_root":false,"cert_blob":"-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----\n","intermediates_blob":"-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----\n"}}} // Object | 
};
apiInstance.updateBulkTlsCert(certificate_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_id** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## uploadTlsBulkCert

> Object uploadTlsBulkCert(opts)

Upload a certificate

Upload a new certificate. TLS domains are automatically enabled upon certificate creation. If a domain is already enabled on a previously uploaded certificate, that domain will be updated to use the new certificate for all future TLS handshake requests.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.TlsBulkCertificatesApi();
let opts = {
  'body': {"data":{"type":"tls_bulk_certificate","attributes":{"allow_untrusted_root":false,"cert_blob":"-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----\n","intermediates_blob":"-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----\n"},"relationships":{"tls_configurations":{"data":[{"type":"tls_configuration","id":"t7CguUGZzb2W9Euo5FoKa"}]}}}} // Object | 
};
apiInstance.uploadTlsBulkCert(opts).then((data) => {
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

