# FastlyApi.ModelTlsConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **String** | Time-stamp (GMT) when the configuration was created. | [optional] [readonly] 
**_default** | **Boolean** | Signifies whether or not Fastly will use this configuration as a default when creating a new [TLS Activation](/reference/api/tls/custom-certs/activations/). | [optional] [readonly] 
**http_protocols** | **[String]** | HTTP protocols available on your configuration. | [optional] [readonly] 
**name** | **String** | A custom name for your TLS configuration. | [optional] 
**relationships** | [**ModelTlsConfigurationRelationships**](ModelTlsConfigurationRelationships.md) |  | [optional] 
**tls_protocols** | **[Number]** | TLS protocols available on your configuration. | [optional] [readonly] 
**updated_at** | **String** | Time-stamp (GMT) when the configuration was last updated. | [optional] [readonly] 
**bulk** | **Boolean** | Signifies whether the configuration is used for Platform TLS or not. | [optional] [readonly] 


