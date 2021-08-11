# FastlyApi.TlsSubscriptionsApi



## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createTlsSub**](TlsSubscriptionsApi.md#createTlsSub) | **POST** /tls/subscriptions | Create a TLS subscription
[**deleteTlsSub**](TlsSubscriptionsApi.md#deleteTlsSub) | **DELETE** /tls/subscriptions/{tls_subscription_id} | Delete a TLS subscription
[**getTlsSub**](TlsSubscriptionsApi.md#getTlsSub) | **GET** /tls/subscriptions/{tls_subscription_id} | Get a TLS subscription
[**listTlsSubs**](TlsSubscriptionsApi.md#listTlsSubs) | **GET** /tls/subscriptions | List TLS subscriptions
[**patchTlsSub**](TlsSubscriptionsApi.md#patchTlsSub) | **PATCH** /tls/subscriptions/{tls_subscription_id} | Update a TLS subscription



## `createTlsSub`

> createTlsSub(opts)

Create a TLS subscription

Create a new TLS subscription. This response includes a list of possible challenges to verify domain ownership.

### Example

```javascript
let apiInstance = new FastlyApi.TlsSubscriptionsApi();
let opts = {
  'force': true, // Boolean | A flag that allows you to edit and delete a subscription with active domains. Valid to use on PATCH and DELETE actions. As a warning, removing an active domain from a subscription or forcing the deletion of a subscription may result in breaking TLS termination to that domain. 
  'tls_subscription': {"data":{"type":"tls_subscription","attributes":{"certificate_authority":"lets-encrypt"},"relationships":{"tls_domains":{"data":[{"type":"tls_domain","id":"DOMAIN_NAME"}]},"tls_configuration":{"data":{"type":"tls_configuration","id":"t7CguUGZzb2W9Euo5FoKa"}}}}} // TlsSubscription | 
};
apiInstance.createTlsSub(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**force** | **Boolean** | A flag that allows you to edit and delete a subscription with active domains. Valid to use on PATCH and DELETE actions. As a warning, removing an active domain from a subscription or forcing the deletion of a subscription may result in breaking TLS termination to that domain.  | [optional]
**tls_subscription** | [**TlsSubscription**](../Model/TlsSubscription.md) |  | [optional]

### Return type

[**TlsSubscriptionResponse**](TlsSubscriptionResponse.md)


## `deleteTlsSub`

> deleteTlsSub(tls_subscription_id)

Delete a TLS subscription

Destroy a TLS subscription. A subscription cannot be destroyed if there are domains in the TLS enabled state.

### Example

```javascript
let apiInstance = new FastlyApi.TlsSubscriptionsApi();
let tls_subscription_id = "tls_subscription_id_example"; // String | 
apiInstance.deleteTlsSub(tls_subscription_id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**tls_subscription_id** | **String** |  |

### Return type

null (empty response body)


## `getTlsSub`

> getTlsSub(tls_subscription_id, opts)

Get a TLS subscription

Show a TLS subscription.

### Example

```javascript
let apiInstance = new FastlyApi.TlsSubscriptionsApi();
let tls_subscription_id = "tls_subscription_id_example"; // String | 
let opts = {
  'include': tls_authorizations // String | Include related objects. Optional, comma-separated values. Permitted values: `tls_authorizations`. 
};
apiInstance.getTlsSub(tls_subscription_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**tls_subscription_id** | **String** |  |
**include** | **String** | Include related objects. Optional, comma-separated values. Permitted values: &#x60;tls_authorizations&#x60;.  | [optional]

### Return type

[**TlsSubscriptionResponse**](TlsSubscriptionResponse.md)


## `listTlsSubs`

> listTlsSubs(opts)

List TLS subscriptions

List all TLS subscriptions.

### Example

```javascript
let apiInstance = new FastlyApi.TlsSubscriptionsApi();
let opts = {
  'filter_state': "filter_state_example", // String | Limit the returned subscriptions by state. Valid values are pending, processing, issued, and renewing. Accepts parameters: not (e.g., filter[state][not]=renewing). 
  'filter_tls_domains_id': "filter_tls_domains_id_example", // String | Limit the returned subscriptions to those that include the specific domain.
  'include': tls_authorizations, // String | Include related objects. Optional, comma-separated values. Permitted values: `tls_authorizations`. 
  'page_number': 56, // Number | Current page.
  'page_size': 20, // Number | Number of records per page.
  'sort': created_at // String | The order in which to list the results by creation date.
};
apiInstance.listTlsSubs(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filter_state** | **String** | Limit the returned subscriptions by state. Valid values are pending, processing, issued, and renewing. Accepts parameters: not (e.g., filter[state][not]&#x3D;renewing).  | [optional]
**filter_tls_domains_id** | **String** | Limit the returned subscriptions to those that include the specific domain. | [optional]
**include** | **String** | Include related objects. Optional, comma-separated values. Permitted values: &#x60;tls_authorizations&#x60;.  | [optional]
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [default to 20]
**sort** | **String** | The order in which to list the results by creation date. | [optional] [default to &#39;created_at&#39;]

### Return type

[**TlsSubscriptionsResponse**](TlsSubscriptionsResponse.md)


## `patchTlsSub`

> patchTlsSub(tls_subscription_id, opts)

Update a TLS subscription

Change the TLS domains or common name associated with this subscription, or update the TLS configuration for this set of domains.

### Example

```javascript
let apiInstance = new FastlyApi.TlsSubscriptionsApi();
let tls_subscription_id = "tls_subscription_id_example"; // String | 
let opts = {
  'force': true, // Boolean | A flag that allows you to edit and delete a subscription with active domains. Valid to use on PATCH and DELETE actions. As a warning, removing an active domain from a subscription or forcing the deletion of a subscription may result in breaking TLS termination to that domain. 
  'tls_subscription': {"data":{"type":"tls_subscription","relationships":{"common_name":{"data":{"type":"tls_domain","id":"DOMAIN_NAME"}},"tls_domains":{"data":[{"type":"tls_domain","id":"DOMAIN_NAME"}]},"tls_configuration":{"data":{"type":"tls_configuration","id":"t7CguUGZzb2W9Euo5FoKa"}}}}} // TlsSubscription | 
};
apiInstance.patchTlsSub(tls_subscription_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**tls_subscription_id** | **String** |  |
**force** | **Boolean** | A flag that allows you to edit and delete a subscription with active domains. Valid to use on PATCH and DELETE actions. As a warning, removing an active domain from a subscription or forcing the deletion of a subscription may result in breaking TLS termination to that domain.  | [optional]
**tls_subscription** | [**TlsSubscription**](../Model/TlsSubscription.md) |  | [optional]

### Return type

[**TlsSubscriptionResponse**](TlsSubscriptionResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
