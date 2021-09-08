# Fastly.LoggingElasticsearchApi


```javascript
const apiInstance = new Fastly.LoggingElasticsearchApi();
```
## Methods

Method | Fastly API endpoint | Description
------------- | ------------- | -------------
[**createLogElasticsearch**](LoggingElasticsearchApi.md#createLogElasticsearch) | **POST** /service/{service_id}/version/{version_id}/logging/elasticsearch | Create an Elasticsearch log endpoint
[**deleteLogElasticsearch**](LoggingElasticsearchApi.md#deleteLogElasticsearch) | **DELETE** /service/{service_id}/version/{version_id}/logging/elasticsearch/{logging_elasticsearch_name} | Delete an Elasticsearch log endpoint
[**getLogElasticsearch**](LoggingElasticsearchApi.md#getLogElasticsearch) | **GET** /service/{service_id}/version/{version_id}/logging/elasticsearch/{logging_elasticsearch_name} | Get an Elasticsearch log endpoint
[**listLogElasticsearch**](LoggingElasticsearchApi.md#listLogElasticsearch) | **GET** /service/{service_id}/version/{version_id}/logging/elasticsearch | List Elasticsearch log endpoints
[**updateLogElasticsearch**](LoggingElasticsearchApi.md#updateLogElasticsearch) | **PUT** /service/{service_id}/version/{version_id}/logging/elasticsearch/{logging_elasticsearch_name} | Update an Elasticsearch log endpoint



## `createLogElasticsearch`

```javascript
createLogElasticsearch({ service_id, version_id, [format], , [format_version], , [name], , [placement], , [response_condition], , [tls_ca_cert], , [tls_client_cert], , [tls_client_key], , [tls_hostname], , [request_max_bytes], , [request_max_entries], , [index], , [password], , [pipeline], , [url], , [user] })
```

Create a Elasticsearch logging endpoint for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required
  format: null,

  format_version: new Fastly.LoggingFormatVersion(),

  name: "name_example",

  placement: new Fastly.LoggingPlacement(),

  response_condition: "response_condition_example",

  tls_ca_cert: "'null'",

  tls_client_cert: "'null'",

  tls_client_key: "'null'",

  tls_hostname: "'null'",

  request_max_bytes: 0,

  request_max_entries: 0,

  index: "index_example",

  password: "password_example",

  pipeline: "pipeline_example",

  url: "url_example",

  user: "user_example",
};

apiInstance.createLogElasticsearch(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
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
**format** | [**Object**](../Model/Object.md) | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Elasticsearch can ingest. | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**tls_ca_cert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_cert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_key** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_hostname** | **String** | The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
**request_max_bytes** | **Number** | The maximum number of bytes sent in one request. Defaults &#x60;0&#x60; for unbounded. | [optional] [default to 0]
**request_max_entries** | **Number** | The maximum number of logs sent in one request. Defaults &#x60;0&#x60; for unbounded. | [optional] [default to 0]
**index** | **String** | The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch [index format rules](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support [strftime](https://www.man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, &#x60;#{%F}&#x60; will interpolate as &#x60;YYYY-MM-DD&#x60; with today&#39;s date. | [optional]
**password** | **String** | Basic Auth password. | [optional]
**pipeline** | **String** | The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. Learn more about creating a pipeline in the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html). | [optional]
**url** | **String** | The URL to stream logs to. Must use HTTPS. | [optional]
**user** | **String** | Basic Auth username. | [optional]

### Return type

[**LoggingElasticsearchResponse**](LoggingElasticsearchResponse.md)


## `deleteLogElasticsearch`

```javascript
deleteLogElasticsearch({ service_id, version_id, logging_elasticsearch_name })
```

Delete the Elasticsearch logging endpoint for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required  logging_elasticsearch_name: "logging_elasticsearch_name_example", // required};

apiInstance.deleteLogElasticsearch(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
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
**logging_elasticsearch_name** | **String** |  |

### Return type

**Object**


## `getLogElasticsearch`

```javascript
getLogElasticsearch({ service_id, version_id, logging_elasticsearch_name })
```

Get the Elasticsearch logging endpoint for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required  logging_elasticsearch_name: "logging_elasticsearch_name_example", // required};

apiInstance.getLogElasticsearch(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
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
**logging_elasticsearch_name** | **String** |  |

### Return type

[**LoggingElasticsearchResponse**](LoggingElasticsearchResponse.md)


## `listLogElasticsearch`

```javascript
listLogElasticsearch({ service_id, version_id })
```

List all of the Elasticsearch logging endpoints for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required};

apiInstance.listLogElasticsearch(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
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

[**[LoggingElasticsearchResponse]**](LoggingElasticsearchResponse.md)


## `updateLogElasticsearch`

```javascript
updateLogElasticsearch({ service_id, version_id, logging_elasticsearch_name, [format], , [format_version], , [name], , [placement], , [response_condition], , [tls_ca_cert], , [tls_client_cert], , [tls_client_key], , [tls_hostname], , [request_max_bytes], , [request_max_entries], , [index], , [password], , [pipeline], , [url], , [user] })
```

Update the Elasticsearch logging endpoint for a particular service and version.

### Example

```javascript
const options = {
  service_id: "service_id_example", // required  version_id: 56, // required  logging_elasticsearch_name: "logging_elasticsearch_name_example", // required
  format: null,

  format_version: new Fastly.LoggingFormatVersion(),

  name: "name_example",

  placement: new Fastly.LoggingPlacement(),

  response_condition: "response_condition_example",

  tls_ca_cert: "'null'",

  tls_client_cert: "'null'",

  tls_client_key: "'null'",

  tls_hostname: "'null'",

  request_max_bytes: 0,

  request_max_entries: 0,

  index: "index_example",

  password: "password_example",

  pipeline: "pipeline_example",

  url: "url_example",

  user: "user_example",
};

apiInstance.updateLogElasticsearch(options)
  .then((data) => {
    console.log(data, 'API called successfully.');
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
**logging_elasticsearch_name** | **String** |  |
**format** | [**Object**](../Model/Object.md) | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Elasticsearch can ingest. | [optional]
**format_version** | [**LoggingFormatVersion**](../Model/LoggingFormatVersion.md) |  | [optional]
**name** | **String** | The name for the real-time logging configuration. | [optional]
**placement** | [**LoggingPlacement**](../Model/LoggingPlacement.md) |  | [optional]
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional]
**tls_ca_cert** | **String** | A secure certificate to authenticate a server with. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_cert** | **String** | The client certificate used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_client_key** | **String** | The client private key used to make authenticated requests. Must be in PEM format. | [optional] [default to &#39;null&#39;]
**tls_hostname** | **String** | The hostname to verify the server&#39;s certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported. | [optional] [default to &#39;null&#39;]
**request_max_bytes** | **Number** | The maximum number of bytes sent in one request. Defaults &#x60;0&#x60; for unbounded. | [optional] [default to 0]
**request_max_entries** | **Number** | The maximum number of logs sent in one request. Defaults &#x60;0&#x60; for unbounded. | [optional] [default to 0]
**index** | **String** | The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch [index format rules](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support [strftime](https://www.man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, &#x60;#{%F}&#x60; will interpolate as &#x60;YYYY-MM-DD&#x60; with today&#39;s date. | [optional]
**password** | **String** | Basic Auth password. | [optional]
**pipeline** | **String** | The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. Learn more about creating a pipeline in the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html). | [optional]
**url** | **String** | The URL to stream logs to. Must use HTTPS. | [optional]
**user** | **String** | Basic Auth username. | [optional]

### Return type

[**LoggingElasticsearchResponse**](LoggingElasticsearchResponse.md)


[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to README]](../../README.md)
