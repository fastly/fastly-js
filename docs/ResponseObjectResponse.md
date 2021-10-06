# Fastly.ResponseObjectResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_condition** | **String** | Name of the cache condition controlling when this configuration applies. | [optional] 
**content** | **String** | The content to deliver for the response object, can be empty. | [optional] 
**content_type** | **String** | The MIME type of the content, can be empty. | [optional] 
**name** | **String** | Name for the request settings. | [optional] 
**request_condition** | **String** | Condition which, if met, will select this configuration during a request. Optional. | [optional] 
**response** | **String** | The HTTP response. | [optional] [default to &#39;Ok&#39;]
**status** | **Number** | The HTTP status code. | [optional] [default to 200]
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 



[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
