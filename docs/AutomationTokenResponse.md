# Fastly.AutomationTokenResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the token. | [optional] 
**role** | **String** |  | [optional] 
**services** | **[String]** | (Optional) The service IDs of the services the token will have access to. Separate service IDs with a space. If no services are specified, the token will have access to all services on the account.  | [optional] 
**scope** | **String** | A space-delimited list of authorization scope. | [optional]  [one of: "global", "purge_select", "purge_all", "global:read"]
**expires_at** | **String** | (optional) A UTC time-stamp of when the token will expire. | [optional] 
**created_at** | **String** | A UTC time-stamp of when the token was created. | [optional] 
**deleted_at** | **Date** | Date and time in ISO 8601 format. | [optional] [readonly] 
**updated_at** | **Date** | Date and time in ISO 8601 format. | [optional] [readonly] 
**id** | [**ReadOnlyId**](ReadOnlyId.md) |  | [optional] 
**customer_id** | [**ReadOnlyCustomerId**](ReadOnlyCustomerId.md) |  | [optional] 
**ip** | **String** | The IP address of the client that last used the token. | [optional] 
**user_agent** | **String** | The User-Agent header of the client that last used the token. | [optional] 
**sudo_expires_at** | **String** |  | [optional] [readonly] 
**last_used_at** | **Date** | A UTC time-stamp of when the token was last used. | [optional] [readonly] 


[[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
