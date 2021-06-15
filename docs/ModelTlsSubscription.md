# FastlyApi.ModelTlsSubscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_authority** | **String** | The entity that issues and certifies the TLS certificates for your subscription. Valid values are &#x60;lets-encrypt&#x60; or &#x60;globalsign&#x60;. | [optional] 
**created_at** | **String** | Time-stamp (GMT) when the subscription was created. | [optional] [readonly] 
**force** | **Boolean** | A query parameter flag that allows you to edit and delete a subscription with active domains. To use, add &#x60;?force&#x3D;true&#x60; to the end of your request. Valid to use on PATCH and DELETE actions. As a warning, removing an active domain from a subscription or forcing the deletion of a subscription may result in breaking TLS termination to that domain. | [optional] 
**state** | **String** | The current state of your subscription. The list of possible states are: &#x60;pending&#x60;, &#x60;processing&#x60;, &#x60;issued&#x60;, and &#x60;renewing&#x60;.  | [optional] [readonly] 
**updated_at** | **String** | Time-stamp (GMT) when the subscription was last updated. | [optional] [readonly] 


