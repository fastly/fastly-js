# Fastly.TlsSubscriptionsOtherApi


```javascript
const apiInstance = new Fastly.TlsSubscriptionsOtherApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**deleteTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallengesGlobalsignEmailChallengeId**](TlsSubscriptionsOtherApi.md#deleteTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallengesGlobalsignEmailChallengeId) | **DELETE** /tls/subscriptions/{tls_subscription_id}/authorizations/{tls_authorization_id}/globalsign_email_challenges/{globalsign_email_challenge_id} | Delete a GlobalSign email challenge
[**postTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallenges**](TlsSubscriptionsOtherApi.md#postTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallenges) | **POST** /tls/subscriptions/{tls_subscription_id}/authorizations/{tls_authorization_id}/globalsign_email_challenges | Creates a GlobalSign email challenge.



## `deleteTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallengesGlobalsignEmailChallengeId`

```javascript
deleteTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallengesGlobalsignEmailChallengeId({ tls_subscription_id, globalsign_email_challenge_id, tls_authorization_id })
```

Deletes a GlobalSign email challenge. After a GlobalSign email challenge is deleted, the domain can use HTTP and DNS validation methods again.

### Example

```javascript
const options = {
  tls_subscription_id: "tls_subscription_id_example", // required
  globalsign_email_challenge_id: "globalsign_email_challenge_id_example", // required
  tls_authorization_id: "tls_authorization_id_example", // required
};

apiInstance.deleteTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallengesGlobalsignEmailChallengeId(options)
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
**globalsign_email_challenge_id** | **String** |  |
**tls_authorization_id** | **String** |  |

### Return type

null (empty response body)


## `postTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallenges`

```javascript
postTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallenges({ tls_subscription_id, tls_authorization_id, [body] })
```

Creates an email challenge for domain on a GlobalSign subscription. An email challenge will generate an email that can be used to validate domain ownership. If this challenge is created, then the domain can only be validated using email for the given subscription.

### Example

```javascript
const options = {
  tls_subscription_id: "tls_subscription_id_example", // required
  tls_authorization_id: "tls_authorization_id_example", // required
  body: null,
};

apiInstance.postTlsSubscriptionsTlsSubscriptionIdAuthorizationsTlsAuthorizationIdGlobalsignEmailChallenges(options)
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
**tls_authorization_id** | **String** |  |
**body** | **Object** |  | [optional]

### Return type

**Object**


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
