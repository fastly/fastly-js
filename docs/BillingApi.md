# FastlyApi.BillingApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInvoice**](BillingApi.md#getInvoice) | **GET** /billing/v2/year/{year}/month/{month} | Get an invoice
[**getInvoiceMtd**](BillingApi.md#getInvoiceMtd) | **GET** /billing/v2/account_customers/{customer_id}/mtd_invoice | Get month-to-date billing estimate



## getInvoice

> getInvoice(month, year)

Get an invoice

Get the invoice for a given year and month. Can be any month from when the Customer was created to the current month.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.BillingApi();
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

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getInvoiceMtd

> getInvoiceMtd(customer_id, opts)

Get month-to-date billing estimate

Get the current month-to-date estimate. This endpoint has two different responses. Under normal circumstances, it generally takes less than 5 seconds to generate but in certain cases can take up to 60 seconds. Once generated the month-to-date estimate is cached for 4 hours, and is available the next request will return the JSON representation of the month-to-date estimate. While a report is being generated in the background, this endpoint will return a &#x60;202 Accepted&#x60; response. The full format of which can be found in detail in our [billing calculation guide](https://docs.fastly.com/en/guides/how-we-calculate-your-bill). There are certain accounts for which we are unable to generate a month-to-date estimate. For example, accounts who have parent-pay are unable to generate an MTD estimate. The parent accounts are able to generate a month-to-date estimate but that estimate will not include the child accounts amounts at this time.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.BillingApi();
let customer_id = "customer_id_example"; // String | 
let opts = {
  'month': 05, // String | 2-digit month.
  'year': 2020 // String | 4-digit year.
};
apiInstance.getInvoiceMtd(customer_id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **String**|  | 
 **month** | **String**| 2-digit month. | [optional] 
 **year** | **String**| 4-digit year. | [optional] 

### Return type

null (empty response body)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

