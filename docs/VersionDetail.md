# Fastly.VersionDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backends** | [**[ServiceIdAndVersion]**](ServiceIdAndVersion.md) | List of backends associated to this service. | [optional] 
**cache_settings** | [**[Timestamps]**](Timestamps.md) | List of cache settings associated to this service. | [optional] 
**conditions** | [**[Timestamps]**](Timestamps.md) | List of conditions associated to this service. | [optional] 
**directors** | [**[SchemasDirector]**](SchemasDirector.md) | List of directors associated to this service. | [optional] 
**domains** | [**[Timestamps]**](Timestamps.md) | List of domains associated to this service. | [optional] 
**gzips** | [**[Timestamps]**](Timestamps.md) | List of gzip rules associated to this service. | [optional] 
**headers** | [**[Timestamps]**](Timestamps.md) | List of headers associated to this service. | [optional] 
**healthchecks** | [**[Timestamps]**](Timestamps.md) | List of healthchecks associated to this service. | [optional] 
**request_settings** | [**[Timestamps]**](Timestamps.md) | List of request settings for this service. | [optional] 
**response_objects** | [**[Timestamps]**](Timestamps.md) | List of response objects for this service. | [optional] 
**settings** | [**Settings**](Settings.md) |  | [optional] 
**snippets** | [**[Timestamps]**](Timestamps.md) | List of VCL snippets for this service. | [optional] 
**vcls** | [**[Timestamps]**](Timestamps.md) | List of VCL files for this service. | [optional] 
**wordpress** | **[Object]** | A list of Wordpress rules with this service. | [optional] 



[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
