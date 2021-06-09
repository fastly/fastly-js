# BillingAddress.AccountBillingAddressApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBillingAddr**](AccountBillingAddressApi.md#addBillingAddr) | **POST** /customer/{customer_id}/billing_address | Add a billing address to a customer
[**deleteBillingAddr**](AccountBillingAddressApi.md#deleteBillingAddr) | **DELETE** /customer/{customer_id}/billing_address | Delete a billing address
[**getBillingAddr**](AccountBillingAddressApi.md#getBillingAddr) | **GET** /customer/{customer_id}/billing_address | Get a billing address
[**updateBillingAddr**](AccountBillingAddressApi.md#updateBillingAddr) | **PATCH** /customer/{customer_id}/billing_address | Update a billing address



## addBillingAddr

> InlineResponse200 addBillingAddr(customerId, opts)

Add a billing address to a customer

Add a billing address to a customer.

### Example

```javascript
import BillingAddress from 'billing_address';
let defaultClient = BillingAddress.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new BillingAddress.AccountBillingAddressApi();
let customerId = x4xCwxxJxGCx123Rx5xTx; // String | 
let opts = {
  'inlineObject': new BillingAddress.InlineObject() // InlineObject | 
};
apiInstance.addBillingAddr(customerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## deleteBillingAddr

> deleteBillingAddr(customerId)

Delete a billing address

Delete a customer&#39;s billing address.

### Example

```javascript
import BillingAddress from 'billing_address';
let defaultClient = BillingAddress.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new BillingAddress.AccountBillingAddressApi();
let customerId = x4xCwxxJxGCx123Rx5xTx; // String | 
apiInstance.deleteBillingAddr(customerId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getBillingAddr

> InlineResponse200 getBillingAddr(customerId)

Get a billing address

Get a customer&#39;s billing address.

### Example

```javascript
import BillingAddress from 'billing_address';
let defaultClient = BillingAddress.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new BillingAddress.AccountBillingAddressApi();
let customerId = x4xCwxxJxGCx123Rx5xTx; // String | 
apiInstance.getBillingAddr(customerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## updateBillingAddr

> InlineResponse200 updateBillingAddr(customerId, opts)

Update a billing address

Update a customer&#39;s billing address. You may update only part of the customer&#39;s billing address.

### Example

```javascript
import BillingAddress from 'billing_address';
let defaultClient = BillingAddress.ApiClient.instance;
// Configure API key authorization: session_or_token
let session_or_token = defaultClient.authentications['session_or_token'];
session_or_token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//session_or_token.apiKeyPrefix = 'Token';

let apiInstance = new BillingAddress.AccountBillingAddressApi();
let customerId = x4xCwxxJxGCx123Rx5xTx; // String | 
let opts = {
  'inlineObject1': new BillingAddress.InlineObject1() // InlineObject1 | 
};
apiInstance.updateBillingAddr(customerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[session_or_token](../README.md#session_or_token)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

