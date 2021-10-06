# Fastly.TlsSubscriptionsApi


```javascript
const apiInstance = new Fastly.TlsSubscriptionsApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createTlsSub**](TlsSubscriptionsApi.md#createTlsSub) | **POST** /tls/subscriptions | Create a TLS subscription
[**deleteTlsSub**](TlsSubscriptionsApi.md#deleteTlsSub) | **DELETE** /tls/subscriptions/{tls_subscription_id} | Delete a TLS subscription
[**getTlsSub**](TlsSubscriptionsApi.md#getTlsSub) | **GET** /tls/subscriptions/{tls_subscription_id} | Get a TLS subscription
[**listTlsSubs**](TlsSubscriptionsApi.md#listTlsSubs) | **GET** /tls/subscriptions | List TLS subscriptions
[**patchTlsSub**](TlsSubscriptionsApi.md#patchTlsSub) | **PATCH** /tls/subscriptions/{tls_subscription_id} | Update a TLS subscription



## `createTlsSub`

```javascript
createTlsSub({ [force, ][tls_subscription] })
```

Create a new TLS subscription. This response includes a list of possible challenges to verify domain ownership.

### Example

```javascript
const options = {
  force: true,
  tls_subscription: new Fastly.TlsSubscription(),
};

apiInstance.createTlsSub(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**force** | **Boolean** | A flag that allows you to edit and delete a subscription with active domains. Valid to use on PATCH and DELETE actions. As a warning, removing an active domain from a subscription or forcing the deletion of a subscription may result in breaking TLS termination to that domain.  | [optional]
**tls_subscription** | [**TlsSubscription**](../Model/TlsSubscription.md) |  | [optional]

### Return type

[**TlsSubscriptionResponse**](TlsSubscriptionResponse.md)


## `deleteTlsSub`

```javascript
deleteTlsSub({ tls_subscription_id })
```

Destroy a TLS subscription. A subscription cannot be destroyed if there are domains in the TLS enabled state.

### Example

```javascript
const options = {
  tls_subscription_id: "tls_subscription_id_example", // required
};

apiInstance.deleteTlsSub(options)
  .then(() => {
    console.log('API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**tls_subscription_id** | **String** |  |

### Return type

null (empty response body)


## `getTlsSub`

```javascript
getTlsSub({ tls_subscription_id, [include] })
```

Show a TLS subscription.

### Example

```javascript
const options = {
  tls_subscription_id: "tls_subscription_id_example", // required
  include: tls_authorizations,
};

apiInstance.getTlsSub(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**tls_subscription_id** | **String** |  |
**include** | **String** | Include related objects. Optional, comma-separated values. Permitted values: &#x60;tls_authorizations&#x60; and &#x60;tls_authorizations.globalsign_email_challenge&#x60;.  | [optional]

### Return type

[**TlsSubscriptionResponse**](TlsSubscriptionResponse.md)


## `listTlsSubs`

```javascript
listTlsSubs({ [filter_state, ][filter_tls_domains_id, ][include, ][page_number, ][page_size, ][sort] })
```

List all TLS subscriptions.

### Example

```javascript
const options = {
  filter_state: "filter_state_example",
  filter_tls_domains_id: "filter_tls_domains_id_example",
  include: tls_authorizations,
  page_number: 56,
  page_size: 20,
  sort: "'created_at'",
};

apiInstance.listTlsSubs(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filter_state** | **String** | Limit the returned subscriptions by state. Valid values are pending, processing, issued, and renewing. Accepts parameters: not (e.g., filter[state][not]&#x3D;renewing).  | [optional]
**filter_tls_domains_id** | **String** | Limit the returned subscriptions to those that include the specific domain. | [optional]
**include** | **String** | Include related objects. Optional, comma-separated values. Permitted values: &#x60;tls_authorizations&#x60; and &#x60;tls_authorizations.globalsign_email_challenge&#x60;.  | [optional]
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [default to 20]
**sort** | **String** | The order in which to list the results by creation date. | [optional] [default to &#39;created_at&#39;]

### Return type

[**TlsSubscriptionsResponse**](TlsSubscriptionsResponse.md)


## `patchTlsSub`

```javascript
patchTlsSub({ tls_subscription_id, [force, ], [tls_subscription] })
```

Change the TLS domains or common name associated with this subscription, or update the TLS configuration for this set of domains.

### Example

```javascript
const options = {
  tls_subscription_id: "tls_subscription_id_example", // required
  force: true,
  tls_subscription: new Fastly.TlsSubscription(),
};

apiInstance.patchTlsSub(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**tls_subscription_id** | **String** |  |
**force** | **Boolean** | A flag that allows you to edit and delete a subscription with active domains. Valid to use on PATCH and DELETE actions. As a warning, removing an active domain from a subscription or forcing the deletion of a subscription may result in breaking TLS termination to that domain.  | [optional]
**tls_subscription** | [**TlsSubscription**](../Model/TlsSubscription.md) |  | [optional]

### Return type

[**TlsSubscriptionResponse**](TlsSubscriptionResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
