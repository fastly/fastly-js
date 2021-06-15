# FastlyApi.LoggingBigqueryApi

All URIs are relative to *https://api.fastly.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogBigquery**](LoggingBigqueryApi.md#createLogBigquery) | **POST** /service/{service_id}/version/{version_id}/logging/bigquery | Create a BigQuery log endpoint
[**deleteLogBigquery**](LoggingBigqueryApi.md#deleteLogBigquery) | **DELETE** /service/{service_id}/version/{version_id}/logging/bigquery/{logging_bigquery_name} | Delete a BigQuery log endpoint
[**getLogBigquery**](LoggingBigqueryApi.md#getLogBigquery) | **GET** /service/{service_id}/version/{version_id}/logging/bigquery/{logging_bigquery_name} | Get a BigQuery log endpoint
[**listLogBigquery**](LoggingBigqueryApi.md#listLogBigquery) | **GET** /service/{service_id}/version/{version_id}/logging/bigquery | List BigQuery log endpoints
[**updateLogBigquery**](LoggingBigqueryApi.md#updateLogBigquery) | **PUT** /service/{service_id}/version/{version_id}/logging/bigquery/{logging_bigquery_name} | Update a BigQuery log endpoint



## createLogBigquery

> ModelLoggingBigquery createLogBigquery(service_id, version_id, opts)

Create a BigQuery log endpoint

Create a BigQuery logging object for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingBigqueryApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let opts = {
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'name': "name_example", // String | The name of the BigQuery logging object. Used as a primary key for API access.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "format_example", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table.
  'user': "user_example", // String | Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
  'secret_key': "secret_key_example", // String | Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
  'dataset': "dataset_example", // String | Your BigQuery dataset.
  'table': "table_example", // String | Your BigQuery table.
  'template_suffix': "template_suffix_example", // String | BigQuery table name suffix template. Optional.
  'project_id': "project_id_example" // String | Your Google Cloud Platform project ID. Required
};
apiInstance.createLogBigquery(service_id, version_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **name** | **String**| The name of the BigQuery logging object. Used as a primary key for API access. | [optional] 
 **placement** | [**LoggingPlacement**](LoggingPlacement.md)|  | [optional] 
 **format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md)|  | [optional] 
 **response_condition** | **String**| The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
 **format** | **String**| A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table. | [optional] 
 **user** | **String**| Your Google Cloud Platform service account email address. The &#x60;client_email&#x60; field in your service account authentication JSON. Required. | [optional] 
 **secret_key** | **String**| Your Google Cloud Platform account secret key. The &#x60;private_key&#x60; field in your service account authentication JSON. Required. | [optional] 
 **dataset** | **String**| Your BigQuery dataset. | [optional] 
 **table** | **String**| Your BigQuery table. | [optional] 
 **template_suffix** | **String**| BigQuery table name suffix template. Optional. | [optional] 
 **project_id** | **String**| Your Google Cloud Platform project ID. Required | [optional] 

### Return type

[**ModelLoggingBigquery**](ModelLoggingBigquery.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## deleteLogBigquery

> Object deleteLogBigquery(service_id, version_id, logging_bigquery_name)

Delete a BigQuery log endpoint

Delete a BigQuery logging object for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingBigqueryApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_bigquery_name = "logging_bigquery_name_example"; // String | 
apiInstance.deleteLogBigquery(service_id, version_id, logging_bigquery_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **logging_bigquery_name** | **String**|  | 

### Return type

**Object**

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLogBigquery

> ModelLoggingBigquery getLogBigquery(service_id, version_id, logging_bigquery_name)

Get a BigQuery log endpoint

Get the details for a BigQuery logging object for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingBigqueryApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_bigquery_name = "logging_bigquery_name_example"; // String | 
apiInstance.getLogBigquery(service_id, version_id, logging_bigquery_name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **logging_bigquery_name** | **String**|  | 

### Return type

[**ModelLoggingBigquery**](ModelLoggingBigquery.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listLogBigquery

> [ModelLoggingBigquery] listLogBigquery(service_id, version_id)

List BigQuery log endpoints

List all of the BigQuery logging objects for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingBigqueryApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
apiInstance.listLogBigquery(service_id, version_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 

### Return type

[**[ModelLoggingBigquery]**](ModelLoggingBigquery.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateLogBigquery

> ModelLoggingBigquery updateLogBigquery(service_id, version_id, logging_bigquery_name, opts)

Update a BigQuery log endpoint

Update a BigQuery logging object for a particular service and version.

### Example

```javascript
import FastlyApi from 'fastly_api';
let defaultClient = FastlyApi.ApiClient.instance;
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new FastlyApi.LoggingBigqueryApi();
let service_id = "service_id_example"; // String | 
let version_id = 56; // Number | 
let logging_bigquery_name = "logging_bigquery_name_example"; // String | 
let opts = {
  'created_at': "created_at_example", // String | Date and time in ISO 8601 format.
  'deleted_at': "deleted_at_example", // String | Date and time in ISO 8601 format.
  'updated_at': "updated_at_example", // String | Date and time in ISO 8601 format.
  'service_id2': "service_id_example", // String | Alphanumeric string identifying the service.
  'version': 56, // Number | Integer identifying a service version.
  'name': "name_example", // String | The name of the BigQuery logging object. Used as a primary key for API access.
  'placement': new FastlyApi.LoggingPlacement(), // LoggingPlacement | 
  'format_version': new FastlyApi.LoggingFormatVersion(), // LoggingFormatVersion | 
  'response_condition': "response_condition_example", // String | The name of an existing condition in the configured endpoint, or leave blank to always execute.
  'format': "format_example", // String | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table.
  'user': "user_example", // String | Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
  'secret_key': "secret_key_example", // String | Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
  'dataset': "dataset_example", // String | Your BigQuery dataset.
  'table': "table_example", // String | Your BigQuery table.
  'template_suffix': "template_suffix_example", // String | BigQuery table name suffix template. Optional.
  'project_id': "project_id_example" // String | Your Google Cloud Platform project ID. Required
};
apiInstance.updateLogBigquery(service_id, version_id, logging_bigquery_name, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **String**|  | 
 **version_id** | **Number**|  | 
 **logging_bigquery_name** | **String**|  | 
 **created_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **deleted_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **updated_at** | **String**| Date and time in ISO 8601 format. | [optional] 
 **service_id2** | **String**| Alphanumeric string identifying the service. | [optional] 
 **version** | **Number**| Integer identifying a service version. | [optional] 
 **name** | **String**| The name of the BigQuery logging object. Used as a primary key for API access. | [optional] 
 **placement** | [**LoggingPlacement**](LoggingPlacement.md)|  | [optional] 
 **format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md)|  | [optional] 
 **response_condition** | **String**| The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
 **format** | **String**| A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table. | [optional] 
 **user** | **String**| Your Google Cloud Platform service account email address. The &#x60;client_email&#x60; field in your service account authentication JSON. Required. | [optional] 
 **secret_key** | **String**| Your Google Cloud Platform account secret key. The &#x60;private_key&#x60; field in your service account authentication JSON. Required. | [optional] 
 **dataset** | **String**| Your BigQuery dataset. | [optional] 
 **table** | **String**| Your BigQuery table. | [optional] 
 **template_suffix** | **String**| BigQuery table name suffix template. Optional. | [optional] 
 **project_id** | **String**| Your Google Cloud Platform project ID. Required | [optional] 

### Return type

[**ModelLoggingBigquery**](ModelLoggingBigquery.md)

### Authorization

[token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

