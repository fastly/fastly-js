# Fastly.HistoricalApi


```javascript
const apiInstance = new Fastly.HistoricalApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**getHistStats**](HistoricalApi.md#getHistStats) | **GET** /stats | Get historical stats
[**getHistStatsAggregated**](HistoricalApi.md#getHistStatsAggregated) | **GET** /stats/aggregate | Get aggregated historical stats
[**getHistStatsField**](HistoricalApi.md#getHistStatsField) | **GET** /stats/field/{field} | Get historical stats for a single field
[**getHistStatsService**](HistoricalApi.md#getHistStatsService) | **GET** /stats/service/{service_id} | Get historical stats for a single service
[**getHistStatsServiceField**](HistoricalApi.md#getHistStatsServiceField) | **GET** /stats/service/{service_id}/field/{field} | Get historical stats for a single service/field combination
[**getRegions**](HistoricalApi.md#getRegions) | **GET** /stats/regions | Get region codes
[**getUsage**](HistoricalApi.md#getUsage) | **GET** /stats/usage | Get usage statistics
[**getUsageMonth**](HistoricalApi.md#getUsageMonth) | **GET** /stats/usage_by_month | Get month-to-date usage statistics
[**getUsageService**](HistoricalApi.md#getUsageService) | **GET** /stats/usage_by_service | Get usage statistics per service



## `getHistStats`

```javascript
getHistStats({ , [from, ][to, ][by, ][region] })
```

Fetches historical stats for each of your Fastly services and groups the results by service ID.

### Example

```javascript
const options = {
  from: 2020-04-09T18:14:30Z,
  to: 2020-04-09T18:14:30Z,
  by: "hour",
  region: "usa",
};

apiInstance.getHistStats(options)
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
**from** | **String** | Absolute, relative or epoch timestamp. Limits the results returned. | [optional]
**to** | **String** | Absolute, relative or epoch timestamp. Limits the results returned. | [optional]
**by** | **String** | Duration of sample windows. One of:    * `hour` - Group data by hour.   * `minute` - Group data by minute.   * `day` - Group data by day.  | [optional] [one of: "hour", "minute", "day"] [defaults to 'day']
**region** | **String** | Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America.  | [optional] [one of: "usa", "europe", "asia", "asia_india", "asia_southkorea", "africa_std", "southamerica_std"]

### Return type

[**HistoricalResponse**](HistoricalResponse.md)


## `getHistStatsAggregated`

```javascript
getHistStatsAggregated({ , [from, ][to, ][by, ][region] })
```

Fetches historical stats information aggregated across all of your Fastly services.

### Example

```javascript
const options = {
  from: 2020-04-09T18:14:30Z,
  to: 2020-04-09T18:14:30Z,
  by: "hour",
  region: "usa",
};

apiInstance.getHistStatsAggregated(options)
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
**from** | **String** | Absolute, relative or epoch timestamp. Limits the results returned. | [optional]
**to** | **String** | Absolute, relative or epoch timestamp. Limits the results returned. | [optional]
**by** | **String** | Duration of sample windows. One of:    * `hour` - Group data by hour.   * `minute` - Group data by minute.   * `day` - Group data by day.  | [optional] [one of: "hour", "minute", "day"] [defaults to 'day']
**region** | **String** | Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America.  | [optional] [one of: "usa", "europe", "asia", "asia_india", "asia_southkorea", "africa_std", "southamerica_std"]

### Return type

[**HistoricalAggregateResponse**](HistoricalAggregateResponse.md)


## `getHistStatsField`

```javascript
getHistStatsField({ field, [from, ][to, ][by, ][region] })
```

Fetches the specified field from the historical stats for each of your services and groups the results by service ID.

### Example

```javascript
const options = {
  field: hit_ratio, // required
  from: 2020-04-09T18:14:30Z,
  to: 2020-04-09T18:14:30Z,
  by: "hour",
  region: "usa",
};

apiInstance.getHistStatsField(options)
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
**field** | **String** | Name of the stats field. |
**from** | **String** | Absolute, relative or epoch timestamp. Limits the results returned. | [optional]
**to** | **String** | Absolute, relative or epoch timestamp. Limits the results returned. | [optional]
**by** | **String** | Duration of sample windows. One of:    * `hour` - Group data by hour.   * `minute` - Group data by minute.   * `day` - Group data by day.  | [optional] [one of: "hour", "minute", "day"] [defaults to 'day']
**region** | **String** | Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America.  | [optional] [one of: "usa", "europe", "asia", "asia_india", "asia_southkorea", "africa_std", "southamerica_std"]

### Return type

[**HistoricalFieldResponse**](HistoricalFieldResponse.md)


## `getHistStatsService`

```javascript
getHistStatsService({ service_id, [from, ][to, ][by, ][region] })
```

Fetches historical stats for a given service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  from: 2020-04-09T18:14:30Z,
  to: 2020-04-09T18:14:30Z,
  by: "hour",
  region: "usa",
};

apiInstance.getHistStatsService(options)
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
**service_id** | **String** |  |
**from** | **String** | Absolute, relative or epoch timestamp. Limits the results returned. | [optional]
**to** | **String** | Absolute, relative or epoch timestamp. Limits the results returned. | [optional]
**by** | **String** | Duration of sample windows. One of:    * `hour` - Group data by hour.   * `minute` - Group data by minute.   * `day` - Group data by day.  | [optional] [one of: "hour", "minute", "day"] [defaults to 'day']
**region** | **String** | Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America.  | [optional] [one of: "usa", "europe", "asia", "asia_india", "asia_southkorea", "africa_std", "southamerica_std"]

