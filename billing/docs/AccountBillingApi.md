# Billing.AccountBillingApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInvoice**](AccountBillingApi.md#getInvoice) | **GET** /billing/v2/year/{year}/month/{month} | Get an invoice
[**getInvoiceMtd**](AccountBillingApi.md#getInvoiceMtd) | **GET** /billing/v2/account_customers/{customer_id}/mtd_invoice | Get month-to-date billing estimate



## getInvoice

> getInvoice(month, year)

Get an invoice

Get the invoice for a given year and month. Can be any month from when the Customer was created to the current month.

### Example

```javascript
import Billing from 'billing';
let defaultClient = Billing.ApiClient.instance;
// Configure API key authorization: token_billing
let token_billing = defaultClient.authentications['token_billing'];
token_billing.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_billing.apiKeyPrefix = 'Token';

let apiInstance = new Billing.AccountBillingApi();
let month = 05; // String | 2-digit month.
let year = 2020; // String | 4-digit year.
apiInstance.getInvoice(month, year).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **month** | **String**| 2-digit month. | 
 **year** | **String**| 4-digit year. | 

### Return type

null (empty response body)

### Authorization

[token_billing](../README.md#token_billing)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getInvoiceMtd

> getInvoiceMtd(customerId, opts)

Get month-to-date billing estimate

Get the current month-to-date estimate. This endpoint has two different responses. Under normal circumstances, it generally takes less than 5 seconds to generate but in certain cases can take up to 60 seconds. Once generated the month-to-date estimate is cached for 4 hours, and is available the next request will return the JSON representation of the month-to-date estimate. While a report is being generated in the background, this endpoint will return a &#x60;202 Accepted&#x60; response. The full format of which can be found in detail in our [billing calculation guide](https://docs.fastly.com/en/guides/how-we-calculate-your-bill). There are certain accounts for which we are unable to generate a month-to-date estimate. For example, accounts who have parent-pay are unable to generate an MTD estimate. The parent accounts are able to generate a month-to-date estimate but that estimate will not include the child accounts amounts at this time.

### Example

```javascript
import Billing from 'billing';
let defaultClient = Billing.ApiClient.instance;
// Configure API key authorization: token_billing
let token_billing = defaultClient.authentications['token_billing'];
token_billing.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token_billing.apiKeyPrefix = 'Token';

let apiInstance = new Billing.AccountBillingApi();
let customerId = x4xCwxxJxGCx123Rx5xTx; // String | 
let opts = {
  'month': 05, // String | 2-digit month.
  'year': 2020 // String | 4-digit year.
};
apiInstance.getInvoiceMtd(customerId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**|  | 
 **month** | **String**| 2-digit month. | [optional] 
 **year** | **String**| 4-digit year. | [optional] 

### Return type

null (empty response body)

### Authorization

[token_billing](../README.md#token_billing)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

