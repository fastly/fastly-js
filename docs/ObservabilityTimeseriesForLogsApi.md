# Fastly.ObservabilityTimeseriesForLogsApi

```javascript
const apiInstance = new Fastly.ObservabilityTimeseriesForLogsApi();
```
## Methods

> [!NOTE]
> All URIs are relative to `https://api.fastly.com`

Method | HTTP request | Description
------ | ------------ | -----------
[**logTimeseriesGet**](ObservabilityTimeseriesForLogsApi.md#logTimeseriesGet) | **GET** /observability/timeseries | Retrieve log data as time series


## `logTimeseriesGet`

```javascript
logTimeseriesGet({ source, service_id, start, end, granularity, series, [filter] })
```

Retrieves log data as time series.

### Example

```javascript
const options = {
  source: "source_example", // required
  service_id: "service_id_example", // required
  start: "start_example", // required
  end: "end_example", // required
  granularity: "granularity_example", // required
  series: "series_example", // required
  filter: "filter_example",
};

apiInstance.logTimeseriesGet(options)
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
**source** | **String** |  |
**service_id** | **String** |  |
**start** | **String** |  |
**end** | **String** |  |
**granularity** | **String** |  | [one of: "second", "minute", "hour", "day"]
**series** | **String** |  |
**filter** | **String** |  | [optional]

### Return type

[**LogTimeseriesGetResponse**](LogTimeseriesGetResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
