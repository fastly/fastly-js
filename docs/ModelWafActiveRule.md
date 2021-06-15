# FastlyApi.ModelWafActiveRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**modsec_rule_id** | **Number** | The ModSecurity rule ID of the associated rule revision. | [optional] 
**latest_revision** | **Number** | The latest rule revision number that is available for the associated rule revision. | [optional] [readonly] 
**outdated** | **Boolean** | Indicates if the associated rule revision is up to date or not. | [optional] [readonly] 
**revision** | **Number** | Revision number. | [optional] 
**status** | **String** | Describes the behavior for the particular rule revision within this firewall version. | [optional] 



## Enum: StatusEnum


* `log` (value: `"log"`)

* `block` (value: `"block"`)

* `score` (value: `"score"`)




