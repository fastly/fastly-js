# Fastly.LoggingElasticsearchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **Object** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Elasticsearch can ingest. | [optional] 
**format_version** | **Number** | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in &#x60;vcl_log&#x60; if &#x60;format_version&#x60; is set to &#x60;2&#x60; and in &#x60;vcl_deliver&#x60; if &#x60;format_version&#x60; is set to &#x60;1&#x60;.   | [optional] [default to FormatVersionEnum.v2]
**name** | **String** | The name for the real-time logging configuration. | [optional] 
**placement** | **String** | Where in the generated VCL the logging call should be placed. If not set, endpoints with &#x60;format_version&#x60; of 2 are placed in &#x60;vcl_log&#x60; and those with &#x60;format_version&#x60; of 1 are placed in &#x60;vcl_deliver&#x60;.  | [optional] 
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
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 



## Enum: FormatVersionEnum


* `v1` (value: `1`)

* `v2` (value: `2`)





## Enum: PlacementEnum


* `none` (value: `"none"`)

* `waf_debug` (value: `"waf_debug"`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
