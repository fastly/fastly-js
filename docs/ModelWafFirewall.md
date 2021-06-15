# FastlyApi.ModelWafFirewall

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_rules_fastly_block_count** | **Number** | The number of active Fastly rules set to block on the active or latest firewall version. | [optional] [readonly] 
**active_rules_fastly_log_count** | **Number** | The number of active Fastly rules set to log on the active or latest firewall version. | [optional] [readonly] 
**active_rules_fastly_score_count** | **Number** | The number of active Fastly rules set to score on the active or latest firewall version. | [optional] [readonly] 
**active_rules_owasp_block_count** | **Number** | The number of active OWASP rules set to block on the active or latest firewall version. | [optional] [readonly] 
**active_rules_owasp_log_count** | **Number** | The number of active OWASP rules set to log on the active or latest firewall version. | [optional] [readonly] 
**active_rules_owasp_score_count** | **Number** | The number of active OWASP rules set to score on the active or latest firewall version. | [optional] [readonly] 
**active_rules_trustwave_block_count** | **Number** | The number of active Trustwave rules set to block on the active or latest firewall version. | [optional] [readonly] 
**active_rules_trustwave_log_count** | **Number** | The number of active Trustwave rules set to log on the active or latest firewall version. | [optional] [readonly] 
**created_at** | **String** | Time-stamp (GMT) when the firewall was created. | [optional] [readonly] 
**disabled** | **Boolean** | The status of the firewall. | [optional] [default to false]
**prefetch_condition** | **String** | Name of the corresponding condition object. | [optional] 
**response** | **String** | Name of the corresponding response object. | [optional] 
**service_id** | **String** |  | [optional] 
**service_version_number** | **Number** |  | [optional] 
**updated_at** | **String** | Time-stamp (GMT) when the firewall was last updated. | [optional] [readonly] 