### Return type

[**HistoricalAggregateResponse**](HistoricalAggregateResponse.md)


## `getHistStatsServiceField`

```javascript
getHistStatsServiceField({ service_id, field, [from, ][to, ][by, ][region] })
```

Fetches the specified field from the historical stats for a given service.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  field: hit_ratio, // required
  from: 2020-04-09T18:14:30Z,
  to: 2020-04-09T18:14:30Z,
  by: "hour",
  region: "usa",
};

apiInstance.getHistStatsServiceField(options)
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
**service_id** | **String** |  |
**field** | **String** | Name of the stats field. |
**from** | **String** | Absolute, relative or epoch timestamp. Limits the results returned. | [optional]
**to** | **String** | Absolute, relative or epoch timestamp. Limits the results returned. | [optional]
**by** | **String** | Duration of sample windows. One of:    * `hour` - Group data by hour.   * `minute` - Group data by minute.   * `day` - Group data by day.  | [optional] [one of: "hour", "minute", "day"] [defaults to 'day']
**region** | **String** | Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America.  | [optional] [one of: "usa", "europe", "asia", "asia_india", "asia_southkorea", "africa_std", "southamerica_std"]

### Return type

[**HistoricalFieldAggregateResponse**](HistoricalFieldAggregateResponse.md)


## `getRegions`

```javascript
getRegions()
```

Fetches the list of codes for regions that are covered by the Fastly CDN service.

### Example

```javascript
apiInstance.getRegions()
  .then((data) => {
    console.log(data, "API called successfully.");
  })
  .catch((error) => {
    console.error(error);
  });
```

### Options

This endpoint does not need any parameters.

### Return type

[**HistoricalRegionsResponse**](HistoricalRegionsResponse.md)


## `getUsage`

```javascript
getUsage({ , [from, ][to, ][by, ][region] })
```

Returns usage information aggregated across all Fastly services and grouped by region.

### Example

```javascript
const options = {
  from: 2020-04-09T18:14:30Z,
  to: 2020-04-09T18:14:30Z,
  by: "hour",
  region: "usa",
};

apiInstance.getUsage(options)
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
**from** | **String** | Absolute, relative or epoch timestamp. Limits the results returned. | [optional]
**to** | **String** | Absolute, relative or epoch timestamp. Limits the results returned. | [optional]
**by** | **String** | Duration of sample windows. One of:    * `hour` - Group data by hour.   * `minute` - Group data by minute.   * `day` - Group data by day.  | [optional] [one of: "hour", "minute", "day"] [defaults to 'day']
**region** | **String** | Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America.  | [optional] [one of: "usa", "europe", "asia", "asia_india", "asia_southkorea", "africa_std", "southamerica_std"]

### Return type

[**HistoricalUsageAggregateResponse**](HistoricalUsageAggregateResponse.md)


## `getUsageMonth`

```javascript
getUsageMonth({ , [year, ][month, ][billable_units, ][region] })
```

Returns month-to-date usage details for a given month and year. Usage details are aggregated by service and across all Fastly services, and then grouped by region. This endpoint does not use the `from` or `to` fields for selecting the date for which data is requested. Instead, it uses `month` and `year` integer fields. Both fields are optional and default to the current month and year respectively. When set, an optional `billable_units` field will convert bandwidth to GB and divide requests by 10,000.

### Example

```javascript
const options = {
  year: 2020,
  month: 05,
  billable_units: true,
  region: "usa",
};

apiInstance.getUsageMonth(options)
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
**year** | **String** | 4-digit year. | [optional]
**month** | **String** | 2-digit month. | [optional]
**billable_units** | **Boolean** | If `true`, return results as billable units. | [optional]
**region** | **String** | Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America.  | [optional] [one of: "usa", "europe", "asia", "asia_india", "asia_southkorea", "africa_std", "southamerica_std"]

### Return type

[**HistoricalUsageMonthResponse**](HistoricalUsageMonthResponse.md)


## `getUsageService`

```javascript
getUsageService({ , [from, ][to, ][by, ][region] })
```

Returns usage information aggregated by service and grouped by service and region.

### Example

```javascript
const options = {
  from: 2020-04-09T18:14:30Z,
  to: 2020-04-09T18:14:30Z,
  by: "hour",
  region: "usa",
};

apiInstance.getUsageService(options)
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
**from** | **String** | Absolute, relative or epoch timestamp. Limits the results returned. | [optional]
**to** | **String** | Absolute, relative or epoch timestamp. Limits the results returned. | [optional]
**by** | **String** | Duration of sample windows. One of:    * `hour` - Group data by hour.   * `minute` - Group data by minute.   * `day` - Group data by day.  | [optional] [one of: "hour", "minute", "day"] [defaults to 'day']
**region** | **String** | Limit query to a specific geographic region. One of:    * `usa` - North America.   * `europe` - Europe.   * `anzac` - Australia and New Zealand.   * `asia` - Asia.   * `asia_india` - India.   * `asia_southkorea` - South Korea ([from Aug 2, 2021](https://status.fastly.com/incidents/f83m70cqm258))   * `africa_std` - Africa.   * `southamerica_std` - South America.  | [optional] [one of: "usa", "europe", "asia", "asia_india", "asia_southkorea", "africa_std", "southamerica_std"]

### Return type

[**HistoricalUsageServiceResponse**](HistoricalUsageServiceResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
