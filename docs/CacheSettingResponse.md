# FastlyApi.CacheSettingResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **String** | If set, will cause vcl_fetch to terminate after processing this rule with the return state specified. If not set, other configuration logic in vcl_fetch with a lower priority will run after this rule.  | [optional] 
**cache_condition** | **String** | Name of the cache condition controlling when this configuration applies. | [optional] 
**name** | **String** | Name for the cache settings object. | [optional] 
**stale_ttl** | **Number** | Maximum time in seconds to continue to use a stale version of the object if future requests to your backend server fail (also known as &#39;stale if error&#39;). | [optional] 
**ttl** | **Number** | Maximum time to consider the object fresh in the cache (the cache &#39;time to live&#39;). | [optional] 
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 



## Enum: ActionEnum


* `pass` (value: `"pass"`)

* `deliver` (value: `"deliver"`)

* `restart` (value: `"restart"`)





[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
