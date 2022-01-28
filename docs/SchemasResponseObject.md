# Fastly.SchemasResponseObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_condition** | **String** | Name of the cache condition controlling when this configuration applies. | [optional] 
**content** | **String** | The content to deliver for the response object, can be empty. | [optional] 
**content_type** | **String** | The MIME type of the content, can be empty. | [optional] 
**name** | **String** | Name for the request settings. | [optional] 
**status** | **Number** | The HTTP status code. | [optional]  [defaults to 200]
**response** | **String** | The HTTP response. | [optional]  [defaults to 'Ok']
**request_condition** | **String** | Condition which, if met, will select this configuration during a request. Optional. | [optional] 


[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
