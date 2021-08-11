# FastlyApi.TlsCertificatesApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createTlsCert**](TlsCertificatesApi.md#createTlsCert) | **POST** /tls/certificates | Create a TLS certificate
[**deleteTlsCert**](TlsCertificatesApi.md#deleteTlsCert) | **DELETE** /tls/certificates/{tls_certificate_id} | Delete a TLS certificate
[**getTlsCert**](TlsCertificatesApi.md#getTlsCert) | **GET** /tls/certificates/{tls_certificate_id} | Get a TLS certificate
[**listTlsCerts**](TlsCertificatesApi.md#listTlsCerts) | **GET** /tls/certificates | List TLS certificates
[**updateTlsCert**](TlsCertificatesApi.md#updateTlsCert) | **PATCH** /tls/certificates/{tls_certificate_id} | Update a TLS certificate



## `createTlsCert`

> Object createTlsCert(opts)

Create a TLS certificate

Create a TLS certificate.

### Example

```javascript
let apiInstance = new FastlyApi.TlsCertificatesApi();
let opts = {
  'tls_certificate': {"data":{"type":"tls_certificate","attributes":{"cert_blob":"-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----\n","name":"My certificate"}}} // TlsCertificate | 
};
apiInstance.createTlsCert(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**tls_certificate** | [**TlsCertificate**](../Model/TlsCertificate.md) |  | [optional]

### Return type

**Object**


## `deleteTlsCert`

> deleteTlsCert(tls_certificate_id)

Delete a TLS certificate

Destroy a TLS certificate. TLS certificates already enabled for a domain cannot be destroyed.

### Example

```javascript
let apiInstance = new FastlyApi.TlsCertificatesApi();
let tls_certificate_id = "tls_certificate_id_example"; // String | 
apiInstance.deleteTlsCert(tls_certificate_id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**tls_certificate_id** | **String** |  |

### Return type

null (empty response body)


## `getTlsCert`

> TlsCertificateResponse getTlsCert(tls_certificate_id)

Get a TLS certificate

Show a TLS certificate.

### Example

```javascript
let apiInstance = new FastlyApi.TlsCertificatesApi();
let tls_certificate_id = "tls_certificate_id_example"; // String | 
apiInstance.getTlsCert(tls_certificate_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**tls_certificate_id** | **String** |  |

### Return type

[**TlsCertificateResponse**](TlsCertificateResponse.md)


## `listTlsCerts`

> TlsCertificatesResponse listTlsCerts(opts)

List TLS certificates

List all TLS certificates.

### Example

```javascript
let apiInstance = new FastlyApi.TlsCertificatesApi();
let opts = {
  'filter_not_after': "filter_not_after_example", // String | Limit the returned certificates to those that expire prior to the specified date in UTC. Accepts parameters: lte (e.g., filter[not_after][lte]=2020-05-05). 
  'filter_tls_domains_id': "filter_tls_domains_id_example", // String | Limit the returned certificates to those that include the specific domain.
  'include': "include_example", // String | Include related objects. Optional, comma-separated values. Permitted values: `tls_activations`. 
  'page_number': 56, // Number | Current page.
  'page_size': 20, // Number | Number of records per page.
  'sort': created_at // String | The order in which to list the results by creation date.
};
apiInstance.listTlsCerts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filter_not_after** | **String** | Limit the returned certificates to those that expire prior to the specified date in UTC. Accepts parameters: lte (e.g., filter[not_after][lte]&#x3D;2020-05-05).  | [optional]
**filter_tls_domains_id** | **String** | Limit the returned certificates to those that include the specific domain. | [optional]
**include** | **String** | Include related objects. Optional, comma-separated values. Permitted values: &#x60;tls_activations&#x60;.  | [optional]
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [default to 20]
**sort** | **String** | The order in which to list the results by creation date. | [optional] [default to &#39;created_at&#39;]

### Return type

[**TlsCertificatesResponse**](TlsCertificatesResponse.md)


## `updateTlsCert`

> TlsCertificateResponse updateTlsCert(tls_certificate_id, opts)

Update a TLS certificate

Replace a TLS certificate with a newly reissued TLS certificate, or update a TLS certificate's name. If replacing a TLS certificate, the new TLS certificate must contain all SAN entries as the current TLS certificate. It must either have an exact matching list or contain a superset.

### Example

```javascript
let apiInstance = new FastlyApi.TlsCertificatesApi();
let tls_certificate_id = "tls_certificate_id_example"; // String | 
let opts = {
  'tls_certificate': {"data":{"type":"tls_certificate","attributes":{"cert_blob":"-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----\n","name":"My certificate"}}} // TlsCertificate | 
};
apiInstance.updateTlsCert(tls_certificate_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**tls_certificate_id** | **String** |  |
**tls_certificate** | [**TlsCertificate**](../Model/TlsCertificate.md) |  | [optional]

### Return type

[**TlsCertificateResponse**](TlsCertificateResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
