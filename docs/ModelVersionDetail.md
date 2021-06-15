# FastlyApi.ModelVersionDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backends** | [**[SchemasModelBackend]**](SchemasModelBackend.md) | List of backends associated to this service. | [optional] 
**cache_settings** | [**[ModelCacheSettings]**](ModelCacheSettings.md) | List of cache settings associated to this service. | [optional] 
**conditions** | [**[ModelCondition]**](ModelCondition.md) | List of conditions associated to this service. | [optional] 
**directors** | [**[ModelDirector]**](ModelDirector.md) | List of directors associated to this service. | [optional] 
**domains** | [**[ModelDomain]**](ModelDomain.md) | List of domains associated to this service. | [optional] 
**gzips** | [**[SchemasModelGzip]**](SchemasModelGzip.md) | List of gzip rules associated to this service. | [optional] 
**headers** | [**[ModelHeader]**](ModelHeader.md) | List of headers associated to this service. | [optional] 
**healthchecks** | [**[ModelHealthcheck]**](ModelHealthcheck.md) | List of healthchecks associated to this service. | [optional] 
**request_settings** | [**[SchemasModelRequestSettings]**](SchemasModelRequestSettings.md) | List of request settings for this service. | [optional] 
**response_objects** | [**[ModelResponseObject]**](ModelResponseObject.md) | List of response objects for this service. | [optional] 
**settings** | [**[SchemasModelSettings]**](SchemasModelSettings.md) | List of default settings for this service. | [optional] 
**snippets** | [**[SchemasModelSnippet]**](SchemasModelSnippet.md) | List of VCL snippets for this service. | [optional] 
**vcls** | [**[SchemasModelVcl]**](SchemasModelVcl.md) | List of VCL files for this service. | [optional] 
**wordpress** | **[Object]** | A list of Wordpress rules with this service. | [optional] 


