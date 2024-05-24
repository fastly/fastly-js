# Fastly.LegacyWafUpdateStatusApi

```javascript
const apiInstance = new Fastly.LegacyWafUpdateStatusApi();
```
## Methods

> [!NOTE]
> All URIs are relative to `https://api.fastly.com`

Method | HTTP request | Description
------ | ------------ | -----------
[**getWafUpdateStatus**](LegacyWafUpdateStatusApi.md#getWafUpdateStatus) | **GET** /service/{service_id}/wafs/{firewall_id}/update_statuses/{update_status_id} | Get the status of a WAF update
[**listWafUpdateStatuses**](LegacyWafUpdateStatusApi.md#listWafUpdateStatuses) | **GET** /service/{service_id}/wafs/{firewall_id}/update_statuses | List update statuses


## `getWafUpdateStatus`

```javascript
getWafUpdateStatus({ service_id, firewall_id, update_status_id })
```

Get a specific update status object for a particular service and firewall object.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  firewall_id: "firewall_id_example", // required
  update_status_id: "update_status_id_example", // required
};

apiInstance.getWafUpdateStatus(options)
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
**firewall_id** | **String** | Alphanumeric string identifying a Firewall. |
**update_status_id** | **String** | Alphanumeric string identifying a WAF update status. |

### Return type

**Object**


## `listWafUpdateStatuses`

```javascript
listWafUpdateStatuses({ service_id, firewall_id, [page_number, ][page_size, ][include] })
```

List all update statuses for a particular service and firewall object.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  firewall_id: "firewall_id_example", // required
  page_number: 1,
  page_size: 20,
  include: waf,
};

apiInstance.listWafUpdateStatuses(options)
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
**firewall_id** | **String** | Alphanumeric string identifying a Firewall. |
**page_number** | **Number** | Current page. | [optional]
**page_size** | **Number** | Number of records per page. | [optional] [defaults to 20]
**include** | **String** | Include relationships. Optional, comma separated values. Permitted values: `waf`.  | [optional]

### Return type

**Object**


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
