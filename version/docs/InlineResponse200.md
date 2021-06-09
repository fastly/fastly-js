# Version.InlineResponse200

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deletedAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updatedAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**serviceId** | **String** | Alphanumeric string identifying the service. | [optional] 
**active** | **Boolean** | Whether this is the active version or not. | [optional] [default to false]
**comment** | **String** | A freeform descriptive note. | [optional] [default to &#39;&#39;]
**deployed** | **Boolean** | Unused at this time. | [optional] 
**locked** | **Boolean** | Whether this version is locked or not. Objects can not be added or edited on locked versions. | [optional] [default to false]
**number** | **Number** | The number of this version. | [optional] [readonly] 
**staging** | **Boolean** | Unused at this time. | [optional] [default to false]
**testing** | **Boolean** | Unused at this time. | [optional] [default to false]


