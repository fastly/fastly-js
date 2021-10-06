# Fastly.LoggingBigqueryAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | **String** | Your BigQuery dataset. | [optional] 
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table. | [optional] 
**name** | **String** | The name of the BigQuery logging object. Used as a primary key for API access. | [optional] 
**project_id** | **String** | Your Google Cloud Platform project ID. Required | [optional] 
**table** | **String** | Your BigQuery table. | [optional] 
**template_suffix** | **String** | BigQuery table name suffix template. Optional. | [optional] 



[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
