# FastlyApi.ModelResponseObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 
**cache_condition** | **String** | Name of the cache condition controlling when this configuration applies. | [optional] 
**content** | **String** | The content to deliver for the response object, can be empty. | [optional] 
**content_type** | **String** | The MIME type of the content, can be empty. | [optional] 
**name** | **String** | Name for the request settings. | [optional] 
**status** | **Number** | The HTTP status code. | [optional] [default to 200]
**response** | **String** | The HTTP response. | [optional] [default to &#39;Ok&#39;]
**request_condition** | **String** | Condition which, if met, will select this configuration during a request. Optional. | [optional] 


