# Fastly.SchemasUserResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit_services** | **Boolean** | Indicates that the user has limited access to the customer&#39;s services. | [optional] 
**locked** | **Boolean** | Indicates whether the is account is locked for editing or not. | [optional] 
**login** | **String** | The login associated with the user (typically, an email address). | [optional] 
**name** | **String** | The real life name of the user. | [optional] 
**require_new_password** | **Boolean** | Indicates if a new password is required at next login. | [optional] 
**role** | [**RoleUser**](RoleUser.md) |  | [optional] 
**two_factor_auth_enabled** | **Boolean** | Indicates if 2FA is enabled on the user. | [optional] 
**two_factor_setup_required** | **Boolean** | Indicates if 2FA is required by the user&#39;s customer account. | [optional] 
**created_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deleted_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**customer_id** | **String** | Alphanumeric string identifying the customer. | [optional] [readonly] 
**email_hash** | **String** | The alphanumeric string identifying a email login. | [optional] 
**id** | **String** | Alphanumeric string identifying the user. | [optional] [readonly] 



[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
