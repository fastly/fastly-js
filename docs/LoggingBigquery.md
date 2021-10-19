# Fastly.LoggingBigquery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **String** | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table. | [optional] 
**format_version** | [**LoggingFormatVersion**](LoggingFormatVersion.md) |  | [optional] 
**name** | **String** | The name of the BigQuery logging object. Used as a primary key for API access. | [optional] 
**placement** | [**LoggingPlacement**](LoggingPlacement.md) |  | [optional] 
**response_condition** | **String** | The name of an existing condition in the configured endpoint, or leave blank to always execute. | [optional] 
**secret_key** | **String** | Your Google Cloud Platform account secret key. The &#x60;private_key&#x60; field in your service account authentication JSON. Required. | [optional] 
**user** | **String** | Your Google Cloud Platform service account email address. The &#x60;client_email&#x60; field in your service account authentication JSON. Required. | [optional] 
**dataset** | **String** | Your BigQuery dataset. | [optional] 
**project_id** | **String** | Your Google Cloud Platform project ID. Required | [optional] 
**table** | **String** | Your BigQuery table. | [optional] 
**template_suffix** | **String** | BigQuery table name suffix template. Optional. | [optional] 



[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
