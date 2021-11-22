# Fastly.TlsDomainsApi

```javascript
const apiInstance = new Fastly.TlsDomainsApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**listTlsDomains**](TlsDomainsApi.md#listTlsDomains) | **GET** /tls/domains | List TLS domains


## `listTlsDomains`

```javascript
listTlsDomains({ , [filter_in_use, ][filter_tls_certificates_id, ][filter_tls_subscriptions_id, ][include, ][page_number, ][page_size, ][sort] })
```

List all TLS domains.

### Example

```javascript
const options = {
  filter_in_use: "filter_in_use_example",
  filter_tls_certificates_id: "filter_tls_certificates_id_example",
  filter_tls_subscriptions_id: "filter_tls_subscriptions_id_example",
  include: "include_example",
  page_number: 1,
  page_size: 20,
  sort: "created_at",
};

apiInstance.listTlsDomains(options)
  .then((data) => {
    console.log(data, "API called successfully.");
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filter_in_use** | **String** | Optional. Limit the returned domains to those currently using Fastly to terminate TLS with SNI (that is, domains considered \&quot;in use\&quot;) Permitted values: true, false. | [optional]
**filter_tls_certificates_id** | **String** | Optional. Limit the returned domains to those listed in the given TLS certificate&#39;s SAN list. | [optional]
**filter_tls_subscriptions_id** | **String** | Optional. Limit the returned domains to those for a given TLS subscription. | [optional]
**include** | **String** | Include related objects. Optional, comma-separated values. Permitted values: `tls_activations`, `tls_certificates`, `tls_subscriptions`, `tls_subscriptions.tls_authorizations`, and `tls_authorizations.globalsign_email_challenge`.  | [optional]
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [defaults to 20]
**sort** | **String** | The order in which to list the results by creation date. | [optional] [one of: "created_at", "-created_at"]

### Return type

[**TlsDomainsResponse**](TlsDomainsResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
