# Fastly.LoggingElasticsearchAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **Object** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Elasticsearch can ingest. | [optional] 
**index** | **String** | The name of the Elasticsearch index to send documents (logs) to. The index must follow the Elasticsearch [index format rules](https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html). We support [strftime](https://www.man7.org/linux/man-pages/man3/strftime.3.html) interpolated variables inside braces prefixed with a pound symbol. For example, &#x60;#{%F}&#x60; will interpolate as &#x60;YYYY-MM-DD&#x60; with today&#39;s date. | [optional] 
**password** | **String** | Basic Auth password. | [optional] 
**pipeline** | **String** | The ID of the Elasticsearch ingest pipeline to apply pre-process transformations to before indexing. Learn more about creating a pipeline in the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/ingest.html). | [optional] 
**url** | **String** | The URL to stream logs to. Must use HTTPS. | [optional] 
**user** | **String** | Basic Auth username. | [optional] 



[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
