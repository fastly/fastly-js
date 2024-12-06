# Fastly.BillingUsageMetricsApi

```javascript
const apiInstance = new Fastly.BillingUsageMetricsApi();
```
## Methods

> [!NOTE]
> All URIs are relative to `https://api.fastly.com`

Method | HTTP request | Description
------ | ------------ | -----------
[**getServiceLevelUsage**](BillingUsageMetricsApi.md#getServiceLevelUsage) | **GET** /billing/v3/service-usage-metrics | Retrieve service-level usage metrics for a product.
[**getUsageMetrics**](BillingUsageMetricsApi.md#getUsageMetrics) | **GET** /billing/v3/usage-metrics | Get monthly usage metrics


## `getServiceLevelUsage`

```javascript
getServiceLevelUsage({ product_id, usage_type_name, [start_month, ][end_month, ][limit, ][cursor] })
```

Returns product usage, broken down by service.

### Example

```javascript
const options = {
  product_id: "product_id_example", // required
  usage_type_name: "usage_type_name_example", // required
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
**product_id** | **String** | The product identifier for the metrics returned (e.g., `cdn_usage`). This field is not required for CSV requests. |
**usage_type_name** | **String** | The usage type name for the metrics returned (e.g., `North America Requests`). This field is not required for CSV requests. |
**start_month** | **String** |  | [optional]
**end_month** | **String** |  | [optional]
**limit** | **String** | Number of results per page. The maximum is 100. | [optional] [defaults to '5']
**cursor** | **String** | Cursor value from the `next_cursor` field of a previous response, used to retrieve the next page. To request the first page, this should be empty. | [optional]

### Return type

[**Serviceusagemetrics**](Serviceusagemetrics.md)


## `getUsageMetrics`

```javascript
getUsageMetrics({ , [start_month, ][end_month] })
```

Returns monthly usage metrics for customer by product.

### Example

```javascript
const options = {
  start_month: 2023-01,
  end_month: 2023-03,
};

apiInstance.getUsageMetrics(options)
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
**start_month** | **String** |  | [optional]
**end_month** | **String** |  | [optional]

### Return type

[**Usagemetric**](Usagemetric.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
