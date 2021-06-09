# Settings.InlineResponse200

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serviceId** | **String** | Alphanumeric string identifying the service. | [optional] [readonly] 
**version** | **Number** | Integer identifying a service version. | [optional] [readonly] 
**generalDefaultHost** | **String** | The default host name for the version. | [optional] 
**generalDefaultTtl** | **Number** | The default time-to-live (TTL) for the version. | [optional] 
**generalStaleIfError** | **Boolean** | Enables serving a stale object if there is an error. | [optional] [default to false]
**generalStaleIfErrorTtl** | **Number** | The default time-to-live (TTL) for serving the stale object for the version. | [optional] [default to 43200]


