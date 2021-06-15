# FastlyApi.NestedModelVersion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] 
**active** | **Boolean** | Whether this is the active version or not. | [optional] [default to false]
**comment** | **String** | A freeform descriptive note. | [optional] [default to &#39;&#39;]
**deployed** | **Boolean** | Unused at this time. | [optional] 
**locked** | **Boolean** | Whether this version is locked or not. Objects can not be added or edited on locked versions. | [optional] [default to false]
**number** | **Number** | The number of this version. | [optional] [readonly] 
**staging** | **Boolean** | Unused at this time. | [optional] [default to false]
**testing** | **Boolean** | Unused at this time. | [optional] [default to false]
**backends** | [**[SchemasModelBackend]**](SchemasModelBackend.md) | List of backends associated to this service. | [optional] 
**cache_settings** | [**[ModelCacheSettings]**](ModelCacheSettings.md) | List of cache settings associated to this service. | [optional] 
**conditions** | [**[ModelCondition]**](ModelCondition.md) | List of conditions associated to this service. | [optional] 
**directors** | [**[ModelDirector]**](ModelDirector.md) | List of directors associated to this service. | [optional] 
**domains** | [**[ModelDomain]**](ModelDomain.md) | List of domains associated to this service. | [optional] 
**gzips** | [**[ModelGzip]**](ModelGzip.md) | List of gzip rules associated to this service. | [optional] 
**headers** | [**[SchemasModelHeader]**](SchemasModelHeader.md) | List of headers associated to this service. | [optional] 
**healthchecks** | [**[ModelHealthcheck]**](ModelHealthcheck.md) | List of healthchecks associated to this service. | [optional] 
**request_settings** | [**[ModelRequestSettings]**](ModelRequestSettings.md) | List of request settings for this service. | [optional] 
**response_objects** | [**[ModelResponseObject]**](ModelResponseObject.md) | List of response objects for this service. | [optional] 
**settings** | [**[SchemasModelSettings]**](SchemasModelSettings.md) | List of default settings for this service. | [optional] 
**snippets** | [**[SchemasModelSnippet]**](SchemasModelSnippet.md) | List of VCL snippets for this service. | [optional] 
**vcls** | [**[SchemasModelVcl]**](SchemasModelVcl.md) | List of VCL files for this service. | [optional] 
**wordpress** | **[Object]** | A list of Wordpress rules with this service. | [optional] 


