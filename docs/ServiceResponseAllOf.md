# Fastly.ServiceResponseAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**paused** | **Boolean** | Whether the service is paused. Services are paused due to a lack of traffic for an extended period of time. Services are resumed either when a draft version is activated or a locked version is cloned and reactivated. | [optional] 
**publish_key** | **String** | Unused at this time. | [optional] 
**version** | **Number** | Current [version](/reference/api/services/version/) of the service. | [optional] 
**versions** | [**[VersionResponse]**](VersionResponse.md) | A list of [versions](/reference/api/services/version/) associated with the service. | [optional] 



[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
