# Fastly.DomainInspectorHistoricalApi

```javascript
const apiInstance = new Fastly.DomainInspectorHistoricalApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**getDomainInspectorHistorical**](DomainInspectorHistoricalApi.md#getDomainInspectorHistorical) | **GET** /metrics/domains/services/{service_id} | Get historical domain data for a service


## `getDomainInspectorHistorical`

```javascript
getDomainInspectorHistorical({ service_id, [start, ][end, ][downsample, ][metric, ][group_by, ][limit, ][cursor, ][region, ][datacenter, ][domain] })
```

Fetches historical domain metrics for a given Fastly service, optionally filtering and grouping the results by domain, region, or POP. 

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  start: 2021-08-01T00:00:00.000Z,
  end: 2020-08-02T00:00:00.000Z,
  downsample: "hour",
  metric: resp_body_bytes,status_2xx,
  group_by: "domain",
  limit: "'100'",
  cursor: "cursor_example",
  region: "usa",
  datacenter: SJC,STP,
  domain: domain_1.com,domain_2.com,
};

apiInstance.getDomainInspectorHistorical(options)
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
**service_id** | **String** | Alphanumeric string identifying the service. |
**start** | **String** | A valid ISO-8601-formatted date and time, or UNIX timestamp, indicating the inclusive start of the query time range. If not provided, a default is chosen based on the provided `downsample` value. | [optional]
**end** | **String** | A valid ISO-8601-formatted date and time, or UNIX timestamp, indicating the exclusive end of the query time range. If not provided, a default is chosen based on the provided `downsample` value. | [optional]
**downsample** | **String** | Duration of sample windows. | [optional] [one of: "hour", "minute", "day"]
**metric** | **String** | The metric to retrieve. Up to ten comma-separated metrics are accepted. | [optional] [defaults to 'edge_requests']
**group_by** | **String** | Dimensions to return in the query. Multiple dimensions may be separated by commas. For example, `group_by&#x3D;domain` will return one timeseries for every domain, as a total across all datacenters (POPs).  | [optional] [one of: "domain", "datacenter", "region", "none"]
**limit** | **String** | Number of results per page. The maximum is 200. | [optional] [defaults to '100']
**cursor** | **String** | Cursor value from a previous response to retrieve the next page. To request the first page, this should be empty. | [optional]
**region** | **String** | Limit query to one or more specific geographic regions. Values should be comma-separated.  | [optional] [one of: "usa", "europe", "asia", "asia_india", "asia_southkorea", "africa_std", "southamerica_std"]
**datacenter** | **String** | Limit query to one or more specific POPs. Values should be comma-separated. | [optional]
**domain** | **String** | Limit query to one or more specific domains. Values should be comma-separated. | [optional]

### Return type

[**HistoricalDomainsResponse**](HistoricalDomainsResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
