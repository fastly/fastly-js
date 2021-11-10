# Fastly.BillingApi


```javascript
const apiInstance = new Fastly.BillingApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**getInvoice**](BillingApi.md#getInvoice) | **GET** /billing/v2/year/{year}/month/{month} | Get an invoice
[**getInvoiceById**](BillingApi.md#getInvoiceById) | **GET** /billing/v2/account_customers/{customer_id}/invoices/{invoice_id} | Get an invoice
[**getInvoiceMtd**](BillingApi.md#getInvoiceMtd) | **GET** /billing/v2/account_customers/{customer_id}/mtd_invoice | Get month-to-date billing estimate



## `getInvoice`

```javascript
getInvoice({ month, year })
```

Get the invoice for a given year and month. Can be any month from when the Customer was created to the current month.

### Example

```javascript
const options = {
  month: 05, // required
  year: 2020, // required
};

apiInstance.getInvoice(options)
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
**month** | **String** | 2-digit month. |
**year** | **String** | 4-digit year. |

### Return type

[**BillingResponse**](BillingResponse.md)


## `getInvoiceById`

```javascript
getInvoiceById({ customer_id, invoice_id })
```

Get the invoice for the given invoice_id.

### Example

```javascript
const options = {
  customer_id: "customer_id_example", // required
  invoice_id: "invoice_id_example", // required
};

apiInstance.getInvoiceById(options)
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
**customer_id** | **String** |  |
**invoice_id** | **String** |  |

### Return type

null (empty response body)


## `getInvoiceMtd`

```javascript
getInvoiceMtd({ customer_id, [month, ][year] })
```

Get the current month-to-date estimate. This endpoint has two different responses. Under normal circumstances, it generally takes less than 5 seconds to generate but in certain cases can take up to 60 seconds. Once generated the month-to-date estimate is cached for 4 hours, and is available the next request will return the JSON representation of the month-to-date estimate. While a report is being generated in the background, this endpoint will return a `202 Accepted` response. The full format of which can be found in detail in our [billing calculation guide](https://docs.fastly.com/en/guides/how-we-calculate-your-bill). There are certain accounts for which we are unable to generate a month-to-date estimate. For example, accounts who have parent-pay are unable to generate an MTD estimate. The parent accounts are able to generate a month-to-date estimate but that estimate will not include the child accounts amounts at this time.

### Example

```javascript
const options = {
  customer_id: "customer_id_example", // required
  month: 05,
  year: 2020,
};

apiInstance.getInvoiceMtd(options)
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
**customer_id** | **String** |  |
**month** | **String** | 2-digit month. | [optional]
**year** | **String** | 4-digit year. | [optional]

### Return type

[**BillingEstimateResponse**](BillingEstimateResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
