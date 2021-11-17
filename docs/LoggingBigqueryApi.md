# Fastly.LoggingBigqueryApi


```javascript
const apiInstance = new Fastly.LoggingBigqueryApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogBigquery**](LoggingBigqueryApi.md#createLogBigquery) | **POST** /service/{service_id}/version/{version_id}/logging/bigquery | Create a BigQuery log endpoint
[**deleteLogBigquery**](LoggingBigqueryApi.md#deleteLogBigquery) | **DELETE** /service/{service_id}/version/{version_id}/logging/bigquery/{logging_bigquery_name} | Delete a BigQuery log endpoint
[**getLogBigquery**](LoggingBigqueryApi.md#getLogBigquery) | **GET** /service/{service_id}/version/{version_id}/logging/bigquery/{logging_bigquery_name} | Get a BigQuery log endpoint
[**listLogBigquery**](LoggingBigqueryApi.md#listLogBigquery) | **GET** /service/{service_id}/version/{version_id}/logging/bigquery | List BigQuery log endpoints
[**updateLogBigquery**](LoggingBigqueryApi.md#updateLogBigquery) | **PUT** /service/{service_id}/version/{version_id}/logging/bigquery/{logging_bigquery_name} | Update a BigQuery log endpoint



## `createLogBigquery`

```javascript
createLogBigquery({ service_id, version_id, [name, ][placement, ][format_version, ][response_condition, ][format, ][user, ][secret_key, ][dataset, ][table, ][template_suffix, ][project_id] })
```

Create a BigQuery logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  name: "name_example",
  placement: "none",
  format_version: 1,
  response_condition: "response_condition_example",
  format: "format_example",
  user: "user_example",
  secret_key: "secret_key_example",
  dataset: "dataset_example",
  table: "table_example",
  template_suffix: "template_suffix_example",
  project_id: "project_id_example",
};

apiInstance.createLogBigquery(options)
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
**version_id** | **Number** |  |
**name** | **String** | The name of the BigQuery logging object. Used as a primary key for API access. | [optional]
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.  | [optional] [one of: "none", "waf_debug"]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.   | [optional] [one of: 1, 2]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table. | [optional]
**user** | **String** | Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required. | [optional]
**secret_key** | **String** | Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required. | [optional]
**dataset** | **String** | Your BigQuery dataset. | [optional]
**table** | **String** | Your BigQuery table. | [optional]
**template_suffix** | **String** | BigQuery table name suffix template. Optional. | [optional]
**project_id** | **String** | Your Google Cloud Platform project ID. Required | [optional]

### Return type

[**LoggingBigqueryResponse**](LoggingBigqueryResponse.md)


## `deleteLogBigquery`

```javascript
deleteLogBigquery({ service_id, version_id, logging_bigquery_name })
```

Delete a BigQuery logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_bigquery_name: "logging_bigquery_name_example", // required
};

apiInstance.deleteLogBigquery(options)
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
**version_id** | **Number** |  |
**logging_bigquery_name** | **String** |  |

### Return type

**Object**


## `getLogBigquery`

```javascript
getLogBigquery({ service_id, version_id, logging_bigquery_name })
```

Get the details for a BigQuery logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_bigquery_name: "logging_bigquery_name_example", // required
};

apiInstance.getLogBigquery(options)
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
**version_id** | **Number** |  |
**logging_bigquery_name** | **String** |  |

### Return type

[**LoggingBigqueryResponse**](LoggingBigqueryResponse.md)


## `listLogBigquery`

```javascript
listLogBigquery({ service_id, version_id })
```

List all of the BigQuery logging objects for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
};

apiInstance.listLogBigquery(options)
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
**version_id** | **Number** |  |

### Return type

[**[LoggingBigqueryResponse]**](LoggingBigqueryResponse.md)


## `updateLogBigquery`

```javascript
updateLogBigquery({ service_id, version_id, logging_bigquery_name, [name, ][placement, ][format_version, ][response_condition, ][format, ][user, ][secret_key, ][dataset, ][table, ][template_suffix, ][project_id] })
```

Update a BigQuery logging object for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required
  version_id: 56, // required
  logging_bigquery_name: "logging_bigquery_name_example", // required
  name: "name_example",
  placement: "none",
  format_version: 1,
  response_condition: "response_condition_example",
  format: "format_example",
  user: "user_example",
  secret_key: "secret_key_example",
  dataset: "dataset_example",
  table: "table_example",
  template_suffix: "template_suffix_example",
  project_id: "project_id_example",
};

apiInstance.updateLogBigquery(options)
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
**version_id** | **Number** |  |
**logging_bigquery_name** | **String** |  |
**name** | **String** | The name of the BigQuery logging object. Used as a primary key for API access. | [optional]
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.  | [optional] [one of: "none", "waf_debug"]
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.   | [optional] [one of: 1, 2]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table. | [optional]
**user** | **String** | Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required. | [optional]
**secret_key** | **String** | Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required. | [optional]
**dataset** | **String** | Your BigQuery dataset. | [optional]
**table** | **String** | Your BigQuery table. | [optional]
**template_suffix** | **String** | BigQuery table name suffix template. Optional. | [optional]
**project_id** | **String** | Your Google Cloud Platform project ID. Required | [optional]

### Return type

[**LoggingBigqueryResponse**](LoggingBigqueryResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
