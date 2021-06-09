# Customer.InlineResponse200

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deletedAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updatedAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**login** | **String** | The login associated with the user (typically, an email address). | [optional] 
**name** | **String** | The real life name of the user. | [optional] 
**customerId** | **String** | Alphanumeric string identifying the customer. | [optional] 
**emailHash** | **String** | The alphanumeric string identifying a email login. | [optional] 
**id** | **String** | Alphanumeric string identifying the user. | [optional] 
**limitServices** | **Boolean** | Indicates that the user has limited access to the customer&#39;s services. | [optional] 
**locked** | **Boolean** | Indicates whether the is account is locked for editing or not. | [optional] 
**requireNewPassword** | **Boolean** | Indicates if a new password is required at next login. | [optional] 
**role** | **String** | The permissions role assigned to the user. Can be &#x60;user&#x60;, &#x60;billing&#x60;, &#x60;engineer&#x60;, or &#x60;superuser&#x60;. | [optional] 
**twoFactorAuthEnabled** | **Boolean** | Indicates if 2FA is enabled on the user. | [optional] 
**twoFactorSetupRequired** | **Boolean** | Indicates if 2FA is required by the user&#39;s customer account. | [optional] 



## Enum: RoleEnum


* `user` (value: `"user"`)

* `billing` (value: `"billing"`)

* `engineer` (value: `"engineer"`)

* `superuser` (value: `"superuser"`)




