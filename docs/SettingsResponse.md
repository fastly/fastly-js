# Fastly.SettingsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**general_default_host** | **String** | The default host name for the version. | [optional] 
**general_default_ttl** | **Number** | The default time-to-live (TTL) for the version. | [optional] 
**general_stale_if_error** | **Boolean** | Enables serving a stale object if there is an error. | [optional] [default to false]
**general_stale_if_error_ttl** | **Number** | The default time-to-live (TTL) for serving the stale object for the version. | [optional] [default to 43200]
**service_id** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 



[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
