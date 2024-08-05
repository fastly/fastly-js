# Fastly.BillingUsageMetricsApi

```javascript
const apiInstance = new Fastly.BillingUsageMetricsApi();
```
## Methods

> [!NOTE]
> All URIs are relative to `https://api.fastly.com`

Method | HTTP request | Description
------ | ------------ | -----------
[**getServiceLevelUsage**](BillingUsageMetricsApi.md#getServiceLevelUsage) | **GET** /billing/v2/account_customers/{customer_id}/service-usage-metrics | Retrieve service-level usage metrics for a product.
[**getServiceLevelUsageTypes**](BillingUsageMetricsApi.md#getServiceLevelUsageTypes) | **GET** /billing/v2/account_customers/{customer_id}/service-usage-types | Retrieve product usage types for a customer.


## `getServiceLevelUsage`

```javascript
getServiceLevelUsage({ customer_id, product_id, usage_type_name, time_granularity, [start_date, ][end_date, ][start_month, ][end_month, ][limit, ][cursor] })
```

Returns product usage, broken down by service.

### Example

```javascript
const options = {
  customer_id: "customer_id_example", // required
  product_id: "product_id_example", // required
  usage_type_name: "usage_type_name_example", // required
  time_granularity: "time_granularity_example", // required
  start_date: 2023-01-01,
  end_date: 2023-01-31,
  start_month: 2023-01,
  end_month: 2023-03,
  limit: "'5'",
  cursor: "cursor_example",
};

apiInstance.getServiceLevelUsage(options)
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
**customer_id** | **String** | Alphanumeric string identifying the customer. |
**product_id** | **String** | The product identifier for the metrics returned (e.g., `cdn_usage`). This field is not required for CSV requests. |
**usage_type_name** | **String** | The usage type name for the metrics returned (e.g., `North America Requests`). This field is not required for CSV requests. |
**time_granularity** | **String** |  |
**start_date** | **String** |  | [optional]
**end_date** | **String** |  | [optional]
**start_month** | **String** |  | [optional]
**end_month** | **String** |  | [optional]
**limit** | **String** | Number of results per page. The maximum is 100. | [optional] [defaults to '5']
**cursor** | **String** | Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty. | [optional]

### Return type

[**Serviceusagemetrics**](Serviceusagemetrics.md)


## `getServiceLevelUsageTypes`

```javascript
getServiceLevelUsageTypes({ customer_id })
```

Returns product usage types reported by the customer's services.

### Example

```javascript
const options = {
  customer_id: "customer_id_example", // required
};

apiInstance.getServiceLevelUsageTypes(options)
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
**customer_id** | **String** | Alphanumeric string identifying the customer. |

### Return type

[**Serviceusagetypes**](Serviceusagetypes.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
