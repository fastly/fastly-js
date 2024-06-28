# Fastly.BillingInvoicesApi

```javascript
const apiInstance = new Fastly.BillingInvoicesApi();
```
## Methods

> [!NOTE]
> All URIs are relative to `https://api.fastly.com`

Method | HTTP request | Description
------ | ------------ | -----------
[**getInvoiceByInvoiceId**](BillingInvoicesApi.md#getInvoiceByInvoiceId) | **GET** /billing/v3/invoices/{invoice_id} | Get invoice by ID.
[**listInvoices**](BillingInvoicesApi.md#listInvoices) | **GET** /billing/v3/invoices | List of invoices.


## `getInvoiceByInvoiceId`

```javascript
getInvoiceByInvoiceId({ invoice_id })
```

Returns invoice associated with the invoice id.

### Example

```javascript
const options = {
  invoice_id: "invoice_id_example", // required
};

apiInstance.getInvoiceByInvoiceId(options)
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
**invoice_id** | **String** | Alphanumeric string identifying the invoice. |

### Return type

[**InvoiceResponse**](InvoiceResponse.md)


## `listInvoices`

```javascript
listInvoices({ , [billing_start_date, ][billing_end_date, ][limit, ][cursor] })
```

Returns the list of invoices, sorted by billing start date (newest to oldest).

### Example

```javascript
const options = {
  billing_start_date: 2023-01-01,
  billing_end_date: 2023-01-31,
  limit: "'100'",
  cursor: "cursor_example",
};

apiInstance.listInvoices(options)
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
**billing_start_date** | **String** |  | [optional]
**billing_end_date** | **String** |  | [optional]
**limit** | **String** | Number of results per page. The maximum is 200. | [optional] [defaults to '100']
**cursor** | **String** | Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty. | [optional]

### Return type

[**ListInvoicesResponse**](ListInvoicesResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
