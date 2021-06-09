# Customer.ModelCustomer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**deletedAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updatedAt** | **String** | Date and time in ISO 8601 format. | [optional] [readonly] 
**billingContactId** | **String** | The alphanumeric string representing the primary billing contact. | [optional] 
**billingNetworkType** | **String** | Customer&#39;s current network revenue type. Can be &#x60;public&#x60; or &#x60;private&#x60;. | [optional] 
**billingRef** | **String** | Used for adding purchased orders to customer&#39;s account. | [optional] 
**canConfigureWordpress** | **Boolean** | Whether this customer can view or edit wordpress. | [optional] [readonly] 
**canResetPasswords** | **Boolean** | Whether this customer can reset passwords. | [optional] [readonly] 
**canUploadVcl** | **Boolean** | Whether this customer can upload VCL. | [optional] [readonly] 
**force2fa** | **Boolean** | Specifies whether 2FA is forced or not forced on the customer account. Logs out non-2FA users once 2FA is force enabled. | [optional] 
**forceSso** | **Boolean** | Specifies whether SSO is forced or not forced on the customer account. | [optional] 
**hasAccountPanel** | **Boolean** | Specifies whether the account has access or does not have access to the account panel. | [optional] 
**hasImprovedEvents** | **Boolean** | Specifies whether the account has access or does not have access to the improved events. | [optional] 
**hasImprovedSslConfig** | **Boolean** | Whether this customer can view or edit the SSL config. | [optional] [readonly] 
**hasOpenstackLogging** | **Boolean** | Specifies whether the account has enabled or not enabled openstack logging. | [optional] 
**hasPci** | **Boolean** | Specifies whether the account can edit PCI for a service. | [optional] 
**hasPciPasswords** | **Boolean** | Specifies whether PCI passwords are required for the account. | [optional] [readonly] 
**id** | **String** | Alphanumeric string identifying the customer. | [optional] 
**ipWhitelist** | **String** | The range of IP addresses authorized to access the customer account. | [optional] 
**legalContactId** | **String** | The alphanumeric string identifying the account&#39;s legal contact. | [optional] 
**name** | **String** | The name of the customer, generally the company name. | [optional] 
**ownerId** | **String** | The alphanumeric string identifying the account owner. | [optional] 
**phoneNumber** | **String** | The phone number associated with the account. | [optional] 
**postalAddress** | **String** | The postal address associated with the account. | [optional] 
**pricingPlan** | **String** | The pricing plan this customer is under. | [optional] 
**pricingPlanId** | **String** | The alphanumeric string identifying the pricing plan. | [optional] 
**securityContactId** | **String** | The alphanumeric string identifying the account&#39;s security contact. | [optional] 
**technicalContactId** | **String** | The alphanumeric string identifying the account&#39;s technical contact. | [optional] 



## Enum: BillingNetworkTypeEnum


* `public` (value: `"public"`)

* `private` (value: `"private"`)




